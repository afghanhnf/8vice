<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class Profile extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'title' => 'array',
        'role' => 'array',
        'description' => 'array',
        'short_bio' => 'array',
        'focus_tags' => 'array',
        'socials' => 'array',
        'quote_title' => 'array',
        'quote_message' => 'array',
    ];
}
