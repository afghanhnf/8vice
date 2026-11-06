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
     * Resolve the base URL dynamically:
     * 1. Prioritize APP_URL from .env / config('app.url')
     * 2. Fall back to current request host if APP_URL is unset or localhost on production
     */
    public static function getBaseUrl(): string
    {
        $appUrl = config('app.url') ?: env('APP_URL');
        if ($appUrl && !str_contains($appUrl, 'localhost')) {
            return rtrim($appUrl, '/');
        }
        
        $requestHost = request()->getSchemeAndHttpHost();
        if ($requestHost && !str_contains($requestHost, 'localhost')) {
            return rtrim($requestHost, '/');
        }

        return rtrim($appUrl ?: 'http://localhost', '/');
    }

    /**
     * XML Sitemap Index linking to EN, ID, and CN sub-sitemaps
     */
    public function index(): Response
    {
        $baseUrl = self::getBaseUrl();
        $latestMod = date('Y-m-d');

        try {
            $latestInsight = Insight::latest('updated_at')->first();
            if ($latestInsight && $latestInsight->updated_at) {
                $latestMod = $latestInsight->updated_at->format('Y-m-d');
            }
        } catch (\Throwable $e) {}

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        
        $xml .= "    <sitemap>\n";
        $xml .= "        <loc>{$baseUrl}/sitemap-en.xml</loc>\n";
        $xml .= "        <lastmod>{$latestMod}</lastmod>\n";
        $xml .= "    </sitemap>\n";

        $xml .= "    <sitemap>\n";
        $xml .= "        <loc>{$baseUrl}/sitemap-id.xml</loc>\n";
        $xml .= "        <lastmod>{$latestMod}</lastmod>\n";
        $xml .= "    </sitemap>\n";

        $xml .= "    <sitemap>\n";
        $xml .= "        <loc>{$baseUrl}/sitemap-cn.xml</loc>\n";
        $xml .= "        <lastmod>{$latestMod}</lastmod>\n";
        $xml .= "    </sitemap>\n";

        $xml .= '</sitemapindex>';

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
            'X-Robots-Tag' => 'noindex, follow',
        ]);
    }

    /**
     * Language-specific XML sitemap (en, id, cn) with full Google alternate hreflang support
     */
    public function lang(string $lang): Response
    {
        if (!in_array($lang, ['en', 'id', 'cn'])) {
            $lang = 'en';
        }

        $xml = self::generateLangSitemapXml($lang);

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
        ]);
    }

    /**
     * Build the XML string for a specific language
     */
    public static function generateLangSitemapXml(string $lang): string
    {
        $baseUrl = self::getBaseUrl();
        $urls = self::collectAllRoutes();

        $langPrefix = $lang === 'en' ? '' : "/{$lang}";

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";

        foreach ($urls as $item) {
            $path = $item['path'];
            $loc = $baseUrl . ($path === '/' ? ($langPrefix ?: '') : "{$langPrefix}{$path}");
            if ($path === '/' && empty($langPrefix)) {
                $loc = $baseUrl;
            }

            $enUrl = $baseUrl . ($path === '/' ? '' : $path);
            $idUrl = $baseUrl . '/id' . ($path === '/' ? '' : $path);
            $cnUrl = $baseUrl . '/cn' . ($path === '/' ? '' : $path);

            $lastmod = $item['lastmod'] ?? date('Y-m-d');
            $changefreq = $item['changefreq'] ?? 'weekly';
            $priority = $item['priority'] ?? '0.8';

            $xml .= "    <url>\n";
            $xml .= "        <loc>" . htmlspecialchars($loc, ENT_XML1) . "</loc>\n";
            $xml .= "        <lastmod>{$lastmod}</lastmod>\n";
            $xml .= "        <changefreq>{$changefreq}</changefreq>\n";
            $xml .= "        <priority>{$priority}</priority>\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="en" href="' . htmlspecialchars($enUrl, ENT_XML1) . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="id" href="' . htmlspecialchars($idUrl, ENT_XML1) . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="zh-CN" href="' . htmlspecialchars($cnUrl, ENT_XML1) . '" />' . "\n";
            $xml .= '        <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($enUrl, ENT_XML1) . '" />' . "\n";
            $xml .= "    </url>\n";
        }

        $xml .= '</urlset>';
        return $xml;
    }

    /**
     * Gather all canonical route paths with their priority, change frequency, and lastmod
     */
    public static function collectAllRoutes(): array
    {
        $today = date('Y-m-d');

        $staticPages = [
            ['path' => '/', 'priority' => '1.0', 'changefreq' => 'daily', 'lastmod' => $today],
            ['path' => '/about', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $today],
            ['path' => '/services', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $today],
            ['path' => '/gateway', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $today],
            ['path' => '/industries', 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $today],
            ['path' => '/insights', 'priority' => '0.9', 'changefreq' => 'daily', 'lastmod' => $today],
            ['path' => '/case-study', 'priority' => '0.8', 'changefreq' => 'weekly', 'lastmod' => $today],
            ['path' => '/contact', 'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/career', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/client', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/consultancy', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/training', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/market-intelligence', 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $today],
            ['path' => '/social-impact', 'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $today],
        ];

        // 1. Dynamic Services (The 6 Pillars)
        $services = [];
        try {
            $dbServices = Service::all();
            if ($dbServices->isNotEmpty()) {
                foreach ($dbServices as $s) {
                    $slug = $s->slug ?: strtolower(str_replace(' ', '-', $s->title));
                    $services[] = [
                        'path' => "/services/{$slug}",
                        'priority' => '0.9',
                        'changefreq' => 'weekly',
                        'lastmod' => $s->updated_at ? $s->updated_at->format('Y-m-d') : $today,
                    ];
                }
            }
        } catch (\Throwable $e) {}

        if (empty($services)) {
            $fallbackSlugs = ['advisory', 'gov-relations', 'business-matching', 'comms', 'media-relations', 'investment'];
            foreach ($fallbackSlugs as $slug) {
                $services[] = [
                    'path' => "/services/{$slug}",
                    'priority' => '0.9',
                    'changefreq' => 'weekly',
                    'lastmod' => $today,
                ];
            }
        }

        // 2. Dynamic Insights & Articles
        $insights = [];
        try {
            $dbInsights = Insight::all();
            foreach ($dbInsights as $i) {
                if ($i->slug) {
                    $insights[] = [
                        'path' => "/insights/{$i->slug}",
                        'priority' => '0.8',
                        'changefreq' => 'weekly',
                        'lastmod' => $i->updated_at ? $i->updated_at->format('Y-m-d') : $today,
                    ];
                }
            }
        } catch (\Throwable $e) {}

        if (empty($insights)) {
            foreach (SeedData::getInsights() as $i) {
                $insights[] = [
                    'path' => "/insights/{$i->slug}",
                    'priority' => '0.8',
                    'changefreq' => 'weekly',
                    'lastmod' => $today,
                ];
            }
        }

        // 3. Dynamic Case Studies
        $caseStudies = [];
        try {
            $dbCases = CaseStudy::all();
            foreach ($dbCases as $c) {
                if ($c->slug) {
                    $caseStudies[] = [
                        'path' => "/case-study/{$c->slug}",
                        'priority' => '0.8',
                        'changefreq' => 'monthly',
                        'lastmod' => $c->updated_at ? $c->updated_at->format('Y-m-d') : $today,
                    ];
                }
            }
        } catch (\Throwable $e) {}

        if (empty($caseStudies)) {
            foreach (SeedData::getCaseStudies() as $c) {
                $caseStudies[] = [
                    'path' => "/case-study/{$c->slug}",
                    'priority' => '0.8',
                    'changefreq' => 'monthly',
                    'lastmod' => $today,
                ];
            }
        }

        return array_merge($staticPages, $services, $insights, $caseStudies);
    }
}

