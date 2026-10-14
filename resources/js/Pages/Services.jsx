import React from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Services({ services, industryCoverages }) {
  const { t, locale } = useTranslation();

  return (
    <MainLayout>
      <SeoHead pageCode="services" />

      {/* ============================ HERO ============================ */}
      <section className="about-hero" style={{ paddingBottom: '160px' }}>
        <div className="about-hero__bg"></div>
        <div className="container">
          <Staggered delay={100} staggerDelay={150}>
            <div className="about-hero__eyebrow">
              <span className="about-hero__dot"></span>
              Our Services
            </div>
            
            <h1>
              {t('services_page.hero_title')}
            </h1>
            
            <p className="about-hero__desc">
              {t('services_page.hero_desc')}
            </p>
          </Staggered>
        </div>
      </section>

      {/* ============================ SERVICE PILLARS ============================ */}
      <section style={{ backgroundColor: 'var(--ink-black)', paddingBottom: '120px', marginTop: '-80px' }}>
        <div className="container">
          
          <Staggered delay={300} staggerDelay={200} className="grid-responsive grid-responsive--320" style={{ gap: '24px', position: 'relative', zIndex: 10 }}>
            {(services?.length > 0 ? services : []).map((service, idx) => (
              <div key={idx} className="bento-box" style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column' }}>
                <div className="bento-num">0{idx + 1}</div>
                <div style={{ color: 'var(--hero-accent)', marginBottom: '24px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </div>
                <h3 style={{ fontSize: '28px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', marginBottom: '40px', flexGrow: 1 }}>{service.description}</p>
                <Link href={service.link_url || '/contact'} style={{ color: 'var(--hero-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {locale === 'id' ? 'Pelajari' : 'Discover'} {service.title}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            ))}
          </Staggered>
        </div>
      </section>

      {/* ============================ HOW IT WORKS ============================ */}
      <section style={{ backgroundColor: '#141414', padding: '120px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="about-hero__eyebrow">
              <span className="about-hero__dot"></span>
              {t('services_page.how_eyebrow')}
            </div>
            <h2 style={{ fontSize: '40px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '80px' }}>{t('services_page.how_title')}</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={100} className="grid-responsive grid-responsive--240" style={{ gap: '40px' }}>
            
            <div style={{ position: 'relative', paddingRight: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--hero-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>1</div>
              <h3 style={{ fontSize: '22px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>{t('services_page.step1_title')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>{t('services_page.step1_desc')}</p>
            </div>

            <div style={{ position: 'relative', paddingRight: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--hero-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>2</div>
              <h3 style={{ fontSize: '22px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>{t('services_page.step2_title')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>{t('services_page.step2_desc')}</p>
            </div>

            <div style={{ position: 'relative', paddingRight: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--hero-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>3</div>
              <h3 style={{ fontSize: '22px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>{t('services_page.step3_title')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>{t('services_page.step3_desc')}</p>
            </div>

            <div style={{ position: 'relative', paddingRight: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--hero-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>4</div>
              <h3 style={{ fontSize: '22px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>{t('services_page.step4_title')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>{t('services_page.step4_desc')}</p>
            </div>

          </Staggered>
        </div>
      </section>

      {/* ============================ INDUSTRIES ============================ */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '120px 0' }}>
        <div className="container">
          {/* Industries Content */}
          <div className="grid-responsive grid-responsive--2" style={{ gap: '64px', alignItems: 'start' }}>
            <ScrollReveal>
              <div className="about-hero__eyebrow">
                <span className="about-hero__dot"></span>
                {t('services_page.ind_eyebrow')}
              </div>
              <h2 style={{ fontSize: '40px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '24px' }}>{t('services_page.ind_title')}</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', fontSize: '18px' }}>
                {t('services_page.ind_desc')}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {industryCoverages?.map((ind, i) => (
                  <span key={i} style={{ padding: '10px 20px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '14px', whiteSpace: 'nowrap', backgroundColor: '#111' }}>
                    {ind.title}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section style={{ padding: '120px 0', backgroundColor: '#141414' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ backgroundColor: 'var(--ink-black)', borderRadius: '24px', padding: '80px 40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h2 style={{ fontSize: '36px', color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '20px' }}>
                {t('services_page.cta_title').split('?')[0]}? <span style={{ color: 'var(--hero-accent)' }}>{t('services_page.cta_title').split('?')[1]}</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
                {t('services_page.cta_desc')}
              </p>
              <Link href="/contact" className="btn" style={{ backgroundColor: 'var(--hero-accent)', color: '#fff', border: 'none', padding: '16px 32px', fontSize: '16px', borderRadius: '40px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                {t('services_page.cta_btn')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </MainLayout>
  );
}
