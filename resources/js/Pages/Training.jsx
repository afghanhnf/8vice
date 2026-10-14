import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';

const CheckIcon = () => (
  <svg className="ico ico-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);



const defaultCovers = {
  'social-media-strategy-indonesia': '/images/challenges_insights.webp',
  'digital-marketing-indonesian-market': '/images/cases/retail.webp',
  'navigating-indonesian-business-licensing': '/images/cases/manufacturing.webp',
  'cross-cultural-team-management': '/images/leader_speech_abstract.webp',
  'ecommerce-marketplace-playbook': '/images/cases/retail.webp',
  'indonesian-consumer-behavior-101': '/images/cases/fintech.webp',
};

export default function Training({ courses = [] }) {
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
  const { data, setData, post, processing, errors, recentlySuccessful, reset } = useForm({
    name: '',
    company: '',
    email: '',
    learn: '',
    format: 'onsite',
    website_url: '' // honeypot
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    post('/training-request', {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <MainLayout>
      <SeoHead pageCode="training" />

      {/* ============================ HERO ============================ */}
      <section className="page-hero page-hero--tall has-geo-bg" style={{ background: 'var(--color-ink)', paddingTop: '48px', paddingBottom: '60px' }}>
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
                <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                  <a href="#courses" className="btn btn--primary" style={{ padding: '12px 24px', fontSize: '14px' }}>
                    {t('training_page.courses_eyebrow')}
                  </a>
                  <a href="#request" className="btn btn--ghost-light" style={{ padding: '12px 24px', fontSize: '14px' }}>
                    {t('training_page.req_eyebrow')}
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 min(100%, 400px)' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img width="800" height="600" src="/images/training_hero.webp" alt="Training Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

      {/* ============================ TRAINING SUBSCRIPTION (CMS COURSES) ============================ */}
      <section className="svc-section svc-section--light" id="courses">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              {t('training_page.courses_eyebrow')}
            </div>
            <h2 className="t-h2">{t('training_page.courses_title')}</h2>
            <p className="t-body-lg" style={{ color: 'var(--color-gray-600)', marginTop: '14px' }}>
              {t('training_page.courses_desc')}
            </p>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="course-grid">
            {courses && courses.length > 0 ? (
              courses.map((course, idx) => {
                const isFree = Boolean(course.free) || (course.price && course.price.toLowerCase() === 'free');
                
                // Determine cover image
                let coverSrc = null;
                if (course.cover) {
                  if (course.cover.startsWith('http://') || course.cover.startsWith('https://') || course.cover.startsWith('/')) {
                    coverSrc = course.cover;
                  } else if (course.cover.startsWith('courses/')) {
                    coverSrc = `/storage/${course.cover}`;
                  }
                }
                
                if (!coverSrc && defaultCovers[course.slug]) {
                  coverSrc = defaultCovers[course.slug];
                }

                return (
                  <div 
                    key={course.id || idx} 
                    className="course-card"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setData('learn', `${course.title} (${course.cat || ''})`);
                      const el = document.getElementById('request');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="course-card__thumb ph on-dark" style={{ background: '#18191e', minHeight: '190px' }}>
                      {coverSrc ? (
                        <img 
                          width="600" 
                          height="338" 
                          src={coverSrc} 
                          alt={course.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', textAlign: 'center' }}>
                          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
                            {course.cover || course.cat}
                          </span>
                        </div>
                      )}
                      <div className="course-card__play">
                        <span aria-label="Play course">
                          <svg viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </span>
                      </div>
                      <span className={`course-card__price${isFree ? ' is-free' : ''}`}>
                        {isFree ? (t('nav.about') === 'Tentang Kami' ? 'Gratis' : 'Free') : course.price}
                      </span>
                    </div>
                    <div className="course-card__body">
                      <div className="c-cat">{course.cat}</div>
                      <h3>{course.title}</h3>
                      <p>{course.desc}</p>
                      <div className="course-card__meta">
                        {course.dur && (
                          <span>
                            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {course.dur}
                          </span>
                        )}
                        {course.lessons && (
                          <span>
                            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                            {course.lessons}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--color-gray-600)' }}>
                <p>{t('training_page.courses_empty')}</p>
              </div>
            )}
          </Staggered>
        </div>
      </section>

      {/* ============================ CUSTOM TRAINING REQUEST ============================ */}
      <section className="svc-section svc-section--light" id="request" style={{ borderTop: '1px solid var(--color-gray-200)' }}>
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
                {!recentlySuccessful ? (
                  <form className="req-form" onSubmit={handleFormSubmit} noValidate>
                    {/* Honeypot */}
                    <input type="text" name="website_url" style={{ display: 'none' }} value={data.website_url} onChange={e => setData('website_url', e.target.value)} />
                    
                    <div className="req-row">
                      <label className="req-field">
                        <span>{t('training_page.form_name')}</span>
                        <input type="text" placeholder={t('training_page.form_name_ph')} value={data.name} onChange={e => setData('name', e.target.value)} required />
                        {errors.name && <span className="field-err">{errors.name}</span>}
                      </label>
                      <label className="req-field">
                        <span>{t('training_page.form_company')}</span>
                        <input type="text" placeholder={t('training_page.form_company_ph')} value={data.company} onChange={e => setData('company', e.target.value)} />
                        {errors.company && <span className="field-err">{errors.company}</span>}
                      </label>
                    </div>
                    <label className="req-field">
                      <span>{t('training_page.form_email')}</span>
                      <input type="email" placeholder={t('training_page.form_email_ph')} value={data.email} onChange={e => setData('email', e.target.value)} required />
                      {errors.email && <span className="field-err">{errors.email}</span>}
                    </label>
                    <label className="req-field">
                      <span>{t('training_page.form_learn')}</span>
                      <textarea rows="3" placeholder={t('training_page.form_learn_ph')} value={data.learn} onChange={e => setData('learn', e.target.value)} required />
                      {errors.learn && <span className="field-err">{errors.learn}</span>}
                    </label>
                    <div className="req-field req-field--inline">
                      <span>{t('training_page.form_format')}</span>
                      <div className="req-pills" role="group" aria-label="Preferred format">
                        {['onsite', 'hybrid', 'online'].map(f => (
                          <button key={f} type="button" className={`req-pill${data.format === f ? ' is-active' : ''}`} onClick={() => setData('format', f)}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    {errors.format && <span className="field-err">{errors.format}</span>}
                    <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} disabled={processing}>
                      {processing ? 'Submitting...' : t('training_page.form_submit')}
                      {!processing && <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
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
