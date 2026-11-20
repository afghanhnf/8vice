<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Profile;
use App\Helpers\SeedData;

class ProfileSeeder extends Seeder
{
    public function run(): void
    {
        if (!Schema::hasTable('profiles')) {
            return;
        }

        // Guard in case seed is executed before running pending migrations
        Schema::table('profiles', function (Blueprint $table) {
            if (!Schema::hasColumn('profiles', 'call_name')) {
                $table->string('call_name')->nullable()->after('id');
            }
            if (!Schema::hasColumn('profiles', 'full_title')) {
                $table->string('full_title')->nullable()->after('call_name');
            }
            if (!Schema::hasColumn('profiles', 'chinese_name')) {
                $table->string('chinese_name', 100)->nullable()->after('full_title');
            }
            if (!Schema::hasColumn('profiles', 'role')) {
                $table->json('role')->nullable()->after('title');
            }
            if (!Schema::hasColumn('profiles', 'expertise')) {
                $table->text('expertise')->nullable()->after('role');
            }
            if (!Schema::hasColumn('profiles', 'short_bio')) {
                $table->json('short_bio')->nullable()->after('description');
            }
            if (!Schema::hasColumn('profiles', 'experiences')) {
                $table->longText('experiences')->nullable()->after('short_bio');
            }
            if (!Schema::hasColumn('profiles', 'focus_tags')) {
                $table->json('focus_tags')->nullable()->after('experiences');
            }
            if (!Schema::hasColumn('profiles', 'socials')) {
                $table->json('socials')->nullable()->after('focus_tags');
            }
            if (!Schema::hasColumn('profiles', 'quote_title')) {
                $table->json('quote_title')->nullable()->after('socials');
            }
            if (!Schema::hasColumn('profiles', 'quote_message')) {
                $table->json('quote_message')->nullable()->after('quote_title');
            }
            if (!Schema::hasColumn('profiles', 'sort_order')) {
                $table->unsignedInteger('sort_order')->default(0)->after('quote_message');
            }
        });

        foreach (SeedData::getProfiles() as $idx => $seedProfile) {
            $quoteMsg = [];
            foreach (['en', 'id', 'cn'] as $loc) {
                $val = $seedProfile->quote_message[$loc] ?? '';
                $quoteMsg[$loc] = is_array($val) ? implode("\n\n", $val) : (string) $val;
            }

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
                    'quote_message' => $quoteMsg,
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
