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
                ],
                'default_meta_description' => [
                    'en' => '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.',
                    'id' => '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.',
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
                ],
                'meta_description' => [
                    'en' => '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.',
                    'id' => '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia market entry, business consulting Jakarta, Chinese business Indonesia, investment advisory Indonesia, business intelligence',
                    'id' => 'masuk pasar Indonesia, konsultasi bisnis Jakarta, investasi Indonesia, izin usaha, penasihat bisnis strategis',
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
                ],
                'meta_description' => [
                    'en' => 'Learn about 8vice\'s leadership, mission, and experienced network of advisory partners bridging businesses and strategic goals across Indonesia.',
                    'id' => 'Pelajari visi, misi, dan tim penasihat senior 8vice yang berpengalaman lebih dari 15 tahun dalam memajukan dan mempercepat pertumbuhan bisnis di Indonesia.',
                ],
                'meta_keywords' => [
                    'en' => 'About 8vice, 8vice leadership, Indonesian business advisors, Helda Chandra, strategic consulting Indonesia',
                    'id' => 'Tentang 8vice, pimpinan 8vice, penasihat bisnis Indonesia, konsultan manajemen, eksekusi bisnis',
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
                ],
                'meta_description' => [
                    'en' => 'Explore 8vice\'s three core capabilities: Market Intelligence, Strategic Consultancy, and Tailored Corporate Training to accelerate growth in Indonesia.',
                    'id' => 'Jelajahi 3 layanan utama 8vice: Riset Intelijen Pasar, Konsultasi Masuk Pasar & Restrukturisasi, serta Pelatihan Perusahaan berstandar tinggi.',
                ],
                'meta_keywords' => [
                    'en' => 'business services Indonesia, advisory capabilities, market research, corporate training, corporate advisory',
                    'id' => 'layanan bisnis Indonesia, kemampuan konsultasi, riset pasar, pelatihan korporat, penasihat perusahaan',
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
                ],
                'meta_description' => [
                    'en' => 'Bespoke advisory built around your critical decisions. We assemble dedicated senior teams to guide market entry, joint ventures, and operational turnarounds in Indonesia.',
                    'id' => 'Konsultasi bisnis terdedikasi untuk keputusan penting Anda. Pendampingan menyeluruh dari strategi masuk pasar, joint venture, hingga eksekusi operasional.',
                ],
                'meta_keywords' => [
                    'en' => 'management consulting Indonesia, market entry advisory, turnaround consulting, business expansion Jakarta',
                    'id' => 'konsultan manajemen Indonesia, strategi masuk pasar, ekspansi bisnis, joint venture Indonesia',
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
                ],
                'meta_description' => [
                    'en' => 'Empower your local and international workforce with specialized corporate training programs, cross-cultural workshops, and on-demand e-learning subscriptions.',
                    'id' => 'Tingkatkan kompetensi dan pemahaman budaya tim Anda melalui workshop interaktif, pelatihan kepemimpinan, dan modul e-learning berkelanjutan.',
                ],
                'meta_keywords' => [
                    'en' => 'corporate training Jakarta, business workshop Indonesia, cross-cultural training, executive education',
                    'id' => 'pelatihan korporat Jakarta, workshop bisnis, pelatihan lintas budaya, edukasi eksekutif',
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
                ],
                'meta_description' => [
                    'en' => 'Make de-risked investment decisions with verifiable on-the-ground market research, competitor benchmarking, and macroeconomic intelligence in Indonesia.',
                    'id' => 'Ambil keputusan investasi dengan kepastian tinggi lewat riset pasar faktual, analisis kompetitor, pemetaan regulasi, dan data makroekonomi Indonesia.',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia market research, competitor intelligence, regulatory analysis, industry data Indonesia',
                    'id' => 'riset pasar Indonesia, intelijen kompetitor, analisis regulasi, data industri Indonesia',
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
                ],
                'meta_description' => [
                    'en' => 'Read unvarnished perspectives, deep-dive regulatory analysis, economic forecasts, and practical field notes from 8vice operators on the ground.',
                    'id' => 'Temukan analisis mendalam tentang regulasi bisnis, proyeksi ekonomi, tinjauan buku, dan panduan praktis dari para praktisi 8vice.',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia business articles, economic insights, regulatory updates, business field notes, market trends',
                    'id' => 'artikel bisnis Indonesia, wawasan ekonomi, update regulasi, catatan lapangan, tren pasar',
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
                ],
                'meta_description' => [
                    'en' => 'Discover leading global enterprises and high-growth brands that trust 8vice to navigate and scale their business ventures in Indonesia.',
                    'id' => 'Lihat perusahaan multinasional dan brand terkemuka yang mempercayakan langkah strategis mereka di pasar Indonesia kepada 8vice.',
                ],
                'meta_keywords' => [
                    'en' => '8vice clients, enterprise partners, case portfolio, business track record Indonesia',
                    'id' => 'klien 8vice, mitra perusahaan, portofolio bisnis, rekam jejak konsultan',
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
                ],
                'meta_description' => [
                    'en' => 'Explore real-world case studies showcasing how 8vice solves intricate cross-border challenges, structuring, compliance, and growth bottlenecks.',
                    'id' => 'Pelajari studi kasus nyata bagaimana 8vice membantu mengatasi tantangan perizinan, restrukturisasi rantai pasok, dan percepatan penetrasi pasar.',
                ],
                'meta_keywords' => [
                    'en' => 'Indonesia business case studies, market entry success stories, client results, consulting case studies',
                    'id' => 'studi kasus bisnis Indonesia, kisah sukses masuk pasar, hasil konsultasi, portofolio proyek',
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
                ],
                'meta_description' => [
                    'en' => 'Committed to long-term sustainable impact. Learn how 8vice champions ethical governance, local community empowerment, and environmental responsibility.',
                    'id' => 'Komitmen 8vice terhadap keberlanjutan bisnis, pemberdayaan tenaga kerja lokal, tata kelola etis, dan dampak positif bagi masyarakat luas.',
                ],
                'meta_keywords' => [
                    'en' => 'social impact Indonesia, ESG consulting, sustainable business growth, community empowerment',
                    'id' => 'dampak sosial Indonesia, konsultasi ESG, pertumbuhan bisnis berkelanjutan, pemberdayaan komunitas',
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
                ],
                'meta_description' => [
                    'en' => 'Join a multidisciplinary network of seasoned strategists, analysts, and operators solving high-stakes cross-border challenges at 8vice.',
                    'id' => 'Bekerja dan berkembang bersama tim konsultan elit 8vice dalam menangani proyek strategis skala internasional di Indonesia.',
                ],
                'meta_keywords' => [
                    'en' => '8vice careers, consulting jobs Jakarta, business analyst hiring, strategy advisor roles',
                    'id' => 'karir 8vice, lowongan konsultan Jakarta, analis bisnis, pekerjaan manajemen strategi',
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
                ],
                'meta_description' => [
                    'en' => 'Reach out to our advisory team for a candid, confidential assessment of your expansion or turnaround plans in Indonesia. We respond promptly.',
                    'id' => 'Hubungi penasihat kami untuk evaluasi langsung mengenai rencana ekspansi, perizinan, dan konsultasi operasional Anda di Indonesia.',
                ],
                'meta_keywords' => [
                    'en' => 'contact 8vice, schedule consultation, Jakarta business advisors, Indonesia advisory inquiry',
                    'id' => 'hubungi 8vice, jadwal konsultasi, konsultan bisnis Jakarta, inquiry penasihat Indonesia',
                ],
                'og_image' => 'images/consultancy_hero.webp',
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
