<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\ContactMessage;
use App\Filament\Resources\ContactMessages\ContactMessageResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_submit_contact_form_successfully(): void
    {
        $payload = [
            'name' => 'Budi Setiawan',
            'email' => 'budi@techinnovate.id',
            'company' => 'Tech Innovate Indonesia',
            'phone' => '+6281234567890',
            'subject' => 'Consultancy',
            'message' => 'Kami tertarik untuk mendiskusikan strategi ekspansi dan perizinan bisnis di Jakarta.',
            'website_url' => '', // honeypot
        ];

        $response = $this->post('/contact-submit', $payload);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect();

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Budi Setiawan',
            'email' => 'budi@techinnovate.id',
            'company' => 'Tech Innovate Indonesia',
            'phone' => '+6281234567890',
            'subject' => 'Consultancy',
            'message' => 'Kami tertarik untuk mendiskusikan strategi ekspansi dan perizinan bisnis di Jakarta.',
        ]);

        $saved = ContactMessage::where('email', 'budi@techinnovate.id')->first();
        $this->assertNotNull($saved);
        $this->assertEquals('Budi Setiawan', $saved->name);
        $this->assertEquals('Tech Innovate Indonesia', $saved->company);
        $this->assertEquals('+6281234567890', $saved->phone);
        $this->assertEquals('Consultancy', $saved->subject);
    }

    public function test_user_can_submit_contact_form_id_endpoint(): void
    {
        $payload = [
            'name' => 'Dewi Lestari',
            'email' => 'dewi@nusantara-ventures.com',
            'company' => 'Nusantara Ventures',
            'phone' => '+628198765432',
            'subject' => 'Training',
            'message' => 'Ingin mendaftarkan tim manajemen kami untuk program pelatihan regulasi.',
            'website_url' => '',
        ];

        $response = $this->post('/id/contact-submit', $payload);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect();

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Dewi Lestari',
            'email' => 'dewi@nusantara-ventures.com',
            'company' => 'Nusantara Ventures',
            'phone' => '+628198765432',
            'subject' => 'Training',
        ]);
    }

    public function test_contact_honeypot_blocks_spambots(): void
    {
        $payload = [
            'name' => 'Spammer Bot',
            'email' => 'bot@spammerdomain.com',
            'message' => 'Buy cheap links now',
            'website_url' => 'http://spammy-link.com', // Filled honeypot
        ];

        $response = $this->post('/contact-submit', $payload);

        $response->assertStatus(403);
        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'bot@spammerdomain.com',
        ]);
    }

    public function test_contact_validation_requires_mandatory_fields(): void
    {
        $response = $this->post('/contact-submit', [
            'name' => '',
            'email' => 'not-an-email',
            'message' => '',
        ]);

        $response->assertSessionHasErrors(['name', 'email', 'message']);
    }

    public function test_filament_resource_navigation_badge_reflects_count(): void
    {
        ContactMessage::create([
            'name' => 'Lead One',
            'email' => 'lead1@test.com',
            'subject' => 'Consultancy',
            'message' => 'First message',
        ]);

        ContactMessage::create([
            'name' => 'Lead Two',
            'email' => 'lead2@test.com',
            'subject' => 'Training',
            'message' => 'Second message',
        ]);

        $badge = ContactMessageResource::getNavigationBadge();
        $this->assertEquals('2', $badge);
    }
}
