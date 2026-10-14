<?php

namespace App\Filament\Resources\BookReviews\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Section;

class BookReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Book Info')
                    ->columns(2)
                    ->schema([
                        TextInput::make('title')
                            ->label('Book Title')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('author')
                            ->label('Author')
                            ->required()
                            ->maxLength(255),
                        Select::make('cat')
                            ->label('Category')
                            ->options(\App\Models\Category::pluck('name', 'name'))
                            ->createOptionForm([TextInput::make('name')->required()])
                            ->createOptionUsing(function(array $data) { \App\Models\Category::create($data); return $data['name']; })
                            ->required(),
                    ]),
                Section::make('Review')
                    ->schema([
                        Textarea::make('take')
                            ->label('Our Take (Review)')
                            ->required()
                            ->rows(4)
                            ->maxLength(1000),
                    ]),
                Section::make('Cover Image')
                    ->schema([
                        FileUpload::make('image')
                            ->label('Book Cover Image')
                            ->image()
                            ->directory('book_reviews')
                            ->maxSize(2048),
                    ]),
            ]);
    }
}

