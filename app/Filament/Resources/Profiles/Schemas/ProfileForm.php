<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Profile Identity')
                    ->columns(3)
                    ->schema([
                        TextInput::make('call_name')
                            ->label('Call / Display Name')
                            ->placeholder('e.g. Ibu Helda, Pak Gandhi')
                            ->required()
                            ->maxLength(100),
                        TextInput::make('full_title')
                            ->label('Full Formal Name & Degree')
                            ->placeholder('e.g. Helda, S.E., M.M.')
                            ->maxLength(255),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                    ]),
                Section::make('Role & Leadership Title')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Role')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('role.en')->label('[EN] Role / Designation')->placeholder('e.g. Co-Founder & Managing Partner')->maxLength(255),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('role.id')->label('[ID] Role / Designation')->placeholder('e.g. Co-Founder & Strategic Advisor')->maxLength(255),
                                ]),
                            ]),
                        Tabs::make('Bio')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('short_bio.en')->label('[EN] Professional Bio')->rows(3)->maxLength(1000),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('short_bio.id')->label('[ID] Professional Bio')->rows(3)->maxLength(1000),
                                ]),
                            ]),
                        TagsInput::make('focus_tags')
                            ->label('Expertise Focus Tags')
                            ->placeholder('Add focus area (e.g. Cross-Border Investment, Government Liaison)'),
                    ]),
                Section::make('Executive Portrait & Media')
                    ->columns(2)
                    ->schema([
                        FileUpload::make('image')
                            ->label('Profile Portrait Photo')
                            ->image()
                            ->directory('profiles')
                            ->maxSize(4096)
                            ->helperText('Executive portrait image (auto-converted to WebP).'),
                    ]),
                Section::make('Strategic Leadership Message / Quote Modal')
                    ->collapsible()
                    ->schema([
                        Tabs::make('Quote Message')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('quote_title.en')->label('[EN] Modal Quote Title')->placeholder('A Message from...')->maxLength(255),
                                    Textarea::make('quote_message.en')->label('[EN] Strategic Message')->rows(5)->maxLength(5000),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('quote_title.id')->label('[ID] Modal Quote Title')->placeholder('Pesan Strategis dari...')->maxLength(255),
                                    Textarea::make('quote_message.id')->label('[ID] Strategic Message')->rows(5)->maxLength(5000),
                                ]),
                            ]),
                    ]),
            ]);
    }
}
