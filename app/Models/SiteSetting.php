<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class SiteSetting extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'hero_banners' => 'array',
        'default_meta_title' => 'array',
        'default_meta_description' => 'array',
        'tagline' => 'array',
        'privacy_policy' => 'array',
        'terms_of_service' => 'array',
    ];
}
