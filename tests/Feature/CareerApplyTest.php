<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Career;
use App\Models\JobApplication;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CareerApplyTest extends TestCase
{
    use RefreshDatabase;
    public function test_candidate_can_submit_application_for_specific_role(): void
    {
        Storage::fake('public');

        $career = Career::firstOrCreate(
            ['id' => 1],
            [
                'title' => 'Business Development Associate',
                'dept' => 'Growth',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'reqs' => ['2+ years experience'],
            ]
        );

        $file = UploadedFile::fake()->create('my_resume.pdf', 200, 'application/pdf');

        $response = $this->post('/career-apply', [
            'career_id' => $career->id,
            'name' => 'Maya Putri',
            'email' => 'maya.putri@example.com',
            'linkedin' => 'linkedin.com/in/mayaputri',
            'cv' => $file,
            'website_url' => '', // honeypot
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect();

        $this->assertDatabaseHas('job_applications', [
            'career_id' => $career->id,
            'name' => 'Maya Putri',
            'email' => 'maya.putri@example.com',
            'linkedin' => 'https://linkedin.com/in/mayaputri',
        ]);

        $application = JobApplication::where('email', 'maya.putri@example.com')->first();
        $this->assertNotNull($application);
        Storage::disk('public')->assertExists($application->cv_path);
    }

    public function test_candidate_can_submit_open_application(): void
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->create('open_resume.docx', 150, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

        $response = $this->post('/career-apply', [
            'career_id' => 'open',
            'name' => 'Andi Pratama',
            'email' => 'andi.pratama@example.com',
            'linkedin' => 'https://linkedin.com/in/andipratama',
            'cv' => $file,
            'website_url' => '',
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect();

        $this->assertDatabaseHas('job_applications', [
            'career_id' => null,
            'name' => 'Andi Pratama',
            'email' => 'andi.pratama@example.com',
        ]);

        $application = JobApplication::where('email', 'andi.pratama@example.com')->first();
        $this->assertNotNull($application);
        $this->assertNull($application->career_id);
        Storage::disk('public')->assertExists($application->cv_path);
    }

    public function test_honeypot_rejects_bots(): void
    {
        $response = $this->post('/career-apply', [
            'career_id' => 'open',
            'name' => 'Bot Spammer',
            'email' => 'bot@spammer.com',
            'website_url' => 'http://spam.com',
        ]);

        $response->assertStatus(403);
    }
}
