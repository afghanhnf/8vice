<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use App\Helpers\SeedData;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Helper to encode bilingual or structured values to JSON cleanly.
     */
    private function json($value): string
    {
        return json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    /**
     * Seed the application's database with complete, up-to-date data.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        // ─── 1. Admin User ───
        User::firstOrCreate(
            ['email' => 'admin@8vice.com'],
            [
                'name' => 'Admin 8Vice',
                'password' => bcrypt('password'),
            ]
        );

        // ─── 2. Site Settings ───
        $settings = SeedData::getSiteSettings();
        DB::table('site_settings')->truncate();
        DB::table('site_settings')->insert([
            'address' => $settings->address,
            'email' => $settings->email,
            'maps_link' => $settings->maps_link,
            'instagram_url' => $settings->instagram_url,
            'linkedin_url' => $settings->linkedin_url,
            'whatsapp_url' => $settings->whatsapp_url,
            'wechat_id' => '8vice_official',
            'wechat_qr' => '/images/wechat.webp',
            'youtube_url' => null,
            'google_analytics' => $settings->google_analytics,
            'google_search_console' => $settings->google_search_console,
            'google_tag_manager' => null,
            'meta_pixels' => $settings->meta_pixels,
            'macro_stat_value' => $settings->macro_stat_value,
            'macro_stat_label' => $settings->macro_stat_label,
            'tagline' => $this->json([
                'en' => 'Your Strategic Gateway to Indonesia and China.',
                'id' => 'Gerbang Strategis Anda Menuju Indonesia dan Tiongkok.'
            ]),
            'default_meta_title' => $this->json([
                'en' => '8vice — Indonesia–China Strategic Advisory & Business Gateway',
                'id' => '8vice — Konsultasi Strategis & Gerbang Bisnis Indonesia–China'
            ]),
            'default_meta_description' => $this->json([
                'en' => 'Bilateral cross-border advisory, government relations, market entry roadmaps, and business matching between Indonesia and China.',
                'id' => 'Konsultasi lintas batas bilateral, hubungan pemerintah, peta jalan ekspansi pasar, dan pencocokan bisnis Indonesia–Tiongkok.'
            ]),
            'default_og_image' => '/images/hero_globe_china_indonesia.webp',
            'site_keywords' => 'strategic advisory, indonesia china gateway, market entry, government relations, business matching, cross border pr, investment facilitation',
            'twitter_handle' => '@8viceofficial',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // ─── 3. Categories ───
        DB::table('categories')->truncate();
        DB::table('categories')->insert([
            ['name' => 'China Research & Industrial Strategy', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Automotive & Energy', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Digital Commerce', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Policy & Strategy', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Operations & Supply Chain', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Consumer & Retail', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Finance & Tech', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Diplomacy & Trade', 'type' => 'insight', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Fintech · Market Entry', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Consumer Tech · Retail', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Manufacturing · Operations', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Enterprise SaaS · Tech', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Creative IP · Media', 'type' => 'case_study', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Executive Masterclass', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Regulatory & Licensing', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'E-Commerce & Digital', 'type' => 'course', 'created_at' => now(), 'updated_at' => now()],
        ]);

        // ─── 4. Statistics ───
        DB::table('statistics')->truncate();
        foreach (SeedData::getStatistics() as $stat) {
            DB::table('statistics')->insert([
                'title' => $stat->title,
                'description' => $stat->description,
                'image' => $stat->image,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 5. Clients (11 Active Logos) ───
        DB::table('clients')->truncate();
        foreach (SeedData::getClients() as $client) {
            DB::table('clients')->insert([
                'name' => $client->name,
                'glyph' => $client->glyph,
                'image' => $client->image,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 6. The 6 Core Service Pillars ───
        DB::table('services')->truncate();
        foreach (SeedData::getServices() as $svc) {
            DB::table('services')->insert([
                'slug' => $svc->slug,
                'title' => $this->json($svc->title),
                'headline' => $this->json($svc->headline),
                'description' => $this->json($svc->summary),
                'image' => $svc->hero_image,
                'detail_image' => $svc->detail_image,
                'link_url' => $svc->link_url,
                'deliverables' => $this->json($svc->deliverables),
                'sort_order' => $svc->sort_order,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 7. Leadership Team / People Behind 8Vice ───
        DB::table('profiles')->truncate();
        $profIdx = 1;
        foreach (SeedData::getProfiles() as $profile) {
            $enRole = is_array($profile->role) ? ($profile->role['en'] ?? '') : $profile->role;
            $idRole = is_array($profile->role) ? ($profile->role['id'] ?? '') : $profile->role;
            $enBio = is_array($profile->short_bio) ? ($profile->short_bio['en'] ?? '') : $profile->short_bio;
            $idBio = is_array($profile->short_bio) ? ($profile->short_bio['id'] ?? '') : $profile->short_bio;
            $enQTitle = is_array($profile->quote_title) ? ($profile->quote_title['en'] ?? '') : $profile->quote_title;
            $idQTitle = is_array($profile->quote_title) ? ($profile->quote_title['id'] ?? '') : $profile->quote_title;

            $enQMsg = isset($profile->quote_message['en'])
                ? (is_array($profile->quote_message['en']) ? implode("\n\n", $profile->quote_message['en']) : $profile->quote_message['en'])
                : (is_array($profile->quote_message) ? implode("\n\n", $profile->quote_message) : $profile->quote_message);

            $idQMsg = isset($profile->quote_message['id'])
                ? (is_array($profile->quote_message['id']) ? implode("\n\n", $profile->quote_message['id']) : $profile->quote_message['id'])
                : (is_array($profile->quote_message) ? implode("\n\n", $profile->quote_message) : $profile->quote_message);

            DB::table('profiles')->insert([
                'call_name' => $profile->call_name,
                'full_title' => $profile->title,
                'title' => $this->json([
                    'en' => "{$profile->call_name} ({$profile->title})",
                    'id' => "{$profile->call_name} ({$profile->title})"
                ]),
                'role' => $this->json([
                    'en' => $enRole,
                    'id' => $idRole,
                ]),
                'short_bio' => $this->json([
                    'en' => $enBio,
                    'id' => $idBio,
                ]),
                'focus_tags' => $this->json($profile->focus_tags),
                'socials' => $this->json($profile->socials),
                'quote_title' => $this->json([
                    'en' => $enQTitle,
                    'id' => $idQTitle,
                ]),
                'quote_message' => $this->json([
                    'en' => $enQMsg,
                    'id' => $idQMsg,
                ]),
                'description' => $this->json([
                    'en' => "{$enRole}\n\n{$enBio}",
                    'id' => "{$idRole}\n\n{$idBio}",
                ]),
                'image' => $profile->image,
                'sort_order' => $profIdx++,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 8. 5 Priority Industries ───
        DB::table('industry_coverages')->truncate();
        foreach (SeedData::getIndustryCoverages() as $ind) {
            DB::table('industry_coverages')->insert([
                'slug' => $ind->id,
                'title' => $this->json($ind->title),
                'tagline' => $this->json($ind->tagline),
                'tag' => $ind->tag,
                'description' => $this->json([
                    'en' => $ind->description['en'],
                    'id' => $ind->description['id'],
                ]),
                'highlights' => $this->json($ind->highlights),
                'image' => $ind->image,
                'icon' => $ind->num,
                'sort_order' => (int)$ind->num,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 9. Insights & In-Depth China Research Papers ───
        DB::table('insights')->truncate();
        foreach (SeedData::getInsights() as $insight) {
            $isPaper = !empty($insight->is_research_paper);
            $paperTags = $isPaper
                ? [
                    'en' => ['#ChinaResearch', '#TKDNCompliance', '#SupplyChainRelocation', '#IndustrialParks', '#JavaVsSulawesi', '#CrossBorderJV'],
                    'id' => ['#RisetChina', '#KepatuhanTKDN', '#RelokasiRantaiPasok', '#KawasanIndustri', '#JawaVsSulawesi', '#KemitraanBilateral']
                  ]
                : [
                    'en' => ['#CrossBorderExpansion', '#MarketEntry', '#IndonesiaChinaTrade', '#RegulatoryCompliance'],
                    'id' => ['#EkspansiLintasBatas', '#PenetrasiPasar', '#PerdaganganIndonesiaChina', '#KepatuhanRegulasi']
                  ];

            $paperFaqs = $isPaper
                ? [
                    'en' => [
                        ['q' => 'What is included in the 58-page China Industrial Blueprint?', 'a' => 'The report contains empirical datasets on 120+ Chinese enterprises, exact TKDN formula compliance benchmarks, comparative land tariffs across Kendal, Batang, Subang, and Morowali, logistics cost matrices, and localized joint venture term sheet templates.'],
                        ['q' => 'How can our company obtain the corporate multi-seat license?', 'a' => 'You can purchase directly online using Corporate Credit Card, WeChat/Alipay, Virtual Account, or request an official Indonesian tax invoice (Faktur Pajak) through our contact advisory team.']
                    ],
                    'id' => [
                        ['q' => 'Apa saja yang termuat di dalam Cetak Biru Relokasi Industri 58 Halaman?', 'a' => 'Laporan memuat data empiris 120+ korporasi manufaktur Tiongkok, formula kepatuhan TKDN 40%, perbandingan tarif lahan di Kendal, Batang, Subang, dan Morowali, simulasi biaya logistik, serta draf perjanjian joint-venture bilateral.'],
                        ['q' => 'Bagaimana perusahaan kami memperoleh lisensi korporat dengan Faktur Pajak?', 'a' => 'Anda dapat bertransaksi langsung secara online via Virtual Account, Kartu Kredit, QRIS, atau meminta penerbitan faktur pajak resmi melalui form konsultasi tim 8vice.']
                    ]
                  ]
                : [
                    'en' => [
                        ['q' => 'How can 8vice support our expansion in this sector?', 'a' => 'Our bilateral advisory practice provides comprehensive market entry assessment, licensing sequencing, partner due diligence, and executive government relations.']
                    ],
                    'id' => [
                        ['q' => 'Bagaimana 8vice dapat mendampingi ekspansi kami di sektor ini?', 'a' => 'Tim penasihat bilateral kami menyediakan evaluasi kelayakan pasar, pengurusan izin berjenjang, due diligence mitra lokal, dan mediasi kelembagaan resmi.']
                    ]
                  ];

            DB::table('insights')->insert([
                'cat' => $insight->cat,
                'rt' => $insight->rt,
                't' => $this->json(['en' => $insight->t, 'id' => $insight->t]),
                'slug' => $insight->slug,
                'cover' => $insight->cover,
                'date' => $insight->date,
                'author_name' => $insight->author_name,
                'author_role' => $insight->author_role,
                'excerpt' => $this->json(['en' => $insight->excerpt, 'id' => $insight->excerpt]),
                'body' => $this->json([
                    'en' => "<p>{$insight->excerpt}</p><p>For comprehensive strategic counsel and tailored sector briefings, contact the 8vice bilateral advisory desk.</p>",
                    'id' => "<p>{$insight->excerpt}</p><p>Untuk konsultasi strategis komprehensif dan kajian sektoral mendalam, hubungi meja penasihat bilateral 8vice.</p>"
                ]),
                'views_count' => rand(140, 890),
                'status' => 'Publish',
                'is_research_paper' => $isPaper ? 1 : 0,
                'research_paper_link' => $isPaper ? ($insight->research_paper_link ?? 'https://8vice.id/checkout/china-cross-border-blueprint') : null,
                'paper_pages' => $isPaper ? 58 : 0,
                'is_paywall_locked' => $isPaper ? 1 : 0,
                'tags' => $this->json($paperTags),
                'faqs' => $this->json($paperFaqs),
                'references' => $this->json([
                    ['title' => 'Indonesia Ministry of Investment / BKPM Annual Report', 'url' => 'https://www.bkpm.go.id'],
                    ['title' => 'Bank Indonesia & PBOC Bilateral Local Currency Settlement Framework', 'url' => 'https://www.bi.go.id']
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 10. Case Studies ───
        $this->call(CaseStudySeeder::class);

        // ─── 11. Careers ───
        DB::table('careers')->truncate();
        foreach (SeedData::getCareers() as $career) {
            DB::table('careers')->insert([
                'title' => $career->title,
                'dept' => $career->dept,
                'type' => $career->type,
                'location' => $career->location,
                'reqs' => $career->reqs,
                'description' => $career->description,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 12. Courses ───
        DB::table('courses')->truncate();
        foreach (SeedData::getCourses() as $course) {
            DB::table('courses')->insert([
                'cat' => $course->cat,
                'title' => $course->title,
                'slug' => $course->slug,
                'free' => $course->free,
                'price' => $course->price,
                'desc' => $course->desc,
                'dur' => $course->dur,
                'lessons' => $course->lessons,
                'cover' => $course->cover,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // ─── 13. Page SEO & Traffic Logs ───
        $this->call(PageSeoSeeder::class);
        $this->call(TrafficLogSeeder::class);

        // ─── 14. Bilateral FAQs ───
        DB::table('faqs')->truncate();
        $faqs = [
            [
                'category' => 'General Advisory',
                'question' => ['en' => 'What is 8Vice’s primary focus in Indonesia–China cross-border business?', 'id' => 'Apa fokus utama 8Vice dalam bisnis lintas batas Indonesia–Tiongkok?'],
                'answer' => [
                    'en' => '8Vice is a specialized bilateral advisory firm providing strategic market entry, government relations, institutional stakeholder management, B2B partner matchmaking, and crisis communications for multinational enterprises entering Indonesia or expanding to China.',
                    'id' => '8Vice adalah firma penasihat bilateral khusus yang menyediakan konsultasi ekspansi pasar strategis, hubungan pemerintah, mediasi pemangku kepentingan kelembagaan, pencocokan mitra B2B, dan komunikasi krisis untuk perusahaan multinasional yang memasuki Indonesia atau berekspansi ke Tiongkok.'
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Regulatory & TKDN',
                'question' => ['en' => 'How does 8Vice assist with Indonesian TKDN (Domestic Component Level) compliance?', 'id' => 'Bagaimana 8Vice mendampingi kepatuhan TKDN (Tingkat Komponen Dalam Negeri)?'],
                'answer' => [
                    'en' => 'We assist cross-border manufacturing and energy clients in mapping supply chain tiers, calculating local content scores under Ministry of Industry guidelines, and qualifying for state procurement incentives.',
                    'id' => 'Kami mendampingi klien manufaktur dan energi dalam memetakan rantai pasok lokal, menghitung sertifikasi TKDN sesuai regulasi Kementerian Perindustrian, dan memastikan kualifikasi proyek pengadaan strategis.'
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Research Papers',
                'question' => ['en' => 'How do I access the full 58-Page China Industrial Blueprint?', 'id' => 'Bagaimana cara mengakses Cetak Biru Relokasi Industri 58 Halaman secara penuh?'],
                'answer' => [
                    'en' => 'Readers can unlock instant digital access via our secure checkout gateway by clicking the Unlock Access button on the research paper preview, or request corporate multi-seat licensing with an official Indonesian Faktur Pajak.',
                    'id' => 'Pembaca dapat membuka akses digital instan melalui tombol Buka Akses / Bayar pada artikel riset, atau memesan lisensi korporat multi-user dengan Faktur Pajak resmi melalui meja konsultasi 8vice.'
                ],
                'sort_order' => 3,
                'is_active' => true,
            ],
        ];
        foreach ($faqs as $faq) {
            DB::table('faqs')->insert([
                'category' => $faq['category'],
                'question' => $this->json($faq['question']),
                'answer' => $this->json($faq['answer']),
                'sort_order' => $faq['sort_order'],
                'is_active' => $faq['is_active'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        Schema::enableForeignKeyConstraints();
    }
}
