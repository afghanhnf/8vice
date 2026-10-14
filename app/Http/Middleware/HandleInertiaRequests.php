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
        if ($request->isMethod('GET') && !$request->is('admin*', 'livewire*', 'api*', '_debugbar*')) {
            try {
                $path = '/' . ltrim($request->path(), '/');
                $contentType = 'page';
                $contentId = null;
                $pageName = null;

                if (str_starts_with($path, '/article/') || str_starts_with($path, '/id/article/')) {
                    $slug = basename($path);
                    $insight = \App\Models\Insight::where('slug', $slug)->orWhere('id', $slug)->first();
                    if ($insight) {
                        $contentType = 'article';
                        $contentId = $insight->id;
                        $pageTitle = is_array($insight->t) ? ($insight->t['en'] ?? reset($insight->t)) : $insight->t;
                        $pageName = 'Article: ' . ($pageTitle ?: $slug);
                        $insight->increment('views_count');
                    }
                } elseif (str_starts_with($path, '/case-study/') || str_starts_with($path, '/id/case-study/')) {
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

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'siteSettings' => \App\Models\SiteSetting::first(),
            'pageSeos' => \App\Models\PageSeo::all()->keyBy('page_code'),
        ];
    }
}
