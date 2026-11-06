<?php

namespace App\Models\Traits;

trait Translatable
{
    public function toArray()
    {
        $array = parent::toArray();
        
        // Don't modify for Filament admin panel
        if (request()->is('admin*') || request()->is('livewire*')) {
            return $array;
        }

        $locale = app()->getLocale();
        if (request()->is('cn') || request()->is('cn/*')) {
            $locale = 'cn';
        } elseif (request()->is('id') || request()->is('id/*')) {
            $locale = 'id';
        }

        foreach ($this->getCasts() as $key => $cast) {
            if ($cast === 'array' || $cast === 'json') {
                if (isset($array[$key]) && is_array($array[$key])) {
                    if (array_key_exists('id', $array[$key]) || array_key_exists('en', $array[$key]) || array_key_exists('cn', $array[$key])) {
                        $raw = $array[$key];
                        $isBlank = fn ($v) => $v === null || $v === '' || $v === [];
                        $val = $raw[$locale] ?? null;
                        if ($isBlank($val)) $val = $raw['en'] ?? null;
                        if ($isBlank($val)) $val = $raw['id'] ?? null;
                        if ($isBlank($val)) $val = $raw['cn'] ?? '';

                        $array["{$key}_i18n"] = $raw;
                        $array["{$key}_en"] = $raw['en'] ?? $val;
                        $array["{$key}_id"] = $raw['id'] ?? $val;
                        $array["{$key}_cn"] = $raw['cn'] ?? $val;
                        $array[$key] = $val;
                    }
                }
            }
        }

        return $array;
    }
}
