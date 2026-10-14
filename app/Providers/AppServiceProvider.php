<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        $models = [
            \App\Models\HeroBanner::class,
            \App\Models\Client::class,
            \App\Models\CaseStudy::class,
            \App\Models\Insight::class,
            \App\Models\IndustryCoverage::class,
            \App\Models\Course::class,
            \App\Models\BookReview::class,
            \App\Models\Profile::class,
            \App\Models\Service::class,
            \App\Models\SiteSetting::class,
        ];

        foreach ($models as $model) {
            if (class_exists($model)) {
                $model::observe(\App\Observers\ImageToWebpObserver::class);
            }
        }
    }
}
