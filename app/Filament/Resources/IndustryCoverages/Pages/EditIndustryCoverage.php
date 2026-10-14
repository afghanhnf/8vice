<?php

namespace App\Filament\Resources\IndustryCoverages\Pages;

use App\Filament\Resources\IndustryCoverages\IndustryCoverageResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditIndustryCoverage extends EditRecord
{
    protected static string $resource = IndustryCoverageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}

