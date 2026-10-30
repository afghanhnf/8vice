import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getServices } from '@/data/services';

/* ============================================================================
   Reusable Animated Modern City & Architectural Grid Background
   ============================================================================ */
function ModernCityBg({ variant = 'default' }) {
  return (
    <div className={`cnt-city-bg cnt-city-bg--${variant}`} aria-hidden="true">
      <div className="cnt-city-grid" />
      <div className="cnt-red-glow cnt-red-glow--1" />
      <div className="cnt-red-glow cnt-red-glow--2" />

      <svg
        className="cnt-city-svg"
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id={`cntSkylineFade-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#E63946" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#08090C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`cntLineGrad-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
            <stop offset="30%" stopColor="#E63946" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#ff6b78" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill={`url(#cntSkylineFade-${variant})`} opacity="0.55">
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

        <path
          d="M 145 130 Q 430 10 722 80 T 1140 90"
          stroke={`url(#cntLineGrad-${variant})`}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="cnt-arc-anim"
        />
        <path
          d="M 315 95 Q 620 35 935 105 T 1335 165"
          stroke={`url(#cntLineGrad-${variant})`}
          strokeWidth="1"
          strokeDasharray="4 8"
          className="cnt-arc-anim cnt-arc-anim--slow"
        />

        <line x1="0" y1="260" x2="1440" y2="260" stroke={`url(#cntLineGrad-${variant})`} strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="310" x2="1440" y2="310" stroke={`url(#cntLineGrad-${variant})`} strokeWidth="1" opacity="0.65" />

        <circle cx="315" cy="45" r="3.5" fill="#E63946" className="cnt-beacon-pulse" />
        <circle cx="722" cy="25" r="4" fill="#E63946" className="cnt-beacon-pulse cnt-beacon-pulse--delay" />
        <circle cx="1140" cy="40" r="3.5" fill="#E63946" className="cnt-beacon-pulse" />
      </svg>
    </div>
  );
}

export default function Contact() {
  const { lang } = useTranslation();
  const isId = lang === 'id';
  const { siteSettings } = usePage().props;

  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;
  const whatsappUrl = siteSettings?.whatsapp_url || 'https://wa.me/628118005110';

  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false);

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang, submitted]);

  const updateField = (key, val) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const directions = isId
    ? [
        {
          value: 'China to Indonesia',
          tag: 'CN → ID',
          label: 'Tiongkok ke Indonesia',
          sub: 'Ekspansi & Masuk Pasar Indonesia'
        },
        {
          value: 'Indonesia to China',
          tag: 'ID → CN',
          label: 'Indonesia ke Tiongkok',
          sub: 'Akses Pasar & Mitra di Tiongkok'
        },
        {
          value: 'Bilateral Partnership',
          tag: 'ID ⇄ CN',
          label: 'Kemitraan Bilateral',
          sub: 'Inisiatif Bersama & Kolaborasi Ekosistem'
        }
      ]
    : [
        {
          value: 'China to Indonesia',
          tag: 'CN → ID',
          label: 'China to Indonesia',
          sub: 'Entering & Scaling in Indonesia'
        },
        {
          value: 'Indonesia to China',
          tag: 'ID → CN',
          label: 'Indonesia to China',
          sub: 'Market Access & Partners in China'
        },
        {
          value: 'Bilateral Partnership',
          tag: 'ID ⇄ CN',
          label: 'Bilateral Partnership',
          sub: 'Joint Initiative & Ecosystem Collaboration'
        }
      ];

  const industries = isId
    ? [
        'Infrastruktur & Pembangunan Perkotaan',
        'Teknologi & Ekosistem Digital',
        'Pariwisata, Perjalanan & Perhotelan',
        'Ekonomi Kreatif & Gaya Hidup',
        'Perdagangan & Barang Konsumen',
        'Sektor Lainnya'
      ]
    : [
        'Infrastructure & Urban Development',
        'Technology & Digital Ecosystems',
        'Tourism, Travel & Hospitality',
        'Creative Economy & Lifestyle',
        'Trade & Consumer Goods',
        'Other Sector'
      ];

  // Service CTAs link here as /contact?service={slug}
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const presetSlug = urlParams ? urlParams.get('service') : null;
  const presetPaper = urlParams ? urlParams.get('paper') : null;
  const presetTier = urlParams ? urlParams.get('tier') : null;

  const isResearchPaperPreset = presetSlug === 'research-paper';
  const paperServiceTitle = isId
    ? 'Lisensi Akses Research Paper China'
    : 'China Research Paper Access License';

  const servicesList = [
    ...getServices(lang).map((svc) => svc.title),
    paperServiceTitle
  ];

  const presetService = isResearchPaperPreset
    ? paperServiceTitle
    : getServices(lang).find((svc) => svc.id === presetSlug)?.title;

  const defaultDescription = isResearchPaperPreset
    ? (isId
        ? `Permohonan Faktur & Lisensi Dokumen Riset: "${presetPaper || 'China Cross-Border Blueprint 2026'}" (Paket Lisensi: ${presetTier === 'corp' ? 'Korporat - Rp 7.490.000' : 'Eksekutif - Rp 1.490.000'}). Mohon kirimkan instruksi pembayaran dan faktur pajak perusahaan.`
        : `Request for Invoice & Paper License Access: "${presetPaper || 'China Cross-Border Blueprint 2026'}" (License Tier: ${presetTier === 'corp' ? 'Corporate - $499 USD' : 'Executive - $99 USD'}). Please provide official invoice and payment details.`)
    : '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: '',
    direction: directions[0].value,
    industry: industries[0],
    service: presetService || servicesList[0],
    description: defaultDescription,
    website_url: '' // Honeypot
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const compiledSubject = `${formData.service} (${formData.direction})`;
    const compiledMessage = [
      `[Position]: ${formData.position || '-'}`,
      `[Country]: ${formData.country || '-'}`,
      `[Business Direction]: ${formData.direction}`,
      `[Industry]: ${formData.industry}`,
      `[Service Required]: ${formData.service}`,
      '',
      `[Project Brief]:`,
      formData.description
    ].join('\n');

    router.post(
      '/contact-submit',
      {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: compiledSubject,
        message: compiledMessage,
        website_url: formData.website_url
      },
      {
        preserveScroll: true,
        onSuccess: () => {
          setProcessing(false);
          setSubmitted(true);
          setFormData({
            name: '',
            company: '',
            position: '',
            email: '',
            phone: '',
            country: '',
            direction: directions[0].value,
            industry: industries[0],
            service: servicesList[0],
            description: '',
            website_url: ''
          });
        },
        onError: (errs) => {
          setProcessing(false);
          setErrors(errs || {});
        }
      }
    );
  };

  const steps = isId
    ? [
        {
          num: '01',
          title: 'Peninjauan Profil & Sasaran',
          desc: 'Tim penasihat kami meninjau konteks proyek, target pasar, dan kebutuhan spesifik Anda.'
        },
        {
          num: '02',
          title: 'Sesi Penyelarasan Awal',
          desc: 'Diskusi rahasia untuk memetakan kelayakan peluang, pemangku kepentingan, dan opsi kemitraan.'
        },
        {
          num: '03',
          title: 'Rekomendasi Langkah Strategis',
          desc: 'Penyusunan peta jalan masuk pasar atau fasilitasi pencocokan mitra yang terstruktur.'
        }
      ]
    : [
        {
          num: '01',
          title: 'Objective & Context Review',
          desc: 'Our advisory desk evaluates your project brief, target corridor, and sector requirements.'
        },
        {
          num: '02',
          title: 'Confidential Alignment Call',
          desc: 'An initial executive discussion to map feasibility, stakeholders, and partnership pathways.'
        },
        {
          num: '03',
          title: 'Structured Action Plan',
          desc: 'Formulation of a tailored market entry, government relations, or B2B matching scope.'
        }
      ];

  return (
    <MainLayout>
      <SeoHead pageCode="contact" title={isId ? 'Hubungi Kami' : 'Contact Us'} />

      <div className="cnt-page">
        {/* ================================================================
            00 · HERO BANNER — Centered Header + Direct Channel Pills + Panoramic Showcase
            ================================================================ */}
        <section className="cnt-hero">
          <ModernCityBg variant="hero" />

          <div className="container cnt-hero__container">
            <div className="cnt-hero__header m3-reveal">
              <nav className="cnt-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">{isId ? 'Beranda' : 'Home'}</Link>
                <span className="cnt-breadcrumb__sep">/</span>
                <span className="cnt-breadcrumb__current">
                  {isId ? 'Hubungi Kami' : 'Contact Us'}
                </span>
              </nav>

              <div className="cnt-eyebrow-pill">
                <span className="cnt-eyebrow-dot" />
                {isId
                  ? 'MULAI PERCAKAPAN · KONSULTASI STRATEGIS'
                  : 'START A CONVERSATION · STRATEGIC INQUIRY'}
              </div>

              <h1 className="cnt-hero__title">
                {isId ? (
                  <>
                    Mari Mulai <span className="cnt-text-red">Percakapan Strategis.</span>
                  </>
                ) : (
                  <>
                    Let&apos;s Start a <span className="cnt-text-red">Conversation.</span>
                  </>
                )}
              </h1>

              <p className="cnt-hero__subtitle">
                {isId
                  ? 'Setiap kemitraan yang sukses dimulai dari pemahaman yang tepat terhadap peluang.'
                  : 'Every successful partnership starts with understanding the opportunity.'}
              </p>

              {/* Quick Direct Communication Pills */}
              <div className="cnt-channel-pills">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cnt-channel-pill cnt-channel-pill--wa"
                >
                  <span className="cnt-channel-pill__dot cnt-channel-pill__dot--green" />
                  <span>WhatsApp: +62 811-8005-110</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsWechatModalOpen(true)}
                  className="cnt-channel-pill cnt-channel-pill--wc"
                >
                  <span className="cnt-channel-pill__dot cnt-channel-pill__dot--wechat" />
                  <span>{isId ? 'WeChat Official QR Code' : 'WeChat Official QR'}</span>
                </button>

                <a href={emailHref} className="cnt-channel-pill">
                  <span className="cnt-channel-pill__dot cnt-channel-pill__dot--red" />
                  <span>{cleanEmail}</span>
                </a>
              </div>
            </div>

            {/* Panoramic Image with Lead Statement Inside */}
            <div className="cnt-hero__showcase m3-reveal m3-reveal--scale" style={{ transitionDelay: '120ms' }}>
              <div className="cnt-hero__image-frame">
                <img
                  src="/images/consultation_advisory_bw.webp"
                  alt={isId ? 'Konsultasi Strategis 8 Vice' : '8 Vice Strategic Consultation'}
                  className="cnt-hero__image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="cnt-hero__image-overlay" />
                <div className="cnt-hero__corner cnt-hero__corner--tl" />
                <div className="cnt-hero__corner cnt-hero__corner--br" />

                <div className="cnt-hero__status-tag">
                  <span className="cnt-eyebrow-dot" />
                  <span>
                    {isId
                      ? 'MEJA KONSULTASI JAKARTA ⇄ TIONGKOK'
                      : 'JAKARTA HQ · INDONESIA–CHINA ADVISORY DESK'}
                  </span>
                </div>

                <div className="cnt-hero__quote-box">
                  <div className="cnt-hero__quote-bar" />
                  <p className="cnt-hero__quote-text">
                    {isId
                      ? '“Baik Anda sedang merencanakan ekspansi ke pasar baru, mencari mitra bisnis strategis, menjajaki kolaborasi institusional, maupun mengembangkan proyek lintas batas, 8 Vice menyambut baik kesempatan untuk memahami tujuan Anda.”'
                      : '“Whether you are planning to enter a new market, seeking a strategic business partner, exploring institutional collaboration, or developing a cross-border project, 8 Vice welcomes the opportunity to understand your objectives.”'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            01 · MAIN CONTACT & INQUIRY HUB
            ================================================================ */}
        <section className="cnt-main-section">
          <div className="cnt-arch-lines" aria-hidden="true" />

          <div className="container cnt-main-container">
            <div className="cnt-grid">
              {/* ============================================================
                  LEFT COLUMN: Office Card + Direct Messaging + 3-Step Process + Map
                  ============================================================ */}
              <div className="cnt-left-col">
                {/* 1. Office & Direct Channels Card */}
                <div className="cnt-office-card m3-reveal m3-reveal--left">
                  <div className="cnt-office-card__banner">
                    <img
                      src="/images/city_orbiting_cards.webp"
                      alt="8 Vice Jakarta Office"
                      className="cnt-office-card__banner-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cnt-office-card__banner-shade" />
                    <div className="cnt-office-card__banner-body">
                      <span className="cnt-eyebrow-pill" style={{ marginBottom: '6px' }}>
                        <span className="cnt-eyebrow-dot" />
                        {isId ? 'KANTOR & SALURAN KOMUNIKASI' : 'OFFICE & DIRECT CHANNELS'}
                      </span>
                      <h2>8 Vice Strategic Advisory</h2>
                    </div>
                  </div>

                  <div className="cnt-office-card__body">
                    <p className="cnt-office-card__intro">
                      {isId
                        ? 'Tim kami akan meninjau kebutuhan Anda dan menentukan langkah tindak lanjut yang paling tepat untuk mendukung ekspansi lintas batas Anda.'
                        : 'Our team will review your inquiry and determine the most appropriate next steps to support your cross-border objectives.'}
                    </p>

                    <div className="cnt-info-list">
                      {/* Jakarta Office */}
                      <div className="cnt-info-item">
                        <div className="cnt-info-item__icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <div className="cnt-info-item__lbl">
                            {isId ? 'Kantor Pusat Jakarta' : 'Jakarta Headquarters'}
                          </div>
                          <div className="cnt-info-item__val">
                            {siteSettings?.address ||
                              'SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia'}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="cnt-info-item">
                        <div className="cnt-info-item__icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <div className="cnt-info-item__lbl">
                            {isId ? 'Email Resmi' : 'Official Email'}
                          </div>
                          <a href={emailHref} className="cnt-info-item__link">
                            {cleanEmail}
                          </a>
                        </div>
                      </div>

                      {/* Website & Response Time */}
                      <div className="cnt-info-item">
                        <div className="cnt-info-item__icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div>
                          <div className="cnt-info-item__lbl">
                            {isId ? 'Waktu Respons Eksekutif' : 'Executive Response Time'}
                          </div>
                          <div className="cnt-info-item__val">
                            {isId
                              ? 'Maksimal 1–2 Hari Kerja (Senin – Jumat)'
                              : 'Within 1–2 Business Days (Mon – Fri)'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Direct Instant Channels Box */}
                    <div className="cnt-direct-box">
                      <div className="cnt-direct-box__lbl">
                        {isId
                          ? 'HUBUNGI LANGSUNG VIA WHATSAPP ATAU WECHAT'
                          : 'INSTANT MESSAGING DESK (WHATSAPP & WECHAT)'}
                      </div>

                      <div className="cnt-direct-box__btns">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cnt-direct-btn cnt-direct-btn--wa"
                        >
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                          <div>
                            <strong>WhatsApp</strong>
                            <span>+62 811-8005-110</span>
                          </div>
                        </a>

                        <button
                          type="button"
                          onClick={() => setIsWechatModalOpen(true)}
                          className="cnt-direct-btn cnt-direct-btn--wc"
                        >
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                          </svg>
                          <div>
                            <strong>WeChat Official</strong>
                            <span>{isId ? 'Lihat QR Code' : 'View QR Code'}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 3-Step Consultation Process Card */}
                <div className="cnt-steps-card m3-reveal m3-reveal--left" style={{ transitionDelay: '90ms' }}>
                  <div className="cnt-kicker">
                    {isId ? 'TAHAPAN TINDAK LANJUT' : 'WHAT HAPPENS NEXT'}
                  </div>
                  <div className="cnt-steps-list">
                    {steps.map((st) => (
                      <div key={st.num} className="cnt-step-item">
                        <span className="cnt-step-item__num">{st.num}</span>
                        <div>
                          <h4>{st.title}</h4>
                          <p>{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Map Card */}
                <div className="cnt-map-card m3-reveal m3-reveal--left" style={{ transitionDelay: '150ms' }}>
                  <div className="cnt-map-card__head">
                    <div>
                      <span className="cnt-map-card__dot" />
                      <strong>SOHO Pancoran · South Jakarta</strong>
                    </div>
                    <a
                      href="https://maps.google.com/?q=SOHO+Pancoran+Jakarta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cnt-map-card__ext"
                    >
                      {isId ? 'Buka Google Maps ↗' : 'Open in Maps ↗'}
                    </a>
                  </div>
                  <div className="cnt-map-card__frame">
                    <iframe
                      src={
                        siteSettings?.maps_link &&
                        (siteSettings.maps_link.includes('embed') ||
                          siteSettings.maps_link.includes('output=embed'))
                          ? siteSettings.maps_link
                          : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid'
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(0.3) contrast(1.08)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SOHO Building Location Map"
                    />
                  </div>
                </div>
              </div>

              {/* ============================================================
                  RIGHT COLUMN: Tell Us About Your Business Inquiry Form
                  ============================================================ */}
              <div className="cnt-right-col m3-reveal m3-reveal--right" style={{ transitionDelay: '100ms' }}>
                <div className="cnt-form-card">
                  <div className="cnt-form-card__top-bar" />

                  {submitted ? (
                    <div className="cnt-success-state">
                      <div className="cnt-success-state__icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3>
                        {isId ? 'Permintaan Konsultasi Terkirim' : 'Strategic Inquiry Received'}
                      </h3>
                      <p>
                        {isId
                          ? 'Terima kasih telah menghubungi 8 Vice. Tim penasihat kami akan meninjau profil dan kebutuhan bisnis Anda serta menghubungi Anda dalam waktu maksimal 2 hari kerja.'
                          : 'Thank you for reaching out to 8 Vice. Our advisory team will review your project profile and respond within two business days.'}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="cnt-btn cnt-btn--secondary"
                      >
                        {isId ? 'Kirim Pesan Lainnya' : 'Submit Another Inquiry'}
                      </button>
                    </div>
                  ) : (
                    <div className="cnt-form-card__inner">
                      <div className="cnt-kicker">
                        {isId ? 'FORMULIR EKSPLORASI BISNIS' : 'PROJECT & PARTNERSHIP INQUIRY'}
                      </div>

                      <h2 className="cnt-form-card__title">
                        {isId ? 'Ceritakan Tentang Bisnis Anda' : 'Tell Us About Your Business'}
                      </h2>

                      <p className="cnt-form-card__lead">
                        {isId
                          ? 'Silakan bagikan beberapa detail mengenai perusahaan, target pasar, dan sasaran bisnis Anda. Informasi ini membantu kami memahami kebutuhan Anda dan mempersiapkan diskusi awal yang terarah.'
                          : 'Please share a few details about your company, target market, and business objectives. This will help us understand your requirements and prepare for an initial discussion.'}
                      </p>
                      <p className="cnt-form-card__sub">
                        {isId
                          ? 'Kami menyambut pertanyaan dari perusahaan Tiongkok yang menjajaki Indonesia, bisnis Indonesia yang mencari peluang di Tiongkok, serta organisasi yang ingin mengembangkan kemitraan bilateral.'
                          : 'We welcome inquiries from Chinese companies exploring Indonesia, Indonesian businesses seeking opportunities in China, and organizations interested in developing bilateral partnerships.'}
                      </p>

                      {Object.keys(errors).length > 0 && (
                        <div className="cnt-error-box">
                          <strong>
                            {isId
                              ? 'Harap periksa kembali isian formulir:'
                              : 'Please check the form inputs:'}
                          </strong>
                          <ul>
                            {Object.values(errors).map((err, i) => (
                              <li key={i}>{err}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="cnt-form">
                        {/* Honeypot */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                          <input
                            type="text"
                            name="website_url"
                            value={formData.website_url}
                            onChange={(e) => updateField('website_url', e.target.value)}
                            tabIndex="-1"
                            autoComplete="off"
                          />
                        </div>

                        {/* Row 1: Name & Company */}
                        <div className="cnt-form-row">
                          <label className="cnt-field">
                            <span>{isId ? 'Nama Lengkap *' : 'Name *'}</span>
                            <input
                              type="text"
                              required
                              placeholder={isId ? 'Nama lengkap Anda' : 'Your full name'}
                              value={formData.name}
                              onChange={(e) => updateField('name', e.target.value)}
                            />
                          </label>

                          <label className="cnt-field">
                            <span>{isId ? 'Perusahaan / Institusi *' : 'Company / Institution *'}</span>
                            <input
                              type="text"
                              required
                              placeholder={
                                isId ? 'Nama organisasi Anda' : 'Your company or organization'
                              }
                              value={formData.company}
                              onChange={(e) => updateField('company', e.target.value)}
                            />
                          </label>
                        </div>

                        {/* Row 2: Position & Country */}
                        <div className="cnt-form-row">
                          <label className="cnt-field">
                            <span>{isId ? 'Jabatan / Posisi' : 'Position / Title'}</span>
                            <input
                              type="text"
                              placeholder={
                                isId ? 'Contoh: Direktur, VP Ekspansi' : 'e.g. Director, VP of Strategy'
                              }
                              value={formData.position}
                              onChange={(e) => updateField('position', e.target.value)}
                            />
                          </label>

                          <label className="cnt-field">
                            <span>{isId ? 'Negara Asal' : 'Country'}</span>
                            <input
                              type="text"
                              placeholder={
                                isId
                                  ? 'Contoh: Indonesia, Tiongkok, Singapura'
                                  : 'e.g. China, Indonesia, Singapore'
                              }
                              value={formData.country}
                              onChange={(e) => updateField('country', e.target.value)}
                            />
                          </label>
                        </div>

                        {/* Row 3: Email & Phone */}
                        <div className="cnt-form-row">
                          <label className="cnt-field">
                            <span>{isId ? 'Email Bisnis *' : 'Work Email *'}</span>
                            <input
                              type="email"
                              required
                              placeholder="name@company.com"
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                            />
                          </label>

                          <label className="cnt-field">
                            <span>
                              {isId ? 'WhatsApp / WeChat / Telepon' : 'Phone / WhatsApp / WeChat ID'}
                            </span>
                            <input
                              type="text"
                              placeholder="+62 / +86 / WeChat ID"
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                            />
                          </label>
                        </div>

                        {/* Row 4: Interactive Corridor Direction Selector */}
                        <div className="cnt-field">
                          <span>
                            {isId
                              ? 'Arah Ekspansi / Kolaborasi Bisnis *'
                              : 'Business Direction *'}
                          </span>
                          <div className="cnt-dir-grid">
                            {directions.map((dir) => {
                              const active = formData.direction === dir.value;
                              return (
                                <button
                                  key={dir.value}
                                  type="button"
                                  onClick={() => updateField('direction', dir.value)}
                                  className={`cnt-dir-card ${active ? 'is-active' : ''}`}
                                >
                                  <span className="cnt-dir-card__tag">{dir.tag}</span>
                                  <strong>{dir.label}</strong>
                                  <small>{dir.sub}</small>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Row 5: Industry & Service Required */}
                        <div className="cnt-form-row">
                          <label className="cnt-field">
                            <span>{isId ? 'Sektor Industri *' : 'Industry *'}</span>
                            <select
                              value={formData.industry}
                              onChange={(e) => updateField('industry', e.target.value)}
                            >
                              {industries.map((ind) => (
                                <option key={ind} value={ind}>
                                  {ind}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label className="cnt-field">
                            <span>{isId ? 'Layanan yang Dibutuhkan *' : 'Service Required *'}</span>
                            <select
                              value={formData.service}
                              onChange={(e) => updateField('service', e.target.value)}
                            >
                              {servicesList.map((svc) => (
                                <option key={svc} value={svc}>
                                  {svc}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>

                        {/* Row 6: Project Brief */}
                        <label className="cnt-field">
                          <span>
                            {isId
                              ? 'Deskripsi Singkat Proyek atau Kebutuhan Anda *'
                              : 'Brief Description of Your Project *'}
                          </span>
                          <textarea
                            rows="4"
                            required
                            placeholder={
                              isId
                                ? 'Ceritakan tujuan pasar, rencana kemitraan, atau dukungan strategis yang Anda perlukan...'
                                : 'Tell us about your target market, partnership goals, or specific strategic advisory needs...'
                            }
                            value={formData.description}
                            onChange={(e) => updateField('description', e.target.value)}
                          />
                        </label>

                        <button
                          type="submit"
                          disabled={processing}
                          className="cnt-btn cnt-btn--primary cnt-btn--submit"
                        >
                          <span>
                            {processing
                              ? isId
                                ? 'Mengirim...'
                                : 'Submitting...'
                              : isId
                                ? 'Kirim Permintaan Konsultasi Strategis'
                                : 'Submit Strategic Inquiry'}
                          </span>
                          {!processing && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            WECHAT OFFICIAL QR CODE MODAL
            ================================================================ */}
        {isWechatModalOpen && (
          <div className="cnt-modal-backdrop" onClick={() => setIsWechatModalOpen(false)}>
            <div className="cnt-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="cnt-eyebrow-pill" style={{ justifyContent: 'center', marginBottom: '8px' }}>
                <span className="cnt-eyebrow-dot" />
                <span>WECHAT OFFICIAL</span>
              </div>
              <h3>{isId ? 'Hubungi Kami via WeChat' : 'Connect on WeChat'}</h3>
              <p>
                {isId
                  ? 'Pindai QR Code resmi di bawah ini menggunakan aplikasi WeChat Anda.'
                  : 'Scan the official QR code below using your WeChat app.'}
              </p>
              <div className="cnt-modal-qr-frame">
                <img
                  src="/images/wechat.webp"
                  alt="8 Vice WeChat QR Code"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsWechatModalOpen(false)}
                className="cnt-btn cnt-btn--secondary"
                style={{ width: '100%' }}
              >
                {isId ? 'Tutup' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================================
          SCOPED STYLES FOR /contact + GOOGLE M3 TRANSITIONS
          ==================================================================== */}
      <style>{`
        .cnt-page {
          background: #08090C;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }
        .cnt-text-red {
          color: #E63946;
        }

        /* Google M3 Emphasized Decelerate Transitions */
        .m3-reveal {
          opacity: 0;
          transform: translateY(34px) scale(0.985);
          filter: blur(4px);
          transition:
            opacity 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            transform 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            filter 0.65s cubic-bezier(0.05, 0.7, 0.1, 1);
          will-change: opacity, transform, filter;
        }
        .m3-reveal--left {
          transform: translateX(-38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--right {
          transform: translateX(38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--scale {
          transform: translateY(24px) scale(0.96);
        }
        .m3-reveal.is-visible {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          filter: blur(0);
        }

        /* Animated Modern City Background */
        .cnt-city-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .cnt-city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
        }
        .cnt-red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          pointer-events: none;
        }
        .cnt-red-glow--1 {
          width: 600px;
          height: 360px;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-red-glow--2 {
          width: 480px;
          height: 320px;
          bottom: 0;
          right: -100px;
          background: radial-gradient(circle, rgba(230,57,70,0.14) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-city-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 320px;
          opacity: 0.72;
        }
        .cnt-arc-anim {
          stroke-dashoffset: 0;
          animation: cntArcFlow 18s linear infinite;
        }
        .cnt-arc-anim--slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        @keyframes cntArcFlow {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .cnt-beacon-pulse {
          animation: cntBeacon 2.8s ease-in-out infinite;
        }
        .cnt-beacon-pulse--delay {
          animation-delay: 1.4s;
        }
        @keyframes cntBeacon {
          0%, 100% { opacity: 0.35; r: 3px; }
          50% { opacity: 1; r: 5.5px; }
        }
        .cnt-arch-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 280px at 85% 15%, rgba(230,57,70,0.09), transparent 70%),
            linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.05) 50%, transparent 100%);
          z-index: 0;
        }

        /* Shared Typography */
        .cnt-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 12px;
        }
        .cnt-kicker::before {
          content: '';
          width: 22px;
          height: 2px;
          background: linear-gradient(90deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }
        .cnt-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .cnt-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 10px #E63946;
          display: inline-block;
        }

        /* ====================================================================
           00 · HERO BANNER
           ==================================================================== */
        .cnt-hero {
          position: relative;
          padding: 136px 0 68px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .cnt-hero__container {
          position: relative;
          z-index: 2;
        }
        .cnt-hero__header {
          text-align: center;
          max-width: 920px;
          margin: 0 auto 42px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cnt-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 20px;
        }
        .cnt-breadcrumb a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
        }
        .cnt-breadcrumb a:hover {
          color: #E63946;
        }
        .cnt-breadcrumb__sep {
          color: rgba(255,255,255,0.3);
        }
        .cnt-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .cnt-hero__title {
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 14px 0 14px;
          color: #ffffff;
        }
        .cnt-hero__subtitle {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          margin: 0 0 26px;
        }
        .cnt-channel-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .cnt-channel-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(15,18,26,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cnt-channel-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.5);
          color: #ffffff;
        }
        .cnt-channel-pill__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .cnt-channel-pill__dot--green {
          background: #25D366;
          box-shadow: 0 0 8px #25D366;
        }
        .cnt-channel-pill__dot--wechat {
          background: #07C160;
          box-shadow: 0 0 8px #07C160;
        }
        .cnt-channel-pill__dot--red {
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }

        /* Panoramic Showcase */
        .cnt-hero__showcase {
          max-width: 1180px;
          margin: 0 auto;
        }
        .cnt-hero__image-frame {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 390px;
          display: flex;
          align-items: flex-end;
          padding: clamp(24px, 4vw, 44px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.65),
            0 0 60px rgba(230,57,70,0.12);
        }
        .cnt-hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.68) contrast(1.08);
          transition: transform 8s ease;
        }
        .cnt-hero__image-frame:hover .cnt-hero__image {
          transform: scale(1.05);
        }
        .cnt-hero__image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.2) 0%, rgba(8,9,12,0.55) 45%, rgba(8,9,12,0.94) 100%),
            radial-gradient(circle at 20% 85%, rgba(230,57,70,0.32), transparent 55%);
        }
        .cnt-hero__corner {
          position: absolute;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 2;
        }
        .cnt-hero__corner--tl {
          top: 20px;
          left: 20px;
          border-top: 2px solid #E63946;
          border-left: 2px solid #E63946;
          border-top-left-radius: 8px;
        }
        .cnt-hero__corner--br {
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid #E63946;
          border-right: 2px solid #E63946;
          border-bottom-right-radius: 8px;
        }
        .cnt-hero__status-tag {
          position: absolute;
          top: 22px;
          right: 26px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(8,9,12,0.8);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffffff;
        }
        .cnt-hero__quote-box {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(22px, 3vw, 32px) clamp(24px, 3.5vw, 38px);
          border-radius: 20px;
          background: rgba(12,14,20,0.8);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(18px);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .cnt-hero__quote-bar {
          width: 5px;
          align-self: stretch;
          border-radius: 999px;
          background: linear-gradient(180deg, #E63946 0%, #ff8a93 100%);
          flex-shrink: 0;
        }
        .cnt-hero__quote-text {
          margin: 0;
          font-size: clamp(15.5px, 1.8vw, 19.5px);
          font-weight: 500;
          line-height: 1.62;
          color: rgba(255,255,255,0.95);
        }

        /* ====================================================================
           01 · MAIN CONTACT SPLIT SECTION
           ==================================================================== */
        .cnt-main-section {
          position: relative;
          padding: clamp(68px, 7vw, 108px) 0 116px;
        }
        .cnt-main-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
        }
        .cnt-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.28fr;
          gap: clamp(32px, 4vw, 48px);
          align-items: start;
        }
        .cnt-left-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Office Card */
        .cnt-office-card {
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(18,21,30,0.94) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 56px rgba(0,0,0,0.45);
        }
        .cnt-office-card__banner {
          position: relative;
          padding: 28px 30px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-office-card__banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.45);
        }
        .cnt-office-card__banner-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,9,12,0.82) 0%, rgba(230,57,70,0.28) 100%);
        }
        .cnt-office-card__banner-body {
          position: relative;
          z-index: 2;
        }
        .cnt-office-card__banner-body h2 {
          font-size: 24px;
          font-weight: 800;
          margin: 4px 0 0;
          color: #ffffff;
        }
        .cnt-office-card__body {
          padding: 26px 30px 30px;
        }
        .cnt-office-card__intro {
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.72);
          margin: 0 0 22px;
        }
        .cnt-info-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }
        .cnt-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .cnt-info-item__icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cnt-info-item__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.48);
          margin-bottom: 3px;
        }
        .cnt-info-item__val {
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.9);
        }
        .cnt-info-item__link {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }
        .cnt-info-item__link:hover {
          color: #E63946;
        }

        /* Direct Instant Channels Box */
        .cnt-direct-box {
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-direct-box__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }
        .cnt-direct-box__btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cnt-direct-btn {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .cnt-direct-btn div {
          display: flex;
          flex-direction: column;
        }
        .cnt-direct-btn strong {
          font-size: 13px;
          font-weight: 700;
        }
        .cnt-direct-btn span {
          font-size: 11.5px;
          opacity: 0.85;
        }
        .cnt-direct-btn--wa {
          background: rgba(37,211,102,0.12);
          border: 1px solid rgba(37,211,102,0.34);
          color: #4ADE80;
        }
        .cnt-direct-btn--wa:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
        }
        .cnt-direct-btn--wc {
          background: rgba(7,193,96,0.12);
          border: 1px solid rgba(7,193,96,0.34);
          color: #34D399;
        }
        .cnt-direct-btn--wc:hover {
          background: rgba(7,193,96,0.2);
          transform: translateY(-2px);
        }

        /* 3-Step Process Card */
        .cnt-steps-card {
          padding: 26px 28px;
          border-radius: 22px;
          background: rgba(15,18,26,0.9);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .cnt-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }
        .cnt-step-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }
        .cnt-step-item__num {
          font-size: 11.5px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.3);
          padding: 4px 8px;
          border-radius: 7px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cnt-step-item h4 {
          font-size: 14.5px;
          font-weight: 700;
          margin: 0 0 3px;
          color: #ffffff;
        }
        .cnt-step-item p {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* Map Card */
        .cnt-map-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(15,18,26,0.92);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cnt-map-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 13px;
        }
        .cnt-map-card__head > div {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cnt-map-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .cnt-map-card__ext {
          font-size: 12px;
          font-weight: 700;
          color: #ff8a93;
          text-decoration: none;
        }
        .cnt-map-card__frame {
          aspect-ratio: 16 / 9.5;
        }

        /* ====================================================================
           RIGHT COLUMN: FORM CARD
           ==================================================================== */
        .cnt-form-card {
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(19,22,32,0.95) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.11);
          box-shadow:
            0 30px 72px rgba(0,0,0,0.55),
            0 0 50px rgba(230,57,70,0.08);
        }
        .cnt-form-card__top-bar {
          height: 4px;
          background: linear-gradient(90deg, #E63946 0%, #ff8a93 50%, transparent 100%);
        }
        .cnt-form-card__inner {
          padding: clamp(28px, 4vw, 44px);
        }
        .cnt-form-card__title {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: #ffffff;
        }
        .cnt-form-card__lead {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0 0 10px;
        }
        .cnt-form-card__sub {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255,255,255,0.54);
          margin: 0 0 28px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-error-box {
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.4);
          color: #ff8a93;
          font-size: 13.5px;
          margin-bottom: 22px;
        }
        .cnt-error-box ul {
          margin: 8px 0 0 18px;
          padding: 0;
        }

        .cnt-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cnt-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cnt-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cnt-field > span {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: rgba(255,255,255,0.85);
        }
        .cnt-field input,
        .cnt-field select,
        .cnt-field textarea {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.13);
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all 0.22s ease;
        }
        .cnt-field select option {
          background: #0F1219;
          color: #ffffff;
        }
        .cnt-field input:focus,
        .cnt-field select:focus,
        .cnt-field textarea:focus {
          border-color: #E63946;
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.18);
        }

        /* Direction Selector Cards */
        .cnt-dir-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .cnt-dir-card {
          padding: 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75);
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.22s ease;
        }
        .cnt-dir-card__tag {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
        }
        .cnt-dir-card strong {
          font-size: 13.5px;
          color: #ffffff;
        }
        .cnt-dir-card small {
          font-size: 11.5px;
          line-height: 1.4;
          color: rgba(255,255,255,0.55);
        }
        .cnt-dir-card.is-active {
          background: rgba(230,57,70,0.16);
          border-color: #E63946;
          box-shadow: 0 10px 24px rgba(230,57,70,0.2);
        }

        .cnt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .cnt-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #b91c28 100%);
          color: #ffffff;
          box-shadow: 0 14px 32px rgba(230,57,70,0.35);
        }
        .cnt-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(230,57,70,0.5);
        }
        .cnt-btn--secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .cnt-btn--submit {
          width: 100%;
          padding: 16px 28px;
          font-size: 15px;
          margin-top: 6px;
        }

        /* Success State */
        .cnt-success-state {
          padding: 64px 28px;
          text-align: center;
        }
        .cnt-success-state__icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(37,211,102,0.15);
          border: 1px solid rgba(37,211,102,0.4);
          color: #4ADE80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
        }
        .cnt-success-state h3 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .cnt-success-state p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.72);
          max-width: 460px;
          margin: 0 auto 26px;
        }

        /* WeChat Modal */
        .cnt-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(6,8,12,0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .cnt-modal-card {
          background: #10131C;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 24px;
          padding: 32px 28px;
          max-width: 380px;
          width: 100%;
          text-align: center;
          box-shadow: 0 28px 70px rgba(0,0,0,0.7);
        }
        .cnt-modal-card h3 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .cnt-modal-card p {
          font-size: 13.5px;
          color: rgba(255,255,255,0.68);
          margin: 0 0 20px;
        }
        .cnt-modal-qr-frame {
          background: #ffffff;
          padding: 14px;
          border-radius: 16px;
          display: inline-block;
          margin-bottom: 20px;
        }
        .cnt-modal-qr-frame img {
          width: 230px;
          height: 230px;
          object-fit: contain;
          display: block;
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .cnt-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .cnt-hero {
            padding: 114px 0 54px;
          }
          .cnt-hero__quote-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .cnt-hero__quote-bar {
            width: 56px;
            height: 4px;
          }
          .cnt-form-row,
          .cnt-dir-grid,
          .cnt-direct-box__btns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </MainLayout>
  );
}
