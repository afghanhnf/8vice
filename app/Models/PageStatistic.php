<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageStatistic extends Model
{
    protected $guarded = [];

    /**
     * Increment or record a page view.
     */
    public static function recordView(string $path, string $pageName, ?string $ip = null): void
    {
        $stat = self::firstOrCreate(
            ['path' => $path],
            ['page_name' => $pageName, 'views_count' => 0, 'unique_visitors' => 0]
        );

        $stat->increment('views_count');

        if ($ip) {
            $uniqueCount = TrafficLog::where('path', $path)->distinct('ip_address')->count('ip_address');
            $stat->update(['unique_visitors' => max(1, $uniqueCount)]);
        }
    }

    /**
     * Recalculate all statistics from traffic_logs table.
     */
    public static function syncFromLogs(): void
    {
        $records = TrafficLog::selectRaw('path, page_name, count(*) as views, count(distinct ip_address) as visitors')
            ->where('content_type', '!=', 'article')
            ->groupBy('path', 'page_name')
            ->get();

        foreach ($records as $r) {
            self::updateOrCreate(
                ['path' => $r->path],
                [
                    'page_name' => $r->page_name,
                    'views_count' => $r->views,
                    'unique_visitors' => $r->visitors,
                ]
            );
        }
    }
}
