<?php

namespace App\Filament\Resources\Insights\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\IconColumn;


class InsightsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('t')->label('Title')->searchable(),
                TextColumn::make('cat')->label('Category')->searchable(),
                IconColumn::make('is_research_paper')
                    ->label('Paper')
                    ->boolean()
                    ->trueIcon('heroicon-o-document-check')
                    ->falseIcon('heroicon-o-minus')
                    ->alignCenter(),
                TextColumn::make('rt')->label('Read Time'),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (?string $state): string => match ($state) {
                        'Publish', 'published' => 'success',
                        'Draft' => 'warning',
                        'Archive' => 'gray',
                        default => 'success',
                    })
                    ->sortable(),
                ImageColumn::make('cover')->label('Cover')
            ])
            ->defaultSort('id', 'desc')
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('status')
                    ->options(['Draft' => 'Draft', 'Publish' => 'Publish', 'Archive' => 'Archive']),
            ])
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
