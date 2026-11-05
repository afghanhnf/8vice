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
    private function servicePages(bool $isId, bool $isCn = false): array
    {
        $type = $isCn ? '核心服务' : ($isId ? 'Layanan' : 'Service');
        return [
            [
                'title' => $isCn ? '战略咨询与市场准入' : ($isId ? 'Konsultasi Strategis & Ekspansi Pasar' : 'Strategic Advisory & Market Entry'),
                'desc' => $isCn
                    ? '评估跨境商业机遇、洞察市场动态，并制定可执行、合规的市场准入路线图。'
                    : ($isId
                    ? 'Mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun strategi penetrasi pasar yang terukur.'
                    : 'Evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.'),
                'url' => '/services/advisory',
                'type' => $type,
                'keywords' => ['market entry', 'ekspansi', 'penetrasi', 'strategy', 'strategi', 'advisory', 'konsultasi', 'consult', 'go-to-market', 'feasibility', 'kelayakan', 'research', 'riset', 'localization', 'lokalisasi', 'roadmap', '战略', '咨询', '市场准入', '扩张'],
            ],
            [
                'title' => $isCn ? '政府关系与利益相关方事务' : ($isId ? 'Hubungan Pemerintah & Pemangku Kepentingan' : 'Government Relations & Stakeholder Engagement'),
                'desc' => $isCn
                    ? '通过合规透明的渠道，支持利益相关方梳理、机构对接及政企沟通协调。'
                    : ($isId
                    ? 'Pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur yang tepat.'
                    : 'Stakeholder mapping, institutional engagement, and public-private dialogue through appropriate channels.'),
                'url' => '/services/gov-relations',
                'type' => $type,
                'keywords' => ['government', 'pemerintah', 'stakeholder', 'pemangku', 'institution', 'institusi', 'kelembagaan', 'public-private', 'publik', 'association', 'asosiasi', 'regulator', 'liaison', '政府', '合规', '协会', '机构'],
            ],
            [
                'title' => $isCn ? '商业配对与战略合作伙伴关系' : ($isId ? 'Pencocokan Bisnis & Kemitraan Strategis' : 'Business Matching & Strategic Partnerships'),
                'desc' => $isCn
                    ? '根据明确的商业目标，连接经过筛选的合作伙伴、分销商、投资方及行业领袖。'
                    : ($isId
                    ? 'Menghubungkan korporasi dengan mitra, distributor, investor, dan pelaku industri yang relevan.'
                    : 'Connecting businesses with relevant partners, distributors, investors, and industry stakeholders.'),
                'url' => '/services/business-matching',
                'type' => $type,
                'keywords' => ['partner', 'mitra', 'kemitraan', 'partnership', 'matching', 'matchmaking', 'b2b', 'distributor', 'delegation', 'delegasi', 'trade mission', 'misi dagang', 'mou', '合作', '配对', '分销', '代表团'],
            ],
            [
                'title' => $isCn ? '战略传播与市场定位' : ($isId ? 'Komunikasi Strategis & Positioning Pasar' : 'Strategic Communications & Market Positioning'),
                'desc' => $isCn
                    ? '打造企业定位、品牌叙事与整合传播策略，建立本土市场相关性与利益相关方信任。'
                    : ($isId
                    ? 'Positioning korporat, narasi merek, dan strategi komunikasi yang memperkuat relevansi pasar.'
                    : 'Corporate positioning, brand narratives, and communications strategies that build market relevance.'),
                'url' => '/services/comms',
                'type' => $type,
                'keywords' => ['communication', 'komunikasi', 'brand', 'merek', 'branding', 'positioning', 'marketing', 'pemasaran', 'narrative', 'narasi', 'public relations', '传播', '品牌', '定位', '公关'],
            ],
            [
                'title' => $isCn ? '媒体关系与危机公关' : ($isId ? 'Hubungan Media & Komunikasi Krisis' : 'Media Relations & Crisis Communications'),
                'desc' => $isCn
                    ? '管理媒体合作、新闻发布会、高管专访，并通过专业策略守护企业跨境声誉。'
                    : ($isId
                    ? 'Kemitraan media, konferensi pers, wawancara eksekutif, dan perlindungan reputasi korporat.'
                    : 'Media partnerships, press conferences, executive interviews, and corporate reputation protection.'),
                'url' => '/services/media-relations',
                'type' => $type,
                'keywords' => ['media', 'press', 'pers', 'crisis', 'krisis', 'reputation', 'reputasi', 'interview', 'wawancara', 'press conference', 'konferensi', 'journalist', 'jurnalis', 'issue', 'isu', '媒体', '危机', '声誉', '发布会'],
            ],
            [
                'title' => $isCn ? '投资促进与业务拓展支持' : ($isId ? 'Fasilitasi Investasi & Pengembangan Bisnis' : 'Investment & Business Development Facilitation'),
                'desc' => $isCn
                    ? '支持早期业务拓展、项目目标梳理与跨境商业合作架构设计。'
                    : ($isId
                    ? 'Mendukung tahap awal pengembangan bisnis, perumusan tujuan proyek, dan struktur kemitraan komersial.'
                    : 'Supporting early-stage business development, project objectives, and commercial partnership structures.'),
                'url' => '/services/investment',
                'type' => $type,
                'keywords' => ['investment', 'investasi', 'investor', 'business development', 'pengembangan bisnis', 'project', 'proyek', 'proposal', 'funding', '投资', '工业园', '合资', '项目'],
            ],
        ];
    }

    /**
     * Curated recommendations shown when a query has no direct match.
     */
    private function getRecommendedServices(string $lang = 'en'): array
    {
        $isId = $lang === 'id';
        $isCn = $lang === 'cn';
        return array_map(fn ($s) => [
            'type' => $s['type'],
            'title' => $s['title'],
            'desc' => $s['desc'],
            'url' => $s['url'],
            'badge' => $isCn ? '推荐服务' : ($isId ? 'Layanan Rekomendasi' : 'Recommended Service'),
        ], array_slice($this->servicePages($isId, $isCn), 0, 4));
    }

    public function index(Request $request)
    {
        $query = trim($request->input('q', ''));
        $lang = $request->input('lang', app()->getLocale() ?: 'en');
        $isId = $lang === 'id';
        $isCn = $lang === 'cn';

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
                'title' => $isCn ? '全部核心服务 — 六大服务支柱' : ($isId ? 'Semua Layanan 8 Vice' : 'All Services — 6 Service Pillars'),
                'desc' => $isCn
                    ? '跨越印尼与中国的整合战略咨询与跨境业务拓展。'
                    : ($isId
                    ? 'Konsultasi strategis dan pengembangan bisnis lintas negara terpadu untuk Indonesia dan Tiongkok.'
                    : 'Integrated strategic advisory and cross-border business development across Indonesia and China.'),
                'url' => '/services',
                'type' => $isCn ? '核心服务' : ($isId ? 'Layanan' : 'Service'),
                'keywords' => ['service', 'services', 'layanan', 'solusi', 'solution', 'capability', 'kapabilitas', '服务', '方案'],
            ],
            [
                'title' => $isCn ? '印中双边门户' : ($isId ? 'Gerbang Indonesia–China' : 'Indonesia–China Gateway'),
                'desc' => $isCn
                    ? '双向扩张路径：进入印尼市场的中国企业与探索中国市场的印尼企业。'
                    : ($isId
                    ? 'Dua arah ekspansi: perusahaan Tiongkok masuk ke Indonesia dan perusahaan Indonesia menjajaki pasar Tiongkok.'
                    : 'Two directions: Chinese companies entering Indonesia and Indonesian companies exploring China.'),
                'url' => '/gateway',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['gateway', 'gerbang', 'china', 'tiongkok', 'indonesia', 'cross-border', 'lintas', 'bilateral', 'corridor', 'koridor', 'expansion', '门户', '印尼', '中国', '双边'],
            ],
            [
                'title' => $isCn ? '重点行业与机遇' : ($isId ? 'Industri & Peluang' : 'Industries & Opportunities'),
                'desc' => $isCn
                    ? '基础设施、科技、旅游、创意经济以及贸易与快消品。'
                    : ($isId
                    ? 'Infrastruktur, teknologi, pariwisata, ekonomi kreatif, serta perdagangan & FMCG.'
                    : 'Infrastructure, technology, tourism, creative economy, and trade & FMCG.'),
                'url' => '/industries',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['industry', 'industries', 'industri', 'sector', 'sektor', 'infrastructure', 'infrastruktur', 'technology', 'teknologi', 'digital', 'tourism', 'pariwisata', 'travel', 'hospitality', 'creative', 'kreatif', 'trade', 'perdagangan', 'fmcg', 'opportunity', 'peluang', '行业', '基建', '科技', '旅游', '贸易'],
            ],
            [
                'title' => $isCn ? '商业洞察与合作' : ($isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships'),
                'desc' => $isCn
                    ? '市场情报、扩张指南、行业视角及双边合作伙伴活动。'
                    : ($isId
                    ? 'Intelijen pasar, panduan ekspansi, perspektif industri, dan kegiatan kemitraan bilateral.'
                    : 'Market intelligence, expansion guides, industry perspectives, and bilateral partnership activities.'),
                'url' => '/insights',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['insight', 'insights', 'wawasan', 'article', 'artikel', 'news', 'berita', 'intelligence', 'intelijen', 'guide', 'panduan', 'report', 'laporan', '洞察', '文章', '报告', '指南'],
            ],
            [
                'title' => $isCn ? '关于我们 — 愿景、使命与领导团队' : ($isId ? 'Tentang Kami — Visi, Misi & Tim Kepemimpinan' : 'About Us — Leadership, Vision & Approach'),
                'desc' => $isCn
                    ? '认识 8vice：高管领导层、跨境顾问委员会、愿景与工作方法。'
                    : ($isId
                    ? 'Profil kepemimpinan senior, dewan penasihat lintas batas, visi, dan metodologi 8vice.'
                    : 'Who we are: senior leadership, advisory board, vision, mission, and how 8vice solves complex market entry friction.'),
                'url' => '/about',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['about', 'tentang', 'vision', 'visi', 'mission', 'misi', 'leadership', 'leader', 'pemimpin', 'team', 'tim', 'founder', 'advisory', 'penasihat', 'profile', 'profil', 'approach', 'solve', 'history', 'sejarah', '关于', '团队', '领导'],
            ],
            [
                'title' => $isCn ? '加入 8vice — 职业发展与招聘' : ($isId ? 'Karier di 8vice — Peluang Kerja & Magang' : 'Careers at 8vice — Join Our Team'),
                'desc' => $isCn
                    ? '探索雅加达顾问职位、市场研究分析师岗位与实习机会。'
                    : ($isId
                    ? 'Lowongan kerja konsultan, analis riset, magang, dan pengembangan karier profesional di Jakarta.'
                    : 'Explore open consulting roles, market research associate positions, and internships in Jakarta.'),
                'url' => '/career',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['career', 'careers', 'karir', 'karier', 'job', 'jobs', 'pekerjaan', 'lowongan', 'hiring', 'recruitment', 'rekrutmen', 'join', 'intern', 'internship', 'magang', 'apply', 'lamar', 'cv', 'resume', 'talent', '招聘', '职业', '工作'],
            ],
            [
                'title' => $isCn ? '客户与合作品牌矩阵' : ($isId ? 'Klien & Portofolio Merek Mitra' : 'Our Clients & Brand Portfolio'),
                'desc' => $isCn
                    ? '深受全球科技领军企业、支付平台及拓展印尼市场的跨国集团信赖。'
                    : ($isId
                    ? 'Portofolio mitra ternama: Alipay, Didi, DingTalk, Coolita, Skyworth, dan puluhan pemimpin industri.'
                    : 'Trusted by leading global technology innovators, payment gateways, and enterprises expanding into Indonesia.'),
                'url' => '/client',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['client', 'clients', 'klien', 'portfolio', 'portofolio', 'brand', 'brands', 'merek', 'alipay', 'didi', 'dingtalk', 'coolita', 'skyworth', 'partner', 'partners', 'mitra', 'testimoni', '客户', '品牌'],
            ],
            [
                'title' => $isCn ? '联系我们 — 预约高管战略咨询' : ($isId ? 'Hubungi Kami — Konsultasi Bisnis Gratis' : 'Contact Us — Book a Free Consultation'),
                'desc' => $isCn
                    ? '预约 45 分钟深度咨询，或通过电子邮件与 WhatsApp 联系我们的雅加达办公室。'
                    : ($isId
                    ? 'Jadwalkan sesi diskusi 45 menit bersama tim konsultan kami di SOHO Pancoran, Jakarta Selatan.'
                    : 'Book a candid 45-minute discussion or reach our Jakarta office via email or WhatsApp.'),
                'url' => '/contact',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['contact', 'kontak', 'hubungi', 'konsultasi', 'consultation', 'book', 'jadwal', 'inquiry', 'reach', 'email', 'whatsapp', 'wa', 'phone', 'telepon', 'address', 'alamat', 'office', 'kantor', 'soho', 'pancoran', 'call', '联系', '咨询', '地址'],
            ],
            [
                'title' => $isCn ? '社会影响与可持续发展' : ($isId ? 'Dampak Sosial & Keberlanjutan' : 'Social Impact & Sustainable Growth'),
                'desc' => $isCn
                    ? '8vice 如何助力跨国企业扩张符合 ESG 标准、创造本地就业与社区价值。'
                    : ($isId
                    ? 'Komitmen 8vice dalam memastikan investasi bisnis memberikan nilai nyata bagi masyarakat lokal.'
                    : 'How 8vice aligns foreign enterprise expansion with ESG standards, local employment, and community impact.'),
                'url' => '/social-impact',
                'type' => $isCn ? '页面' : ($isId ? 'Halaman' : 'Page'),
                'keywords' => ['social', 'impact', 'sosial', 'dampak', 'sustainability', 'keberlanjutan', 'esg', 'csr', 'community', 'komunitas', 'green', 'lingkungan', '社会', '可持续', '绿色'],
            ],
        ];

        $staticPages = array_merge($this->servicePages($isId, $isCn), $staticPages);

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
                    'type' => $isCn ? '洞察文章' : ($isId ? 'Artikel' : 'Article'),
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
