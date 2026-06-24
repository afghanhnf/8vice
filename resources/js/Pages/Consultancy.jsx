import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import AccordionFAQ from '@/Components/AccordionFAQ';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function Consultancy() {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
      title: t('consultancy_page.cap1_title'),
      desc: t('consultancy_page.cap1_desc')
    },
    {
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
      title: t('consultancy_page.cap2_title'),
      desc: t('consultancy_page.cap2_desc')
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></>,
      title: t('consultancy_page.cap3_title'),
      desc: t('consultancy_page.cap3_desc')
    },
    {
      icon: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
      title: t('consultancy_page.cap4_title'),
      desc: t('consultancy_page.cap4_desc')
    },
    {
      icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>,
      title: t('consultancy_page.cap5_title'),
      desc: t('consultancy_page.cap5_desc')
    },
    {
      icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
      title: t('consultancy_page.cap6_title'),
      desc: t('consultancy_page.cap6_desc')
    },
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /></>,
      title: t('consultancy_page.cap7_title'),
      desc: t('consultancy_page.cap7_desc')
    },
    {
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
      title: t('consultancy_page.cap8_title'),
      desc: t('consultancy_page.cap8_desc')
    },
    {
      icon: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><polyline points="17 6 23 6 23 12" /></>,
      title: t('consultancy_page.cap9_title'),
      desc: t('consultancy_page.cap9_desc')
    }
  ];

  const processSteps = [
    { num: '1', title: t('consultancy_page.step1_title'), desc: t('consultancy_page.step1_desc') },
    { num: '2', title: t('consultancy_page.step2_title'), desc: t('consultancy_page.step2_desc') },
    { num: '3', title: t('consultancy_page.step3_title'), desc: t('consultancy_page.step3_desc') },
    { num: '4', title: t('consultancy_page.step4_title'), desc: t('consultancy_page.step4_desc') }
  ];

  const faqItems = [
    {
      question: t('consultancy_page.faq1_q'),
      answer: t('consultancy_page.faq1_a')
    },
    {
      question: t('consultancy_page.faq2_q'),
      answer: t('consultancy_page.faq2_a')
    },
    {
      question: t('consultancy_page.faq3_q'),
      answer: t('consultancy_page.faq3_a')
    },
    {
      question: t('consultancy_page.faq4_q'),
      answer: t('consultancy_page.faq4_a')
    },
    {
      question: t('consultancy_page.faq5_q'),
      answer: t('consultancy_page.faq5_a')
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.consultancy_title')}</title>
        <meta name="description" content={t('meta.consultancy_desc')} />
        <meta property="og:title" content={t('meta.consultancy_title')} />
        <meta property="og:description" content={t('meta.consultancy_desc')} />
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
            <div style={{ flex: '1 1 min(100%, 500px)' }}>
              <nav className="breadcrumb">
                <Link href="/">{t('nav.about') === 'Tentang Kami' ? 'Beranda' : 'Home'}</Link><span className="sep">/</span>
                <Link href="/services">{t('nav.services')}</Link><span className="sep">/</span>
                <span className="cur">{t('nav.consultancy')}</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '18ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>{t('consultancy_page.hero_title_1')}</span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('consultancy_page.hero_title_accent')}</span>
                </h1>
                <p className="page-hero__lead">
                  {t('consultancy_page.hero_desc')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="page-hero__meta">
                  <div><div className="n">{t('consultancy_page.stat_1_n')}</div><div className="l">{t('consultancy_page.stat_1_l')}</div></div>
                  <div><div className="n">{t('consultancy_page.stat_2_n')}<span className="unit">{t('consultancy_page.stat_2_u')}</span></div><div className="l">{t('consultancy_page.stat_2_l')}</div></div>
                  <div><div className="n">{t('consultancy_page.stat_3_n')}<span className="unit">{t('consultancy_page.stat_3_u')}</span></div><div className="l">{t('consultancy_page.stat_3_l')}</div></div>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/consultancy_hero.png" alt="Consultancy Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                {t('consultancy_page.approach_eyebrow')}
              </div>
              <h2 className="t-h2">{t('consultancy_page.approach_title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>{t('consultancy_page.approach_p1')}</p>
                <p>{t('consultancy_page.approach_p2')}</p>
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
              {t('consultancy_page.cap_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('consultancy_page.cap_title')}</h2>
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
              {t('consultancy_page.process_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('consultancy_page.process_title')}</h2>
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

      {/* ============================ FAQ / SCOPE ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <div className="lead-row" style={{ marginBottom: '40px' }}>
            <ScrollReveal>
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                {t('consultancy_page.faq_eyebrow')}
              </div>
              <h2 className="t-h2">{t('consultancy_page.faq_title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>{t('consultancy_page.faq_desc')}</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <AccordionFAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CASE TEASER ============================ */}
      <section className="svc-section svc-section--darker">
        <div className="container">
          <ScrollReveal>
            <div className="impact__inner">
              <div className="impact__thumb" style={{ background: 'linear-gradient(135deg, rgba(214,40,40,0.15) 0%, #111 100%)' }}>
                {/* Placeholder for case study image */}
              </div>
              <div>
                <span className="tag">{t('consultancy_page.case_tag')}</span>
                <h2 className="t-h2" style={{ color: '#fff', margin: '8px 0 18px' }}>{t('consultancy_page.case_title')}</h2>
                <p className="t-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
                  {t('consultancy_page.case_desc')}
                </p>
                <Link href="/case-study" className="btn btn--ghost-light" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {t('consultancy_page.case_btn')}
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
              <h2 className="t-h2">{t('consultancy_page.cta_title_1')}<span className="accent">{t('consultancy_page.cta_title_accent')}</span></h2>
              <p className="t-body-lg">{t('consultancy_page.cta_desc')}</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  {t('consultancy_page.cta_btn')}
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
