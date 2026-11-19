<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Insight;
use App\Models\Service;
use App\Helpers\SeedData;

class SearchController extends Controller
{
    /**
     * Safely extract translated text if stored as JSON / array, or return plain string.
     */
    private function extractText($value, string $lang = 'en'): string
    {
        if (is_array($value)) {
            return (string) ($value[$lang] ?? $value['en'] ?? $value['id'] ?? $value['cn'] ?? reset($value) ?? '');
        }
        if (is_string($value)) {
            $trimmed = trim($value);
            if (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) {
                $decoded = json_decode($trimmed, true);
                if (is_array($decoded)) {
                    return (string) ($decoded[$lang] ?? $decoded['en'] ?? $decoded['id'] ?? $decoded['cn'] ?? reset($decoded) ?? $value);
                }
            }
            return $value;
        }
        return '';
    }

    /**
     * Collect lowercase searchable text across all translations for better bilingual matching.
     */
    private function extractAllText($value): string
    {
        if (is_array($value)) {
            return mb_strtolower(implode(' ', array_filter(array_map('strval', $value))));
        }
        if (is_string($value)) {
            $trimmed = trim($value);
            if (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) {
                $decoded = json_decode($trimmed, true);
                if (is_array($decoded)) {
                    return mb_strtolower(implode(' ', array_filter(array_map('strval', $decoded))));
                }
            }
            return mb_strtolower($value);
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
     * Active, visible public pages only (excludes hidden pages such as Case Study, Career, Gateway, Industries, Social Impact, etc.).
     */
    private function activePages(string $lang = 'en'): array
    {
        $isId = $lang === 'id';
        $isCn = $lang === 'cn';
        $type = $isCn ? '页面' : ($isId ? 'Halaman' : 'Page');

        // Include dynamic CMS service keywords on the /services page entry
        $serviceKeywords = [
            'service', 'services', 'layanan', 'solusi', 'solution', 'capability', 'capabilities', 'kapabilitas',
            'advisory', 'strategic advisory', 'market entry', 'ekspansi', 'penetrasi', 'go-to-market', 'konsultasi',
            'government relations', 'hubungan pemerintah', 'stakeholder', 'pemangku kepentingan', 'regulatory', 'regulasi',
            'business matching', 'partnership', 'partnerships', 'kemitraan', 'mitra', 'b2b', 'distributor', 'trade mission',
            'strategic communications', 'komunikasi', 'brand positioning', 'branding', 'localization', 'lokalisasi',
            'media relations', 'hubungan media', 'crisis', 'krisis', 'press', 'pers', 'pr', 'reputation', 'reputasi',
            'investment', 'investasi', 'business development', 'pengembangan bisnis', 'feasibility', 'kelayakan',
            '服务', '核心服务', '战略咨询', '市场准入', '政府关系', '商业配对', '媒体关系', '危机公关', '品牌定位', '投资促进',
        ];

        try {
            $dbServices = Service::orderBy('sort_order')->get(['title', 'description']);
            foreach ($dbServices as $s) {
                $tAll = $this->extractAllText($s->title);
                if ($tAll !== '') {
                    $serviceKeywords[] = $tAll;
                }
            }
        } catch (\Throwable $e) {}

        return [
            [
                'title' => $isCn ? '首页 — 8vice 印中商业战略门户' : ($isId ? 'Beranda — Gerbang Strategis 8vice' : 'Home — Strategic Advisory Gateway'),
                'desc' => $isCn
                    ? '连接印尼与中国商业生态的战略咨询机构，提供市场情报、市场准入、政府关系与商务对接。'
                    : ($isId
                    ? 'Firma penasihat strategis yang menghubungkan bisnis di antara Indonesia dan Tiongkok untuk ekspansi berkelanjutan.'
                    : 'Strategic advisory firm connecting businesses, institutions, and partners across Indonesia and China.'),
                'url' => '/',
                'type' => $type,
                'keywords' => ['home', 'beranda', '8vice', 'eightvice', 'gateway', 'indonesia china', 'bilateral', 'corridor', 'koridor', 'strategic gateway', '首页', '门户', '双边'],
            ],
            [
                'title' => $isCn ? '关于我们 — 愿景、使命与管理团队' : ($isId ? 'Tentang Kami — Visi, Misi & Tim Pemimpin' : 'About Us — Leadership, Vision & Approach'),
                'desc' => $isCn
                    ? '认识 8vice：高管团队（Helda Chandra、Gandhi、Christine、James He）、企业愿景与执行方法。'
                    : ($isId
                    ? 'Profil tim kepemimpinan C-suite, dewan penasihat, visi, misi, dan metodologi eksekusi 8vice.'
                    : 'Senior C-suite leadership, cross-border advisory team, vision, mission, and how 8vice solves market entry challenges.'),
                'url' => '/about',
                'type' => $type,
                'keywords' => ['about', 'tentang', 'tentang kami', 'vision', 'visi', 'mission', 'misi', 'leadership', 'leader', 'pemimpin', 'team', 'tim', 'people', 'helda', 'chandra', 'gandhi', 'christine', 'james', 'ceo', 'cso', 'cbdo', 'ccao', 'advisory', 'profile', 'profil', '关于', '团队', '领导', '愿景', '使命'],
            ],
            [
                'title' => $isCn ? '核心服务 — 六大跨境战略支柱' : ($isId ? 'Layanan Kami — 6 Pilar Solusi Strategis' : 'Our Services — 6 Core Strategic Pillars'),
                'desc' => $isCn
                    ? '战略咨询与市场准入、政府关系、商业配对、战略传播、媒体危机公关及投资促进服务。'
                    : ($isId
                    ? 'Konsultasi masuk pasar, hubungan pemerintah, B2B matching, komunikasi strategis, hubungan media, dan fasilitasi investasi.'
                    : 'Strategic advisory, government relations, B2B matchmaking, strategic communications, media relations, and investment facilitation.'),
                'url' => '/services',
                'type' => $type,
                'keywords' => $serviceKeywords,
            ],
            [
                'title' => $isCn ? '商业洞察与合作 — 市场情报与行业分析' : ($isId ? 'Wawasan & Kemitraan — Intelijen Pasar & Artikel' : 'Insights & Partnerships — Market Intelligence & Articles'),
                'desc' => $isCn
                    ? '深度市场情报报告、法规合规指南与印尼–中国双边行业趋势深度分析。'
                    : ($isId
                    ? 'Laporan intelijen pasar, panduan regulasi UU PDP & TKDN, serta analisis strategis koridor Indonesia–Tiongkok.'
                    : 'Research briefings, regulatory compliance guides, and cross-border intelligence across Indonesia and China.'),
                'url' => '/insights',
                'type' => $type,
                'keywords' => ['insight', 'insights', 'wawasan', 'kemitraan', 'partnerships', 'article', 'articles', 'artikel', 'berita', 'intelligence', 'intelijen', 'report', 'laporan', 'research', 'riset', 'guide', 'panduan', '洞察', '文章', '报告', '商业洞察'],
            ],
            [
                'title' => $isCn ? '联系我们 — 预约高管战略咨询' : ($isId ? 'Hubungi Kami — Jadwalkan Konsultasi Strategis' : 'Contact Us — Book a Strategic Discussion'),
                'desc' => $isCn
                    ? '联系我们位于雅加达的战略顾问团队，通过邮件、WhatsApp 或官方微信探讨跨境拓展需求。'
                    : ($isId
                    ? 'Hubungi tim konsultan 8vice di Jakarta Selatan via formulir, email, WhatsApp, atau WeChat.'
                    : 'Discuss your cross-border mandate with our Jakarta advisory team via inquiry form, email, WhatsApp, or WeChat.'),
                'url' => '/contact',
                'type' => $type,
                'keywords' => ['contact', 'kontak', 'hubungi', 'konsultasi', 'consultation', 'book', 'jadwal', 'inquiry', 'email', 'whatsapp', 'wechat', 'office', 'kantor', 'jakarta', 'soho', 'pancoran', '联系', '咨询', '地址'],
            ],
        ];
    }

    /**
     * Fallback suggestions shown when a query yields no direct match.
     */
    private function getRecommendedPages(string $lang = 'en'): array
    {
        $isId = $lang === 'id';
        $isCn = $lang === 'cn';
        $badge = $isCn ? '推荐页面' : ($isId ? 'Halaman Rekomendasi' : 'Recommended Page');

        $pages = $this->activePages($lang);
        $recommended = array_filter($pages, fn ($p) => $p['url'] !== '/');

        return array_values(array_map(fn ($p) => [
            'type' => $p['type'],
            'title' => $p['title'],
            'desc' => $p['desc'],
            'url' => $p['url'],
            'badge' => $badge,
        ], $recommended));
    }

    public function index(Request $request)
    {
        $query = trim((string) $request->input('q', ''));
        $lang = (string) $request->input('lang', app()->getLocale() ?: 'en');
        if (!in_array($lang, ['en', 'id', 'cn'], true)) {
            $lang = 'en';
        }
        $isId = $lang === 'id';
        $isCn = $lang === 'cn';

        if (mb_strlen($query) < 2) {
            return response()->json([
                'query' => $query,
                'count' => 0,
                'results' => [],
                'recommended_services' => $this->getRecommendedPages($lang),
            ]);
        }

        $lowerQ = mb_strtolower($query);
        $results = [];

        // -------------------------------------------------------------
        // 1. Active Visible Pages ONLY (Home, About, Services, Insights, Contact)
        // -------------------------------------------------------------
        foreach ($this->activePages($lang) as $page) {
            $matched = false;
            $score = 0;

            if (str_contains(mb_strtolower($page['title']), $lowerQ)) {
                $matched = true;
                $score = 35;
            } elseif (str_contains(mb_strtolower($page['desc']), $lowerQ)) {
                $matched = true;
                $score = 26;
            } else {
                foreach ($page['keywords'] as $kw) {
                    if ($kw !== '' && (str_contains($kw, $lowerQ) || str_contains($lowerQ, $kw))) {
                        $matched = true;
                        $score = 22;
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
                    'score' => $score,
                ];
            }
        }

        // -------------------------------------------------------------
        // 2. Published Articles / Insights ONLY (excludes Draft / Archive / Hidden)
        // -------------------------------------------------------------
        $insights = Insight::published()->orderByDesc('id')->get();
        if ($insights->isEmpty() && !Insight::exists()) {
            $insights = collect(SeedData::getInsights());
        }

        foreach ($insights as $insight) {
            $title = $this->extractText($insight->t ?? '', $lang);
            $body = $this->extractText($insight->body ?? '', $lang);
            $excerpt = $this->extractText($insight->excerpt ?? '', $lang);
            $cat = (string) ($insight->cat ?? '');
            $slug = (string) ($insight->slug ?: $insight->id);
            $allTitles = $this->extractAllText($insight->t ?? '');
            $allExcerpts = $this->extractAllText($insight->excerpt ?? '');

            $matched = false;
            $score = 0;

            if (str_contains(mb_strtolower($title), $lowerQ) || str_contains($allTitles, $lowerQ)) {
                $matched = true;
                $score = 36;
            } elseif (str_contains(mb_strtolower($cat), $lowerQ) || str_contains(mb_strtolower($slug), $lowerQ)) {
                $matched = true;
                $score = 26;
            } elseif (str_contains(mb_strtolower($excerpt), $lowerQ) || str_contains($allExcerpts, $lowerQ)) {
                $matched = true;
                $score = 22;
            } elseif (str_contains(mb_strtolower($body), $lowerQ)) {
                $matched = true;
                $score = 16;
            }

            if ($matched) {
                $results[] = [
                    'type' => $isCn ? '洞察文章' : ($isId ? 'Artikel' : 'Article'),
                    'title' => $title ?: 'Insight',
                    'desc' => $this->cleanSnippet($excerpt ?: $body),
                    'url' => '/insights/' . $slug,
                    'score' => $score,
                ];
            }
        }

        // -------------------------------------------------------------
        // Deduplicate & Sort by Relevance Score
        // -------------------------------------------------------------
        usort($results, fn ($a, $b) => ($b['score'] ?? 0) <=> ($a['score'] ?? 0));

        $uniqueResults = [];
        $seenKeys = [];

        foreach ($results as $item) {
            $key = $item['url'];
            if (!isset($seenKeys[$key])) {
                $seenKeys[$key] = true;
                unset($item['score']);
                $uniqueResults[] = $item;
            }
        }

        $topResults = array_slice($uniqueResults, 0, 12);

        return response()->json([
            'query' => $query,
            'count' => count($topResults),
            'results' => $topResults,
            'recommended_services' => $this->getRecommendedPages($lang),
        ]);
    }
}
