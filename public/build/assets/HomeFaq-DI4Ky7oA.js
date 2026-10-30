import{d as e,l as t,n}from"./app-B-hY4Qxa.js";import{t as r}from"./LocalizedLink-kABDPLZf.js";var i=e(t(),1),a=n();function o({isId:e=!1,fullSection:t=!1}){let[n,r]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=e=>{e.key===`Escape`&&r(!1)};return n?(window.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[n]);let o=e?{eyebrow:`MANIFESTO KAMI · 02:48`,quote_1:`Intelijen pasar`,quote_2:` bukanlah sebuah fitur.`,quote_3:`Itu adalah seluruh produk kami.`,sub:`Film 3 menit mengenai alasan mengapa kami beroperasi dan bagaimana kami menghubungkan realitas komersial antara Indonesia dan China.`,play:`Putar Video Manifesto`}:{eyebrow:`OUR MANIFESTO · 02:48`,quote_1:`Market intelligence`,quote_2:` is not a feature.`,quote_3:`It is our entire product.`,sub:`A 3-minute film on why we operate this way and how we connect commercial reality across Indonesia and China.`,play:`Watch Video Manifesto`};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .manifesto-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #0D0E12;
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55), 0 0 80px rgba(230, 57, 70, 0.12);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease;
        }
        .manifesto-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 57, 70, 0.45);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 100px rgba(230, 57, 70, 0.22);
        }
        .manifesto-full-section {
          position: relative;
          overflow: hidden;
          background: #07080A;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        .manifesto-full-section:hover .manifesto-bg-img {
          opacity: 0.52 !important;
          transform: scale(1.025);
        }
        .manifesto-full-section:hover .manifesto-play-pulse {
          transform: scale(1.1);
          background: #E63946;
          color: #FFFFFF;
        }
        .manifesto-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.38;
          transition: opacity 0.5s ease, transform 0.7s ease;
        }
        .manifesto-card:hover .manifesto-bg-img {
          opacity: 0.48;
          transform: scale(1.03);
        }
        .manifesto-play-pulse {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #0A0A0C;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
        }
        .manifesto-play-pulse::before {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.4);
          animation: manifestoPulse 2.4s infinite ease-out;
          z-index: -1;
        }
        .manifesto-card:hover .manifesto-play-pulse {
          transform: scale(1.08);
          background: #E63946;
          color: #FFFFFF;
        }
        @keyframes manifestoPulse {
          0% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.2; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}}),t?(0,a.jsxs)(`section`,{className:`section manifesto-full-section`,onClick:()=>r(!0),role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&r(!0)},"aria-label":o.play,style:{position:`relative`,overflow:`hidden`,backgroundColor:`#07080A`,color:`#FFFFFF`,paddingBlock:`110px`,borderTop:`1px solid rgba(255, 255, 255, 0.08)`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,cursor:`pointer`},children:[(0,a.jsx)(`img`,{src:`/images/video_manifesto_cover.webp`,alt:`8 Vice Video Manifesto`,className:`manifesto-bg-img`}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg, rgba(7, 8, 10, 0.88) 0%, rgba(7, 8, 10, 0.65) 50%, rgba(214, 40, 40, 0.38) 100%)`,pointerEvents:`none`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(ellipse 85% 70% at 50% 50%, transparent 35%, rgba(7, 8, 10, 0.75) 100%)`,pointerEvents:`none`}}),(0,a.jsx)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,justifyContent:`space-between`,minHeight:`340px`,gap:`48px`},children:[(0,a.jsx)(`div`,{children:(0,a.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.18)`,border:`1px solid rgba(230, 57, 70, 0.35)`,padding:`6px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,backdropFilter:`blur(8px)`},children:[(0,a.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`,boxShadow:`0 0 8px #E63946`}}),o.eyebrow]})}),(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`32px`},children:[(0,a.jsxs)(`div`,{style:{maxWidth:`880px`,flex:`1 1 500px`},children:[(0,a.jsxs)(`h3`,{style:{fontFamily:`"Plus Jakarta Sans", system-ui, sans-serif`,fontSize:`clamp(24px, 3vw, 40px)`,lineHeight:1.25,color:`#FFFFFF`,fontWeight:300,margin:`0 0 16px 0`,textShadow:`0 4px 24px rgba(0, 0, 0, 0.75)`},children:[(0,a.jsxs)(`span`,{style:{display:`block`},children:[(0,a.jsx)(`span`,{style:{color:`#E63946`,fontWeight:700,fontStyle:`italic`,textShadow:`0 0 30px rgba(230, 57, 70, 0.5)`},children:o.quote_1}),o.quote_2]}),(0,a.jsx)(`span`,{style:{display:`block`,fontWeight:700,marginTop:`4px`},children:o.quote_3})]}),(0,a.jsx)(`p`,{style:{fontSize:`16px`,color:`rgba(255, 255, 255, 0.8)`,lineHeight:1.65,margin:0,maxWidth:`620px`},children:o.sub})]}),(0,a.jsx)(`div`,{className:`manifesto-play-pulse`,"aria-hidden":`true`,style:{width:`84px`,height:`84px`},children:(0,a.jsx)(`svg`,{width:`30`,height:`30`,viewBox:`0 0 24 24`,fill:`currentColor`,style:{marginLeft:`4px`},children:(0,a.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})})})]})]})})]}):(0,a.jsx)(`section`,{id:`manifesto`,className:`section`,style:{background:`radial-gradient(ellipse 70% 50% at 50% 50%, rgba(214, 40, 40, 0.12) 0%, transparent 70%), #0A0B0E`,color:`#FFFFFF`,paddingBlock:`100px`,borderBottom:`1px solid rgba(255, 255, 255, 0.06)`,position:`relative`},children:(0,a.jsx)(`div`,{className:`container`,children:(0,a.jsxs)(`div`,{className:`manifesto-card`,onClick:()=>r(!0),role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&r(!0)},"aria-label":o.play,style:{minHeight:`440px`,padding:`clamp(32px, 5vw, 64px)`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:[(0,a.jsx)(`img`,{src:`/images/video_manifesto_cover.webp`,alt:`8 Vice Video Manifesto`,className:`manifesto-bg-img`}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg, rgba(10, 12, 16, 0.85) 0%, rgba(10, 12, 16, 0.6) 50%, rgba(214, 40, 40, 0.35) 100%)`,pointerEvents:`none`}}),(0,a.jsx)(`div`,{style:{position:`relative`,zIndex:2},children:(0,a.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.18)`,border:`1px solid rgba(230, 57, 70, 0.35)`,padding:`6px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,backdropFilter:`blur(8px)`},children:[(0,a.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`,boxShadow:`0 0 8px #E63946`}}),o.eyebrow]})}),(0,a.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`32px`},children:[(0,a.jsxs)(`div`,{style:{maxWidth:`880px`,flex:`1 1 500px`},children:[(0,a.jsxs)(`h3`,{style:{fontFamily:`"Plus Jakarta Sans", system-ui, sans-serif`,fontSize:`clamp(22px, 2.8vw, 38px)`,lineHeight:1.25,color:`#FFFFFF`,fontWeight:300,margin:`0 0 16px 0`,textShadow:`0 4px 20px rgba(0, 0, 0, 0.7)`},children:[(0,a.jsxs)(`span`,{style:{display:`block`},children:[(0,a.jsx)(`span`,{style:{color:`#E63946`,fontWeight:600,fontStyle:`italic`,textShadow:`0 0 25px rgba(230, 57, 70, 0.4)`},children:o.quote_1}),o.quote_2]}),(0,a.jsx)(`span`,{style:{display:`block`,fontWeight:600,marginTop:`4px`},children:o.quote_3})]}),(0,a.jsx)(`p`,{style:{fontSize:`15px`,color:`rgba(255, 255, 255, 0.75)`,lineHeight:1.6,margin:0,maxWidth:`580px`},children:o.sub})]}),(0,a.jsx)(`div`,{className:`manifesto-play-pulse`,"aria-hidden":`true`,children:(0,a.jsx)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 24 24`,fill:`currentColor`,style:{marginLeft:`3px`},children:(0,a.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})})})]})]})})}),n&&(0,a.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:9999,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(0, 0, 0, 0.92)`,backdropFilter:`blur(12px)`,animation:`fadeInModal 0.25s ease`},onClick:()=>r(!1),children:[(0,a.jsx)(`button`,{onClick:()=>r(!1),"aria-label":`Close video`,style:{position:`absolute`,top:`28px`,right:`28px`,background:`rgba(255, 255, 255, 0.1)`,border:`1px solid rgba(255, 255, 255, 0.2)`,color:`#FFFFFF`,borderRadius:`50%`,width:`44px`,height:`44px`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,zIndex:1e4,transition:`background 0.2s ease`},children:(0,a.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,a.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,a.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,a.jsx)(`div`,{style:{width:`92%`,maxWidth:`1040px`,aspectRatio:`16 / 9`,backgroundColor:`#000000`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`0 30px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 57, 70, 0.3)`},onClick:e=>e.stopPropagation(),children:(0,a.jsx)(`iframe`,{width:`100%`,height:`100%`,src:`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`,title:`8 Vice Strategic Video Manifesto`,frameBorder:`0`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0})})]})]})}function s({isId:e=!1,insights:t=[]}){let n=t&&t.length>0?t.slice(0,3):[{cat:e?`Regulasi & Kepatuhan`:`Regulatory & Technology`,rt:`8 min read`,date:`August 2026`,t:e?`Panduan Kepatuhan UU Perlindungan Data Pribadi (UU PDP) untuk Penyedia SaaS Lintas Negara`:`Cross-Border Data Compliance in Indonesia: Deciphering the Personal Data Protection Law (UU PDP)`,excerpt:e?`Panduan praktis kepatuhan UU PDP: kewajiban lokalisasi data, penunjukan Data Protection Officer (DPO), dan protokol transfer data bilateral.`:`A pragmatic compliance guide to Law No. 27/2022 (UU PDP): local data residency mandates, mandatory DPO appointments, and bilateral data transfer protocols.`,cover:`/images/project_analysis.webp`,slug:`indonesia-pdp-data-protection-compliance-guide`},{cat:e?`Rantai Pasok & Manufaktur`:`Operations & Supply Chain`,rt:`11 min read`,date:`July 2026`,t:e?`Pemilihan Kawasan Industri di Jawa vs Luar Jawa: Produktivitas Tenaga Kerja & Akses Pelabuhan`:`Industrial Estate Site Selection in Java vs. Outer Islands: Labor Productivity and Port Access`,excerpt:e?`Analisis komparatif kawasan industri Kendal, Batang, dan Subang Smartpolitan untuk relokasi fasilitas manufaktur dan efisiensi logistik.`:`A comparative benchmark of Central Java (Kendal, Batang), West Java (Subang), and Sulawesi for manufacturing relocations and logistics efficiency.`,cover:`/images/video_manifesto_cover.webp`,slug:`indonesia-industrial-park-site-selection-java-kendal-batang`},{cat:e?`Keuangan & FinTech`:`Finance & Tech`,rt:`7 min read`,date:`May 2026`,t:e?`Pembayaran Lintas Batas: Masa Depan Interoperabilitas QRIS Indonesia–China & LCS`:`Cross-Border Payments: The Future of Indonesia-China QRIS Interoperability & Local Currency Settlement`,excerpt:e?`Bagaimana kerangka kerja sama Bank Indonesia dan PBOC mengeliminasi friksi valuta asing untuk pariwisata, e-commerce, dan penyelesaian perdagangan.`:`How Bank Indonesia and PBOC's bilateral QR code interoperability and Local Currency Settlement (LCS) framework eliminate FX friction for cross-border trade.`,cover:`/images/challenges_insights.webp`,slug:`cross-border-payments-qris`}],i=e?{eyebrow:`INTELIJEN PASAR & WAWASAN`,title:`Wawasan Strategis Terkini dari Koridor Bilateral`,subtitle:`Laporan analisis mendalam, panduan kepatuhan regulasi, dan intelijen pasar untuk memandu keputusan ekspansi Anda.`,cta_all:`Lihat Seluruh Artikel & Laporan`,read_more:`Baca Analisis`}:{eyebrow:`MARKET INTELLIGENCE & INSIGHTS`,title:`Latest Strategic Analysis from the Bilateral Corridor`,subtitle:`In-depth research reports, regulatory briefings, and commercial intelligence de-risking your cross-border roadmap.`,cta_all:`View All Insights & Reports`,read_more:`Read Analysis`};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .home-article-card {
          background: #0E1015;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .home-article-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230, 57, 70, 0.4);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(230, 57, 70, 0.15);
        }
        .home-article-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.5;
          overflow: hidden;
          background: #14161C;
        }
        .home-article-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .home-article-card:hover .home-article-thumb-img {
          transform: scale(1.05);
        }
        .home-article-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(10, 12, 16, 0.78);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #FF8A8A;
        }
      `}}),(0,a.jsx)(`section`,{className:`section`,id:`articles`,style:{background:`#090A0D`,color:`#FFFFFF`,paddingBlock:`108px`,borderBottom:`1px solid rgba(255, 255, 255, 0.06)`,position:`relative`},children:(0,a.jsxs)(`div`,{className:`container`,children:[(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`24px`,marginBottom:`56px`},children:[(0,a.jsxs)(`div`,{className:`m3-header`,style:{maxWidth:`680px`},children:[(0,a.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.12)`,border:`1px solid rgba(230, 57, 70, 0.3)`,padding:`5px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,marginBottom:`14px`},children:[(0,a.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`}}),i.eyebrow]}),(0,a.jsx)(`h2`,{style:{fontSize:`clamp(28px, 3.4vw, 42px)`,fontWeight:700,letterSpacing:`-0.02em`,lineHeight:1.2,marginBottom:`14px`},children:i.title}),(0,a.jsx)(`p`,{style:{fontSize:`16px`,lineHeight:1.65,color:`rgba(255, 255, 255, 0.65)`,margin:0},children:i.subtitle})]}),(0,a.jsx)(`div`,{children:(0,a.jsxs)(r,{href:`/insights`,className:`btn`,style:{background:`rgba(255, 255, 255, 0.06)`,border:`1px solid rgba(255, 255, 255, 0.16)`,color:`#FFFFFF`,borderRadius:`999px`,padding:`12px 24px`,fontSize:`13.5px`,fontWeight:600,display:`inline-flex`,alignItems:`center`,gap:`8px`,transition:`all 0.25s ease`},children:[(0,a.jsx)(`span`,{children:i.cta_all}),(0,a.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,a.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,a.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})})]}),(0,a.jsx)(`div`,{className:`m3-stagger`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`28px`},children:n.map((t,n)=>(0,a.jsxs)(r,{href:t.slug?`/insights/${t.slug}`:`/insights`,className:`home-article-card`,children:[(0,a.jsxs)(`div`,{className:`home-article-thumb-wrap`,children:[(0,a.jsx)(`img`,{src:t.cover||`/images/project_analysis.webp`,alt:t.t,className:`home-article-thumb-img`}),(0,a.jsx)(`div`,{className:`home-article-cat-badge`,children:t.cat||(e?`Wawasan`:`Insights`)})]}),(0,a.jsxs)(`div`,{style:{padding:`28px`,display:`flex`,flexDirection:`column`,flexGrow:1,justifyContent:`space-between`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,fontSize:`12px`,color:`rgba(255, 255, 255, 0.45)`,marginBottom:`12px`},children:[(0,a.jsx)(`span`,{children:t.date||(e?`Terkini`:`Recent`)}),(0,a.jsx)(`span`,{children:`•`}),(0,a.jsx)(`span`,{children:t.rt||`8 min read`})]}),(0,a.jsx)(`h3`,{style:{fontSize:`19px`,fontWeight:600,color:`#FFFFFF`,lineHeight:1.4,marginBottom:`12px`},children:t.t}),(0,a.jsx)(`p`,{style:{fontSize:`13.5px`,color:`rgba(255, 255, 255, 0.62)`,lineHeight:1.6,margin:`0 0 20px 0`},children:t.excerpt})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`13px`,fontWeight:600,color:`#E63946`,paddingTop:`16px`,borderTop:`1px solid rgba(255, 255, 255, 0.06)`},children:[(0,a.jsx)(`span`,{children:i.read_more}),(0,a.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,a.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,a.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]},n))})]})})]})}function c({isId:e=!1}){let[t,n]=(0,i.useState)(0),r=e=>{n(t===e?-1:e)},o=e?{eyebrow:`PERTANYAAN UMUM · FAQ`,title:`Pertanyaan Penting Seputar Ekspansi Bilateral`,subtitle:`Jawaban praktis dan terarah mengenai kepatuhan regulasi, metodologi kemitraan, kerahasiaan NDA, dan jangka waktu proyek.`,items:[{q:`Bagaimana 8 Vice membantu korporasi menavigasi regulasi dan perizinan di Indonesia?`,a:`Kami menghubungkan strategi kepatuhan dengan realitas operasional di lapangan. Tim kami memetakan instansi teknis terkait (BKPM/Kemeninves, kementerian teknis, otoritas daerah), mengkaji ketentuan DNI/Klasifikasi Baku Lapangan Usaha Indonesia (KBLI), dan mendampingi pembentukan struktur legal serta pemenuhan standar regulasi lokal secara transparan.`},{q:`Apakah 8 Vice juga mendampingi perusahaan Indonesia yang ingin berekspansi ke Tiongkok?`,a:`Ya, koridor kami bersifat dua arah (bilateral). Kami membantu eksportir, produsen, dan korporasi Indonesia mengakses rantai distribusi di pusat perdagangan utama China (seperti Shanghai, Shenzhen, Guangzhou, Ningbo), memvalidasi calon pembeli B2B, mengoordinasikan delegasi dagang, serta melokalkan pesan produk sesuai ekosistem komersial Tiongkok.`},{q:`Berapa lama estimasi waktu dan bagaimana tahapan kerja sama biasanya berlangsung?`,a:`Proyek konsultasi diawali dengan fase Penjajakan & Penilaian (Discovery & Assessment) selama 2-4 minggu, dilanjutkan dengan perumusan strategi, pemetaan pemangku kepentingan, dan pencocokan mitra terkurasi (6-12 minggu). Kami bekerja dengan target dan *deliverables* berbasis tahapan konkret yang jelas, bukan sekadar jam kerja terbuka.`},{q:`Bagaimana perlindungan kerahasiaan informasi komersial dan kekayaan intelektual (IP)?`,a:`Kerahasiaan adalah prinsip fundamental praktik penasihat kami. Setiap penugasan diawali dengan penandatanganan Non-Disclosure Agreement (NDA) bilateral yang mengikat secara hukum. Seluruh data strategis klien, rencana produk, dan rincian kemitraan komersial dikelola dengan protokol kerahasiaan ketat.`},{q:`Apa perbedaan mendasar antara 8 Vice dengan konsultan global atau agen perantara lokal?`,a:`Konsultan manajemen global umumnya menyajikan laporan teoritis berskala makro namun minim daya eksekusi di lapangan; sebaliknya, agen perantara lokal seringkali tidak memiliki kedalaman analisis strategis dan pemahaman lintas budaya. 8 Vice menyatukan keahlian penasihat senior, pemahaman budaya bisnis bilateral, serta jejaring institusi tepercaya di Jakarta maupun kota bisnis utama Tiongkok.`}]}:{eyebrow:`FREQUENTLY ASKED QUESTIONS`,title:`Essential Answers for Cross-Border Expansion`,subtitle:`Practical clarity on regulatory navigation, partner matchmaking, confidentiality safeguards, and engagement timelines.`,items:[{q:`How does 8 Vice help foreign enterprises navigate Indonesian regulations and local compliance?`,a:`We bridge regulatory strategy and operational reality. We conduct preliminary feasibility assessments, map technical government bodies (BKPM/Ministry of Investment, line ministries, regional authorities), clarify Positive Investment List (KBLI) restrictions, and guide clients through compliant corporate structuring and local licensing.`},{q:`Can 8 Vice assist Indonesian enterprises looking to expand or distribute in China?`,a:`Yes. Our gateway functions bilaterally. We connect Indonesian producers, commodity leaders, and consumer brands with major Chinese commercial hubs (Shanghai, Shenzhen, Guangzhou, Ningbo), verify potential B2B distributors, organize trade missions, and adapt brand narratives for China's connected digital ecosystem.`},{q:`What is the typical project timeline and structure of an engagement?`,a:`Engagements typically begin with a 2 to 4-week Discovery & Opportunity Assessment, followed by Strategic Positioning, Stakeholder Mapping, and curated B2B Matchmaking (6 to 12 weeks). Every project is structured around measurable milestones and executable deliverables rather than open-ended consulting hours.`},{q:`How are commercial confidentiality, sensitive data, and intellectual property protected?`,a:`Discretion is foundational to our advisory ethos. Every engagement commences with an enforceable mutual Non-Disclosure Agreement (NDA). All proprietary data, technology architectures, and commercial negotiations remain strictly safeguarded throughout and beyond the advisory lifecycle.`},{q:`What differentiates 8 Vice from traditional global management consultancies or local broker agencies?`,a:`Global management consultancies deliver theoretical decks that often lack on-the-ground implementation; local brokers frequently lack analytical rigor and cross-cultural depth. 8 Vice combines senior strategic advisory acumen, bilingual fluency, and verified institutional relationships across Jakarta and premier Chinese business centers.`}]};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .faq-item-card {
          background: #0E1015;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item-card:hover {
          border-color: rgba(255, 255, 255, 0.16);
          background: #111319;
        }
        .faq-item-card.is-active {
          border-color: rgba(230, 57, 70, 0.35);
          background: #11141C;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }
        .faq-btn {
          width: 100%;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          color: #FFFFFF;
          font-family: inherit;
          text-align: left;
          cursor: pointer;
          gap: 16px;
        }
        .faq-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease;
        }
        .faq-item-card.is-active .faq-icon-box {
          transform: rotate(180deg);
          background: #E63946;
          color: #FFFFFF;
        }
        .faq-answer {
          padding: 0 28px 24px 28px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          line-height: 1.65;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
          animation: faqSlideDown 0.3s ease;
        }
        @keyframes faqSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}}),(0,a.jsx)(`section`,{className:`section`,id:`faq`,style:{background:`radial-gradient(ellipse 60% 40% at 50% 100%, rgba(214, 40, 40, 0.1) 0%, transparent 70%), #0A0B0E`,color:`#FFFFFF`,paddingBlock:`100px`,borderBottom:`1px solid rgba(255, 255, 255, 0.06)`},children:(0,a.jsxs)(`div`,{className:`container`,children:[(0,a.jsxs)(`div`,{className:`m3-header`,style:{textAlign:`center`,marginBottom:`56px`},children:[(0,a.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.12)`,border:`1px solid rgba(230, 57, 70, 0.3)`,padding:`5px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,marginBottom:`14px`},children:[(0,a.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`}}),o.eyebrow]}),(0,a.jsx)(`h2`,{style:{fontSize:`clamp(28px, 3.4vw, 42px)`,fontWeight:700,letterSpacing:`-0.02em`,lineHeight:1.2,marginBottom:`16px`},children:o.title}),(0,a.jsx)(`p`,{style:{fontSize:`16px`,lineHeight:1.65,color:`rgba(255, 255, 255, 0.65)`,maxWidth:`720px`,margin:`0 auto`},children:o.subtitle})]}),(0,a.jsx)(`div`,{style:{maxWidth:`1160px`,margin:`0 auto`},children:(0,a.jsx)(`div`,{className:`faq-list`,children:o.items.map((e,n)=>{let i=t===n;return(0,a.jsxs)(`div`,{className:`faq-item-card ${i?`is-active`:``}`,children:[(0,a.jsxs)(`button`,{type:`button`,className:`faq-btn`,onClick:()=>r(n),"aria-expanded":i,children:[(0,a.jsx)(`span`,{style:{fontSize:`17px`,fontWeight:600,color:`#FFFFFF`,lineHeight:1.4},children:e.q}),(0,a.jsx)(`div`,{className:`faq-icon-box`,"aria-hidden":`true`,children:(0,a.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:(0,a.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),i&&(0,a.jsx)(`div`,{className:`faq-answer`,children:e.a})]},n)})})})]})})]})}export{s as n,o as r,c as t};