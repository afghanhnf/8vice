<?php

namespace App\Filament\Resources\Faqs\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;

class FaqsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('category')
                    ->badge()
                    ->sortable()
                    ->searchable(),
                TextColumn::make('question.en')
                    ->label('Question (EN)')
                    ->limit(60)
                    ->searchable(),
                TextColumn::make('question.id')
                    ->label('Pertanyaan (ID)')
                    ->limit(60)
                    ->searchable(),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
                TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'Homepage' => 'Homepage',
                        'Services' => 'Services',
                        'Gateway' => 'Gateway',
                        'General' => 'General',
                    ]),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('sort_order');
    }
}

