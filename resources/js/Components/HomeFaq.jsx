import React, { useState } from 'react';

export default function HomeFaq({ isId = false }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const copy = isId
    ? {
        eyebrow: "PERTANYAAN UMUM · FAQ",
        title: "Pertanyaan Penting Seputar Ekspansi Bilateral",
        subtitle: "Jawaban praktis dan terarah mengenai kepatuhan regulasi, metodologi kemitraan, kerahasiaan NDA, dan jangka waktu proyek.",
        items: [
          {
            q: "Bagaimana 8 Vice membantu korporasi menavigasi regulasi dan perizinan di Indonesia?",
            a: "Kami menghubungkan strategi kepatuhan dengan realitas operasional di lapangan. Tim kami memetakan instansi teknis terkait (BKPM/Kemeninves, kementerian teknis, otoritas daerah), mengkaji ketentuan DNI/Klasifikasi Baku Lapangan Usaha Indonesia (KBLI), dan mendampingi pembentukan struktur legal serta pemenuhan standar regulasi lokal secara transparan."
          },
          {
            q: "Apakah 8 Vice juga mendampingi perusahaan Indonesia yang ingin berekspansi ke Tiongkok?",
            a: "Ya, koridor kami bersifat dua arah (bilateral). Kami membantu eksportir, produsen, dan korporasi Indonesia mengakses rantai distribusi di pusat perdagangan utama China (seperti Shanghai, Shenzhen, Guangzhou, Ningbo), memvalidasi calon pembeli B2B, mengoordinasikan delegasi dagang, serta melokalkan pesan produk sesuai ekosistem komersial Tiongkok."
          },
          {
            q: "Berapa lama estimasi waktu dan bagaimana tahapan kerja sama biasanya berlangsung?",
            a: "Proyek konsultasi diawali dengan fase Penjajakan & Penilaian (Discovery & Assessment) selama 2-4 minggu, dilanjutkan dengan perumusan strategi, pemetaan pemangku kepentingan, dan pencocokan mitra terkurasi (6-12 minggu). Kami bekerja dengan target dan *deliverables* berbasis tahapan konkret yang jelas, bukan sekadar jam kerja terbuka."
          },
          {
            q: "Bagaimana perlindungan kerahasiaan informasi komersial dan kekayaan intelektual (IP)?",
            a: "Kerahasiaan adalah prinsip fundamental praktik penasihat kami. Setiap penugasan diawali dengan penandatanganan Non-Disclosure Agreement (NDA) bilateral yang mengikat secara hukum. Seluruh data strategis klien, rencana produk, dan rincian kemitraan komersial dikelola dengan protokol kerahasiaan ketat."
          },
          {
            q: "Apa perbedaan mendasar antara 8 Vice dengan konsultan global atau agen perantara lokal?",
            a: "Konsultan manajemen global umumnya menyajikan laporan teoritis berskala makro namun minim daya eksekusi di lapangan; sebaliknya, agen perantara lokal seringkali tidak memiliki kedalaman analisis strategis dan pemahaman lintas budaya. 8 Vice menyatukan keahlian penasihat senior, pemahaman budaya bisnis bilateral, serta jejaring institusi tepercaya di Jakarta maupun kota bisnis utama Tiongkok."
          }
        ]
      }
    : {
        eyebrow: "FREQUENTLY ASKED QUESTIONS",
        title: "Essential Answers for Cross-Border Expansion",
        subtitle: "Practical clarity on regulatory navigation, partner matchmaking, confidentiality safeguards, and engagement timelines.",
        items: [
          {
            q: "How does 8 Vice help foreign enterprises navigate Indonesian regulations and local compliance?",
            a: "We bridge regulatory strategy and operational reality. We conduct preliminary feasibility assessments, map technical government bodies (BKPM/Ministry of Investment, line ministries, regional authorities), clarify Positive Investment List (KBLI) restrictions, and guide clients through compliant corporate structuring and local licensing."
          },
          {
            q: "Can 8 Vice assist Indonesian enterprises looking to expand or distribute in China?",
            a: "Yes. Our gateway functions bilaterally. We connect Indonesian producers, commodity leaders, and consumer brands with major Chinese commercial hubs (Shanghai, Shenzhen, Guangzhou, Ningbo), verify potential B2B distributors, organize trade missions, and adapt brand narratives for China's connected digital ecosystem."
          },
          {
            q: "What is the typical project timeline and structure of an engagement?",
            a: "Engagements typically begin with a 2 to 4-week Discovery & Opportunity Assessment, followed by Strategic Positioning, Stakeholder Mapping, and curated B2B Matchmaking (6 to 12 weeks). Every project is structured around measurable milestones and executable deliverables rather than open-ended consulting hours."
          },
          {
            q: "How are commercial confidentiality, sensitive data, and intellectual property protected?",
            a: "Discretion is foundational to our advisory ethos. Every engagement commences with an enforceable mutual Non-Disclosure Agreement (NDA). All proprietary data, technology architectures, and commercial negotiations remain strictly safeguarded throughout and beyond the advisory lifecycle."
          },
          {
            q: "What differentiates 8 Vice from traditional global management consultancies or local broker agencies?",
            a: "Global management consultancies deliver theoretical decks that often lack on-the-ground implementation; local brokers frequently lack analytical rigor and cross-cultural depth. 8 Vice combines senior strategic advisory acumen, bilingual fluency, and verified institutional relationships across Jakarta and premier Chinese business centers."
          }
        ]
      };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
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
      ` }} />

      <section 
        className="section"
        id="faq"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(214, 40, 40, 0.1) 0%, transparent 70%), #0A0B0E',
          color: '#FFFFFF',
          paddingBlock: '100px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div className="container">
          
          <div className="m3-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
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

            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              {copy.title}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '720px', margin: '0 auto' }}>
              {copy.subtitle}
            </p>
          </div>

          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div className="faq-list">
            {copy.items.map((item, idx) => {
              const isActive = openIdx === idx;
              return (
                <div key={idx} className={`faq-item-card ${isActive ? 'is-active' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-btn" 
                    onClick={() => toggle(idx)}
                    aria-expanded={isActive}
                  >
                    <span style={{ fontSize: '17px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4 }}>
                      {item.q}
                    </span>
                    <div className="faq-icon-box" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>
                  {isActive && (
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
