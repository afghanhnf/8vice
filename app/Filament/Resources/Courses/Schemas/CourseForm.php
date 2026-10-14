<?php

namespace App\Filament\Resources\Courses\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;

class CourseForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Course Info')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->label('Course Title')
                            ->required()
                            ->maxLength(255)
                            ->columnSpanFull(),
                        TextInput::make('slug')
                            ->label('Slug (URL)')
                            ->maxLength(255),
                        Select::make('cat')
                            ->label('Category')
                            ->options(\App\Models\Category::pluck('name', 'name'))
                            ->createOptionForm([TextInput::make('name')->required()])
                            ->createOptionUsing(function(array $data) { \App\Models\Category::create($data); return $data['name']; })
                            ->required(),
                    ]),
                Section::make('Pricing')
                    ->columns(2)
                    ->schema([
                        Toggle::make('free')
                            ->label('Free Course?')
                            ->default(false),
                        TextInput::make('price')
                            ->label('Price')
                            ->placeholder('e.g. Rp 500.000 or Free')
                            ->maxLength(50),
                    ]),
                Section::make('Details')
                    ->columns(2)
                    ->schema([
                        TextInput::make('dur')
                            ->label('Duration')
                            ->placeholder('e.g. 1h 40m')
                            ->maxLength(50),
                        TextInput::make('lessons')
                            ->label('Lessons')
                            ->placeholder('e.g. 8 lessons')
                            ->maxLength(50),
                    ]),
                Section::make('Description')
                    ->schema([
                        Textarea::make('desc')
                            ->label('Course Description')
                            ->required()
                            ->rows(4)
                            ->maxLength(1000),
                    ]),
                Section::make('Cover')
                    ->schema([
                        FileUpload::make('cover')
                            ->label('Course Cover Image')
                            ->image()
                            ->directory('courses')
                            ->maxSize(2048),
                    ]),
            ]);
    }
}

