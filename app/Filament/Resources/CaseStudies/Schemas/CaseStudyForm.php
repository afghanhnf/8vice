<?php

namespace App\Filament\Resources\CaseStudies\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class CaseStudyForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Case Study Details')
                    ->schema([
                        TextInput::make('slug')->required()->maxLength(255),
                        FileUpload::make('cover')->image()->directory('case_studies')->maxSize(2048),
                        
                        Tabs::make('Tag')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('tag.id')->label('Tag / Category')->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('tag.en')->label('Tag / Category')->maxLength(255)]),
                            ]),
                        Tabs::make('Heading')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('h.id')->label('Heading')->required()->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('h.en')->label('Heading')->maxLength(255)]),
                            ]),
                        Tabs::make('Paragraph')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('p.id')->label('Short Description')->required()->maxLength(1000)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('p.en')->label('Short Description')->maxLength(1000)]),
                            ]),
                        Tabs::make('Body')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([RichEditor::make('body.id')->label('Full Body Content')->required()]),
                                Tabs\Tab::make('EN')->schema([RichEditor::make('body.en')->label('Full Body Content')]),
                            ]),
                    ]),
                Section::make('Featured & Highlights')
                    ->description('The featured case study is shown as the big hero on the Case Studies page. Only one case should be featured.')
                    ->collapsible()
                    ->schema([
                        Toggle::make('is_featured')
                            ->label('Featured case study')
                            ->default(false),
                        Repeater::make('metrics')
                            ->label('Headline metrics (hero)')
                            ->schema([
                                TextInput::make('value')->label('Value (e.g. 6)')->required()->maxLength(20),
                                TextInput::make('unit')->label('Unit (e.g. mo, ×, %)')->maxLength(20),
                                TextInput::make('label_id')->label('[ID] Label')->maxLength(120),
                                TextInput::make('label_en')->label('[EN] Label')->required()->maxLength(120),
                            ])
                            ->columns(4)
                            ->maxItems(4)
                            ->itemLabel(fn (array $state): ?string => isset($state['value']) ? trim(($state['value'] ?? '') . ' ' . ($state['unit'] ?? '') . ' — ' . ($state['label_en'] ?? '')) : null)
                            ->addActionLabel('Add metric')
                            ->reorderableWithButtons()
                            ->defaultItems(0)
                            ->columnSpanFull(),
                    ]),
                Section::make('Engagement Overview (sidebar)')
                    ->description('Shown in the sidebar of the case study detail page. The sector is taken from the Tag.')
                    ->collapsible()
                    ->schema([
                        Tabs::make('Corridor')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('corridor.id')->label('[ID] Geographic Corridor')->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('corridor.en')->label('[EN] Geographic Corridor')->maxLength(255)]),
                            ]),
                        Tabs::make('Capabilities')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([Textarea::make('capabilities.id')->label('[ID] Advisory Capabilities')->rows(2)->maxLength(500)]),
                                Tabs\Tab::make('EN')->schema([Textarea::make('capabilities.en')->label('[EN] Advisory Capabilities')->rows(2)->maxLength(500)]),
                            ]),
                    ]),
            ]);
    }
}
