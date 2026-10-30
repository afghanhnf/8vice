<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\IndustryCoverage;
use App\Models\SiteSetting;
use App\Helpers\SeedData;

class HomeController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
        $insights = Insight::published()->orderByDesc('id')->take(6)->get();
        $industryCoverages = IndustryCoverage::all();
        $siteSettings = SiteSetting::first();

        return Inertia::render('Home', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'statistics' => collect(SeedData::getStatistics()),
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
        ]);
    }

    public function home2()
    {
        $clients = Client::all();
        $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
        $insights = Insight::published()->orderByDesc('id')->take(6)->get();
        $industryCoverages = IndustryCoverage::all();
        $siteSettings = SiteSetting::first();

        return Inertia::render('Home2', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'statistics' => collect(SeedData::getStatistics()),
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
        ]);
    }
}
