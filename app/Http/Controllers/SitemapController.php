<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Models\Service;
use App\Models\Insight;
use App\Models\CaseStudy;
use App\Helpers\SeedData;

class SitemapController extends Controller
{
    /**
     * Resolve the base URL dynamically so sitemaps strictly match the active GSC property host & scheme:
     * 1. Prioritize live HTTP request host (when not running in CLI / localhost)
     * 2. Fall back to APP_URL from config/env when valid and non-localhost
     */
    public static function getBaseUrl(): string
    {
        if (!app()->runningInConsole() && request()) {
            $requestHost = request()->getSchemeAndHttpHost();
            if ($requestHost && !str_contains($requestHost, 'localhost') && !str_contains($requestHost, '127.0.0.1')) {
                return rtrim($requestHost, '/');
            }
        }

        $appUrl = config('app.url') ?: env('APP_URL');
        if ($appUrl && !str_contains($appUrl, 'localhost') && !str_contains($appUrl, '127.0.0.1')) {
            return rtrim($appUrl, '/');
        }

        $requestHost = request()?->getSchemeAndHttpHost();
        if ($requestHost) {
            return rtrim($requestHost, '/');
        }

        return rtrim($appUrl ?: 'http://localhost', '/');
    }

    /**
     * Resolve latest real content modification timestamp in W3C / ISO-8601 format
     */
    protected static function resolveLatestMod(): string
    {
        try {
            $dates = array_filter([
                Insight::published()->max('updated_at'),
                Service::max('updated_at'),
                CaseStudy::max('updated_at'),
                \App\Models\PageSeo::max('updated_at'),
            ]);
            if (!empty($dates)) {
                return \Carbon\Carbon::parse(max($dates))->toAtomString();
            }
        } catch (\Throwable $e) {}

        return now()->startOfDay()->toAtomString();
    }

    /**
     * XML Sitemap Index linking to EN, ID, and CN sub-sitemaps
     */
    public function index(): Response
    {
        $baseUrl = self::getBaseUrl();
        $latestMod = self::resolveLatestMod();

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<?xml-stylesheet type="text/css" href="/css/sitemap.css"?>' . "\n";
        $xml .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach (['en', 'id', 'cn'] as $localeCode) {
            $loc = htmlspecialchars("{$baseUrl}/sitemap-{$localeCode}.xml", ENT_XML1, 'UTF-8');
            $xml .= "    <sitemap>\n";
            $xml .= "        <loc>{$loc}</loc>\n";
            $xml .= "        <lastmod>{$latestMod}</lastmod>\n";
            $xml .= "    </sitemap>\n";
        }

        $xml .= '</sitemapindex>' . "\n";

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
            'X-Robots-Tag' => 'noindex, follow',
            'Cache-Control' => 'no-cache, no-store, must-revalidate',
        ]);
    }

    /**
     * Language-specific XML sitemap (en, id, cn) with full Google alternate hreflang support
     */
    public function lang(string $lang): Response
    {
        if (!in_array($lang, ['en', 'id', 'cn'], true)) {
            $lang = 'en';
        }

        $xml = self::generateLangSitemapXml($lang);

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
            'Cache-Control' => 'no-cache, no-store, must-revalidate',
        ]);
    }

    /**
     * Build the W3C / GSC compliant XML string for a specific language
     */
    public static function generateLangSitemapXml(string $lang): string
    {
        $baseUrl = self::getBaseUrl();
        $urls = self::collectAllRoutes();

        $langPrefix = $lang === 'en' ? '' : "/{$lang}";

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<?xml-stylesheet type="text/css" href="/css/sitemap.css"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";

        foreach ($urls as $item) {
            $path = $item['path'];
            $loc = $path === '/'
                ? ($langPrefix ? "{$baseUrl}{$langPrefix}" : "{$baseUrl}/")
                : "{$baseUrl}{$langPrefix}{$path}";

            $enUrl = $path === '/' ? "{$baseUrl}/" : "{$baseUrl}{$path}";
            $idUrl = $path === '/' ? "{$baseUrl}/id" : "{$baseUrl}/id{$path}";
            $cnUrl = $path === '/' ? "{$baseUrl}/cn" : "{$baseUrl}/cn{$path}";

            $lastmod = $item['lastmod'] ?? self::resolveLatestMod();
            $changefreq = $item['changefreq'] ?? 'weekly';
            $priority = $item['priority'] ?? '0.8';

            $xml .= "    <url>\n";
            $xml .= "        <loc>" . htmlspecialchars($loc, ENT_XML1, 'UTF-8') . "</loc>\n";
            $xml .= "        <lastmod>" . htmlspecialchars($lastmod, ENT_XML1, 'UTF-8') . "</lastmod>\n";
            $xml .= "        <changefreq>{$changefreq}</changefreq>\n";
            $xml .= "        <priority>{$priority}</priority>\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="en" href="' . htmlspecialchars($enUrl, ENT_XML1, 'UTF-8') . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="id" href="' . htmlspecialchars($idUrl, ENT_XML1, 'UTF-8') . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="zh-CN" href="' . htmlspecialchars($cnUrl, ENT_XML1, 'UTF-8') . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($enUrl, ENT_XML1, 'UTF-8') . '" />' . "\n";
            $xml .= "    </url>\n";
        }

        $xml .= '</urlset>' . "\n";
        return $xml;
    }

    /**
     * Gather all canonical, indexable route paths (excluding 302 redirects and draft content)
     */
    public static function collectAllRoutes(): array
    {
        $defaultMod = self::resolveLatestMod();

        $staticPages = [
            ['path' => '/', 'priority' => '1.0', 'changefreq' => 'daily', 'lastmod' => $defaultMod],
            ['path' => '/about', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $defaultMod],
            ['path' => '/services', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $defaultMod],
            ['path' => '/gateway', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $defaultMod],
            ['path' => '/industries', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $defaultMod],
            ['path' => '/insights', 'priority' => '0.9', 'changefreq' => 'daily', 'lastmod' => $defaultMod],
            ['path' => '/case-study', 'priority' => '0.8', 'changefreq' => 'weekly', 'lastmod' => $defaultMod],
            ['path' => '/contact', 'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $defaultMod],
            ['path' => '/career', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $defaultMod],
            ['path' => '/client', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $defaultMod],
            ['path' => '/training', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $defaultMod],
            ['path' => '/social-impact', 'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $defaultMod],
        ];

        // 1. Dynamic Services (ordered by sort_order)
        $services = [];
        try {
            if (Service::exists()) {
                foreach (Service::orderBy('sort_order')->get() as $s) {
                    $slug = $s->slug ?: strtolower(str_replace(' ', '-', (string) $s->title));
                    if (!$slug) continue;
                    $services[] = [
                        'path' => "/services/{$slug}",
                        'priority' => '0.9',
                        'changefreq' => 'weekly',
                        'lastmod' => $s->updated_at ? $s->updated_at->toAtomString() : $defaultMod,
                    ];
                }
            } else {
                foreach (SeedData::getServices() as $s) {
                    $services[] = [
                        'path' => "/services/{$s->slug}",
                        'priority' => '0.9',
                        'changefreq' => 'weekly',
                        'lastmod' => $defaultMod,
                    ];
                }
            }
        } catch (\Throwable $e) {
            foreach (['advisory', 'gov-relations', 'business-matching', 'comms', 'media-relations', 'investment'] as $slug) {
                $services[] = [
                    'path' => "/services/{$slug}",
                    'priority' => '0.9',
                    'changefreq' => 'weekly',
                    'lastmod' => $defaultMod,
                ];
            }
        }

        // 2. Dynamic Published Insights ONLY (exclude drafts; fall back to seed data only if empty table)
        $insights = [];
        try {
            if (Insight::exists()) {
                foreach (Insight::published()->orderByDesc('id')->get() as $i) {
                    if ($i->slug) {
                        $insights[] = [
                            'path' => "/insights/{$i->slug}",
                            'priority' => '0.8',
                            'changefreq' => 'weekly',
                            'lastmod' => $i->updated_at ? $i->updated_at->toAtomString() : $defaultMod,
                        ];
                    }
                }
            } else {
                foreach (SeedData::getInsights() as $i) {
                    $insights[] = [
                        'path' => "/insights/{$i->slug}",
                        'priority' => '0.8',
                        'changefreq' => 'weekly',
                        'lastmod' => $defaultMod,
                    ];
                }
            }
        } catch (\Throwable $e) {}

        // 3. Dynamic Case Studies (fall back to seed data only if empty table)
        $caseStudies = [];
        try {
            if (CaseStudy::exists()) {
                foreach (CaseStudy::orderByDesc('id')->get() as $c) {
                    if ($c->slug) {
                        $caseStudies[] = [
                            'path' => "/case-study/{$c->slug}",
                            'priority' => '0.8',
                            'changefreq' => 'monthly',
                            'lastmod' => $c->updated_at ? $c->updated_at->toAtomString() : $defaultMod,
                        ];
                    }
                }
            } else {
                foreach (SeedData::getCaseStudies() as $c) {
                    $caseStudies[] = [
                        'path' => "/case-study/{$c->slug}",
                        'priority' => '0.8',
                        'changefreq' => 'monthly',
                        'lastmod' => $defaultMod,
                    ];
                }
            }
        } catch (\Throwable $e) {}

        return array_merge($staticPages, $services, $insights, $caseStudies);
    }
}

