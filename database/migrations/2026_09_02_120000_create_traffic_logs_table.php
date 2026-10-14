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
        Schema::create('traffic_logs', function (Blueprint $table) {
            $table->id();
            $table->string('url')->index();
            $table->string('path')->index();
            $table->string('page_name');
            $table->string('content_type')->default('page')->index(); // page, article, case_study, service
            $table->unsignedBigInteger('content_id')->nullable()->index();
            $table->string('ip_address')->nullable();
            $table->text('user_agent')->nullable();
            $table->string('device')->default('Desktop'); // Desktop, Mobile, Tablet
            $table->string('browser')->default('Chrome'); // Chrome, Safari, Firefox, Edge, etc.
            $table->string('platform')->default('Windows'); // Windows, iOS, Android, macOS, Linux
            $table->text('referer')->nullable();
            $table->string('session_id')->nullable()->index();
            $table->timestamps();
        });

        if (Schema::hasTable('insights') && !Schema::hasColumn('insights', 'views_count')) {
            Schema::table('insights', function (Blueprint $table) {
                $table->unsignedBigInteger('views_count')->default(0)->after('cover');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traffic_logs');

        if (Schema::hasTable('insights') && Schema::hasColumn('insights', 'views_count')) {
            Schema::table('insights', function (Blueprint $table) {
                $table->dropColumn('views_count');
            });
        }
    }
};
