<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Moves content that was previously hard-coded in the React front-end into the CMS:
 *  - insights:     tags, faqs, references          (was resources/js/data/articleExtras.js)
 *  - case_studies: is_featured, metrics, corridor, capabilities (was hard-coded in CaseStudy*.jsx)
 *  - services:     link_url, sort_order            (link was derived from the title => broken URLs)
 *
 * Existing rows are back-filled so the public site looks identical right after migrating.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            if (!Schema::hasColumn('insights', 'tags')) $table->json('tags')->nullable();
            if (!Schema::hasColumn('insights', 'faqs')) $table->json('faqs')->nullable();
            if (!Schema::hasColumn('insights', 'references')) $table->json('references')->nullable();
        });

        Schema::table('case_studies', function (Blueprint $table) {
            if (!Schema::hasColumn('case_studies', 'is_featured')) $table->boolean('is_featured')->default(false);
            if (!Schema::hasColumn('case_studies', 'metrics')) $table->json('metrics')->nullable();
            if (!Schema::hasColumn('case_studies', 'corridor')) $table->json('corridor')->nullable();
            if (!Schema::hasColumn('case_studies', 'capabilities')) $table->json('capabilities')->nullable();
        });

        Schema::table('services', function (Blueprint $table) {
            if (!Schema::hasColumn('services', 'link_url')) $table->string('link_url')->nullable();
            if (!Schema::hasColumn('services', 'sort_order')) $table->unsignedInteger('sort_order')->default(0);
        });

        $this->backfillArticleExtras();
        $this->backfillCaseStudies();
        $this->backfillServices();
    }

    public function down(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            $table->dropColumn(['tags', 'faqs', 'references']);
        });
        Schema::table('case_studies', function (Blueprint $table) {
            $table->dropColumn(['is_featured', 'metrics', 'corridor', 'capabilities']);
        });
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['link_url', 'sort_order']);
        });
    }

    private function json($value): string
    {
        return json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    private function backfillArticleExtras(): void
    {
        $file = database_path('seeders/data/article_extras.json');
        if (!is_file($file)) return;

        $extras = json_decode(file_get_contents($file), true) ?: [];
        foreach ($extras as $slug => $data) {
            DB::table('insights')
                ->where('slug', $slug)
                ->whereNull('tags')
                ->update([
                    'tags' => $this->json($data['tags'] ?? null),
                    'faqs' => $this->json($data['faqs'] ?? null),
                    'references' => $this->json($data['references'] ?? []),
                ]);
        }
    }

    private function backfillCaseStudies(): void
    {
        $corridor = $this->json(['en' => 'China & Global → Indonesia', 'id' => 'Tiongkok & Global → Indonesia']);
        $capabilities = $this->json([
            'en' => 'Market Entry, Regulatory Navigation, Team Building & Strategic Scaling',
            'id' => 'Penetrasi Pasar, Navigasi Regulasi, Pembentukan Tim & Penskalaan Strategis',
        ]);

        DB::table('case_studies')->whereNull('corridor')->update([
            'corridor' => $corridor,
            'capabilities' => $capabilities,
        ]);

        // The case study that used to be hard-coded as the "featured" hero + its headline metrics.
        $featured = DB::table('case_studies')->where('slug', 'chinese-fintech-live-in-6-months')->first();
        if ($featured && !DB::table('case_studies')->where('is_featured', true)->exists()) {
            DB::table('case_studies')->where('id', $featured->id)->update([
                'is_featured' => true,
                'metrics' => $this->json([
                    ['value' => '6', 'unit' => 'mo', 'label_en' => 'Scoping to launch', 'label_id' => 'Dari scoping hingga peluncuran'],
                    ['value' => '3', 'unit' => '×', 'label_en' => 'Faster than prior attempts', 'label_id' => 'Lebih cepat dari upaya sebelumnya'],
                    ['value' => '14', 'unit' => '', 'label_en' => 'Local hires onboarded', 'label_id' => 'Tim lokal berhasil direkrut'],
                    ['value' => '1', 'unit' => '', 'label_en' => 'License correctly sequenced', 'label_id' => 'Izin usaha diurus dengan urutan tepat'],
                ]),
            ]);
        }
    }

    private function backfillServices(): void
    {
        // Existing services all describe consultancy-style engagements; admins can re-point each one from the CMS.
        DB::table('services')->whereNull('link_url')->orderBy('id')->get()->each(function ($row, $i) {
            DB::table('services')->where('id', $row->id)->update([
                'link_url' => '/consultancy',
                'sort_order' => $i + 1,
            ]);
        });
    }
};
