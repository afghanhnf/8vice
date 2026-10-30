<?php

namespace App\Filament\Resources\IndustryCoverages\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class IndustryCoverageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Industry Sector Information')
                    ->columns(3)
                    ->schema([
                        TextInput::make('slug')
                            ->label('Slug / Key')
                            ->placeholder('e.g. infrastructure, technology')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('tag')
                            ->label('Sector Badge / Tag')
                            ->placeholder('e.g. Urban & Transit')
                            ->maxLength(100),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                    ]),
                Section::make('Sector Titles & Positioning')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('title.en')->label('[EN] Sector Title')->required()->maxLength(255),
                                    TextInput::make('tagline.en')->label('[EN] Tagline')->placeholder('e.g. Bridging capabilities for future cities.')->maxLength(255),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('title.id')->label('[ID] Sector Title')->required()->maxLength(255),
                                    TextInput::make('tagline.id')->label('[ID] Tagline')->placeholder('e.g. Menghubungkan kapabilitas untuk kota masa depan.')->maxLength(255),
                                ]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('description.en')->label('[EN] Sector Overview')->rows(4)->maxLength(1500),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('description.id')->label('[ID] Sector Overview')->rows(4)->maxLength(1500),
                                ]),
                            ]),
                        TagsInput::make('highlights')
                            ->label('Key Sector Highlights / Focus Areas')
                            ->placeholder('Add subsector / highlight focus'),
                    ]),
                Section::make('Cover Imagery')
                    ->columns(2)
                    ->schema([
                        FileUpload::make('image')
                            ->label('Industry Backdrop Image')
                            ->image()
                            ->directory('industries')
                            ->maxSize(4096)
                            ->helperText('Sector hero / card photo (auto-converted to WebP).'),
                    ]),
            ]);
    }
}
