<?php

namespace App\Filament\Resources\MediaLibraries\Pages;

use App\Filament\Resources\MediaLibraries\MediaLibraryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditMediaLibrary extends EditRecord
{
    protected static string $resource = MediaLibraryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function afterSave(): void
    {
        $record = $this->record;
        if ($record && $record->file_path) {
            $record->syncToLinkedModel($record->file_path);
        }
    }
}
