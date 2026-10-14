<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Profile Section')
                    ->schema([
                        Tabs::make('Title')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([TextInput::make('title.id')->required()->maxLength(255)]),
                                Tabs\Tab::make('EN')->schema([TextInput::make('title.en')->maxLength(255)]),
                            ]),
                        Tabs::make('Description')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('ID')->schema([Textarea::make('description.id')->required()->rows(6)->maxLength(65535)]),
                                Tabs\Tab::make('EN')->schema([Textarea::make('description.en')->rows(6)->maxLength(65535)]),
                            ]),
                        FileUpload::make('image')->label('Section Image')->image()->directory('profiles')->maxSize(2048),
                    ])
            ]);
    }
}
