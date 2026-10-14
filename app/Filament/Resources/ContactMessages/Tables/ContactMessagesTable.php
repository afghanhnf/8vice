<?php

namespace App\Filament\Resources\ContactMessages\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class ContactMessagesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Name')
                    ->weight('bold')
                    ->searchable(),

                TextColumn::make('company')
                    ->label('Company')
                    ->searchable()
                    ->placeholder('-'),

                TextColumn::make('subject')
                    ->label('Subject / Interest')
                    ->badge()
                    ->color(fn ($state) => match (strtolower($state ?? '')) {
                        'consultancy' => 'primary',
                        'training', 'training request' => 'warning',
                        default => 'info',
                    })
                    ->default('Consultancy')
                    ->searchable(),

                TextColumn::make('email')
                    ->label('Email')
                    ->copyable()
                    ->searchable(),

                TextColumn::make('phone')
                    ->label('Phone / WhatsApp')
                    ->copyable()
                    ->placeholder('-'),

                TextColumn::make('message')
                    ->label('Message Preview')
                    ->limit(45)
                    ->tooltip(fn ($record) => $record->message),

                TextColumn::make('created_at')
                    ->label('Received Date')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
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
