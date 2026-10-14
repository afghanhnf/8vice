<?php

namespace App\Filament\Resources\MediaLibraries\Pages;

use App\Filament\Resources\MediaLibraries\MediaLibraryResource;
use App\Models\MediaLibrary;
use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;

class ListMediaLibraries extends ListRecords
{
    protected static string $resource = MediaLibraryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('sync_images')
                ->label('Scan & Sync All Website Images')
                ->icon('heroicon-o-arrow-path')
                ->color('primary')
                ->action(function () {
                    $count = MediaLibrary::syncAllImages();
                    Notification::make()
                        ->title('Image Library Synced')
                        ->body("Successfully scanned and indexed {$count} images from across the website database.")
                        ->success()
                        ->send();
                }),
        ];
    }
}
