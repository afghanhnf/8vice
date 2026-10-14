<?php

namespace App\Filament\Resources\IndustryCoverages\Pages;

use App\Filament\Resources\IndustryCoverages\IndustryCoverageResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListIndustryCoverages extends ListRecords
{
    protected static string $resource = IndustryCoverageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
