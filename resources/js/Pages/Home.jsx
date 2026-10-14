import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';
import SeoHead from '@/Components/SeoHead';

export default function Home({ clients, caseStudies, insights, bookReviews, courses, highlights, siteSettings, industryCoverages, statistics, heroBanners }) {
  const { t } = useTranslation();
  const rotatingWords = [t('home.what_word_1'), t('home.what_word_2'), t('home.what_word_3')];

  const targetIndustries = ["Educational Institutional", "Pharmacy", "Tourism & Travel"];
  let mainIndustries = industryCoverages?.filter(g => g.description && !targetIndustries.includes(g.title)) || [];
  const mergedIndustries = industryCoverages?.filter(g => targetIndustries.includes(g.title)) || [];
  if (mergedIndustries.length > 0) {
      mainIndustries.push({
          title: "More Category",
          icon: mergedIndustries.find(g => g.icon)?.icon || '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
          description: mergedIndustries.map(i => i.title).join(",")
      });
  }
  const extraIndustries = industryCoverages?.filter(g => !g.description && !targetIndustries.includes(g.title)).map(g => g.title) || [];

  const [heroIndex, setHeroIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const { data: form, setData: setForm, post: postForm, processing: processingForm, reset: resetForm, errors: errorsForm } = useForm({
    email: '',
    website_url: '', // honeypot
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    postForm('/subscribe', {
      preserveScroll: true,
      onSuccess: () => {
        setNewsletterSubmitted(true);
        resetForm();
      }
    });
  };
  const [fade, setFade] = useState(true);
  const [activeReason, setActiveReason] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  const reasons = [
    {
      title: t('home.why_r1_title'),
      desc: t('home.why_r1_desc')
    },
    {
      title: t('home.why_r2_title'),
      desc: t('home.why_r2_desc')
    },
    {
      title: t('home.why_r3_title'),
      desc: t('home.why_r3_desc')
    },
    {
      title: t('home.why_r4_title'),
      desc: t('home.why_r4_desc')
    }
  ];

  useEffect(() => {
    if (heroBanners?.length > 1) {
      const heroInterval = setInterval(() => {
        setHeroIndex(prev => (prev + 1) % heroBanners.length);
      }, 8000);
      return () => clearInterval(heroInterval);
    }
  }, [heroBanners]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 400); // 400ms fade out
    }, 2500); // Switch every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout settings={siteSettings}>
      <SeoHead pageCode="home" />

      {/* ============================ 1. HERO ============================ */}
      <section 
        className="hero has-geo-bg" 
        data-screen-label="Hero"
        style={{
          background: 'radial-gradient(ellipse 90% 55% at 85% 15%, rgba(214, 40, 40, 0.22) 0%, rgba(164, 30, 32, 0.06) 50%, transparent 75%), radial-gradient(ellipse 60% 50% at 10% 85%, rgba(214, 40, 40, 0.12) 0%, transparent 55%), #0C0D10',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>
        <ScrollReveal variant="up">
          <div className="hero__inner container" style={{ paddingTop: '52px', paddingBottom: '68px', minHeight: 'auto' }}>
            <div className="hero__copy">
              <div className="eyebrow on-dark hero__eyebrow" style={{ marginBottom: '22px' }}>
                {heroBanners?.[heroIndex]?.eyebrow || t('home.hero_eyebrow')}
              </div>

            <h1 className="t-display" style={{ fontSize: 'clamp(36px, 4vw, 50px)', maxWidth: 'none', width: 'auto', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              {heroBanners?.[heroIndex]?.title || t('home.hero_title_1')}<span className="accent" style={{ color: 'var(--color-red)' }}>{heroBanners?.[heroIndex]?.title_accent ? ` ${heroBanners[heroIndex].title_accent}` : ` ${t('home.hero_title_accent')}`}</span>
            </h1>
            <p className="t-body-lg hero__sub" style={{ whiteSpace: 'pre-line', fontSize: '16px', lineHeight: '1.65', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '32px' }}>
              {heroBanners?.[heroIndex]?.description || t('home.hero_sub_1') + '\n\n' + t('home.hero_sub_2')}
            </p>
            <div className="hero__ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link href={heroBanners?.[heroIndex]?.button_1_url || "/contact"} className="btn btn--primary btn--lg" style={{ boxShadow: '0 8px 24px rgba(214, 40, 40, 0.35)' }}>
                <span>{heroBanners?.[heroIndex]?.button_1_text || t('home.hero_cta_1')}</span>
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              <a href={heroBanners?.[heroIndex]?.button_2_url || "#help"} className="btn btn--ghost-light btn--lg" style={{ backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.2)' }}>
                <svg className="ico ico-16" viewBox="0 0 24 24" style={{ stroke: 'rgba(255,255,255,0.8)' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 12 12 8 12"></polyline></svg>
                <span>{heroBanners?.[heroIndex]?.button_2_text || t('home.hero_cta_2')}</span>
              </a>
            </div>
            
            {/* M3 Refined Stats Cards (Proportional numbers & subtle icons) */}
            <div 
              className="hero__meta" 
              style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
                paddingTop: '24px', 
                marginTop: '0', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                gap: '14px', 
                width: '100%' 
              }}
            >
              {(statistics?.length > 0 ? statistics : [
                { num: "25+", title: "Years Experience", description: "Combined track record" },
                { num: "100+", title: "Clients Served", description: "Trusted globally" },
                { num: "20+", title: "Industry Sectors", description: "Deep market coverage" }
              ]).map((stat, i) => {
                const statIcons = [
                  <svg key="0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
                  <svg key="1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                  <svg key="2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                ];

                return (
                  <div 
                    key={i} 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.07)', 
                      borderRadius: '14px', 
                      padding: '14px 16px',
                      transition: 'all 240ms ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div className="hero__stat-num" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1', color: '#FFFFFF' }}>
                        {stat.num.replace("+", "")}<span className="unit" style={{ fontSize: '18px', color: 'var(--color-red)', fontWeight: 700 }}>+</span>
                      </div>
                      <div style={{ opacity: 0.9 }}>
                        {statIcons[i % statIcons.length]}
                      </div>
                    </div>
                    <div className="hero__stat-label" style={{ fontWeight: 600, fontSize: '12px', color: '#FFFFFF', marginBottom: '2px' }}>{stat.title}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.3 }}>{stat.description}</div>
                  </div>
                );
              })}
            </div>
            </div>

          <div className="hero__visual" id="hero-visual">
            {heroBanners?.length > 1 && !heroImageError ? (
              <div 
                style={{ 
                  position: "relative", 
                  width: "100%", 
                  height: "440px", 
                  borderRadius: "24px", 
                  overflow: "hidden",
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.6), 0 0 50px -10px rgba(214, 40, 40, 0.22)'
                }}
              >
                {heroBanners.map((banner, i) => (
                  <img width="800" height="600" 
                    key={banner.id || i} 
                    src={`/storage/${banner.image}`} 
                    onError={() => setHeroImageError(true)}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: i === heroIndex ? 1 : 0, transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }} 
                    alt={banner.title || 'Hero Banner'} 
                  />
                ))}

                {/* Subtle dark gradient overlay on image */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,13,16,0.8) 0%, rgba(12,13,16,0.1) 40%, transparent 100%)', pointerEvents: 'none' }} />

                {/* M3 Slide Counter & Controls Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '18px',
                    right: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    background: 'rgba(15, 16, 20, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                      {String(heroIndex + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>/</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)' }}>
                      {String(heroBanners.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Interactive Slide Dots */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {heroBanners.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setHeroIndex(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        style={{
                          width: dotIdx === heroIndex ? '22px' : '7px',
                          height: '7px',
                          borderRadius: '999px',
                          background: dotIdx === heroIndex ? 'var(--color-red)' : 'rgba(255, 255, 255, 0.3)',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                          boxShadow: dotIdx === heroIndex ? '0 0 10px rgba(214, 40, 40, 0.6)' : 'none'
                        }}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <button
                      onClick={() => setHeroIndex(prev => (prev - 1 + heroBanners.length) % heroBanners.length)}
                      aria-label="Previous slide"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer'
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button
                      onClick={() => setHeroIndex(prev => (prev + 1) % heroBanners.length)}
                      aria-label="Next slide"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer'
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : heroBanners?.length === 1 && !heroImageError ? (
              <div 
                className="hero__visual" 
                style={{ 
                  position: "relative",
                  width: "100%", 
                  height: "440px", 
                  borderRadius: "24px", 
                  overflow: "hidden",
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.6), 0 0 50px -10px rgba(214, 40, 40, 0.22)'
                }}
              >
              {heroBanners && heroBanners.length > 0 && heroBanners[0].image ? (
                <img width="800" height="600" src={heroBanners[0].image.startsWith('/') ? heroBanners[0].image : `/storage/${heroBanners[0].image}`} onError={() => setHeroImageError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={heroBanners[0].title || 'Hero Banner'} />
              ) : (
                <img width="800" height="600" src="/images/article-sample.webp" onError={() => setHeroImageError(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Default Hero Banner" />
              )}
            </div>) : (
              <div className="hero-viz" data-viz="skyline">
                <svg className="skyline" viewBox="0 0 560 420" role="img" aria-label="China to Indonesia corridor skyline">
                <defs>
                  <linearGradient id="grd-glr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--hero-accent, #D62828)" stopOpacity=".08" />
                    <stop offset="100%" stopColor="var(--hero-accent, #D62828)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="grd-path" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--hero-accent, #D62828)" stopOpacity=".6" />
                    <stop offset="50%" stopColor="var(--hero-accent, #D62828)" stopOpacity=".2" />
                    <stop offset="100%" stopColor="var(--hero-accent, #D62828)" stopOpacity=".6" />
                  </linearGradient>
                  <linearGradient id="grd-glow-l" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--hero-accent, #D62828)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--hero-accent, #D62828)" stopOpacity=".08" />
                    <stop offset="100%" stopColor="var(--hero-accent, #D62828)" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Glow background */}
                <ellipse cx="280" cy="250" rx="260" ry="60" fill="url(#grd-glow-l)" />

                {/* ===== LEFT: China skyline ===== */}
                <g>
                  {/* Building 1 - short wide */}
                  <rect className="bld" x="10" y="265" width="30" height="95" rx="2" />
                  <rect className="bld-win" x="16" y="275" width="4" height="4" />
                  <rect className="bld-win" x="26" y="275" width="4" height="4" />
                  <rect className="bld-win" x="16" y="295" width="4" height="4" />
                  <rect className="bld-win" x="26" y="295" width="4" height="4" />

                  {/* Building 2 - medium with antenna */}
                  <rect className="bld--near" x="44" y="200" width="26" height="160" rx="2" />
                  <line className="bld-ant" x1="57" y1="180" x2="57" y2="200" strokeWidth="1.5" />
                  <circle className="bld-ant-dot" cx="57" cy="178" r="2" />
                  <rect className="bld-win" x="50" y="215" width="5" height="5" />
                  <rect className="bld-win" x="59" y="215" width="5" height="5" />
                  <rect className="bld-win" x="50" y="235" width="5" height="5" />
                  <rect className="bld-win" x="59" y="235" width="5" height="5" />
                  <rect className="bld-win" x="50" y="255" width="5" height="5" />
                  <rect className="bld-win" x="59" y="255" width="5" height="5" />
                  <rect className="bld-win" x="50" y="275" width="5" height="5" />
                  <rect className="bld-win" x="59" y="275" width="5" height="5" />

                  {/* Building 3 - tall, angled roof */}
                  <rect className="bld" x="74" y="160" width="18" height="200" rx="2" />
                  <polygon className="bld" points="74,160 83,140 92,160" />
                  <rect className="bld-win" x="79" y="200" width="4" height="4" />
                  <rect className="bld-win" x="79" y="225" width="4" height="4" />
                  <rect className="bld-win" x="79" y="250" width="4" height="4" />
                  <rect className="bld-win" x="79" y="275" width="4" height="4" />

                  {/* Building 4 - wide tower with grid windows */}
                  <rect className="bld--near" x="96" y="170" width="20" height="190" rx="2" />
                  <rect className="bld-win" x="100" y="180" width="4" height="4" />
                  <rect className="bld-win" x="108" y="180" width="4" height="4" />
                  <rect className="bld-win" x="100" y="195" width="4" height="4" />
                  <rect className="bld-win" x="108" y="195" width="4" height="4" />
                  <rect className="bld-win" x="100" y="210" width="4" height="4" />
                  <rect className="bld-win" x="108" y="210" width="4" height="4" />
                  <rect className="bld-win" x="100" y="225" width="4" height="4" />
                  <rect className="bld-win" x="108" y="225" width="4" height="4" />
                  <rect className="bld-win" x="100" y="240" width="4" height="4" />
                  <rect className="bld-win" x="108" y="240" width="4" height="4" />

                  {/* Building 5 - stepped/tiered */}
                  <rect className="bld" x="120" y="240" width="14" height="120" rx="1" />
                  <rect className="bld--near" x="134" y="190" width="20" height="170" rx="2" />
                  <rect className="bld-win" x="138" y="200" width="4" height="4" />
                  <rect className="bld-win" x="146" y="200" width="4" height="4" />
                  <rect className="bld-win" x="138" y="220" width="4" height="4" />
                  <rect className="bld-win" x="146" y="220" width="4" height="4" />
                  <rect className="bld-win" x="138" y="240" width="4" height="4" />
                  <rect className="bld-win" x="146" y="240" width="4" height="4" />

                  {/* Building 6 - slim tall */}
                  <rect className="bld--near" x="158" y="210" width="12" height="150" rx="1" />
                  <rect className="bld-win" x="161" y="220" width="3" height="3" />
                  <rect className="bld-win" x="161" y="240" width="3" height="3" />
                  <rect className="bld-win" x="161" y="260" width="3" height="3" />
                </g>

                {/* Ground line */}
                <line x1="0" y1="358" x2="560" y2="358" stroke="rgba(255,255,255,.08)" strokeWidth="1" />

                {/* ===== RIGHT: Indonesia skyline ===== */}
                <g>
                  {/* Building 7 - wide low */}
                  <rect className="bld" x="370" y="270" width="28" height="90" rx="2" />
                  <rect className="bld-win" x="376" y="280" width="4" height="4" />
                  <rect className="bld-win" x="384" y="280" width="4" height="4" />
                  <rect className="bld-win" x="376" y="300" width="4" height="4" />

                  {/* Building 8 - with dome top */}
                  <rect className="bld--near" x="400" y="220" width="22" height="140" rx="2" />
                  <path className="bld--accent" d="M400,220 Q411,200 422,220" fill="var(--hero-accent, #D62828)" opacity=".3" />
                  <rect className="bld-win" x="405" y="235" width="5" height="5" />
                  <rect className="bld-win" x="413" y="235" width="5" height="5" />
                  <rect className="bld-win" x="405" y="255" width="5" height="5" />
                  <rect className="bld-win" x="413" y="255" width="5" height="5" />
                  <rect className="bld-win" x="405" y="275" width="5" height="5" />
                  <rect className="bld-win" x="413" y="275" width="5" height="5" />

                  {/* Building 9 - tallest tower */}
                  <rect className="bld" x="426" y="130" width="20" height="230" rx="2" />
                  <polygon className="bld" points="436,110 443,130 429,130" />
                  <line className="bld-ant" x1="436" y1="95" x2="436" y2="110" strokeWidth="1.5" />
                  <circle className="bld-ant-dot" cx="436" cy="92" r="2.5" />
                  <rect className="bld-win" x="431" y="145" width="4" height="4" />
                  <rect className="bld-win" x="438" y="145" width="4" height="4" />
                  <rect className="bld-win" x="431" y="165" width="4" height="4" />
                  <rect className="bld-win" x="438" y="165" width="4" height="4" />
                  <rect className="bld-win" x="431" y="185" width="4" height="4" />
                  <rect className="bld-win" x="438" y="185" width="4" height="4" />
                  <rect className="bld-win" x="431" y="205" width="4" height="4" />
                  <rect className="bld-win" x="438" y="205" width="4" height="4" />
                  <rect className="bld-win" x="431" y="225" width="4" height="4" />
                  <rect className="bld-win" x="438" y="225" width="4" height="4" />

                  {/* Building 10 - stepped */}
                  <rect className="bld--near" x="450" y="180" width="18" height="180" rx="2" />
                  <rect className="bld-win" x="454" y="195" width="4" height="4" />
                  <rect className="bld-win" x="460" y="195" width="4" height="4" />
                  <rect className="bld-win" x="454" y="215" width="4" height="4" />
                  <rect className="bld-win" x="460" y="215" width="4" height="4" />
                  <rect className="bld-win" x="454" y="235" width="4" height="4" />
                  <rect className="bld-win" x="460" y="235" width="4" height="4" />

                  {/* Building 11 - medium */}
                  <rect className="bld" x="472" y="240" width="24" height="120" rx="2" />
                  <rect className="bld-win" x="477" y="250" width="5" height="5" />
                  <rect className="bld-win" x="486" y="250" width="5" height="5" />
                  <rect className="bld-win" x="477" y="270" width="5" height="5" />
                  <rect className="bld-win" x="486" y="270" width="5" height="5" />

                  {/* Building 12 - small */}
                  <rect className="bld--near" x="500" y="260" width="18" height="100" rx="1" />
                  <rect className="bld-win" x="504" y="270" width="4" height="4" />
                  <rect className="bld-win" x="504" y="290" width="4" height="4" />

                  {/* Building 13 - wide end */}
                  <rect className="bld" x="522" y="275" width="30" height="85" rx="2" />
                  <rect className="bld-win" x="528" y="285" width="4" height="4" />
                  <rect className="bld-win" x="536" y="285" width="4" height="4" />
                  <rect className="bld-win" x="528" y="305" width="4" height="4" />
                </g>

                {/* Ground */}
                <rect x="0" y="358" width="560" height="62" fill="rgba(255,255,255,.03)" rx="0" />

                {/* ===== CORRIDOR / CONNECTION ===== */}
                {/* Outer glow trail */}
                <path className="corridor-glw" d="M155 155 Q280 30 420 145" stroke="var(--hero-accent, #D62828)" strokeWidth="8" fill="none" opacity=".06" />
                {/* Main arc */}
                <path className="corridor" d="M155 155 Q280 30 420 145" />
                {/* Dashed inner trail */}
                <path className="corridor-dsh" d="M155 155 Q280 30 420 145" stroke="var(--hero-accent, #D62828)" strokeWidth="1" fill="none" strokeDasharray="3 5" opacity=".3" />

                {/* Arrowhead on corridor */}
                <polygon className="corridor-arr" points="420,145 412,140 413,150" fill="var(--hero-accent, #D62828)" opacity=".6" />

                {/* City nodes */}
                <circle className="node" cx="155" cy="155" r="7" />
                <circle className="node-pls" cx="155" cy="155" r="11" stroke="var(--hero-accent, #D62828)" strokeWidth="1" fill="none" opacity=".3" />
                <circle className="node" cx="420" cy="145" r="7" />
                <circle className="node-pls" cx="420" cy="145" r="11" stroke="var(--hero-accent, #D62828)" strokeWidth="1" fill="none" opacity=".3" />

                {/* Data flow dots along corridor */}
                <circle className="flow-dot" cx="220" cy="105" r="2" fill="var(--hero-accent, #D62828)" opacity=".5" />
                <circle className="flow-dot" cx="280" cy="80" r="2.5" fill="var(--hero-accent, #D62828)" opacity=".6" />
                <circle className="flow-dot" cx="340" cy="100" r="2" fill="var(--hero-accent, #D62828)" opacity=".4" />
                <circle className="flow-dot" cx="370" cy="117" r="1.5" fill="var(--hero-accent, #D62828)" opacity=".5" />

                {/* Subtle data connection arcs */}
                <path d="M170 170 Q260 120 200 180" stroke="rgba(214,40,40,.08)" strokeWidth="1" fill="none" />
                <path d="M410 160 Q330 110 390 170" stroke="rgba(214,40,40,.08)" strokeWidth="1" fill="none" />

                {/* Labels */}
                <text className="label" x="145" y="400" textAnchor="middle">China</text>
                <text className="label" x="425" y="400" textAnchor="middle">Indonesia</text>
              </svg>
              </div>
            )}
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================ 2. TRUST BAR ============================ */}
      <ScrollReveal variant="fade">
        <section className="trust" data-screen-label="Trust bar">
          <p className="trust__cap container">{t('home.trust_cap')}</p>
          <div className="trust__track-wrap">
            <div className="trust__track" id="trust-track">
              {(() => {
                const clientList = clients?.filter(l => l.image) || [];
                return [...clientList, ...clientList]?.map((l, idx) => {
                  return (
                    <span key={idx} className="logo-mark" title={l.name}>
                      <img src={l.image ? (l.image.startsWith('/') ? l.image : `/storage/${l.image}`) : '/images/article-sample.webp'} alt={l.name} width="210" height="60" />
                    </span>
                  );
                });
              })()}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 3. HOW WE HELP ============================ */}
      <section className="section section--paper" id="help" data-screen-label="How we help">
        <div className="container">
          <ScrollReveal variant="up">
            <div className="section-head">
              <div className="eyebrow">{t('home.help_eyebrow')}</div>
              <h2 className="t-h2">{t('home.help_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.help_title_accent')}</span></h2>
              <p className="t-body-lg">{t('home.help_sub')}</p>
            </div>
          </ScrollReveal>
          <Staggered className="cards-3" staggerDelay={120}>
            <article className="help-card">
              <div className="help-card__num">01</div>
              <div className="help-card__icon">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <h3 className="t-h3">{t('home.help_card1_title')}</h3>
              <p>{t('home.help_card1_desc')}</p>
              <Link href="/market-intelligence" className="link-arrow">{t('home.help_card1_cta')}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </article>
            <article className="help-card">
              <div className="help-card__num">02</div>
              <div className="help-card__icon">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
              </div>
              <h3 className="t-h3">{t('home.help_card2_title')}</h3>
              <p>{t('home.help_card2_desc')}</p>
              <Link href="/consultancy" className="link-arrow">{t('home.help_card2_cta')}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </article>
            <article className="help-card">
              <div className="help-card__num">03</div>
              <div className="help-card__icon">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="13" y2="17"></line></svg>
              </div>
              <h3 className="t-h3">{t('home.help_card3_title')}</h3>
              <p>{t('home.help_card3_desc')}</p>
              <Link href="/training" className="link-arrow">{t('home.help_card3_cta')}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </article>
          </Staggered>
        </div>
      </section>

      {/* ============================ 3.5. EFFECTIVE CAPABILITIES ============================ */}
      <ScrollReveal variant="up">
        <section className="section section--paper" style={{ paddingTop: '40px', paddingBottom: '120px' }} data-screen-label="What we can do">
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 min(100%, 400px)', textAlign: 'center' }}>
                <h2 className="t-display" style={{ fontSize: 'clamp(36px, 4vw, 48px)', lineHeight: '1.2', margin: 0 }}>
                  {t('home.what_title')}<br />
                  <span style={{ color: 'var(--hero-accent, #D62828)', opacity: fade ? 1 : 0, transition: 'opacity 0.4s ease-in-out', display: 'inline-block' }}>{rotatingWords[wordIndex]}</span>
                </h2>
              </div>
              <div style={{ flex: '1 1 min(100%, 500px)' }}>
                <p className="t-body-lg" style={{ margin: 0, color: '#444' }}>
                  {t('home.what_sub')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 4. MACRO BLOCK ============================ */}
      <ScrollReveal variant="up">
        <section className="section section--ink macro has-geo-bg" data-screen-label="Why China to Indonesia">
          <div className="geo-bg">
            <div className="geo-bg__grid"></div>
            <div className="geo-bg__gradients"></div>
            <div className="geo-bg__dots"></div>
            <div className="geo-bg__boxes"></div>
          </div>
          <div className="container">
            <div className="macro__inner">
              <ScrollReveal variant="left" delay={100}>
                <div className="macro__stat">
                  <span className="big">{siteSettings?.macro_stat_value || '$130B'}</span>
                  <span className="cap">{siteSettings?.macro_stat_label || t('home.macro_stat_cap')}</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="right" delay={200}>
                <div>
                  <h2 className="t-h2">{t('home.macro_title_1')}<span className="accent">{t('home.macro_title_accent')}</span>{t('home.macro_title_2')}</h2>
                  <p className="t-body-lg">{t('home.macro_desc_1')}</p>
                  <p className="t-body-lg">{t('home.macro_desc_2')}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* ============================ WHY CHOOSE US ============================ */}
            <div style={{ marginTop: '140px', paddingBottom: '60px' }}>
              <ScrollReveal variant="up">
                <h2 className="t-display" style={{ textAlign: 'center', marginBottom: '60px', color: 'white', fontSize: 'clamp(32px, 4vw, 48px)' }}>
                  {t('home.why_title')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.why_title_accent')}</span>
                </h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                  <div style={{ flex: '1 1 min(100%, 500px)', height: '420px', borderRadius: '16px', overflow: 'hidden', position: 'relative', backgroundColor: '#0a0a0a', backgroundImage: 'url(/images/why_choose_us_thumbnail.webp)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                  </div>

                  <div style={{ flex: '1 1 min(100%, 400px)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {reasons.map((r, i) => (
                      <div key={i} onClick={() => setActiveReason(i)} style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: activeReason === i ? 1 : 0.5, transition: 'all 0.3s ease-in-out' }}>
                          <h3 className="t-h4" style={{ margin: 0, color: 'white', fontWeight: '400', fontSize: activeReason === i ? '28px' : '22px', transition: 'all 0.3s' }}>
                            {r.title}
                          </h3>
                          <span style={{ fontSize: activeReason === i ? '24px' : '20px', transition: 'all 0.3s', color: 'white', fontWeight: '300', transform: activeReason === i ? 'translateY(2px)' : 'none' }}>
                            {activeReason === i ? '↓' : '→'}
                          </span>
                        </div>

                        <div style={{
                          maxHeight: activeReason === i ? '200px' : '0',
                          overflow: 'hidden',
                          opacity: activeReason === i ? 1 : 0,
                          transition: 'all 0.4s ease-in-out'
                        }}>
                          <div style={{ paddingTop: '16px', paddingBottom: '8px', color: '#ccc', lineHeight: '1.6', fontSize: '15px', paddingRight: '20px' }}>
                            {r.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                  <Link href="/about" className="btn btn--ghost-light btn--lg" style={{ borderRadius: '40px', padding: '14px 40px' }}>
                    {t('home.why_cta')}
                    <span style={{ marginLeft: '8px', fontSize: '18px' }}>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 4.5. INDUSTRY COVERAGE ============================ */}
      <ScrollReveal variant="up">
        <section className="section section--white" style={{ paddingBottom: '20px' }} data-screen-label="Industry Coverage">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>{t('home.ind_eyebrow')}</div>
              <h2 className="t-h2">{t('home.ind_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.ind_title_accent')}</span></h2>
            </div>

            
            {/* 1 Single Row Grid (4 Columns on Desktop) */}
            <div className="industry-coverage-grid">
              {mainIndustries.map((group, gIdx) => {
                const items = (group.description || "").split(",").map(i => i.trim());
                return (
                <div key={gIdx} className="industry-coverage-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '12px', 
                      backgroundColor: 'rgba(214, 40, 40, 0.08)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--color-red)',
                      flexShrink: 0
                    }} dangerouslySetInnerHTML={{ __html: group.icon || '' }} />
                    <h3 className="t-h3" style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)' }}>{group.title}</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', borderBottom: i < items.length - 1 ? '1px solid #F0F0F0' : 'none', color: 'var(--color-gray-600)', fontSize: '13.5px', lineHeight: 1.4 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )})}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '40px' }}>
              {extraIndustries.map((chip, i) => (
                <span key={i} style={{ padding: '10px 24px', borderRadius: '100px', border: '1px solid #EAEAEA', backgroundColor: 'white', color: '#555', fontSize: '15px' }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 5. CASE STUDIES ============================ */}
      <section className="section section--white" style={{ paddingTop: '40px', paddingBottom: '120px' }} data-screen-label="Case studies">
        <div className="container">
          <ScrollReveal variant="up">
            <div className="section-head">
              <div className="eyebrow">{t('home.case_eyebrow')}</div>
              <h2 className="t-h2">{t('home.case_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.case_title_accent')}</span></h2>
              <p className="t-body-lg">{t('home.case_sub')}</p>
            </div>
          </ScrollReveal>
          <Staggered className="cards-3" staggerDelay={120}>
            {caseStudies?.slice(0, 3).map((c, idx) => (
              <article key={idx} className="case-card">
                <div className="case-card__cover on-dark" style={{ position: 'relative', overflow: 'hidden' }}>
                  {c.cover ? (
                    <img width="800" height="600" src={c.cover.startsWith('/') ? c.cover : `/storage/${c.cover}`} alt={c.h} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <img width="800" height="600" src="/images/article-sample.webp" alt="Case Study Cover" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                <div className="case-card__body">
                  <span className="tag">{c.tag}</span>
                  <h3 className="t-h3">{c.h}</h3>
                  <p>{c.p}</p>
                  <Link href={`/case-study/${c.slug}`} className="link-arrow">{t('home.case_cta')}
                    <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </article>
            ))}
          </Staggered>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <Link 
              href="/case-study" 
              className="btn btn--primary btn--lg" 
              style={{ minWidth: '240px', justifyContent: 'center', boxShadow: '0 8px 24px rgba(214, 40, 40, 0.22)' }}
            >
              <span>{t('home.case_view_all') || 'Explore All Case Studies'}</span>
              <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ 6. APPROACH ============================ */}
      <ScrollReveal variant="up">
        <section className="section section--ink has-geo-bg" data-screen-label="Our approach">
          <div className="geo-bg">
            <div className="geo-bg__grid"></div>
            <div className="geo-bg__rects"></div>
            <div className="geo-bg__bars"></div>
          </div>
          <div className="container">
            <ScrollReveal variant="up" delay={100}>
              <div className="approach__top">
                <div>
                  <div className="eyebrow on-dark" style={{ marginBottom: '20px' }}>{t('home.app_eyebrow')}</div>
                  <h2 className="t-h2">{t('home.app_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.app_title_accent')}</span></h2>
                </div>
                <div>
                  <p className="t-body-lg">{t('home.app_desc_1')}</p>
                  <p className="t-body-lg">{t('home.app_desc_2')}</p>
                </div>
              </div>
            </ScrollReveal>
            <Staggered className="principles" staggerDelay={100}>
              <div className="principle">
                <div className="principle__num">01</div>
                <h3 className="t-h4">{t('home.app_p1_title')}</h3>
                <p>{t('home.app_p1_desc')}</p>
              </div>
              <div className="principle">
                <div className="principle__num">02</div>
                <h3 className="t-h4">{t('home.app_p2_title')}</h3>
                <p>{t('home.app_p2_desc')}</p>
              </div>
              <div className="principle">
                <div className="principle__num">03</div>
                <h3 className="t-h4">{t('home.app_p3_title')}</h3>
                <p>{t('home.app_p3_desc')}</p>
              </div>
              <div className="principle">
                <div className="principle__num">04</div>
                <h3 className="t-h4">{t('home.app_p4_title')}</h3>
                <p>{t('home.app_p4_desc')}</p>
              </div>
            </Staggered>

            {/* ============================ 8. VIDEO MANIFESTO (Embedded inside Approach) ============================ */}
            <div style={{ marginTop: '80px', paddingBottom: '80px' }}>
              <div 
                style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
                onClick={() => setIsVideoOpen(true)}
                className="video-manifesto-thumb"
              >
                <img width="800" height="600" src="/images/video_manifesto_cover.webp" alt="Video Thumbnail" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, transition: 'opacity 0.4s ease' }} />
                
                <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
                  <span style={{ color: 'var(--hero-accent, #D62828)', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('home.vid_title')} · {t('home.vid_duration')}</span>
                </div>

                <div style={{ position: 'absolute', bottom: '5%', left: '5%', right: '5%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
                  <div style={{ maxWidth: '600px' }}>
                    <h3 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'white', lineHeight: '1.2', margin: '0 0 16px 0', fontWeight: '300' }}>
                      <span style={{ color: 'var(--hero-accent, #D62828)', fontStyle: 'italic' }}>{t('home.vid_quote_1')}</span>{t('home.vid_quote_2')}<br />
                      {t('home.vid_quote_3')}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', margin: 0 }}>
                      {t('home.vid_sub')}
                    </p>
                  </div>
                  <div className="play-button" style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', transition: 'transform 0.3s ease', flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                      <path d="M6 4L20 12L6 20V4Z" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* VIDEO POPUP MODAL */}
      {isVideoOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)' }}>
          <button onClick={() => setIsVideoOpen(false)} style={{ position: 'absolute', top: '32px', right: '32px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', zIndex: 10000 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div style={{ width: '90%', maxWidth: '1000px', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o4EifELHZNg?autoplay=1&modestbranding=1&rel=0&showinfo=0" title="Video Manifesto" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* ============================ 9. INSIGHT PREVIEW ============================ */}
      <ScrollReveal variant="up">
        <section className="section section--white" style={{ paddingBottom: '120px' }} data-screen-label="Insight preview">
          <div className="container">
            <div className="section-head" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', maxWidth: 'none', gap: '24px' }}>
              <div style={{ maxWidth: '620px' }}>
                <div className="eyebrow">{t('home.ins_eyebrow')}</div>
                <h2 className="t-h2" style={{ marginTop: '20px' }}>{t('home.ins_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.ins_title_accent')}</span></h2>
              </div>
              <Link href="/article" className="link-arrow">{t('home.ins_cta')}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
            <Staggered className="insight-grid" staggerDelay={100}>
              {insights?.slice(0, 3).map((a, idx) => (
                <article key={idx} className="article-card">
                  <Link href={`/article/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="article-card__thumb" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', paddingBottom: '60%', borderRadius: '12px', marginBottom: '16px' }}>
                      {a.cover ? (
                        <img width="800" height="600" src={a.cover.startsWith('/') ? a.cover : `/storage/${a.cover}`} alt={a.title || a.t} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <img width="800" height="600" src="/images/article-sample.webp" alt="Insight Cover" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      )}
                    </div>
                    <div className="meta"><span className="cat">{a.cat || a.category}</span><span className="rt">{a.rt || '5 min read'}</span></div>
                    <h3 className="t-h3">{a.title || a.t}</h3>
                  </Link>
                </article>
              ))}
            </Staggered>
            <div style={{ textAlign: 'center', marginTop: '52px' }}>
              <Link 
                href="/article" 
                className="btn btn--primary btn--lg" 
                style={{ minWidth: '240px', justifyContent: 'center', boxShadow: '0 8px 24px rgba(214, 40, 40, 0.22)' }}
              >
                <span>{t('home.ins_view_all') || 'View All Insights & News'}</span>
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 8.5. SUBSCRIBE ============================ */}
      <ScrollReveal variant="up">
        <section className="section subscribe" data-screen-label="Subscribe">
          <div className="container">
            <div className="subscribe__inner">
              <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>{t('home.sub_eyebrow')}</div>
              <h2 className="t-h2">{t('home.sub_title_1')}<span style={{ color: 'var(--hero-accent, #D62828)' }}>{t('home.sub_title_accent')}</span></h2>
              <p className="t-body-lg">{t('home.sub_desc')}</p>
              {newsletterSubmitted ? (
                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                  <h4 style={{ color: 'var(--color-success)', fontSize: '20px', marginBottom: '8px' }}>Subscribed!</h4>
                  <p>You'll receive our next insight soon.</p>
                </div>
              ) : (
                <form className="sub-form" onSubmit={handleSubscribe}>
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input type="text" name="website_url" value={form.website_url} onChange={e => setForm('website_url', e.target.value)} tabIndex="-1" autoComplete="off" />
                  </div>
                  <input type="email" placeholder={t('home.sub_placeholder')} value={form.email} onChange={e => setForm('email', e.target.value)} required />
                  <button type="submit" disabled={processingForm} className="btn btn--primary" style={{ opacity: processingForm ? 0.7 : 1 }}>
                    {processingForm ? 'Subscribing...' : t('home.sub_btn')}
                  </button>
                </form>
              )}
              {errorsForm.email && <div className="text-red-500 text-sm mt-2" style={{ color: 'var(--color-error)' }}>{errorsForm.email}</div>}
              <div className="sub-micro">{t('home.sub_micro')}</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ============================ 11. FINAL CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="section final-cta has-geo-bg" data-screen-label="Final CTA">
          <div className="geo-bg">
            <div className="geo-bg__grid"></div>
            <div className="geo-bg__rects"></div>
          </div>
          <div className="container">
            <div className="final-cta__inner">
              <div className="eyebrow on-dark" style={{ justifyContent: 'center', marginBottom: '20px' }}>{t('home.cta_eyebrow')}</div>
              <h2 className="t-h1">{t('home.cta_title_1')}<span className="accent">{t('home.cta_title_accent')}</span></h2>
              <p className="t-body-lg">{t('home.cta_desc')}</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">{t('home.cta_btn_1')}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
                <Link href="/contact" className="btn btn--ghost-light btn--lg">{t('home.cta_btn_2')}</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
