<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    protected $guarded = [];

    protected $casts = [
        'content' => 'array',
    ];

    /**
     * Retrieve localized content slice for a given page code ('about', 'home', 'services', 'insights', 'contact').
     */
    public static function getForLocale(string $pageCode, ?string $locale = null): array
    {
        $loc = $locale ?: app()->getLocale();
        if (!in_array($loc, ['en', 'id', 'cn'], true)) {
            $loc = 'en';
        }

        try {
            $record = static::where('page_code', $pageCode)->first();
            if (!$record || !is_array($record->content)) {
                return [];
            }

            $locData = $record->content[$loc] ?? [];
            $data = is_array($locData) ? $locData : [];

            $visibility = $record->content['visibility'] ?? null;
            if (is_array($visibility)) {
                $data['visibility'] = $visibility;
            }

            return $data;
        } catch (\Throwable $e) {
            return [];
        }
    }
}
