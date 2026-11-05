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
                'id' => 'Gerbang Strategis Anda Menuju Indonesia dan Tiongkok.',
                'cn' => '连接印尼与中国的战略商业门户。'
            ]),
            'default_meta_title' => $this->json([
                'en' => '8vice — Indonesia–China Strategic Advisory & Business Gateway',
                'id' => '8vice — Konsultasi Strategis & Gerbang Bisnis Indonesia–China',
                'cn' => '8vice — 印尼与中国双边战略咨询与商业门户'
            ]),
            'default_meta_description' => $this->json([
                'en' => 'Bilateral cross-border advisory, government relations, market entry roadmaps, and business matching between Indonesia and China.',
                'id' => 'Konsultasi lintas batas bilateral, hubungan pemerintah, peta jalan ekspansi pasar, dan pencocokan bisnis Indonesia–Tiongkok.',
                'cn' => '专注于印尼与中国之间的双边跨境战略咨询、政府与公共事务协调、市场准入规划及精准商业配对服务。'
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
            $cnRole = is_array($profile->role) ? ($profile->role['cn'] ?? '') : '';

            $enBio = is_array($profile->short_bio) ? ($profile->short_bio['en'] ?? '') : $profile->short_bio;
            $idBio = is_array($profile->short_bio) ? ($profile->short_bio['id'] ?? '') : $profile->short_bio;
            $cnBio = is_array($profile->short_bio) ? ($profile->short_bio['cn'] ?? '') : '';

            $enQTitle = is_array($profile->quote_title) ? ($profile->quote_title['en'] ?? '') : $profile->quote_title;
            $idQTitle = is_array($profile->quote_title) ? ($profile->quote_title['id'] ?? '') : $profile->quote_title;
            $cnQTitle = is_array($profile->quote_title) ? ($profile->quote_title['cn'] ?? '') : '';

            $enQMsg = isset($profile->quote_message['en'])
                ? (is_array($profile->quote_message['en']) ? implode("\n\n", $profile->quote_message['en']) : $profile->quote_message['en'])
                : (is_array($profile->quote_message) ? implode("\n\n", $profile->quote_message) : $profile->quote_message);

            $idQMsg = isset($profile->quote_message['id'])
                ? (is_array($profile->quote_message['id']) ? implode("\n\n", $profile->quote_message['id']) : $profile->quote_message['id'])
                : (is_array($profile->quote_message) ? implode("\n\n", $profile->quote_message) : $profile->quote_message);

            $cnQMsg = isset($profile->quote_message['cn'])
                ? (is_array($profile->quote_message['cn']) ? implode("\n\n", $profile->quote_message['cn']) : $profile->quote_message['cn'])
                : '';

            DB::table('profiles')->insert([
                'call_name' => $profile->call_name,
                'full_title' => $profile->title,
                'title' => $this->json([
                    'en' => $profile->title,
                    'id' => $profile->title,
                    'cn' => $profile->title,
                ]),
                'role' => $this->json([
                    'en' => $enRole,
                    'id' => $idRole,
                    'cn' => $cnRole,
                ]),
                'short_bio' => $this->json([
                    'en' => $enBio,
                    'id' => $idBio,
                    'cn' => $cnBio,
                ]),
                'focus_tags' => $this->json($profile->focus_tags),
                'socials' => $this->json($profile->socials),
                'quote_title' => $this->json([
                    'en' => $enQTitle,
                    'id' => $idQTitle,
                    'cn' => $cnQTitle,
                ]),
                'quote_message' => $this->json([
                    'en' => $enQMsg,
                    'id' => $idQMsg,
                    'cn' => $cnQMsg,
                ]),
                'description' => $this->json([
                    'en' => "{$enRole}\n\n{$enBio}",
                    'id' => "{$idRole}\n\n{$idBio}",
                    'cn' => "{$cnRole}\n\n{$cnBio}",
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
                    'cn' => $ind->description['cn'] ?? '',
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
        $chineseInsights = [
            'china-cross-border-industrial-blueprint-2026' => [
                't' => '中国企业对印尼产业转移与跨境供应链布局战略蓝图 (2026–2030)',
                'excerpt' => '基于对120余家在印尼肯达尔、巴塘、芝卡朗及莫罗瓦利设立制造基地的中资企业的实证研究报告：深入解析40% TKDN 国产化率合规路径、园区选址成本、物流清关及合资治理结构。',
            ],
            'indonesia-ev-battery-supply-chain-tkdn-mandate' => [
                't' => '印尼40% TKDN国产化率强制要求：中国新能源汽车与动力电池企业的供应链实战指南',
                'excerpt' => '位于芝卡朗、肯达尔和莫罗瓦利的中国整车主机厂及一级电池供应商如何在满足强制性本土化率(TKDN)、原材料深加工与享受税收优惠之间取得战略平衡。',
            ],
            'indonesia-cross-border-ecommerce-permendag-live-selling' => [
                't' => '直播电商与印尼贸易部第31号令合规实战：重塑跨境电商商业架构',
                'excerpt' => '印尼贸易部31号令出台后，直邮模式已不复存在。中国领先消费品牌如何通过设立本土外资公司(PT PMA)、保税仓储、BPOM认证及TikTok/Tokopedia本地达人运营实现合规破局。',
            ],
            'uu-pdp-indonesia-enterprise-saas-cloud-compliance' => [
                't' => '掌握印尼《个人数据保护法》(UU PDP)：企业级SaaS与云平台的合规路线图',
                'excerpt' => '印尼第27/2022号个人数据保护法实用指引：数据本地化存储要求、数据保护官(DPO)强制任命以及跨国软件服务商的数据跨境传输合规标准。',
            ],
            'indonesia-industrial-park-site-selection-java-kendal-batang' => [
                't' => '爪哇岛与外岛工业园区选址对比：劳动力生产率、基础设施与港口航运全方位评估',
                'excerpt' => '中爪哇（肯达尔、巴塘）、西爪哇（苏邦、加拉璜）以及苏拉威西制造业产业转移综合横向对比：最低薪资、物流瓶颈、电力稳定性与通关时效深度剖析。',
            ],
            'tier-2-tier-3-indonesia-consumer-markets-distribution' => [
                't' => '走出大雅加达：深度渗透爪哇与苏门答腊二三线核心消费市场',
                'excerpt' => '为什么专为雅加达设计的营销方案在梭罗、玛琅和楠榜常常遇冷？如何通过百元内下沉定价、货到付款渠道及传统夫妻店(Warung)分销网络撬动2亿增量消费人群。',
            ],
            'cross-border-payments-qris' => [
                't' => '跨境支付新浪潮：印尼与中国双边QRIS互通与本币结算(LCS)的前景展望',
                'excerpt' => '印尼央行与中国人民银行双边QR二维码互联互通及本币结算机制如何有效降低汇兑成本，加速跨境文旅消费、金融科技钱包及国际贸易结算。',
            ],
            'decoding-china-5-year-plan' => [
                't' => '深度解读中国“十五五”规划：对东南亚经贸走廊的深远战略启示',
                'excerpt' => '全面剖析北京最新产业结构升级政策、绿色能源资本出海趋势及先进制造业转移浪潮，以及其与印尼“2045黄金愿景”的国家战略交汇点。',
            ],
            'asean-china-strategic-partnership' => [
                't' => '东盟与中国全面战略伙伴关系新篇章与RCEP关税优惠政策实战应用',
                'excerpt' => '充分利用区域全面经济伙伴关系协定(RCEP)零关税时间表与非关税贸易便利化措施，加速印尼大宗商品深加工与中国现代产业供应链之间的双向贸易循环。',
            ],
        ];

        foreach (SeedData::getInsights() as $insight) {
            $isPaper = !empty($insight->is_research_paper);
            $paperTags = $isPaper
                ? [
                    'en' => ['#ChinaResearch', '#TKDNCompliance', '#SupplyChainRelocation', '#IndustrialParks', '#JavaVsSulawesi', '#CrossBorderJV'],
                    'id' => ['#RisetChina', '#KepatuhanTKDN', '#RelokasiRantaiPasok', '#KawasanIndustri', '#JawaVsSulawesi', '#KemitraanBilateral'],
                    'cn' => ['#中国智库研究', '#TKDN国产化率', '#产业链跨境重组', '#印尼工业园区', '#爪哇与苏拉威西对比', '#双边合资架构']
                  ]
                : [
                    'en' => ['#CrossBorderExpansion', '#MarketEntry', '#IndonesiaChinaTrade', '#RegulatoryCompliance'],
                    'id' => ['#EkspansiLintasBatas', '#PenetrasiPasar', '#PerdaganganIndonesiaChina', '#KepatuhanRegulasi'],
                    'cn' => ['#企业出海扩张', '#市场准入策略', '#印中双边经贸', '#合规与监管']
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
                    ],
                    'cn' => [
                        ['q' => '这份长达58页的中国制造业出海与产业转移蓝图包含哪些内容？', 'a' => '本报告包含120余家在印尼设厂的中资制造业实证数据模型、40% TKDN 国产化率合规计算公式、肯达尔、巴塘、苏邦与莫罗瓦利工业园区的土地租金与物流成本对照矩阵，以及本土合资协议核心条款范本。'],
                        ['q' => '企业如何获取多席位企业授权许可及开具印尼官方税务发票 (Faktur Pajak)？', 'a' => '企业可直接在线通过企业信用卡、微信支付/支付宝或印尼银行虚拟账户购买，亦可通过 8vice 战略咨询窗口申请印尼官方合规税务发票。']
                    ]
                  ]
                : [
                    'en' => [
                        ['q' => 'How can 8vice support our expansion in this sector?', 'a' => 'Our bilateral advisory practice provides comprehensive market entry assessment, licensing sequencing, partner due diligence, and executive government relations.']
                    ],
                    'id' => [
                        ['q' => 'Bagaimana 8vice dapat mendampingi ekspansi kami di sektor ini?', 'a' => 'Tim penasihat bilateral kami menyediakan evaluasi kelayakan pasar, pengurusan izin berjenjang, due diligence mitra lokal, dan mediasi kelembagaan resmi.']
                    ],
                    'cn' => [
                        ['q' => '8vice 如何支持我们在该领域的业务扩张？', 'a' => '我们的双边战略咨询团队提供全方位的市场准入评估、合规牌照梳理、本土合作伙伴尽职调查以及高层政企事务协调。']
                    ]
                  ];

            $cnT = $chineseInsights[$insight->slug]['t'] ?? $insight->t;
            $cnExcerpt = $chineseInsights[$insight->slug]['excerpt'] ?? $insight->excerpt;

            DB::table('insights')->insert([
                'cat' => $insight->cat,
                'rt' => $insight->rt,
                't' => $this->json(['en' => $insight->t, 'id' => $insight->t, 'cn' => $cnT]),
                'slug' => $insight->slug,
                'cover' => $insight->cover,
                'date' => $insight->date,
                'author_name' => $insight->author_name,
                'author_role' => $insight->author_role,
                'excerpt' => $this->json(['en' => $insight->excerpt, 'id' => $insight->excerpt, 'cn' => $cnExcerpt]),
                'body' => $this->json([
                    'en' => "<p>{$insight->excerpt}</p><p>For comprehensive strategic counsel and tailored sector briefings, contact the 8vice bilateral advisory desk.</p>",
                    'id' => "<p>{$insight->excerpt}</p><p>Untuk konsultasi strategis komprehensif dan kajian sektoral mendalam, hubungi meja penasihat bilateral 8vice.</p>",
                    'cn' => "<p>{$cnExcerpt}</p><p>如需获取更详尽的双边战略咨询建议与特定行业定制研报，请随时联络 8vice 战略顾问咨询窗口。</p>"
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
                'title' => $this->json($career->title),
                'dept' => $this->json($career->dept),
                'type' => $this->json($career->type),
                'location' => $this->json($career->location),
                'reqs' => $this->json($career->reqs),
                'description' => $this->json($career->description),
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
                'question' => [
                    'en' => 'What is 8Vice’s primary focus in Indonesia–China cross-border business?',
                    'id' => 'Apa fokus utama 8Vice dalam bisnis lintas batas Indonesia–Tiongkok?',
                    'cn' => '8Vice 在印尼与中国跨境商业中的核心业务是什么？'
                ],
                'answer' => [
                    'en' => '8Vice is a specialized bilateral advisory firm providing strategic market entry, government relations, institutional stakeholder management, B2B partner matchmaking, and crisis communications for multinational enterprises entering Indonesia or expanding to China.',
                    'id' => '8Vice adalah firma penasihat bilateral khusus yang menyediakan konsultasi ekspansi pasar strategis, hubungan pemerintah, mediasi pemangku kepentingan kelembagaan, pencocokan mitra B2B, dan komunikasi krisis untuk perusahaan multinasional yang memasuki Indonesia atau berekspansi ke Tiongkok.',
                    'cn' => '8Vice 是一家专注印中双边业务的专业战略咨询机构，为进入印尼或拓展中国市场的跨国企业提供战略准入、政府事务协调、机构利益相关方管理、B2B 商业配对及危机公关传播服务。'
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Regulatory & TKDN',
                'question' => [
                    'en' => 'How does 8Vice assist with Indonesian TKDN (Domestic Component Level) compliance?',
                    'id' => 'Bagaimana 8Vice mendampingi kepatuhan TKDN (Tingkat Komponen Dalam Negeri)?',
                    'cn' => '8Vice 如何协助企业满足印尼本土化率 (TKDN) 合规要求？'
                ],
                'answer' => [
                    'en' => 'We assist cross-border manufacturing and energy clients in mapping supply chain tiers, calculating local content scores under Ministry of Industry guidelines, and qualifying for state procurement incentives.',
                    'id' => 'Kami mendampingi klien manufaktur dan energi dalam memetakan rantai pasok lokal, menghitung sertifikasi TKDN sesuai regulasi Kementerian Perindustrian, dan memastikan kualifikasi proyek pengadaan strategis.',
                    'cn' => '我们协助制造业与新能源客户梳理本土供应链层级，依照印尼工业部规范精准计算本地化增值率，并获得参与国家重点战略采购及财税激励项目的资格。'
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Research Papers',
                'question' => [
                    'en' => 'How do I access the full 58-Page China Industrial Blueprint?',
                    'id' => 'Bagaimana cara mengakses Cetak Biru Relokasi Industri 58 Halaman secara penuh?',
                    'cn' => '如何获取完整的58页中国制造业产业转移战略蓝图？'
                ],
                'answer' => [
                    'en' => 'Readers can unlock instant digital access via our secure checkout gateway by clicking the Unlock Access button on the research paper preview, or request corporate multi-seat licensing with an official Indonesian Faktur Pajak.',
                    'id' => 'Pembaca dapat membuka akses digital instan melalui tombol Buka Akses / Bayar pada artikel riset, atau memesan lisensi korporat multi-user dengan Faktur Pajak resmi melalui meja konsultasi 8vice.',
                    'cn' => '读者可通过研报预览页面的“解锁访问”按钮在线获取即时数字版阅读权限，亦可通过 8vice 战略咨询窗口申请企业多席位授权及印尼官方税务发票 (Faktur Pajak)。'
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
