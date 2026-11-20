<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\IndustryCoverage;
use App\Models\Service;
use App\Models\Statistic;
use App\Models\SiteSetting;
use App\Models\PageContent;
use App\Helpers\SeedData;

class HomeController extends Controller
{
    public function index()
    {
        $pickField = static function ($item, string $key): string {
            $val = is_array($item) ? ($item[$key] ?? '') : ($item->$key ?? '');
            if (is_array($val)) {
                $loc = app()->getLocale();
                return (string) ($val[$loc] ?? $val['en'] ?? $val['id'] ?? $val['cn'] ?? reset($val) ?: '');
            }
            return (string) $val;
        };

        try {
            $clients = Client::select(['id', 'name', 'logo', 'website', 'sort_order'])->get();
            $insights = Insight::published()
                ->orderByDesc('id')
                ->take(3)
                ->get(['id', 'slug', 'cat', 'rt', 'date', 't', 'cover', 'excerpt', 'status'])
                ->map(function ($item) {
                    $arr = $item->toArray();
                    return [
                        'id' => $arr['id'] ?? null,
                        'slug' => $arr['slug'] ?? '',
                        'cat' => $arr['cat'] ?? '',
                        'cat_i18n' => $arr['cat_i18n'] ?? null,
                        'rt' => $arr['rt'] ?? '',
                        'rt_i18n' => $arr['rt_i18n'] ?? null,
                        'date' => $arr['date'] ?? '',
                        't' => $arr['t'] ?? '',
                        't_i18n' => $arr['t_i18n'] ?? null,
                        'cover' => $arr['cover'] ?? '',
                        'excerpt' => $arr['excerpt'] ?? '',
                        'excerpt_i18n' => $arr['excerpt_i18n'] ?? null,
                    ];
                });
            $industryCoverages = IndustryCoverage::orderBy('sort_order')
                ->get(['id', 'title', 'description', 'image', 'sort_order'])
                ->map(function ($item) {
                    $arr = $item->toArray();
                    return [
                        'id' => $arr['id'] ?? null,
                        'title' => $arr['title'] ?? '',
                        'title_i18n' => $arr['title_i18n'] ?? null,
                        'description' => $arr['description'] ?? '',
                        'description_i18n' => $arr['description_i18n'] ?? null,
                        'image' => $arr['image'] ?? '',
                        'sort_order' => $arr['sort_order'] ?? 0,
                    ];
                });
            $services = Service::orderBy('sort_order')
                ->get(['id', 'slug', 'title', 'description', 'sort_order'])
                ->map(function ($item) {
                    $arr = $item->toArray();
                    return [
                        'id' => $arr['id'] ?? null,
                        'slug' => $arr['slug'] ?? '',
                        'title' => $arr['title'] ?? '',
                        'title_i18n' => $arr['title_i18n'] ?? null,
                        'description' => $arr['description'] ?? '',
                        'description_i18n' => $arr['description_i18n'] ?? null,
                        'sort_order' => $arr['sort_order'] ?? 0,
                    ];
                });
            $siteSettings = SiteSetting::first();
        } catch (\Throwable $e) {
            $clients = collect();
            $insights = collect();
            $industryCoverages = collect();
            $services = collect();
            $siteSettings = null;
        }

        if ($insights->isEmpty()) {
            $insights = collect(SeedData::getInsights())->take(3)->map(fn ($item) => [
                'id' => $item->id ?? ($item['id'] ?? null),
                'slug' => $item->slug ?? ($item['slug'] ?? ''),
                'cat' => $pickField($item, 'cat'),
                'cat_i18n' => $item->cat_i18n ?? ($item['cat_i18n'] ?? null),
                'rt' => $pickField($item, 'rt'),
                'rt_i18n' => $item->rt_i18n ?? ($item['rt_i18n'] ?? null),
                'date' => $pickField($item, 'date'),
                't' => $pickField($item, 't'),
                't_i18n' => $item->t_i18n ?? ($item['t_i18n'] ?? null),
                'cover' => $item->cover ?? ($item['cover'] ?? ''),
                'excerpt' => $pickField($item, 'excerpt'),
                'excerpt_i18n' => $item->excerpt_i18n ?? ($item['excerpt_i18n'] ?? null),
            ]);
        }

        return Inertia::render('Home', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'insights' => $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'services' => $services->isEmpty() ? collect(SeedData::getServices()) : $services,
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
            'pageContent' => PageContent::getForLocale('home', app()->getLocale()),
        ]);
    }

    public function home2()
    {
        $clients = Client::all();
        $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
        $insights = Insight::published()->orderByDesc('id')->take(6)->get();
        $industryCoverages = IndustryCoverage::orderBy('sort_order')->get();
        $services = Service::orderBy('sort_order')->get();
        $statistics = Statistic::all();
        $siteSettings = SiteSetting::first();

        return Inertia::render('Home2', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'services' => $services->isEmpty() ? collect(SeedData::getServices()) : $services,
            'statistics' => $statistics->isEmpty() ? collect(SeedData::getStatistics()) : $statistics,
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
        ]);
    }
}
