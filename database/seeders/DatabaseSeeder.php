<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Clients (Trust bar logos)
        DB::table('clients')->insert([
            ['name' => 'Alipay', 'glyph' => '支'],
            ['name' => 'DiDi', 'glyph' => 'D'],
            ['name' => 'Bios44', 'glyph' => 'B'],
            ['name' => 'Edutech China', 'glyph' => '教'],
            ['name' => 'Chinghua', 'glyph' => '清'],
            ['name' => 'Xinhua Media', 'glyph' => '新'],
            ['name' => 'DingTalk', 'glyph' => '钉'],
            ['name' => 'Coolita', 'glyph' => 'C'],
            ['name' => 'Skyworth', 'glyph' => 'S'],
            ['name' => 'MangoTV', 'glyph' => '芒'],
        ]);

        // Case Studies
        DB::table('case_studies')->insert([
            [
                'tag' => 'Fintech', 
                'cover' => '/images/cases/fintech.png',
                'h' => 'A Chinese fintech, live in 6 months.', 
                'p' => 'Market entry, licensing pathway, and a local operating team - from scoping to launch.'
            ],
            [
                'tag' => 'Consumer · Retail', 
                'cover' => '/images/cases/retail.png',
                'h' => 'Shelf to scale across 40 cities.', 
                'p' => 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.'
            ],
            [
                'tag' => 'Manufacturing', 
                'cover' => '/images/cases/manufacturing.png',
                'h' => 'Local production, de-risked.', 
                'p' => 'Site selection, regulatory navigation, and a resilient supply chain for a manufacturing entrant.'
            ]
        ]);

        // Insights (Articles)
        DB::table('insights')->insert([
            [
                'cat' => 'Finance & Tech', 
                'rt' => '7 min read', 
                't' => 'Cross-Border Payments: The Future of Indonesia-China QRIS Cooperation.', 
                'cover' => '/images/insights/qris.png'
            ],
            [
                'cat' => 'Policy & Strategy', 
                'rt' => '10 min read', 
                't' => 'Decoding China\'s 5-Year Plan: What it Means for Southeast Asia.', 
                'cover' => '/images/insights/5_year_plan.png'
            ],
            [
                'cat' => 'Diplomacy', 
                'rt' => '6 min read', 
                't' => 'A New Chapter in ASEAN-China Comprehensive Strategic Partnership.', 
                'cover' => '/images/article-sample.jpg'
            ]
        ]);

        // Book Reviews
        DB::table('book_reviews')->insert([
            [
                'cat' => 'Market & Culture', 
                'title' => 'Indonesia, Etc.', 
                'author' => 'Elizabeth Pisani',
                'take' => 'The single best primer on why Indonesia resists a one-size playbook. Required reading before you land.'
            ],
            [
                'cat' => 'Cross-border Strategy', 
                'title' => 'Dealing with China', 
                'author' => 'Henry M. Paulson Jr.',
                'take' => 'A pragmatic read on negotiating across the Chinese state and enterprise, from someone who did it at scale.'
            ],
            [
                'cat' => 'Relationships', 
                'title' => 'Guanxi', 
                'author' => 'Buderi & Huang',
                'take' => 'How relationship capital actually compounds. We pair it with the Indonesian context it does not cover.'
            ]
        ]);

        // Courses
        DB::table('courses')->insert([
            [
                'cat' => 'Social Media', 
                'title' => 'Social Media Strategy for Indonesia', 
                'free' => true, 
                'price' => 'Free',
                'desc' => 'Platforms, formats, and posting rhythms that actually move Indonesian audiences.', 
                'dur' => '1h 40m', 
                'lessons' => '8 lessons',
                'cover' => 'COURSE · social feeds'
            ],
            [
                'cat' => 'Marketing', 
                'title' => 'Digital Marketing for the Indonesian Market', 
                'free' => false, 
                'price' => 'Rp 500.000',
                'desc' => 'A full-funnel playbook: paid, organic, and marketplace marketing localized for Indonesia.', 
                'dur' => '3h 20m', 
                'lessons' => '14 lessons',
                'cover' => 'COURSE · campaign dashboard'
            ],
            [
                'cat' => 'Regulation', 
                'title' => 'Navigating Indonesian Business Licensing', 
                'free' => false, 
                'price' => 'Rp 750.000',
                'desc' => 'OSS, KBLI codes, and the permits foreign-owned companies most often get wrong.', 
                'dur' => '2h 10m', 
                'lessons' => '10 lessons',
                'cover' => 'COURSE · permits & documents'
            ],
            [
                'cat' => 'Leadership', 
                'title' => 'Cross-Cultural Team Management', 
                'free' => true, 
                'price' => 'Free',
                'desc' => 'Lead a local Indonesian team without losing what works in your home culture.', 
                'dur' => '1h 15m', 
                'lessons' => '6 lessons',
                'cover' => 'COURSE · team meeting'
            ],
            [
                'cat' => 'E-commerce', 
                'title' => 'E-commerce & Marketplace Playbook', 
                'free' => false, 
                'price' => 'Rp 500.000',
                'desc' => 'Tokopedia, Shopee, and TikTok Shop - listing, pricing, and fulfilment strategy.', 
                'dur' => '2h 45m', 
                'lessons' => '12 lessons',
                'cover' => 'COURSE · marketplace storefront'
            ],
            [
                'cat' => 'Consumer Insight', 
                'title' => 'Indonesian Consumer Behavior 101', 
                'free' => true, 
                'price' => 'Free',
                'desc' => 'How 270 million consumers really decide - regions, religion, and price sensitivity.', 
                'dur' => '55m', 
                'lessons' => '5 lessons',
                'cover' => 'COURSE · street market'
            ]
        ]);

        // Highlights
        DB::table('highlights')->insert([
            [
                'type' => 'Podcast · Latest Episode', 
                'date' => 'Ep. 24 · May 2026', 
                'title' => 'Selling to Gen-Z Indonesia: what Chinese brands keep missing.', 
                'description' => 'A field conversation with a Jakarta-based brand operator on TikTok-first launches, local KOLs, and pricing for the archipelago.',
                'link_text' => 'Listen now',
                'is_podcast' => true
            ],
            [
                'type' => 'Webinar · Upcoming', 
                'date' => 'June 18, 2026 · 14:00 WIB', 
                'title' => '2026 Foreign Investment Rules, Decoded', 
                'description' => null,
                'link_text' => 'Reserve a seat',
                'is_podcast' => false
            ],
            [
                'type' => 'Product · New', 
                'date' => 'Just launched', 
                'title' => 'Market Entry Diagnostic toolkit', 
                'description' => null,
                'link_text' => 'Explore',
                'is_podcast' => false
            ],
            [
                'type' => 'Campaign', 
                'date' => 'Now open', 
                'title' => 'Bridge Scholarship: 50 local seats', 
                'description' => null,
                'link_text' => 'See details',
                'is_podcast' => false
            ],
            [
                'type' => 'Campaign', 
                'date' => 'Q3 2026', 
                'title' => '"Decoded" report series, vol. 2', 
                'description' => null,
                'link_text' => 'Get notified',
                'is_podcast' => false
            ]
        ]);
    }
}
