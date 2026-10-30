import React, { useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { ServiceIcon, Arrow } from '@/Components/InnerBlocks';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getServices, getService, getProcessSteps } from '@/data/services';

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
          <linearGradient id="svcCityFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(230, 57, 70, 0.32)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="rgba(8, 9, 12, 0.0)" />
          </linearGradient>
          <linearGradient id="svcCityStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="70%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        <path
          d="M0,320 L0,250 L45,250 L45,195 L85,195 L85,235 L115,235 L115,140 L140,105 L165,140 L165,240 L205,240 L205,170 L255,170 L255,220 L290,220 L290,120 L310,120 L310,75 L314,75 L314,120 L335,120 L335,230 L380,230 L380,180 L430,180 L430,245 L480,245 L480,150 L530,130 L530,235 L580,235 L580,190 L635,190 L635,250 L690,250 L690,165 L715,115 L740,165 L740,245 L790,245 L790,145 L840,145 L840,225 L885,225 L885,95 L910,60 L935,95 L935,230 L980,230 L980,160 L1035,160 L1035,215 L1085,215 L1085,125 L1140,125 L1140,235 L1190,235 L1190,175 L1245,175 L1245,220 L1295,220 L1295,150 L1350,150 L1350,240 L1400,240 L1400,200 L1440,200 L1440,320 Z"
          fill="url(#svcCityFade)"
          stroke="url(#svcCityStroke)"
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

/* -------------------------------------------------------------------------- */
/*  Bespoke Vector Icons for Service Deliverables & Capabilities              */
/* -------------------------------------------------------------------------- */
function DeliverableVectorIcon({ icon, size = 22 }) {
  const stroke = '#FF7B7B';
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: '1.9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { display: 'block' }
  };

  switch (icon) {
    case 'assessment':
      // Analytical Bar Chart with Uptrend Evaluation
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <polyline points="4 8 10 3 16 7 20 2" stroke="#E63946" strokeWidth="2.2" />
        </svg>
      );
    case 'strategy':
      // Compass / Precision Target Strategy
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(230, 57, 70, 0.35)" />
        </svg>
      );
    case 'model':
      // 3D Isometric Layers / Business Architecture
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" fill="rgba(230, 57, 70, 0.28)" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'positioning':
      // Strategic Positioning Spark / Star Beacon
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="rgba(230, 57, 70, 0.3)" />
        </svg>
      );
    case 'partner':
    case 'alliance':
      // Connected Partner Nodes / Strategic Synergies
      return (
        <svg {...props}>
          <circle cx="6" cy="12" r="3" fill="rgba(230, 57, 70, 0.3)" />
          <circle cx="18" cy="12" r="3" fill="rgba(230, 57, 70, 0.3)" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <line x1="12" y1="7" x2="12" y2="9.5" />
          <line x1="12" y1="14.5" x2="12" y2="17" />
        </svg>
      );
    case 'roadmap':
      // Trajectory Milestone Flag
      return (
        <svg {...props}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="rgba(230, 57, 70, 0.32)" />
          <line x1="4" y1="22" x2="4" y2="15" strokeWidth="2.2" />
        </svg>
      );
    case 'mapping':
      // Stakeholder Map Pin with Radar Pulse
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" fill="rgba(230, 57, 70, 0.45)" />
        </svg>
      );
    case 'liaison':
      // Institutional Pillar / Government Authority
      return (
        <svg {...props}>
          <line x1="3" y1="21" x2="21" y2="21" strokeWidth="2.2" />
          <line x1="6" y1="21" x2="6" y2="8" />
          <line x1="12" y1="21" x2="12" y2="8" />
          <line x1="18" y1="21" x2="18" y2="8" />
          <polygon points="12 2 2 8 22 8 12 2" fill="rgba(230, 57, 70, 0.35)" />
        </svg>
      );
    case 'meeting':
    case 'interview':
      // High-Level Executive Dialogue / Bilateral Session
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" fill="rgba(230, 57, 70, 0.25)" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'public_private':
      // Public-Private Partnership Shield
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(230, 57, 70, 0.25)" />
          <path d="M12 8v8" stroke="#E63946" strokeWidth="2.2" />
          <path d="M8 12h8" stroke="#E63946" strokeWidth="2.2" />
        </svg>
      );
    case 'dialogue':
      // Strategic Discussion & Forum Bubbles
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(230, 57, 70, 0.22)" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="13" y2="13" />
        </svg>
      );
    case 'comms':
    case 'pr':
      // Broadcast Megaphone / Corporate PR
      return (
        <svg {...props}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="rgba(230, 57, 70, 0.3)" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#E63946" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      );
    case 'partner_id':
    case 'monitoring':
      // Radar Search & Opportunity Identification
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2.2" />
          <line x1="11" y1="8" x2="11" y2="14" stroke="#E63946" />
          <line x1="8" y1="11" x2="14" y2="11" stroke="#E63946" />
        </svg>
      );
    case 'b2b':
      // Commercial Briefcase & Cross-Border Trade
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="rgba(230, 57, 70, 0.2)" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'delegation':
      // High-Level Trade Delegation Flight / Mission
      return (
        <svg {...props}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.3-1.8 1.1-.2.8.3 1.6 1.1 1.8l6.9 2.5-3.5 3.5-2.8-.7c-.5-.1-1 .1-1.3.5l-.9.9 3.5 2.1 2.1 3.5.9-.9c.4-.3.6-.8.5-1.3l-.7-2.8 3.5-3.5 2.5 6.9c.2.8 1 1.3 1.8 1.1.8-.2 1.3-1 1.1-1.8z" fill="rgba(230, 57, 70, 0.28)" />
        </svg>
      );
    case 'intro':
      // Key Gateway / Executive Door Opening
      return (
        <svg {...props}>
          <circle cx="7.5" cy="15.5" r="5.5" fill="rgba(230, 57, 70, 0.25)" />
          <path d="m21 2-9.6 9.6" strokeWidth="2.2" />
          <path d="m15.5 7.5 3 3L22 7l-3-3" stroke="#E63946" />
        </svg>
      );
    case 'mou':
    case 'proposal':
      // Formal Agreement / Bilateral MOU
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(230, 57, 70, 0.2)" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'localization':
    case 'cross_cultural':
      // Cross-Border Culture & Language Localization
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="rgba(230, 57, 70, 0.22)" />
        </svg>
      );
    case 'imc':
      // Integrated Multichannel Communications
      return (
        <svg {...props}>
          <rect x="2" y="2" width="8" height="8" rx="2" fill="rgba(230, 57, 70, 0.2)" />
          <rect x="14" y="2" width="8" height="8" rx="2" />
          <rect x="14" y="14" width="8" height="8" rx="2" fill="rgba(230, 57, 70, 0.2)" />
          <rect x="2" y="14" width="8" height="8" rx="2" />
        </svg>
      );
    case 'media_strategy':
    case 'press_conf':
      // Press & Media Broadcast Network
      return (
        <svg {...props}>
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" fill="rgba(230, 57, 70, 0.24)" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      );
    case 'crisis_plan':
      // Crisis Protection & Rapid Response
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(230, 57, 70, 0.25)" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="#E63946" strokeWidth="2.2" />
          <line x1="12" y1="16" x2="12.01" y2="16" stroke="#E63946" strokeWidth="3.2" />
        </svg>
      );
    case 'reputation':
      // Corporate Reputation & Executive Stature
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="rgba(230, 57, 70, 0.35)" />
        </svg>
      );
    case 'co_investor':
    case 'structure':
      // Investment Facilitation & Corporate Structuring
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" stroke="#E63946" strokeWidth="2" />
        </svg>
      );
    case 'site_visit':
      // Physical Factory / Industrial Site Inspection
      return (
        <svg {...props}>
          <path d="M2 20h20" strokeWidth="2.2" />
          <path d="M5 20V8l5 4V4l9 7v9" fill="rgba(230, 57, 70, 0.25)" />
          <line x1="18" y1="14" x2="18" y2="16" stroke="#E63946" strokeWidth="2" />
        </svg>
      );
    case 'follow_up':
    default:
      // Structured Implementation Workflow
      return (
        <svg {...props}>
          <polyline points="9 11 12 14 22 4" stroke="#E63946" strokeWidth="2.2" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
  }
}

export default function ServiceDetail({ slug }) {
  const { lang } = useTranslation();
  const isId = lang === 'id';
  const allServices = getServices(lang);
  const svc = getService(lang, slug) || allServices[0];
  const others = allServices.filter((s) => s.id !== svc.id);
  const processSteps = getProcessSteps(lang);

  // Google Material Design 3 (M3) Scroll & Route Transition Observer
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
  }, [slug, lang]);

  const copy = isId
    ? {
        home: 'Beranda',
        services: 'Layanan',
        eyebrow: `LAYANAN ${svc.num} · INDONESIA–CHINA`,
        overviewKicker: '01 · PENDEKATAN KAMI',
        supportKicker: '02 · RUANG LINGKUP',
        supportTitle: 'Dukungan Kami Meliputi',
        processKicker: '03 · CARA KAMI BEKERJA',
        processTitle: 'Metodologi Kerja Lintas Negara',
        noteLabel: 'Catatan',
        othersKicker: '04 · LAYANAN LAINNYA',
        othersTitle: 'Jelajahi Kapabilitas Lainnya',
        ctaEyebrow: 'MULAI DISKUSI STRATEGIS',
        ctaTitle: 'Diskusikan Kebutuhan Anda Bersama Kami',
        ctaDesc: 'Ceritakan sasaran dan pasar target Anda. Tim kami akan meninjau dan merumuskan langkah awal yang tepat.',
        ctaPrimary: 'Konsultasikan Layanan Ini',
        ctaSecondary: 'Semua Layanan'
      }
    : {
        home: 'Home',
        services: 'Services',
        eyebrow: `SERVICE ${svc.num} · INDONESIA–CHINA`,
        overviewKicker: '01 · OUR APPROACH',
        supportKicker: '02 · SCOPE OF SUPPORT',
        supportTitle: 'Our Support May Include',
        processKicker: '03 · HOW WE WORK',
        processTitle: 'Our Cross-Border Process',
        noteLabel: 'Note',
        othersKicker: '04 · OTHER SERVICES',
        othersTitle: 'Explore Our Other Capabilities',
        ctaEyebrow: 'START A CONVERSATION',
        ctaTitle: 'Discuss Your Requirements with Us',
        ctaDesc: 'Tell us about your objectives and target market. Our team will review and determine the most appropriate next steps.',
        ctaPrimary: 'Inquire About This Service',
        ctaSecondary: 'All Services'
      };

  return (
    <MainLayout>
      <SeoHead title={`${svc.title} | 8 Vice`} description={svc.summary} />

      <div key={svc.id} className="svc-redesign-root">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .svc-redesign-root {
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
            .m3-reveal.m3-reveal--left {
              transform: translateX(-38px);
            }
            .m3-reveal.m3-reveal--right {
              transform: translateX(38px);
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
            .svc-deliverable-card {
              position: relative;
              border-top: 3px solid #E63946 !important;
              transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1),
                          border-color 0.35s ease,
                          box-shadow 0.35s ease,
                          background 0.35s ease;
            }
            .svc-deliverable-card:hover {
              transform: translateY(-8px);
              border-color: rgba(230, 57, 70, 0.55);
              box-shadow: 0 28px 65px rgba(0, 0, 0, 0.7), 0 0 40px rgba(230, 57, 70, 0.2);
            }
            .svc-deliverable-icon-box {
              width: 48px;
              height: 48px;
              border-radius: 14px;
              background: linear-gradient(135deg, rgba(230, 57, 70, 0.2) 0%, rgba(230, 57, 70, 0.06) 100%);
              border: 1px solid rgba(230, 57, 70, 0.45);
              box-shadow: 0 4px 18px rgba(230, 57, 70, 0.18);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #FF7B7B;
              flex-shrink: 0;
              transition: transform 0.35s ease, box-shadow 0.35s ease;
            }
            .svc-deliverable-card:hover .svc-deliverable-icon-box {
              transform: scale(1.08) rotate(3deg);
              box-shadow: 0 6px 24px rgba(230, 57, 70, 0.35);
            }
            .svc-split-2 {
              display: grid;
              grid-template-columns: 1.08fr 0.92fr;
              gap: 56px;
              align-items: stretch;
            }
            .svc-deliverables-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }
            .svc-roadmap-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 24px;
              position: relative;
            }
            .svc-others-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 20px;
            }
            @media (max-width: 1100px) {
              .svc-others-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            @media (max-width: 1024px) {
              .svc-split-2 {
                grid-template-columns: 1fr;
                gap: 40px;
              }
              .svc-deliverables-grid {
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
              .svc-deliverables-grid,
              .svc-roadmap-grid,
              .svc-others-grid {
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
            {/* Centered Breadcrumb & Title Block */}
            <div className="m3-reveal is-visible" style={{ textAlign: 'center', maxWidth: '940px', margin: '0 auto 36px' }}>
              {/* Centered Breadcrumb */}
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
                  marginBottom: '22px',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  {copy.home}
                </Link>
                <span style={{ opacity: 0.35 }}>/</span>
                <Link href="/services" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  {copy.services}
                </Link>
                <span style={{ opacity: 0.35 }}>/</span>
                <span style={{ color: '#FF6B76', fontWeight: 600 }}>{svc.title}</span>
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
                {svc.title}
              </h1>
            </div>

            {/* Large Panoramic Image with Embedded Summary Statement Inside */}
            <div className="svc-hero-frame m3-reveal m3-reveal--scale is-visible m3-delay-1">
              <img
                src={svc.heroImage || '/images/consultancy_hero.webp'}
                alt={svc.title}
                loading="lazy"
                decoding="async"
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8, 9, 12, 0.25) 0%, rgba(8, 9, 12, 0.55) 45%, rgba(8, 9, 12, 0.95) 100%), radial-gradient(circle at 20% 85%, rgba(230, 57, 70, 0.32) 0%, transparent 55%)'
                }}
              />

              {/* Top Corner Status Pills */}
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

                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(10, 12, 18, 0.84)',
                    border: '1px solid rgba(230, 57, 70, 0.45)',
                    backdropFilter: 'blur(10px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ServiceIcon slug={svc.id} size={22} />
                </span>
              </div>

              {/* Embedded Summary Statement Inside the Large Image */}
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
                      fontSize: 'clamp(17px, 2vw, 24px)',
                      fontWeight: 700,
                      lineHeight: 1.45,
                      color: '#FFFFFF',
                      margin: 0,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    &ldquo;{svc.summary}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 01 · OUR APPROACH (2-COLUMN BALANCED NARRATIVE & FRAMED VISUAL)           */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '108px 0',
            background:
              'radial-gradient(ellipse 70% 50% at 10% 35%, rgba(230, 57, 70, 0.11) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.18} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="svc-split-2">
              {/* Left Column: Headline, Paragraphs & Footnote Callout */}
              <div className="m3-reveal m3-reveal--left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                  <div className="svc-eyebrow-pill">
                    <span className="svc-eyebrow-dot" />
                    <span>{copy.overviewKicker}</span>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(28px, 3.3vw, 44px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    color: '#FFFFFF',
                    margin: '0 0 24px'
                  }}
                >
                  {svc.headline}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: svc.footnote ? '28px' : '0' }}>
                  {svc.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: i === 0 ? '17px' : '15.5px',
                        fontWeight: i === 0 ? 500 : 400,
                        lineHeight: 1.75,
                        color: i === 0 ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.72)',
                        margin: 0
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {svc.footnote && (
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.14) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      borderLeft: '4px solid #E63946',
                      borderTop: '1px solid rgba(255, 255, 255, 0.09)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.09)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.09)',
                      borderRadius: '0 16px 16px 0',
                      padding: '18px 22px'
                    }}
                  >
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.78)' }}>
                      <strong style={{ color: '#FF7B7B' }}>{copy.noteLabel}: </strong>
                      {svc.footnote}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Framed Executive Visual Showcase */}
              <div className="m3-reveal m3-reveal--right m3-delay-1">
                <div
                  style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '460px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(230, 57, 70, 0.14)',
                    background: '#0D0E13'
                  }}
                >
                  <img
                    src={svc.detailImage || '/images/consultation_advisory_bw.webp'}
                    alt={svc.photo}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(30%) contrast(1.08) brightness(0.88)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(8, 9, 12, 0.96) 0%, rgba(8, 9, 12, 0.35) 50%, rgba(8, 9, 12, 0.15) 100%)'
                    }}
                  />

                  <div style={{ position: 'absolute', top: '22px', left: '22px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '7px 14px',
                        borderRadius: '999px',
                        background: 'rgba(10, 12, 16, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(10px)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#FFFFFF',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                      {copy.eyebrow}
                    </span>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      right: '24px',
                      padding: '22px 24px',
                      borderRadius: '18px',
                      background: 'rgba(12, 14, 20, 0.88)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#FF7B7B',
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                      }}
                    >
                      {svc.photo}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>
                      {svc.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02 · SCOPE OF SUPPORT (6 DELIVERABLE CARDS GRID)                          */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 85% 55% at 50% 15%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.26} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
              <div className="svc-eyebrow-pill">
                <span className="svc-eyebrow-dot" />
                <span>{copy.supportKicker}</span>
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
                {copy.supportTitle}
              </h2>
            </div>

            <div className="svc-deliverables-grid">
              {svc.deliverables.map((item, i) => {
                const isObj = typeof item === 'object' && item !== null;
                const title = isObj ? item.title : item;
                const desc = isObj ? item.desc : null;
                const iconKey = isObj ? item.icon : 'assessment';

                return (
                  <div
                    key={i}
                    className={`svc-glass-card svc-deliverable-card m3-reveal m3-delay-${(i % 6) + 1}`}
                    style={{
                      padding: '30px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: '22px',
                      gap: '20px'
                    }}
                  >
                    <div>
                      {/* Top Header Row: Icon Box + Sequence Number */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div className="svc-deliverable-icon-box">
                          <DeliverableVectorIcon icon={iconKey} size={22} />
                        </div>

                        <span
                          style={{
                            fontFamily: 'monospace, monospace',
                            fontSize: '12.5px',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            color: '#FF7B7B',
                            background: 'rgba(230, 57, 70, 0.1)',
                            border: '1px solid rgba(230, 57, 70, 0.3)',
                            padding: '4px 10px',
                            borderRadius: '8px'
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Deliverable Title */}
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          lineHeight: 1.4,
                          color: '#FFFFFF',
                          margin: '0 0 12px',
                          letterSpacing: '-0.015em'
                        }}
                      >
                        {title}
                      </h3>

                      {/* Deliverable Notes / Explanatory Description */}
                      {desc && (
                        <p
                          style={{
                            fontSize: '14px',
                            lineHeight: 1.68,
                            color: 'rgba(255, 255, 255, 0.68)',
                            margin: 0
                          }}
                        >
                          {desc}
                        </p>
                      )}
                    </div>

                    {/* Bottom Status Accent */}
                    <div
                      style={{
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#FF7B7B'
                        }}
                      >
                        {isId ? 'RUANG LINGKUP DUKUNGAN' : 'DELIVERABLE SCOPE'}
                      </span>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: 'rgba(230, 57, 70, 0.14)',
                          border: '1px solid rgba(230, 57, 70, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FF6B76',
                          fontSize: '12px',
                          fontWeight: 800
                        }}
                      >
                        ✓
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03 · HOW WE WORK (5-STEP CONNECTED ROADMAP)                               */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230, 57, 70, 0.13) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.24} flip />

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
        {/* 04 · OTHER SERVICES (EXPLORE OTHER CAPABILITIES)                          */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '104px 0',
            background:
              'radial-gradient(ellipse 75% 55% at 85% 80%, rgba(230, 57, 70, 0.12) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.22} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px' }}>
              <div className="svc-eyebrow-pill">
                <span className="svc-eyebrow-dot" />
                <span>{copy.othersKicker}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                {copy.othersTitle}
              </h2>
            </div>

            <div className="svc-others-grid">
              {others.map((o, idx) => (
                <Link
                  key={o.id}
                  href={`/services/${o.id}`}
                  className={`svc-glass-card m3-reveal m3-delay-${idx + 1}`}
                  style={{
                    padding: '26px 24px',
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '18px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: 'rgba(230, 57, 70, 0.12)',
                          border: '1px solid rgba(230, 57, 70, 0.35)',
                          color: '#FF7B7B',
                          fontSize: '12px',
                          fontWeight: 800
                        }}
                      >
                        {o.num}
                      </span>
                      <span
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'rgba(230, 57, 70, 0.1)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <ServiceIcon slug={o.id} size={18} />
                      </span>
                    </div>

                    <div style={{ fontSize: '16.5px', fontWeight: 700, lineHeight: 1.4, color: '#FFFFFF' }}>
                      {o.title}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#E63946',
                      fontSize: '13px',
                      fontWeight: 700,
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.07)'
                    }}
                  >
                    <span>{copy.services}</span>
                    <Arrow size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05 · EXECUTIVE CTA BAND                                                   */}
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
                  href={`/contact?service=${svc.id}`}
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
                  href="/services"
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
