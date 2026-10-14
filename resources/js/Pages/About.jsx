import React from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function About({ profiles }) {
  const { t, locale } = useTranslation();
  const isId = locale === 'id';

  return (
    <MainLayout>
      <SeoHead pageCode="about" />

      <section className="about-hero has-geo-bg" style={{ padding: '48px 0 64px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <Staggered delay={100} staggerDelay={150}>
            {/* Breadcrumb */}
            <div className="breadcrumb" style={{ 
              display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: 'rgba(255,255,255,0.6)', 
              marginBottom: '20px', fontWeight: '500'
            }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color='#fff'} onMouseLeave={(e) => e.target.style.color='rgba(255,255,255,0.6)'}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--color-red)' }}>About</span>
            </div>

            <h1 className="t-display" style={{ 
              fontSize: 'clamp(48px, 6vw, 84px)', 
              letterSpacing: '-0.03em', 
              lineHeight: '1.05', 
              maxWidth: '1000px', 
              margin: '0 auto 32px auto',
              color: '#fff'
            }}>
              <span style={{ fontWeight: '400' }}>{t('about.hero_title_1')}</span>
              <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('about.hero_title_accent')}</span>
            </h1>

            <p className="t-body-lg" style={{ 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: '1.6'
            }}>
              {t('about.hero_desc')}
            </p>
          </Staggered>
        </div>
      </section>

      <section className="about-vm" style={{ padding: '60px 0 80px 0' }}>
        <div className="container">
          <Staggered delay={100} staggerDelay={200} className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div className="vm-card__icon" style={{ marginBottom: 0 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12L6 8M2 12L6 16M2 12H22M18 8L22 12M22 12L18 16"/>
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-red)', textTransform: 'uppercase', backgroundColor: 'rgba(214,40,40,0.12)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(214,40,40,0.25)' }}>
                  Our Vision
                </span>
              </div>
              <h2>{t('about.vision_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('about.vision_desc') }} />
              <div className="vm-card__pillars">
                <div className="vm-card__pillar-item">
                  <span className="vm-card__pillar-dot"></span>
                  <span>Cross-Border Strategic Knowledge Transfer</span>
                </div>
                <div className="vm-card__pillar-item">
                  <span className="vm-card__pillar-dot"></span>
                  <span>Sustainable, Long-Term Market Impact</span>
                </div>
              </div>
            </div>

            <div className="vm-card vm-card--mission">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div className="vm-card__icon" style={{ marginBottom: 0 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Our Mission
                </span>
              </div>
              <h2>{t('about.mission_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('about.mission_desc') }} />
              <div className="vm-card__pillars">
                <div className="vm-card__pillar-item">
                  <span className="vm-card__pillar-dot" style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.6)' }}></span>
                  <span>Overcoming Complex Regulatory & Operational Roadblocks</span>
                </div>
                <div className="vm-card__pillar-item">
                  <span className="vm-card__pillar-dot" style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.6)' }}></span>
                  <span>Direct Advisory with 15+ Year In-Market Operators</span>
                </div>
              </div>
            </div>
          </Staggered>
        </div>
      </section>

      <section className="about-leader">
        <div className="container">
          <ScrollReveal>
            <div className="about-hero__eyebrow">
              <span className="about-hero__dot"></span>
              {t('about.speech_title')}
            </div>
          </ScrollReveal>

          <div className="leader-split">
            <ScrollReveal delay={200}>
              <div className="leader-img-wrap">
                <img width="800" height="600" src="/images/leader_speech_abstract.webp" onError={(e) => e.target.src = '/images/article-sample.webp'} alt="Leadership Vision" />
                <div className="leader-meta">
                  <h3>{t('about.speech_author')}</h3>
                  <p>{t('about.speech_role')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="leader-text-wrap">
                <div className="leader-quote-main" dangerouslySetInnerHTML={{ __html: `&ldquo;${t('about.speech_quote_1')}&rdquo;` }} />
                <div className="leader-quote-sub" dangerouslySetInnerHTML={{ __html: t('about.speech_quote_2') }} />
                <div className="leader-quote-sub" dangerouslySetInnerHTML={{ __html: t('about.speech_quote_3') }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================ TEAM & PROFILES ============================ */}
      {profiles && profiles.length > 0 && (
        <section className="section section--white about-team" style={{ padding: '96px 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="container">
            <ScrollReveal className="section-head" style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="about-hero__dot" style={{ backgroundColor: 'var(--color-red)' }}></span>
                Senior Leadership & Advisory
              </div>
              <h2 className="t-h2" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--color-ink)', fontWeight: 700 }}>
                Driven by Industry Veterans & Regional Specialists
              </h2>
              <p className="t-body" style={{ color: 'var(--color-gray-600)', maxWidth: '680px', margin: '16px auto 0 auto', fontSize: '16px', lineHeight: '1.6' }}>
                Our leadership team combines deep local Indonesian market understanding with extensive cross-border China-ASEAN advisory track records.
              </p>
            </ScrollReveal>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                gap: '28px',
                width: '100%' 
              }}
            >
              {profiles.map((profile, idx) => {
                const name = typeof profile.title === 'object' 
                  ? ((isId ? profile.title?.id : profile.title?.en) || profile.title?.en || profile.title?.id || '') 
                  : (profile.title || '');
                const role = typeof profile.description === 'object' 
                  ? ((isId ? profile.description?.id : profile.description?.en) || profile.description?.en || profile.description?.id || '') 
                  : (profile.description || '');

                const sampleImages = [
                  '/images/profil/ahmad_rizky.webp',
                  '/images/profil/wei_chen.webp',
                  '/images/profil/siti_nurhaliza.webp',
                  '/images/profil/li_jianhua.webp'
                ];
                const imgSrc = (profile.image && !profile.image.includes('placeholder')) 
                  ? (profile.image.startsWith('http') || profile.image.startsWith('/') ? profile.image : `/storage/${profile.image}`) 
                  : sampleImages[idx % sampleImages.length];

                const practiceTags = [
                  'Executive Partner',
                  'Strategy & Growth',
                  'Operations & Rigor',
                  'China Desk Lead'
                ];
                const expertisePoints = [
                  '20+ Years Market Entry & Entity Setup',
                  'Cross-Border M&A & Corporate Strategy',
                  'Operational Scaling & Permendag Compliance',
                  'Industrial Siting & Government Relations'
                ];
                const credentials = [
                  'Jakarta, Indonesia',
                  'Shanghai • Jakarta',
                  'Jakarta, Indonesia',
                  'Beijing • Jakarta'
                ];

                return (
                  <div 
                    key={profile.id || idx} 
                    className="team-profile-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid #EAEAEA',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '280px', backgroundColor: '#F0F0F0', overflow: 'hidden' }}>
                      <img 
                        src={imgSrc} 
                        alt={name} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        backgroundColor: 'rgba(10, 10, 10, 0.75)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase'
                      }}>
                        {practiceTags[idx % practiceTags.length]}
                      </div>
                    </div>

                    <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '4px' }}>
                        {name}
                      </h3>
                      <div style={{ 
                        fontSize: '13px', 
                        fontWeight: 600, 
                        color: 'var(--color-red)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.03em',
                        marginBottom: '14px'
                      }}>
                        {role}
                      </div>

                      <div style={{ 
                        fontSize: '13.5px', 
                        color: 'var(--color-gray-600)', 
                        lineHeight: '1.5',
                        marginBottom: '16px',
                        fontWeight: 500
                      }}>
                        {expertisePoints[idx % expertisePoints.length]}
                      </div>

                      <div style={{
                        marginTop: 'auto',
                        paddingTop: '14px',
                        borderTop: '1px solid #F0F0F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                        color: 'var(--color-gray-500)'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          {credentials[idx % credentials.length]}
                        </span>
                        <span style={{ fontWeight: 600, color: 'var(--color-ink)', fontSize: '11.5px' }}>
                          8vice Partner
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="has-geo-bg" style={{ position: 'relative', overflow: 'hidden', color: '#fff' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__rects"></div>
        </div>

        <section className="about-solutions" style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '0', marginBottom: '0' }}>
        <div className="container">
          <ScrollReveal className="section-head" style={{ textAlign: 'left', margin: '0 0 64px 0' }}>
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('about.solve_title')}
            </div>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={150} className="bento-grid">
            <div className="bento-box">
              <div className="bento-num">01</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <h3>{t('about.solve_card1_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('about.solve_card1_desc') }} />
              <div className="bento-box__pill">
                <span className="bento-box__pill-dot"></span>
                <span>Tailored Diagnostic & Execution Model</span>
              </div>
            </div>

            <div className="bento-box">
              <div className="bento-num">02</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>{t('about.solve_card2_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('about.solve_card2_desc') }} />
              <div className="bento-box__pill">
                <span className="bento-box__pill-dot"></span>
                <span>Uncovered Efficiency & Maximized ROI</span>
              </div>
            </div>

            <div className="bento-box">
              <div className="bento-num">03</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"/>
                </svg>
              </div>
              <h3>{t('about.solve_card3_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('about.solve_card3_desc') }} />
              <div className="bento-box__pill">
                <span className="bento-box__pill-dot"></span>
                <span>Flexible Capability Transfer</span>
              </div>
            </div>

            <div className="bento-box">
              <div className="bento-num">04</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>{t('about.solve_card4_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('about.solve_card4_desc') }} />
              <div className="bento-box__pill">
                <span className="bento-box__pill-dot"></span>
                <span>Direct Executive Alignment & Transparency</span>
              </div>
            </div>
          </Staggered>
        </div>
      </section>

      {/* ============================ ABOUT CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="section final-cta" style={{ position: 'relative', zIndex: 10, paddingBottom: '100px', paddingTop: '80px', marginTop: '0' }} data-screen-label="Final CTA">
          <div className="container">
            <div className="final-cta__inner" style={{ textAlign: 'center' }}>
              <h2 className="t-h1">
                {t('about.cta_title_1')}
                <span className="accent">{t('about.cta_title_accent')}</span>
                {t('about.cta_title_2')}
              </h2>
              <p className="t-body-lg" style={{ maxWidth: '700px', margin: '0 auto 40px auto' }}>{t('about.cta_desc')}</p>
              <div className="hero__ctas" style={{ justifyContent: 'center' }}>
                <Link href="/contact" className="btn btn--primary btn--lg">{t('about.cta_btn_1')}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
                <Link href="/services" className="btn btn--ghost-light btn--lg">{t('about.cta_btn_2')}</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      </div>

    </MainLayout>
  );
}
