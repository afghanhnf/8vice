<?php

namespace App\Helpers;

class PageContentDefaults
{
    public static function all(): array
    {
        $path = __DIR__ . '/page_content_defaults.json';
        if (!is_file($path)) {
            return [];
        }

        $decoded = json_decode((string) file_get_contents($path), true);
        return is_array($decoded) ? $decoded : [];
    }

    public static function get(string $pageCode): ?array
    {
        $all = self::all();
        return $all[$pageCode] ?? null;
    }
}
