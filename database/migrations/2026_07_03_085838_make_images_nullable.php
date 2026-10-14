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
        if (Schema::hasColumn('insights', 'cover')) {
            Schema::table('insights', function (Blueprint $table) {
                $table->string('cover')->nullable()->change();
            });
        }
        if (Schema::hasColumn('case_studies', 'cover')) {
            Schema::table('case_studies', function (Blueprint $table) {
                $table->string('cover')->nullable()->change();
            });
        }
        if (Schema::hasColumn('hero_banners', 'image')) {
            Schema::table('hero_banners', function (Blueprint $table) {
                $table->string('image')->nullable()->change();
            });
        }
        if (Schema::hasColumn('profiles', 'image')) {
            Schema::table('profiles', function (Blueprint $table) {
                $table->string('image')->nullable()->change();
            });
        }
        if (Schema::hasColumn('clients', 'logo')) {
            Schema::table('clients', function (Blueprint $table) {
                $table->string('logo')->nullable()->change();
            });
        }
        if (Schema::hasColumn('clients', 'image')) {
            Schema::table('clients', function (Blueprint $table) {
                $table->string('image')->nullable()->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Reverting not easily possible without knowing previous state
    }
};
