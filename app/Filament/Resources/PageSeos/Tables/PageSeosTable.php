<?php

namespace App\Filament\Resources\PageSeos\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\BadgeColumn;

class PageSeosTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('page_name')
                    ->label('Page')
                    ->description(fn ($record) => '/' . ($record->page_code === 'home' ? '' : $record->page_code))
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                TextColumn::make('meta_title.en')
                    ->label('Title (EN)')
                    ->limit(40)
                    ->tooltip(fn ($record) => $record->meta_title['en'] ?? '')
                    ->searchable(),

                TextColumn::make('meta_description.en')
                    ->label('Description (EN)')
                    ->limit(45)
                    ->tooltip(fn ($record) => $record->meta_description['en'] ?? '')
                    ->searchable(),

                ImageColumn::make('og_image')
                    ->label('OG Banner')
                    ->height(45)
                    ->square()
                    ->getStateUsing(function ($record) {
                        if (!$record->og_image) return null;
                        if (str_starts_with($record->og_image, 'http') || str_starts_with($record->og_image, 'images/')) {
                            return $record->og_image;
                        }
                        return $record->og_image;
                    }),

                TextColumn::make('robots')
                    ->label('Index Status')
                    ->badge()
                    ->state(fn ($record) => str_contains($record->robots ?? '', 'noindex') ? 'No Index' : 'Indexed')
                    ->color(fn (string $state): string => match ($state) {
                        'Indexed' => 'success',
                        'No Index' => 'danger',
                        default => 'warning',
                    }),

                TextColumn::make('updated_at')
                    ->label('Last Updated')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('page_name', 'asc')
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
