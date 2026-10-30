<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Insight;
use App\Models\CaseStudy;
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
     * The 6 service detail pages (/services/{slug}); mirrors resources/js/data/services.js.
     */
    private function servicePages(bool $isId): array
    {
        $type = $isId ? 'Layanan' : 'Service';
        return [
            [
                'title' => $isId ? 'Konsultasi Strategis & Ekspansi Pasar' : 'Strategic Advisory & Market Entry',
                'desc' => $isId
                    ? 'Mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun strategi penetrasi pasar yang terukur.'
                    : 'Evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.',
                'url' => '/services/advisory',
                'type' => $type,
                'keywords' => ['market entry', 'ekspansi', 'penetrasi', 'strategy', 'strategi', 'advisory', 'konsultasi', 'consult', 'go-to-market', 'feasibility', 'kelayakan', 'research', 'riset', 'localization', 'lokalisasi', 'roadmap'],
            ],
            [
                'title' => $isId ? 'Hubungan Pemerintah & Pemangku Kepentingan' : 'Government Relations & Stakeholder Engagement',
                'desc' => $isId
                    ? 'Pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur yang tepat.'
                    : 'Stakeholder mapping, institutional engagement, and public-private dialogue through appropriate channels.',
                'url' => '/services/gov-relations',
                'type' => $type,
                'keywords' => ['government', 'pemerintah', 'stakeholder', 'pemangku', 'institution', 'institusi', 'kelembagaan', 'public-private', 'publik', 'association', 'asosiasi', 'regulator', 'liaison'],
            ],
            [
                'title' => $isId ? 'Pencocokan Bisnis & Kemitraan Strategis' : 'Business Matching & Strategic Partnerships',
                'desc' => $isId
                    ? 'Menghubungkan korporasi dengan mitra, distributor, investor, dan pelaku industri yang relevan.'
                    : 'Connecting businesses with relevant partners, distributors, investors, and industry stakeholders.',
                'url' => '/services/business-matching',
                'type' => $type,
                'keywords' => ['partner', 'mitra', 'kemitraan', 'partnership', 'matching', 'matchmaking', 'b2b', 'distributor', 'delegation', 'delegasi', 'trade mission', 'misi dagang', 'mou'],
            ],
            [
                'title' => $isId ? 'Komunikasi Strategis & Positioning Pasar' : 'Strategic Communications & Market Positioning',
                'desc' => $isId
                    ? 'Positioning korporat, narasi merek, dan strategi komunikasi yang memperkuat relevansi pasar.'
                    : 'Corporate positioning, brand narratives, and communications strategies that build market relevance.',
                'url' => '/services/comms',
                'type' => $type,
                'keywords' => ['communication', 'komunikasi', 'brand', 'merek', 'branding', 'positioning', 'marketing', 'pemasaran', 'narrative', 'narasi', 'public relations'],
            ],
            [
                'title' => $isId ? 'Hubungan Media & Komunikasi Krisis' : 'Media Relations & Crisis Communications',
                'desc' => $isId
                    ? 'Kemitraan media, konferensi pers, wawancara eksekutif, dan perlindungan reputasi korporat.'
                    : 'Media partnerships, press conferences, executive interviews, and corporate reputation protection.',
                'url' => '/services/media-relations',
                'type' => $type,
                'keywords' => ['media', 'press', 'pers', 'crisis', 'krisis', 'reputation', 'reputasi', 'interview', 'wawancara', 'press conference', 'konferensi', 'journalist', 'jurnalis', 'issue', 'isu'],
            ],
            [
                'title' => $isId ? 'Fasilitasi Investasi & Pengembangan Bisnis' : 'Investment & Business Development Facilitation',
                'desc' => $isId
                    ? 'Mendukung tahap awal pengembangan bisnis, perumusan tujuan proyek, dan struktur kemitraan komersial.'
                    : 'Supporting early-stage business development, project objectives, and commercial partnership structures.',
                'url' => '/services/investment',
                'type' => $type,
                'keywords' => ['investment', 'investasi', 'investor', 'business development', 'pengembangan bisnis', 'project', 'proyek', 'proposal', 'funding'],
            ],
        ];
    }

    /**
     * Curated recommendations shown when a query has no direct match.
     */
    private function getRecommendedServices(string $lang = 'en'): array
    {
        $isId = $lang === 'id';
        return array_map(fn ($s) => [
            'type' => $s['type'],
            'title' => $s['title'],
            'desc' => $s['desc'],
            'url' => $s['url'],
            'badge' => $isId ? 'Layanan Rekomendasi' : 'Recommended Service',
        ], array_slice($this->servicePages($isId), 0, 4));
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
        // 1. Key Pages (6 services, Gateway, Industries, Insights, About, Contact, ...)
        // -------------------------------------------------------------
        $staticPages = [
            [
                'title' => $isId ? 'Semua Layanan 8 Vice' : 'All Services — 6 Service Pillars',
                'desc' => $isId
                    ? 'Konsultasi strategis dan pengembangan bisnis lintas negara terpadu untuk Indonesia dan Tiongkok.'
                    : 'Integrated strategic advisory and cross-border business development across Indonesia and China.',
                'url' => '/services',
                'type' => $isId ? 'Layanan' : 'Service',
                'keywords' => ['service', 'services', 'layanan', 'solusi', 'solution', 'capability', 'kapabilitas'],
            ],
            [
                'title' => $isId ? 'Gerbang Indonesia–China' : 'Indonesia–China Gateway',
                'desc' => $isId
                    ? 'Dua arah ekspansi: perusahaan Tiongkok masuk ke Indonesia dan perusahaan Indonesia menjajaki pasar Tiongkok.'
                    : 'Two directions: Chinese companies entering Indonesia and Indonesian companies exploring China.',
                'url' => '/gateway',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['gateway', 'gerbang', 'china', 'tiongkok', 'indonesia', 'cross-border', 'lintas', 'bilateral', 'corridor', 'koridor', 'expansion'],
            ],
            [
                'title' => $isId ? 'Industri & Peluang' : 'Industries & Opportunities',
                'desc' => $isId
                    ? 'Infrastruktur, teknologi, pariwisata, ekonomi kreatif, serta perdagangan & FMCG.'
                    : 'Infrastructure, technology, tourism, creative economy, and trade & FMCG.',
                'url' => '/industries',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['industry', 'industries', 'industri', 'sector', 'sektor', 'infrastructure', 'infrastruktur', 'technology', 'teknologi', 'digital', 'tourism', 'pariwisata', 'travel', 'hospitality', 'creative', 'kreatif', 'trade', 'perdagangan', 'fmcg', 'opportunity', 'peluang'],
            ],
            [
                'title' => $isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships',
                'desc' => $isId
                    ? 'Intelijen pasar, panduan ekspansi, perspektif industri, dan kegiatan kemitraan bilateral.'
                    : 'Market intelligence, expansion guides, industry perspectives, and bilateral partnership activities.',
                'url' => '/insights',
                'type' => $isId ? 'Halaman' : 'Page',
                'keywords' => ['insight', 'insights', 'wawasan', 'article', 'artikel', 'news', 'berita', 'intelligence', 'intelijen', 'guide', 'panduan', 'report', 'laporan'],
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

        $staticPages = array_merge($this->servicePages($isId), $staticPages);

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
        // 2. Articles / Insights
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
                    'url' => '/insights/' . $slug,
                    'score' => $score,
                ];
            }
        }

        // -------------------------------------------------------------
        // 3. Case Studies
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
