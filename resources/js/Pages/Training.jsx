import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';

const CheckIcon = () => (
  <svg className="ico ico-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);



export default function Training() {
  const [format, setFormat] = useState('onsite');
  const { t } = useTranslation();

  const capabilitiesList = [
    {
      title: t('training_page.cap1_title'),
      desc: t('training_page.cap1_desc'),
      icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>
    },
    {
      title: t('training_page.cap2_title'),
      desc: t('training_page.cap2_desc'),
      icon: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>
    },
    {
      title: t('training_page.cap3_title'),
      desc: t('training_page.cap3_desc'),
      icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>
    },
    {
      title: t('training_page.cap4_title'),
      desc: t('training_page.cap4_desc'),
      icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>
    },
    {
      title: t('training_page.cap5_title'),
      desc: t('training_page.cap5_desc'),
      icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>
    },
    {
      title: t('training_page.cap6_title'),
      desc: t('training_page.cap6_desc'),
      icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>
    },
    {
      title: t('training_page.cap7_title'),
      desc: t('training_page.cap7_desc'),
      icon: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>
    },
    {
      title: t('training_page.cap8_title'),
      desc: t('training_page.cap8_desc'),
      icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>
    },
    {
      title: t('training_page.cap9_title'),
      desc: t('training_page.cap9_desc'),
      icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></>
    }
  ];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value.trim())) {
      setEmailError('Please enter a valid email address.');
      emailInput.focus();
      return;
    }
    setEmailError('');
    setFormSubmitted(true);
  };

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.training_title')}</title>
        <meta name="description" content={t('meta.training_desc')} />
        <meta property="og:title" content={t('meta.training_title')} />
        <meta property="og:description" content={t('meta.training_desc')} />
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
                <span className="cur">{t('nav.training')}</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '20ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>{t('training_page.hero_title_1')}</span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('training_page.hero_title_accent')}</span>
                </h1>
                <p className="page-hero__lead">
                  {t('training_page.hero_desc')}
                </p>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/training_hero.png" alt="Training Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CAPABILITIES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('training_page.cap_eyebrow')}
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>{t('training_page.cap_title')}</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-cap-grid svc-cap-grid--3col">
            {capabilitiesList.map((cap, i) => (
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

      {/* ============================ CUSTOM TRAINING REQUEST ============================ */}
      <section className="svc-section svc-section--light" id="request">
        <div className="container">
          <ScrollReveal>
            <div className="train-req">
              <div className="train-req__copy">
                <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                  <span className="about-hero__dot"></span>
                  {t('training_page.req_eyebrow')}
                </div>
                <h2 className="t-h2">{t('training_page.req_title')}</h2>
                <p className="t-body-lg">{t('training_page.req_desc')}</p>
                <ul className="train-feats train-feats--light">
                  <li><CheckIcon /> {t('training_page.feat1')}</li>
                  <li><CheckIcon /> {t('training_page.feat2')}</li>
                  <li><CheckIcon /> {t('training_page.feat3')}</li>
                  <li><CheckIcon /> {t('training_page.feat4')}</li>
                </ul>
              </div>
              <div className="train-req__form">
                <h3 className="t-h4">{t('training_page.form_title')}</h3>
                <p className="train-req__note">{t('training_page.form_note')}</p>
                {!formSubmitted ? (
                  <form className="req-form" onSubmit={handleFormSubmit} noValidate>
                    <div className="req-row">
                      <label className="req-field"><span>{t('training_page.form_name')}</span><input type="text" placeholder={t('training_page.form_name_ph')} required /></label>
                      <label className="req-field"><span>{t('training_page.form_company')}</span><input type="text" placeholder={t('training_page.form_company_ph')} /></label>
                    </div>
                    <label className="req-field"><span>{t('training_page.form_email')}</span><input type="email" placeholder={t('training_page.form_email_ph')} required /></label>
                    <label className="req-field"><span>{t('training_page.form_learn')}</span><textarea rows="3" placeholder={t('training_page.form_learn_ph')} /></label>
                    <div className="req-field req-field--inline">
                      <span>{t('training_page.form_format')}</span>
                      <div className="req-pills" role="group" aria-label="Preferred format">
                        {['onsite', 'hybrid', 'online'].map(f => (
                          <button key={f} type="button" className={`req-pill${format === f ? ' is-active' : ''}`} onClick={() => setFormat(f)}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="field-err">{emailError}</span>
                    <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                      {t('training_page.form_submit')}
                      <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                  </form>
                ) : (
                  <div className="req-success" style={{ display: 'flex' }}>
                    <svg className="ico ico-24" viewBox="0 0 24 24" fill="none" stroke="var(--color-success, #00b43c)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24, flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div><strong>{t('training_page.form_success_title')}</strong><br />{t('training_page.form_success_desc')}</div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="svc-section svc-section--dark" style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div className="cta-band" style={{ background: '#141519', border: '1px solid rgba(255,255,255,.1)' }}>
              <h2 className="t-h2">{t('training_page.cta_title_1')}<span className="accent">{t('training_page.cta_title_accent')}</span></h2>
              <p className="t-body-lg">{t('training_page.cta_desc')}</p>
              <div className="hero__ctas" style={{ justifyContent: 'center' }}>
                <a href="#request" className="btn btn--primary btn--lg">{t('training_page.cta_btn_1')}</a>
                <Link href="/contact" className="btn btn--ghost-light btn--lg">{t('training_page.cta_btn_2')}</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
