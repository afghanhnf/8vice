<?php

namespace App\Filament\Resources\IndustryCoverages\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;


class IndustryCoveragesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->label('Cover')->circular(),
                TextColumn::make('slug')->label('Slug')->badge(),
                TextColumn::make('title')->label('Sector Title')->searchable(),
                TextColumn::make('tag')->label('Tag'),
                TextColumn::make('sort_order')->label('Order')->sortable(),
            ])
            ->defaultSort('sort_order')
            ->filters([
                //
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
