<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            if (!Schema::hasColumn('insights', 'paper_badge')) {
                $table->text('paper_badge')->nullable()->after('is_paywall_locked');
            }
            if (!Schema::hasColumn('insights', 'paper_price_idr')) {
                $table->unsignedBigInteger('paper_price_idr')->nullable()->after('paper_badge');
            }
            if (!Schema::hasColumn('insights', 'paper_original_price_idr')) {
                $table->unsignedBigInteger('paper_original_price_idr')->nullable()->after('paper_price_idr');
            }
            if (!Schema::hasColumn('insights', 'paper_price_usd')) {
                $table->string('paper_price_usd', 60)->nullable()->after('paper_original_price_idr');
            }
            if (!Schema::hasColumn('insights', 'paper_file_format')) {
                $table->string('paper_file_format', 255)->nullable()->after('paper_price_usd');
            }
            if (!Schema::hasColumn('insights', 'paper_includes')) {
                $table->longText('paper_includes')->nullable()->after('paper_file_format');
            }
            if (!Schema::hasColumn('insights', 'paper_cta_label')) {
                $table->text('paper_cta_label')->nullable()->after('paper_includes');
            }
        });

        // Hydrate sensible defaults on existing research papers only if pricing fields are unset
        $papers = DB::table('insights')->where('is_research_paper', true)->get();
        foreach ($papers as $paper) {
            $updates = [];
            if (is_null($paper->paper_price_idr)) {
                $updates['paper_price_idr'] = 1490000;
            }
            if (is_null($paper->paper_original_price_idr)) {
                $updates['paper_original_price_idr'] = 2490000;
            }
            if (empty($paper->paper_price_usd)) {
                $updates['paper_price_usd'] = '$99 USD';
            }
            if (empty($paper->paper_pages)) {
                $updates['paper_pages'] = 58;
            }
            if (empty($paper->paper_file_format)) {
                $updates['paper_file_format'] = 'PDF (58 Pages) + Raw Financial Model (.XLSX)';
            }
            if (empty($paper->paper_badge)) {
                $updates['paper_badge'] = json_encode([
                    'en' => 'FLAGSHIP RESEARCH PAPER · LOCKED',
                    'id' => 'RISET MENDALAM · DOKUMEN TERKUNCI',
                    'cn' => '核心深度研究报告 · 锁定专享',
                ], JSON_UNESCAPED_UNICODE);
            }
            if (empty($paper->paper_includes)) {
                $updates['paper_includes'] = json_encode([
                    'en' => [
                        'Full 58-Page Research Paper PDF (Print-Ready 300 DPI)',
                        'Raw Excel Industrial Estate & TKDN Cost Matrix (.XLSX)',
                        'Direct Instant Delivery via Scalev Checkout',
                    ],
                    'id' => [
                        'Laporan Riset Lengkap 58 Halaman (PDF Resolusi Tinggi)',
                        'Model Matriks Biaya Kawasan & TKDN Mentah (.XLSX)',
                        'Akses Unduhan Instan Langsung via Scalev Checkout',
                    ],
                    'cn' => [
                        '完整 58 页深度研究报告 PDF 印刷级文档',
                        '原始 Excel 工业园区成本与 TKDN 合规测算模型 (.XLSX)',
                        '通过 Scalev 结账后即时自动获取下载链接',
                    ],
                ], JSON_UNESCAPED_UNICODE);
            }
            if (empty($paper->paper_cta_label)) {
                $updates['paper_cta_label'] = json_encode([
                    'en' => 'Unlock & Buy via Scalev',
                    'id' => 'Beli & Buka Akses via Scalev',
                    'cn' => '通过 Scalev 购买解锁全文',
                ], JSON_UNESCAPED_UNICODE);
            }

            if (!empty($updates)) {
                $updates['updated_at'] = now();
                DB::table('insights')->where('id', $paper->id)->update($updates);
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('insights', function (Blueprint $table) {
            $cols = [
                'paper_cta_label',
                'paper_includes',
                'paper_file_format',
                'paper_price_usd',
                'paper_original_price_idr',
                'paper_price_idr',
                'paper_badge',
            ];
            foreach ($cols as $col) {
                if (Schema::hasColumn('insights', $col)) {
                    $table->dropColumn($col);
                }
            }
        });
    }
};
