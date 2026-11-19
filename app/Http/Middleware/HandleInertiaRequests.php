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
        $isPerfBot = str_contains($ua, 'lighthouse') || str_contains($ua, 'pagespeed') || str_contains($ua, 'gtmetrix') || str_contains($ua, 'headlesschrome');

        if (!$isPerfBot && $request->isMethod('GET') && !$request->is('admin*', 'livewire*', 'api*', '_debugbar*')) {
            try {
                $path = '/' . ltrim($request->path(), '/');
                $contentType = 'page';
                $contentId = null;
                $pageName = null;

                if (str_starts_with($path, '/article/') || str_starts_with($path, '/id/article/') || str_starts_with($path, '/cn/article/') || str_starts_with($path, '/insights/') || str_starts_with($path, '/id/insights/') || str_starts_with($path, '/cn/insights/')) {
                    $slug = basename($path);
                    $insight = \App\Models\Insight::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($insight) {
                        $contentType = 'article';
                        $contentId = $insight->id;
                        $pageTitle = is_array($insight->t) ? ($insight->t['en'] ?? reset($insight->t)) : $insight->t;
                        $pageName = 'Article: ' . ($pageTitle ?: $slug);
                        $insight->increment('views_count');
                    }
                } elseif (str_starts_with($path, '/case-study/') || str_starts_with($path, '/id/case-study/') || str_starts_with($path, '/cn/case-study/')) {
                    $slug = basename($path);
                    $case = \App\Models\CaseStudy::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($case) {
                        $contentType = 'case_study';
                        $contentId = $case->id;
                        $caseTitle = is_array($case->t) ? ($case->t['en'] ?? reset($case->t)) : $case->t;
                        $pageName = 'Case Study: ' . ($caseTitle ?: $slug);
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
                ->map(fn ($seo) => [
                    'page_code' => $seo->page_code,
                    'meta_title' => $seo->meta_title,
                    'meta_title_i18n' => $seo->meta_title_i18n,
                    'meta_description' => $seo->meta_description,
                    'meta_description_i18n' => $seo->meta_description_i18n,
                    'meta_keywords' => $seo->meta_keywords,
                    'meta_keywords_i18n' => $seo->meta_keywords_i18n,
                    'og_image' => $seo->og_image,
                    'og_type' => $seo->og_type,
                    'robots' => $seo->robots,
                    'canonical_url' => $seo->canonical_url,
                ])
                ->keyBy('page_code');
            $footerInsights = \App\Models\Insight::published()
                ->orderBy('id', 'desc')
                ->take(5)
                ->get(['id', 'slug', 't', 't_i18n', 'cat'])
                ->map(fn ($item) => [
                    'id' => $item->id,
                    'slug' => $item->slug,
                    't' => $item->t,
                    't_i18n' => $item->t_i18n,
                    'cat' => $item->cat,
                ])
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
