<?php

namespace App\Filament\Widgets;

use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use App\Models\Insight;

class TopArticlesWidget extends BaseWidget
{
    protected static ?int $sort = 4;
    protected ?string $pollingInterval = '15s';
    protected int | string | array $columnSpan = 1;
    protected static ?string $heading = 'Most Read Articles & Insights';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Insight::query()->orderByDesc('views_count')
            )
            ->columns([
                ImageColumn::make('cover')
                    ->label('')
                    ->circular()
                    ->defaultImageUrl(asset('images/challenges_insights.webp')),

                TextColumn::make('t')
                    ->label('Article Title')
                    ->formatStateUsing(function ($state, $record) {
                        if (is_array($state)) {
                            return $state['en'] ?? reset($state);
                        }
                        return $state;
                    })
                    ->weight('bold')
                    ->wrap()
                    ->url(fn ($record) => url('/article/' . ($record->slug ?? $record->id)), true),

                TextColumn::make('cat')
                    ->label('Category')
                    ->badge()
                    ->color('warning'),

                TextColumn::make('views_count')
                    ->label('Total Reads')
                    ->badge()
                    ->color('primary')
                    ->sortable(),
            ])
            ->paginated([5, 10])
            ->defaultPaginationPageOption(5);
    }
}
