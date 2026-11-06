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
            $clients = Client::all();
            $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
            $insights = Insight::published()->orderByDesc('id')->take(6)->get();
            $industryCoverages = IndustryCoverage::orderBy('sort_order')->get();
            $services = Service::orderBy('sort_order')->get();
            $statistics = Statistic::all();
            $siteSettings = SiteSetting::first();
        } catch (\Throwable $e) {
            $clients = collect();
            $caseStudies = collect();
            $insights = collect();
            $industryCoverages = collect();
            $services = collect();
            $statistics = collect();
            $siteSettings = null;
        }

        return Inertia::render('Home', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'services' => $services->isEmpty() ? collect(SeedData::getServices()) : $services,
            'statistics' => $statistics->isEmpty() ? collect(SeedData::getStatistics()) : $statistics,
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
