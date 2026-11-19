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
     * Serve XSL stylesheet so browsers render /sitemap*.xml cleanly as a structured table
     * while Google Search Console and other crawlers parse pure XML underneath.
     */
    public function xsl(): Response
    {
        $xsl = <<<'XSL'
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>XML Sitemap — 8vice</title>
    <style>
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0a0b0f;color:#e5e7eb;line-height:1.5;padding:32px 20px}
        .wrap{max-width:1180px;margin:0 auto}
        .head{background:#12141c;border:1px solid rgba(255,255,255,.1);border-left:4px solid #e63946;border-radius:12px;padding:24px 28px;margin-bottom:24px}
        .head h1{font-size:22px;font-weight:700;color:#fff;margin-bottom:6px}
        .head p{font-size:13.5px;color:#9ca3af}
        .meta{display:inline-block;margin-top:10px;padding:4px 10px;border-radius:999px;background:rgba(230,57,70,.16);color:#ff858e;font-size:12px;font-weight:600}
        .card{background:#12141c;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden}
        table{width:100%;border-collapse:collapse;font-size:13px}
        th{text-align:left;padding:12px 16px;background:#181b25;color:#fff;font-weight:600;font-size:11.5px;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid rgba(255,255,255,.1)}
        td{padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.06);vertical-align:top}
        tr:hover td{background:rgba(255,255,255,.03)}
        a{color:#93c5fd;text-decoration:none;word-break:break-all}
        a:hover{color:#fff;text-decoration:underline}
        .pill{display:inline-block;padding:2px 7px;border-radius:6px;background:rgba(255,255,255,.07);color:#d1d5db;font-size:11px;margin-right:4px;text-decoration:none}
        .pill:hover{background:#e63946;color:#fff;text-decoration:none}
        .num{color:#9ca3af;font-variant-numeric:tabular-nums;white-space:nowrap}
        @media (max-width:768px){th:nth-child(3),td:nth-child(3),th:nth-child(4),td:nth-child(4){display:none}}
    </style>
</head>
<body>
<div class="wrap">
    <div class="head">
        <h1>8vice XML Sitemap</h1>
        <p>Generated dynamically by 8vice Laravel SEO Controller for Google Search Console &amp; search engine crawlers.</p>
        <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
                <span class="meta">Sitemap Index: <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sub-sitemaps</span>
            </xsl:when>
            <xsl:otherwise>
                <span class="meta">URLs Indexed: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> canonical URLs</span>
            </xsl:otherwise>
        </xsl:choose>
    </div>
    <div class="card">
        <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
                <table>
                    <thead>
                        <tr>
                            <th>Sub-Sitemap</th>
                            <th>Last Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                            <tr>
                                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                                <td class="num"><xsl:value-of select="sitemap:lastmod"/></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </xsl:when>
            <xsl:otherwise>
                <table>
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Alternates</th>
                            <th>Freq</th>
                            <th>Priority</th>
                            <th>Last Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <tr>
                                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                                <td>
                                    <xsl:for-each select="xhtml:link">
                                        <a class="pill" href="{@href}"><xsl:value-of select="@hreflang"/></a>
                                    </xsl:for-each>
                                </td>
                                <td class="num"><xsl:value-of select="sitemap:changefreq"/></td>
                                <td class="num"><xsl:value-of select="sitemap:priority"/></td>
                                <td class="num"><xsl:value-of select="sitemap:lastmod"/></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </xsl:otherwise>
        </xsl:choose>
    </div>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
XSL;

        return response($xsl, 200, [
            'Content-Type' => 'application/xslt+xml; charset=utf-8',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    }

    /**
     * XML Sitemap Index linking to EN, ID, and CN sub-sitemaps
     */
    public function index(): Response
    {
        $baseUrl = self::getBaseUrl();
        $latestMod = self::resolveLatestMod();

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>' . "\n";
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
        $xml .= '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>' . "\n";
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

