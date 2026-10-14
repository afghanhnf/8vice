<?php

namespace App\Filament\Resources\JobApplications\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class JobApplicationsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Applicant Name')
                    ->weight('bold')
                    ->searchable(),

                TextColumn::make('career.title')
                    ->label('Applied Role')
                    ->default('Open Application')
                    ->formatStateUsing(function ($state, $record) {
                        if (!$record->career_id || !$record->career) {
                            return 'Open Application';
                        }
                        if (is_array($state)) {
                            return $state['en'] ?? $state['id'] ?? reset($state);
                        }
                        return $state ?: 'Open Application';
                    })
                    ->badge()
                    ->color(fn ($record) => $record->career_id ? 'info' : 'gray'),

                TextColumn::make('email')
                    ->label('Email')
                    ->copyable()
                    ->searchable(),

                TextColumn::make('linkedin')
                    ->label('LinkedIn')
                    ->url(fn ($record) => $record->linkedin, shouldOpenInNewTab: true)
                    ->color('primary')
                    ->placeholder('-'),

                TextColumn::make('cv_path')
                    ->label('CV / Resume')
                    ->formatStateUsing(fn ($state) => $state ? '📄 View CV' : '-')
                    ->url(fn ($record) => $record->cv_path ? asset('storage/' . $record->cv_path) : null, shouldOpenInNewTab: true)
                    ->badge()
                    ->color('success'),

                TextColumn::make('created_at')
                    ->label('Applied Date')
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
