import React, { useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { ServiceIcon, Arrow } from '@/Components/InnerBlocks';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getServices, getProcessSteps } from '@/data/services';

/* -------------------------------------------------------------------------- */
/*  Animated Modern City Skyline & Architectural Grid Background SVG          */
/* -------------------------------------------------------------------------- */
function ModernCityBg({ opacity = 0.26, flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Architectural Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '56px 56px',
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.038) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.038) 1px, transparent 1px)',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%)',
        }}
      />

      {/* Glowing Red Intersection Dots */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(230, 57, 70, 0.38) 1.25px, transparent 1.25px)',
          backgroundSize: '56px 56px',
          backgroundPosition: '-0.6px -0.6px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, #000 25%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, #000 25%, transparent 90%)',
          opacity: 0.65,
        }}
      />

      {/* Animated Modern City Skyline Vector */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '280px',
          opacity,
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
      >
        <defs>
          <linearGradient id="svcIdxCityFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(230, 57, 70, 0.32)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="rgba(8, 9, 12, 0.0)" />
          </linearGradient>
          <linearGradient id="svcIdxCityStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="70%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        <path
          d="M0,320 L0,250 L45,250 L45,195 L85,195 L85,235 L115,235 L115,140 L140,105 L165,140 L165,240 L205,240 L205,170 L255,170 L255,220 L290,220 L290,120 L310,120 L310,75 L314,75 L314,120 L335,120 L335,230 L380,230 L380,180 L430,180 L430,245 L480,245 L480,150 L530,130 L530,235 L580,235 L580,190 L635,190 L635,250 L690,250 L690,165 L715,115 L740,165 L740,245 L790,245 L790,145 L840,145 L840,225 L885,225 L885,95 L910,60 L935,95 L935,230 L980,230 L980,160 L1035,160 L1035,215 L1085,215 L1085,125 L1140,125 L1140,235 L1190,235 L1190,175 L1245,175 L1245,220 L1295,220 L1295,150 L1350,150 L1350,240 L1400,240 L1400,200 L1440,200 L1440,320 Z"
          fill="url(#svcIdxCityFade)"
          stroke="url(#svcIdxCityStroke)"
          strokeWidth="1.2"
        />

        <line
          x1="0"
          y1="265"
          x2="1440"
          y2="265"
          stroke="rgba(230, 57, 70, 0.28)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="svc-city-stream"
        />
        <line
          x1="0"
          y1="290"
          x2="1440"
          y2="290"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 18"
          className="svc-city-stream-reverse"
        />

        <circle cx="140" cy="105" r="3" fill="#E63946" className="svc-city-beacon" />
        <circle cx="312" cy="75" r="3.5" fill="#FF6B76" className="svc-city-beacon" />
        <circle cx="530" cy="130" r="2.5" fill="#E63946" className="svc-city-beacon" />
        <circle cx="715" cy="115" r="3" fill="#FF6B76" className="svc-city-beacon" />
        <circle cx="910" cy="60" r="3.5" fill="#E63946" className="svc-city-beacon" />
        <circle cx="1112" cy="125" r="2.5" fill="#FF6B76" className="svc-city-beacon" />
      </svg>
    </div>
  );
}

export default function Services() {
  const { lang } = useTranslation();
  const isId = lang === 'id';
  const services = getServices(lang);
  const processSteps = getProcessSteps(lang);

  // Google Material Design 3 (M3) Scroll Transition Observer
  useEffect(() => {
    const elements = document.querySelectorAll('.m3-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const copy = isId
    ? {
        home: 'Beranda',
        breadcrumb: 'Layanan Kami',
        eyebrow: 'KAPABILITAS INTI · KONSULTASI STRATEGIS',
        heroTitleLine1: 'Strategi yang Menghubungkan.',
        heroTitleLine2: 'Kemitraan yang Menggerakkan Bisnis Maju.',
        heroLead:
          'Kami menyediakan layanan konsultasi strategis terpadu dan pengembangan bisnis lintas negara yang dirancang untuk membantu organisasi memasuki pasar baru, membangun relasi strategis, dan membuka peluang pertumbuhan di Indonesia dan Tiongkok.',
        gridKicker: '01 · 6 PILAR LAYANAN',
        gridTitle: 'Kapabilitas Terpadu untuk Pertumbuhan Lintas Batas',
        gridLead: 'Pilih layanan untuk melihat pendekatan, ruang lingkup dukungan, dan cara kami bekerja.',
        learnMore: 'Lihat Detail Layanan',
        processKicker: '02 · CARA KAMI BEKERJA',
        processTitle: 'Metodologi Kerja Lintas Negara',
        ctaEyebrow: 'MULAI DISKUSI STRATEGIS',
        ctaTitle: 'Butuh Pendekatan Khusus untuk Kebutuhan Bisnis Anda?',
        ctaDesc:
          'Setiap penugasan dirancang sesuai sasaran, target industri, dan prioritas ekspansi Anda. Mari diskusikan bagaimana 8 Vice dapat mendukung langkah strategis Anda.',
        ctaPrimary: 'Jadwalkan Diskusi Strategis',
        ctaSecondary: 'Lihat Gerbang Indonesia–China'
      }
    : {
        home: 'Home',
        breadcrumb: 'Our Services',
        eyebrow: 'CORE CAPABILITIES · STRATEGIC ADVISORY',
        heroTitleLine1: 'Strategy That Connects.',
        heroTitleLine2: 'Partnerships That Move Business Forward.',
        heroLead:
          'We provide integrated strategic advisory and cross-border business development services designed to help organizations enter new markets, establish strategic relationships, and unlock growth opportunities across Indonesia and China.',
        gridKicker: '01 · 6 SERVICE PILLARS',
        gridTitle: 'Integrated Capabilities for Cross-Border Growth',
        gridLead: 'Select a service to see our approach, scope of support, and how we work.',
        learnMore: 'View Service Details',
        processKicker: '02 · HOW WE WORK',
        processTitle: 'Our Cross-Border Process',
        ctaEyebrow: 'START A CONVERSATION',
        ctaTitle: 'Looking for a Tailored Advisory Engagement?',
        ctaDesc:
          'Every cross-border initiative is structured around your specific market priorities and objectives. Speak with our team to scope your engagement.',
        ctaPrimary: 'Discuss Your Business Objectives',
        ctaSecondary: 'Explore Indonesia–China Gateway'
      };

  return (
    <MainLayout>
      <SeoHead pageCode="services" />

      <div className="svc-index-root">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .svc-index-root {
              background: #08090C;
              color: #FFFFFF;
              position: relative;
              overflow: hidden;
            }
            @keyframes svcStreamMove {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -200; }
            }
            @keyframes svcBeaconPulse {
              0%, 100% { opacity: 0.35; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.35); }
            }
            .svc-city-stream {
              animation: svcStreamMove 14s linear infinite;
            }
            .svc-city-stream-reverse {
              animation: svcStreamMove 18s linear infinite reverse;
            }
            .svc-city-beacon {
              transform-origin: center;
              animation: svcBeaconPulse 3.2s ease-in-out infinite;
            }

            /* Google Material Design 3 (M3) Emphasized Transition System */
            .m3-reveal {
              opacity: 0;
              transform: translateY(34px);
              transition: opacity 0.78s cubic-bezier(0.05, 0.7, 0.1, 1),
                          transform 0.78s cubic-bezier(0.05, 0.7, 0.1, 1);
              will-change: opacity, transform;
            }
            .m3-reveal.m3-reveal--scale {
              transform: translateY(24px) scale(0.96);
            }
            .m3-reveal.is-visible {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
            .m3-delay-1 { transition-delay: 0.08s; }
            .m3-delay-2 { transition-delay: 0.16s; }
            .m3-delay-3 { transition-delay: 0.24s; }
            .m3-delay-4 { transition-delay: 0.32s; }
            .m3-delay-5 { transition-delay: 0.40s; }
            .m3-delay-6 { transition-delay: 0.48s; }

            .svc-eyebrow-pill {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 7px 16px;
              border-radius: 999px;
              background: rgba(230, 57, 70, 0.12);
              border: 1px solid rgba(230, 57, 70, 0.35);
              color: #FF7B7B;
              font-size: 11.5px;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            .svc-eyebrow-dot {
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #E63946;
              box-shadow: 0 0 10px #E63946;
            }
            .svc-glass-card {
              background: linear-gradient(180deg, rgba(20, 23, 32, 0.88) 0%, rgba(12, 14, 20, 0.94) 100%);
              border: 1px solid rgba(255, 255, 255, 0.09);
              border-radius: 22px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
              transition: transform 0.42s cubic-bezier(0.2, 0, 0, 1),
                          border-color 0.35s ease,
                          box-shadow 0.35s ease;
            }
            .svc-glass-card:hover {
              transform: translateY(-6px);
              border-color: rgba(230, 57, 70, 0.5);
              box-shadow: 0 26px 60px rgba(0, 0, 0, 0.65), 0 0 36px rgba(230, 57, 70, 0.16);
            }
            .svc-hero-frame {
              position: relative;
              border-radius: 28px;
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.14);
              box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 60px rgba(230, 57, 70, 0.16);
              background: #0D0F15;
            }
            .svc-hero-frame img {
              width: 100%;
              height: 500px;
              object-fit: cover;
              display: block;
              filter: brightness(0.74) contrast(1.1);
              transition: transform 0.9s cubic-bezier(0.2, 0, 0, 1);
            }
            .svc-hero-frame:hover img {
              transform: scale(1.04);
            }
            .svc-pillars-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
            }
            .svc-roadmap-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 24px;
              position: relative;
            }
            @media (max-width: 1024px) {
              .svc-pillars-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .svc-roadmap-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .svc-roadmap-connector {
                display: none !important;
              }
            }
            @media (max-width: 640px) {
              .svc-hero-frame img {
                height: 430px;
              }
              .svc-pillars-grid,
              .svc-roadmap-grid {
                grid-template-columns: 1fr;
              }
            }
          `
          }}
        />

        {/* ========================================================================= */}
        {/* 00 · HERO BANNER: CENTERED TITLE & BREADCRUMB + LARGE STATEMENT IMAGE     */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '64px 0 88px',
            background:
              'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(230, 57, 70, 0.20) 0%, rgba(230, 57, 70, 0.05) 48%, transparent 75%), #08090C',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.34} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal is-visible" style={{ textAlign: 'center', maxWidth: '940px', margin: '0 auto 44px' }}>
              <nav
                aria-label="Breadcrumb"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '22px'
                }}
              >
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  {copy.home}
                </Link>
                <span style={{ opacity: 0.35 }}>/</span>
                <span style={{ color: '#FF6B76', fontWeight: 600 }}>{copy.breadcrumb}</span>
              </nav>

              <div>
                <div className="svc-eyebrow-pill">
                  <span className="svc-eyebrow-dot" />
                  <span>{copy.eyebrow}</span>
                </div>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(34px, 4.6vw, 60px)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                <span style={{ display: 'block' }}>{copy.heroTitleLine1}</span>
                <span
                  style={{
                    display: 'block',
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #FF7B7B 55%, #E63946 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {copy.heroTitleLine2}
                </span>
              </h1>
            </div>

            {/* Large Panoramic Image with Embedded Hero Lead Statement Inside */}
            <div className="svc-hero-frame m3-reveal m3-reveal--scale is-visible m3-delay-1">
              <img src="/images/consultancy_hero.webp" alt={copy.breadcrumb} />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8, 9, 12, 0.25) 0%, rgba(8, 9, 12, 0.55) 45%, rgba(8, 9, 12, 0.95) 100%), radial-gradient(circle at 20% 85%, rgba(230, 57, 70, 0.32) 0%, transparent 55%)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '26px',
                  right: '26px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 15px',
                    borderRadius: '999px',
                    background: 'rgba(10, 12, 18, 0.84)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                  {copy.eyebrow}
                </span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  right: '30px',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    maxWidth: '980px',
                    margin: '0 auto',
                    padding: '30px 36px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.90) 0%, rgba(10, 12, 18, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderLeft: '5px solid #E63946',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(17px, 2vw, 23px)',
                      fontWeight: 700,
                      lineHeight: 1.45,
                      color: '#FFFFFF',
                      margin: 0,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    &ldquo;{copy.heroLead}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 01 · 6 SERVICE PILLARS GRID                                               */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '108px 0',
            background:
              'radial-gradient(ellipse 75% 55% at 15% 35%, rgba(230, 57, 70, 0.12) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.22} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
              <div className="svc-eyebrow-pill">
                <span className="svc-eyebrow-dot" />
                <span>{copy.gridKicker}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: '0 0 16px'
                }}
              >
                {copy.gridTitle}
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.68, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                {copy.gridLead}
              </p>
            </div>

            <div className="svc-pillars-grid">
              {services.map((svc, idx) => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className={`svc-glass-card m3-reveal m3-delay-${(idx % 6) + 1}`}
                  style={{
                    padding: '34px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    borderTop: '3px solid #E63946'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                    <span
                      style={{
                        padding: '5px 12px',
                        borderRadius: '8px',
                        background: 'rgba(230, 57, 70, 0.14)',
                        border: '1px solid rgba(230, 57, 70, 0.35)',
                        color: '#FF7B7B',
                        fontSize: '13px',
                        fontWeight: 800,
                        letterSpacing: '0.08em'
                      }}
                    >
                      {svc.num}
                    </span>
                    <span
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(230, 57, 70, 0.12)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ServiceIcon slug={svc.id} />
                    </span>
                  </div>

                  <h3 style={{ fontSize: '21px', fontWeight: 700, lineHeight: 1.35, margin: '0 0 12px', color: '#FFFFFF' }}>
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.68)', margin: 0, flex: 1 }}>
                    {svc.summary}
                  </p>

                  <span
                    style={{
                      marginTop: '26px',
                      paddingTop: '18px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#E63946',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {copy.learnMore} <Arrow size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02 · HOW WE WORK (5-STEP CONNECTED ROADMAP)                               */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.28} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
              <div className="svc-eyebrow-pill">
                <span className="svc-eyebrow-dot" />
                <span>{copy.processKicker}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                {copy.processTitle}
              </h2>
            </div>

            <div className="svc-roadmap-grid">
              {processSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`m3-reveal m3-delay-${idx + 1}`}
                  style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '22px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #E63946 0%, #9E1B24 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 24px rgba(230, 57, 70, 0.55)',
                        position: 'relative',
                        zIndex: 3,
                        flexShrink: 0
                      }}
                    >
                      {step.num}
                    </div>

                    {idx < processSteps.length - 1 && (
                      <div
                        className="svc-roadmap-connector"
                        style={{
                          position: 'absolute',
                          left: '48px',
                          right: '-24px',
                          top: '50%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #E63946 0%, rgba(230, 57, 70, 0.25) 100%)',
                          transform: 'translateY(-50%)',
                          zIndex: 1
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="svc-glass-card"
                    style={{
                      padding: '28px 24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '0 0 10px',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {step.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.68,
                        color: 'rgba(255, 255, 255, 0.68)',
                        margin: 0
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03 · EXECUTIVE CTA BAND                                                   */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '96px 0 112px',
            background: '#08090C'
          }}
        >
          <ModernCityBg opacity={0.35} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div
              className="m3-reveal m3-reveal--scale"
              style={{
                padding: '56px 48px',
                borderRadius: '28px',
                background:
                  'radial-gradient(ellipse 85% 90% at 100% 100%, rgba(230, 57, 70, 0.28) 0%, rgba(16, 18, 26, 0.96) 65%)',
                border: '1px solid rgba(230, 57, 70, 0.4)',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.65)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px'
              }}
            >
              <div style={{ maxWidth: '680px' }}>
                <div className="svc-eyebrow-pill" style={{ marginBottom: '14px' }}>
                  <span className="svc-eyebrow-dot" />
                  <span>{copy.ctaEyebrow}</span>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    margin: '0 0 14px'
                  }}
                >
                  {copy.ctaTitle}
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.68,
                    color: 'rgba(255, 255, 255, 0.76)',
                    margin: 0
                  }}
                >
                  {copy.ctaDesc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 28px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                    color: '#FFFFFF',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 12px 28px rgba(230, 57, 70, 0.4)'
                  }}
                >
                  <span>{copy.ctaPrimary}</span>
                  <span>&rarr;</span>
                </Link>

                <Link
                  href="/gateway"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 26px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>{copy.ctaSecondary}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
