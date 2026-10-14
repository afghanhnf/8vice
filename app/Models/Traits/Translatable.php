<?php

namespace App\Models\Traits;

trait Translatable
{
    public function toArray()
    {
        $array = parent::toArray();
        
        // Don't modify for Filament admin panel
        if (request()->is('admin*')) {
            return $array;
        }

        $locale = app()->getLocale();

        foreach ($this->getCasts() as $key => $cast) {
            if ($cast === 'array' || $cast === 'json') {
                if (isset($array[$key]) && is_array($array[$key])) {
                    if (array_key_exists('id', $array[$key]) || array_key_exists('en', $array[$key])) {
                        $isBlank = fn ($v) => $v === null || $v === '' || $v === [];
                        $val = $array[$key][$locale] ?? null;
                        if ($isBlank($val)) $val = $array[$key]['en'] ?? null;
                        if ($isBlank($val)) $val = $array[$key]['id'] ?? '';
                        $array[$key] = $val;
                    }
                }
            }
        }

        return $array;
    }
}
