<?php

namespace App\Filament\Resources\PageContents\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class PageContentsTable
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
                TextColumn::make('page_code')
                    ->label('Code')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('updated_at')
                    ->label('Last Updated')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('id')
            ->recordActions([
                EditAction::make(),
            ]);
    }
}
