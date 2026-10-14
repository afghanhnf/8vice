<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Insight;
use App\Models\CaseStudy;
use App\Models\Service;
use App\Models\Course;
use App\Helpers\SeedData;

class SearchController extends Controller
{
    /**
     * Safely extract translated text if stored as JSON / array, or return plain string.
     */
    private function extractText($value, string $lang = 'en'): string
    {
        if (is_array($value)) {
            return (string) ($value[$lang] ?? $value['en'] ?? reset($value) ?? '');
        }
        if (is_string($value)) {
            $trimmed = trim($value);
            if (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) {
                $decoded = json_decode($trimmed, true);
                if (is_array($decoded)) {
                    return (string) ($decoded[$lang] ?? $decoded['en'] ?? reset($decoded) ?? $value);
                }
            }
            return $value;
        }
        return '';
    }

    /**
     * Clean and truncate text for search snippets.
     */
    private function cleanSnippet(?string $html, int $length = 135): string
    {
        $text = strip_tags($html ?? '');
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $text = preg_replace('/\s+/', ' ', $text);
        $text = trim($text);
        if (mb_strlen($text) > $length) {
            return mb_substr($text, 0, $length) . '...';
        }
        return $text;
    }

    /**
     * Return curated service recommendations.
     */
    private function getRecommendedServices(string $lang = 'en'): array
    {
        $isId = $lang === 'id';

        return [
            [
                'type' => $isId ? 'Layanan Rekomendasi' : 'Recommended Service',
                'title' => $isId ? 'Market Intelligence & Riset Pasar' : 'Market Intelligence & Feasibility',
                'desc' => $isId
                    ? 'Pemetaan lanskap industri, analisis regulasi, komparasi kompetitor, dan sentimen konsumen Indonesia.'
                    : 'In-depth market sizing, regulatory landscapes, competitor benchmarking, and consumer sentiment across Indonesia.',
                'url' => '/market-intelligence',
                'badge' => $isId ? 'Riset & Data' : 'Intelligence',
            ],
            [
                'type' => $isId ? 'Layanan Rekomendasi' : 'Recommended Service',
                'title' => $isId ? 'Konsultasi Strategis & Penetrasi Pasar' : 'Strategic Consultancy & Market Entry',
                'desc' => $isId
                    ? 'Navigasi perizinan OSS, kepatuhan TKDN, pembentukan PT PMA, dan integrasi mitra lokal strategis.'
                    : 'End-to-end regulatory advisory, OSS licensing, TKDN compliance, and local operating partner matching.',
                'url' => '/consultancy',
                'badge' => $isId ? 'Regulasi & Izin' : 'Consultancy',
            ],
            [
                'type' => $isId ? 'Layanan Rekomendasi' : 'Recommended Service',
                'title' => $isId ? 'Pelatihan Eksekutif & Kapabilitas Tim' : 'Executive & Workforce Training',
                'desc' => $isId
                    ? 'Kurikulum praktis strategi pemasaran digital, kepemimpinan lintas budaya, dan kepatuhan hukum Indonesia.'
                    : 'High-impact curriculum covering digital marketing, cross-cultural team management, and compliance.',
                'url' => '/training',
                'badge' => $isId ? 'Pelatihan' : 'Capability',
            ],
            [
                'type' => $isId ? 'Layanan Rekomendasi' : 'Recommended Service',
                'title' => $isId ? 'Semua Solusi & Praktik Layanan 8vice' : 'Practice Overview & Full Solutions',
                'desc' => $isId
                    ? 'Katalog menyeluruh solusi konsultasi terarah untuk ekspansi bisnis lintas batas di Indonesia.'
                    : 'Comprehensive cross-border advisory practices decoded for foreign enterprises entering Indonesia.',
                'url' => '/services',
                'badge' => $isId ? 'Solusi Lengkap' : 'Overview',
            ],
        ];
    }

    public function index(Request $request)
    {
        $query = trim($request->input('q', ''));
        $lang = $request->input('lang', app()->getLocale() ?: 'en');
        $isId = $lang === 'id';

        if (mb_strlen($query) < 2) {
            return response()->json([
                'query' => $query,
                'count' => 0,
                'results' => [],
                'recommended_services' => $this->getRecommendedServices($lang),
            ]);
        }

        $lowerQ = mb_strtolower($query);
        $results = [];

        // -------------------------------------------------------------
        // 1. Key Pages (About, Career, Client, Contact, Social Impact, Services)
        // -------------------------------------------------------------
        $staticPages = [
            [
                'title' => $isId ? 'Layanan: Riset Pasar & Intelijen Industri' : 'Service: Market Intelligence & Research',
                'desc' => $isId
                    ? 'Studi kelayakan mendalam, analisis rantai pasok, dan pemetaan ekosistem bisnis Indonesia.'
                    : 'Market sizing, regulatory assessments, competitor intelligence, and consumer dynamics in Indonesia.',
                'url' => '/market-intelligence',
                'type' => $isId ? 'Layanan' : 'Service',
                'keywords' => ['market', 'intelligence', 'pasar', 'riset', 'research', 'survey', 'survei', 'assessment', 'feasibility', 'kelayakan', 'data', 'benchmark', 'e-commerce', 'ecommerce', 'tokopedia', 'shopee', 'tiktok shop'],
            ],
            [
                'title' => $isId ? 'Layanan: Konsultasi Regulasi & Penetrasi Pasar' : 'Service: Strategic Consultancy & Market Entry',
                'desc' => $isId
                    ? 'Struktur korporasi, perizinan OSS, pemenuhan TKDN, dan strategi operasional lokal.'
                    : 'End-to-end advisory for market entry, OSS licensing, regulatory compliance, TKDN, and partner matching.',
                'url' => '/consultancy',
                'type' => $isId ? 'Layanan' : 'Service',
                'keywords' => ['consultancy', 'consulting', 'consult', 'konsultasi', 'konsultan', 'advisory', 'market entry', 'penetrasi pasar', 'ekspansi', 'licensing', 'perizinan', 'izin', 'oss', 'kbli', 'regulatory', 'hukum', 'legal', 'compliance', 'kepatuhan', 'tkdn', 'fintech', 'pma', 'pt pma'],
            ],
            [
                'title' => $isId ? 'Layanan: Pelatihan Bisnis & Manajemen Lokal' : 'Service: Executive & Workforce Training',
                'desc' => $isId
                    ? 'Program workshop dan pelatihan intensif untuk tim ekspansi dan tenaga kerja lokal.'
                    : 'Specialized corporate learning modules for localized digital marketing, licensing, and leadership.',
                'url' => '/training',
                'type' => $isId ? 'Layanan' : 'Service',
                'keywords' => ['training', 'train', 'pelatihan', 'kursus', 'course', 'courses', 'workshop', 'capability', 'kapabilitas', 'belajar', 'curriculum', 'kurikulum', 'academy'],
            ],
            [
                'title' => $isId ? 'Semua Praktik Layanan 8vice' : 'Our Practice Overview — All Services',
                'desc' => $isId
                    ? 'Panduan menyeluruh solusi 8vice mulai dari intelijen pasar hingga implementasi operasional.'
                    : 'Comprehensive advisory and operational solutions for cross-border expansion.',
                'url' => '/services',
                'type' => $isId ? 'Layanan' : 'Service',
                'keywords' => ['service', 'services', 'layanan', 'solusi', 'solution', 'solutions', 'praktik', 'practice', 'practices', 'offerings'],
            ],
            [
                'title' => $isId ? 'Tentang Kami — Visi, Misi & Tim Kepemimpinan' : 'About Us — Leadership, Vision & Approach',
                'desc' => $isId
                    ? 'Profil kepemimpinan senior, dewan penasihat lintas batas, visi, dan metodologi 8vice.'
                    : 'Who we are: senior leadership, advisory board, vision, mission, and how 8vice solves complex market entry friction.',
                'url' => '/about',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['about', 'tentang', 'vision', 'visi', 'mission', 'misi', 'leadership', 'leader', 'pemimpin', 'team', 'tim', 'founder', 'advisory', 'penasihat', 'profile', 'profil', 'approach', 'solve', 'history', 'sejarah'],
            ],
            [
                'title' => $isId ? 'Karier di 8vice — Peluang Kerja & Magang' : 'Careers at 8vice — Join Our Team',
                'desc' => $isId
                    ? 'Lowongan kerja konsultan, analis riset, magang, dan pengembangan karier profesional di Jakarta.'
                    : 'Explore open consulting roles, market research associate positions, and internships in Jakarta.',
                'url' => '/career',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['career', 'careers', 'karir', 'karier', 'job', 'jobs', 'pekerjaan', 'lowongan', 'hiring', 'recruitment', 'rekrutmen', 'join', 'intern', 'internship', 'magang', 'apply', 'lamar', 'cv', 'resume', 'talent'],
            ],
            [
                'title' => $isId ? 'Klien & Portofolio Merek Mitra' : 'Our Clients & Brand Portfolio',
                'desc' => $isId
                    ? 'Portofolio mitra ternama: Alipay, Didi, DingTalk, Coolita, Skyworth, dan puluhan pemimpin industri.'
                    : 'Trusted by leading global technology innovators, payment gateways, and enterprises expanding into Indonesia.',
                'url' => '/client',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['client', 'clients', 'klien', 'portfolio', 'portofolio', 'brand', 'brands', 'merek', 'alipay', 'didi', 'dingtalk', 'coolita', 'skyworth', 'partner', 'partners', 'mitra', 'testimoni'],
            ],
            [
                'title' => $isId ? 'Hubungi Kami — Konsultasi Bisnis Gratis' : 'Contact Us — Book a Free Consultation',
                'desc' => $isId
                    ? 'Jadwalkan sesi diskusi 45 menit bersama tim konsultan kami di SOHO Pancoran, Jakarta Selatan.'
                    : 'Book a candid 45-minute discussion or reach our Jakarta office via email or WhatsApp.',
                'url' => '/contact',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['contact', 'kontak', 'hubungi', 'konsultasi', 'consultation', 'book', 'jadwal', 'inquiry', 'reach', 'email', 'whatsapp', 'wa', 'phone', 'telepon', 'address', 'alamat', 'office', 'kantor', 'soho', 'pancoran', 'call'],
            ],
            [
                'title' => $isId ? 'Dampak Sosial & Keberlanjutan' : 'Social Impact & Sustainable Growth',
                'desc' => $isId
                    ? 'Komitmen 8vice dalam memastikan investasi bisnis memberikan nilai nyata bagi masyarakat lokal.'
                    : 'How 8vice aligns foreign enterprise expansion with ESG standards, local employment, and community impact.',
                'url' => '/social-impact',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['social', 'impact', 'sosial', 'dampak', 'sustainability', 'keberlanjutan', 'esg', 'csr', 'community', 'komunitas', 'green', 'lingkungan'],
            ],
        ];

        foreach ($staticPages as $page) {
            $matched = false;
            if (str_contains(mb_strtolower($page['title']), $lowerQ) || str_contains(mb_strtolower($page['desc']), $lowerQ)) {
                $matched = true;
            } else {
                foreach ($page['keywords'] as $kw) {
                    if (str_contains($kw, $lowerQ) || str_contains($lowerQ, $kw)) {
                        $matched = true;
                        break;
                    }
                }
            }

            if ($matched) {
                $results[] = [
                    'type' => $page['type'],
                    'title' => $page['title'],
                    'desc' => $page['desc'],
                    'url' => $page['url'],
                    'score' => str_contains(mb_strtolower($page['title']), $lowerQ) ? 30 : 20,
                ];
            }
        }

        // -------------------------------------------------------------
        // 2. Training Courses
        // -------------------------------------------------------------
        $courses = Course::all();
        if ($courses->isEmpty()) {
            $courses = collect(SeedData::getCourses());
        }

        foreach ($courses as $crs) {
            $title = $this->extractText($crs->title ?? '', $lang);
            $desc = $this->extractText($crs->desc ?? '', $lang);
            $cat = (string) ($crs->cat ?? '');

            if (
                str_contains(mb_strtolower($title), $lowerQ) ||
                str_contains(mb_strtolower($desc), $lowerQ) ||
                str_contains(mb_strtolower($cat), $lowerQ)
            ) {
                $results[] = [
                    'type' => $isId ? 'Pelatihan' : 'Training Course',
                    'title' => ($cat ? "[$cat] " : "") . $title,
                    'desc' => $this->cleanSnippet($desc),
                    'url' => '/training',
                    'score' => str_contains(mb_strtolower($title), $lowerQ) ? 28 : 18,
                ];
            }
        }

        // -------------------------------------------------------------
        // 3. Database Services
        // -------------------------------------------------------------
        $services = Service::all();
        if ($services->isEmpty()) {
            $services = collect(SeedData::getServices());
        }

        foreach ($services as $srv) {
            $title = $this->extractText($srv->title ?? '', $lang);
            $desc = $this->extractText($srv->description ?? '', $lang);

            if (str_contains(mb_strtolower($title), $lowerQ) || str_contains(mb_strtolower($desc), $lowerQ)) {
                $results[] = [
                    'type' => $isId ? 'Layanan' : 'Service',
                    'title' => $title ?: ($isId ? 'Layanan 8vice' : '8vice Service'),
                    'desc' => $this->cleanSnippet($desc),
                    'url' => '/services',
                    'score' => str_contains(mb_strtolower($title), $lowerQ) ? 27 : 17,
                ];
            }
        }

        // -------------------------------------------------------------
        // 4. Articles / Insights
        // -------------------------------------------------------------
        $insights = Insight::where('status', 'Publish')
            ->orWhere('status', 'published')
            ->orWhereNull('status')
            ->get();

        if ($insights->isEmpty()) {
            $insights = collect(SeedData::getInsights());
        }

        foreach ($insights as $insight) {
            $title = $this->extractText($insight->t ?? '', $lang);
            $body = $this->extractText($insight->body ?? '', $lang);
            $excerpt = $this->extractText($insight->excerpt ?? '', $lang);
            $cat = (string) ($insight->cat ?? '');
            $slug = (string) ($insight->slug ?: $insight->id);

            $matched = false;
            $score = 0;

            if (str_contains(mb_strtolower($title), $lowerQ)) {
                $matched = true;
                $score = 35;
            } elseif (str_contains(mb_strtolower($cat), $lowerQ) || str_contains(mb_strtolower($slug), $lowerQ)) {
                $matched = true;
                $score = 25;
            } elseif (str_contains(mb_strtolower($excerpt), $lowerQ)) {
                $matched = true;
                $score = 22;
            } elseif (str_contains(mb_strtolower($body), $lowerQ)) {
                $matched = true;
                $score = 15;
            }

            if ($matched) {
                $results[] = [
                    'type' => $isId ? 'Artikel' : 'Article',
                    'title' => $title ?: 'Insight',
                    'desc' => $this->cleanSnippet($excerpt ?: $body),
                    'url' => '/article/' . $slug,
                    'score' => $score,
                ];
            }
        }

        // -------------------------------------------------------------
        // 5. Case Studies
        // -------------------------------------------------------------
        $cases = CaseStudy::all();
        if ($cases->isEmpty()) {
            $cases = collect(SeedData::getCaseStudies());
        }

        foreach ($cases as $case) {
            $headline = $this->extractText($case->h ?? '', $lang);
            $lead = $this->extractText($case->p ?? '', $lang);
            $body = $this->extractText($case->body ?? '', $lang);
            $tag = $this->extractText($case->tag ?? '', $lang);
            $slug = (string) ($case->slug ?: $case->id);

            $matched = false;
            $score = 0;

            if (str_contains(mb_strtolower($headline), $lowerQ)) {
                $matched = true;
                $score = 35;
            } elseif (str_contains(mb_strtolower($tag), $lowerQ) || str_contains(mb_strtolower($slug), $lowerQ)) {
                $matched = true;
                $score = 25;
            } elseif (str_contains(mb_strtolower($lead), $lowerQ)) {
                $matched = true;
                $score = 22;
            } elseif (str_contains(mb_strtolower($body), $lowerQ)) {
                $matched = true;
                $score = 15;
            }

            if ($matched) {
                $results[] = [
                    'type' => 'Case Study',
                    'title' => $headline ?: 'Case Study',
                    'desc' => $this->cleanSnippet($lead ?: $body),
                    'url' => '/case-study/' . $slug,
                    'score' => $score,
                ];
            }
        }

        // -------------------------------------------------------------
        // Deduplicate & Sort by Score
        // -------------------------------------------------------------
        usort($results, fn ($a, $b) => ($b['score'] ?? 0) <=> ($a['score'] ?? 0));

        $uniqueResults = [];
        $seenKeys = [];

        foreach ($results as $item) {
            $key = $item['url'] . '::' . $item['title'];
            if (!isset($seenKeys[$key])) {
                $seenKeys[$key] = true;
                unset($item['score']);
                $uniqueResults[] = $item;
            }
        }

        // Limit results to top 12
        $topResults = array_slice($uniqueResults, 0, 12);
        $recommendedServices = $this->getRecommendedServices($lang);

        return response()->json([
            'query' => $query,
            'count' => count($topResults),
            'results' => $topResults,
            'recommended_services' => $recommendedServices,
        ]);
    }
}
