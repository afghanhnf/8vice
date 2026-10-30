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

        // Auto-convert any image uploaded via Filament Admin to WebP
        if (class_exists(\Filament\Forms\Components\FileUpload::class)) {
            \Filament\Forms\Components\FileUpload::configureUsing(function (\Filament\Forms\Components\FileUpload $component): void {
                $component->saveUploadedFileUsing(function (\Filament\Forms\Components\BaseFileUpload $component, \Livewire\Features\SupportFileUploads\TemporaryUploadedFile $file): ?string {
                    $mime = $file->getMimeType() ?? '';
                    if (str_starts_with($mime, 'image/')) {
                        return \App\Helpers\WebpConverter::convertAndStore(
                            $file,
                            $component->getDirectory() ?? 'uploads',
                            $component->getDiskName() ?? 'public'
                        );
                    }
                    return $component->saveUploadedFile($file);
                });
            });
        }

        $models = [
            \App\Models\Client::class,
            \App\Models\CaseStudy::class,
            \App\Models\Insight::class,
            \App\Models\IndustryCoverage::class,
            \App\Models\Profile::class,
            \App\Models\Service::class,
            \App\Models\SiteSetting::class,
            \App\Models\Faq::class,
        ];

        foreach ($models as $model) {
            if (class_exists($model)) {
                $model::observe(\App\Observers\ImageToWebpObserver::class);
            }
        }
    }
}
