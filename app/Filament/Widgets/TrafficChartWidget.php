<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\TrafficLog;
use Carbon\Carbon;

class TrafficChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;
    protected ?string $pollingInterval = '30s';
    protected int | string | array $columnSpan = 'full';
    protected ?string $heading = 'Traffic & Visitor Trends (Last 14 Days)';

    protected function getData(): array
    {
        $pageViews = [];
        $uniqueVisitors = [];
        $labels = [];

        for ($i = 13; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $labels[] = $date->format('M d');

            $pageViews[] = TrafficLog::whereDate('created_at', $date)->count();
            $uniqueVisitors[] = TrafficLog::whereDate('created_at', $date)->distinct('ip_address')->count('ip_address');
        }

        return [
            'datasets' => [
                [
                    'label' => 'Total Pageviews',
                    'data' => $pageViews,
                    'borderColor' => '#D62828',
                    'backgroundColor' => 'rgba(214, 40, 40, 0.15)',
                    'fill' => true,
                    'tension' => 0.35,
                ],
                [
                    'label' => 'Unique Visitors',
                    'data' => $uniqueVisitors,
                    'borderColor' => '#0A8754',
                    'backgroundColor' => 'rgba(10, 135, 84, 0.1)',
                    'fill' => true,
                    'tension' => 0.35,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
