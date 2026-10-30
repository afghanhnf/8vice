<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServicePagesTest extends TestCase
{
    use RefreshDatabase;

    private const SLUGS = ['advisory', 'gov-relations', 'business-matching', 'comms', 'media-relations', 'investment'];

    public function test_each_service_detail_page_renders_in_both_languages(): void
    {
        foreach (self::SLUGS as $slug) {
            $this->get("/services/{$slug}")->assertOk();
            $this->get("/id/services/{$slug}")->assertOk();
        }
    }

    public function test_unknown_service_slug_returns_404(): void
    {
        $this->get('/services/digital')->assertNotFound();
    }

    public function test_route_slugs_match_frontend_service_data(): void
    {
        $js = file_get_contents(resource_path('js/data/services.js'));
        preg_match("/SERVICE_SLUGS = \[(.*?)\]/", $js, $m);
        $this->assertSame(self::SLUGS, array_map(fn ($s) => trim($s, " '"), explode(',', $m[1])));
        foreach (self::SLUGS as $slug) {
            // each slug must exist in both the en and id arrays
            $this->assertSame(2, substr_count($js, "id: '{$slug}'"), "{$slug} must appear once per language");
        }
    }

    public function test_search_finds_media_relations_service(): void
    {
        $this->getJson('/api/search?q=media&lang=en')
            ->assertOk()
            ->assertJsonPath('results.0.url', '/services/media-relations');
    }
}
