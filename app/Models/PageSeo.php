<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class PageSeo extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'meta_title' => 'array',
        'meta_description' => 'array',
        'meta_keywords' => 'array',
        'structured_data' => 'array',
    ];

    /**
     * Helper to get clean OG image URL
     */
    public function getOgImageUrlAttribute(): ?string
    {
        if (!$this->og_image) {
            return null;
        }

        if (str_starts_with($this->og_image, 'http://') || str_starts_with($this->og_image, 'https://')) {
            return $this->og_image;
        }

        if (str_starts_with($this->og_image, 'images/')) {
            return asset($this->og_image);
        }

        return asset('storage/' . ltrim($this->og_image, '/'));
    }
}
