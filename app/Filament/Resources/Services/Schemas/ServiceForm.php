<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Service Identification')
                    ->columns(3)
                    ->schema([
                        TextInput::make('slug')
                            ->label('Slug / ID')
                            ->placeholder('e.g. advisory, gov-relations')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('link_url')
                            ->label('Detail Page URL')
                            ->placeholder('/services/advisory')
                            ->maxLength(255),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                    ]),
                Section::make('Service Titles & Headline')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('title.id')->label('[ID] Service Title')->required()->maxLength(255),
                                    TextInput::make('headline.id')->label('[ID] Headline / Subtitle')->placeholder('e.g. Masuki Pasar Baru dengan Lebih Percaya Diri')->maxLength(255),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('title.en')->label('[EN] Service Title')->maxLength(255),
                                    TextInput::make('headline.en')->label('[EN] Headline / Subtitle')->placeholder('e.g. Enter New Markets with Greater Clarity.')->maxLength(255),
                                ]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('description.id')->label('[ID] Service Overview / Summary')->required()->rows(3)->maxLength(1000),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('description.en')->label('[EN] Service Overview / Summary')->rows(3)->maxLength(1000),
                                ]),
                            ]),
                    ]),
                Section::make('Visual Assets')
                    ->columns(2)
                    ->schema([
                        FileUpload::make('image')
                            ->label('Hero Banner Image')
                            ->image()
                            ->directory('services')
                            ->maxSize(4096)
                            ->helperText('Main backdrop image for this service card/banner (auto-converted to WebP).'),
                        FileUpload::make('detail_image')
                            ->label('Detail Section Image')
                            ->image()
                            ->directory('services')
                            ->maxSize(4096)
                            ->helperText('Feature photography shown in the detailed service breakdown (auto-converted to WebP).'),
                    ]),
                Section::make('Deliverables & Value Highlights')
                    ->collapsible()
                    ->schema([
                        Tabs::make('Deliverables Language')
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    Repeater::make('deliverables.en')
                                        ->label('Deliverable Modules (EN)')
                                        ->schema([
                                            TextInput::make('title')->label('Deliverable Title')->required(),
                                            TextInput::make('icon')->label('Icon key')->placeholder('assessment, strategy, model, etc.'),
                                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                                        ])
                                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                                        ->addActionLabel('Add Deliverable')
                                        ->reorderableWithButtons()
                                        ->collapsible()
                                        ->defaultItems(0),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    Repeater::make('deliverables.id')
                                        ->label('Deliverable Modules (ID)')
                                        ->schema([
                                            TextInput::make('title')->label('Deliverable Title')->required(),
                                            TextInput::make('icon')->label('Icon key')->placeholder('assessment, strategy, model, etc.'),
                                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                                        ])
                                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                                        ->addActionLabel('Add Deliverable')
                                        ->reorderableWithButtons()
                                        ->collapsible()
                                        ->defaultItems(0),
                                ]),
                            ]),
                    ]),
            ]);
    }
}
