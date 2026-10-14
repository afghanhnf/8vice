<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Insight;
use App\Models\CaseStudy;
use App\Models\Course;
use App\Models\Service;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SearchFeatureTest extends TestCase
{
    use RefreshDatabase;

    public function test_search_returns_article_recommendations(): void
    {
        Insight::create([
            'cat' => 'Regulatory Strategy',
            'rt' => '7 min read',
            't' => ['en' => 'Navigating Indonesia Mining Regulations', 'id' => 'Navigasi Regulasi Tambang Indonesia'],
            'excerpt' => ['en' => 'Essential policy guide for mineral processing entrants.'],
            'body' => ['en' => 'Detailed breakdown of smelter mandates and domestic market obligations.'],
            'slug' => 'navigating-indonesia-mining-regulations',
            'status' => 'Publish',
        ]);

        $response = $this->getJson('/api/search?q=mining&lang=en');

        $response->assertStatus(200);
        $response->assertJsonPath('count', 1);
        $response->assertJsonFragment([
            'type' => 'Article',
            'title' => 'Navigating Indonesia Mining Regulations',
            'url' => '/article/navigating-indonesia-mining-regulations',
        ]);
    }

    public function test_search_returns_case_study_recommendations(): void
    {
        CaseStudy::create([
            'tag' => 'Manufacturing · Supply Chain',
            'slug' => 'solar-panel-factory-supply-chain',
            'h' => ['en' => 'Accelerating Tier-1 Solar Cell Manufacturing in Java.'],
            'p' => ['en' => 'Overcoming land acquisition and grid-interconnection bottlenecks.'],
            'body' => ['en' => 'Full engagement retrospective for clean energy manufacturing.'],
        ]);

        $response = $this->getJson('/api/search?q=solar&lang=en');

        $response->assertStatus(200);
        $response->assertJsonPath('count', 1);
        $response->assertJsonFragment([
            'type' => 'Case Study',
            'title' => 'Accelerating Tier-1 Solar Cell Manufacturing in Java.',
            'url' => '/case-study/solar-panel-factory-supply-chain',
        ]);
    }

    public function test_search_returns_service_and_course_recommendations(): void
    {
        Course::create([
            'cat' => 'Social Media',
            'title' => 'TikTok Shop Live Selling Masterclass',
            'slug' => 'tiktok-shop-masterclass',
            'desc' => 'How to setup streaming rooms and train local Indonesian hosts.',
            'free' => true,
            'price' => 'Free',
            'dur' => '2h',
            'lessons' => '10 lessons',
            'cover' => 'course-cover',
        ]);

        $response = $this->getJson('/api/search?q=tiktok&lang=en');

        $response->assertStatus(200);
        $this->assertGreaterThanOrEqual(1, $response->json('count'));
        $this->assertTrue(collect($response->json('results'))->contains('url', '/training'));
        $this->assertTrue(collect($response->json('results'))->contains('title', '[Social Media] TikTok Shop Live Selling Masterclass'));
    }

    public function test_search_returns_page_recommendations(): void
    {
        $response = $this->getJson('/api/search?q=career&lang=en');

        $response->assertStatus(200);
        $response->assertJsonFragment([
            'type' => 'Page',
            'url' => '/career',
        ]);
    }

    public function test_search_fallback_returns_recommended_services_when_no_match(): void
    {
        $response = $this->getJson('/api/search?q=xyznonexistentquery999&lang=en');

        $response->assertStatus(200);
        $response->assertJsonPath('count', 0);
        $response->assertJsonPath('results', []);

        $recommended = $response->json('recommended_services');
        $this->assertIsArray($recommended);
        $this->assertCount(4, $recommended);

        $urls = collect($recommended)->pluck('url')->all();
        $this->assertContains('/market-intelligence', $urls);
        $this->assertContains('/consultancy', $urls);
        $this->assertContains('/training', $urls);
        $this->assertContains('/services', $urls);
    }

    public function test_search_indonesian_locale_translation(): void
    {
        $response = $this->getJson('/api/search?q=konsultasi&lang=id');

        $response->assertStatus(200);
        $results = collect($response->json('results'));

        $this->assertTrue($results->contains('type', 'Layanan'));
        $this->assertTrue($results->contains('url', '/consultancy'));

        $recommended = $response->json('recommended_services');
        $this->assertEquals('Layanan Rekomendasi', $recommended[0]['type']);
    }
}
