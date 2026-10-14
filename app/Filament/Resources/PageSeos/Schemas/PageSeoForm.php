<?php

namespace App\Filament\Resources\PageSeos\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;

class PageSeoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Page Information')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                                TextInput::make('page_name')
                                    ->label('Page Display Name')
                                    ->required()
                                    ->placeholder('e.g., Home Page, About Us')
                                    ->maxLength(255),
                                TextInput::make('page_code')
                                    ->label('Page Identifier Code (Route Key)')
                                    ->required()
                                    ->disabled(fn ($record) => $record !== null)
                                    ->helperText('Unique system key: home, about, services, consultancy, training, market_intelligence, article, client, case_study, social_impact, career, contact')
                                    ->maxLength(100),
                            ]),

                        Section::make('Google Search Engine Meta (Title & Description)')
                            ->description('These tags are displayed in Google search engine result pages (SERP).')
                            ->columnSpan(12)
                            ->schema([
                                Tabs::make('Meta Title')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TextInput::make('meta_title.id')
                                                    ->label('[ID] Meta Title')
                                                    ->placeholder('e.g., 8vice | Solusi Strategis & Konsultasi Bisnis')
                                                    ->helperText('Recommended: 50–60 characters. Used as browser tab title and Google SERP headline.')
                                                    ->maxLength(255),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TextInput::make('meta_title.en')
                                                    ->label('[EN] Meta Title')
                                                    ->placeholder('e.g., 8vice | Strategic Advisory & Corporate Intelligence')
                                                    ->helperText('Recommended: 50–60 characters. Used as browser tab title and Google SERP headline.')
                                                    ->maxLength(255),
                                            ]),
                                    ])->columnSpanFull(),

                                Tabs::make('Meta Description')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                Textarea::make('meta_description.id')
                                                    ->label('[ID] Meta Description')
                                                    ->rows(3)
                                                    ->placeholder('Ringkasan konten halaman untuk hasil pencarian Google...')
                                                    ->helperText('Recommended: 150–160 characters. Direct impact on Google click-through rate.'),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                Textarea::make('meta_description.en')
                                                    ->label('[EN] Meta Description')
                                                    ->rows(3)
                                                    ->placeholder('Summary of the page content for Google search snippets...')
                                                    ->helperText('Recommended: 150–160 characters. Direct impact on Google click-through rate.'),
                                            ]),
                                    ])->columnSpanFull(),

                                Tabs::make('Keywords')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TextInput::make('meta_keywords.id')
                                                    ->label('[ID] Meta Keywords (Comma Separated)')
                                                    ->placeholder('konsultasi bisnis, masuk pasar indonesia, izin usaha')
                                                    ->maxLength(500),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TextInput::make('meta_keywords.en')
                                                    ->label('[EN] Meta Keywords (Comma Separated)')
                                                    ->placeholder('market entry indonesia, business consulting jakarta, corporate strategy')
                                                    ->maxLength(500),
                                            ]),
                                    ])->columnSpanFull(),
                            ]),

                        Section::make('OpenGraph (Social Share Image & Cards)')
                            ->description('Visual and card data when this page is shared on WhatsApp, LinkedIn, Facebook, X (Twitter), and Telegram.')
                            ->columnSpan(12)
                            ->columns(2)
                            ->schema([
                                FileUpload::make('og_image')
                                    ->label('OpenGraph Social Share Image (1200x630 px)')
                                    ->directory('seo')
                                    ->image()
                                    ->helperText('Upload a 1200x630 banner image for link previews. Supports WebP, PNG, JPG.')
                                    ->columnSpanFull(),
                                Select::make('og_type')
                                    ->label('OpenGraph Type')
                                    ->options([
                                        'website' => 'Website (Default for standard pages)',
                                        'article' => 'Article (For editorial & blog pages)',
                                        'business.business' => 'Business / Organization',
                                    ])
                                    ->default('website')
                                    ->required(),
                                Select::make('robots')
                                    ->label('Robots Indexing Directive')
                                    ->options([
                                        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' => 'Index, Follow (Allow Google indexing & large snippets - Recommended)',
                                        'noindex, follow' => 'Noindex, Follow (Hide page from Google, but follow links)',
                                        'noindex, nofollow' => 'Noindex, Nofollow (Completely hide page & ignore links)',
                                    ])
                                    ->default('index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
                                    ->required(),
                            ]),

                        Section::make('Advanced Technical SEO (Optional)')
                            ->collapsed()
                            ->columnSpan(12)
                            ->schema([
                                TextInput::make('canonical_url')
                                    ->label('Canonical URL Override (Optional)')
                                    ->placeholder('e.g., https://8vice.com/about (Leave empty to use automatic URL)')
                                    ->maxLength(500),
                                Textarea::make('structured_data')
                                    ->label('Custom Schema.org JSON-LD (Optional)')
                                    ->rows(4)
                                    ->placeholder('{"@context": "https://schema.org", "@type": "WebPage", ...}')
                                    ->helperText('Add custom JSON-LD schema markup if needed for specialized Google Rich Snippets.'),
                            ]),
                    ]),
            ]);
    }
}
