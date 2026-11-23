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

        $home = PageContent::where('page_code', 'home')->first();
        if (!$home || !is_array($home->content)) {
            return;
        }

        $content = $home->content;
        $content['visibility'] = array_merge($content['visibility'] ?? [], [
            'show_overview_image_badge' => false,
            'show_why_image_badge' => true,
            'show_consultation_image_badge' => true,
        ]);

        $home->content = $content;
        $home->save();
    }

    public function down(): void
    {
        // Non-destructive toggle update
    }
};
