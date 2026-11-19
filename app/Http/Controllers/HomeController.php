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
use App\Helpers\SeedData;

class HomeController extends Controller
{
    public function index()
    {
        try {
            $clients = Client::select(['id', 'name', 'logo', 'website', 'sort_order'])->get();
            $insights = Insight::published()
                ->orderByDesc('id')
                ->take(3)
                ->get(['id', 'slug', 'cat', 'cat_i18n', 'rt', 'rt_i18n', 'date', 't', 't_i18n', 'cover', 'excerpt', 'excerpt_i18n', 'status'])
                ->map(fn ($item) => [
                    'id' => $item->id,
                    'slug' => $item->slug,
                    'cat' => $item->cat,
                    'cat_i18n' => $item->cat_i18n,
                    'rt' => $item->rt,
                    'rt_i18n' => $item->rt_i18n,
                    'date' => $item->date,
                    't' => $item->t,
                    't_i18n' => $item->t_i18n,
                    'cover' => $item->cover,
                    'excerpt' => $item->excerpt,
                    'excerpt_i18n' => $item->excerpt_i18n,
                ]);
            $industryCoverages = IndustryCoverage::orderBy('sort_order')
                ->get(['id', 'title', 'title_i18n', 'description', 'description_i18n', 'image', 'sort_order'])
                ->map(fn ($item) => [
                    'id' => $item->id,
                    'title' => $item->title,
                    'title_i18n' => $item->title_i18n,
                    'description' => $item->description,
                    'description_i18n' => $item->description_i18n,
                    'image' => $item->image,
                    'sort_order' => $item->sort_order,
                ]);
            $services = Service::orderBy('sort_order')
                ->get(['id', 'slug', 'title', 'title_i18n', 'description', 'description_i18n', 'sort_order'])
                ->map(fn ($item) => [
                    'id' => $item->id,
                    'slug' => $item->slug,
                    'title' => $item->title,
                    'title_i18n' => $item->title_i18n,
                    'description' => $item->description,
                    'description_i18n' => $item->description_i18n,
                    'sort_order' => $item->sort_order,
                ]);
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
                'cat' => $item->cat ?? ($item['cat'] ?? ''),
                'cat_i18n' => $item->cat_i18n ?? ($item['cat_i18n'] ?? null),
                'rt' => $item->rt ?? ($item['rt'] ?? ''),
                'rt_i18n' => $item->rt_i18n ?? ($item['rt_i18n'] ?? null),
                'date' => $item->date ?? ($item['date'] ?? ''),
                't' => $item->t ?? ($item['t'] ?? ''),
                't_i18n' => $item->t_i18n ?? ($item['t_i18n'] ?? null),
                'cover' => $item->cover ?? ($item['cover'] ?? ''),
                'excerpt' => $item->excerpt ?? ($item['excerpt'] ?? ''),
                'excerpt_i18n' => $item->excerpt_i18n ?? ($item['excerpt_i18n'] ?? null),
            ]);
        }

        return Inertia::render('Home', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'insights' => $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'services' => $services->isEmpty() ? collect(SeedData::getServices()) : $services,
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
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
