import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Client() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  // Dummy clients data
  const clientsData = [
    { name: 'Alipay', industry: 'Energy & Tech', src: '/images/logos-client/alipay.png' },
    { name: 'DiDi', industry: 'Logistics', src: '/images/logos-client/didi.png' },
    { name: 'DingTalk', industry: 'Energy & Tech', src: '/images/logos-client/dingtalk.png' },
    { name: 'Coolita', industry: 'Retail', src: '/images/logos-client/coolita.png' },
    { name: 'Skyworth', industry: 'Energy & Tech', src: '/images/logos-client/skyworth.png' },
    { name: 'MangoTV', industry: 'Cross-Border', src: '/images/logos-client/mangotv.webp' },
    { name: 'JD.ID', industry: 'Retail', src: null },
    { name: 'J&T Express', industry: 'Logistics', src: null },
    { name: 'ByteDance', industry: 'Energy & Tech', src: null },
    { name: 'Anker', industry: 'Retail', src: null }
  ];

  const filters = ['All', 'Logistics', 'Energy & Tech', 'Cross-Border', 'Retail'];

  const filteredClients = activeFilter === 'All' 
    ? clientsData 
    : clientsData.filter(c => c.industry === activeFilter);

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.client_title')}</title>
        <meta name="description" content={t('meta.client_desc')} />
        <meta property="og:title" content={t('meta.client_title')} />
        <meta property="og:description" content={t('meta.client_desc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-default.png" />
      </Head>

      {/* ============================ HERO ============================ */}
      <section className="client-hero has-geo-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px', paddingBottom: '100px' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__rects"></div>
        </div>
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb" style={{ justifyContent: 'center', marginBottom: '24px' }}>
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Clients</span>
            </div>
            
            <h1 style={{ textAlign: 'center' }}>
              <span style={{ fontWeight: '400', color: '#fff' }}>{t('client_page.intro_title_1') || 'The companies '}</span>
              <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>{t('client_page.intro_title_accent') || 'building'}</span>
              <span style={{ fontWeight: '400', color: '#fff' }}>{t('client_page.intro_title_2') || ' the corridor.'}</span>
            </h1>
            <p className="client-hero__desc" style={{ margin: '0 auto', textAlign: 'center' }}>
              We partner with Chinese operators who demand ground truth in Indonesia. From tech giants to emerging retail brands, these are the teams we're proud to work alongside.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="client-stats">
        <div className="container">
          <ScrollReveal>
            <div className="client-stats__grid">
              <div className="client-stat-card">
                <div className="client-stat-card__n">50<span className="unit">+</span></div>
                <div className="client-stat-card__l">Enterprise clients served</div>
              </div>
              <div className="client-stat-card">
                <div className="client-stat-card__n">6</div>
                <div className="client-stat-card__l">Major industries covered</div>
              </div>
              <div className="client-stat-card">
                <div className="client-stat-card__n">85<span className="unit">%</span></div>
                <div className="client-stat-card__l">Repeat engagement rate</div>
              </div>
              <div className="client-stat-card">
                <div className="client-stat-card__n">12</div>
                <div className="client-stat-card__l">Fortune 500 partners</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ LOGOS & FILTERS ============================ */}
      <section className="client-logos" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="client-logos__head">
              <div className="section-head"><div className="eyebrow">Our Network</div></div>
              
              {/* Category Filters */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
                {filters.map((filter, i) => {
                  const filterKey = filter === 'All' ? 'filter_all' :
                                    filter === 'Logistics' ? 'filter_logistics' :
                                    filter === 'Energy & Tech' ? 'filter_energy' :
                                    filter === 'Cross-Border' ? 'filter_crossborder' : 'filter_retail';
                  return (
                    <button 
                      key={i}
                      onClick={() => setActiveFilter(filter)}
                      className={`client-filter ${activeFilter === filter ? 'is-active' : ''}`}
                      style={{ padding: '8px 24px', fontSize: '14px' }}
                    >
                      {t(`client_page.${filterKey}`) || filter}
                    </button>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Dynamic Grid */}
          <Staggered delay={100} staggerDelay={50} className="client-logos__grid">
            {filteredClients.map((client, idx) => (
              <div key={`${client.name}-${idx}`} className="client-logo-card">
                {client.src ? (
                  <img src={client.src} alt={client.name} />
                ) : (
                  <span style={{ color: 'rgba(0,0,0,0.6)', fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </Staggered>
        </div>
      </section>

      {/* ============================ EXECUTIVE QUOTE ============================ */}
      <section className="section section--ink" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '5%', fontSize: '400px', color: 'rgba(255,255,255,0.02)', fontFamily: 'serif', lineHeight: 1, zIndex: 0 }}>
          "
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center' }}>
          <ScrollReveal>
            <blockquote style={{ border: 0, padding: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 4vw, 36px)', color: '#fff', fontStyle: 'italic', lineHeight: '1.4', margin: '0 0 40px 0' }}>
              "{t('client_page.testi_quote') || 'They understand the pace of a Shenzhen tech giant and the realities of Indonesian operations. A rare bridge.'}"
            </blockquote>
            
            <div className="byline" style={{ justifyContent: 'center' }}>
              <div className="ph byline__avatar" style={{ border: '1px solid rgba(255,255,255,.2)' }}><span className="ph__tag" style={{ fontSize: '9px' }}>PHOTO</span></div>
              <div style={{ textAlign: 'left' }}>
                <div className="byline__name" style={{ color: '#fff' }}>{t('client_page.testi_author') || 'VP of Southeast Asia'}</div>
                <div className="byline__role">{t('client_page.testi_title') || 'Major Chinese Tech Firm'}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band">
              <h2 className="t-h2">{t('client_page.cta_title') || 'Ready to join them?'}</h2>
              <p className="t-body-lg">{t('client_page.cta_desc') || 'Schedule a candid conversation about your plans in Indonesia.'}</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  {t('client_page.cta_btn_1') || 'Book Free Consultancy'}
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
