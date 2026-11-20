<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use App\Models\Profile;
use App\Models\PageContent;
use App\Helpers\SeedData;
use App\Helpers\PageContentDefaults;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('profiles')) {
            foreach (SeedData::getProfiles() as $idx => $seedProfile) {
                $existing = Profile::where('call_name', $seedProfile->call_name)->first();
                $quoteMsg = [];
                foreach (['en', 'id', 'cn'] as $loc) {
                    $val = $seedProfile->quote_message[$loc] ?? '';
                    $quoteMsg[$loc] = is_array($val) ? implode("\n\n", $val) : (string) $val;
                }

                $payload = [
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
                    'quote_message' => $quoteMsg,
                    'description' => [
                        'en' => ($seedProfile->role['en'] ?? '') . "\n\n" . ($seedProfile->short_bio['en'] ?? ''),
                        'id' => ($seedProfile->role['id'] ?? '') . "\n\n" . ($seedProfile->short_bio['id'] ?? ''),
                        'cn' => ($seedProfile->role['cn'] ?? '') . "\n\n" . ($seedProfile->short_bio['cn'] ?? ''),
                    ],
                    'image' => $seedProfile->image,
                    'sort_order' => $idx + 1,
                ];

                if ($existing) {
                    $existing->update($payload);
                } else {
                    Profile::create($payload);
                }
            }
        }

        if (Schema::hasTable('page_contents')) {
            foreach (PageContentDefaults::all() as $code => $item) {
                PageContent::firstOrCreate(
                    ['page_code' => $code],
                    [
                        'page_name' => $item['page_name'],
                        'content' => $item['content'],
                    ]
                );
            }
        }
    }

    public function down(): void
    {
        // Data sync migration; no destructive rollback
    }
};
