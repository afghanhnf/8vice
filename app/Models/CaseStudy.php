<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class CaseStudy extends Model
{
    use Translatable;
    protected $guarded = [];

    protected $casts = [
        'tag' => 'array',
        'h' => 'array',
        'p' => 'array',
        'body' => 'array',
        'corridor' => 'array',
        'capabilities' => 'array',
        'metrics' => 'array',
        'is_featured' => 'boolean',
    ];

    protected static function booted(): void
    {
        static::saved(function (CaseStudy $case) {
            if ($case->is_featured) {
                static::where('id', '!=', $case->id)->where('is_featured', true)->update(['is_featured' => false]);
            }
        });
    }

    public function scopeBySlug($query, $slug)
    {
        return $query->where(function ($q) use ($slug) {
            $q->where('slug', $slug);
            if (is_numeric($slug)) {
                $q->orWhere('id', $slug);
            }
        });
    }
}
