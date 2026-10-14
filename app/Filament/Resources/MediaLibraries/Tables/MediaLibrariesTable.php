<?php

namespace App\Filament\Resources\MediaLibraries\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;

class MediaLibrariesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('file_path')
                    ->label('Preview')
                    ->height(60)
                    ->width(90)
                    ->extraImgAttributes(['class' => 'rounded-lg object-cover shadow-sm'])
                    ->defaultImageUrl(asset('images/og-default.webp')),

                TextColumn::make('title')
                    ->label('Asset Title & File Name')
                    ->weight('bold')
                    ->description(fn ($record) => ($record->file_name ?? basename($record->file_path)) . ' • ' . ($record->dimensions ?? '—'))
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category')
                    ->label('Category')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'SEO & OG Banners' => 'primary',
                        'Article Covers' => 'warning',
                        'Hero & Banners' => 'danger',
                        'Client Logos' => 'info',
                        'Team Profiles' => 'success',
                        'Case Studies' => 'gray',
                        default => 'gray',
                    })
                    ->sortable(),

                TextColumn::make('alt_text')
                    ->label('Alt Text (SEO & Accessibility)')
                    ->formatStateUsing(function ($state) {
                        if (is_array($state)) {
                            $en = $state['en'] ?? '';
                            $id = $state['id'] ?? '';
                            return "[EN]: " . substr($en, 0, 35) . ($en ? '...' : '') . " | [ID]: " . substr($id, 0, 35) . ($id ? '...' : '');
                        }
                        return $state ?: '—';
                    })
                    ->color('gray')
                    ->limit(55),

                TextColumn::make('file_size')
                    ->label('Size')
                    ->badge()
                    ->color('gray')
                    ->sortable(),

                TextColumn::make('updated_at')
                    ->label('Last Modified')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'SEO & OG Banners' => 'SEO & OG Banners',
                        'Article Covers' => 'Article Covers',
                        'Case Studies' => 'Case Studies',
                        'Hero & Banners' => 'Hero & Banners',
                        'Client Logos' => 'Client Logos',
                        'Team Profiles' => 'Team Profiles',
                        'Services & Methodology' => 'Services & Methodology',
                        'Site Assets' => 'Site Assets',
                    ]),
            ])
            ->recordActions([
                // Quick Modal to Edit Alt & Replace Image directly without opening another page
                Action::make('quick_edit')
                    ->label('Quick Edit')
                    ->icon('heroicon-m-pencil-square')
                    ->color('primary')
                    ->modalHeading(fn ($record) => "Quick Edit: {$record->title}")
                    ->modalWidth('2xl')
                    ->fillForm(fn ($record) => [
                        'file_path' => $record->file_path,
                        'title' => $record->title,
                        'alt_id' => is_array($record->alt_text) ? ($record->alt_text['id'] ?? '') : '',
                        'alt_en' => is_array($record->alt_text) ? ($record->alt_text['en'] ?? '') : '',
                    ])
                    ->form([
                        FileUpload::make('file_path')
                            ->label('Replace Image File')
                            ->image()
                            ->imageEditor()
                            ->directory('images')
                            ->helperText('Upload a replacement image to instantly update this asset across the entire website.'),

                        TextInput::make('alt_id')
                            ->label('[ID] Alt Text (Bahasa Indonesia)')
                            ->placeholder('Deskripsi gambar untuk Google Image SEO')
                            ->helperText('Teks alternatif saat gambar tidak dapat dimuat atau dibaca Google crawler.')
                            ->maxLength(255),

                        TextInput::make('alt_en')
                            ->label('[EN] Alt Text (English)')
                            ->placeholder('Image description for Google Image SEO')
                            ->helperText('Alternative text for international search engine accessibility.')
                            ->maxLength(255),
                    ])
                    ->action(function ($record, array $data) {
                        $newPath = $data['file_path'] ?? $record->file_path;
                        $record->update([
                            'file_path' => $newPath,
                            'alt_text' => [
                                'id' => $data['alt_id'] ?? '',
                                'en' => $data['alt_en'] ?? '',
                            ],
                        ]);

                        if ($newPath !== $record->file_path) {
                            $record->syncToLinkedModel($newPath);
                        }
                    }),

                EditAction::make()
                    ->label('Full Details'),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('updated_at', 'desc');
    }
}
