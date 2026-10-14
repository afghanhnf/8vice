<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class IndustryCoverage extends Model
{
    use Translatable;
    protected $guarded = [];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
    ];

    //
}
