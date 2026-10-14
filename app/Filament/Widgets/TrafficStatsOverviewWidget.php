<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\TrafficLog;
use App\Models\ContactMessage;
use Carbon\Carbon;

class TrafficStatsOverviewWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 1;
    protected ?string $pollingInterval = '15s';

    protected function getStats(): array
    {
        $today = Carbon::today();
        $yesterday = Carbon::yesterday();

        $todayViews = TrafficLog::whereDate('created_at', $today)->count();
        $yesterdayViews = TrafficLog::whereDate('created_at', $yesterday)->count();

        $diffPercent = $yesterdayViews > 0 
            ? round((($todayViews - $yesterdayViews) / $yesterdayViews) * 100, 1) 
            : 0;

        $diffIcon = $diffPercent >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down';
        $diffColor = $diffPercent >= 0 ? 'success' : 'danger';
        $diffText = ($diffPercent >= 0 ? "+{$diffPercent}%" : "{$diffPercent}%") . ' vs yesterday';

        // 7 days sparkline
        $sparkline = [];
        for ($i = 6; $i >= 0; $i--) {
            $d = Carbon::today()->subDays($i);
            $sparkline[] = TrafficLog::whereDate('created_at', $d)->count();
        }

        $totalViews = TrafficLog::count();
        $uniqueVisitors = TrafficLog::distinct('ip_address')->count('ip_address');
        $totalInquiries = ContactMessage::count();

        // Top Referer
        $topReferer = TrafficLog::whereNotNull('referer')
            ->selectRaw('CASE 
                WHEN referer LIKE "%google%" THEN "Google Search" 
                WHEN referer LIKE "%linkedin%" THEN "LinkedIn" 
                WHEN referer LIKE "%whatsapp%" THEN "WhatsApp" 
                WHEN referer LIKE "%weixin%" OR referer LIKE "%wechat%" THEN "WeChat" 
                ELSE "Referrals / Other" 
            END as source, count(*) as count')
            ->groupBy('source')
            ->orderByDesc('count')
            ->first();

        $topSourceLabel = $topReferer ? "{$topReferer->source} ({$topReferer->count})" : "Direct Traffic";

        return [
            Stat::make('Today Pageviews', number_format($todayViews))
                ->description($diffText)
                ->descriptionIcon($diffIcon)
                ->color($diffColor)
                ->chart($sparkline),

            Stat::make('Total Pageviews (30 Days)', number_format($totalViews))
                ->description('Aggregated website traffic')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('primary')
                ->chart($sparkline),

            Stat::make('Unique Visitors', number_format($uniqueVisitors))
                ->description('Distinct IP addresses')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),

            Stat::make('Top Acquisition Source', $topSourceLabel)
                ->description('Highest inbound traffic channel')
                ->descriptionIcon('heroicon-m-globe-alt')
                ->color('warning'),
        ];
    }
}
