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
        // Case Studies - add slug and body
        Schema::table('case_studies', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('tag');
            $table->text('body')->nullable()->after('p');
        });

        // Insights - add slug, date, author fields, body
        Schema::table('insights', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('t');
            $table->string('date')->nullable()->after('cover');
            $table->string('author_name')->nullable()->after('date');
            $table->string('author_role')->nullable()->after('author_name');
            $table->text('body')->nullable()->after('author_role');
        });

        // Careers - add location and description
        Schema::table('careers', function (Blueprint $table) {
            $table->string('location')->nullable()->after('type');
            $table->text('description')->nullable()->after('reqs');
        });

        // Highlights - add link_url
        Schema::table('highlights', function (Blueprint $table) {
            $table->string('link_url')->nullable()->after('link_text');
        });

        // Contact Messages - add company, phone, subject
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->string('company')->nullable()->after('email');
            $table->string('phone')->nullable()->after('company');
            $table->string('subject')->nullable()->after('phone');
        });

        // Courses - add slug
        Schema::table('courses', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('case_studies', function (Blueprint $table) {
            $table->dropColumn(['slug', 'body']);
        });
        Schema::table('insights', function (Blueprint $table) {
            $table->dropColumn(['slug', 'date', 'author_name', 'author_role', 'body']);
        });
        Schema::table('careers', function (Blueprint $table) {
            $table->dropColumn(['location', 'description']);
        });
        Schema::table('highlights', function (Blueprint $table) {
            $table->dropColumn(['link_url']);
        });
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->dropColumn(['company', 'phone', 'subject']);
        });
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn(['slug']);
        });
    }
};
