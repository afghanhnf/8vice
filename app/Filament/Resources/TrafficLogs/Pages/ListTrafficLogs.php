<?php

namespace App\Filament\Resources\TrafficLogs\Pages;

use App\Filament\Resources\TrafficLogs\TrafficLogResource;
use Filament\Resources\Pages\ListRecords;

class ListTrafficLogs extends ListRecords
{
    protected static string $resource = TrafficLogResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
