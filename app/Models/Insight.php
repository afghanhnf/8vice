<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Translatable;

class Insight extends Model
{
    use Translatable;
    protected $guarded = [];

    protected $casts = [
        't' => 'array',
        'excerpt' => 'array',
        'body' => 'array',
        'tags' => 'array',
        'faqs' => 'array',
        'references' => 'array',
    ];

    /**
     * Articles visible on the public site (status Publish / legacy rows without a status).
     */
    public function scopePublished($query)
    {
        return $query->where(function ($q) {
            $q->whereIn('status', ['Publish', 'published'])->orWhereNull('status');
        });
    }

    /**
     * Find a published article by slug (numeric ids are accepted too, for legacy links).
     */
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
