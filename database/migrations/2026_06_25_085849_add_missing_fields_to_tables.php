<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->string('macro_stat_value')->nullable();
            $table->string('macro_stat_label')->nullable();
        });

        Schema::table('industry_coverages', function (Blueprint $table) {
            $table->text('icon')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn(['macro_stat_value', 'macro_stat_label']);
        });

        Schema::table('industry_coverages', function (Blueprint $table) {
            $table->dropColumn('icon');
        });
    }
};
