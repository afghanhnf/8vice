<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected array $tablesAndColumns = [
        'hero_banners' => ['eyebrow', 'title', 'title_accent', 'description', 'button_1_text', 'button_2_text'],
        'insights' => ['t', 'body', 'excerpt'],
        'services' => ['name', 'short_desc', 'content', 'features'],
        'case_studies' => ['title', 'client_name', 'challenge', 'solution', 'result'],
        'clients' => ['description'],
        'industry_coverages' => ['name', 'description'],
        'profiles' => ['title', 'content'],
        'careers' => ['title', 'description', 'requirements'],
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
                        
                        // Treat original value as Indonesian ('id')
                        // For features which is a stringified JSON array, wait...
                        if ($table === 'services' && $col === 'features') {
                            if ($originalValue) {
                                // Assume it was an array stored as string
                                $decoded = json_decode($originalValue, true);
                                if (is_array($decoded)) {
                                    $updates[$col] = json_encode([
                                        'id' => $decoded,
                                        'en' => $decoded
                                    ], JSON_UNESCAPED_UNICODE);
                                    continue;
                                }
                            }
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
        foreach ($this->tablesAndColumns as $table => $columns) {
            if (Schema::hasTable($table)) {
                $rows = DB::table($table)->get();
                foreach ($rows as $row) {
                    $updates = [];
                    foreach ($columns as $col) {
                        if (!property_exists($row, $col)) continue;
                        $value = $row->$col;
                        if (is_string($value) && str_starts_with(trim($value), '{') && str_ends_with(trim($value), '}')) {
                            $decoded = json_decode($value, true);
                            if (is_array($decoded) && isset($decoded['id'])) {
                                $extracted = $decoded['id'];
                                if (is_array($extracted)) {
                                    $updates[$col] = json_encode($extracted, JSON_UNESCAPED_UNICODE);
                                } else {
                                    $updates[$col] = $extracted;
                                }
                            }
                        }
                    }
                    if (!empty($updates)) {
                        DB::table($table)->where('id', $row->id)->update($updates);
                    }
                }
            }
        }
    }
};
