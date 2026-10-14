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
        if (!Schema::hasTable('page_seos')) {
            Schema::create('page_seos', function (Blueprint $table) {
                $table->id();
                $table->string('page_code')->unique();
                $table->string('page_name');
                $table->json('meta_title')->nullable();
                $table->json('meta_description')->nullable();
                $table->json('meta_keywords')->nullable();
                $table->string('og_image')->nullable();
                $table->string('og_type')->default('website');
                $table->string('robots')->default('index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
                $table->string('canonical_url')->nullable();
                $table->text('structured_data')->nullable();
                $table->timestamps();
            });
        }

        Schema::table('site_settings', function (Blueprint $table) {
            if (!Schema::hasColumn('site_settings', 'default_meta_title')) {
                $table->json('default_meta_title')->nullable();
            }
            if (!Schema::hasColumn('site_settings', 'default_meta_description')) {
                $table->json('default_meta_description')->nullable();
            }
            if (!Schema::hasColumn('site_settings', 'default_og_image')) {
                $table->string('default_og_image')->nullable();
            }
            if (!Schema::hasColumn('site_settings', 'site_keywords')) {
                $table->text('site_keywords')->nullable();
            }
            if (!Schema::hasColumn('site_settings', 'twitter_handle')) {
                $table->string('twitter_handle')->nullable()->default('@8vice');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_seos');

        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn([
                'default_meta_title',
                'default_meta_description',
                'default_og_image',
                'site_keywords',
                'twitter_handle',
            ]);
        });
    }
};
