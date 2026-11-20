<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Profile Identity')
                    ->columnSpanFull()
                    ->columns(4)
                    ->schema([
                        TextInput::make('call_name')
                            ->label('Call / Key Name')
                            ->placeholder('e.g. Helda Chandra')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('full_title')
                            ->label('Display Full Name')
                            ->placeholder('e.g. Helda Chandra')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('chinese_name')
                            ->label('Chinese Name')
                            ->placeholder('e.g. 曾宪茹')
                            ->maxLength(100),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                    ]),

                Section::make('Role, Expertise, Bio & Experiences (Multilingual EN / ID / CN)')
                    ->description('All fields below map directly to the People Behind 8 Vice section on /about.')
                    ->columnSpanFull()
                    ->columns(1)
                    ->schema([
                        Tabs::make('Profile Translations')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('English (EN)')->schema([
                                    TextInput::make('role.en')
                                        ->label('[EN] Job Title / Designation')
                                        ->placeholder('e.g. Chief Executive Officer')
                                        ->required()
                                        ->maxLength(255),
                                    TextInput::make('expertise.en')
                                        ->label('[EN] Expertise Line')
                                        ->placeholder('Corporate Strategy, Business Development & Overall Growth')
                                        ->helperText('Shown in red italic below title as "Expertise in ..."')
                                        ->maxLength(500),
                                    Textarea::make('short_bio.en')
                                        ->label('[EN] Biography Paragraphs')
                                        ->rows(4)
                                        ->helperText('Use a blank line between paragraphs.')
                                        ->maxLength(3000),
                                    Repeater::make('experiences.en')
                                        ->label('[EN] Experiences List')
                                        ->simple(TextInput::make('item')->required()->maxLength(500))
                                        ->reorderable()
                                        ->addActionLabel('Add Experience (EN)')
                                        ->defaultItems(0),
                                ]),
                                Tabs\Tab::make('Indonesian (ID)')->schema([
                                    TextInput::make('role.id')
                                        ->label('[ID] Job Title / Designation')
                                        ->placeholder('e.g. Chief Executive Officer')
                                        ->maxLength(255),
                                    TextInput::make('expertise.id')
                                        ->label('[ID] Expertise Line')
                                        ->placeholder('Corporate Strategy, Business Development & Overall Growth')
                                        ->helperText('Ditampilkan miring merah di bawah jabatan sebagai "Expertise in ..."')
                                        ->maxLength(500),
                                    Textarea::make('short_bio.id')
                                        ->label('[ID] Biography Paragraphs')
                                        ->rows(4)
                                        ->helperText('Gunakan baris kosong untuk memisahkan paragraf.')
                                        ->maxLength(3000),
                                    Repeater::make('experiences.id')
                                        ->label('[ID] Experiences List')
                                        ->simple(TextInput::make('item')->required()->maxLength(500))
                                        ->reorderable()
                                        ->addActionLabel('Tambah Pengalaman (ID)')
                                        ->defaultItems(0),
                                ]),
                                Tabs\Tab::make('Mandarin (CN)')->schema([
                                    TextInput::make('role.cn')
                                        ->label('[CN] 职务头衔')
                                        ->placeholder('e.g. Chief Executive Officer')
                                        ->maxLength(255),
                                    TextInput::make('expertise.cn')
                                        ->label('[CN] 专业领域说明')
                                        ->placeholder('Corporate Strategy, Business Development & Overall Growth')
                                        ->helperText('显示在头衔下方 ("Expertise in ...")')
                                        ->maxLength(500),
                                    Textarea::make('short_bio.cn')
                                        ->label('[CN] 个人简介段落')
                                        ->rows(4)
                                        ->helperText('段落之间请空一行。')
                                        ->maxLength(3000),
                                    Repeater::make('experiences.cn')
                                        ->label('[CN] 专业履历与经验列表')
                                        ->simple(TextInput::make('item')->required()->maxLength(500))
                                        ->reorderable()
                                        ->addActionLabel('添加履历条目 (CN)')
                                        ->defaultItems(0),
                                ]),
                            ]),

                        TagsInput::make('focus_tags')
                            ->label('Summary Focus Tags')
                            ->placeholder('Add tag')
                            ->columnSpanFull(),
                    ]),

                Section::make('Portrait Photo & Social Links')
                    ->columnSpanFull()
                    ->columns(2)
                    ->schema([
                        FileUpload::make('image')
                            ->label('Profile Portrait Photo (1:1 Square)')
                            ->image()
                            ->disk('public')
                            ->directory('profiles')
                            ->maxSize(4096)
                            ->helperText('Recommended: 1:1 square WebP/JPG/PNG.'),
                        Group::make([
                            TextInput::make('socials.linkedin')
                                ->label('LinkedIn URL')
                                ->url()
                                ->maxLength(500),
                            TextInput::make('socials.instagram')
                                ->label('Instagram URL')
                                ->url()
                                ->maxLength(500),
                            TextInput::make('socials.email')
                                ->label('Email Link (mailto:...)')
                                ->placeholder('mailto:hello@8vice.com')
                                ->maxLength(255),
                        ])->columns(1),
                    ]),

                Section::make('Strategic Leadership Message / Modal Quote')
                    ->columnSpanFull()
                    ->columns(1)
                    ->collapsible()
                    ->collapsed()
                    ->schema([
                        Tabs::make('Quote Message')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('quote_title.en')->label('[EN] Modal Quote Title')->maxLength(255),
                                    Textarea::make('quote_message.en')
                                        ->label('[EN] Strategic Message')
                                        ->rows(4)
                                        ->formatStateUsing(fn ($state) => is_array($state) ? implode("\n\n", $state) : $state)
                                        ->dehydrateStateUsing(fn ($state) => is_string($state) ? array_values(array_filter(preg_split('/\r\n|\r|\n/', trim($state)))) : $state),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('quote_title.id')->label('[ID] Modal Quote Title')->maxLength(255),
                                    Textarea::make('quote_message.id')
                                        ->label('[ID] Strategic Message')
                                        ->rows(4)
                                        ->formatStateUsing(fn ($state) => is_array($state) ? implode("\n\n", $state) : $state)
                                        ->dehydrateStateUsing(fn ($state) => is_string($state) ? array_values(array_filter(preg_split('/\r\n|\r|\n/', trim($state)))) : $state),
                                ]),
                                Tabs\Tab::make('CN')->schema([
                                    TextInput::make('quote_title.cn')->label('[CN] Modal Quote Title')->maxLength(255),
                                    Textarea::make('quote_message.cn')
                                        ->label('[CN] Strategic Message')
                                        ->rows(4)
                                        ->formatStateUsing(fn ($state) => is_array($state) ? implode("\n\n", $state) : $state)
                                        ->dehydrateStateUsing(fn ($state) => is_string($state) ? array_values(array_filter(preg_split('/\r\n|\r|\n/', trim($state)))) : $state),
                                ]),
                            ]),
                    ]),
            ]);
    }
}
