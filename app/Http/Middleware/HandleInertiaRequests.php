<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = 'en';
        if ($request->is('cn') || $request->is('cn/*')) {
            $locale = 'cn';
        } elseif ($request->is('id') || $request->is('id/*')) {
            $locale = 'id';
        }
        app()->setLocale($locale);

        $ua = strtolower((string) $request->userAgent());
        $isBotOrProbe = $ua === ''
            || (bool) preg_match('/bot|crawl|spider|slurp|lighthouse|pagespeed|gtmetrix|headless|curl|wget|python|postman|insomnia|facebookexternalhit|whatsapp|telegrambot|twitterbot|linkedinbot/i', $ua);

        $isExcludedPath = $request->is(
            'admin*', 'livewire*', 'api*', '_debugbar*',
            'storage*', '_private_storage*', 'sitemap*', 'robots.txt', 'llms*',
            'up', 'login', 'register', 'password*', 'forgot-password*', 'reset-password*'
        ) || str_contains($request->path(), '..');

        if (!$isBotOrProbe && $request->isMethod('GET') && !$isExcludedPath) {
            try {
                $path = '/' . ltrim($request->path(), '/');
                $contentType = 'page';
                $contentId = null;
                $pageName = null;

                if (preg_match('#^/(?:(?:id|cn)/)?(?:article|insights)/([^/]+)$#', $path, $m)) {
                    $slug = $m[1];
                    $insight = \App\Models\Insight::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($insight) {
                        $contentType = 'article';
                        $contentId = $insight->id;
                        $pageTitle = is_array($insight->t) ? ($insight->t['en'] ?? reset($insight->t)) : $insight->t;
                        $pageName = 'Article: ' . ($pageTitle ?: $slug);
                        $insight->increment('views_count');
                    }
                } elseif (preg_match('#^/(?:(?:id|cn)/)?case-study/([^/]+)$#', $path, $m)) {
                    $slug = $m[1];
                    $case = \App\Models\CaseStudy::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($case) {
                        $contentType = 'case_study';
                        $contentId = $case->id;
                        $caseTitle = is_array($case->h) ? ($case->h['en'] ?? reset($case->h)) : $case->h;
                        $pageName = 'Case Study: ' . ($caseTitle ?: $slug);
                    }
                } elseif (preg_match('#^/(?:(?:id|cn)/)?services/([^/]+)$#', $path, $m)) {
                    $slug = $m[1];
                    $service = \App\Models\Service::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($service) {
                        $contentType = 'service';
                        $contentId = $service->id;
                        $svcTitle = is_array($service->title) ? ($service->title['en'] ?? reset($service->title)) : $service->title;
                        $pageName = 'Service: ' . ($svcTitle ?: $slug);
                    }
                }

                \App\Models\TrafficLog::record($request, $pageName, $contentType, $contentId);
            } catch (\Throwable $e) {
                // Ignore to avoid blocking response
            }
        }

        $siteSettings = null;
        $pageSeos = [];
        $footerInsights = [];
        try {
            $siteSettings = \App\Models\SiteSetting::first();
            $pageSeos = \App\Models\PageSeo::all()
                ->map(function ($seo) {
                    $arr = $seo->toArray();
                    return [
                        'page_code' => $arr['page_code'] ?? '',
                        'meta_title' => $arr['meta_title'] ?? '',
                        'meta_title_i18n' => $arr['meta_title_i18n'] ?? null,
                        'meta_description' => $arr['meta_description'] ?? '',
                        'meta_description_i18n' => $arr['meta_description_i18n'] ?? null,
                        'meta_keywords' => $arr['meta_keywords'] ?? '',
                        'meta_keywords_i18n' => $arr['meta_keywords_i18n'] ?? null,
                        'og_image' => $arr['og_image'] ?? null,
                        'og_type' => $arr['og_type'] ?? 'website',
                        'robots' => $arr['robots'] ?? null,
                        'canonical_url' => $arr['canonical_url'] ?? null,
                    ];
                })
                ->keyBy('page_code');
            $footerInsights = \App\Models\Insight::published()
                ->orderBy('id', 'desc')
                ->take(5)
                ->get(['id', 'slug', 't', 'cat'])
                ->map(function ($item) {
                    $arr = $item->toArray();
                    return [
                        'id' => $arr['id'] ?? null,
                        'slug' => $arr['slug'] ?? '',
                        't' => $arr['t'] ?? '',
                        't_i18n' => $arr['t_i18n'] ?? null,
                        'cat' => $arr['cat'] ?? '',
                    ];
                })
                ->toArray();
        } catch (\Throwable $e) {
            // Fallback gracefully if tables are not migrated yet
        }

        if (empty($footerInsights)) {
            $footerInsights = collect(\App\Helpers\SeedData::getInsights())
                ->take(5)
                ->map(fn ($item) => [
                    'slug' => $item->slug ?? ($item['slug'] ?? ''),
                    't' => $item->t ?? ($item['t'] ?? ''),
                    't_i18n' => $item->t_i18n ?? ($item['t_i18n'] ?? null),
                    'cat' => $item->cat ?? ($item['cat'] ?? ''),
                ])
                ->values()
                ->all();
        }

        return [
            ...parent::share($request),
            'locale' => $locale,
            'auth' => [
                'user' => $request->user(),
            ],
            'siteSettings' => $siteSettings ?: \App\Helpers\SeedData::getSiteSettings(),
            'pageSeos' => $pageSeos,
            'footerInsights' => $footerInsights,
            'appUrl' => \App\Http\Controllers\SitemapController::getBaseUrl(),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ];
    }
}
