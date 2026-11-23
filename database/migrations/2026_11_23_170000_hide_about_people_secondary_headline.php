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

        $about = PageContent::where('page_code', 'about')->first();
        if (!$about || !is_array($about->content)) {
            return;
        }

        $content = $about->content;
        $content['visibility'] = array_merge($content['visibility'] ?? [], [
            'show_people_headline' => false,
        ]);

        $about->content = $content;
        $about->save();
    }

    public function down(): void
    {
        // Non-destructive toggle update
    }
};
