<?php

use App\Models\PageContent;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('page_contents')) {
            return;
        }

        $services = PageContent::where('page_code', 'services')->first();
        if (!$services || !is_array($services->content)) {
            return;
        }

        $content = $services->content;
        $content['visibility'] = array_merge($content['visibility'] ?? [], [
            'show_hero_eyebrow' => true,
            'show_hero_image' => true,
            'show_hero_image_badges' => false,
            'show_services_grid' => true,
            'show_approach' => true,
            'show_cta' => true,
        ]);

        $services->content = $content;
        $services->save();
    }

    public function down(): void
    {
        // Non-destructive toggle update
    }
};
