<?php

namespace App\Filament\Resources\SiteSettings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class SiteSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('instagram_url')->label('Instagram')->limit(40),
                TextColumn::make('linkedin_url')->label('LinkedIn')->limit(40),
                TextColumn::make('whatsapp_url')->label('WhatsApp')->limit(40),
                TextColumn::make('youtube_url')->label('YouTube')->limit(40),
                TextColumn::make('updated_at')->label('Updated')->dateTime('d M Y'),
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
