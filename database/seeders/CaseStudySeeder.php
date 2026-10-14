<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CaseStudy;

class CaseStudySeeder extends Seeder
{
    public function run(): void
    {
        $cases = [
            [
                'slug' => 'chinese-fintech-live-in-6-months',
                'cover' => '/images/cases/fintech.webp',
                'tag' => [
                    'en' => 'Fintech · Market Entry',
                    'id' => 'Fintech · Penetrasi Pasar'
                ],
                'h' => [
                    'en' => 'A Chinese Fintech, Live in 6 Months.',
                    'id' => 'Fintech Tiongkok, Beroperasi Penuh dalam 6 Bulan.'
                ],
                'p' => [
                    'en' => 'Market entry, licensing pathway, and a local operating team - from scoping to launch.',
                    'id' => 'Penetrasi pasar, perizinan berjenjang, dan tim operasional lokal — dari perencanaan hingga peluncuran.'
                ],
                'body' => [
                    'en' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">6 Mo</div><div style="font-size:13px;color:#666;">Scoping to Live Commercial</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">3×</div><div style="font-size:13px;color:#666;">Faster Than Prior Attempts</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">14</div><div style="font-size:13px;color:#666;">Key Local Operators Onboarded</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">15k+</div><div style="font-size:13px;color:#666;">Merchants Active in First 90 Days</div></div>
</div>

<h3>The Context & The Friction</h3>
<p>A tier-1 digital payments and cross-border settlement provider with massive transaction volume across East Asia identified Indonesia as its critical Southeast Asian expansion pillar. Driven by surging bilateral trade and inbound cross-border transactions, the commercial opportunity was undisputed.</p>
<p>However, before engaging 8vice, the client had experienced two costly false starts spanning nearly 14 months. The challenges were typical of fast-moving tech entrants: attempting to copy-paste Shenzhen-style rapid deployment into Indonesia’s highly regulated financial landscape.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Most firms told us to wait 18 to 24 months for a standalone license. 8vice showed us how to decouple our entry architecture, sequencing local banking partnerships while building our long-term regulatory foundation."
</blockquote>

<h3>The Core Bottlenecks</h3>
<ul>
<li><strong>Regulatory Categorization:</strong> Misunderstanding the nuances between Bank Indonesia (BI) PJP licensing tiers and OJK sandbox guidelines had caused their legal team to file incorrect KBLI business classifications.</li>
<li><strong>QRIS & Interoperability Standards:</strong> Integration with Indonesia’s national payment standard (QRIS) and switching networks required deep local technical and compliance compliance that cannot be managed remotely.</li>
<li><strong>Headquarters vs. Ground Disconnect:</strong> The Mandarin-first product architecture team in Shenzhen struggled to communicate effectively with local Indonesian banking partners and clearing houses, causing multi-week technical stalls.</li>
</ul>

<h3>The 8vice Strategic Intervention</h3>
<p>Rather than advising a passive wait for multi-year license approvals, 8vice implemented a phased <strong>Dual-Track Entry Architecture</strong>:</p>

<h4>Phase 1: Diagnostic & Sponsor Banking Pathway (Month 1–2)</h4>
<p>We audited their API capabilities and identified an optimal local Tier-1 partner bank to act as the licensed co-sponsor under Bank Indonesia’s cross-border payment framework. This allowed immediate compliant market access while safeguarding user funds under domestic escrow.</p>

<h4>Phase 2: Local Operating Team Build-Out (Month 3–4)</h4>
<p>We built out the Indonesian operational nucleus—recruiting a veteran Head of Compliance with prior central bank engagement, a Senior Risk Architect, and bilingual technical integration leads who bridged daily communication between Shenzhen engineering and Jakarta servers.</p>

<h4>Phase 3: Live Merchant Pilots & Handover (Month 5–6)</h4>
<p>With sandbox testing cleared, we facilitated initial merchant acquisitions across Jakarta’s high-traffic commercial centers, luxury retail, and hospitality nodes, stress-testing payment settlement windows and FX hedging stability.</p>

<h3>The Results</h3>
<p>By month six, the client processed their first live end-to-end commercial transaction on Indonesian soil. What had historically taken foreign entrants 18 months was achieved in half a year—with complete regulatory goodwill, transparent corporate governance, and zero compliance penalties.</p>
<p>Today, the Indonesian operating company operates autonomously with 14 full-time in-market leaders and maintains an active pipeline covering over 15,000 merchant terminals nationwide.</p>',
                    'id' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">6 Bln</div><div style="font-size:13px;color:#666;">Perencanaan ke Operasional</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">3×</div><div style="font-size:13px;color:#666;">Lebih Cepat dari Upaya Sebelumnya</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">14</div><div style="font-size:13px;color:#666;">Talenta Kunci Lokal Direkrut</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">15rb+</div><div style="font-size:13px;color:#666;">Merchant Aktif di 90 Hari Pertama</div></div>
</div>

<h3>Konteks & Hambatan Awal</h3>
<p>Penyedia solusi pembayaran digital dan kliring transaksi lintas batas tier-1 asal Tiongkok melihat Indonesia sebagai pilar utama ekspansi di Asia Tenggara. Didorong oleh lonjakan perdagangan bilateral serta transaksi wisatawan mancanegara, potensi bisnis tidak diragukan lagi.</p>
<p>Namun sebelum bermitra dengan 8vice, klien sempat mengalami dua kali kebuntuan selama hampir 14 bulan. Hambatannya tipikal bagi pemain teknologi yang bergerak cepat: mencoba menduplikasi skema peluncuran kilat gaya Shenzhen ke lanskap regulasi keuangan Indonesia yang ketat dan berlapis.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Banyak konsultan menyarankan kami menunggu 18 hingga 24 bulan untuk perizinan mandiri. 8vice menunjukkan arsitektur penetrasi bertahap, menjembatani kemitraan perbankan lokal sembari membangun fondasi kepatuhan jangka panjang."
</blockquote>

<h3>Hambatan Utama</h3>
<ul>
<li><strong>Klasifikasi Regulasi:</strong> Kerancuan antara lisensi Penyedia Jasa Pembayaran (PJP) Bank Indonesia dan regulatory sandbox OJK menyebabkan kekeliruan pemilihan KBLI pada pengajuan awal.</li>
<li><strong>Standar Interoperabilitas QRIS:</strong> Integrasi dengan jaringan switching nasional dan standar QRIS membutuhkan kesiapan kepatuhan teknis domestik yang mustahil dikelola dari jarak jauh.</li>
<li><strong>Kesenjangan Komunikasi Kantor Pusat vs Lapangan:</strong> Tim arsitektur produk di Shenzhen mengalami kendala bahasa dan budaya kerja saat berkoordinasi dengan bank kustodi dan lembaga kliring di Jakarta.</li>
</ul>

<h3>Intervensi Strategis 8vice</h3>
<p>8vice merancang pendekatan <strong>Arsitektur Penetrasi Jalur-Ganda (Dual-Track Entry Architecture)</strong>:</p>

<h4>Fase 1: Diagnostik & Kemitraan Bank Sponsor (Bulan 1–2)</h4>
<p>Kami mengaudit arsitektur API klien dan mengidentifikasi Bank BUKU IV / KBMI 4 nasional terpercaya sebagai co-sponsor berlisensi di bawah koridor pembayaran lintas batas BI. Langkah ini membuka operasional legal seketika tanpa menanti perizinan mandiri.</p>

<h4>Fase 2: Pembentukan Tim Inti Lokal (Bulan 3–4)</h4>
<p>Kami merekrut talenta kunci lokal — Head of Compliance berpengalaman di perbankan sentral, Senior Risk Architect, serta Technical Account Lead bilingual Mandarin-Indonesia yang menjembatani komunikasi teknis harian.</p>

<h4>Fase 3: Uji Coba Transaksi Langsung & Handover (Bulan 5–6)</h4>
<p>Setelah lolos pengujian sandbox, kami memfasilitasi akuisisi merchant percontohan di pusat perbelanjaan utama Jakarta, jaringan ritel modern, dan ekosistem perhotelan untuk menguji ketahanan settlement serta lindung nilai kurs valas.</p>

<h3>Hasil Nyata</h3>
<p>Pada bulan keenam, transaksi komersial pertama berhasil diproses dengan mulus di Indonesia. Proses yang biasanya memakan waktu 18 bulan berhasil dipangkas menjadi setengah tahun — dengan kepatuhan hukum 100% dan tata kelola transparan.</p>
<p>Kini entitas operasional Indonesia beroperasi secara mandiri dengan 14 tenaga ahli lokal dan melayani lebih dari 15.000 titik merchant aktif di seluruh Indonesia.</p>'
                ]
            ],
            [
                'slug' => 'shelf-to-scale-across-40-cities',
                'cover' => '/images/cases/retail.webp',
                'tag' => [
                    'en' => 'Consumer Tech · Retail',
                    'id' => 'Teknologi Konsumen · Ritel'
                ],
                'h' => [
                    'en' => 'Shelf to Scale Across 40 Indonesian Cities.',
                    'id' => 'Ekspansi Distribusi Ritel ke 40 Kota di Indonesia.'
                ],
                'p' => [
                    'en' => 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.',
                    'id' => 'Strategi distribusi menyeluruh dan kemitraan kanal yang disesuaikan dengan pola belanja konsumen Indonesia.'
                ],
                'body' => [
                    'en' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">40+</div><div style="font-size:13px;color:#666;">Cities Covered Across Java & Outer Islands</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">650+</div><div style="font-size:13px;color:#666;">Modern & Traditional Retail Doors</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">4.2×</div><div style="font-size:13px;color:#666;">Annualized GMV Growth</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">98%</div><div style="font-size:13px;color:#666;">On-Time After-Sales Service Rate</div></div>
</div>

<h3>The Context & The Friction</h3>
<p>A global consumer electronics and smart TV manufacturer sought to challenge incumbent brands across Indonesia’s fast-expanding middle class. While they enjoyed high manufacturing efficiency and cost advantages, initial online-only flash sales in Jakarta failed to generate brand stickiness outside metropolitan centers.</p>
<p>In Indonesia, over 70% of home electronics purchases outside Tier-1 cities still rely on tactile in-store evaluations, trusted dealer relationships, and localized installment financing schemes.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Indonesia cannot be won on a single digital dashboard. 8vice connected us with regional distribution kings in Surabaya, Medan, and Makassar who actually command shelf space."
</blockquote>

<h3>The Core Bottlenecks</h3>
<ul>
<li><strong>Fragmented Regional Distribution:</strong> Traditional electronics distributors in provincial capitals operate on bespoke credit terms (consignment vs. 60-day tenor) that foreign brands frequently mismanage.</li>
<li><strong>After-Sales & Warranty Credibility:</strong> Indonesian consumers hesitate to invest in mid-ticket appliances without visible, authorized warranty service centers in their immediate regency.</li>
<li><strong>Price-Point Mismatch:</strong> Hardware specifications were optimized for European or Chinese bandwidth, needing localized firmware adjustments for Indonesian regional streaming platforms.</li>
</ul>

<h3>The 8vice Strategic Intervention</h3>
<h4>Phase 1: Channel Architecture & Regional Tiering (Month 1–2)</h4>
<p>We audited regional consumer demand across 12 provinces, dividing the target market into Tier-1 flagship modern retail (Jabodetabek, Surabaya, Bandung) and Tier-2/3 high-volume dealer networks (Central Java, North Sumatra, South Sulawesi).</p>

<h4>Phase 2: Master Distributor Matchmaking & Commercial Terms (Month 3–4)</h4>
<p>8vice introduced the client to 5 vetted regional master distributors, structuring risk-balanced consignment agreements with credit insurance backing. We negotiated guaranteed shelf placement and prominent brand display corners across 650+ retail storefronts.</p>

<h4>Phase 3: Nationwide Warranty Network & Localization (Month 5–8)</h4>
<p>We brokered a turnkey alliance with a premier third-party logistics and service center operator, providing localized drop-off points across 40 cities and standardizing a 7-day turnaround warranty guarantee that restored consumer confidence.</p>

<h3>The Results</h3>
<p>Within eight months of rollout, the brand achieved active retail presence in over 40 cities and 650+ retail storefronts. Offline sales channels unlocked a 4.2× surge in annualized GMV, proving that hybrid omnichannel strategies are non-negotiable for consumer brand dominance in the archipelago.</p>',
                    'id' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">40+</div><div style="font-size:13px;color:#666;">Kota Terjangkau di Jawa & Luar Jawa</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">650+</div><div style="font-size:13px;color:#666;">Toko Ritel Modern & Tradisional</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">4.2×</div><div style="font-size:13px;color:#666;">Pertumbuhan Penjualan (GMV)</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">98%</div><div style="font-size:13px;color:#666;">Tingkat Kepuasan Layanan Purnajual</div></div>
</div>

<h3>Konteks & Hambatan Awal</h3>
<p>Produsen elektronik dan smart TV global ingin bersaing di segmen pasar kelas menengah Indonesia yang berkembang sangat pesat. Meskipun memiliki keunggulan harga dan kapasitas produksi tinggi, penjualan awal yang hanya mengandalkan saluran digital di Jakarta gagal membangun loyalitas di luar kota-kota metropolitan.</p>
<p>Di Indonesia, lebih dari 70% pembelian barang elektronik di luar kota lapis pertama masih sangat bergantung pada uji coba langsung di toko, rekomendasi pedagang terpercaya, dan ketersediaan opsi cicilan lokal.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Pasar Indonesia tidak bisa dimenangkan hanya lewat dashboard digital di Jakarta. 8vice menghubungkan kami dengan distributor regional di Surabaya, Medan, dan Makassar yang menguasai ruang display toko."
</blockquote>

<h3>Hambatan Utama</h3>
<ul>
<li><strong>Fragmentasi Distribusi Daerah:</strong> Distributor tradisional di tingkat provinsi menerapkan skema kredit dan pembayaran tempo (30–60 hari) yang memerlukan mitigasi risiko khusus bagi prinsipal asing.</li>
<li><strong>Kekhawatiran Layanan Purnajual:</strong> Konsumen daerah enggan membeli perangkat pintar jika tidak memiliki titik pusat servis resmi di kabupaten atau kota tempat tinggal mereka.</li>
<li><strong>Penyesuaian Sistem & Aplikasi Lokal:</strong> Firmware smart TV perlu disesuaikan dengan koneksi internet broadband daerah serta aplikasi streaming yang populer di Indonesia.</li>
</ul>

<h3>Intervensi Strategis 8vice</h3>
<h4>Fase 1: Segmentasi Pasar & Pemetaan Wilayah (Bulan 1–2)</h4>
<p>Kami memetakan preferensi konsumen di 12 provinsi, membagi strategi antara ritel modern Tier-1 (Jabodetabek, Surabaya, Bandung) dan jaringan toko grosir elektronik Tier-2/3 (Jawa Tengah, Sumatra Utara, Sulawesi Selatan).</p>

<h4>Fase 2: Kemitraan Master Distributor Regional (Bulan 3–4)</h4>
<p>8vice menghubungkan prinsipal dengan 5 master distributor terpercaya, merancang kontrak distribusi yang melindungi margin kedua pihak. Kami mengamankan display khusus di lebih dari 650 gerai ritel terkemuka.</p>

<h4>Fase 3: Jaringan Servis Garansi 40 Kota (Bulan 5–8)</h4>
<p>Kami menjembatani kemitraan dengan penyedia layanan purnajual resmi nasional, menghadirkan titik drop-off garansi di 40 kota dengan jaminan perbaikan maksimal 7 hari kerja.</p>

<h3>Hasil Nyata</h3>
<p>Dalam kurun waktu delapan bulan, produk telah tersedia di lebih dari 40 kota dan 650 gerai ritel di seluruh Indonesia. Pendekatan omnichannel ini melipatgandakan omset tahunan hingga 4,2 kali lipat, mengukuhkan posisi merek di jajaran perangkat pintar terfavorit konsumen Indonesia.</p>'
                ]
            ],
            [
                'slug' => 'local-production-de-risked',
                'cover' => '/images/cases/manufacturing.webp',
                'tag' => [
                    'en' => 'Manufacturing · Operations',
                    'id' => 'Manufaktur · Operasional'
                ],
                'h' => [
                    'en' => 'Local Production, De-Risked.',
                    'id' => 'Manufaktur Lokal, Bebas Risiko.'
                ],
                'p' => [
                    'en' => 'Site selection, regulatory navigation, and a resilient supply chain for an industrial entrant.',
                    'id' => 'Pemilihan lokasi pabrik, kepatuhan regulasi TKDN, dan perancangan rantai pasok tangguh bagi industri manufaktur.'
                ],
                'body' => [
                    'en' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">42%</div><div style="font-size:13px;color:#666;">Verified TKDN Domestic Content Achieved</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">9 Mo</div><div style="font-size:13px;color:#666;">From Site Selection to Factory Groundbreaking</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">-32%</div><div style="font-size:13px;color:#666;">Logistics & Import Tariff Cost Savings</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">Environmental (AMDAL) & Industrial Permits Cleared</div></div>
</div>

<h3>The Context & The Friction</h3>
<p>With tightening domestic component level (TKDN) regulations and government procurement quotas favoring Indonesian-made goods, an industrial equipment and precision assembly manufacturer faced declining import quotas. Relocating a portion of their manufacturing line from the Pearl River Delta to Java was a strategic imperative.</p>
<p>However, industrial relocation involves high capital expenditures, complex land title due diligence (HGB/HPL), environmental impact assessments (AMDAL), and regional labor union dynamics.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Choosing the wrong industrial estate could have locked us into prohibitive logistic bottlenecks for a decade. 8vice provided unbiased financial models comparing Kendal, Batang, and Cikarang down to power redundancy and port trucking tariffs."
</blockquote>

<h3>The Core Bottlenecks</h3>
<ul>
<li><strong>Industrial Park Selection:</strong> Disparities in regional minimum wages (UMR) between West Java and Central Java had to be balanced against container haulage lead-times to Tanjung Priok and Tanjung Emas ports.</li>
<li><strong>TKDN Algorithm & Certification:</strong> Calculating domestic value-add across raw material procurement, local labor hours, and component sub-assemblies requires meticulous Ministry of Industry compliance.</li>
<li><strong>Licensing Sequencing:</strong> Navigating OSS RBA (Risk-Based Approach), building approval (PBG), and environmental certifications simultaneously without administrative stall.</li>
</ul>

<h3>The 8vice Strategic Intervention</h3>
<h4>Phase 1: Location Due Diligence & Economic Modeling (Month 1–3)</h4>
<p>8vice conducted an exhaustive comparison across five candidate Special Economic Zones (SEZs) and Integrated Industrial Estates in Central and West Java. We evaluated tax incentives, labor availability, reliable green energy supply, and multimodal container connectivity, steering the client to a prime industrial zone with tax holiday eligibility.</p>

<h4>Phase 2: TKDN Engineering & Local Supply Network (Month 4–6)</h4>
<p>Our operational advisory team reverse-engineered the product bill of materials (BOM), identifying certified local Indonesian suppliers for packaging, metal stamping, and sub-assemblies to systematically exceed the mandatory 40% threshold.</p>

<h4>Phase 3: Turnkey Permitting & Industrial Launch (Month 7–9)</h4>
<p>We managed the complete documentation dossier for BKPM, Ministry of Industry, and regional regency offices, clearing AMDAL and industrial building permits without procedural delays.</p>

<h3>The Results</h3>
<p>The facility celebrated its official groundbreaking in month 9, achieving a verified TKDN rating of 42%. This certified status unlocked direct participation in Indonesian government tenders and state-owned enterprise (BUMN) supply chains, saving 32% in import tariffs and solidifying their long-term position in Indonesia.</p>',
                    'id' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">42%</div><div style="font-size:13px;color:#666;">Sertifikasi TKDN Terverifikasi</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">9 Bln</div><div style="font-size:13px;color:#666;">Dari Pemilihan Lokasi ke Peletakan Batu Pertama</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">-32%</div><div style="font-size:13px;color:#666;">Efisiensi Biaya Logistik & Bea Masuk</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">Kepatuhan AMDAL & Izin Kawasan Industri</div></div>
</div>

<h3>Konteks & Hambatan Awal</h3>
<p>Seiring diperketatnya kewajiban Tingkat Komponen Dalam Negeri (TKDN) serta prioritas pengadaan barang pemerintah untuk produk ber-TKDN tinggi, produsen peralatan industri asal Tiongkok menghadapi pembatasan kuota impor. Memindahkan sebagian lini perakitan ke Pulau Jawa menjadi langkah penting untuk mempertahankan pangsa pasar.</p>
<p>Namun, relokasi fasilitas industri membutuhkan investasi belanja modal yang besar, uji tuntas sertifikat lahan (HGB/HPL), persetujuan lingkungan (AMDAL), serta penyesuaian regulasi ketenagakerjaan daerah.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Salah memilih kawasan industri bisa menimbulkan kendala logistik berkepanjangan. 8vice menyajikan analisis komparatif mendalam antara kawasan di Kendal, Batang, dan Cikarang — dari kestabilan pasokan listrik hingga biaya angkut pelabuhan."
</blockquote>

<h3>Hambatan Utama</h3>
<ul>
<li><strong>Perbandingan Lokasi Pabrik:</strong> Kesenjangan Upah Minimum Regional (UMR) antara Jawa Barat dan Jawa Tengah harus diimbangi dengan perhitungan waktu tempuh kontainer ke pelabuhan ekspor/impor.</li>
<li><strong>Formulasi TKDN:</strong> Memenuhi standar perhitungan Kementerian Perindustrian mencakup proporsi bahan baku lokal, jam kerja tenaga kerja domestik, serta sub-komponen mesin.</li>
<li><strong>Izin Berkelanjutan OSS:</strong> Memproses Persetujuan Bangunan Gedung (PBG), izin lingkungan AMDAL, dan kepatuhan OSS RBA tanpa menghambat tenggat waktu proyek.</li>
</ul>

<h3>Intervensi Strategis 8vice</h3>
<h4>Fase 1: Uji Kelayakan Lokasi & Model Finansial (Bulan 1–3)</h4>
<p>8vice membandingkan lima Kawasan Ekonomi Khusus (KEK) dan Kawasan Industri Terpadu di Jawa Tengah dan Jawa Barat. Kami membedah insentif pajak (tax holiday/allowance), ketersediaan tenaga kerja teknis, serta keandalan pasokan energi hijau, membantu klien memilih lokasi dengan efisiensi jangka panjang terbaik.</p>

<h4>Fase 2: Optimasi Rantai Pasok Lokal & TKDN (Bulan 4–6)</h4>
<p>Tim konsultan operasional kami menyusun ulang struktur Bill of Materials (BOM), menghubungkan prinsipal dengan pemasok lokal untuk komponen cetakan logam, suku cadang plastik, dan kemasan guna melampaui ambang batas 40% TKDN.</p>

<h4>Fase 3: Penyelesaian Izin Terpadu & Groundbreaking (Bulan 7–9)</h4>
<p>Kami mengawal proses perizinan di Kementerian Investasi/BKPM, Kementerian Perindustrian, dan pemerintah daerah hingga terbitnya seluruh izin operasional.</p>

<h3>Hasil Nyata</h3>
<p>Pabrik baru berhasil melaksanakan peletakan batu pertama pada bulan ke-9 dengan sertifikasi TKDN terverifikasi sebesar 42%. Klien kini dapat berpartisipasi langsung dalam proyek tender BUMN dan pengadaan pemerintah, memangkas biaya bea masuk sebesar 32%, dan mengamankan kepemimpinan pasar industri di Indonesia.</p>'
                ]
            ],
            [
                'slug' => 'enterprise-saas-cross-border-collaboration',
                'cover' => '/images/challenges_insights.webp',
                'tag' => [
                    'en' => 'Enterprise SaaS · Tech',
                    'id' => 'SaaS Korporat · Teknologi'
                ],
                'h' => [
                    'en' => 'Enterprise SaaS Localization Without Data Friction.',
                    'id' => 'Lokalisasi SaaS Korporat Tanpa Hambatan Kedaulatan Data.'
                ],
                'p' => [
                    'en' => 'Data sovereignty compliance, enterprise sales playbook, and multinational team collaboration.',
                    'id' => 'Kepatuhan UU PDP, strategi penjualan B2B korporasi, dan integrasi kolaborasi tim lintas batas.'
                ],
                'body' => [
                    'en' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">UU PDP (Data Protection) Compliance</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">35+</div><div style="font-size:13px;color:#666;">Top Tier Indonesian Enterprises Onboarded</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">4 Mo</div><div style="font-size:13px;color:#666;">Cloud Architecture & Compliance Restructure</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">99.9%</div><div style="font-size:13px;color:#666;">Data Localization & Security Audit Score</div></div>
</div>

<h3>The Context & The Friction</h3>
<p>As corporate work environments evolved, a leading Asian workplace communication and enterprise productivity platform sought to expand into Indonesia’s burgeoning corporate technology landscape. With hundreds of multinational joint ventures operating in mining, manufacturing, and logistics, the commercial demand for cross-border collaboration software was acute.</p>
<p>However, the enactment of Indonesia’s Personal Data Protection Act (UU PDP No. 27/2022) created stringent obligations around cross-border data transfer, local server residency, and corporate data sovereignty that paralyzed their initial enterprise sales pipeline.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Indonesian conglomerates were eager to use our collaboration platform, but their legal teams demanded ironclad proof of local data residency. 8vice architected the exact hybrid deployment model that satisfied corporate CIOs and state regulators."
</blockquote>

<h3>The Core Bottlenecks</h3>
<ul>
<li><strong>Data Sovereignty & Cross-Border Cloud:</strong> Transmitting corporate communications outside Indonesian borders without an approved transfer mechanism triggered compliance red flags during enterprise procurement audits.</li>
<li><strong>Enterprise Sales Culture:</strong> B2B enterprise tech sales in Indonesia depend on multi-tiered relationship management, local system integrator (SI) alliances, and compliant government e-katalog onboarding.</li>
<li><strong>Product Localization:</strong> Beyond simple translation, enterprise features needed integration with local Indonesian tax reporting, BPJS payroll structures, and local enterprise single sign-on (SSO) standards.</li>
</ul>

<h3>The 8vice Strategic Intervention</h3>
<h4>Phase 1: PDP Regulatory Audit & Cloud Architecture Alignment (Month 1–2)</h4>
<p>8vice conducted an exhaustive privacy and legal compliance review under UU PDP and Kominfo guidelines. We advised the engineering team to deploy a dedicated domestic cloud instance within Jakarta data centers, ensuring primary data storage remained on Indonesian soil.</p>

<h4>Phase 2: Enterprise Channel Alliances & SI Onboarding (Month 3)</h4>
<p>We structured authorized reseller and implementation agreements with three premier Indonesian IT managed service providers and systems integrators, equipping them with localized value-proposition battle cards.</p>

<h4>Phase 3: High-Value Enterprise Pilots & Trust Seal (Month 4)</h4>
<p>We guided client presentations to leading Indonesian manufacturing conglomerates and logistics operators, facilitating pilot deployments across 10,000+ active enterprise seats.</p>

<h3>The Results</h3>
<p>With data residency concerns resolved, the platform closed over 35 enterprise contracts within the first two quarters. The localized hybrid cloud architecture set a gold standard for cross-border software providers entering Indonesia’s regulated corporate sector.</p>',
                    'id' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">Kepatuhan UU Pelindungan Data Pribadi</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">35+</div><div style="font-size:13px;color:#666;">Korporasi Nasional Mulai Menggunakan</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">4 Bln</div><div style="font-size:13px;color:#666;">Restrukturisasi Kepatuhan & Cloud Domestik</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">99.9%</div><div style="font-size:13px;color:#666;">Skor Keamanan & Audit Kedaulatan Data</div></div>
</div>

<h3>Konteks & Hambatan Awal</h3>
<p>Seiring transformasi digital di dunia kerja, platform komunikasi korporat dan kolaborasi kerja terkemuka asal Asia bermaksud memperluas pangsa pasar ke Indonesia. Banyaknya kemitraan bisnis dan perusahaan multinasional di sektor pertambangan, manufaktur, dan logistik membuka peluang besar bagi perangkat lunak kolaborasi kerja lintas negara.</p>
<p>Namun, diberlakukannya Undang-Undang Pelindungan Data Pribadi (UU PDP No. 27/2022) menetapkan regulasi ketat mengenai transfer data lintas batas, lokasi penyimpanan data domestik, dan kedaulatan data korporasi yang sempat menahan laju tim penjualan B2B.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Grup korporasi Indonesia sangat antusias menggunakan sistem kami, tetapi tim legal mereka mensyaratkan bukti kepatuhan kedaulatan data lokal. 8vice menyusun model arsitektur cloud hybrid yang menjawab seluruh kekhawatiran regulasi."
</blockquote>

<h3>Hambatan Utama</h3>
<ul>
<li><strong>Kedaulatan Data & Cloud Lintas Batas:</strong> Pengiriman data komunikasi bisnis ke server luar negeri tanpa mekanisme persetujuan memicu keraguan dari divisi kepatuhan dan keamanan siber korporasi.</li>
<li><strong>Budaya Penjualan B2B Korporasi:</strong> Penjualan software korporasi di Indonesia sangat bergantung pada kemitraan lokal dengan System Integrator (SI) serta kemudahan integrasi dengan vendor IT lokal.</li>
<li><strong>Lokalisasi Fitur Kerja:</strong> Perlu adanya penyesuaian sistem dengan administrasi ketenagakerjaan Indonesia, seperti perhitungan slip gaji BPJS dan integrasi sistem perpajakan domestik.</li>
</ul>

<h3>Intervensi Strategis 8vice</h3>
<h4>Fase 1: Audit Regulasi UU PDP & Arsitektur Cloud (Bulan 1–2)</h4>
<p>8vice melakukan kajian hukum menyeluruh berdasarkan ketentuan UU PDP dan pedoman Kominfo. Kami merekomendasikan pembentukan klaster pusat data lokal di Jakarta guna memastikan data penting tersimpan aman di yurisdiksi Indonesia.</p>

<h4>Fase 2: Kemitraan Strategis System Integrator (Bulan 3)</h4>
<p>Kami memfasilitasi perjanjian kemitraan resmi dengan tiga penyedia layanan IT dan sistem integrator terkemuka di Indonesia, melengkapi mereka dengan strategi penjualan B2B yang tepat.</p>

<h4>Fase 3: Implementasi Pilot di Konglomerasi (Bulan 4)</h4>
<p>Kami mendampingi proses presentasi teknis ke grup korporasi terkemuka di sektor manufaktur dan logistik, mengawal uji coba sistem untuk lebih dari 10.000 pengguna aktif perusahaan.</p>

<h3>Hasil Nyata</h3>
<p>Dengan terselesaikannya kepatuhan data domestik, platform berhasil menandatangani lebih dari 35 kontrak korporat besar dalam dua kuartal pertama. Model penerapan ini menjadi rujukan utama bagi penyedia SaaS global yang berekspansi ke Indonesia.</p>'
                ]
            ],
            [
                'slug' => 'digital-ip-and-entertainment-syndication',
                'cover' => '/images/video_manifesto_cover.webp',
                'tag' => [
                    'en' => 'Creative IP · Media',
                    'id' => 'IP Kreatif · Media'
                ],
                'h' => [
                    'en' => 'Syndicating Global Creative IP to Indonesian Audiences.',
                    'id' => 'Sindikasi Konten Kreatif dan IP Global untuk Pemirsa Indonesia.'
                ],
                'p' => [
                    'en' => 'Broadcast licensing, localized dubbing & cultural resonance, and multi-platform distribution.',
                    'id' => 'Perizinan sensor siaran LSF, lokalisasi pengalihan suara & budaya, serta sindikasi multiplatform digital.'
                ],
                'body' => [
                    'en' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">25M+</div><div style="font-size:13px;color:#666;">Cumulative Viewership Across Broadcast & OTT</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">3</div><div style="font-size:13px;color:#666;">National Free-to-Air & OTT Platforms Syndicated</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">Film Censorship Board (LSF) Clearance</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">12</div><div style="font-size:13px;color:#666;">Local Consumer Goods Licensing Partnerships</div></div>
</div>

<h3>The Context & The Friction</h3>
<p>An internationally recognized animation studio and digital entertainment powerhouse sought to syndicate its hit children’s animated series and family IP across Indonesia. With over 80 million youths and a deeply family-centric culture, Indonesia represents one of the world\'s most vibrant markets for digital content consumption.</p>
<p>However, foreign intellectual property cannot simply be broadcast as-is. Content entrants must navigate strict cultural censorship standards from Lembaga Sensor Film (LSF), complex broadcast quotas under the Indonesian Broadcasting Commission (KPI), and nuanced consumer merchandise licensing rights.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Direct translation fails with creative IP. 8vice helped us capture the humor, emotional warmth, and cultural cues that made our characters feel like part of Indonesian childhood memories."
</blockquote>

<h3>The Core Bottlenecks</h3>
<ul>
<li><strong>Regulatory Broadcast Clearance:</strong> Indonesian censorship laws require meticulous frame-by-frame compliance review to align with local family entertainment norms and religious sensitivities.</li>
<li><strong>Voice Localization Quality:</strong> Generic dubbing sounds unnatural and disconnected. Indonesian children gravitate towards recognizable local vocal nuances and colloquial comedic timing.</li>
<li><strong>Monetization & Syndication Rights:</strong> Structuring multi-tiered distribution across Free-to-Air (FTA) television, local OTT streaming platforms, and downstream merchandise licensing.</li>
</ul>

<h3>The 8vice Strategic Intervention</h3>
<h4>Phase 1: Cultural Audit & LSF Compliance (Month 1–2)</h4>
<p>8vice conducted a pre-censorship review of 52 animated episodes, advising creative edits on visual elements and dialogue to ensure smooth clearance with the Film Censorship Board (LSF) without diminishing artistic storytelling integrity.</p>

<h4>Phase 2: Master Studio Dubbing & Talent Casting (Month 3)</h4>
<p>We partnered with premier Jakarta recording studios and seasoned voice actors, adapting script dialogue into natural, warm Indonesian idioms while preserving the original personality of each character.</p>

<h4>Phase 3: Multi-Platform Syndication & IP Licensing (Month 4–6)</h4>
<p>8vice brokered syndication deals with a leading national television network and two top regional OTT streaming apps. In parallel, we connected the IP owners with reputable local manufacturers for licensed back-to-school merchandise and toys.</p>

<h3>The Results</h3>
<p>The series premiered nationwide to stellar ratings, exceeding 25 million cumulative viewers within its first season. Secondary merchandising licensing generated self-sustaining royalty streams, proving that when global creative IP is treated with deep cultural empathy, Indonesian audiences embrace it wholeheartedly.</p>',
                    'id' => '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;background:#f8f9fa;border-left:4px solid var(--color-red);padding:24px;border-radius:8px;margin-bottom:36px;">
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">25Jt+</div><div style="font-size:13px;color:#666;">Total Penayangan di Televisi & OTT</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">3</div><div style="font-size:13px;color:#666;">Jaringan TV Nasional & Platform OTT Terhubung</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">100%</div><div style="font-size:13px;color:#666;">Lolos Sensor Lembaga Sensor Film (LSF)</div></div>
<div><div style="font-size:28px;font-weight:800;color:var(--color-ink);">12</div><div style="font-size:13px;color:#666;">Kemitraan Lisensi Merchandise Lokal</div></div>
</div>

<h3>Konteks & Hambatan Awal</h3>
<p>Studio animasi dan hiburan digital terkemuka internasional ingin mensindikasikan serial animasi anak populer dan kekayaan intelektual (IP) keluarga ke pasar Indonesia. Dengan lebih dari 80 juta populasi generasi muda dan budaya keluarga yang erat, Indonesia adalah salah satu pasar konten paling dinamis di dunia.</p>
<p>Namun penayangan konten kreatif global di Indonesia memerlukan penyesuaian khusus. Konten harus mematuhi standar Lembaga Sensor Film (LSF), pedoman Komisi Penyiaran Indonesia (KPI), serta strategi pengalihan suara (dubbing) yang beresonansi dengan anak-anak Indonesia.</p>

<blockquote style="margin:32px 0;padding:20px 24px;border-left:4px solid var(--color-red);background:#fff5f5;font-style:italic;font-size:18px;color:#222;">
"Menerjemahkan kata demi kata tidak cukup untuk konten kreatif. 8vice membantu kami menangkap kehangatan emosional dan humor yang membuat karakter kami disukai anak-anak Indonesia."
</blockquote>

<h3>Hambatan Utama</h3>
<ul>
<li><strong>Persetujuan Sensor Siar LSF:</strong> Regulasi sensor di Indonesia memperhatikan nilai-nilai kesopanan, budaya ramah anak, dan norma keluarga yang memerlukan tinjauan materi sebelum disiarkan.</li>
<li><strong>Kualitas Pengalihan Suara (Dubbing):</strong> Dubbing kaku membuat tayangan kurang menarik bagi penonton muda yang terbiasa dengan dialog ekspresif dan bersahabat.</li>
<li><strong>Struktur Hak Siar & Monetisasi Lisensi:</strong> Mengatur hak distribusi simultan antara stasiun televisi terestrial (FTA), platform streaming berlangganan (OTT), dan lisensi produk konsumen.</li>
</ul>

<h3>Intervensi Strategis 8vice</h3>
<h4>Fase 1: Tinjauan Budaya & Pengawalan Sensor LSF (Bulan 1–2)</h4>
<p>8vice meninjau 52 episode serial animasi, merekomendasikan penyesuaian kreatif pada dialog dan adegan agar lolos sensor LSF secara mulus tanpa mengurangi daya tarik alur cerita.</p>

<h4>Fase 2: Standarisasi Suara & Lokalisasi Dialog (Bulan 3)</h4>
<p>Kami bekerja sama dengan studio rekaman terkemuka di Jakarta dan pengisi suara profesional untuk menghasilkan dialog bahasa Indonesia yang natural, hangat, dan menghibur bagi anak-anak.</p>

<h4>Fase 3: Distribusi Multi-Platform & Lisensi Merchandise (Bulan 4–6)</h4>
<p>8vice menjembatani kesepakatan hak siar dengan salah satu stasiun televisi swasta nasional dan dua aplikasi streaming digital teratas. Secara paralel, kami menghubungkan pemilik IP dengan produsen perlengkapan sekolah dan mainan lokal untuk meluncurkan produk resmi berlisensi.</p>

<h3>Hasil Nyata</h3>
<p>Serial animasi berhasil tayang secara nasional dan mengumpulkan lebih dari 25 juta penonton pada musim pertamanya. Penjualan produk berlisensi di gerai ritel modern membuka aliran pendapatan baru yang berkelanjutan, membuktikan bahwa pendekatan budaya yang tepat adalah kunci kesuksesan IP global di Indonesia.</p>'
                ]
            ]
        ];

        foreach ($cases as $caseData) {
            CaseStudy::updateOrCreate(
                ['slug' => $caseData['slug']],
                $caseData
            );
        }
    }
}
