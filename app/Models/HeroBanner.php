<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class HeroBanner extends Model
{
    use Translatable;
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
        'eyebrow' => 'array',
        'title' => 'array',
        'title_accent' => 'array',
        'description' => 'array',
        'button_1_text' => 'array',
        'button_2_text' => 'array',
    ];
}
