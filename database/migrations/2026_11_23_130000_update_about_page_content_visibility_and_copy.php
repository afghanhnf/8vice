<?php

use App\Models\PageContent;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('page_contents')) {
            return;
        }

        $about = PageContent::where('page_code', 'about')->first();
        if (!$about || !is_array($about->content)) {
            return;
        }

        $content = $about->content;

        // Ensure visibility flags exist and apply the requested hidden/visible defaults
        $content['visibility'] = array_merge($content['visibility'] ?? [], [
            'show_hero' => true,
            'show_hero_image' => true,
            'show_hero_image_badges' => false,
            'show_overview' => true,
            'show_overview_image_badges' => false,
            'show_overview_foundations' => false,
            'show_who' => true,
            'show_vision_mission' => true,
            'show_cross_border_process' => true,
            'show_leadership_perspective' => false,
            'show_people' => true,
            'show_values' => true,
            'show_cta' => true,
        ]);

        if (isset($content['en']) && is_array($content['en'])) {
            $content['en']['heroBannerCorridor'] = $content['en']['heroBannerCorridor'] ?? 'JAKARTA ↔ BEIJING · SHANGHAI · SHENZHEN';
            if (isset($content['en']['who']['eyebrow'])) {
                $content['en']['who']['eyebrow'] = 'WHO WE ARE.';
            }
            $content['en']['peopleEyebrow'] = 'THE MINDS BEHIND THE MOVE';
            $content['en']['peopleTitle'] = 'Built on Experience. Driven by Connection.';
            $content['en']['peopleLead'] = 'Decades of combined advisory across government, SOEs, and private enterprise, now working for your market entry.';
        }

        if (isset($content['id']) && is_array($content['id'])) {
            $content['id']['heroBannerCorridor'] = $content['id']['heroBannerCorridor'] ?? 'JAKARTA ↔ BEIJING · SHANGHAI · SHENZHEN';
            if (isset($content['id']['who']['eyebrow'])) {
                $content['id']['who']['eyebrow'] = 'TENTANG KAMI.';
            }
            $content['id']['peopleEyebrow'] = 'DI BALIK LANGKAH STRATEGIS';
            $content['id']['peopleTitle'] = 'Dibangun di Atas Pengalaman. Digerakkan oleh Koneksi.';
            $content['id']['peopleLead'] = 'Puluhan tahun pengalaman konsultasi di sektor pemerintahan, BUMN, dan swasta—kini hadir untuk mendukung ekspansi pasar Anda.';
        }

        if (isset($content['cn']) && is_array($content['cn'])) {
            $content['cn']['heroBannerCorridor'] = $content['cn']['heroBannerCorridor'] ?? 'JAKARTA ↔ BEIJING · SHANGHAI · SHENZHEN';
            if (isset($content['cn']['who']['eyebrow'])) {
                $content['cn']['who']['eyebrow'] = '关于我们。';
            }
            $content['cn']['peopleEyebrow'] = '核心团队背后的力量';
            $content['cn']['peopleTitle'] = '源于深厚积淀。成于高效连接。';
            $content['cn']['peopleLead'] = '汇集跨越政府机构、国有企业与私营部门的数十年战略咨询积淀，全力赋能您的市场准入与增长。';
        }

        $about->content = $content;
        $about->save();
    }

    public function down(): void
    {
        // Non-destructive content sync migration
    }
};
