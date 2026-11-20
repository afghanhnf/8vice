#!/usr/bin/env bash
set -euo pipefail

# 8vice Production Deployment Script for cPanel SSH
# Usage: bash deploy.sh [--seed] [--build]

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$APP_DIR"

RUN_SEED=false
RUN_BUILD=false
for arg in "$@"; do
  case "$arg" in
    --seed) RUN_SEED=true ;;
    --build) RUN_BUILD=true ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: bash deploy.sh [--seed] [--build]"
      exit 1
      ;;
  esac
done

echo "==> [1/7] Detecting PHP CLI (>= 8.3)..."
PHP_BIN=""
for candidate in \
  "$(command -v php || true)" \
  "/usr/local/bin/ea-php84" \
  "/usr/local/bin/ea-php83" \
  "/opt/cpanel/ea-php84/root/usr/bin/php" \
  "/opt/cpanel/ea-php83/root/usr/bin/php"
do
  if [ -n "$candidate" ] && [ -x "$candidate" ]; then
    if "$candidate" -r 'exit(version_compare(PHP_VERSION, "8.3.0", ">=") ? 0 : 1);' >/dev/null 2>&1; then
      PHP_BIN="$candidate"
      break
    fi
  fi
done

if [ -z "$PHP_BIN" ]; then
  echo "ERROR: PHP 8.3+ CLI not found. Set PHP_BIN manually."
  exit 1
fi
echo "    Using PHP: $PHP_BIN ($($PHP_BIN -r 'echo PHP_VERSION;'))"

echo "==> [2/7] Backing up .env and local SQLite (if present)..."
BACKUP_DIR="$APP_DIR/storage/app/deploy-backups"
mkdir -p "$BACKUP_DIR"
STAMP="$(date +%Y%m%d-%H%M%S)"
[ -f ".env" ] && cp ".env" "$BACKUP_DIR/.env.$STAMP"
[ -f "database/database.sqlite" ] && cp "database/database.sqlite" "$BACKUP_DIR/database.sqlite.$STAMP"

echo "==> [3/7] Pulling latest changes from origin/main..."
rm -f public/hot public/sitemap.xml public/sitemap-en.xml public/sitemap-id.xml public/sitemap-cn.xml public/robots.txt
if ! git pull origin main; then
  echo "    Standard git pull hit local changes; stashing server changes and pulling..."
  git stash push -u -m "auto-deploy-backup-$STAMP"
  git pull origin main
fi

echo "==> [4/7] Checking Composer dependencies..."
COMPOSER_BIN="$(command -v composer || true)"
if [ -n "$COMPOSER_BIN" ]; then
  "$PHP_BIN" "$COMPOSER_BIN" install --no-dev --optimize-autoloader --no-interaction || "$COMPOSER_BIN" install --no-dev --optimize-autoloader --no-interaction
elif [ -f "composer.phar" ]; then
  "$PHP_BIN" composer.phar install --no-dev --optimize-autoloader --no-interaction
else
  echo "    Composer binary not found in PATH; skipping (using existing vendor/)."
fi

if [ "$RUN_BUILD" = true ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "    Rebuilding frontend assets (--build)..."
    npm ci --legacy-peer-deps || npm install --legacy-peer-deps
    npm run build
    rm -f public/hot
  else
    echo "    npm not found; keeping prebuilt public/build assets from repo."
  fi
fi

echo "==> [5/7] Running database migrations..."
"$PHP_BIN" artisan migrate --force

if [ "$RUN_SEED" = true ]; then
  echo "==> Running full DatabaseSeeder (--seed)..."
  "$PHP_BIN" artisan db:seed --force
else
  echo "==> Syncing footer_description, PageSeo OG image, analytics/GSC & James He profile safely..."
  "$PHP_BIN" <<'PHP'
<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$s = \App\Helpers\SeedData::getSiteSettings();
$row = \App\Models\SiteSetting::first();
if ($row) {
    $updates = [];
    if (empty($row->footer_description)) {
        $updates['footer_description'] = $s->footer_description;
    }
    if (empty($row->google_tag_manager) || $row->google_tag_manager === 'GTM-XXXXXXX') {
        $updates['google_tag_manager'] = $s->google_tag_manager;
    }
    if ($row->google_analytics === 'G-1234567890') {
        $updates['google_analytics'] = null;
    }
    if (empty($row->google_search_console) || str_contains((string) $row->google_search_console, '1234567890')) {
        $updates['google_search_console'] = $s->google_search_console;
    }
    if (!empty($updates)) {
        $row->update($updates);
    }
}

\App\Models\PageSeo::where('page_code', 'industries')
    ->where('og_image', 'images/industry_manufacturing.webp')
    ->update(['og_image' => 'images/industry_infrastructure.webp']);

// Non-destructive sync: populate new CMS fields & PageContent rows ONLY when missing so Admin Panel edits are preserved
foreach (\App\Helpers\PageContentDefaults::all() as $code => $item) {
    \App\Models\PageContent::firstOrCreate(
        ['page_code' => $code],
        [
            'page_name' => $item['page_name'],
            'content' => $item['content'],
        ]
    );
}

$profiles = \App\Helpers\SeedData::getProfiles();
foreach ($profiles as $idx => $seedProfile) {
    $existing = \App\Models\Profile::where('call_name', $seedProfile->call_name)->first();
    if ($existing) {
        $updates = [];
        if (empty($existing->chinese_name) && !empty($seedProfile->chinese_name)) {
            $updates['chinese_name'] = $seedProfile->chinese_name;
        }
        if (empty($existing->expertise)) {
            $updates['expertise'] = $seedProfile->expertise;
        }
        if (empty($existing->experiences)) {
            $updates['experiences'] = $seedProfile->experiences;
        }
        if (!empty($updates)) {
            $existing->update($updates);
        }
    } else {
        \App\Models\Profile::create([
            'call_name' => $seedProfile->call_name,
            'full_title' => $seedProfile->full_title ?? $seedProfile->title,
            'chinese_name' => $seedProfile->chinese_name ?? '',
            'title' => ['en' => $seedProfile->title, 'id' => $seedProfile->title, 'cn' => $seedProfile->title],
            'role' => $seedProfile->role,
            'expertise' => $seedProfile->expertise,
            'short_bio' => $seedProfile->short_bio,
            'experiences' => $seedProfile->experiences,
            'focus_tags' => $seedProfile->focus_tags,
            'socials' => $seedProfile->socials,
            'quote_title' => $seedProfile->quote_title,
            'quote_message' => $seedProfile->quote_message,
            'description' => [
                'en' => ($seedProfile->role['en'] ?? '') . "\n\n" . ($seedProfile->short_bio['en'] ?? ''),
                'id' => ($seedProfile->role['id'] ?? '') . "\n\n" . ($seedProfile->short_bio['id'] ?? ''),
                'cn' => ($seedProfile->role['cn'] ?? '') . "\n\n" . ($seedProfile->short_bio['cn'] ?? ''),
            ],
            'image' => $seedProfile->image,
            'sort_order' => $idx + 1,
        ]);
    }
}
PHP
fi

echo "==> [6/7] Ensuring storage directories, permissions & symlinks..."
mkdir -p storage/framework/{sessions,views,cache} storage/logs bootstrap/cache
chmod -R 775 storage bootstrap/cache
"$PHP_BIN" artisan storage:link || true

echo "==> [7/7] Refreshing Laravel caches..."
rm -f storage/framework/views/*.php
"$PHP_BIN" artisan optimize:clear
"$PHP_BIN" artisan config:cache
"$PHP_BIN" artisan route:cache || echo "    Skipped route:cache (closure routes active)"
"$PHP_BIN" artisan view:cache

echo ""
echo "=========================================="
echo " Deployment Complete!"
echo " Commit: $(git log -1 --oneline)"
echo "=========================================="
