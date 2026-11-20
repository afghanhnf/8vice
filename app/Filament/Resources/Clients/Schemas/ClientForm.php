<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;

class ClientForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Client Info')
                    ->columnSpanFull()
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
                    ->columnSpanFull()
                    ->columns(1)
                    ->schema([
                        FileUpload::make('image')
                            ->label('Client Logo (optional)')
                            ->image()
                            ->directory('clients')
                            ->maxSize(1024),
                    ]),
            ]);
    }
}
