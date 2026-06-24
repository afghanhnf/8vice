import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function About() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Head title="8vice - About Us" />

      <section className="about-hero has-geo-bg" style={{ padding: '160px 0 100px 0', position: 'relative', overflow: 'hidden' }}>
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
              marginBottom: '40px', fontWeight: '500'
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

      <section className="about-vm">
        <div className="container">
          <Staggered delay={100} staggerDelay={200} className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12L6 8M2 12L6 16M2 12H22M18 8L22 12M22 12L18 16"/>
                </svg>
              </div>
              <h2>{t('about.vision_title')}</h2>
              <p>{t('about.vision_desc')}</p>
            </div>

            <div className="vm-card vm-card--mission">
              <div className="vm-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2>{t('about.mission_title')}</h2>
              <p>{t('about.mission_desc')}</p>
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
                <img src="/images/leader_speech_abstract.png" onError={(e) => e.target.src = '/images/article-sample.jpg'} alt="Leadership Vision" />
                <div className="leader-meta">
                  <h3>{t('about.speech_author')}</h3>
                  <p>{t('about.speech_role')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="leader-text-wrap">
                <div className="leader-quote-main">
                  "{t('about.speech_quote_1')}"
                </div>
                <div className="leader-quote-sub">
                  {t('about.speech_quote_2')}
                </div>
                <div className="leader-quote-sub">
                  {t('about.speech_quote_3')}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
              <p>{t('about.solve_card1_desc')}</p>
            </div>

            <div className="bento-box">
              <div className="bento-num">02</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>{t('about.solve_card2_title')}</h3>
              <p>{t('about.solve_card2_desc')}</p>
            </div>

            <div className="bento-box">
              <div className="bento-num">03</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"/>
                </svg>
              </div>
              <h3>{t('about.solve_card3_title')}</h3>
              <p>{t('about.solve_card3_desc')}</p>
            </div>

            <div className="bento-box">
              <div className="bento-num">04</div>
              <div className="bento-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>{t('about.solve_card4_title')}</h3>
              <p>{t('about.solve_card4_desc')}</p>
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
