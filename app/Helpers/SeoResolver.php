<?php

namespace App\Helpers;

use App\Http\Controllers\SitemapController;

class SeoResolver
{
    /**
     * Resolve SSR SEO metadata from Inertia $page props and the current request.
     */
    public static function resolve(array $page = []): array
    {
        $props = $page['props'] ?? [];
        $component = (string) ($page['component'] ?? '');
        $locale = (string) ($props['locale'] ?? app()->getLocale() ?: 'en');
        if (!in_array($locale, ['en', 'id', 'cn'], true)) {
            $locale = 'en';
        }

        $baseUrl = rtrim((string) ($props['appUrl'] ?? SitemapController::getBaseUrl()), '/');
        $path = '/' . ltrim(request()?->getPathInfo() ?: '/', '/');
        $cleanPath = preg_replace('#^/(id|cn)(?=/|$)#', '', $path) ?: '/';
        $cleanPath = $cleanPath === '' ? '/' : $cleanPath;

        $currentUrl = $path === '/' ? "{$baseUrl}/" : "{$baseUrl}{$path}";
        $enUrl = $cleanPath === '/' ? "{$baseUrl}/" : "{$baseUrl}{$cleanPath}";
        $idUrl = $cleanPath === '/' ? "{$baseUrl}/id" : "{$baseUrl}/id{$cleanPath}";
        $cnUrl = $cleanPath === '/' ? "{$baseUrl}/cn" : "{$baseUrl}/cn{$cleanPath}";

        $siteSettings = self::toArray($props['siteSettings'] ?? []);
        $pageSeos = self::toArray($props['pageSeos'] ?? []);

        $pageCode = self::mapComponentToPageCode($component);
        $cmsSeo = $pageCode && isset($pageSeos[$pageCode]) ? self::toArray($pageSeos[$pageCode]) : [];

        $insight = !empty($props['insight']) ? self::toArray($props['insight']) : null;
        $caseStudy = !empty($props['caseStudy']) ? self::toArray($props['caseStudy']) : null;
        $service = !empty($props['service']) ? self::toArray($props['service']) : null;

        // 1. Resolve Title
        $title = '';
        $ogType = $cmsSeo['og_type'] ?? 'website';

        if ($insight) {
            $t = self::pickLoc($insight['t_i18n'] ?? $insight['t'] ?? $insight['title'] ?? '', $locale);
            if ($t !== '') {
                $title = (str_contains($t, '8vice') || str_contains($t, '8 Vice')) ? $t : "{$t} | 8vice";
            }
            $ogType = 'article';
        } elseif ($caseStudy) {
            $t = self::pickLoc($caseStudy['h_i18n'] ?? $caseStudy['h'] ?? $caseStudy['title'] ?? '', $locale);
            if ($t !== '') {
                $title = (str_contains($t, '8vice') || str_contains($t, '8 Vice')) ? $t : "{$t} | 8vice Case Study";
            }
            $ogType = 'article';
        } elseif ($service) {
            $t = self::pickLoc($service['title_i18n'] ?? $service['title'] ?? '', $locale);
            if ($t !== '') {
                $title = (str_contains($t, '8vice') || str_contains($t, '8 Vice')) ? $t : "{$t} | 8vice";
            }
        }

        if ($title === '' && !empty($cmsSeo)) {
            $title = self::pickLoc($cmsSeo['meta_title_i18n'] ?? $cmsSeo['meta_title'] ?? '', $locale);
        }
        if ($title === '' && !empty($siteSettings)) {
            $title = self::pickLoc($siteSettings['default_meta_title_i18n'] ?? $siteSettings['default_meta_title'] ?? '', $locale);
        }
        if ($title === '') {
            $title = match ($locale) {
                'cn' => '8vice | 通往印尼与中国的战略商业门户',
                'id' => '8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia',
                default => '8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises',
            };
        }

        // 2. Resolve Description
        $description = '';
        if ($insight) {
            $rawDesc = self::pickLoc($insight['excerpt_i18n'] ?? $insight['excerpt'] ?? $insight['description'] ?? '', $locale);
            if ($rawDesc === '' && !empty($insight['body'])) {
                $bodyVal = $insight['body_i18n'][$locale] ?? $insight['body'] ?? '';
                if (is_array($bodyVal)) {
                    $rawDesc = implode(' ', array_map(fn ($b) => (string) ($b['text'] ?? ''), $bodyVal));
                } else {
                    $rawDesc = (string) $bodyVal;
                }
            }
            $description = self::cleanExcerpt($rawDesc, 160);
        } elseif ($caseStudy) {
            $rawDesc = self::pickLoc($caseStudy['p_i18n'] ?? $caseStudy['p'] ?? $caseStudy['description'] ?? $caseStudy['summary'] ?? '', $locale);
            $description = self::cleanExcerpt($rawDesc, 160);
        } elseif ($service) {
            $rawDesc = self::pickLoc($service['description_i18n'] ?? $service['description'] ?? $service['summary'] ?? '', $locale);
            $description = self::cleanExcerpt($rawDesc, 160);
        }

        if ($description === '' && !empty($cmsSeo)) {
            $description = self::pickLoc($cmsSeo['meta_description_i18n'] ?? $cmsSeo['meta_description'] ?? '', $locale);
        }
        if ($description === '' && !empty($siteSettings)) {
            $description = self::pickLoc($siteSettings['default_meta_description_i18n'] ?? $siteSettings['default_meta_description'] ?? '', $locale);
        }
        if ($description === '') {
            $description = match ($locale) {
                'cn' => '8vice 助力中国与跨国企业无缝进入印尼市场，提供战略咨询、市场准入、政府关系、商业配对与品牌本土化落地服务。',
                'id' => '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.',
                default => '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.',
            };
        }

        // 3. Resolve Image (prefer existing files; default to /images/og-default.webp)
        $rawImage = '';
        if ($insight && (!empty($insight['cover']) || !empty($insight['image']))) {
            $rawImage = (string) ($insight['cover'] ?? $insight['image']);
        } elseif ($caseStudy && (!empty($caseStudy['cover']) || !empty($caseStudy['image']))) {
            $rawImage = (string) ($caseStudy['cover'] ?? $caseStudy['image']);
        } elseif ($service && (!empty($service['detail_image']) || !empty($service['image']) || !empty($service['hero_image']))) {
            $rawImage = (string) ($service['detail_image'] ?? $service['image'] ?? $service['hero_image']);
        } elseif (!empty($cmsSeo['og_image'])) {
            $rawImage = (string) $cmsSeo['og_image'];
        } elseif (!empty($siteSettings['default_og_image'])) {
            $rawImage = (string) $siteSettings['default_og_image'];
        }

        $ogImage = self::normalizeImageUrl($rawImage, $baseUrl);
        [$ogImageWidth, $ogImageHeight] = self::resolveImageDimensions($rawImage);

        // 4. Resolve Keywords, Robots, Canonical & Locales
        $keywords = '';
        if (!empty($cmsSeo['meta_keywords_i18n']) || !empty($cmsSeo['meta_keywords'])) {
            $keywords = self::pickLoc($cmsSeo['meta_keywords_i18n'] ?? $cmsSeo['meta_keywords'] ?? '', $locale);
        }
        if ($keywords === '' && !empty($siteSettings['site_keywords'])) {
            $keywords = self::pickLoc($siteSettings['site_keywords'], $locale);
        }
        if ($keywords === '') {
            $keywords = 'Indonesia market entry, business consulting Jakarta, Chinese business Indonesia, investment advisory Indonesia, business intelligence';
        }

        $robots = (string) ($cmsSeo['robots'] ?? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
        $canonical = !empty($cmsSeo['canonical_url']) ? (string) $cmsSeo['canonical_url'] : $currentUrl;
        $twitterHandle = (string) ($siteSettings['twitter_handle'] ?? '@8vice');

        $ogLocale = match ($locale) {
            'cn' => 'zh_CN',
            'id' => 'id_ID',
            default => 'en_US',
        };
        $ogLocaleAlt = $locale === 'en' ? 'zh_CN' : 'en_US';

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords,
            'robots' => $robots,
            'canonical' => $canonical,
            'current_url' => $currentUrl,
            'en_url' => $enUrl,
            'id_url' => $idUrl,
            'cn_url' => $cnUrl,
            'og_type' => $ogType,
            'og_image' => $ogImage,
            'og_image_width' => $ogImageWidth,
            'og_image_height' => $ogImageHeight,
            'og_locale' => $ogLocale,
            'og_locale_alt' => $ogLocaleAlt,
            'twitter_handle' => $twitterHandle,
        ];
    }

    protected static function mapComponentToPageCode(string $component): ?string
    {
        return match ($component) {
            'Home', 'Home2' => 'home',
            'About' => 'about',
            'Services' => 'services',
            'Consultancy' => 'consultancy',
            'Training' => 'training',
            'MarketIntelligence' => 'market_intelligence',
            'Article', 'Insight' => 'article',
            'Client' => 'client',
            'CaseStudy' => 'case_study',
            'SocialImpact' => 'social_impact',
            'Career' => 'career',
            'Contact' => 'contact',
            'Gateway' => 'gateway',
            'Industries' => 'industries',
            default => null,
        };
    }

    protected static function toArray($value): array
    {
        if (is_array($value)) {
            return $value;
        }
        if (is_object($value)) {
            if (method_exists($value, 'toArray')) {
                return $value->toArray();
            }
            return (array) $value;
        }
        return [];
    }

    protected static function pickLoc($field, string $locale): string
    {
        if (empty($field)) {
            return '';
        }
        if (is_string($field)) {
            $trimmed = trim($field);
            if (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) {
                $decoded = json_decode($trimmed, true);
                if (is_array($decoded)) {
                    $field = $decoded;
                } else {
                    return $trimmed;
                }
            } else {
                return $trimmed;
            }
        }
        if (is_array($field)) {
            return trim((string) ($field[$locale] ?? $field['en'] ?? $field['id'] ?? $field['cn'] ?? reset($field) ?? ''));
        }
        return '';
    }

    protected static function cleanExcerpt(string $text, int $limit = 160): string
    {
        $plain = html_entity_decode(strip_tags($text), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $plain = trim((string) preg_replace('/\s+/', ' ', $plain));
        if ($plain === '') {
            return '';
        }
        if (mb_strlen($plain) > $limit) {
            return rtrim(mb_substr($plain, 0, $limit - 3)) . '...';
        }
        return $plain;
    }

    protected static function normalizeImageUrl(string $rawImage, string $baseUrl): string
    {
        $rawImage = trim($rawImage);
        if ($rawImage === '') {
            return "{$baseUrl}/images/og-default.webp";
        }
        if (str_starts_with($rawImage, 'http://') || str_starts_with($rawImage, 'https://')) {
            return $rawImage;
        }
        $rel = ltrim($rawImage, '/');
        if (file_exists(public_path($rel))) {
            return "{$baseUrl}/{$rel}";
        }
        if (file_exists(public_path("storage/{$rel}"))) {
            return "{$baseUrl}/storage/{$rel}";
        }
        if (str_starts_with($rel, 'images/')) {
            return "{$baseUrl}/images/og-default.webp";
        }
        return "{$baseUrl}/storage/{$rel}";
    }

    protected static function resolveImageDimensions(string $rawImage): array
    {
        $rawImage = trim($rawImage);
        if ($rawImage === '' || str_starts_with($rawImage, 'http://') || str_starts_with($rawImage, 'https://')) {
            return [1024, 1024];
        }

        $rel = ltrim($rawImage, '/');
        $candidates = [
            public_path($rel),
            public_path("storage/{$rel}"),
            public_path('images/og-default.webp'),
        ];

        foreach ($candidates as $file) {
            if ($file && is_file($file)) {
                $info = @getimagesize($file);
                if (is_array($info) && !empty($info[0]) && !empty($info[1])) {
                    return [(int) $info[0], (int) $info[1]];
                }
            }
        }

        return [1024, 1024];
    }
}
