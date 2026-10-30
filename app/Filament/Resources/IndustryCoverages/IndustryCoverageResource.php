<?php

namespace App\Filament\Resources\IndustryCoverages;

use App\Filament\Resources\IndustryCoverages\Pages\CreateIndustryCoverage;
use App\Filament\Resources\IndustryCoverages\Pages\EditIndustryCoverage;
use App\Filament\Resources\IndustryCoverages\Pages\ListIndustryCoverages;
use App\Filament\Resources\IndustryCoverages\Schemas\IndustryCoverageForm;
use App\Filament\Resources\IndustryCoverages\Tables\IndustryCoveragesTable;
use App\Models\IndustryCoverage;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class IndustryCoverageResource extends Resource
{
    protected static ?string $model = IndustryCoverage::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGlobeAlt;
    protected static string|\UnitEnum|null $navigationGroup = 'Core Advisory & Services';

    protected static ?string $navigationLabel = 'Industry Coverage';
    protected static ?int $navigationSort = 2;


    public static function form(Schema $schema): Schema
    {
        return IndustryCoverageForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return IndustryCoveragesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListIndustryCoverages::route('/'),
            'create' => CreateIndustryCoverage::route('/create'),
            'edit' => EditIndustryCoverage::route('/{record}/edit'),
        ];
    }
}
