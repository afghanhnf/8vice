<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\FormController;

Route::get('/api/search', [SearchController::class, 'index']);

Route::middleware('throttle:5,1')->group(function () {
    Route::post('/subscribe', [FormController::class, 'subscribe']);
    Route::post('/contact-submit', [FormController::class, 'contact']);
    Route::post('/id/contact-submit', [FormController::class, 'contact']);
    Route::post('/career-apply', [FormController::class, 'apply']);
    Route::post('/id/career-apply', [FormController::class, 'apply']);
    Route::post('/training-request', [FormController::class, 'trainingRequest']);
    Route::post('/id/training-request', [FormController::class, 'trainingRequest']);
});

$pageRoutes = function() {
    Route::get('/', [HomeController::class, 'index']);
    
    Route::get('/about', function () { 
        $profiles = \App\Models\Profile::all();
        return Inertia::render('About', [
            'profiles' => $profiles->isEmpty() ? collect(\App\Helpers\SeedData::getProfiles()) : $profiles
        ]); 
    });
    
    Route::get('/services', function () { 
        $services = \App\Models\Service::orderBy('sort_order')->orderBy('id')->get();
        $industryCoverages = \App\Models\IndustryCoverage::all();
        return Inertia::render('Services', [
            'services' => $services->isEmpty() ? collect(\App\Helpers\SeedData::getServices()) : $services, 
            'industryCoverages' => $industryCoverages->isEmpty() ? collect(\App\Helpers\SeedData::getIndustryCoverages()) : $industryCoverages
        ]); 
    });
    
    Route::get('/consultancy', function () { return Inertia::render('Consultancy'); });
    Route::get('/training', function () { 
        $courses = \App\Models\Course::all();
        return Inertia::render('Training', [
            'courses' => $courses->isEmpty() ? collect(\App\Helpers\SeedData::getCourses()) : $courses
        ]); 
    });
    Route::get('/insight', function () { return redirect('/article'); });
    Route::get('/market-intelligence', function () { return Inertia::render('MarketIntelligence'); });
    
    Route::get('/article', function () { 
        $insights = \App\Models\Insight::published()->orderBy('id', 'desc')->get();
        return Inertia::render('Article', [
            'insights' => $insights->isEmpty() ? collect(\App\Helpers\SeedData::getInsights()) : $insights
        ]); 
    });
    
    Route::get('/article/{slug}', function ($slug) { 
        $insight = \App\Models\Insight::published()->bySlug($slug)->first();
        if ($insight) {
            $relatedInsights = \App\Models\Insight::published()
                ->where('id', '!=', $insight->id)
                ->orderByRaw('cat = ? desc', [$insight->cat])
                ->orderBy('id', 'desc')
                ->take(3)->get();
        } else {
            // Only fall back to bundled sample content while the CMS table is still empty.
            abort_if(\App\Models\Insight::exists(), 404);
            $seed = collect(\App\Helpers\SeedData::getInsights());
            $insight = $seed->firstWhere('slug', $slug);
            abort_unless($insight, 404);
            $relatedInsights = $seed->where('slug', '!=', $slug)->take(3);
        }
        return Inertia::render('ArticleDetail', [
            'insight' => $insight,
            'relatedInsights' => $relatedInsights
        ]); 
    });
    
    Route::get('/client', function () { 
        $clients = \App\Models\Client::all();
        return Inertia::render('Client', [
            'clients' => $clients->isEmpty() ? collect(\App\Helpers\SeedData::getClients()) : $clients
        ]); 
    });
    
    Route::get('/case-study', function () { 
        $caseStudies = \App\Models\CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->get();
        return Inertia::render('CaseStudy', [
            'caseStudies' => $caseStudies->isEmpty() ? collect(\App\Helpers\SeedData::getCaseStudies()) : $caseStudies
        ]); 
    });
    
    Route::get('/case-study/{slug}', function ($slug) { 
        $caseStudy = \App\Models\CaseStudy::bySlug($slug)->first();
        if ($caseStudy) {
            $relatedCases = \App\Models\CaseStudy::where('id', '!=', $caseStudy->id)->orderByDesc('id')->take(3)->get();
        } else {
            abort_if(\App\Models\CaseStudy::exists(), 404);
            $seed = collect(\App\Helpers\SeedData::getCaseStudies());
            $caseStudy = $seed->firstWhere('slug', $slug);
            abort_unless($caseStudy, 404);
            $relatedCases = $seed->where('slug', '!=', $slug)->take(3);
        }
        return Inertia::render('CaseStudyDetail', [
            'caseStudy' => $caseStudy,
            'relatedCases' => $relatedCases
        ]); 
    });
    
    Route::get('/social-impact', function () { return Inertia::render('SocialImpact'); });
    
    Route::get('/career', function () { 
        $careers = \App\Models\Career::all();
        return Inertia::render('Career', [
            'careers' => $careers->isEmpty() ? collect(\App\Helpers\SeedData::getCareers()) : $careers
        ]); 
    });
    
    Route::get('/contact', function () { return Inertia::render('Contact'); });
};

// Default English Routes
Route::middleware('setLocale:en')->group($pageRoutes);

// Indonesian Routes
Route::prefix('id')->middleware('setLocale:id')->group($pageRoutes);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
