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
        // 1. Insights: Research Paper & 1 placement link for payment/landing
        Schema::table('insights', function (Blueprint $table) {
            if (!Schema::hasColumn('insights', 'is_research_paper')) {
                $table->boolean('is_research_paper')->default(false)->after('status');
            }
            if (!Schema::hasColumn('insights', 'research_paper_link')) {
                $table->string('research_paper_link', 500)->nullable()->after('is_research_paper');
            }
            if (!Schema::hasColumn('insights', 'paper_pages')) {
                $table->unsignedInteger('paper_pages')->nullable()->default(58)->after('research_paper_link');
            }
            if (!Schema::hasColumn('insights', 'is_paywall_locked')) {
                $table->boolean('is_paywall_locked')->default(true)->after('paper_pages');
            }
        });

        // 2. Services: Detailed deliverables, slug, headline, scope items
        Schema::table('services', function (Blueprint $table) {
            if (!Schema::hasColumn('services', 'slug')) {
                $table->string('slug')->nullable()->after('id');
            }
            if (!Schema::hasColumn('services', 'headline')) {
                $table->json('headline')->nullable()->after('title');
            }
            if (!Schema::hasColumn('services', 'detail_image')) {
                $table->string('detail_image')->nullable()->after('image');
            }
            if (!Schema::hasColumn('services', 'deliverables')) {
                $table->json('deliverables')->nullable()->after('detail_image');
            }
            if (!Schema::hasColumn('services', 'scope_items')) {
                $table->json('scope_items')->nullable()->after('deliverables');
            }
            if (!Schema::hasColumn('services', 'faqs')) {
                $table->json('faqs')->nullable()->after('scope_items');
            }
        });

        // 3. Profiles: People Behind 8Vice (Ibu Helda, Pak Gandhi, Ci Christine) + Quotes
        Schema::table('profiles', function (Blueprint $table) {
            if (!Schema::hasColumn('profiles', 'call_name')) {
                $table->string('call_name')->nullable()->after('id');
            }
            if (!Schema::hasColumn('profiles', 'full_title')) {
                $table->string('full_title')->nullable()->after('call_name');
            }
            if (!Schema::hasColumn('profiles', 'role')) {
                $table->json('role')->nullable()->after('title');
            }
            if (!Schema::hasColumn('profiles', 'short_bio')) {
                $table->json('short_bio')->nullable()->after('description');
            }
            if (!Schema::hasColumn('profiles', 'focus_tags')) {
                $table->json('focus_tags')->nullable()->after('short_bio');
            }
            if (!Schema::hasColumn('profiles', 'socials')) {
                $table->json('socials')->nullable()->after('focus_tags');
            }
            if (!Schema::hasColumn('profiles', 'quote_title')) {
                $table->json('quote_title')->nullable()->after('socials');
            }
            if (!Schema::hasColumn('profiles', 'quote_message')) {
                $table->json('quote_message')->nullable()->after('quote_title');
            }
            if (!Schema::hasColumn('profiles', 'sort_order')) {
                $table->unsignedInteger('sort_order')->default(0)->after('quote_message');
            }
        });

        // 4. Industry Coverages: 5 sectors with tagline, tag badge, highlights
        Schema::table('industry_coverages', function (Blueprint $table) {
            if (!Schema::hasColumn('industry_coverages', 'slug')) {
                $table->string('slug')->nullable()->after('id');
            }
            if (!Schema::hasColumn('industry_coverages', 'tagline')) {
                $table->json('tagline')->nullable()->after('title');
            }
            if (!Schema::hasColumn('industry_coverages', 'tag')) {
                $table->string('tag')->nullable()->after('tagline');
            }
            if (!Schema::hasColumn('industry_coverages', 'highlights')) {
                $table->json('highlights')->nullable()->after('description');
            }
            if (!Schema::hasColumn('industry_coverages', 'sort_order')) {
                $table->unsignedInteger('sort_order')->default(0)->after('highlights');
            }
        });

        // 5. Site Settings: WeChat ID, QR Code, Tagline, Privacy Policy & Terms of Service
        Schema::table('site_settings', function (Blueprint $table) {
            if (!Schema::hasColumn('site_settings', 'wechat_id')) {
                $table->string('wechat_id')->default('eightvice')->after('whatsapp_url');
            }
            if (!Schema::hasColumn('site_settings', 'wechat_qr')) {
                $table->string('wechat_qr')->nullable()->after('wechat_id');
            }
            if (!Schema::hasColumn('site_settings', 'tagline')) {
                $table->json('tagline')->nullable()->after('wechat_qr');
            }
            if (!Schema::hasColumn('site_settings', 'privacy_policy')) {
                $table->json('privacy_policy')->nullable()->after('tagline');
            }
            if (!Schema::hasColumn('site_settings', 'terms_of_service')) {
                $table->json('terms_of_service')->nullable()->after('privacy_policy');
            }
        });

        // 6. Bilateral FAQs Table
        if (!Schema::hasTable('faqs')) {
            Schema::create('faqs', function (Blueprint $table) {
                $table->id();
                $table->string('category')->default('Homepage'); // Homepage, Services, Gateway, General
                $table->json('question');
                $table->json('answer');
                $table->unsignedInteger('sort_order')->default(0);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            $table->dropColumn(['is_research_paper', 'research_paper_link', 'paper_pages', 'is_paywall_locked']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn(['slug', 'headline', 'detail_image', 'deliverables', 'scope_items', 'faqs']);
        });

        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn(['call_name', 'full_title', 'role', 'short_bio', 'focus_tags', 'socials', 'quote_title', 'quote_message', 'sort_order']);
        });

        Schema::table('industry_coverages', function (Blueprint $table) {
            $table->dropColumn(['slug', 'tagline', 'tag', 'highlights', 'sort_order']);
        });

        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn(['wechat_id', 'wechat_qr', 'tagline', 'privacy_policy', 'terms_of_service']);
        });

        Schema::dropIfExists('faqs');
    }
};

