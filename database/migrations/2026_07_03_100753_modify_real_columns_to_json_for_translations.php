<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    protected array $tablesAndColumns = [
        'services' => ['title', 'description'],
        'case_studies' => ['tag', 'h', 'p', 'body'],
        'industry_coverages' => ['title', 'description'],
        'profiles' => ['title', 'description'],
        'careers' => ['title', 'dept', 'type', 'location', 'reqs', 'description'],
        'statistics' => ['title', 'description'],
    ];

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        foreach ($this->tablesAndColumns as $table => $columns) {
            if (Schema::hasTable($table)) {
                $rows = DB::table($table)->get();
                foreach ($rows as $row) {
                    $updates = [];
                    foreach ($columns as $col) {
                        if (!property_exists($row, $col)) continue;
                        $originalValue = $row->$col;
                        // If it's already a JSON object (from a previous migration or testing), don't touch it.
                        // We check if it starts with { and ends with } roughly.
                        if (is_string($originalValue) && str_starts_with(trim($originalValue), '{') && str_ends_with(trim($originalValue), '}')) {
                            continue;
                        }

                        $updates[$col] = json_encode([
                            'id' => $originalValue ?? '',
                            'en' => '' // English starts blank
                        ], JSON_UNESCAPED_UNICODE);
                    }
                    if (!empty($updates)) {
                        DB::table($table)->where('id', $row->id)->update($updates);
                    }
                }
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // ...
    }
};
