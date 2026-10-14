<?php

namespace App\Filament\Resources\Statistics\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class StatisticForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Statistic')
                    ->columns(2)
                    ->schema([
                        TextInput::make('num')
                            ->label('Number/Value')
                            ->placeholder('e.g. 20+')
                            ->required()
                            ->maxLength(50),
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')
                                    ->schema([
                                        TextInput::make('title.id')
                                            ->label('Title/Label')
                                            ->placeholder('e.g. Years Experience')
                                            ->maxLength(255),
                                    ]),
                                Tabs\Tab::make('EN')
                                    ->schema([
                                        TextInput::make('title.en')
                                            ->label('Title/Label')
                                            ->placeholder('e.g. Years Experience')
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')
                                    ->schema([
                                        TextInput::make('description.id')
                                            ->label('Description (Optional)')
                                            ->maxLength(255),
                                    ]),
                                Tabs\Tab::make('EN')
                                    ->schema([
                                        TextInput::make('description.en')
                                            ->label('Description (Optional)')
                                            ->maxLength(255),
                                    ]),
                            ]),
                    ]),
            ]);
    }
}
