<?php

namespace App\Filament\Resources\JobApplications\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;

class JobApplicationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Application Details')
                    ->schema([
                        Select::make('career_id')
                            ->label('Applied Role')
                            ->relationship('career', 'id')
                            ->getOptionLabelFromRecordUsing(fn ($record) => is_array($record->title) ? ($record->title['en'] ?? $record->title['id'] ?? reset($record->title)) : $record->title)
                            ->nullable()
                            ->placeholder('Open Application / Other')
                            ->searchable()
                            ->preload(),
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        TextInput::make('linkedin')
                            ->maxLength(255),
                        FileUpload::make('cv_path')
                            ->label('CV / Resume')
                            ->disk('public')
                            ->directory('cvs')
                            ->downloadable()
                            ->openable()
                            ->columnSpanFull(),
                        TextInput::make('ip_address')
                            ->maxLength(255)
                            ->disabled(),
                    ])
                    ->columns(2),
            ]);
    }
}
