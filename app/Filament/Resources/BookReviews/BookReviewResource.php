<?php

namespace App\Filament\Resources\BookReviews;

use App\Filament\Resources\BookReviews\Pages\CreateBookReview;
use App\Filament\Resources\BookReviews\Pages\EditBookReview;
use App\Filament\Resources\BookReviews\Pages\ListBookReviews;
use App\Filament\Resources\BookReviews\Schemas\BookReviewForm;
use App\Filament\Resources\BookReviews\Tables\BookReviewsTable;
use App\Models\BookReview;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class BookReviewResource extends Resource
{
    protected static ?string $model = BookReview::class;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBookOpen;
    protected static string|\UnitEnum|null $navigationGroup = 'Website Content';
    protected static ?string $navigationLabel = 'Book Reviews';
    protected static bool $shouldRegisterNavigation = false;

    public static function form(Schema $schema): Schema
    {
        return BookReviewForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return BookReviewsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListBookReviews::route('/'),
            'create' => CreateBookReview::route('/create'),
            'edit' => EditBookReview::route('/{record}/edit'),
        ];
    }
}
