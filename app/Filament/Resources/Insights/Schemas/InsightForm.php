<?php

namespace App\Filament\Resources\Insights\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\DatePicker;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Utilities\Get;

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
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                TextInput::make('t.cn')
                                                    ->label('[CN] Title')
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
                        Section::make('Locked Research Paper & Scalev Checkout')
                            ->description('Items marked as Locked Research Paper are separated from News & Articles on /insights and link directly to Scalev.')
                            ->columnSpan(12)
                            ->columns(12)
                            ->schema([
                                Toggle::make('is_research_paper')
                                    ->label('Is Locked Research Paper?')
                                    ->helperText('Displays in the dedicated Locked Research Papers section above News & Articles.')
                                    ->default(false)
                                    ->live()
                                    ->columnSpan(4),
                                Toggle::make('is_paywall_locked')
                                    ->label('Lock Document Access')
                                    ->helperText('Shows Locked Paper status badge & gated preview on the detail page.')
                                    ->default(true)
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                TextInput::make('paper_pages')
                                    ->label('Page Count')
                                    ->numeric()
                                    ->minValue(1)
                                    ->suffix('Pages')
                                    ->default(58)
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                TextInput::make('research_paper_link')
                                    ->label('Scalev Direct Checkout / Product URL')
                                    ->url()
                                    ->maxLength(500)
                                    ->placeholder('https://8vice.scalev.id/your-research-paper')
                                    ->helperText('Direct external link to your Scalev checkout or sales page. Clicking Unlock/Buy sends readers directly here.')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(8),
                                TextInput::make('paper_file_format')
                                    ->label('File Format & Deliverables')
                                    ->maxLength(255)
                                    ->placeholder('PDF (58 Pages) + Raw Financial Model (.XLSX)')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                TextInput::make('paper_price_idr')
                                    ->label('Selling Price (IDR)')
                                    ->numeric()
                                    ->minValue(0)
                                    ->prefix('Rp')
                                    ->placeholder('1490000')
                                    ->helperText('Numeric value in Rupiah (formatted automatically as Rp 1.490.000).')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                TextInput::make('paper_original_price_idr')
                                    ->label('Normal / Strikethrough Price (IDR)')
                                    ->numeric()
                                    ->minValue(0)
                                    ->prefix('Rp')
                                    ->placeholder('2490000')
                                    ->helperText('Optional higher anchor price shown crossed-out beside Selling Price.')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                TextInput::make('paper_price_usd')
                                    ->label('USD Equivalent Label (Optional)')
                                    ->maxLength(60)
                                    ->placeholder('$99 USD')
                                    ->helperText('Optional international currency label shown next to IDR price.')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(4),
                                Tabs::make('Paper Localization & Deliverables')
                                    ->visible(fn (Get $get): bool => (bool) $get('is_research_paper'))
                                    ->columnSpan(12)
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TextInput::make('paper_badge.id')
                                                    ->label('[ID] Badge Label')
                                                    ->placeholder('RISET MENDALAM · DOKUMEN TERKUNCI')
                                                    ->maxLength(120),
                                                TextInput::make('paper_cta_label.id')
                                                    ->label('[ID] Scalev Button Label')
                                                    ->placeholder('Beli & Buka Akses via Scalev')
                                                    ->maxLength(120),
                                                Repeater::make('paper_includes.id')
                                                    ->label('[ID] Included Deliverables')
                                                    ->simple(
                                                        TextInput::make('item')
                                                            ->placeholder('Contoh: Laporan Riset Lengkap 58 Halaman (PDF)')
                                                            ->required()
                                                            ->maxLength(255)
                                                    )
                                                    ->addActionLabel('Add Deliverable')
                                                    ->defaultItems(0)
                                                    ->reorderableWithButtons(),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TextInput::make('paper_badge.en')
                                                    ->label('[EN] Badge Label')
                                                    ->placeholder('FLAGSHIP RESEARCH PAPER · LOCKED')
                                                    ->maxLength(120),
                                                TextInput::make('paper_cta_label.en')
                                                    ->label('[EN] Scalev Button Label')
                                                    ->placeholder('Unlock & Buy via Scalev')
                                                    ->maxLength(120),
                                                Repeater::make('paper_includes.en')
                                                    ->label('[EN] Included Deliverables')
                                                    ->simple(
                                                        TextInput::make('item')
                                                            ->placeholder('e.g. Full 58-Page Research Paper PDF (300 DPI)')
                                                            ->required()
                                                            ->maxLength(255)
                                                    )
                                                    ->addActionLabel('Add Deliverable')
                                                    ->defaultItems(0)
                                                    ->reorderableWithButtons(),
                                            ]),
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                TextInput::make('paper_badge.cn')
                                                    ->label('[CN] Badge Label')
                                                    ->placeholder('核心深度研究报告 · 锁定专享')
                                                    ->maxLength(120),
                                                TextInput::make('paper_cta_label.cn')
                                                    ->label('[CN] Scalev Button Label')
                                                    ->placeholder('通过 Scalev 购买解锁全文')
                                                    ->maxLength(120),
                                                Repeater::make('paper_includes.cn')
                                                    ->label('[CN] Included Deliverables')
                                                    ->simple(
                                                        TextInput::make('item')
                                                            ->placeholder('例如：完整 58 页深度研究报告 PDF 文档')
                                                            ->required()
                                                            ->maxLength(255)
                                                    )
                                                    ->addActionLabel('Add Deliverable')
                                                    ->defaultItems(0)
                                                    ->reorderableWithButtons(),
                                            ]),
                                    ]),
                            ]),
                        Section::make('Author')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                                TextInput::make('author_name')
                                    ->label('Author Name')
                                    ->maxLength(100),
                                TextInput::make('author_role')
                                    ->label('Author Role')
                                    ->maxLength(100),
                            ]),
                        Section::make('Cover Image')
                            ->columnSpan(12)
                            ->columns(1)
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
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                RichEditor::make('body.cn')
                                                    ->label('[CN] Article Body')
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
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                Textarea::make('excerpt.cn')
                                                    ->label('[CN] Excerpt')
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
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                TagsInput::make('tags.cn')->label('[CN] Tags')->placeholder('Add tag'),
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
                                        Tabs\Tab::make('CN')
                                            ->schema([
                                                Repeater::make('faqs.cn')
                                                    ->label('[CN] FAQ')
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

