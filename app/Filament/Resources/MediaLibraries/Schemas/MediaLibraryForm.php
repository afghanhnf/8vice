<?php

namespace App\Filament\Resources\MediaLibraries\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Placeholder;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;

class MediaLibraryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Grid::make(12)
                    ->schema([
                        Section::make('Image Asset & Replacement')
                            ->description('Preview the current image or upload a replacement. Replacing the image will automatically update where it is used across the website.')
                            ->columnSpan(8)
                            ->schema([
                                FileUpload::make('file_path')
                                    ->label('Image File')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('images')
                                    ->required()
                                    ->helperText('Supported formats: WebP, PNG, JPG, SVG. WebP is highly recommended for Google PageSpeed performance.')
                                    ->afterStateUpdated(function ($state, $record) {
                                        if ($record && $state) {
                                            $record->syncToLinkedModel($state);
                                        }
                                    }),

                                Tabs::make('Alt Text (Google Image SEO)')
                                    ->tabs([
                                        Tabs\Tab::make('ID')
                                            ->schema([
                                                TextInput::make('alt_text.id')
                                                    ->label('[ID] Alt Text')
                                                    ->placeholder('Deskripsi gambar untuk Google Image SEO')
                                                    ->helperText('Teks alternatif bahasa Indonesia saat gambar gagal dimuat atau dibaca oleh robot Google / Screen Reader.')
                                                    ->maxLength(255),
                                            ]),
                                        Tabs\Tab::make('EN')
                                            ->schema([
                                                TextInput::make('alt_text.en')
                                                    ->label('[EN] Alt Text')
                                                    ->placeholder('Image description for Google Image SEO')
                                                    ->helperText('English alternative text for accessibility and search engine indexing.')
                                                    ->maxLength(255),
                                            ]),
                                    ]),

                                Textarea::make('caption')
                                    ->label('Caption / Internal Notes')
                                    ->placeholder('Optional notes regarding where this visual asset is featured.')
                                    ->rows(2),
                            ]),

                        Section::make('File Details & Usage Information')
                            ->columnSpan(4)
                            ->schema([
                                TextInput::make('title')
                                    ->label('Asset Title')
                                    ->required()
                                    ->placeholder('e.g., Hero Consultancy Banner'),

                                Select::make('category')
                                    ->label('Asset Category')
                                    ->options([
                                        'SEO & OG Banners' => 'SEO & OG Banners',
                                        'Article Covers' => 'Article Covers',
                                        'Case Studies' => 'Case Studies',
                                        'Hero & Banners' => 'Hero & Banners',
                                        'Client Logos' => 'Client Logos',
                                        'Team Profiles' => 'Team Profiles',
                                        'Services & Methodology' => 'Services & Methodology',
                                        'Site Assets' => 'Site Assets',
                                    ])
                                    ->required(),

                                Placeholder::make('file_name_display')
                                    ->label('File Name')
                                    ->content(fn ($record) => $record?->file_name ?? '—'),

                                Placeholder::make('dimensions_display')
                                    ->label('Dimensions')
                                    ->content(fn ($record) => $record?->dimensions ?? '—'),

                                Placeholder::make('file_size_display')
                                    ->label('File Size')
                                    ->content(fn ($record) => $record?->file_size ?? '—'),

                                Placeholder::make('linked_model_display')
                                    ->label('Used In (Linked Model)')
                                    ->content(function ($record) {
                                        if (!$record || !$record->model_type) return 'Static Asset / Global';
                                        $shortName = class_basename($record->model_type);
                                        return "{$shortName} (ID #{$record->model_id}) [Field: {$record->model_field}]";
                                    }),
                            ]),
                    ]),
            ]);
    }
}
