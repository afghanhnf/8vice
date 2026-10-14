<?php

namespace App\Filament\Resources\IndustryCoverages\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class IndustryCoverageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Industry Coverage Info')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('title.id')->required()->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('title.en')->maxLength(255)]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([Textarea::make('description.id')->required()->rows(4)->maxLength(1000)]),
                                Tabs\Tab::make('EN')->schema([Textarea::make('description.en')->rows(4)->maxLength(1000)]),
                            ]),
                    ]),
                Section::make('Images')
                    ->schema([
                        FileUpload::make('icon')->label('Icon SVG/Image')->directory('industries/icons')->maxSize(1024),
                        FileUpload::make('image')->label('Background Image')->image()->directory('industries')->maxSize(2048),
                    ])
            ]);
    }
}
