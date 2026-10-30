<?php

namespace App\Filament\Resources\Faqs\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class FaqForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('FAQ Category & Order')
                    ->columns(3)
                    ->schema([
                        Select::make('category')
                            ->options([
                                'Homepage' => 'Homepage (Bilateral FAQ)',
                                'Services' => 'Services (Advisory & Scopes)',
                                'Gateway' => 'Gateway (Indonesia-China Corridor)',
                                'General' => 'General Inquiries',
                            ])
                            ->default('Homepage')
                            ->required(),
                        TextInput::make('sort_order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0)
                            ->helperText('Lower numbers appear first.'),
                        Toggle::make('is_active')
                            ->label('Active on Website')
                            ->default(true),
                    ]),
                Section::make('Question')
                    ->schema([
                        Tabs::make('Question Tabs')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('question.id')->label('Pertanyaan (Bahasa Indonesia)')->required()->maxLength(500),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('question.en')->label('Question (English)')->required()->maxLength(500),
                                ]),
                            ]),
                    ]),
                Section::make('Answer')
                    ->schema([
                        Tabs::make('Answer Tabs')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([
                                    Textarea::make('answer.id')->label('Jawaban (Bahasa Indonesia)')->required()->rows(5)->maxLength(2000),
                                ]),
                                Tabs\Tab::make('EN')->schema([
                                    Textarea::make('answer.en')->label('Answer (English)')->required()->rows(5)->maxLength(2000),
                                ]),
                            ]),
                    ]),
            ]);
    }
}

