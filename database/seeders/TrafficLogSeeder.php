<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TrafficLog;
use App\Models\Insight;
use Carbon\Carbon;

class TrafficLogSeeder extends Seeder
{
    public function run(): void
    {
        // Only seed if empty
        if (TrafficLog::count() > 0) {
            return;
        }

        $insights = Insight::all();

        $pages = [
            ['path' => '/', 'name' => 'Home Page', 'weight' => 35, 'type' => 'page', 'id' => null],
            ['path' => '/services', 'name' => 'Our Services', 'weight' => 15, 'type' => 'page', 'id' => null],
            ['path' => '/about', 'name' => 'About Us', 'weight' => 10, 'type' => 'page', 'id' => null],
            ['path' => '/consultancy', 'name' => 'Strategic Consultancy', 'weight' => 12, 'type' => 'page', 'id' => null],
            ['path' => '/training', 'name' => 'Corporate Training', 'weight' => 8, 'type' => 'page', 'id' => null],
            ['path' => '/market-intelligence', 'name' => 'Market Intelligence', 'weight' => 9, 'type' => 'page', 'id' => null],
            ['path' => '/article', 'name' => 'Insights & Articles', 'weight' => 14, 'type' => 'page', 'id' => null],
            ['path' => '/client', 'name' => 'Clients & Partners', 'weight' => 6, 'type' => 'page', 'id' => null],
            ['path' => '/case-study', 'name' => 'Case Studies', 'weight' => 8, 'type' => 'page', 'id' => null],
            ['path' => '/contact', 'name' => 'Contact Us', 'weight' => 7, 'type' => 'page', 'id' => null],
            ['path' => '/career', 'name' => 'Careers & Openings', 'weight' => 4, 'type' => 'page', 'id' => null],
        ];

        // Add specific articles
        foreach ($insights as $insight) {
            $slug = $insight->slug ?? $insight->id;
            $title = is_array($insight->t) ? ($insight->t['en'] ?? reset($insight->t)) : $insight->t;
            $pages[] = [
                'path' => '/article/' . $slug,
                'name' => 'Article: ' . ($title ?: 'Insight ' . $insight->id),
                'weight' => rand(5, 15),
                'type' => 'article',
                'id' => $insight->id,
            ];
        }

        $devices = [
            ['device' => 'Desktop', 'browser' => 'Chrome', 'platform' => 'Windows', 'weight' => 55],
            ['device' => 'Mobile', 'browser' => 'Safari', 'platform' => 'iOS', 'weight' => 25],
            ['device' => 'Desktop', 'browser' => 'Safari', 'platform' => 'macOS', 'weight' => 10],
            ['device' => 'Mobile', 'browser' => 'Chrome', 'platform' => 'Android', 'weight' => 8],
            ['device' => 'Desktop', 'browser' => 'Edge', 'platform' => 'Windows', 'weight' => 2],
        ];

        $referrers = [
            'https://www.google.com/',
            'https://www.google.com/search?q=indonesia+china+business+consultancy',
            'https://www.linkedin.com/',
            'https://www.linkedin.com/feed/',
            'https://web.whatsapp.com/',
            'https://t.co/',
            'https://weixin.qq.com/',
            null, // Direct traffic
            null,
            null,
        ];

        $ips = [
            '180.252.164.', '114.122.208.', '36.85.112.', '103.247.19.',
            '120.188.74.', '202.80.212.', '118.99.108.', '139.195.42.',
            '58.210.16.', '223.104.38.', '117.136.88.', '124.64.18.',
        ];

        $totalDays = 30;
        $now = Carbon::now();

        $articleViewCounts = [];

        for ($day = $totalDays; $day >= 0; $day--) {
            $date = $now->copy()->subDays($day);
            // Simulate daily traffic volume (higher on weekdays, organic growth)
            $isWeekend = $date->isWeekend();
            $baseVisits = $isWeekend ? rand(35, 60) : rand(70, 130);

            for ($v = 0; $v < $baseVisits; $v++) {
                // Pick page based on weight
                $page = $pages[array_rand($pages)];
                $dev = $devices[array_rand($devices)];
                $ref = $referrers[array_rand($referrers)];
                $ip = $ips[array_rand($ips)] . rand(2, 254);

                $timestamp = $date->copy()->setHour(rand(7, 23))->setMinute(rand(0, 59))->setSecond(rand(0, 59));

                TrafficLog::create([
                    'url' => 'https://8vice.com' . $page['path'],
                    'path' => $page['path'],
                    'page_name' => $page['name'],
                    'content_type' => $page['type'],
                    'content_id' => $page['id'],
                    'ip_address' => $ip,
                    'user_agent' => 'Mozilla/5.0 (' . $dev['platform'] . ') AppleWebKit/537.36 (KHTML, like Gecko) ' . $dev['browser'] . '/122.0.0.0',
                    'device' => $dev['device'],
                    'browser' => $dev['browser'],
                    'platform' => $dev['platform'],
                    'referer' => $ref,
                    'session_id' => md5($ip . $date->format('Y-m-d')),
                    'created_at' => $timestamp,
                    'updated_at' => $timestamp,
                ]);

                if ($page['type'] === 'article' && $page['id']) {
                    $articleViewCounts[$page['id']] = ($articleViewCounts[$page['id']] ?? 0) + 1;
                }
            }
        }

        // Update views_count on insights
        foreach ($articleViewCounts as $insightId => $count) {
            Insight::where('id', $insightId)->update(['views_count' => $count]);
        }
    }
}
