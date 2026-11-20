<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('profiles')) {
            Schema::table('profiles', function (Blueprint $table) {
                if (!Schema::hasColumn('profiles', 'chinese_name')) {
                    $table->string('chinese_name', 100)->nullable()->after('full_title');
                }
                if (!Schema::hasColumn('profiles', 'expertise')) {
                    $table->text('expertise')->nullable()->after('role');
                }
                if (!Schema::hasColumn('profiles', 'experiences')) {
                    $table->longText('experiences')->nullable()->after('short_bio');
                }
            });
        }

        if (!Schema::hasTable('page_contents')) {
            Schema::create('page_contents', function (Blueprint $table) {
                $table->id();
                $table->string('page_code', 80)->unique();
                $table->string('page_name', 150);
                $table->longText('content')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('page_contents');

        if (Schema::hasTable('profiles')) {
            Schema::table('profiles', function (Blueprint $table) {
                $cols = array_filter(['chinese_name', 'expertise', 'experiences'], fn ($c) => Schema::hasColumn('profiles', $c));
                if (!empty($cols)) {
                    $table->dropColumn($cols);
                }
            });
        }
    }
};
