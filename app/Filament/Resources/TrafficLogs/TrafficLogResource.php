<?php

namespace App\Filament\Resources\TrafficLogs;

use App\Filament\Resources\TrafficLogs\Pages\ListTrafficLogs;
use App\Filament\Resources\TrafficLogs\Tables\TrafficLogsTable;
use App\Models\TrafficLog;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class TrafficLogResource extends Resource
{
    protected static ?string $model = TrafficLog::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-chart-bar';

    protected static string|\UnitEnum|null $navigationGroup = 'Data & Inquiries';

    protected static ?string $navigationLabel = 'Traffic & Activity Logs';

    protected static ?int $navigationSort = 1;

    public static function table(Table $table): Table
    {
        return TrafficLogsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListTrafficLogs::route('/'),
        ];
    }
}
