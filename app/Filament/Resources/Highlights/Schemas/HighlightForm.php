<?php

namespace App\Filament\Resources\Highlights\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class HighlightForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Highlight Details')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('type')
                            ->label('Type Label')
                            ->placeholder('e.g. Podcast · Latest Episode')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('date')
                            ->label('Date/Episode')
                            ->placeholder('e.g. Ep. 24 · May 2026')
                            ->required()
                            ->maxLength(100),
                    ]),
                Section::make('Content')
                    ->schema([
                        Textarea::make('description')
                            ->label('Description (optional)')
                            ->rows(3)
                            ->maxLength(1000),
                    ]),
                Section::make('Link & Type')
                    ->columns(2)
                    ->schema([
                        TextInput::make('link_text')
                            ->label('Link Label')
                            ->placeholder('e.g. Listen now')
                            ->required()
                            ->maxLength(50),
                        TextInput::make('link_url')
                            ->label('Link URL')
                            ->url()
                            ->maxLength(255),
                        Toggle::make('is_podcast')
                            ->label('Is Podcast?')
                            ->default(false),
                    ]),
            ]);
    }
}

