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
            $table->text('address')->nullable();
            $table->string('email')->nullable();
            $table->text('maps_link')->nullable();
            $table->string('google_analytics')->nullable();
            $table->string('google_search_console')->nullable();
            $table->string('google_tag_manager')->nullable();
            $table->string('meta_pixels')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn([
                'address',
                'email',
                'maps_link',
                'google_analytics',
                'google_search_console',
                'google_tag_manager',
                'meta_pixels'
            ]);
        });
    }
};
