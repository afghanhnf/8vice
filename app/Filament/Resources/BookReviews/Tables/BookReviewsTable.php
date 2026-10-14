<?php

namespace App\Filament\Resources\BookReviews\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;

class BookReviewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label('Book Title')->searchable(),
                TextColumn::make('author')->label('Author')->searchable(),
                TextColumn::make('cat')->label('Category'),
                TextColumn::make('take')->label('Review')->limit(50),
                ImageColumn::make('image')->label('Cover')
            ])
            ->filters([])
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
