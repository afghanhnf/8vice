<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\File;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate {--url= : Override base URL (e.g. https://8vice.communic8.id)}';
    protected $description = 'Generate multilingual sitemap XML files (index, en, id, cn) in the public directory';

    public function handle(): int
    {
        $overrideUrl = $this->option('url');
        if ($overrideUrl) {
            config(['app.url' => $overrideUrl]);
        }

        $baseUrl = SitemapController::getBaseUrl();
        $this->info("Generating multilingual sitemaps using base URL: {$baseUrl}");

        $publicPath = public_path();

        // 1. Generate Language Sitemaps
        foreach (['en', 'id', 'cn'] as $lang) {
            $xml = SitemapController::generateLangSitemapXml($lang);
            $filePath = "{$publicPath}/sitemap-{$lang}.xml";
            File::put($filePath, $xml);
            $this->info("✓ Saved: sitemap-{$lang}.xml (" . strlen($xml) . " bytes)");
        }

        // 2. Generate Sitemap Index
        $latestMod = date('Y-m-d');
        $indexXml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $indexXml .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
        foreach (['en', 'id', 'cn'] as $lang) {
            $indexXml .= "    <sitemap>\n";
            $indexXml .= "        <loc>{$baseUrl}/sitemap-{$lang}.xml</loc>\n";
            $indexXml .= "        <lastmod>{$latestMod}</lastmod>\n";
            $indexXml .= "    </sitemap>\n";
        }
        $indexXml .= '</sitemapindex>';

        File::put("{$publicPath}/sitemap.xml", $indexXml);
        $this->info("✓ Saved: sitemap.xml (" . strlen($indexXml) . " bytes)");

        $this->info("All multilingual sitemaps successfully generated!");
        return 0;
    }
}
