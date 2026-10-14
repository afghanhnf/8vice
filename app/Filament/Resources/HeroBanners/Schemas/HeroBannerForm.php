<?php

namespace App\Filament\Resources\HeroBanners\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Tabs;

class HeroBannerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Banner Details')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                                Tabs::make('Languages')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('Indonesian (ID)')
                                    ->schema([
                                        TextInput::make('title.id')
                                            ->label('[ID] Banner Title')
                                            ->placeholder('e.g. Main Hero, Promo Banner')
                                            ->maxLength(255),
                                        TextInput::make('eyebrow.id')
                                            ->label('[ID] Eyebrow Text')
                                            ->placeholder('e.g. CHINA -> INDONESIA SPECIALIST')
                                            ->maxLength(255),
                                        TextInput::make('title_accent.id')
                                            ->label('[ID] Title Accent')
                                            ->placeholder('e.g. Excellence.')
                                            ->maxLength(255),
                                        \Filament\Forms\Components\Textarea::make('description.id')
                                            ->label('[ID] Description')
                                            ->columnSpanFull()
                                            ->rows(3),
                                    ]),
                                Tabs\Tab::make('English (EN)')
                                    ->schema([
                                        TextInput::make('title.en')
                                            ->label('[EN] Banner Title')
                                            ->placeholder('e.g. Main Hero, Promo Banner')
                                            ->maxLength(255),
                                        TextInput::make('eyebrow.en')
                                            ->label('[EN] Eyebrow Text')
                                            ->placeholder('e.g. CHINA -> INDONESIA SPECIALIST')
                                            ->maxLength(255),
                                        TextInput::make('title_accent.en')
                                            ->label('[EN] Title Accent')
                                            ->placeholder('e.g. Excellence.')
                                            ->maxLength(255),
                                        \Filament\Forms\Components\Textarea::make('description.en')
                                            ->label('[EN] Description')
                                            ->columnSpanFull()
                                            ->rows(3),
                                    ]),
                            ]),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first'),
                    ]),
                        Grid::make(2)
                            ->columnSpan(12)
                            ->schema([
                                Group::make()->schema([
                                    Section::make('Banner Image')
                                        ->schema([
                        FileUpload::make('image')
                            ->label('Banner Image')
                            ->image()
                            ->directory('hero-banners')
                            ->required()
                                            ->maxSize(5120),
                                        ]),
                                ]),
                                Group::make()->schema([
                                    Section::make('Link & Status')
                                        ->columns(1)
                                        ->schema([
                        TextInput::make('link_url')
                            ->label('Image Link URL (optional)')
                            ->url()
                            ->maxLength(255),
                        Toggle::make('is_active')
                            ->label('Active')
                            ->default(true)
                            ->helperText('Only active banners are shown on the website. If more than 1 banner is active, a slider is automatically created.'),
                                        ]),
                                ]),
                            ]),
                        Section::make('Call to Action (Buttons)')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                        Tabs::make('Button Languages')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('Indonesian (ID)')
                                    ->columns(2)
                                    ->schema([
                                        TextInput::make('button_1_text.id')
                                            ->label('[ID] Primary Button Text')
                                            ->placeholder('e.g. Konsultasi'),
                                        TextInput::make('button_2_text.id')
                                            ->label('[ID] Secondary Button Text')
                                            ->placeholder('e.g. Lihat Layanan'),
                                    ]),
                                Tabs\Tab::make('English (EN)')
                                    ->columns(2)
                                    ->schema([
                                        TextInput::make('button_1_text.en')
                                            ->label('[EN] Primary Button Text')
                                            ->placeholder('e.g. Consultancy'),
                                        TextInput::make('button_2_text.en')
                                            ->label('[EN] Secondary Button Text')
                                            ->placeholder('e.g. See How We Help'),
                                    ]),
                            ]),
                        TextInput::make('button_1_url')
                            ->label('Primary Button URL')
                            ->placeholder('e.g. /services/consultancy'),
                        TextInput::make('button_2_url')
                            ->label('Secondary Button URL')
                            ->placeholder('e.g. #help'),
                            ]),
                    ])
            ]);
    }
}
