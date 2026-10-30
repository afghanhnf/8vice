<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class Faq extends Model
{
    use Translatable;

    protected $guarded = [];

    protected $casts = [
        'question' => 'array',
        'answer' => 'array',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }

    public function scopeForCategory($query, string $category)
    {
        return $query->where('category', $category);
    }
}

