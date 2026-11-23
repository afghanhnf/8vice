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

        $since30Days = Carbon::today()->subDays(29);
        $totalViews = TrafficLog::where('created_at', '>=', $since30Days)->count();
        $uniqueVisitors = TrafficLog::where('created_at', '>=', $since30Days)
            ->distinct('ip_address')
            ->count('ip_address');

        // Top External Acquisition Source (ignore self-referrals)
        $topReferer = TrafficLog::whereNotNull('referer')
            ->where('referer', '!=', '')
            ->where('referer', 'not like', '%8vice.com%')
            ->where('referer', 'not like', '%127.0.0.1%')
            ->where('referer', 'not like', '%localhost%')
            ->selectRaw('CASE 
                WHEN LOWER(referer) LIKE "%google%" THEN "Google Search" 
                WHEN LOWER(referer) LIKE "%bing.%" OR LOWER(referer) LIKE "%baidu.%" OR LOWER(referer) LIKE "%yahoo.%" THEN "Bing / Baidu / Search"
                WHEN LOWER(referer) LIKE "%linkedin%" THEN "LinkedIn" 
                WHEN LOWER(referer) LIKE "%instagram%" THEN "Instagram"
                WHEN LOWER(referer) LIKE "%facebook%" OR LOWER(referer) LIKE "%fb.%" THEN "Facebook"
                WHEN LOWER(referer) LIKE "%whatsapp%" THEN "WhatsApp" 
                WHEN LOWER(referer) LIKE "%weixin%" OR LOWER(referer) LIKE "%wechat%" THEN "WeChat" 
                WHEN LOWER(referer) LIKE "%twitter%" OR LOWER(referer) LIKE "%t.co%" OR LOWER(referer) LIKE "%x.com%" THEN "X / Twitter"
                ELSE "External Referrals" 
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
                ->description('Real visitor pageviews (last 30 days)')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('primary')
                ->chart($sparkline),

            Stat::make('Unique Visitors (30 Days)', number_format($uniqueVisitors))
                ->description('Distinct IP addresses (last 30 days)')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),

            Stat::make('Top Acquisition Source', $topSourceLabel)
                ->description('Highest inbound traffic channel')
                ->descriptionIcon('heroicon-m-globe-alt')
                ->color('warning'),
        ];
    }
}
