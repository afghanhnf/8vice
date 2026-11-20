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

        // Auto-convert any image uploaded via Filament Admin to WebP & ensure public disk compatibility
        if (class_exists(\Filament\Forms\Components\FileUpload::class)) {
            \Filament\Forms\Components\FileUpload::configureUsing(function (\Filament\Forms\Components\FileUpload $component): void {
                $component->disk('public');

                $component->afterStateHydrated(static function (\Filament\Forms\Components\BaseFileUpload $component): void {
                    $rawState = $component->getRawState();
                    if (filled($rawState)) {
                        $normalized = [];
                        $changed = false;
                        foreach (\Illuminate\Support\Arr::wrap($rawState) as $key => $file) {
                            if (is_string($file)) {
                                $clean = ltrim(trim($file), '/');
                                if ($clean !== '' && str_starts_with($clean, 'images/')) {
                                    $pubFile = public_path($clean);
                                    if (is_file($pubFile) && !\Illuminate\Support\Facades\Storage::disk('public')->exists($clean)) {
                                        \Illuminate\Support\Facades\Storage::disk('public')->put($clean, file_get_contents($pubFile));
                                    }
                                    if ($clean !== $file) {
                                        $file = $clean;
                                        $changed = true;
                                    }
                                }
                            }
                            $normalized[$key] = $file;
                        }
                        if ($changed) {
                            $component->rawState(is_array($rawState) ? $normalized : reset($normalized));
                        }
                    }

                    $component->hydrateFiles();
                });

                $component->saveUploadedFileUsing(function (\Filament\Forms\Components\BaseFileUpload $component, \Livewire\Features\SupportFileUploads\TemporaryUploadedFile $file): ?string {
                    $mime = $file->getMimeType() ?? '';
                    if (str_starts_with($mime, 'image/')) {
                        return \App\Helpers\WebpConverter::convertAndStore(
                            $file,
                            $component->getDirectory() ?? 'uploads',
                            $component->getDiskName() ?: 'public'
                        );
                    }
                    return $component->saveUploadedFile($file);
                });
            });
        }

        // Default Filament Table ImageColumns to public disk so thumbnails load consistently
        if (class_exists(\Filament\Tables\Columns\ImageColumn::class)) {
            \Filament\Tables\Columns\ImageColumn::configureUsing(function (\Filament\Tables\Columns\ImageColumn $column): void {
                $column->disk('public');
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
