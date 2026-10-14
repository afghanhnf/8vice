<?php

namespace App\Filament\Resources\Careers\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class CareerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Job Role Information')
                    ->columns(2)
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('title.id')
                                        ->label('[ID] Job Title')
                                        ->required()
                                        ->maxLength(255),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('title.en')
                                        ->label('[EN] Job Title')
                                        ->maxLength(255),
                                ]),
                            ]),

                        Tabs::make('Department')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('dept.id')
                                        ->label('[ID] Department')
                                        ->required()
                                        ->maxLength(255),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('dept.en')
                                        ->label('[EN] Department')
                                        ->maxLength(255),
                                ]),
                            ]),

                        Tabs::make('Type')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('type.id')
                                        ->label('[ID] Job Type (e.g. Full-time, Contract, Internship)')
                                        ->required()
                                        ->maxLength(255),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('type.en')
                                        ->label('[EN] Job Type')
                                        ->maxLength(255),
                                ]),
                            ]),

                        Tabs::make('Location')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('location.id')
                                        ->label('[ID] Location')
                                        ->required()
                                        ->maxLength(255),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('location.en')
                                        ->label('[EN] Location')
                                        ->maxLength(255),
                                ]),
                            ]),

                        Tabs::make('Requirements')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('reqs.id')
                                        ->label('[ID] Requirements (1 item per line)')
                                        ->helperText('Masukkan kualifikasi dan persyaratan (1 item per baris).')
                                        ->rows(5),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('reqs.en')
                                        ->label('[EN] Requirements (1 item per line)')
                                        ->helperText('Enter requirements and qualifications (1 item per line).')
                                        ->rows(5),
                                ]),
                            ]),

                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('description.id')
                                        ->label('[ID] Job Description / Responsibilities')
                                        ->rows(5),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('description.en')
                                        ->label('[EN] Job Description / Responsibilities')
                                        ->rows(5),
                                ]),
                            ]),
                    ])
            ]);
    }
}
