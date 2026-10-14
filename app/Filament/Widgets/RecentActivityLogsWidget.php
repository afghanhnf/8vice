<?php

namespace App\Filament\Widgets;

use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use App\Models\TrafficLog;

class RecentActivityLogsWidget extends BaseWidget
{
    protected static ?int $sort = 5;
    protected ?string $pollingInterval = '15s';
    protected int | string | array $columnSpan = 'full';
    protected static ?string $heading = 'Recent Traffic Activity Logs (Real-time Stream)';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                TrafficLog::query()->latest('id')
            )
            ->columns([
                TextColumn::make('created_at')
                    ->label('Timestamp')
                    ->since()
                    ->dateTimeTooltip('Y-m-d H:i:s')
                    ->sortable(),

                TextColumn::make('page_name')
                    ->label('Page Visited')
                    ->weight('bold')
                    ->description(fn ($record) => $record->path)
                    ->searchable(),

                TextColumn::make('device')
                    ->label('Device & Browser')
                    ->formatStateUsing(fn ($record) => "{$record->device} ({$record->browser})")
                    ->badge()
                    ->color(fn ($record) => match ($record->device) {
                        'Desktop' => 'info',
                        'Mobile' => 'success',
                        'Tablet' => 'warning',
                        default => 'gray',
                    }),

                TextColumn::make('ip_address')
                    ->label('IP Address')
                    ->fontFamily('mono'),

                TextColumn::make('referer')
                    ->label('Referer Channel')
                    ->formatStateUsing(function ($state) {
                        if (!$state) return 'Direct / None';
                        if (str_contains($state, 'google')) return 'Google Search';
                        if (str_contains($state, 'linkedin')) return 'LinkedIn';
                        if (str_contains($state, 'whatsapp')) return 'WhatsApp';
                        if (str_contains($state, 'wechat') || str_contains($state, 'weixin')) return 'WeChat';
                        $host = parse_url($state, PHP_URL_HOST);
                        return $host ?: substr($state, 0, 30);
                    })
                    ->badge()
                    ->color(fn ($state) => $state ? 'gray' : 'primary'),
            ])
            ->paginated([10, 25, 50])
            ->defaultPaginationPageOption(10);
    }
}
