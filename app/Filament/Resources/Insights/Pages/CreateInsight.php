<?php

namespace App\Filament\Resources\Insights\Pages;

use App\Filament\Resources\Insights\InsightResource;
use Filament\Resources\Pages\CreateRecord;

class CreateInsight extends CreateRecord
{
    protected static string $resource = InsightResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}

