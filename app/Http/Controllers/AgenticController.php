<?php

namespace App\Http\Controllers;

use App\Helpers\SeedData;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\Service;
use App\Models\SiteSetting;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class AgenticController extends Controller
{
    /**
     * Serve /llms.txt in structured Markdown format (fast, cached, agent-ready).
     */
    public function llmsTxt(): Response
    {
        $baseUrl = SitemapController::getBaseUrl();
        $cacheKey = 'agentic:llms_txt:' . md5($baseUrl);

        $markdown = Cache::remember($cacheKey, 600, function () use ($baseUrl) {
            $settings = SiteSetting::first() ?: SeedData::getSiteSettings();
            $email = trim((string) ($settings->email ?? 'hello@8vice.com'));
            $address = trim((string) ($settings->address ?? 'Jakarta, Indonesia'));

            $services = Service::orderBy('sort_order')->get();
            if ($services->isEmpty()) {
                $services = collect(SeedData::getServices());
            }

            $insights = Insight::published()->orderByDesc('id')->take(8)->get();
            if ($insights->isEmpty() && !Insight::exists()) {
                $insights = collect(SeedData::getInsights())->take(8);
            }

            $cases = CaseStudy::orderByDesc('is_featured')->orderByDesc('id')->take(5)->get();
            if ($cases->isEmpty() && !CaseStudy::exists()) {
                $cases = collect(SeedData::getCaseStudies())->take(5);
            }

            $lines = [
                '# 8vice',
                '',
                '> Strategic advisory, market entry, government relations, B2B matching, and bilateral intelligence bridging Chinese enterprises and global businesses with Indonesia.',
                '',
                "- Primary Languages: English (`{$baseUrl}/`), Bahasa Indonesia (`{$baseUrl}/id`), Simplified Chinese (`{$baseUrl}/cn`)",
                "- Office: {$address}",
                "- Contact Email: {$email}",
                "- Full Context Document: [llms-full.txt]({$baseUrl}/llms-full.txt)",
                "- XML Sitemap: [sitemap.xml]({$baseUrl}/sitemap.xml)",
                '',
                '## Core Navigation',
                '',
                "- [Home]({$baseUrl}/): Indonesia-China strategic gateway, core capabilities, priority sectors, and direct consultation inquiry.",
                "- [About Us]({$baseUrl}/about): Leadership profiles, cross-border methodology, and bilateral expertise.",
                "- [Our Services]({$baseUrl}/services): Overview of all 6 strategic advisory and business development pillars.",
                "- [Indonesia-China Gateway]({$baseUrl}/gateway): Dedicated bilateral corridor advisory for China-to-Indonesia and Indonesia-to-China expansion.",
                "- [Priority Industries]({$baseUrl}/industries): Focus sectors including Trade & Investment, Technology, Manufacturing, Tourism, and Creative Economy.",
                "- [Insights & Partnerships]({$baseUrl}/insights): Research briefings, policy updates, and bilateral partnership programs.",
                "- [Case Studies]({$baseUrl}/case-study): Proven client outcomes and cross-border execution track record.",
                "- [Contact Us]({$baseUrl}/contact): Book a confidential consultation via inquiry form, email, WhatsApp, or WeChat.",
                '',
                '## Advisory Services',
                '',
            ];

            foreach ($services as $svc) {
                $slug = $svc->slug ?? ($svc->id ?? '');
                if (!$slug) {
                    continue;
                }
                $title = self::pickEn($svc->title_i18n ?? $svc->title ?? $slug);
                $summary = self::pickEn($svc->description_i18n ?? $svc->description ?? $svc->summary ?? '');
                $lines[] = "- [{$title}]({$baseUrl}/services/{$slug})" . ($summary ? ": {$summary}" : '');
            }

            if ($insights->isNotEmpty()) {
                $lines[] = '';
                $lines[] = '## Recent Insights & Market Briefings';
                $lines[] = '';
                foreach ($insights as $ins) {
                    $slug = $ins->slug ?? '';
                    if (!$slug) {
                        continue;
                    }
                    $title = self::pickEn($ins->t_i18n ?? $ins->t ?? $slug);
                    $cat = self::pickEn($ins->cat ?? '');
                    $lines[] = "- [{$title}]({$baseUrl}/insights/{$slug})" . ($cat ? " ({$cat})" : '');
                }
            }

            if ($cases->isNotEmpty()) {
                $lines[] = '';
                $lines[] = '## Selected Case Studies';
                $lines[] = '';
                foreach ($cases as $cs) {
                    $slug = $cs->slug ?? '';
                    if (!$slug) {
                        continue;
                    }
                    $title = self::pickEn($cs->h_i18n ?? $cs->h ?? $cs->title ?? $slug);
                    $lines[] = "- [{$title}]({$baseUrl}/case-study/{$slug})";
                }
            }

            $lines[] = '';
            $lines[] = '## Multilingual Entry Points';
            $lines[] = '';
            $lines[] = "- [English]({$baseUrl}/)";
            $lines[] = "- [Bahasa Indonesia]({$baseUrl}/id)";
            $lines[] = "- [中文 (简体)]({$baseUrl}/cn)";
            $lines[] = '';

            return implode("\n", $lines);
        });

        return response($markdown, 200, [
            'Content-Type' => 'text/markdown; charset=utf-8',
            'X-Robots-Tag' => 'all',
            'Cache-Control' => 'public, max-age=600',
        ]);
    }

    /**
     * Serve /llms-full.txt with extended details for autonomous research agents.
     */
    public function llmsFullTxt(): Response
    {
        $baseUrl = SitemapController::getBaseUrl();
        $cacheKey = 'agentic:llms_full_txt:' . md5($baseUrl);

        $markdown = Cache::remember($cacheKey, 600, function () use ($baseUrl) {
            $base = $this->llmsTxt()->getContent();
            $extra = [
                '',
                '## Interactive Capabilities & APIs',
                '',
                "- Site Search JSON Endpoint: `GET {$baseUrl}/api/search?q={query}&lang={en|id|cn}`",
                "- Consultation / Inquiry Submission: Fillable on [Home]({$baseUrl}/#contact) and [Contact Us]({$baseUrl}/contact) via WebMCP declarative tools (`submit_business_inquiry`, `submit_contact_inquiry`, `subscribe_newsletter`).",
                "- Corporate Legal & Compliance: Adheres to Indonesia Law No. 27/2022 (UU PDP) Personal Data Protection standards and mutual NDA protocols.",
                '',
            ];
            return $base . implode("\n", $extra);
        });

        return response($markdown, 200, [
            'Content-Type' => 'text/markdown; charset=utf-8',
            'X-Robots-Tag' => 'all',
            'Cache-Control' => 'public, max-age=600',
        ]);
    }

    protected static function pickEn($value): string
    {
        if (empty($value)) {
            return '';
        }
        if (is_array($value)) {
            return trim((string) ($value['en'] ?? reset($value) ?? ''));
        }
        if (is_string($value)) {
            $trimmed = trim($value);
            if (str_starts_with($trimmed, '{') && str_ends_with($trimmed, '}')) {
                $decoded = json_decode($trimmed, true);
                if (is_array($decoded)) {
                    return trim((string) ($decoded['en'] ?? reset($decoded) ?? $trimmed));
                }
            }
            return $trimmed;
        }
        return '';
    }
}
