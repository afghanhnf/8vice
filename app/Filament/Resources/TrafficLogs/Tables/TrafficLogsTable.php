<?php

namespace App\Filament\Resources\TrafficLogs\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class TrafficLogsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('created_at')
                    ->label('Timestamp')
                    ->dateTime('d M Y, H:i:s')
                    ->sortable(),

                TextColumn::make('page_name')
                    ->label('Page Name')
                    ->weight('bold')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('path')
                    ->label('URL Path')
                    ->fontFamily('mono')
                    ->color('gray')
                    ->searchable(),

                TextColumn::make('content_type')
                    ->label('Content Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'article' => 'warning',
                        'case_study' => 'success',
                        'service' => 'info',
                        default => 'gray',
                    }),

                TextColumn::make('device')
                    ->label('Device')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Desktop' => 'info',
                        'Mobile' => 'success',
                        'Tablet' => 'warning',
                        default => 'gray',
                    }),

                TextColumn::make('browser')
                    ->label('Browser')
                    ->badge()
                    ->color('gray'),

                TextColumn::make('platform')
                    ->label('OS'),

                TextColumn::make('ip_address')
                    ->label('IP')
                    ->fontFamily('mono')
                    ->searchable(),

                TextColumn::make('referer')
                    ->label('Referer')
                    ->limit(30)
                    ->tooltip(fn ($state) => $state),
            ])
            ->filters([
                SelectFilter::make('content_type')
                    ->options([
                        'page' => 'Pages',
                        'article' => 'Articles / Insights',
                        'case_study' => 'Case Studies',
                    ]),
                SelectFilter::make('device')
                    ->options([
                        'Desktop' => 'Desktop',
                        'Mobile' => 'Mobile',
                        'Tablet' => 'Tablet',
                    ]),
                SelectFilter::make('browser')
                    ->options([
                        'Chrome' => 'Chrome',
                        'Safari' => 'Safari',
                        'Firefox' => 'Firefox',
                        'Edge' => 'Edge',
                    ]),
            ])
            ->recordActions([
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('id', 'desc');
    }
}
