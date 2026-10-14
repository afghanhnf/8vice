<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class Career extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'title' => 'array',
        'dept' => 'array',
        'type' => 'array',
        'location' => 'array',
        'reqs' => 'array',
        'description' => 'array',
    ];
}
