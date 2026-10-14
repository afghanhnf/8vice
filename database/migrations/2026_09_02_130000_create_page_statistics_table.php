<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('page_statistics', function (Blueprint $table) {
            $table->id();
            $table->string('path')->unique();
            $table->string('page_name');
            $table->unsignedBigInteger('views_count')->default(0);
            $table->unsignedBigInteger('unique_visitors')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_statistics');
    }
};
