import React from 'react';
import Link from '@/Components/LocalizedLink';

export default function HomeArticles({ isId = false, insights = [] }) {
  // Use passed insights or provide verified defaults
  const articlesList = (insights && insights.length > 0)
    ? insights.slice(0, 3)
    : [
        {
          cat: isId ? "Regulasi & Kepatuhan" : "Regulatory & Technology",
          rt: "8 min read",
          date: "August 2026",
          t: isId 
            ? "Panduan Kepatuhan UU Perlindungan Data Pribadi (UU PDP) untuk Penyedia SaaS Lintas Negara"
            : "Cross-Border Data Compliance in Indonesia: Deciphering the Personal Data Protection Law (UU PDP)",
          excerpt: isId
            ? "Panduan praktis kepatuhan UU PDP: kewajiban lokalisasi data, penunjukan Data Protection Officer (DPO), dan protokol transfer data bilateral."
            : "A pragmatic compliance guide to Law No. 27/2022 (UU PDP): local data residency mandates, mandatory DPO appointments, and bilateral data transfer protocols.",
          cover: "/images/project_analysis.webp",
          slug: "indonesia-pdp-data-protection-compliance-guide"
        },
        {
          cat: isId ? "Rantai Pasok & Manufaktur" : "Operations & Supply Chain",
          rt: "11 min read",
          date: "July 2026",
          t: isId 
            ? "Pemilihan Kawasan Industri di Jawa vs Luar Jawa: Produktivitas Tenaga Kerja & Akses Pelabuhan"
            : "Industrial Estate Site Selection in Java vs. Outer Islands: Labor Productivity and Port Access",
          excerpt: isId
            ? "Analisis komparatif kawasan industri Kendal, Batang, dan Subang Smartpolitan untuk relokasi fasilitas manufaktur dan efisiensi logistik."
            : "A comparative benchmark of Central Java (Kendal, Batang), West Java (Subang), and Sulawesi for manufacturing relocations and logistics efficiency.",
          cover: "/images/video_manifesto_cover.webp",
          slug: "indonesia-industrial-park-site-selection-java-kendal-batang"
        },
        {
          cat: isId ? "Keuangan & FinTech" : "Finance & Tech",
          rt: "7 min read",
          date: "May 2026",
          t: isId 
            ? "Pembayaran Lintas Batas: Masa Depan Interoperabilitas QRIS Indonesia–China & LCS"
            : "Cross-Border Payments: The Future of Indonesia-China QRIS Interoperability & Local Currency Settlement",
          excerpt: isId
            ? "Bagaimana kerangka kerja sama Bank Indonesia dan PBOC mengeliminasi friksi valuta asing untuk pariwisata, e-commerce, dan penyelesaian perdagangan."
            : "How Bank Indonesia and PBOC's bilateral QR code interoperability and Local Currency Settlement (LCS) framework eliminate FX friction for cross-border trade.",
          cover: "/images/challenges_insights.webp",
          slug: "cross-border-payments-qris"
        }
      ];

  const copy = isId
    ? {
        eyebrow: "INTELIJEN PASAR & WAWASAN",
        title: "Wawasan Strategis Terkini dari Koridor Bilateral",
        subtitle: "Laporan analisis mendalam, panduan kepatuhan regulasi, dan intelijen pasar untuk memandu keputusan ekspansi Anda.",
        cta_all: "Lihat Seluruh Artikel & Laporan",
        read_more: "Baca Analisis"
      }
    : {
        eyebrow: "MARKET INTELLIGENCE & INSIGHTS",
        title: "Latest Strategic Analysis from the Bilateral Corridor",
        subtitle: "In-depth research reports, regulatory briefings, and commercial intelligence de-risking your cross-border roadmap.",
        cta_all: "View All Insights & Reports",
        read_more: "Read Analysis"
      };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />

      <section 
        className="section"
        id="articles"
        style={{
          background: '#090A0D',
          color: '#FFFFFF',
          paddingBlock: '108px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          position: 'relative'
        }}
      >
        <div className="container">
          
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
            <div className="m3-header" style={{ maxWidth: '680px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(230, 57, 70, 0.12)',
                border: '1px solid rgba(230, 57, 70, 0.3)',
                padding: '5px 14px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#FF7B7B',
                marginBottom: '14px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }}></span>
                {copy.eyebrow}
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '14px' }}>
                {copy.title}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                {copy.subtitle}
              </p>
            </div>

            <div>
              <Link 
                href="/insights"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#FFFFFF',
                  borderRadius: '999px',
                  padding: '12px 24px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{copy.cta_all}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="m3-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {articlesList.map((art, idx) => (
              <Link 
                key={idx} 
                href={art.slug ? `/insights/${art.slug}` : '/insights'}
                className="home-article-card"
              >
                <div className="home-article-thumb-wrap">
                  <img 
                    src={art.cover || '/images/project_analysis.webp'} 
                    alt={art.t} 
                    className="home-article-thumb-img"
                  />
                  <div className="home-article-cat-badge">
                    {art.cat || (isId ? 'Wawasan' : 'Insights')}
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '12px' }}>
                      <span>{art.date || (isId ? 'Terkini' : 'Recent')}</span>
                      <span>•</span>
                      <span>{art.rt || '8 min read'}</span>
                    </div>

                    <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4, marginBottom: '12px' }}>
                      {art.t}
                    </h3>

                    <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                      {art.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#E63946', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span>{copy.read_more}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
