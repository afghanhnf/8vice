<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Service Info')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('title.id')->label('Service Name')->required()->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('title.en')->label('Service Name')->maxLength(255)]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([Textarea::make('description.id')->label('Service Description')->required()->rows(4)->maxLength(1000)]),
                                Tabs\Tab::make('EN')->schema([Textarea::make('description.en')->label('Service Description')->rows(4)->maxLength(1000)]),
                            ]),
                    ]),
                Section::make('Link & Order')
                    ->columns(2)
                    ->schema([
                        TextInput::make('link_url')
                            ->label('Detail page URL')
                            ->placeholder('/consultancy')
                            ->helperText('Internal path (e.g. /consultancy, /training, /market-intelligence) or full URL. Language prefix is added automatically for internal paths.')
                            ->maxLength(255),
                        TextInput::make('sort_order')
                            ->label('Sort order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                    ]),
                Section::make('Image')
                    ->columnSpan(12)
                    ->schema([
                        FileUpload::make('image')->label('Service Image (optional)')->image()->directory('services')->maxSize(2048),
                    ])
            ]);
    }
}
