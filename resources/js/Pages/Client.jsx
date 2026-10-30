import React from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Client({ clients = [] }) {
  const { t } = useTranslation();

  const getCtaBtnText = () => {
    const keyVal = t('client_page.cta_btn1');
    if (keyVal && keyVal !== 'client_page.cta_btn1') return keyVal;
    const keyVal2 = t('client_page.cta_btn_1');
    if (keyVal2 && keyVal2 !== 'client_page.cta_btn_1') return keyVal2;
    return 'Book For Consultancy';
  };

  const stats = [
    { num: t('client_page.stat1_n') || '25', label: t('client_page.stat1_l') || 'Years Combined Experience' },
    { num: t('client_page.stat2_n') || '30', label: t('client_page.stat2_l') || 'Expert Network' },
    { num: t('client_page.stat3_n') || '12', label: t('client_page.stat3_l') || 'Industries Covered' },
    { num: t('client_page.stat4_n') || '8', label: t('client_page.stat4_l') || 'Enterprise Clients Served' },
  ];

  return (
    <MainLayout>
      <SeoHead pageCode="client" />

      {/* ============================ HERO ============================ */}
      <section className="client-hero has-geo-bg">
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal>
            <div className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '28px' }}>
              <Link href="/">{t('nav.home')}</Link>
              <span className="sep">/</span>
              <span className="cur">{t('nav.clients') || 'Clients'}</span>
            </div>
            
            <h1>
              <span style={{ fontWeight: '400' }}>{t('client_page.intro_title_1') || 'Trusted by '}</span>
              <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('client_page.intro_title_accent') || 'Industry Leaders'}</span>
              <span style={{ fontWeight: '400' }}>{t('client_page.intro_title_2') || ' Across Regions.'}</span>
            </h1>
            <p className="client-hero__desc">
              {t('client_page.hero_desc') || "We partner with Chinese businesses scaling in Indonesia - from fintech leaders to consumer tech pioneers - delivering market entry, growth strategy, and operational excellence."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="client-stats">
        <div className="container">
          <Staggered delay={100} staggerDelay={80} className="client-stats__grid">
            {stats.map((item, idx) => {
              const cleanNum = String(item.num || '').replace(/[^0-9]/g, '');
              return (
                <div key={idx} className="client-stat-card">
                  <div className="client-stat-card__num">
                    {cleanNum}<span>+</span>
                  </div>
                  <div className="client-stat-card__label">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </Staggered>
        </div>
      </section>

      {/* ============================ LOGOS & NETWORK ============================ */}
      <section className="client-logos">
        <div className="container">
          <ScrollReveal>
            <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px auto', maxWidth: '640px' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>{t('client_page.logos_eyebrow') || 'Our Clients'}</div>
              <h2 className="t-h2" style={{ marginTop: '14px', fontSize: '36px' }}>{t('client_page.logos_title') || 'Companies That Trust 8vice'}</h2>
              <p style={{ color: 'var(--color-gray-600)', marginTop: '12px', fontSize: '16px' }}>
                {t('client_page.case_desc') || "A selection of the businesses we've helped land, scale, and adapt in Indonesia."}
              </p>
            </div>
          </ScrollReveal>

          {/* Logo Cards Grid */}
          <Staggered delay={150} staggerDelay={60} className="client-logos__grid">
            {clients.map((client, idx) => {
              const imgSrc = client.image ? (client.image.startsWith('/') ? client.image : `/storage/${client.image}`) : null;

              return (
                <div key={client.id || idx} className="client-logo-card">
                  {imgSrc ? (
                    <img 
                      src={imgSrc} 
                      alt={client.name}
                      style={{
                        maxHeight: '48px',
                        maxWidth: '170px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {client.glyph && (
                        <span style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '8px', 
                          background: 'rgba(214,40,40,0.1)', 
                          color: 'var(--color-red)', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontWeight: 700 
                        }}>
                          {client.glyph}
                        </span>
                      )}
                      <span style={{ color: 'var(--color-ink)', fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                        {client.name}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </Staggered>
        </div>
      </section>

      {/* ============================ EXECUTIVE QUOTE ============================ */}
      <section className="section section--ink" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '5%', fontSize: '400px', color: 'rgba(255,255,255,0.02)', fontFamily: 'serif', lineHeight: 1, zIndex: 0, pointerEvents: 'none' }}>
          "
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '880px', textAlign: 'center' }}>
          <ScrollReveal>
            <blockquote style={{ border: 0, padding: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3.2vw, 34px)', color: '#fff', fontStyle: 'italic', lineHeight: '1.45', margin: '0 0 36px 0' }}>
              "{t('client_page.testi_quote') || 'They understand the pace of a Shenzhen tech giant and the realities of Indonesian operations. A rare bridge.'}"
            </blockquote>
            
            <div className="byline" style={{ justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
              <img 
                src="/images/profil/wei_chen.webp" 
                alt="David Chen" 
                style={{ 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '2px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
                }} 
              />
              <div style={{ textAlign: 'left' }}>
                <div className="byline__name" style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>
                  {t('client_page.testi_author') || 'David Chen'}
                </div>
                <div className="byline__role" style={{ color: 'var(--color-gray-400)', fontSize: '14px', marginTop: '2px' }}>
                  {t('client_page.testi_title') || 'Director of APAC Expansion · Major Chinese Tech Firm'}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="section section--paper" style={{ padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="cta-band" style={{ background: '#141519', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 className="t-h2" style={{ color: '#fff' }}>
                {t('client_page.cta_title') || 'Ready to join them?'}
              </h2>
              <p className="t-body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>
                {t('client_page.cta_desc') || 'Schedule a candid conversation about your plans in Indonesia.'}
              </p>
              <div className="hero__ctas" style={{ marginTop: '32px' }}>
                <Link href="/contact" className="btn btn--primary btn--lg">
                  {getCtaBtnText()}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </MainLayout>
  );
}
