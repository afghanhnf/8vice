<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;
use Illuminate\Support\Facades\File;

class MediaLibrary extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'alt_text' => 'array',
        'caption' => 'array',
    ];

    /**
     * Get the full public URL of the image.
     */
    public function getUrlAttribute(): string
    {
        if (!$this->file_path) {
            return asset('images/og-default.webp');
        }

        if (str_starts_with($this->file_path, 'http://') || str_starts_with($this->file_path, 'https://')) {
            return $this->file_path;
        }

        if (str_starts_with($this->file_path, 'images/') || str_starts_with($this->file_path, 'storage/')) {
            return asset($this->file_path);
        }

        return asset('storage/' . $this->file_path);
    }

    /**
     * Sync and update the linked model record if an image is replaced.
     */
    public function syncToLinkedModel(string $newFilePath): void
    {
        if ($this->model_type && $this->model_id && $this->model_field && class_exists($this->model_type)) {
            try {
                $model = $this->model_type::find($this->model_id);
                if ($model) {
                    $model->update([
                        $this->model_field => $newFilePath,
                    ]);
                }
            } catch (\Throwable $e) {
                // Silently ignore if model no longer exists
            }
        }
    }

    /**
     * Scan and catalog all images from database models and public directories.
     */
    public static function syncAllImages(): int
    {
        $count = 0;

        // 1. Page SEO OG Images
        foreach (PageSeo::all() as $seo) {
            if ($seo->og_image) {
                self::catalogImage([
                    'title' => 'SEO OG Image: ' . ($seo->page_display_name ?: $seo->page_code),
                    'file_path' => $seo->og_image,
                    'category' => 'SEO & OG Banners',
                    'model_type' => PageSeo::class,
                    'model_id' => $seo->id,
                    'model_field' => 'og_image',
                    'alt_text' => [
                        'en' => ($seo->meta_title['en'] ?? $seo->page_display_name) . ' OpenGraph Banner',
                        'id' => ($seo->meta_title['id'] ?? $seo->page_display_name) . ' Banner Pratinjau',
                    ],
                ]);
                $count++;
            }
        }

        // 2. Articles / Insights Covers
        foreach (Insight::all() as $art) {
            if ($art->cover) {
                $titleEn = is_array($art->t) ? ($art->t['en'] ?? reset($art->t)) : $art->t;
                $titleId = is_array($art->t) ? ($art->t['id'] ?? reset($art->t)) : $art->t;
                self::catalogImage([
                    'title' => 'Article Cover: ' . ($titleEn ?: 'Insight #' . $art->id),
                    'file_path' => $art->cover,
                    'category' => 'Article Covers',
                    'model_type' => Insight::class,
                    'model_id' => $art->id,
                    'model_field' => 'cover',
                    'alt_text' => [
                        'en' => $titleEn . ' cover thumbnail',
                        'id' => $titleId . ' gambar sampul artikel',
                    ],
                ]);
                $count++;
            }
        }

        // 3. Hero Banners
        if (class_exists(HeroBanner::class)) {
            foreach (HeroBanner::all() as $hero) {
                if ($hero->image) {
                    $heroTitle = is_array($hero->title) ? ($hero->title['en'] ?? reset($hero->title)) : $hero->title;
                    self::catalogImage([
                        'title' => 'Hero Banner: ' . ($heroTitle ?: 'Banner #' . $hero->id),
                        'file_path' => $hero->image,
                        'category' => 'Hero & Banners',
                        'model_type' => HeroBanner::class,
                        'model_id' => $hero->id,
                        'model_field' => 'image',
                        'alt_text' => [
                            'en' => 'Hero visual banner for ' . ($heroTitle ?: '8vice consultancy'),
                            'id' => 'Visual hero banner ' . ($heroTitle ?: '8vice konsultasi'),
                        ],
                    ]);
                    $count++;
                }
            }
        }

        // 4. Case Studies
        if (class_exists(CaseStudy::class)) {
            foreach (CaseStudy::all() as $case) {
                $img = $case->cover ?? $case->image ?? null;
                if ($img) {
                    $caseTitle = is_array($case->t) ? ($case->t['en'] ?? reset($case->t)) : $case->t;
                    self::catalogImage([
                        'title' => 'Case Study: ' . ($caseTitle ?: 'Case #' . $case->id),
                        'file_path' => $img,
                        'category' => 'Case Studies',
                        'model_type' => CaseStudy::class,
                        'model_id' => $case->id,
                        'model_field' => isset($case->cover) ? 'cover' : 'image',
                        'alt_text' => [
                            'en' => 'Case study cover ' . $caseTitle,
                            'id' => 'Sampul studi kasus ' . $caseTitle,
                        ],
                    ]);
                    $count++;
                }
            }
        }

        // 5. Client Logos
        if (class_exists(Client::class)) {
            foreach (Client::all() as $client) {
                if ($client->image) {
                    self::catalogImage([
                        'title' => 'Client Logo: ' . ($client->name ?? 'Partner #' . $client->id),
                        'file_path' => $client->image,
                        'category' => 'Client Logos',
                        'model_type' => Client::class,
                        'model_id' => $client->id,
                        'model_field' => 'image',
                        'alt_text' => [
                            'en' => ($client->name ?? 'Client') . ' official logo',
                            'id' => 'Logo resmi ' . ($client->name ?? 'Klien'),
                        ],
                    ]);
                    $count++;
                }
            }
        }

        // 6. Profiles & Team
        if (class_exists(Profile::class)) {
            foreach (Profile::all() as $profile) {
                if ($profile->image) {
                    self::catalogImage([
                        'title' => 'Team Profile: ' . ($profile->name ?? 'Member #' . $profile->id),
                        'file_path' => $profile->image,
                        'category' => 'Team Profiles',
                        'model_type' => Profile::class,
                        'model_id' => $profile->id,
                        'model_field' => 'image',
                        'alt_text' => [
                            'en' => ($profile->name ?? 'Team Member') . ' photo portrait',
                            'id' => 'Foto profil ' . ($profile->name ?? 'Anggota Tim'),
                        ],
                    ]);
                    $count++;
                }
            }
        }

        // 7. Site Settings Default Fallback OG Image & Logo
        $setting = SiteSetting::first();
        if ($setting && $setting->default_og_image) {
            self::catalogImage([
                'title' => 'Site Setting: Default Fallback OG Banner',
                'file_path' => $setting->default_og_image,
                'category' => 'SEO & OG Banners',
                'model_type' => SiteSetting::class,
                'model_id' => $setting->id,
                'model_field' => 'default_og_image',
                'alt_text' => [
                    'en' => '8vice default social share preview banner',
                    'id' => 'Banner default share media sosial 8vice',
                ],
            ]);
            $count++;
        }

        return $count;
    }

    /**
     * Inspect file dimensions, size, and save catalog entry.
     */
    public static function catalogImage(array $data): self
    {
        $filePath = $data['file_path'];
        $fullSystemPath = public_path($filePath);

        $fileSize = 'Unknown';
        $dimensions = 'Unknown';
        $fileName = basename($filePath);
        $mimeType = 'image/webp';

        if (File::exists($fullSystemPath)) {
            $bytes = File::size($fullSystemPath);
            $fileSize = self::formatBytes($bytes);
            $imgInfo = @getimagesize($fullSystemPath);
            if ($imgInfo) {
                $dimensions = "{$imgInfo[0]} × {$imgInfo[1]} px";
                $mimeType = $imgInfo['mime'] ?? 'image/webp';
            }
        }

        return self::updateOrCreate(
            [
                'model_type' => $data['model_type'] ?? null,
                'model_id' => $data['model_id'] ?? null,
                'model_field' => $data['model_field'] ?? null,
                'file_path' => $filePath,
            ],
            [
                'title' => $data['title'],
                'file_name' => $fileName,
                'file_size' => $fileSize,
                'dimensions' => $dimensions,
                'mime_type' => $mimeType,
                'category' => $data['category'] ?? 'Site Assets',
                'alt_text' => $data['alt_text'] ?? [
                    'en' => $data['title'],
                    'id' => $data['title'],
                ],
            ]
        );
    }

    public static function formatBytes(int $bytes): string
    {
        if ($bytes >= 1048576) {
            return number_format($bytes / 1048576, 2) . ' MB';
        }
        if ($bytes >= 1024) {
            return number_format($bytes / 1024, 1) . ' KB';
        }
        return $bytes . ' B';
    }
}
