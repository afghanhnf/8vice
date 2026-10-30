<?php

namespace App\Filament\Resources\MediaLibraries;

use App\Filament\Resources\MediaLibraries\Pages\EditMediaLibrary;
use App\Filament\Resources\MediaLibraries\Pages\ListMediaLibraries;
use App\Filament\Resources\MediaLibraries\Schemas\MediaLibraryForm;
use App\Filament\Resources\MediaLibraries\Tables\MediaLibrariesTable;
use App\Models\MediaLibrary;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class MediaLibraryResource extends Resource
{
    protected static ?string $model = MediaLibrary::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-photo';

    protected static string|\UnitEnum|null $navigationGroup = 'Media & Assets';

    protected static ?string $navigationLabel = 'Images Library';

    protected static ?string $modelLabel = 'Image Asset';

    protected static ?string $pluralModelLabel = 'Images Library';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return MediaLibraryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MediaLibrariesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMediaLibraries::route('/'),
            'edit' => EditMediaLibrary::route('/{record}/edit'),
        ];
    }
}
