<?php

namespace App\Filament\Resources\Careers\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class CareersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Job Title')
                    ->formatStateUsing(function ($state) {
                        if (is_array($state)) {
                            return $state['en'] ?? $state['id'] ?? reset($state);
                        }
                        return $state;
                    })
                    ->weight('bold')
                    ->searchable(),

                TextColumn::make('dept')
                    ->label('Department')
                    ->formatStateUsing(function ($state) {
                        if (is_array($state)) {
                            return $state['en'] ?? $state['id'] ?? reset($state);
                        }
                        return $state;
                    })
                    ->badge()
                    ->color('info'),

                TextColumn::make('type')
                    ->label('Job Type')
                    ->formatStateUsing(function ($state) {
                        if (is_array($state)) {
                            return $state['en'] ?? $state['id'] ?? reset($state);
                        }
                        return $state;
                    })
                    ->badge()
                    ->color('success'),

                TextColumn::make('location')
                    ->label('Location')
                    ->formatStateUsing(function ($state) {
                        if (is_array($state)) {
                            return $state['en'] ?? $state['id'] ?? reset($state);
                        }
                        return $state;
                    }),

                TextColumn::make('created_at')
                    ->label('Posted At')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
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
