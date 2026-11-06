<?php

namespace Database\Seeders;

use App\Models\PageSeo;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class PageSeoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Update Global SiteSetting SEO Defaults if needed
        $setting = SiteSetting::first();
        if ($setting) {
            $setting->update([
                'default_meta_title' => [
                    'en' => '8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises',
                    'id' => '8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia',
                    'cn' => '8vice | 印尼与中国双边跨境战略商业咨询门户',
                ],
                'default_meta_description' => [
                    'en' => '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.',
                    'id' => '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.',
                    'cn' => '8vice 汇聚深耕本土高管团队，赋能中国企业稳健进军印尼市场，提供战略准入、合规架构与实质落地增长服务。',
                ],
                'default_og_image' => 'images/og-default.webp',
                'site_keywords' => 'Indonesia market entry, business consulting Jakarta, Chinese business Indonesia, investment advisory Indonesia, business intelligence',
                'twitter_handle' => '@8vice',
            ]);
        }

        // 2. Pre-seed All 12 Distinct Pages
        $pages = [
            [
                'page_code' => 'home',
                'page_name' => 'Home Page',
                'meta_title' => [
                    'en' => '8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises',
                    'id' => '8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia',
                    'cn' => '8vice | 通往印尼与中国的战略商业门户',
                ],
                'meta_description' => [
                    'en' => '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.',
                    'id' => '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.',
                    'cn' => '8vice 是一家连接印尼与中国企业的高端战略咨询公司，协助企业深入开拓新市场、挖掘高价值机遇并制定可持续跨境增长战略。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia market entry, business consulting Jakarta, Chinese business Indonesia, investment advisory Indonesia, business intelligence',
                    'id' => 'masuk pasar Indonesia, konsultasi bisnis Jakarta, investasi Indonesia, izin usaha, penasihat bisnis strategis',
                    'cn' => '印尼市场准入, 雅加达商业咨询, 中国企业出海印尼, 印尼投资战略, 跨境战略门户',
                ],
                'og_image' => 'images/featured_case_cover.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'about',
                'page_name' => 'About Us',
                'meta_title' => [
                    'en' => 'About 8vice | Bridging Global Ambition with Ground-Level Indonesian Execution',
                    'id' => 'Tentang 8vice | Menjembatani Ambisi Bisnis Global dengan Eksekusi Lapangan di Indonesia',
                    'cn' => '关于 8vice | 架起商业雄心通往本土验证落地的战略桥梁',
                ],
                'meta_description' => [
                    'en' => 'Learn about 8vice\'s leadership, mission, and experienced network of advisory partners bridging businesses and strategic goals across Indonesia.',
                    'id' => 'Pelajari visi, misi, dan tim penasihat senior 8vice yang berpengalaman lebih dari 15 tahun dalam memajukan dan mempercepat pertumbuhan bisnis di Indonesia.',
                    'cn' => '深入了解 8vice 的高管领导团队、战略愿景以及深耕中印尼两地二十余年的深厚政商网络与实战经验。',
                ],
                'meta_keywords' => [
                    'en' => 'About 8vice, 8vice leadership, Indonesian business advisors, Helda Chandra, strategic consulting Indonesia',
                    'id' => 'Tentang 8vice, pimpinan 8vice, penasihat bisnis Indonesia, konsultan manajemen, eksekusi bisnis',
                    'cn' => '关于8vice, 8vice合伙人团队, 印尼商业顾问, Helda Chandra, 跨境出海专家',
                ],
                'og_image' => 'images/leader_speech_abstract.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'services',
                'page_name' => 'Our Services',
                'meta_title' => [
                    'en' => 'Our Services | Market Intelligence, Consultancy & Corporate Training | 8vice',
                    'id' => 'Layanan Kami | Intelijen Pasar, Konsultasi Strategis & Pelatihan | 8vice',
                    'cn' => '核心服务 | 战略咨询、市场准入、商业配对与政府事务 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Explore 8vice\'s three core capabilities: Market Intelligence, Strategic Consultancy, and Tailored Corporate Training to accelerate growth in Indonesia.',
                    'id' => 'Jelajahi 3 layanan utama 8vice: Riset Intelijen Pasar, Konsultasi Masuk Pasar & Restrukturisasi, serta Pelatihan Perusahaan berstandar tinggi.',
                    'cn' => '探索 8vice 六大核心服务支柱：战略咨询、政府事务协调、商业配对、品牌公关与投资促进，全面赋能跨国业务增长。',
                ],
                'meta_keywords' => [
                    'en' => 'business services Indonesia, advisory capabilities, market research, corporate training, corporate advisory',
                    'id' => 'layanan bisnis Indonesia, kemampuan konsultasi, riset pasar, pelatihan korporat, penasihat perusahaan',
                    'cn' => '印尼商业咨询服务, 跨境服务能力, 市场情报研究, 企业高管培训, 战略顾问',
                ],
                'og_image' => 'images/project_analysis.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'consultancy',
                'page_name' => 'Consultancy',
                'meta_title' => [
                    'en' => 'Strategic Consultancy | Market Entry, Expansion & Turnaround | 8vice',
                    'id' => 'Konsultasi Strategis | Masuk Pasar, Ekspansi & Transformasi Bisnis | 8vice',
                    'cn' => '战略咨询 | 市场准入、合规落地与业务重组 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Bespoke advisory built around your critical decisions. We assemble dedicated senior teams to guide market entry, joint ventures, and operational turnarounds in Indonesia.',
                    'id' => 'Konsultasi bisnis terdedikasi untuk keputusan penting Anda. Pendampingan menyeluruh dari strategi masuk pasar, joint venture, hingga eksekusi operasional.',
                    'cn' => '围绕企业重大战略决策提供定制化咨询服务。组建资深专家团队指导印尼市场准入、合资谈判与业务落地。',
                ],
                'meta_keywords' => [
                    'en' => 'management consulting Indonesia, market entry advisory, turnaround consulting, business expansion Jakarta',
                    'id' => 'konsultan manajemen Indonesia, strategi masuk pasar, ekspansi bisnis, joint venture Indonesia',
                    'cn' => '印尼管理咨询, 市场准入顾问, 企业重组咨询, 雅加达业务拓展',
                ],
                'og_image' => 'images/consultancy_hero.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'training',
                'page_name' => 'Corporate Training',
                'meta_title' => [
                    'en' => 'Corporate Training & Capability Building Programs | 8vice',
                    'id' => 'Program Pelatihan Perusahaan & Peningkatan Kapasitas Tim | 8vice',
                    'cn' => '企业高管培训与跨文化能力提升项目 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Empower your local and international workforce with specialized corporate training programs, cross-cultural workshops, and on-demand e-learning subscriptions.',
                    'id' => 'Tingkatkan kompetensi dan pemahaman budaya tim Anda melalui workshop interaktif, pelatihan kepemimpinan, dan modul e-learning berkelanjutan.',
                    'cn' => '通过定制化企业培训、跨文化工作坊及实战出海课程，全面赋能本地及跨国团队的商业协同与运营能力。',
                ],
                'meta_keywords' => [
                    'en' => 'corporate training Jakarta, business workshop Indonesia, cross-cultural training, executive education',
                    'id' => 'pelatihan korporat Jakarta, workshop bisnis, pelatihan lintas budaya, edukasi eksekutif',
                    'cn' => '雅加达企业培训, 商业实操工作坊, 跨文化培训, 高管总裁班',
                ],
                'og_image' => 'images/training_hero.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'market_intelligence',
                'page_name' => 'Market Intelligence',
                'meta_title' => [
                    'en' => 'Market Intelligence & Field Data Analytics Indonesia | 8vice',
                    'id' => 'Intelijen Pasar & Analisis Data Lapangan Indonesia | 8vice',
                    'cn' => '市场情报研究与本土数据分析 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Make de-risked investment decisions with verifiable on-the-ground market research, competitor benchmarking, and macroeconomic intelligence in Indonesia.',
                    'id' => 'Ambil keputusan investasi dengan kepastian tinggi lewat riset pasar faktual, analisis kompetitor, pemetaan regulasi, dan data makroekonomi Indonesia.',
                    'cn' => '通过第一手可验证的实地市场调研、竞品横向评测与宏观经济情报，做出严谨把控风险的投资与出海决策。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia market research, competitor intelligence, regulatory analysis, industry data Indonesia',
                    'id' => 'riset pasar Indonesia, intelijen kompetitor, analisis regulasi, data industri Indonesia',
                    'cn' => '印尼市场调研, 竞品分析, 政策监管分析, 印尼行业大数据',
                ],
                'og_image' => 'images/market_intelligence_hero.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'article',
                'page_name' => 'Articles & Insights',
                'meta_title' => [
                    'en' => 'Insights & Field Notes | Macro Analysis, Regulations & Business Trends | 8vice',
                    'id' => 'Wawasan & Catatan Lapangan | Analisis Makro, Regulasi & Tren Bisnis | 8vice',
                    'cn' => '商业洞察与研究报告 | 宏观经济分析、政策监管与产业趋势 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Read unvarnished perspectives, deep-dive regulatory analysis, economic forecasts, and practical field notes from 8vice operators on the ground.',
                    'id' => 'Temukan analisis mendalam tentang regulasi bisnis, proyeksi ekonomi, tinjauan buku, dan panduan praktis dari para praktisi 8vice.',
                    'cn' => '阅读 8vice 咨询团队在印尼一线撰写的权威政策解读、宏观经济研判、行业专题报告与实战操作指南。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia business articles, economic insights, regulatory updates, business field notes, market trends',
                    'id' => 'artikel bisnis Indonesia, wawasan ekonomi, update regulasi, catatan lapangan, tren pasar',
                    'cn' => '印尼商业文章, 经济洞察, 政策法规动态, 出海实战笔记, 行业趋势',
                ],
                'og_image' => 'images/challenges_insights.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'client',
                'page_name' => 'Our Clients',
                'meta_title' => [
                    'en' => 'Our Clients & Partners | Trusted by Global Industry Leaders | 8vice',
                    'id' => 'Klien & Mitra Kami | Dipercaya oleh Pemimpin Industri Global | 8vice',
                    'cn' => '客户与合作伙伴 | 备受跨国行业领军企业的信赖 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Discover leading global enterprises and high-growth brands that trust 8vice to navigate and scale their business ventures in Indonesia.',
                    'id' => 'Lihat perusahaan multinasional dan brand terkemuka yang mempercayakan langkah strategis mereka di pasar Indonesia kepada 8vice.',
                    'cn' => '了解信赖 8vice 在印尼布局并推动商业扩张的全球知名企业与高增长跨国品牌合作伙伴。',
                ],
                'meta_keywords' => [
                    'en' => '8vice clients, enterprise partners, case portfolio, business track record Indonesia',
                    'id' => 'klien 8vice, mitra perusahaan, portofolio bisnis, rekam jejak konsultan',
                    'cn' => '8vice客户, 企业合作伙伴, 项目案例, 印尼商业实绩',
                ],
                'og_image' => 'images/video_manifesto_cover.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'case_study',
                'page_name' => 'Case Studies',
                'meta_title' => [
                    'en' => 'Case Studies & Success Stories | Real Impact in Indonesian Markets | 8vice',
                    'id' => 'Studi Kasus & Kisah Sukses | Dampak Nyata di Pasar Indonesia | 8vice',
                    'cn' => '标杆案例与成功故事 | 在印尼双边市场创造的真实影响力 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Explore real-world case studies showcasing how 8vice solves intricate cross-border challenges, structuring, compliance, and growth bottlenecks.',
                    'id' => 'Pelajari studi kasus nyata bagaimana 8vice membantu mengatasi tantangan perizinan, restrukturisasi rantai pasok, dan percepatan penetrasi pasar.',
                    'cn' => '探索 8vice 如何协助企业解决复杂的跨境落地难题、牌照合规架构、供应链重构与渠道扩张瓶颈。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia business case studies, market entry success stories, client results, consulting case studies',
                    'id' => 'studi kasus bisnis Indonesia, kisah sukses masuk pasar, hasil konsultasi, portofolio proyek',
                    'cn' => '印尼商业案例研究, 市场准入成功故事, 咨询项目成果, 跨境出海案例',
                ],
                'og_image' => 'images/featured_case_cover.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'social_impact',
                'page_name' => 'Social Impact',
                'meta_title' => [
                    'en' => 'Social Impact & Sustainable Growth Initiatives | 8vice',
                    'id' => 'Dampak Sosial & Inisiatif Pertumbuhan Berkelanjutan | 8vice',
                    'cn' => '社会影响力与可持续发展战略倡议 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Committed to long-term sustainable impact. Learn how 8vice champions ethical governance, local community empowerment, and environmental responsibility.',
                    'id' => 'Komitmen 8vice terhadap keberlanjutan bisnis, pemberdayaan tenaga kerja lokal, tata kelola etis, dan dampak positif bagi masyarakat luas.',
                    'cn' => '8vice 致力于长远的可持续商业影响力，积极倡导负责任的企业治理、本土社区赋能与环境保护责任。',
                ],
                'meta_keywords' => [
                    'en' => 'social impact Indonesia, ESG consulting, sustainable business growth, community empowerment',
                    'id' => 'dampak sosial Indonesia, konsultasi ESG, pertumbuhan bisnis berkelanjutan, pemberdayaan komunitas',
                    'cn' => '印尼社会影响力, ESG战略咨询, 可持续商业增长, 本地社区赋能',
                ],
                'og_image' => 'images/insights/asean_china.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'career',
                'page_name' => 'Careers',
                'meta_title' => [
                    'en' => 'Careers at 8vice | Work Where Your Experience is the Product',
                    'id' => 'Karir di 8vice | Berkembang Bersama Para Praktisi dan Penasihat Senior',
                    'cn' => '加入 8vice | 以实战经验为核心，共筑卓越事业',
                ],
                'meta_description' => [
                    'en' => 'Join a multidisciplinary network of seasoned strategists, analysts, and operators solving high-stakes cross-border challenges at 8vice.',
                    'id' => 'Bekerja dan berkembang bersama tim konsultan elit 8vice dalam menangani proyek strategis skala internasional di Indonesia.',
                    'cn' => '加入 8vice 跨学科精英团队，与拥有深厚落地经验的实战家并肩，应对高规格跨境出海挑战。',
                ],
                'meta_keywords' => [
                    'en' => '8vice careers, consulting jobs Jakarta, business analyst hiring, strategy advisor roles',
                    'id' => 'karir 8vice, lowongan konsultan Jakarta, analis bisnis, pekerjaan manajemen strategi',
                    'cn' => '8vice招聘, 雅加达咨询顾问招聘, 商业分析师, 出海战略顾问职位',
                ],
                'og_image' => 'images/cases/manufacturing.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'contact',
                'page_name' => 'Contact Us',
                'meta_title' => [
                    'en' => 'Contact 8vice | Start a Candid Conversation About Your Indonesia Move',
                    'id' => 'Hubungi 8vice | Konsultasikan Langkah Strategis Bisnis Anda di Indonesia',
                    'cn' => '联系 8vice | 开启关于印尼与中国出海的战略对话',
                ],
                'meta_description' => [
                    'en' => 'Reach out to our advisory team for a candid, confidential assessment of your expansion or turnaround plans in Indonesia. We respond promptly.',
                    'id' => 'Hubungi penasihat kami untuk evaluasi langsung mengenai rencana ekspansi, perizinan, dan konsultasi operasional Anda di Indonesia.',
                    'cn' => '联络 8vice 战略咨询团队，获取针对您出海拓展或投资计划的高管级保密评估。我们将在 1–2 个工作日内及时回复。',
                ],
                'meta_keywords' => [
                    'en' => 'contact 8vice, schedule consultation, Jakarta business advisors, Indonesia advisory inquiry',
                    'id' => 'hubungi 8vice, jadwal konsultasi, konsultan bisnis Jakarta, inquiry penasihat Indonesia',
                    'cn' => '联系8vice, 预约咨询, 雅加达商业顾问, 印尼商业咨询申请',
                ],
                'og_image' => 'images/consultancy_hero.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'gateway',
                'page_name' => 'Indonesia-China Gateway',
                'meta_title' => [
                    'en' => 'Indonesia–China Bilateral Business Gateway | Cross-Border Advisory | 8vice',
                    'id' => 'Gerbang Bisnis Bilateral Indonesia–Tiongkok | Konsultasi Lintas Batas | 8vice',
                    'cn' => '印尼—中国双边商业门户 | 跨境战略咨询与资源对接 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Your strategic two-way corridor connecting Chinese enterprises entering Indonesia and Indonesian businesses exploring partnerships in China.',
                    'id' => 'Koridor strategis dua arah yang menghubungkan perusahaan Tiongkok yang memasuki Indonesia dan korporasi Indonesia yang menjajaki kemitraan di Tiongkok.',
                    'cn' => '连接中资企业进军印尼市场与印尼企业拓展中国供应链及战略合作的双向商业走廊。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia China gateway, cross border advisory, bilateral business corridor, Chinese investment Indonesia',
                    'id' => 'gerbang bisnis Indonesia China, konsultasi lintas batas, investasi Tiongkok Indonesia',
                    'cn' => '印中商业门户, 跨境战略咨询, 双边经贸走廊, 中国对印尼投资',
                ],
                'og_image' => 'images/hero_globe_china_indonesia.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
            [
                'page_code' => 'industries',
                'page_name' => 'Industries & Opportunities',
                'meta_title' => [
                    'en' => 'Priority Industries & Bilateral Sector Opportunities | 8vice',
                    'id' => 'Industri Prioritas & Peluang Sektor Bilateral | 8vice',
                    'cn' => '重点聚焦产业与双边行业合作机遇 | 8vice',
                ],
                'meta_description' => [
                    'en' => 'Explore high-potential bilateral sectors across Trade & Investment, Technology & Innovation, Manufacturing & Industrial Collaboration, Tourism, and Creative Economy.',
                    'id' => 'Jelajahi sektor bilateral berpotensi tinggi mulai dari Perdagangan & Investasi, Teknologi & Inovasi, Manufaktur, Pariwisata, hingga Ekonomi Kreatif.',
                    'cn' => '探索贸易与投资、科技与数字化创新、高端制造与工业园区合作、文旅款待及数字文创经济五大双边高潜力产业。',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia priority industries, manufacturing industrial parks Java, EV supply chain Indonesia, cross border trade sectors',
                    'id' => 'industri prioritas Indonesia, kawasan industri Jawa, rantai pasok EV Indonesia, sektor perdagangan bilateral',
                    'cn' => '印尼重点产业, 爪哇工业园区, 印尼新能源产业链, 双边贸易行业',
                ],
                'og_image' => 'images/industry_manufacturing.webp',
                'og_type' => 'website',
                'robots' => 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            ],
        ];

        foreach ($pages as $page) {
            PageSeo::updateOrCreate(
                ['page_code' => $page['page_code']],
                $page
            );
        }
    }
}
