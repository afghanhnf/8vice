<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\BookReview;
use App\Models\Course;
use App\Models\Highlight;
use App\Models\HeroBanner;
use App\Helpers\SeedData;

class HomeController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
        $insights = Insight::published()->orderByDesc('id')->take(6)->get();
        $bookReviews = BookReview::all();
        $courses = Course::all();
        $highlights = Highlight::all();
        $industryCoverages = \App\Models\IndustryCoverage::all();
        $statistics = \App\Models\Statistic::all();
        $siteSettings = \App\Models\SiteSetting::first();
        $heroBanners = HeroBanner::where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('Home', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'bookReviews' => $bookReviews->isEmpty() ? collect(SeedData::getBookReviews()) : $bookReviews,
            'courses' => $courses->isEmpty() ? collect(SeedData::getCourses()) : $courses,
            'highlights' => $highlights->isEmpty() ? collect(SeedData::getHighlights()) : $highlights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'statistics' => $statistics->isEmpty() ? collect(SeedData::getStatistics()) : $statistics,
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
            'heroBanners' => $heroBanners->isEmpty() ? collect(SeedData::getHeroBanners()) : $heroBanners,
        ]);
    }

    public function home2()
    {
        $clients = Client::all();
        $caseStudies = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(6)->get();
        $insights = Insight::published()->orderByDesc('id')->take(6)->get();
        $bookReviews = BookReview::all();
        $courses = Course::all();
        $highlights = Highlight::all();
        $industryCoverages = \App\Models\IndustryCoverage::all();
        $statistics = \App\Models\Statistic::all();
        $siteSettings = \App\Models\SiteSetting::first();
        $heroBanners = HeroBanner::where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('Home2', [
            'clients' => $clients->isEmpty() ? collect(SeedData::getClients()) : $clients,
            'caseStudies' => $caseStudies->isEmpty() ? collect(SeedData::getCaseStudies()) : $caseStudies,
            'insights' => $insights->isEmpty() ? collect(SeedData::getInsights()) : $insights,
            'bookReviews' => $bookReviews->isEmpty() ? collect(SeedData::getBookReviews()) : $bookReviews,
            'courses' => $courses->isEmpty() ? collect(SeedData::getCourses()) : $courses,
            'highlights' => $highlights->isEmpty() ? collect(SeedData::getHighlights()) : $highlights,
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(SeedData::getIndustryCoverages()) : $industryCoverages,
            'statistics' => $statistics->isEmpty() ? collect(SeedData::getStatistics()) : $statistics,
            'siteSettings' => $siteSettings ?: SeedData::getSiteSettings(),
            'heroBanners' => $heroBanners->isEmpty() ? collect(SeedData::getHeroBanners()) : $heroBanners,
        ]);
    }
}
