<?php

namespace App\Filament\Resources\Insights\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\DatePicker;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Tabs;

class InsightForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Article Info')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                                Tabs::make('Title')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TextInput::make('t.id')
                                                    ->label('[ID] Title')
                                                    ->required()
                                                    ->maxLength(255),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TextInput::make('t.en')
                                                    ->label('[EN] Title')
                                                    ->maxLength(255),
                                            ]),
                                    ])->columnSpanFull(),
                                TextInput::make('slug')
                                    ->label('Slug (URL)')
                                    ->maxLength(255),
                                Select::make('cat')
                                    ->label('Category')
                                    ->options(\App\Models\Category::pluck('name', 'name'))
                                    ->createOptionForm([TextInput::make('name')->required()])
                                    ->createOptionUsing(function(array $data) { \App\Models\Category::create($data); return $data['name']; })
                                    ->required(),
                                TextInput::make('rt')
                                    ->label('Read Time')
                                    ->placeholder('e.g. 7 min read')
                                    ->required()
                                    ->maxLength(50),
                                DatePicker::make('date')
                                    ->label('Published Date')
                                    ->displayFormat('d M Y'),
                                Select::make('status')
                                    ->label('Status')
                                    ->options([
                                        'Draft' => 'Draft',
                                        'Publish' => 'Publish',
                                        'Archive' => 'Archive',
                                    ])
                                    ->default('Publish')
                                    ->required(),
                            ]),
                        Section::make('Author')
                            ->columnSpan(6)
                            ->columns(1)
                            ->schema([
                                TextInput::make('author_name')
                                    ->label('Author Name')
                                    ->maxLength(100),
                                TextInput::make('author_role')
                                    ->label('Author Role')
                                    ->maxLength(100),
                            ]),
                        Section::make('Cover Image')
                            ->columnSpan(6)
                            ->schema([
                                FileUpload::make('cover')
                                    ->label('Cover Image')
                                    ->image()
                                    ->directory('insights')
                                    ->maxSize(2048),
                            ]),
                        Section::make('Article Content')
                            ->columnSpan(12)
                            ->schema([
                                Tabs::make('Article Content Languages')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                RichEditor::make('body.id')
                                                    ->label('[ID] Article Body')
                                                    ->toolbarButtons([
                                                        'bold', 'italic', 'underline', 'strike',
                                                        'h2', 'h3',
                                                        'bulletList', 'orderedList',
                                                        'blockquote', 'link',
                                                        'redo', 'undo',
                                                    ])
                                                    ->columnSpanFull(),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                RichEditor::make('body.en')
                                                    ->label('[EN] Article Body')
                                                    ->toolbarButtons([
                                                        'bold', 'italic', 'underline', 'strike',
                                                        'h2', 'h3',
                                                        'bulletList', 'orderedList',
                                                        'blockquote', 'link',
                                                        'redo', 'undo',
                                                    ])
                                                    ->columnSpanFull(),
                                            ]),
                                    ])->columnSpanFull(),
                            ]),
                        Section::make('Excerpt / Summary')
                            ->description('Short teaser shown on article cards, the featured hero and search results.')
                            ->columnSpan(12)
                            ->collapsible()
                            ->schema([
                                Tabs::make('Excerpt Languages')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                Textarea::make('excerpt.id')
                                                    ->label('[ID] Excerpt')
                                                    ->rows(3)
                                                    ->maxLength(500),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                Textarea::make('excerpt.en')
                                                    ->label('[EN] Excerpt')
                                                    ->rows(3)
                                                    ->maxLength(500),
                                            ]),
                                    ])->columnSpanFull(),
                            ]),
                        Section::make('Topics / Tags')
                            ->description('Shown as #hashtags under the article. Press Enter after each tag.')
                            ->columnSpan(12)
                            ->collapsible()
                            ->schema([
                                Tabs::make('Tags Languages')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TagsInput::make('tags.id')->label('[ID] Tags')->placeholder('Add tag'),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TagsInput::make('tags.en')->label('[EN] Tags')->placeholder('Add tag'),
                                            ]),
                                    ])->columnSpanFull(),
                            ]),
                        Section::make('FAQ')
                            ->description('Frequently asked questions shown at the bottom of the article. Leave empty to hide the FAQ section.')
                            ->columnSpan(12)
                            ->collapsible()
                            ->collapsed()
                            ->schema([
                                Tabs::make('FAQ Languages')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                Repeater::make('faqs.id')
                                                    ->label('[ID] FAQ')
                                                    ->schema([
                                                        TextInput::make('q')->label('Question')->required()->maxLength(500),
                                                        Textarea::make('a')->label('Answer')->required()->rows(3),
                                                    ])
                                                    ->itemLabel(fn (array $state): ?string => $state['q'] ?? null)
                                                    ->addActionLabel('Add question')
                                                    ->reorderableWithButtons()
                                                    ->collapsible()
                                                    ->defaultItems(0),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                Repeater::make('faqs.en')
                                                    ->label('[EN] FAQ')
                                                    ->schema([
                                                        TextInput::make('q')->label('Question')->required()->maxLength(500),
                                                        Textarea::make('a')->label('Answer')->required()->rows(3),
                                                    ])
                                                    ->itemLabel(fn (array $state): ?string => $state['q'] ?? null)
                                                    ->addActionLabel('Add question')
                                                    ->reorderableWithButtons()
                                                    ->collapsible()
                                                    ->defaultItems(0),
                                            ]),
                                    ])->columnSpanFull(),
                            ]),
                        Section::make('Regulatory References & Citations')
                            ->description('Sources cited by this article (same list for both languages). Leave empty to hide the section.')
                            ->columnSpan(12)
                            ->collapsible()
                            ->collapsed()
                            ->schema([
                                Repeater::make('references')
                                    ->label('References')
                                    ->schema([
                                        TextInput::make('title')->label('Title')->required()->maxLength(500)->columnSpanFull(),
                                        TextInput::make('source')->label('Source / Publisher')->maxLength(255),
                                        TextInput::make('type')->label('Type (e.g. Presidential Regulation)')->maxLength(100),
                                        TextInput::make('year')->label('Year')->maxLength(10),
                                    ])
                                    ->columns(3)
                                    ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                                    ->addActionLabel('Add reference')
                                    ->reorderableWithButtons()
                                    ->collapsible()
                                    ->defaultItems(0)
                                    ->columnSpanFull(),
                            ]),
                    ])
            ]);
    }
}

