<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class TrafficLog extends Model
{
    protected $guarded = [];

    /**
     * Parse User Agent and record a page view.
     */
    public static function record(Request $request, ?string $pageName = null, string $contentType = 'page', ?int $contentId = null): self
    {
        $userAgent = $request->header('User-Agent', '');
        $path = '/' . ltrim($request->path(), '/');

        if (!$pageName) {
            $pageName = self::detectPageName($path);
        }

        $deviceInfo = self::parseUserAgent($userAgent);

        $log = self::create([
            'url' => $request->fullUrl(),
            'path' => $path,
            'page_name' => $pageName,
            'content_type' => $contentType,
            'content_id' => $contentId,
            'ip_address' => $request->ip(),
            'user_agent' => substr($userAgent, 0, 500),
            'device' => $deviceInfo['device'],
            'browser' => $deviceInfo['browser'],
            'platform' => $deviceInfo['platform'],
            'referer' => $request->header('referer') ? substr($request->header('referer'), 0, 500) : null,
            'session_id' => $request->session()->getId(),
        ]);

        if ($contentType !== 'article') {
            try {
                PageStatistic::recordView($path, $pageName, $request->ip());
            } catch (\Throwable $e) {
                // Ignore
            }
        }

        return $log;
    }

    /**
     * Map common URL paths to readable human-friendly names.
     */
    public static function detectPageName(string $path): string
    {
        $clean = preg_replace('/^\/id(\/|$)/', '/', $path);
        $clean = '/' . ltrim($clean, '/');

        $map = [
            '/' => 'Home Page',
            '/about' => 'About Us',
            '/services' => 'Our Services',
            '/consultancy' => 'Strategic Consultancy',
            '/training' => 'Corporate Training',
            '/market-intelligence' => 'Market Intelligence',
            '/article' => 'Insights & Articles',
            '/insight' => 'Insights & Articles',
            '/client' => 'Clients & Partners',
            '/case-study' => 'Case Studies',
            '/social-impact' => 'Social Impact',
            '/career' => 'Careers & Openings',
            '/contact' => 'Contact Us',
        ];

        if (isset($map[$clean])) {
            return $map[$clean];
        }

        if (str_starts_with($clean, '/article/')) {
            $slug = substr($clean, 9);
            $formatted = ucwords(str_replace('-', ' ', $slug));
            return 'Article: ' . $formatted;
        }

        if (str_starts_with($clean, '/case-study/')) {
            $slug = substr($clean, 12);
            $formatted = ucwords(str_replace('-', ' ', $slug));
            return 'Case Study: ' . $formatted;
        }

        return ucwords(trim(str_replace(['/', '-'], ' ', $clean))) ?: 'Home Page';
    }

    /**
     * Parse device, browser, and platform from user-agent string.
     */
    public static function parseUserAgent(string $ua): array
    {
        $device = 'Desktop';
        if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', $ua)) {
            $device = 'Tablet';
        } elseif (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|mobile)/i', $ua)) {
            $device = 'Mobile';
        }

        $platform = 'Windows';
        if (preg_match('/windows nt/i', $ua)) $platform = 'Windows';
        elseif (preg_match('/macintosh|mac os x/i', $ua)) $platform = 'macOS';
        elseif (preg_match('/iphone|ipad|ipod/i', $ua)) $platform = 'iOS';
        elseif (preg_match('/android/i', $ua)) $platform = 'Android';
        elseif (preg_match('/linux/i', $ua)) $platform = 'Linux';

        $browser = 'Chrome';
        if (preg_match('/edg/i', $ua)) $browser = 'Edge';
        elseif (preg_match('/firefox/i', $ua)) $browser = 'Firefox';
        elseif (preg_match('/safari/i', $ua) && !preg_match('/chrome/i', $ua)) $browser = 'Safari';
        elseif (preg_match('/opr|opera/i', $ua)) $browser = 'Opera';
        elseif (preg_match('/chrome/i', $ua)) $browser = 'Chrome';

        return [
            'device' => $device,
            'browser' => $browser,
            'platform' => $platform,
        ];
    }
}
