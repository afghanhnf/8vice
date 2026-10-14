<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\ContactMessage;
use Carbon\Carbon;

class ContactMessagesChart extends ChartWidget
{
    protected static bool $isDiscovered = false;
    public static function canView(): bool { return false; }
    protected static ?int $sort = 3;
    protected int | string | array $columnSpan = 1;
    protected ?string $heading = 'Contact Messages Trend (Last 7 Days)';

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $labels[] = $date->format('M d');
            $data[] = ContactMessage::whereDate('created_at', $date)->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Messages',
                    'data' => $data,
                    'backgroundColor' => '#10b981',
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
