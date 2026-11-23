<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageStatistic;
use App\Models\TrafficLog;
use App\Models\Insight;

class TrafficLogSeeder extends Seeder
{
    /**
     * Never generate dummy traffic logs; only synchronize real statistics from traffic_logs.
     */
    public function run(): void
    {
        PageStatistic::syncFromLogs();

        // Sync each insight's views_count from real logged article traffic
        $counts = TrafficLog::selectRaw('content_id, count(*) as total')
            ->where('content_type', 'article')
            ->whereNotNull('content_id')
            ->groupBy('content_id')
            ->pluck('total', 'content_id');

        Insight::query()->update(['views_count' => 0]);
        foreach ($counts as $id => $total) {
            Insight::where('id', $id)->update(['views_count' => (int) $total]);
        }
    }
}
