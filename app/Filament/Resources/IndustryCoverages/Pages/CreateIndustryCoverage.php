<?php

namespace App\Filament\Resources\IndustryCoverages\Pages;

use App\Filament\Resources\IndustryCoverages\IndustryCoverageResource;
use Filament\Resources\Pages\CreateRecord;

class CreateIndustryCoverage extends CreateRecord
{
    protected static string $resource = IndustryCoverageResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}

