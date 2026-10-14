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
        // ─── Admin User ───
        \App\Models\User::firstOrCreate(
            ['email' => 'admin@8vice.com'],
            [
                'name' => 'Admin',
                'password' => bcrypt('password'),
            ]
        );

        // ─── Site Settings ───
        DB::table('site_settings')->insert([
            'address' => 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810',
            'email' => 'hello@8vice.com',
            'maps_link' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid',
            'instagram_url' => 'https://www.instagram.com/8viceofficial',
            'linkedin_url' => 'https://www.linkedin.com/company/8-vice/',
            'whatsapp_url' => 'https://wa.me/628118005110',
            'youtube_url' => null,
            'google_analytics' => 'G-1234567890',
            'google_map_embed' => '',
            'google_search_console' => '<meta name="google-site-verification" content="1234567890" />',
            'google_tag_manager' => null,
            'primary_color' => '#D62828',
            'meta_pixels' => '123456789012345',
            'macro_stat_value' => '$130B',
            'macro_stat_label' => 'China-Indonesia cross-border tech & retail opportunity in 2026',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // ─── Hero Banners ───
        DB::table('hero_banners')->insert([
            [
                'image' => 'hero-banners/1.webp',
                'link_url' => null,
                'sort_order' => 1,
                'is_active' => true,
                'eyebrow' => json_encode([
                    'en' => 'Strategic Consultancy · Market Entry & Expansion',
                    'id' => 'Konsultansi Strategis · Penetrasi & Ekspansi Pasar'
                ]),
                'title' => json_encode([
                    'en' => 'De-Risking Indonesia Entry with',
                    'id' => 'Ekspansi ke Indonesia dengan'
                ]),
                'title_accent' => json_encode([
                    'en' => 'Strategic Precision.',
                    'id' => 'Presisi Strategis.'
                ]),
                'description' => json_encode([
                    'en' => "End-to-end strategic advisory for Chinese & global enterprises.\nFrom regulatory structuring and KBLI licensing to local partnership matchmaking and operational launch.",
                    'id' => "Pendampingan strategis menyeluruh bagi perusahaan global & Tiongkok.\nDari perizinan regulasi KBLI, kemitraan lokal terpercaya, hingga peluncuran operasional bebas risiko."
                ]),
                'button_1_text' => json_encode([
                    'en' => 'Explore Consultancy',
                    'id' => 'Jelajahi Konsultansi'
                ]),
                'button_1_url' => '/consultancy',
                'button_2_text' => json_encode([
                    'en' => 'See How We Help',
                    'id' => 'Pelajari Cara Kami'
                ]),
                'button_2_url' => '#help',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'hero-banners/2.webp',
                'link_url' => null,
                'sort_order' => 2,
                'is_active' => true,
                'eyebrow' => json_encode([
                    'en' => 'Market Intelligence · Ground Data & Macro Insights',
                    'id' => 'Kecerdasan Pasar · Data Riil & Wawasan Makro'
                ]),
                'title' => json_encode([
                    'en' => 'Decisive Field Intelligence for a',
                    'id' => 'Wawasan Berbobot untuk Pasar'
                ]),
                'title_accent' => json_encode([
                    'en' => '290M Market.',
                    'id' => '290 Juta Konsumen.'
                ]),
                'description' => json_encode([
                    'en' => "Unfiltered field data, competitor mapping, and policy radar across Indonesia's economic corridors.\nStrategic intelligence tailored for decisive executive leadership.",
                    'id' => "Riset lapangan independen, pemetaan kompetitor, dan analisis kebijakan di pusat ekonomi Indonesia.\nKecerdasan strategis terverifikasi untuk keputusan investasi yang tepat sasaran."
                ]),
                'button_1_text' => json_encode([
                    'en' => 'Explore Intelligence',
                    'id' => 'Lihat Market Intelligence'
                ]),
                'button_1_url' => '/market-intelligence',
                'button_2_text' => json_encode([
                    'en' => 'See How We Help',
                    'id' => 'Pelajari Cara Kami'
                ]),
                'button_2_url' => '#help',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'hero-banners/3.webp',
                'link_url' => null,
                'sort_order' => 3,
                'is_active' => true,
                'eyebrow' => json_encode([
                    'en' => 'Executive Training · Cross-Border Capability',
                    'id' => 'Pelatihan Eksekutif · Kapabilitas Lintas Batas'
                ]),
                'title' => json_encode([
                    'en' => 'Aligning Global Leadership with',
                    'id' => 'Menyelaraskan Manajemen Global dengan'
                ]),
                'title_accent' => json_encode([
                    'en' => 'Local Execution.',
                    'id' => 'Eksekusi Lapangan.'
                ]),
                'description' => json_encode([
                    'en' => "Bridging corporate headquarters with Indonesian workplace dynamics.\nPractical masterclasses in cross-cultural leadership, labor regulations, and local talent empowerment.",
                    'id' => "Menjembatani kantor pusat global dengan dinamika kerja tim lokal Indonesia.\nProgram terapan kepemimpinan lintas budaya, regulasi ketenagakerjaan, dan produktivitas tim."
                ]),
                'button_1_text' => json_encode([
                    'en' => 'Explore Training',
                    'id' => 'Lihat Program Training'
                ]),
                'button_1_url' => '/training',
                'button_2_text' => json_encode([
                    'en' => 'See How We Help',
                    'id' => 'Pelajari Cara Kami'
                ]),
                'button_2_url' => '#help',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // ─── Categories ───
        DB::table('categories')->insert([
            ['name' => 'Fintech', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Consumer · Retail', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Manufacturing', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Finance & Tech', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Policy & Strategy', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Diplomacy', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Market & Culture', 'type' => 'book_review', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cross-border Strategy', 'type' => 'book_review', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Relationships', 'type' => 'book_review', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Social Media', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Marketing', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Regulation', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Leadership', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'E-commerce', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Consumer Insight', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
        ]);

        // ─── Statistics ───
        DB::table('statistics')->insert([
            ['title' => '25+', 'description' => 'Years combined experience', 'image' => null, 'created_at' => now(), 'updated_at' => now()],
            ['title' => '30+', 'description' => 'Clients across SEA & China', 'image' => null, 'created_at' => now(), 'updated_at' => now()],
            ['title' => '12+', 'description' => 'Industry sectors covered', 'image' => null, 'created_at' => now(), 'updated_at' => now()],
        ]);

        // ─── Clients (Trust bar logos) ───
        DB::table('clients')->insert([
            ['name' => 'Alipay+', 'glyph' => '支', 'image' => '/images/logos-client/alipay-plus.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'DiDi', 'glyph' => 'D', 'image' => '/images/logos-client/didi.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'DingTalk', 'glyph' => '钉', 'image' => '/images/logos-client/dingtalk.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Coolita', 'glyph' => 'C', 'image' => '/images/logos-client/coolita.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Skyworth', 'glyph' => 'S', 'image' => '/images/logos-client/skyworth.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'MangoTV', 'glyph' => '芒', 'image' => '/images/logos-client/mangotv.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Grand Melia', 'glyph' => 'M', 'image' => '/images/logos-client/grandmelia.webp', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Zhongnan Animation', 'glyph' => '中', 'image' => '/images/logos-client/zhongnan-animation.webp', 'created_at' => now(), 'updated_at' => now()],
        ]);

        // ─── Case Studies ───
        DB::table('case_studies')->insert([
            [
                'tag' => 'Fintech',
                'slug' => 'chinese-fintech-live-in-6-months',
                'cover' => '/images/cases/fintech.png',
                'h' => 'A Chinese fintech, live in 6 months.',
                'p' => 'Market entry, licensing pathway, and a local operating team - from scoping to launch.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'tag' => 'Consumer · Retail',
                'slug' => 'shelf-to-scale-across-40-cities',
                'cover' => '/images/cases/retail.png',
                'h' => 'Shelf to scale across 40 cities.',
                'p' => 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'tag' => 'Manufacturing',
                'slug' => 'local-production-de-risked',
                'cover' => '/images/cases/manufacturing.png',
                'h' => 'Local production, de-risked.',
                'p' => 'Site selection, regulatory navigation, and a resilient supply chain for a manufacturing entrant.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Insights (Articles) ───
        DB::table('insights')->insert([
            [
                'cat' => 'Automotive & Energy',
                'rt' => '8 min read',
                't' => "Indonesia's 40% TKDN Mandate: The Strategic Supply Chain Playbook for Chinese EV & Battery Manufacturers",
                'slug' => 'indonesia-ev-battery-supply-chain-tkdn-mandate',
                'cover' => '/images/cases/manufacturing.webp',
                'date' => 'October 2026',
                'author_name' => 'Helda Chandra',
                'author_role' => 'Managing Partner & Industrial Practice Lead',
                'excerpt' => 'How Chinese OEMs and tier-1 battery suppliers in Cikarang, Kendal, and Morowali balance mandatory local content thresholds (TKDN), raw material processing, and tax incentive eligibility without losing manufacturing velocity.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Digital Commerce',
                'rt' => '7 min read',
                't' => 'The Live-Commerce & Permendag 31 Playbook: Re-Architecting Cross-Border E-Commerce in Indonesia',
                'slug' => 'indonesia-cross-border-ecommerce-permendag-live-selling',
                'cover' => '/images/cases/retail.webp',
                'date' => 'September 2026',
                'author_name' => 'Wei Chen',
                'author_role' => 'Head of Cross-Border Commerce',
                'excerpt' => 'Why direct-to-consumer cross-border shipping is obsolete under Permendag 31, and how top Chinese consumer brands build local PT PMA entities, bonded warehousing, BPOM certification, and TikTok/Tokopedia creator operations.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Policy & Strategy',
                'rt' => '6 min read',
                't' => "Mastering Indonesia's Personal Data Protection (UU PDP): Compliance Roadmaps for Enterprise SaaS & Cloud Platforms",
                'slug' => 'uu-pdp-indonesia-enterprise-saas-cloud-compliance',
                'cover' => '/images/challenges_insights.webp',
                'date' => 'August 2026',
                'author_name' => 'Ahmad Rizky',
                'author_role' => 'Senior Regulatory & Technology Advisor',
                'excerpt' => 'A pragmatic compliance guide to Law No. 27/2022 (UU PDP): local data residency mandates, mandatory Data Protection Officer (DPO) appointments, and cross-border data transfer protocols for multinational software providers.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Operations & Supply Chain',
                'rt' => '11 min read',
                't' => 'Industrial Estate Site Selection in Java vs. Outer Islands: Labor Productivity, Infrastructure, and Port Access',
                'slug' => 'indonesia-industrial-park-site-selection-java-kendal-batang',
                'cover' => '/images/project_analysis.webp',
                'date' => 'July 2026',
                'author_name' => 'Li Jianhua',
                'author_role' => 'Industrial Strategy Director',
                'excerpt' => 'A comparative benchmark of Central Java (Kendal, Batang), West Java (Subang Smartpolitan, Karawang), and Sulawesi for manufacturing relocations: minimum wages, logistics bottlenecks, power stability, and customs clearance.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Consumer & Retail',
                'rt' => '9 min read',
                't' => 'Beyond Greater Jakarta: Cracking Second- and Third-Tier Consumer Markets in Java and Sumatra',
                'slug' => 'tier-2-tier-3-indonesia-consumer-markets-distribution',
                'cover' => '/images/video_manifesto_cover.webp',
                'date' => 'June 2026',
                'author_name' => 'Siti Nurhaliza',
                'author_role' => 'Consumer Insights Lead',
                'excerpt' => 'Why marketing playbooks designed for Jakarta fail in Solo, Malang, and Lampung. How localized price points (sub-Rp 100.000), cash-on-delivery channels, and traditional warung distributor networks unlock 200M+ consumers.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Finance & Tech',
                'rt' => '7 min read',
                't' => 'Cross-Border Payments: The Future of Indonesia-China QRIS & Local Currency Settlement',
                'slug' => 'cross-border-payments-qris',
                'cover' => '/images/insights/qris.webp',
                'date' => 'May 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Fintech Advisory Practice',
                'excerpt' => 'How Bank Indonesia and PBOC\'s bilateral QR code interoperability and Local Currency Settlement (LCS) framework eliminate FX friction for cross-border tourism, fintech wallets, and international trade settlement.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Policy & Strategy',
                'rt' => '10 min read',
                't' => 'Decoding China\'s 15th 5-Year Plan: Strategic Implications for Southeast Asian Corridors',
                'slug' => 'decoding-china-5-year-plan',
                'cover' => '/images/insights/5_year_plan.webp',
                'date' => 'April 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Global Macro Team',
                'excerpt' => 'An executive briefing on Beijing\'s latest industrial restructuring policies, outbound green energy capital, advanced manufacturing shifts, and their direct intersection with Indonesia\'s Golden Vision 2045.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Diplomacy & Trade',
                'rt' => '6 min read',
                't' => 'A New Chapter in ASEAN-China Comprehensive Strategic Partnership & RCEP Tariff Utilization',
                'slug' => 'asean-china-strategic-partnership',
                'cover' => '/images/insights/asean_china.webp',
                'date' => 'March 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Trade Policy Practice',
                'excerpt' => 'Unlocking zero-tariff schedules and non-tariff streamlining under RCEP to accelerate two-way trade between Indonesian commodity processing and China\'s industrial supply chains.',
                'body' => null,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Book Reviews ───
        DB::table('book_reviews')->insert([
            [
                'cat' => 'Market & Culture',
                'title' => 'Indonesia, Etc.',
                'author' => 'Elizabeth Pisani',
                'take' => 'The single best primer on why Indonesia resists a one-size playbook. Required reading before you land.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Cross-border Strategy',
                'title' => 'Dealing with China',
                'author' => 'Henry M. Paulson Jr.',
                'take' => 'A pragmatic read on negotiating across the Chinese state and enterprise, from someone who did it at scale.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Relationships',
                'title' => 'Guanxi',
                'author' => 'Buderi & Huang',
                'take' => 'How relationship capital actually compounds. We pair it with the Indonesian context it does not cover.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Courses ───
        DB::table('courses')->insert([
            [
                'cat' => 'Social Media',
                'title' => 'Social Media Strategy for Indonesia',
                'slug' => 'social-media-strategy-indonesia',
                'free' => true,
                'price' => 'Free',
                'desc' => 'Platforms, formats, and posting rhythms that actually move Indonesian audiences.',
                'dur' => '1h 40m',
                'lessons' => '8 lessons',
                'cover' => 'COURSE · social feeds',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Marketing',
                'title' => 'Digital Marketing for the Indonesian Market',
                'slug' => 'digital-marketing-indonesian-market',
                'free' => false,
                'price' => 'Rp 500.000',
                'desc' => 'A full-funnel playbook: paid, organic, and marketplace marketing localized for Indonesia.',
                'dur' => '3h 20m',
                'lessons' => '14 lessons',
                'cover' => 'COURSE · campaign dashboard',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Regulation',
                'title' => 'Navigating Indonesian Business Licensing',
                'slug' => 'navigating-indonesian-business-licensing',
                'free' => false,
                'price' => 'Rp 750.000',
                'desc' => 'OSS, KBLI codes, and the permits foreign-owned companies most often get wrong.',
                'dur' => '2h 10m',
                'lessons' => '10 lessons',
                'cover' => 'COURSE · permits & documents',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Leadership',
                'title' => 'Cross-Cultural Team Management',
                'slug' => 'cross-cultural-team-management',
                'free' => true,
                'price' => 'Free',
                'desc' => 'Lead a local Indonesian team without losing what works in your home culture.',
                'dur' => '1h 15m',
                'lessons' => '6 lessons',
                'cover' => 'COURSE · team meeting',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'E-commerce',
                'title' => 'E-commerce & Marketplace Playbook',
                'slug' => 'ecommerce-marketplace-playbook',
                'free' => false,
                'price' => 'Rp 500.000',
                'desc' => 'Tokopedia, Shopee, and TikTok Shop - listing, pricing, and fulfilment strategy.',
                'dur' => '2h 45m',
                'lessons' => '12 lessons',
                'cover' => 'COURSE · marketplace storefront',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'cat' => 'Consumer Insight',
                'title' => 'Indonesian Consumer Behavior 101',
                'slug' => 'indonesian-consumer-behavior-101',
                'free' => true,
                'price' => 'Free',
                'desc' => 'How 270 million consumers really decide - regions, religion, and price sensitivity.',
                'dur' => '55m',
                'lessons' => '5 lessons',
                'cover' => 'COURSE · street market',
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Highlights ───
        DB::table('highlights')->insert([
            [
                'type' => 'Podcast · Latest Episode',
                'date' => 'Ep. 24 · May 2026',
                'title' => 'Selling to Gen-Z Indonesia: what Chinese brands keep missing.',
                'description' => 'A field conversation with a Jakarta-based brand operator on TikTok-first launches, local KOLs, and pricing for the archipelago.',
                'link_text' => 'Listen now',
                'link_url' => null,
                'image' => null,
                'is_podcast' => true,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'type' => 'Webinar · Upcoming',
                'date' => 'June 18, 2026 · 14:00 WIB',
                'title' => '2026 Foreign Investment Rules, Decoded',
                'description' => null,
                'link_text' => 'Reserve a seat',
                'link_url' => null,
                'image' => null,
                'is_podcast' => false,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'type' => 'Product · New',
                'date' => 'Just launched',
                'title' => 'Market Entry Diagnostic toolkit',
                'description' => null,
                'link_text' => 'Explore',
                'link_url' => null,
                'image' => null,
                'is_podcast' => false,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'type' => 'Campaign',
                'date' => 'Now open',
                'title' => 'Bridge Scholarship: 50 local seats',
                'description' => null,
                'link_text' => 'See details',
                'link_url' => null,
                'image' => null,
                'is_podcast' => false,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'type' => 'Campaign',
                'date' => 'Q3 2026',
                'title' => '"Decoded" report series, vol. 2',
                'description' => null,
                'link_text' => 'Get notified',
                'link_url' => null,
                'image' => null,
                'is_podcast' => false,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Services ───
        DB::table('services')->insert([
            [
                'title' => 'Market Entry Strategy',
                'description' => 'End-to-end market entry planning for Chinese companies entering Indonesia, covering regulatory, competitive, and operational landscapes.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Regulatory & Licensing Support',
                'description' => 'Navigate OSS, KBLI codes, investment licenses, and sector-specific permits with confidence and speed.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Business Matchmaking & Partnerships',
                'description' => 'Connect with vetted Indonesian partners, distributors, and institutional stakeholders through our curated network.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Trade & Export-Import Advisory',
                'description' => 'Customs, tariffs, logistics, and trade compliance advisory tailored for the Indonesia-China corridor.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Digital & Social Media Localization',
                'description' => 'Localize your brand for Indonesian platforms — from TikTok and Instagram to Tokopedia and Shopee.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Talent & Workforce Solutions',
                'description' => 'Source, recruit, and manage local Indonesian teams with cross-cultural management frameworks.',
                'image' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);

        // ─── Profiles (Team) ───
        DB::table('profiles')->insert([
            [
                'title' => 'Ahmad Rizky',
                'description' => 'CEO & Co-Founder',
                'image' => '/images/profil/placeholder.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Wei Chen',
                'description' => 'Chief Strategy Officer',
                'image' => '/images/profil/placeholder.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Siti Nurhaliza',
                'description' => 'Head of Operations',
                'image' => '/images/profil/placeholder.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Li Jianhua',
                'description' => 'China Desk Lead',
                'image' => '/images/profil/placeholder.jpg',
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);

        // ─── Industry Coverages ───
        DB::table('industry_coverages')->insert([
            [
                'title' => 'Market & Brand',
                'description' => 'Retail, Commerce, Creative Industry',
                'image' => null,
                'icon' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Growth & Strategy',
                'description' => 'Digital Platform, Technology, Finance',
                'image' => null,
                'icon' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Operations & Resilience',
                'description' => 'Manufacture, Electronics, Automotive',
                'image' => null,
                'icon' => '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Educational Institutional',
                'description' => null,
                'image' => null,
                'icon' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Pharmacy',
                'description' => null,
                'image' => null,
                'icon' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Tourism & Travel',
                'description' => null,
                'image' => null,
                'icon' => null,
                'created_at' => now(), 'updated_at' => now(),
            ]
        ]);

        // ─── Careers ───
        DB::table('careers')->insert([
            [
                'title' => 'Business Development Associate',
                'dept' => 'Growth',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'reqs' => json_encode(['2+ years B2B experience', 'Fluent in Bahasa & English', 'Strong networking skills']),
                'description' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'China Market Analyst',
                'dept' => 'Research',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'reqs' => json_encode(['Mandarin fluency', 'Experience in market research', 'Knowledge of China-SEA trade']),
                'description' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
            [
                'title' => 'Content & Social Media Intern',
                'dept' => 'Marketing',
                'type' => 'Internship',
                'location' => 'Jakarta, Indonesia (Hybrid)',
                'reqs' => json_encode(['Currently pursuing degree', 'Creative writing skills', 'Instagram/TikTok savvy']),
                'description' => null,
                'created_at' => now(), 'updated_at' => now(),
            ],
        ]);

        $this->call(CaseStudySeeder::class);
        $this->call(PageSeoSeeder::class);
        $this->call(TrafficLogSeeder::class);
    }
}
