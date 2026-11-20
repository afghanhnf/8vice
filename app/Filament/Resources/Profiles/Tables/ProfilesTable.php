<?php

namespace App\Filament\Resources\Profiles\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;

class ProfilesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Portrait')
                    ->circular()
                    ->getStateUsing(function ($record) {
                        if (!$record->image) return null;
                        $img = ltrim((string) $record->image, '/');
                        return str_starts_with($img, 'images/') ? asset($img) : asset('storage/' . $img);
                    }),
                TextColumn::make('call_name')
                    ->label('Leader Name')
                    ->description(fn ($record) => $record->chinese_name ?: null)
                    ->searchable()
                    ->weight('bold'),
                TextColumn::make('role.en')
                    ->label('Designation')
                    ->limit(40),
                TextColumn::make('expertise.en')
                    ->label('Expertise')
                    ->limit(42)
                    ->toggleable(),
                TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
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
