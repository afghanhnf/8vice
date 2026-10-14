<?php

namespace App\Filament\Widgets;

use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use App\Models\PageStatistic;

class TopPagesWidget extends BaseWidget
{
    protected static ?int $sort = 3;
    protected ?string $pollingInterval = '15s';
    protected int | string | array $columnSpan = 1;
    protected static ?string $heading = 'Most Visited Pages (Top Traffic)';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                PageStatistic::query()->orderByDesc('views_count')
            )
            ->columns([
                TextColumn::make('page_name')
                    ->label('Page')
                    ->weight('bold')
                    ->description(fn ($record) => $record->path)
                    ->url(fn ($record) => url($record->path), true),

                TextColumn::make('views_count')
                    ->label('Pageviews')
                    ->badge()
                    ->color('primary')
                    ->sortable(),

                TextColumn::make('unique_visitors')
                    ->label('Unique Visitors')
                    ->badge()
                    ->color('success')
                    ->sortable(),
            ])
            ->paginated([5, 10])
            ->defaultPaginationPageOption(5);
    }
}
