<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            if (!Schema::hasColumn('site_settings', 'footer_description')) {
                $table->json('footer_description')->nullable()->after('tagline');
            }
        });

        $defaultFooterDesc = json_encode([
            'en' => '8 Vice is an Indonesia–China strategic advisory and business development firm helping enterprises navigate market entry, institutional engagement, and bilateral partnerships. With over two decades of cross-border experience, we bridge commercial ambition with practical execution on the ground.',
            'id' => '8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–Tiongkok yang mendampingi perusahaan menavigasi masuk pasar, hubungan kelembagaan, dan kemitraan bilateral. Berbekal pengalaman lintas batas lebih dari dua dekade, kami menjembatani ambisi komersial dengan eksekusi nyata di lapangan.',
            'cn' => '8 Vice 是一家专注于印尼与中国的双边战略咨询及业务拓展机构，致力于协助企业把握市场准入、政企关系与跨境合作机遇。凭借二十余年的双边实战积淀，我们将企业的商业愿景转化为务实高效的本土落地执行。',
        ], JSON_UNESCAPED_UNICODE);

        DB::table('site_settings')
            ->whereNull('footer_description')
            ->update(['footer_description' => $defaultFooterDesc]);
    }

    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            if (Schema::hasColumn('site_settings', 'footer_description')) {
                $table->dropColumn('footer_description');
            }
        });
    }
};
