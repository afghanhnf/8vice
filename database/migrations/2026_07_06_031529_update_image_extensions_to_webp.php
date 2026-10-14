<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $tablesAndColumns = [
            'hero_banners' => ['image'],
            'clients' => ['image'],
            'case_studies' => ['cover'],
            'insights' => ['cover'],
            'industry_coverages' => ['icon', 'image'],
            'courses' => ['cover'],
            'book_reviews' => ['cover', 'image'],
            'profiles' => ['image'],
            'services' => ['image'],
            'site_settings' => ['logo', 'favicon']
        ];

        foreach ($tablesAndColumns as $table => $columns) {
            if (Schema::hasTable($table)) {
                foreach ($columns as $column) {
                    if (Schema::hasColumn($table, $column)) {
                        DB::table($table)
                            ->where($column, 'like', '%.png')
                            ->orWhere($column, 'like', '%.jpg')
                            ->orWhere($column, 'like', '%.jpeg')
                            ->update([
                                $column => DB::raw("REPLACE(REPLACE(REPLACE($column, '.png', '.webp'), '.jpg', '.webp'), '.jpeg', '.webp')")
                            ]);
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
        Schema::table('webp', function (Blueprint $table) {
            //
        });
    }
};
