<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected static bool $isDiscovered = false;
    public static function canView(): bool { return false; }
    protected static ?int $sort = 1;
    protected function getStats(): array
    {
        return [
            Stat::make('Total Subscribers', \App\Models\Subscriber::count())
                ->description('Total users subscribed to newsletter')
                ->descriptionIcon('heroicon-m-users')
                ->color('primary'),
                
            Stat::make('Contact Messages', \App\Models\ContactMessage::count())
                ->description('Total inquiries received')
                ->descriptionIcon('heroicon-m-chat-bubble-left-ellipsis')
                ->color('success'),
                
            Stat::make('Job Applications', \App\Models\JobApplication::count())
                ->description('Total applications submitted')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('warning'),
        ];
    }
}
