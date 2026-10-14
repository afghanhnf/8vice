<?php

namespace App\Filament\Resources\Subscribers\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;

class SubscriberForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Subscriber Details')
                    ->schema([
                        TextInput::make('name')
                            ->maxLength(255),
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        Textarea::make('message')
                            ->maxLength(65535)
                            ->columnSpanFull(),
                        TextInput::make('ip_address')
                            ->maxLength(255),
                    ])
                    ->columns(2),
            ]);
    }
}
