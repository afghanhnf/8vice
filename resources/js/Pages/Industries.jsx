import React, { useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import {
  IndustryInfraIcon,
  IndustryTechIcon,
  IndustryTourismIcon,
  IndustryCreativeIcon,
  IndustryTradeIcon
} from '@/Components/HomeIcons';
import { useTranslation } from '@/Contexts/TranslationContext';

/* ============================================================================
   Reusable Animated Modern City & Architectural Grid Background
   ============================================================================ */
function ModernCityBg({ variant = 'default' }) {
  return (
    <div className={`ind-city-bg ind-city-bg--${variant}`} aria-hidden="true">
      <div className="ind-city-grid" />
      <div className="ind-red-glow ind-red-glow--1" />
      <div className="ind-red-glow ind-red-glow--2" />

      <svg
        className="ind-city-svg"
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id={`indSkylineFade-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#E63946" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#08090C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`indLineGrad-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
            <stop offset="30%" stopColor="#E63946" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#ff6b78" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background distant towers */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill={`url(#indSkylineFade-${variant})`} opacity="0.55">
          <rect x="40" y="180" width="55" height="180" />
          <rect x="110" y="130" width="70" height="230" />
          <rect x="200" y="160" width="50" height="200" />
          <rect x="275" y="95" width="80" height="265" />
          <polygon points="315,45 275,95 355,95" />
          <rect x="380" y="145" width="65" height="215" />
          <rect x="470" y="110" width="90" height="250" />
          <rect x="590" y="150" width="60" height="210" />
          <rect x="680" y="80" width="85" height="280" />
          <line x1="722" y1="25" x2="722" y2="80" stroke="#E63946" strokeWidth="1.5" opacity="0.6" />
          <rect x="795" y="135" width="70" height="225" />
          <rect x="890" y="105" width="95" height="255" />
          <rect x="1010" y="155" width="60" height="205" />
          <rect x="1100" y="90" width="80" height="270" />
          <polygon points="1140,40 1100,90 1180,90" />
          <rect x="1205" y="140" width="75" height="220" />
          <rect x="1305" y="165" width="65" height="195" />
        </g>

        {/* Cross-border connection arcs */}
        <path
          d="M 145 130 Q 430 10 722 80 T 1140 90"
          stroke={`url(#indLineGrad-${variant})`}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="ind-arc-anim"
        />
        <path
          d="M 315 95 Q 620 35 935 105 T 1335 165"
          stroke={`url(#indLineGrad-${variant})`}
          strokeWidth="1"
          strokeDasharray="4 8"
          className="ind-arc-anim ind-arc-anim--slow"
        />

        {/* Animated data streams */}
        <line x1="0" y1="260" x2="1440" y2="260" stroke={`url(#indLineGrad-${variant})`} strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="310" x2="1440" y2="310" stroke={`url(#indLineGrad-${variant})`} strokeWidth="1" opacity="0.65" />

        {/* Pulsing city beacons */}
        <circle cx="315" cy="45" r="3.5" fill="#E63946" className="ind-beacon-pulse" />
        <circle cx="722" cy="25" r="4" fill="#E63946" className="ind-beacon-pulse ind-beacon-pulse--delay" />
        <circle cx="1140" cy="40" r="3.5" fill="#E63946" className="ind-beacon-pulse" />
      </svg>
    </div>
  );
}

/* ============================================================================
   Custom Sector SVG Illustrations (Rich Vector Blueprint Graphics)
   ============================================================================ */
function SectorSvgIllustration({ sectorId }) {
  switch (sectorId) {
    case 'infrastructure':
      return (
        <svg viewBox="0 0 360 150" fill="none" className="ind-sector-vector" aria-hidden="true">
          <defs>
            <linearGradient id="svgInfraGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E63946" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff8a93" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          {/* Smart Urban Skyline & Suspension Bridge / High-Speed Rail */}
          <line x1="15" y1="126" x2="345" y2="126" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
          <line x1="15" y1="134" x2="345" y2="134" stroke="url(#svgInfraGrad)" strokeWidth="2" strokeDasharray="8 6" className="ind-svg-dash" />
          {/* Towers */}
          <rect x="36" y="52" width="28" height="74" rx="2" stroke="rgba(255,255,255,0.35)" fill="rgba(230,57,70,0.08)" strokeWidth="1.2" />
          <rect x="72" y="32" width="34" height="94" rx="2" stroke="#E63946" fill="rgba(230,57,70,0.14)" strokeWidth="1.4" />
          <line x1="89" y1="14" x2="89" y2="32" stroke="#E63946" strokeWidth="1.5" />
          <circle cx="89" cy="14" r="3" fill="#E63946" className="ind-beacon-pulse" />
          <rect x="114" y="64" width="24" height="62" rx="2" stroke="rgba(255,255,255,0.28)" fill="rgba(255,255,255,0.03)" strokeWidth="1.2" />
          {/* Suspension / Smart Transit Arch */}
          <path d="M 155 126 L 185 44 L 205 126" stroke="#E63946" strokeWidth="1.8" fill="none" />
          <path d="M 255 126 L 285 44 L 305 126" stroke="#E63946" strokeWidth="1.8" fill="none" />
          <path d="M 145 98 Q 235 42 325 98" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" fill="none" />
          <line x1="140" y1="98" x2="335" y2="98" stroke="#E63946" strokeWidth="2" />
          {/* High-speed train silhouette */}
          <path d="M 175 92 L 265 92 Q 282 92 288 97 L 175 97 Z" fill="#E63946" opacity="0.85" />
          {/* Connection nodes */}
          <circle cx="185" cy="44" r="3.5" fill="#fff" stroke="#E63946" strokeWidth="2" />
          <circle cx="285" cy="44" r="3.5" fill="#fff" stroke="#E63946" strokeWidth="2" />
          <path d="M 89 24 Q 185 4 285 38" stroke="#E63946" strokeWidth="1.2" strokeDasharray="4 4" className="ind-svg-dash" />
        </svg>
      );

    case 'technology':
      return (
        <svg viewBox="0 0 360 150" fill="none" className="ind-sector-vector" aria-hidden="true">
          {/* Digital Ecosystem, AI Core & Cross-Border FinTech Nodes */}
          <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
            <line x1="55" y1="40" x2="180" y2="75" />
            <line x1="55" y1="110" x2="180" y2="75" />
            <line x1="305" y1="40" x2="180" y2="75" />
            <line x1="305" y1="110" x2="180" y2="75" />
            <line x1="115" y1="28" x2="180" y2="75" />
            <line x1="245" y1="28" x2="180" y2="75" />
            <line x1="115" y1="124" x2="180" y2="75" />
            <line x1="245" y1="124" x2="180" y2="75" />
          </g>
          {/* Animated data pulses along circuit lines */}
          <path d="M 55 40 L 120 40 L 180 75 L 240 40 L 305 40" stroke="#E63946" strokeWidth="1.6" strokeDasharray="6 6" className="ind-svg-dash" />
          <path d="M 55 110 L 120 110 L 180 75 L 240 110 L 305 110" stroke="rgba(230,57,70,0.7)" strokeWidth="1.4" strokeDasharray="5 7" className="ind-svg-dash" />
          {/* Central AI / FinTech Hub */}
          <circle cx="180" cy="75" r="36" stroke="rgba(230,57,70,0.35)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="180" cy="75" r="24" fill="rgba(230,57,70,0.16)" stroke="#E63946" strokeWidth="1.8" />
          <rect x="170" y="65" width="20" height="20" rx="4" fill="#E63946" />
          {/* Satellite Digital Nodes */}
          {[
            [55, 40, 'AI'],
            [55, 110, 'PAY'],
            [305, 40, 'APP'],
            [305, 110, 'IOT'],
            [115, 28, '5G'],
            [245, 28, 'API']
          ].map(([cx, cy, label], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="14" fill="rgba(12,14,20,0.9)" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" />
              <circle cx={cx} cy={cy} r="14" stroke="#E63946" strokeWidth="1.2" strokeDasharray="12 20" />
              <text x={cx} y={cy + 3.5} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800" letterSpacing="0.06em">
                {label}
              </text>
            </g>
          ))}
        </svg>
      );

    case 'tourism':
      return (
        <svg viewBox="0 0 360 150" fill="none" className="ind-sector-vector" aria-hidden="true">
          {/* Bilateral Aviation Route, Globe & Destination Horizon */}
          <circle cx="180" cy="88" r="54" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" fill="rgba(230,57,70,0.05)" />
          <ellipse cx="180" cy="88" rx="54" ry="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <ellipse cx="180" cy="88" rx="24" ry="54" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          {/* Flight Arc from China to Indonesia */}
          <path
            d="M 48 108 Q 180 8 312 108"
            stroke="#E63946"
            strokeWidth="2"
            strokeDasharray="6 5"
            className="ind-svg-dash"
          />
          <path
            d="M 72 118 Q 180 42 288 118"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.2"
          />
          {/* Departure & Destination Pins */}
          <circle cx="48" cy="108" r="6" fill="#E63946" />
          <circle cx="48" cy="108" r="12" stroke="#E63946" strokeWidth="1.2" opacity="0.5" className="ind-beacon-pulse" />
          <circle cx="312" cy="108" r="6" fill="#E63946" />
          <circle cx="312" cy="108" r="12" stroke="#E63946" strokeWidth="1.2" opacity="0.5" className="ind-beacon-pulse ind-beacon-pulse--delay" />
          {/* Aircraft / Compass Emblem at Apex */}
          <g transform="translate(180, 48)">
            <circle cx="0" cy="0" r="14" fill="#0B0D12" stroke="#E63946" strokeWidth="1.6" />
            <path d="M -6 2 L 7 -3 L 2 5 L 0 1 Z" fill="#E63946" />
          </g>
          <text x="48" y="134" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontWeight="700" letterSpacing="0.12em">
            CHINA
          </text>
          <text x="312" y="134" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9" fontWeight="700" letterSpacing="0.12em">
            INDONESIA
          </text>
        </svg>
      );

    case 'creative':
      return (
        <svg viewBox="0 0 360 150" fill="none" className="ind-sector-vector" aria-hidden="true">
          {/* Creative Economy: Sound/Media Waves, Film Frame, IP & Interactive Arts */}
          <path
            d="M 20 85 C 75 25, 130 135, 180 75 C 230 15, 285 125, 340 65"
            stroke="#E63946"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 20 65 C 75 125, 130 25, 180 85 C 230 135, 285 35, 340 95"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.4"
            strokeDasharray="5 5"
            className="ind-svg-dash"
            fill="none"
          />
          {/* Media / Film / IP Frames */}
          <rect x="74" y="42" width="56" height="66" rx="8" fill="rgba(12,14,20,0.85)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
          <polygon points="97,66 97,84 112,75" fill="#E63946" />
          <rect x="150" y="32" width="60" height="86" rx="10" fill="rgba(230,57,70,0.15)" stroke="#E63946" strokeWidth="1.6" />
          <circle cx="180" cy="65" r="12" stroke="#fff" strokeWidth="1.5" />
          <circle cx="180" cy="65" r="4" fill="#E63946" />
          <text x="180" y="100" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800" letterSpacing="0.14em">
            IP · MEDIA
          </text>
          <rect x="230" y="42" width="56" height="66" rx="8" fill="rgba(12,14,20,0.85)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
          <path d="M 250 82 L 258 64 L 266 82 Z" stroke="#E63946" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case 'trade':
    default:
      return (
        <svg viewBox="0 0 360 150" fill="none" className="ind-sector-vector" aria-hidden="true">
          {/* Cross-Border Trade, Supply Chain Hubs & Distribution Channels */}
          <line x1="28" y1="114" x2="332" y2="114" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
          {/* Container / Distribution Blocks */}
          <rect x="48" y="68" width="46" height="28" rx="4" fill="rgba(230,57,70,0.18)" stroke="#E63946" strokeWidth="1.5" />
          <rect x="102" y="68" width="46" height="28" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          <rect x="75" y="36" width="46" height="28" rx="4" fill="rgba(230,57,70,0.1)" stroke="rgba(230,57,70,0.65)" strokeWidth="1.2" />
          {/* Trade Corridor Flow Arrows */}
          <path d="M 164 66 L 222 66" stroke="#E63946" strokeWidth="2" strokeDasharray="5 4" className="ind-svg-dash" />
          <polygon points="222,61 232,66 222,71" fill="#E63946" />
          <path d="M 232 88 L 174 88" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeDasharray="5 4" className="ind-svg-dash" />
          <polygon points="174,83 164,88 174,93" fill="rgba(255,255,255,0.65)" />
          {/* Retail & Distribution Network on Right */}
          <circle cx="282" cy="76" r="28" fill="rgba(230,57,70,0.12)" stroke="#E63946" strokeWidth="1.6" />
          <circle cx="282" cy="76" r="5" fill="#fff" />
          <circle cx="264" cy="62" r="3.5" fill="#E63946" />
          <circle cx="300" cy="62" r="3.5" fill="#E63946" />
          <circle cx="264" cy="90" r="3.5" fill="#E63946" />
          <circle cx="300" cy="90" r="3.5" fill="#E63946" />
          <line x1="282" y1="76" x2="264" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          <line x1="282" y1="76" x2="300" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          <line x1="282" y1="76" x2="264" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          <line x1="282" y1="76" x2="300" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
        </svg>
      );
  }
}

/* ============================================================================
   Opportunity Convergence SVG Diagram (For Section 01 Overview)
   ============================================================================ */
function OpportunityConvergenceSvg({ isId }) {
  return (
    <svg viewBox="0 0 520 300" fill="none" className="ind-convergence-svg" aria-hidden="true">
      <defs>
        <radialGradient id="convCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.42" />
          <stop offset="65%" stopColor="#E63946" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#08090C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer radar rings */}
      <circle cx="260" cy="150" r="126" fill="url(#convCenterGlow)" />
      <circle cx="260" cy="150" r="118" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="260" cy="150" r="82" stroke="rgba(230,57,70,0.28)" strokeWidth="1.2" />

      {/* Three intersecting opportunity rings */}
      <circle cx="215" cy="118" r="64" fill="rgba(230,57,70,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" />
      <circle cx="305" cy="118" r="64" fill="rgba(230,57,70,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.3" />
      <circle cx="260" cy="188" r="64" fill="rgba(230,57,70,0.1)" stroke="#E63946" strokeWidth="1.5" />

      {/* Connecting spokes */}
      <line x1="120" y1="68" x2="215" y2="118" stroke="#E63946" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="400" y1="68" x2="305" y2="118" stroke="#E63946" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="260" y1="252" x2="260" y2="274" stroke="#E63946" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Center Core Badge */}
      <circle cx="260" cy="142" r="26" fill="#0B0E15" stroke="#E63946" strokeWidth="2" />
      <circle cx="260" cy="142" r="4" fill="#E63946" className="ind-beacon-pulse" />
      <text x="260" y="139" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="800" letterSpacing="0.14em">
        8 VICE
      </text>
      <text x="260" y="151" textAnchor="middle" fill="#ff8a93" fontSize="7.5" fontWeight="700" letterSpacing="0.12em">
        NEXUS
      </text>

      {/* Top-Left Pill: Market Demand */}
      <g transform="translate(26, 36)">
        <rect x="0" y="0" width="154" height="36" rx="18" fill="rgba(12,15,22,0.9)" stroke="rgba(255,255,255,0.18)" />
        <circle cx="18" cy="18" r="4" fill="#E63946" />
        <text x="30" y="22" fill="#fff" fontSize="10" fontWeight="700" letterSpacing="0.06em">
          {isId ? 'PERMINTAAN PASAR' : 'MARKET DEMAND'}
        </text>
      </g>

      {/* Top-Right Pill: Industry Capabilities */}
      <g transform="translate(332, 36)">
        <rect x="0" y="0" width="166" height="36" rx="18" fill="rgba(12,15,22,0.9)" stroke="rgba(255,255,255,0.18)" />
        <circle cx="18" cy="18" r="4" fill="#E63946" />
        <text x="30" y="22" fill="#fff" fontSize="10" fontWeight="700" letterSpacing="0.06em">
          {isId ? 'KAPABILITAS INDUSTRI' : 'CAPABILITIES'}
        </text>
      </g>

      {/* Bottom Pill: Strategic Partnerships */}
      <g transform="translate(165, 254)">
        <rect x="0" y="0" width="190" height="36" rx="18" fill="rgba(230,57,70,0.18)" stroke="#E63946" />
        <circle cx="20" cy="18" r="4" fill="#fff" />
        <text x="34" y="22" fill="#fff" fontSize="10" fontWeight="800" letterSpacing="0.06em">
          {isId ? 'KEMITRAAN STRATEGIS' : 'STRATEGIC PARTNERSHIPS'}
        </text>
      </g>
    </svg>
  );
}

export default function Industries() {
  const { lang } = useTranslation();
  const isId = lang === 'id';

  /* IntersectionObserver for Google M3 scroll-reveal animations */
  useEffect(() => {
    const elements = document.querySelectorAll('.m3-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const copy = isId
    ? {
        breadcrumbHome: 'Beranda',
        breadcrumb: 'Industri & Peluang',
        eyebrow: 'FOKUS SEKTORAL · PELUANG BILATERAL',
        heroTitle: 'Tempat Pasar Bertemu dengan Peluang.',
        heroLead:
          'Peluang bisnis lintas batas tumbuh di titik pertemuan antara permintaan pasar, kapabilitas industri, dan kemitraan strategis antara Indonesia dan Tiongkok.',
        overviewEyebrow: '01 · PENDEKATAN INDUSTRI BERBASIS PELUANG',
        overviewTitle: 'Menghubungkan Peluang Lintas Sektor Strategis.',
        overviewParagraphs: [
          'Peluang bisnis lintas negara muncul ketika permintaan pasar, kapabilitas industri, dan kemitraan strategis bertemu dalam satu visi yang selaras.',
          '8 Vice berfokus pada industri-industri terpilih di mana kolaborasi Indonesia–Tiongkok mampu mendorong ekspansi bisnis, adopsi teknologi, pengembangan pasar, serta pertukaran kapabilitas.',
          'Pendekatan industri kami berorientasi pada peluang (opportunity-driven). Alih-alih menerapkan satu model seragam untuk semua kebutuhan, kami menimbang sasaran spesifik setiap proyek, konteks pasar, potensi mitra, dan kelayakan komersialnya.',
          'Melalui konsultasi strategis dan fasilitasi pengembangan bisnis, kami membantu klien mengeksplorasi di mana kolaborasi dapat menciptakan nilai nyata yang bermakna.'
        ],
        sectorEyebrow: '02 · 5 SEKTOR PRIORITAS UTAMA',
        sectorTitle: 'Ekosistem Industri yang Kami Layani.',
        sectors: [
          {
            num: '01',
            id: 'infrastructure',
            title: 'Infrastructure & Urban Development',
            idTitle: 'Infrastruktur & Pembangunan Perkotaan',
            tagline: 'Menghubungkan kapabilitas untuk kota masa depan.',
            image: '/images/industry_infrastructure.webp',
            desc: 'Kami mengeksplorasi peluang kolaborasi di bidang infrastruktur perkotaan, transportasi publik (MRT/LRT), mobilitas cerdas, dan pengembangan kawasan perkotaan, dengan menghubungkan pemangku kepentingan yang relevan guna mendukung evaluasi proyek serta kemitraan potensial.',
            highlights: [
              'Transportasi Perkotaan & Mobilitas Terintegrasi',
              'Infrastruktur Kota Cerdas (Smart City Ecosystems)',
              'Kemitraan Publik-Swasta & Fasilitasi Proyek',
              'Pengembangan Kawasan Komersial & Industri'
            ]
          },
          {
            num: '02',
            id: 'technology',
            title: 'Technology & Digital Ecosystems',
            idTitle: 'Teknologi & Ekosistem Digital',
            tagline: 'Mendekatkan inovasi teknologi dengan kebutuhan pasar.',
            image: '/images/industry_technology.webp',
            desc: 'Kami membantu menjajaki kemitraan yang melibatkan platform digital, teknologi konsumen, ekosistem pembayaran lintas batas, serta layanan berbasis teknologi, dengan fokus pada identifikasi aplikasi komersial potensial dan peluang kolaborasi lokal.',
            highlights: [
              'Platform Digital & Ekosistem Pembayaran Lintas Batas',
              'Teknologi Konsumen & Elektronik Pintar',
              'Solusi Enterprise, AI & EduTech',
              'Kemitraan Strategis Penyedia Teknologi'
            ]
          },
          {
            num: '03',
            id: 'tourism',
            title: 'Tourism, Travel & Hospitality',
            idTitle: 'Pariwisata, Perjalanan & Perhotelan',
            tagline: 'Menciptakan koneksi melalui perjalanan dan pengalaman destinasi.',
            image: '/images/industry_tourism.webp',
            desc: 'Kami mendukung kolaborasi sektor pariwisata melalui promosi destinasi, kemitraan industri perjalanan, inisiatif keterlibatan wisatawan (inbound/outbound), pengembangan MICE, serta peluang yang menghubungkan destinasi Indonesia dengan pasar wisata Tiongkok.',
            highlights: [
              'Promosi Destinasi Bilateral & Kampanye Pariwisata',
              'Kemitraan Jaringan Hotel, Resor & Hospitality',
              'Pengembangan MICE, Konferensi & Delegasi Internasional',
              'Integrasi Ekosistem Layanan Wisatawan Tiongkok–Indonesia'
            ]
          },
          {
            num: '04',
            id: 'creative',
            title: 'Creative Economy & Lifestyle',
            idTitle: 'Ekonomi Kreatif & Gaya Hidup',
            tagline: 'Menghubungkan budaya, kreativitas, dan peluang komersial.',
            image: '/images/industry_creative.webp',
            desc: 'Kami menjajaki kolaborasi di sektor fesyen, kriya, kuliner, film, animasi, musik, gim, aplikasi, dan sektor kreatif lainnya, dengan mendukung positioning pasar, kemitraan merek, serta keterlibatan industri lintas batas.',
            highlights: [
              'Film, Animasi, Media & Lisensi Kekayaan Intelektual (IP)',
              'Fesyen, Kriya, Kuliner & Merek Gaya Hidup',
              'Gim, Aplikasi & Konten Hiburan Digital',
              'Kolaborasi Budaya & Pameran Industri Kreatif'
            ]
          },
          {
            num: '05',
            id: 'trade',
            title: 'Trade & Consumer Goods',
            idTitle: 'Perdagangan & Barang Konsumsi (FMCG)',
            tagline: 'Membantu bisnis menemukan jalur komersial baru.',
            image: '/images/industry_trade.webp',
            desc: 'Kami membantu perusahaan mengeksplorasi kemitraan distribusi, lokalisasi produk, positioning pasar, serta jalur komersial potensial untuk memasuki pasar baru dan mengembangkan hubungan perdagangan lintas negara.',
            highlights: [
              'Kemitraan Distributor & Saluran Ritel Modern',
              'Lokalisasi Merek & Adaptasi Produk Konsumen',
              'Pengembangan Jalur Perdagangan Bilateral',
              'Pencocokan B2B Produsen & Jaringan Distribusi'
            ]
          }
        ],
        ctaEyebrow: '03 · DISKUSIKAN PELUANG ANDA',
        ctaTitle: 'Memiliki Proyek atau Inisiatif yang Ingin Dijajaki?',
        ctaP1: 'Setiap peluang pasar dimulai dari sebuah percakapan yang terarah.',
        ctaP2:
          'Baik saat Anda sedang menjajaki industri baru, mencari mitra strategis, maupun mengevaluasi proyek lintas batas, 8 Vice siap membantu Anda mengidentifikasi titik awal yang tepat. Ceritakan sasaran Anda, dan mari kita eksplorasi kemungkinannya bersama.',
        ctaBtn: 'Diskusikan Proyek Anda',
        secondaryBtn: 'Gerbang Indonesia–China'
      }
    : {
        breadcrumbHome: 'Home',
        breadcrumb: 'Industries & Opportunities',
        eyebrow: 'SECTOR FOCUS · BILATERAL OPPORTUNITIES',
        heroTitle: 'Where Markets Meet Opportunity.',
        heroLead:
          'Cross-border business opportunities emerge where market demand, industry capabilities, and strategic partnerships come together across Indonesia and China.',
        overviewEyebrow: '01 · OPPORTUNITY-DRIVEN INDUSTRY APPROACH',
        overviewTitle: 'Connecting Opportunities Across High-Potential Industries.',
        overviewParagraphs: [
          'Cross-border business opportunities emerge where market demand, industry capabilities, and strategic partnerships come together.',
          '8 Vice focuses on selected industries where Indonesia–China collaboration can support business expansion, technology adoption, market development, and the exchange of capabilities.',
          "Our industry approach is opportunity-driven. Rather than applying a one-size-fits-all model, we consider each project's objectives, market context, potential partners, and commercial feasibility.",
          'Through strategic advisory and business development facilitation, we help clients explore where collaboration may create meaningful value.'
        ],
        sectorEyebrow: '02 · FIVE PRIORITY SECTORS',
        sectorTitle: 'Industries We Serve Across the Corridor.',
        sectors: [
          {
            num: '01',
            id: 'infrastructure',
            title: 'Infrastructure & Urban Development',
            idTitle: 'Infrastructure & Urban Development',
            tagline: 'Connecting capabilities for future-ready cities.',
            image: '/images/industry_infrastructure.webp',
            desc: 'We explore opportunities for collaboration across urban infrastructure, transportation, mobility, and city development, connecting relevant stakeholders to support the evaluation of potential projects and partnerships.',
            highlights: [
              'Urban Transit, Rail & Smart Mobility Systems',
              'Future-Ready City & Infrastructure Collaboration',
              'Public-Private Dialogue & Stakeholder Alignment',
              'Commercial & Industrial Zone Development'
            ]
          },
          {
            num: '02',
            id: 'technology',
            title: 'Technology & Digital Ecosystems',
            idTitle: 'Technology & Digital Ecosystems',
            tagline: 'Bringing technology and markets closer together.',
            image: '/images/industry_technology.webp',
            desc: 'We help explore partnerships involving digital platforms, consumer technology, payment ecosystems, and technology-enabled services, with a focus on identifying potential commercial applications and local collaboration opportunities.',
            highlights: [
              'Digital Platforms & Cross-Border Payment Ecosystems',
              'Consumer Electronics & Smart Connected Devices',
              'Enterprise Software, AI & Educational Technology',
              'Technology Commercialization & Local Partnering'
            ]
          },
          {
            num: '03',
            id: 'tourism',
            title: 'Tourism, Travel & Hospitality',
            idTitle: 'Tourism, Travel & Hospitality',
            tagline: 'Creating connections through travel and destination experiences.',
            image: '/images/industry_tourism.webp',
            desc: 'We support tourism-related collaboration through destination promotion, travel industry partnerships, visitor engagement initiatives, MICE development, and opportunities connecting Indonesian destinations with Chinese tourism markets.',
            highlights: [
              'Bilateral Destination Promotion & Marketing',
              'Luxury Hospitality, Resort & Travel Partnerships',
              'MICE, Inbound Tourism Conferences & Delegations',
              'Visitor Experience & Digital Tourism Ecosystems'
            ]
          },
          {
            num: '04',
            id: 'creative',
            title: 'Creative Economy & Lifestyle',
            idTitle: 'Creative Economy & Lifestyle',
            tagline: 'Connecting culture, creativity, and commercial opportunity.',
            image: '/images/industry_creative.webp',
            desc: 'We explore collaboration across fashion, crafts, culinary, film, music, games, applications, and other creative sectors, supporting market positioning, brand partnerships, and cross-border industry engagement.',
            highlights: [
              'Film, Animation, Digital Media & IP Collaboration',
              'Fashion, Crafts, Culinary & Contemporary Lifestyle',
              'Interactive Entertainment, Gaming & Mobile Apps',
              'Cross-Border Brand Partnerships & Cultural Showcases'
            ]
          },
          {
            num: '05',
            id: 'trade',
            title: 'Trade & Consumer Goods',
            idTitle: 'Trade & Consumer Goods',
            tagline: 'Helping businesses find new commercial pathways.',
            image: '/images/industry_trade.webp',
            desc: 'We help businesses explore distribution partnerships, product localization, market positioning, and potential commercial channels for entering new markets and developing cross-border trade relationships.',
            highlights: [
              'Strategic Distribution & Retail Channel Partnerships',
              'Brand Localization & Consumer Market Positioning',
              'Cross-Border Supply Chain & Trade Facilitation',
              'B2B Matchmaking for Consumer & Commercial Brands'
            ]
          }
        ],
        ctaEyebrow: '03 · OPPORTUNITY INQUIRY',
        ctaTitle: 'Have a Project in Mind?',
        ctaP1: 'Every market opportunity begins with a conversation.',
        ctaP2:
          "Whether you are exploring a new industry, seeking a strategic partner, or evaluating a cross-border project, 8 Vice can help you identify the right starting point. Tell us about your objectives, and let's explore the possibilities together.",
        ctaBtn: 'Discuss Your Project',
        secondaryBtn: 'Indonesia–China Gateway'
      };

  const sectorIcons = {
    infrastructure: IndustryInfraIcon,
    technology: IndustryTechIcon,
    tourism: IndustryTourismIcon,
    creative: IndustryCreativeIcon,
    trade: IndustryTradeIcon
  };

  return (
    <MainLayout>
      <SeoHead pageCode="industries" title={copy.breadcrumb} />

      <div className="ind-page">
        {/* ================================================================
            00 · HERO BANNER — Centered Title & Breadcrumb + Quick-Jump Pills + Panoramic Showcase
            ================================================================ */}
        <section className="ind-hero">
          <ModernCityBg variant="hero" />

          <div className="container ind-hero__container">
            <div className="ind-hero__header m3-reveal">
              <nav className="ind-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">{copy.breadcrumbHome}</Link>
                <span className="ind-breadcrumb__sep">/</span>
                <span className="ind-breadcrumb__current">{copy.breadcrumb}</span>
              </nav>

              <div className="ind-eyebrow-pill">
                <span className="ind-eyebrow-dot" />
                {copy.eyebrow}
              </div>

              <h1 className="ind-hero__title">{copy.heroTitle}</h1>

              {/* Quick-jump Sector Pills */}
              <div className="ind-sector-pills">
                {copy.sectors.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="ind-sector-pill">
                    <span className="ind-sector-pill__num">{s.num}</span>
                    <span>{isId ? s.idTitle : s.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Large Panoramic Image with Quote Statement & Vector Blueprint Overlay Inside */}
            <div className="ind-hero__showcase m3-reveal m3-reveal--scale" style={{ transitionDelay: '120ms' }}>
              <div className="ind-hero__image-frame">
                <img
                  src="/images/china_city_network.webp"
                  alt={copy.breadcrumb}
                  className="ind-hero__image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="ind-hero__image-overlay" />
                <div className="ind-hero__corner ind-hero__corner--tl" />
                <div className="ind-hero__corner ind-hero__corner--br" />

                {/* Subtle SVG Network Overlay inside Hero Image */}
                <svg
                  className="ind-hero__vector-overlay"
                  viewBox="0 0 1200 500"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <path
                    d="M 120 340 Q 480 80 860 220 T 1120 140"
                    stroke="rgba(230,57,70,0.48)"
                    strokeWidth="1.5"
                    strokeDasharray="8 8"
                    className="ind-svg-dash"
                  />
                  <circle cx="120" cy="340" r="5" fill="#E63946" />
                  <circle cx="520" cy="182" r="5" fill="#fff" stroke="#E63946" strokeWidth="2" />
                  <circle cx="860" cy="220" r="5" fill="#E63946" />
                </svg>

                {/* Top Status Tag */}
                <div className="ind-hero__status-tag">
                  <span className="ind-hero__status-dot" />
                  <span>{isId ? '5 SEKTOR PRIORITAS · INDONESIA ⇄ TIONGKOK' : '5 PRIORITY SECTORS · INDONESIA ⇄ CHINA'}</span>
                </div>

                {/* Statement Inside Image */}
                <div className="ind-hero__quote-box">
                  <div className="ind-hero__quote-bar" />
                  <p className="ind-hero__quote-text">“{copy.heroLead}”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            01 · OPPORTUNITY-DRIVEN INDUSTRY APPROACH — 2-Column with Photo + Interactive SVG Diagram
            ================================================================ */}
        <section className="ind-section ind-section--overview">
          <div className="ind-arch-lines" aria-hidden="true" />

          <div className="container">
            <div className="ind-overview-grid">
              {/* Left Column: Narrative Copy */}
              <div className="ind-overview__copy m3-reveal m3-reveal--left">
                <div className="ind-kicker">{copy.overviewEyebrow}</div>
                <h2 className="ind-section-title">{copy.overviewTitle}</h2>

                <div className="ind-prose">
                  {copy.overviewParagraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? 'ind-prose__lead' : ''}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Photo + Animated Opportunity Convergence SVG */}
              <div className="ind-overview__visual m3-reveal m3-reveal--right" style={{ transitionDelay: '120ms' }}>
                <div className="ind-overview-card">
                  {/* Photo Backdrop with Gradient Blend */}
                  <div className="ind-overview-card__photo-wrap">
                    <img
                      src="/images/china_tech_hub.webp"
                      alt={copy.overviewTitle}
                      className="ind-overview-card__photo"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="ind-overview-card__photo-tint" />
                    <div className="ind-overview-card__badge">
                      <span className="ind-overview-card__badge-dot" />
                      <span>{isId ? 'MODEL EKOSISTEM PELUANG' : 'OPPORTUNITY NEXUS MODEL'}</span>
                    </div>
                  </div>

                  {/* SVG Architectural Convergence Diagram */}
                  <div className="ind-overview-card__diagram">
                    <OpportunityConvergenceSvg isId={isId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            02 · FIVE PRIORITY SECTORS — Interactive Matrix + Alternating Photo & SVG Showcases
            ================================================================ */}
        <section className="ind-section ind-section--sectors">
          <ModernCityBg variant="sectors" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ind-section-header ind-section-header--center m3-reveal">
              <div className="ind-kicker">{copy.sectorEyebrow}</div>
              <h2 className="ind-section-title">{copy.sectorTitle}</h2>
            </div>

            {/* 5-Sector Quick Visual Matrix Bar */}
            <div className="ind-sector-mini-grid m3-reveal" style={{ transitionDelay: '90ms' }}>
              {copy.sectors.map((s) => {
                const Icon = sectorIcons[s.id] || IndustryTradeIcon;
                const title = isId ? s.idTitle : s.title;
                return (
                  <a key={s.id} href={`#${s.id}`} className="ind-sector-mini-card">
                    <div className="ind-sector-mini-card__top">
                      <span className="ind-sector-mini-card__num">{s.num}</span>
                      <div className="ind-sector-mini-card__icon">
                        <Icon size={20} color="#E63946" />
                      </div>
                    </div>
                    <div className="ind-sector-mini-card__title">{title}</div>
                  </a>
                );
              })}
            </div>

            {/* Detailed Sector Showcases (01 to 05) */}
            <div className="ind-sectors-stack">
              {copy.sectors.map((s, idx) => {
                const Icon = sectorIcons[s.id] || IndustryTradeIcon;
                const title = isId ? s.idTitle : s.title;
                const isReversed = idx % 2 === 1;

                return (
                  <article
                    key={s.id}
                    id={s.id}
                    className={`ind-sector-card m3-reveal ${isReversed ? 'ind-sector-card--reversed' : ''}`}
                  >
                    <div className="ind-sector-card__accent-bar" />

                    <div className="ind-sector-card__grid">
                      {/* Visual Column: High-Res Sector Photo + Custom SVG Vector Blueprint */}
                      <div className="ind-sector-card__media">
                        <div className="ind-sector-card__photo-frame">
                          <img
                            src={s.image}
                            alt={title}
                            className="ind-sector-card__img"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="ind-sector-card__img-shade" />

                          {/* Top Number Pill */}
                          <div className="ind-sector-card__num-pill">
                            <span className="ind-sector-card__num-red">{s.num}</span>
                            <span className="ind-sector-card__num-total">/ 05</span>
                          </div>

                          {/* Embedded Custom Sector SVG Blueprint Panel */}
                          <div className="ind-sector-card__svg-dock">
                            <div className="ind-sector-card__svg-header">
                              <span className="ind-sector-card__svg-dot" />
                              <span>
                                {isId ? `VISUALISASI SEKTOR · ${s.num}` : `SECTOR BLUEPRINT · ${s.num}`}
                              </span>
                            </div>
                            <SectorSvgIllustration sectorId={s.id} />
                          </div>
                        </div>
                      </div>

                      {/* Content Column: Icon, Title, Tagline, Description, 2x2 Opportunity Cards, CTA */}
                      <div className="ind-sector-card__body">
                        <div className="ind-sector-card__head">
                          <div className="ind-sector-card__icon-box">
                            <Icon size={26} color="#E63946" />
                          </div>
                          <span className="ind-sector-card__kicker">
                            {isId ? `SEKTOR PRIORITAS ${s.num}` : `PRIORITY SECTOR ${s.num}`}
                          </span>
                        </div>

                        <h3 className="ind-sector-card__title">{title}</h3>
                        <div className="ind-sector-card__tagline">{s.tagline}</div>
                        <p className="ind-sector-card__desc">{s.desc}</p>

                        {/* Opportunity Areas 2x2 Grid */}
                        <div className="ind-sector-card__highlights-wrap">
                          <div className="ind-sector-card__highlights-label">
                            {isId ? 'AREA PELUANG UTAMA' : 'OPPORTUNITY AREAS'}
                          </div>

                          <div className="ind-sector-card__highlights-grid">
                            {s.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="ind-highlight-item">
                                <span className="ind-highlight-item__num">
                                  0{hIdx + 1}
                                </span>
                                <span className="ind-highlight-item__text">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Footer */}
                        <div className="ind-sector-card__footer">
                          <Link href="/contact" className="ind-sector-card__cta">
                            <span>
                              {isId
                                ? 'Diskusikan Peluang di Sektor Ini'
                                : 'Discuss Opportunities in This Sector'}
                            </span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M5 12h14M13 6l6 6-6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================
            03 · EXECUTIVE CTA BAND — Have a Project in Mind?
            ================================================================ */}
        <section className="ind-cta-section">
          <ModernCityBg variant="cta" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ind-cta-box m3-reveal m3-reveal--scale">
              <div className="ind-cta-box__glow" />
              <div className="ind-kicker" style={{ marginBottom: '12px' }}>
                {copy.ctaEyebrow}
              </div>
              <h2 className="ind-cta-box__title">{copy.ctaTitle}</h2>
              <p className="ind-cta-box__lead">{copy.ctaP1}</p>
              <p className="ind-cta-box__desc">{copy.ctaP2}</p>
              <div className="ind-cta-box__actions">
                <Link href="/contact" className="ind-btn ind-btn--primary">
                  <span>{copy.ctaBtn}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/gateway" className="ind-btn ind-btn--secondary">
                  <span>{copy.secondaryBtn}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ====================================================================
          SCOPED STYLES FOR /industries + GOOGLE M3 TRANSITIONS
          ==================================================================== */}
      <style>{`
        .ind-page {
          background: #08090C;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        /* ====================================================================
           Google Material Design 3 (M3) Transitions (Emphasized Decelerate)
           ==================================================================== */
        .m3-reveal {
          opacity: 0;
          transform: translateY(36px) scale(0.985);
          filter: blur(4px);
          transition:
            opacity 0.75s cubic-bezier(0.05, 0.7, 0.1, 1),
            transform 0.75s cubic-bezier(0.05, 0.7, 0.1, 1),
            filter 0.65s cubic-bezier(0.05, 0.7, 0.1, 1);
          will-change: opacity, transform, filter;
        }
        .m3-reveal--left {
          transform: translateX(-40px) translateY(16px) scale(0.985);
        }
        .m3-reveal--right {
          transform: translateX(40px) translateY(16px) scale(0.985);
        }
        .m3-reveal--scale {
          transform: translateY(28px) scale(0.95);
        }
        .m3-reveal.is-visible {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          filter: blur(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .m3-reveal {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
        }

        /* ====================================================================
           Animated Modern City & Architectural Grid Background
           ==================================================================== */
        .ind-city-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .ind-city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
        }
        .ind-red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          pointer-events: none;
        }
        .ind-red-glow--1 {
          width: 600px;
          height: 360px;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0) 70%);
        }
        .ind-red-glow--2 {
          width: 480px;
          height: 320px;
          bottom: 0;
          right: -110px;
          background: radial-gradient(circle, rgba(230,57,70,0.14) 0%, rgba(230,57,70,0) 70%);
        }
        .ind-city-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 330px;
          opacity: 0.72;
        }
        .ind-arc-anim {
          stroke-dashoffset: 0;
          animation: indArcFlow 18s linear infinite;
        }
        .ind-arc-anim--slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        .ind-svg-dash {
          stroke-dashoffset: 0;
          animation: indArcFlow 14s linear infinite;
        }
        @keyframes indArcFlow {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .ind-beacon-pulse {
          animation: indBeacon 2.8s ease-in-out infinite;
          transform-origin: center;
        }
        .ind-beacon-pulse--delay {
          animation-delay: 1.4s;
        }
        @keyframes indBeacon {
          0%, 100% { opacity: 0.35; r: 3px; }
          50% { opacity: 1; r: 5.5px; }
        }

        /* Architectural Background Lines */
        .ind-arch-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 280px at 85% 15%, rgba(230,57,70,0.09), transparent 70%),
            linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.05) 50%, transparent 100%);
          z-index: 0;
        }

        /* Shared Typography */
        .ind-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 14px;
        }
        .ind-kicker::before {
          content: '';
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }
        .ind-section-title {
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 18px;
          color: #ffffff;
        }
        .ind-section-header--center {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 40px;
        }
        .ind-section-header--center .ind-kicker::after {
          content: '';
          width: 24px;
          height: 2px;
          background: linear-gradient(270deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }

        /* ====================================================================
           00 · HERO BANNER
           ==================================================================== */
        .ind-hero {
          position: relative;
          padding: 136px 0 72px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ind-hero__container {
          position: relative;
          z-index: 2;
        }
        .ind-hero__header {
          text-align: center;
          max-width: 960px;
          margin: 0 auto 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ind-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
        }
        .ind-breadcrumb a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ind-breadcrumb a:hover {
          color: #E63946;
        }
        .ind-breadcrumb__sep {
          color: rgba(255,255,255,0.3);
        }
        .ind-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .ind-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ff8a93;
          margin-bottom: 18px;
        }
        .ind-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 12px #E63946;
        }
        .ind-hero__title {
          font-size: clamp(36px, 5.2vw, 64px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 28px;
          background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.82) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Quick-Jump Sector Pills */
        .ind-sector-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .ind-sector-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(15, 18, 25, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.11);
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ind-sector-pill__num {
          font-size: 11.5px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 0.06em;
        }
        .ind-sector-pill:hover {
          border-color: rgba(230, 57, 70, 0.55);
          background: rgba(230, 57, 70, 0.12);
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Panoramic Showcase Image */
        .ind-hero__showcase {
          max-width: 1180px;
          margin: 0 auto;
        }
        .ind-hero__image-frame {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 440px;
          display: flex;
          align-items: flex-end;
          padding: clamp(24px, 4vw, 48px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.65),
            0 0 60px rgba(230,57,70,0.12);
        }
        .ind-hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.03);
          filter: brightness(0.68) contrast(1.08);
          transition: transform 8s ease;
        }
        .ind-hero__image-frame:hover .ind-hero__image {
          transform: scale(1.07);
        }
        .ind-hero__image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.2) 0%, rgba(8,9,12,0.55) 45%, rgba(8,9,12,0.94) 100%),
            radial-gradient(circle at 20% 85%, rgba(230,57,70,0.32), transparent 55%);
        }
        .ind-hero__vector-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.7;
        }
        .ind-hero__corner {
          position: absolute;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 2;
        }
        .ind-hero__corner--tl {
          top: 20px;
          left: 20px;
          border-top: 2px solid #E63946;
          border-left: 2px solid #E63946;
          border-top-left-radius: 8px;
        }
        .ind-hero__corner--br {
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid #E63946;
          border-right: 2px solid #E63946;
          border-bottom-right-radius: 8px;
        }
        .ind-hero__status-tag {
          position: absolute;
          top: 24px;
          right: 28px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(8, 9, 12, 0.78);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(12px);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.9);
        }
        .ind-hero__status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .ind-hero__quote-box {
          position: relative;
          z-index: 2;
          max-width: 880px;
          margin: 0 auto;
          padding: clamp(22px, 3vw, 34px) clamp(24px, 3.5vw, 42px);
          border-radius: 20px;
          background: rgba(12, 14, 20, 0.78);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          display: flex;
          align-items: center;
          gap: 22px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
        }
        .ind-hero__quote-bar {
          width: 5px;
          align-self: stretch;
          border-radius: 999px;
          background: linear-gradient(180deg, #E63946 0%, #ff8a93 100%);
          flex-shrink: 0;
        }
        .ind-hero__quote-text {
          margin: 0;
          font-size: clamp(16.5px, 2vw, 22px);
          font-weight: 500;
          line-height: 1.6;
          color: rgba(255,255,255,0.95);
          letter-spacing: -0.01em;
        }

        /* ====================================================================
           01 · OPPORTUNITY-DRIVEN INDUSTRY APPROACH (2-Col + SVG Convergence)
           ==================================================================== */
        .ind-section {
          position: relative;
          padding: clamp(72px, 8vw, 112px) 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ind-overview-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
        }
        .ind-prose p {
          font-size: 15.5px;
          line-height: 1.8;
          color: rgba(255,255,255,0.74);
          margin: 0 0 16px;
        }
        .ind-prose p.ind-prose__lead {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.65;
          color: rgba(255,255,255,0.95);
          padding-left: 18px;
          border-left: 3px solid #E63946;
          margin-bottom: 20px;
        }

        /* Overview Right Visual Composite Card */
        .ind-overview-card {
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(20,23,32,0.9) 0%, rgba(10,12,18,0.96) 100%);
          border: 1px solid rgba(255,255,255,0.11);
          box-shadow: 0 28px 64px rgba(0,0,0,0.5);
        }
        .ind-overview-card__photo-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .ind-overview-card__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75) contrast(1.08);
          transition: transform 6s ease;
        }
        .ind-overview-card:hover .ind-overview-card__photo {
          transform: scale(1.06);
        }
        .ind-overview-card__photo-tint {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.15) 0%, rgba(10,12,18,0.98) 100%),
            radial-gradient(circle at 80% 20%, rgba(230,57,70,0.32), transparent 60%);
        }
        .ind-overview-card__badge {
          position: absolute;
          top: 18px;
          left: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffffff;
        }
        .ind-overview-card__badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .ind-overview-card__diagram {
          padding: 8px 18px 22px;
        }
        .ind-convergence-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ====================================================================
           02 · FIVE PRIORITY SECTORS
           ==================================================================== */
        .ind-section--sectors {
          background: linear-gradient(180deg, #0A0C10 0%, #08090C 100%);
        }

        /* 5-Sector Quick Mini Grid */
        .ind-sector-mini-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin-bottom: 52px;
        }
        .ind-sector-mini-card {
          padding: 18px;
          border-radius: 18px;
          background: rgba(16, 19, 27, 0.78);
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
          transition: all 0.3s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ind-sector-mini-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230,57,70,0.5);
          background: rgba(230,57,70,0.09);
          box-shadow: 0 16px 36px rgba(0,0,0,0.4);
        }
        .ind-sector-mini-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ind-sector-mini-card__num {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #E63946;
        }
        .ind-sector-mini-card__icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ind-sector-mini-card__title {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.35;
          color: rgba(255,255,255,0.92);
        }

        /* Detailed Sector Showcases Stack */
        .ind-sectors-stack {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .ind-sector-card {
          position: relative;
          scroll-margin-top: 104px;
          border-radius: 26px;
          background: linear-gradient(165deg, rgba(18, 21, 30, 0.92) 0%, rgba(10, 12, 18, 0.96) 100%);
          border: 1px solid rgba(255,255,255,0.09);
          overflow: hidden;
          box-shadow: 0 26px 64px rgba(0,0,0,0.45);
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .ind-sector-card:hover {
          border-color: rgba(230,57,70,0.42);
          box-shadow:
            0 32px 72px rgba(0,0,0,0.6),
            0 0 44px rgba(230,57,70,0.1);
        }
        .ind-sector-card__accent-bar {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #E63946 0%, rgba(230,57,70,0.3) 50%, transparent 100%);
        }
        .ind-sector-card__grid {
          display: grid;
          grid-template-columns: 0.96fr 1.04fr;
          gap: clamp(28px, 4vw, 48px);
          padding: clamp(24px, 3.5vw, 42px);
          align-items: stretch;
        }
        .ind-sector-card--reversed .ind-sector-card__grid {
          grid-template-columns: 1.04fr 0.96fr;
        }
        .ind-sector-card--reversed .ind-sector-card__media {
          order: 2;
        }
        .ind-sector-card--reversed .ind-sector-card__body {
          order: 1;
        }

        /* Media Column: Real Photo + Custom SVG Vector Blueprint Dock */
        .ind-sector-card__media {
          display: flex;
          flex-direction: column;
        }
        .ind-sector-card__photo-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          flex: 1;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgba(255,255,255,0.12);
          background: #08090C;
        }
        .ind-sector-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.76) contrast(1.06);
          transition: transform 6s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ind-sector-card:hover .ind-sector-card__img {
          transform: scale(1.06);
        }
        .ind-sector-card__img-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.12) 0%, rgba(8,9,12,0.45) 45%, rgba(8,9,12,0.96) 100%),
            radial-gradient(circle at 85% 15%, rgba(230,57,70,0.25), transparent 55%);
        }
        .ind-sector-card__num-pill {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 2;
          display: inline-flex;
          align-items: baseline;
          gap: 5px;
          padding: 8px 15px;
          border-radius: 999px;
          background: rgba(8, 9, 12, 0.82);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
        }
        .ind-sector-card__num-red {
          font-size: 14px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 0.08em;
        }
        .ind-sector-card__num-total {
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.08em;
        }

        /* Custom SVG Illustration Dock inside Photo */
        .ind-sector-card__svg-dock {
          position: relative;
          z-index: 2;
          margin: 16px;
          padding: 14px 18px 10px;
          border-radius: 16px;
          background: rgba(10, 12, 18, 0.82);
          border: 1px solid rgba(255,255,255,0.13);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .ind-sector-card__svg-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: rgba(255,255,255,0.68);
          margin-bottom: 4px;
        }
        .ind-sector-card__svg-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .ind-sector-vector {
          width: 100%;
          height: 112px;
          display: block;
        }

        /* Content Column */
        .ind-sector-card__body {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ind-sector-card__head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .ind-sector-card__icon-box {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.34);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ind-sector-card__kicker {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: #ff8a93;
          text-transform: uppercase;
        }
        .ind-sector-card__title {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
          color: #ffffff;
        }
        .ind-sector-card__tagline {
          font-size: 16.5px;
          font-weight: 600;
          color: #E63946;
          margin-bottom: 16px;
        }
        .ind-sector-card__desc {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.76);
          margin: 0 0 24px;
        }

        /* 2x2 Opportunity Highlights Grid */
        .ind-sector-card__highlights-wrap {
          margin-bottom: 26px;
        }
        .ind-sector-card__highlights-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          color: rgba(255,255,255,0.52);
          margin-bottom: 12px;
        }
        .ind-sector-card__highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .ind-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 13px 15px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s ease;
        }
        .ind-highlight-item:hover {
          border-color: rgba(230,57,70,0.4);
          background: rgba(230,57,70,0.07);
          transform: translateY(-2px);
        }
        .ind-highlight-item__num {
          font-size: 11px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.28);
          padding: 3px 7px;
          border-radius: 6px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ind-highlight-item__text {
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.45;
          color: rgba(255,255,255,0.9);
        }

        .ind-sector-card__footer {
          padding-top: 6px;
        }
        .ind-sector-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.4);
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ind-sector-card__cta:hover {
          background: #E63946;
          border-color: #E63946;
          transform: translateX(4px);
          box-shadow: 0 10px 26px rgba(230,57,70,0.35);
        }

        /* ====================================================================
           03 · EXECUTIVE CTA BAND
           ==================================================================== */
        .ind-cta-section {
          position: relative;
          padding: clamp(72px, 8vw, 112px) 0;
        }
        .ind-cta-box {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          padding: clamp(36px, 5vw, 64px);
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(22, 25, 36, 0.92) 0%, rgba(10, 12, 18, 0.96) 100%);
          border: 1px solid rgba(230,57,70,0.34);
          text-align: center;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.6),
            0 0 60px rgba(230,57,70,0.12);
        }
        .ind-cta-box__glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 540px;
          height: 260px;
          background: radial-gradient(circle, rgba(230,57,70,0.26) 0%, transparent 70%);
          pointer-events: none;
        }
        .ind-cta-box__title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 14px;
          color: #ffffff;
        }
        .ind-cta-box__lead {
          font-size: 18px;
          font-weight: 600;
          color: #ff8a93;
          margin: 0 0 12px;
        }
        .ind-cta-box__desc {
          max-width: 720px;
          margin: 0 auto 30px;
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.76);
        }
        .ind-cta-box__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
        .ind-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ind-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #c82333 100%);
          color: #ffffff;
          box-shadow: 0 14px 32px rgba(230,57,70,0.35);
        }
        .ind-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(230,57,70,0.5);
        }
        .ind-btn--secondary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .ind-btn--secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.32);
          transform: translateY(-2px);
        }

        /* ====================================================================
           Responsive Breakpoints
           ==================================================================== */
        @media (max-width: 1080px) {
          .ind-overview-grid {
            grid-template-columns: 1fr;
          }
          .ind-sector-mini-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .ind-sector-card__grid,
          .ind-sector-card--reversed .ind-sector-card__grid {
            grid-template-columns: 1fr;
          }
          .ind-sector-card--reversed .ind-sector-card__media,
          .ind-sector-card--reversed .ind-sector-card__body {
            order: unset;
          }
        }
        @media (max-width: 680px) {
          .ind-hero {
            padding: 116px 0 56px;
          }
          .ind-hero__image-frame {
            min-height: 360px;
          }
          .ind-hero__quote-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .ind-hero__quote-bar {
            width: 56px;
            height: 4px;
          }
          .ind-sector-mini-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ind-sector-card__highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </MainLayout>
  );
}
