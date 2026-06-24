import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function MarketIntelligence() {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
      title: t('mi_page.cap1_title'),
      desc: t('mi_page.cap1_desc')
    },
    {
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
      title: t('mi_page.cap2_title'),
      desc: t('mi_page.cap2_desc')
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
      title: t('mi_page.cap3_title'),
      desc: t('mi_page.cap3_desc')
    },
    {
      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
      title: t('mi_page.cap4_title'),
      desc: t('mi_page.cap4_desc')
    },
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
      title: t('mi_page.cap5_title'),
      desc: t('mi_page.cap5_desc')
    },
    {
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
      title: t('mi_page.cap6_title'),
      desc: t('mi_page.cap6_desc')
    }
  ];

  const processSteps = [
    { num: '1', title: t('mi_page.step1_title'), desc: t('mi_page.step1_desc') },
    { num: '2', title: t('mi_page.step2_title'), desc: t('mi_page.step2_desc') },
    { num: '3', title: t('mi_page.step3_title'), desc: t('mi_page.step3_desc') },
    { num: '4', title: t('mi_page.step4_title'), desc: t('mi_page.step4_desc') }
  ];

  const scopeItems = [
    { title: t('mi_page.scope1_title'), desc: t('mi_page.scope1_desc') },
    { title: t('mi_page.scope2_title'), desc: t('mi_page.scope2_desc') },
    { title: t('mi_page.scope3_title'), desc: t('mi_page.scope3_desc') },
    { title: t('mi_page.scope4_title'), desc: t('mi_page.scope4_desc') },
    { title: t('mi_page.scope5_title'), desc: t('mi_page.scope5_desc') }
  ];

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.mi_title')}</title>
        <meta name="description" content={t('meta.mi_desc')} />
        <meta property="og:title" content={t('meta.mi_title')} />
        <meta property="og:description" content={t('meta.mi_desc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-default.png" />
      </Head>

      {/* ============================ HERO ============================ */}
      <section className="page-hero page-hero--tall has-geo-bg" style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <nav className="breadcrumb">
                <Link href="/">{t('nav.about') === 'Tentang Kami' ? 'Beranda' : 'Home'}</Link><span className="sep">/</span>
                <Link href="/services">{t('nav.services')}</Link><span className="sep">/</span>
                <span className="cur">{t('nav.market_intelligence')}</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '18ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>{t('mi_page.hero_title_1')}</span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('mi_page.hero_title_accent')}</span>
                </h1>
                <p className="page-hero__lead">
                  {t('mi_page.hero_desc')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="page-hero__meta">
                  <div><div className="n">{t('mi_page.stat_1_n')}</div><div className="l">{t('mi_page.stat_1_l')}</div></div>
                  <div><div className="n">{t('mi_page.stat_2_n')}<span className="unit">{t('mi_page.stat_2_u')}</span></div><div className="l">{t('mi_page.stat_2_l')}</div></div>
                  <div><div className="n">{t('mi_page.stat_3_n')}<span className="unit">{t('mi_page.stat_3_u')}</span></div><div className="l">{t('mi_page.stat_3_l')}</div></div>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/market_intelligence_hero.png" alt="Market Intelligence Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ INTRO / APPROACH ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <div className="lead-row">
            <ScrollReveal>
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                {t('mi_page.approach_eyebrow')}
              </div>
              <h2 className="t-h2">{t('mi_page.approach_title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>{t('mi_page.approach_p1')}</p>
                <p>{t('mi_page.approach_p2')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================ CAPABILITIES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('mi_page.cap_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('mi_page.cap_title')}</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-cap-grid svc-cap-grid--3col">
            {capabilities.map((cap, i) => (
              <div key={i} className="svc-cap-card">
                <div className="svc-cap-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {cap.icon}
                  </svg>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </Staggered>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="svc-section svc-section--darker">
        <div className="container">
          <ScrollReveal className="section-head" style={{ textAlign: 'left' }}>
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('mi_page.process_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('mi_page.process_title')}</h2>
          </ScrollReveal>

          <div className="svc-process__track" style={{ maxWidth: '100%', margin: 0 }}>
            <div className="svc-process__line" style={{ left: '12.5%', right: '12.5%' }}></div>
            <Staggered delay={100} staggerDelay={150} className="svc-process__steps">
              {processSteps.map((step, i) => (
                <div key={i} className="svc-process-step">
                  <div className="svc-process-step__num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </Staggered>
          </div>
        </div>
      </section>

      {/* ============================ SCOPE / DELIVERABLES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('mi_page.scope_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('mi_page.scope_title')}</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-scope-grid">
            {scopeItems.map((item, i) => (
              <div key={i} className="svc-scope-item">
                <div className="svc-scope-item__ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Staggered>
        </div>
      </section>

      {/* ============================ CASE TEASER ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <ScrollReveal>
            <div className="impact__inner">
              <div className="impact__thumb" style={{ background: 'linear-gradient(135deg, rgba(214,40,40,0.1) 0%, var(--color-gray-100) 100%)' }}>
                {/* Placeholder for case study image */}
              </div>
              <div>
                <span className="tag">{t('mi_page.case_tag')}</span>
                <h2 className="t-h2" style={{ margin: '8px 0 18px' }}>{t('mi_page.case_title')}</h2>
                <p className="t-body-lg" style={{ color: 'var(--color-gray-600)', marginBottom: '28px' }}>
                  {t('mi_page.case_desc')}
                </p>
                <Link href="/case-study" className="btn btn--ghost-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {t('mi_page.case_btn')}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="svc-section svc-section--dark" style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div className="cta-band">
              <h2 className="t-h2">{t('mi_page.cta_title_1')}<span className="accent">{t('mi_page.cta_title_accent')}</span></h2>
              <p className="t-body-lg">{t('mi_page.cta_desc')}</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  {t('mi_page.cta_btn')}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
