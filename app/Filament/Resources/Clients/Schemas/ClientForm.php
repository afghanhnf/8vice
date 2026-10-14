<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;

use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Group;

class ClientForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Client Info')
                            ->columnSpan(12)
                    ->columns(2)
                    ->schema([
                        TextInput::make('name')
                            ->label('Client/Company Name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('glyph')
                            ->label('Glyph Character')
                            ->placeholder('e.g. 支 or A')
                            ->maxLength(10),
                    ]),
                        Section::make('Logo')
                            ->columnSpan(12)
                            ->schema([
                        FileUpload::make('image')
                            ->label('Client Logo (optional)')
                            ->image()
                            ->directory('clients')
                            ->maxSize(1024),
                            ]),
                    ])
            ]);
    }
}

