<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;
use App\Helpers\SeedData;

class ProfileSeeder extends Seeder
{
    public function run(): void
    {
        foreach (SeedData::getProfiles() as $idx => $seedProfile) {
            Profile::updateOrCreate(
                ['call_name' => $seedProfile->call_name],
                [
                    'full_title' => $seedProfile->full_title ?? $seedProfile->title,
                    'chinese_name' => $seedProfile->chinese_name ?? '',
                    'title' => ['en' => $seedProfile->title, 'id' => $seedProfile->title, 'cn' => $seedProfile->title],
                    'role' => $seedProfile->role,
                    'expertise' => $seedProfile->expertise,
                    'short_bio' => $seedProfile->short_bio,
                    'experiences' => $seedProfile->experiences,
                    'focus_tags' => $seedProfile->focus_tags,
                    'socials' => $seedProfile->socials,
                    'quote_title' => $seedProfile->quote_title,
                    'quote_message' => $seedProfile->quote_message,
                    'description' => [
                        'en' => ($seedProfile->role['en'] ?? '') . "\n\n" . ($seedProfile->short_bio['en'] ?? ''),
                        'id' => ($seedProfile->role['id'] ?? '') . "\n\n" . ($seedProfile->short_bio['id'] ?? ''),
                        'cn' => ($seedProfile->role['cn'] ?? '') . "\n\n" . ($seedProfile->short_bio['cn'] ?? ''),
                    ],
                    'image' => $seedProfile->image,
                    'sort_order' => $idx + 1,
                ]
            );
        }
    }
}
