import React, { useState, useEffect, useRef, useMemo } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getArticleExtras } from '@/data/articleExtras';
import { getResearchPaperBySlug } from '@/data/researchPapers';

/* ============================================================================
   Helper: Curated Contextual Gallery Images & Backlink Graph by Category/Slug
   ============================================================================ */
function getContextualMediaAndBacklinks(insight, isId) {
  const cat = (insight?.cat || '').toLowerCase();
  const slug = (insight?.slug || '').toLowerCase();

  let gallery = [
    {
      src: '/images/china_city_network.webp',
      tag: isId ? 'KORIDOR BILATERAL' : 'BILATERAL CORRIDOR',
      caption: isId
        ? 'Konektivitas ekosistem bisnis dan investasi strategis antara pusat ekonomi Tiongkok dan Indonesia.'
        : 'Strategic business ecosystem and investment connectivity linking major Chinese and Indonesian economic hubs.'
    },
    {
      src: '/images/industry_infrastructure.webp',
      tag: isId ? 'INFRASTRUKTUR & INDUSTRI' : 'INFRASTRUCTURE & INDUSTRY',
      caption: isId
        ? 'Pengembangan kawasan industri terpadu, logistik pelabuhan, dan rantai pasok hilirisasi di koridor Jawa dan luar Jawa.'
        : 'Integrated industrial estate development, port logistics, and downstream supply chains across Java and outer islands.'
    },
    {
      src: '/images/china_tech_hub.webp',
      tag: isId ? 'EKOSISTEM DIGITAL & REGULASI' : 'DIGITAL ECOSYSTEM & POLICY',
      caption: isId
        ? 'Transformasi infrastruktur digital, kepatuhan data lintas batas, dan adopsi teknologi enterprise.'
        : 'Digital infrastructure transformation, cross-border data compliance, and enterprise technology adoption.'
    }
  ];

  if (cat.includes('digital') || cat.includes('tech') || cat.includes('finance') || slug.includes('qris') || slug.includes('pdp')) {
    gallery = [
      {
        src: '/images/industry_technology.webp',
        tag: isId ? 'TEKNOLOGI & PEMBAYARAN' : 'FINTECH & DIGITAL ECOSYSTEM',
        caption: isId
          ? 'Integrasi pembayaran lintas batas, arsitektur cloud lokal, dan ekosistem platform digital Indonesia–Tiongkok.'
          : 'Cross-border payment integration, localized cloud architecture, and Indonesia–China digital platform ecosystems.'
      },
      {
        src: '/images/china_tech_hub.webp',
        tag: isId ? 'KEPATUHAN & TATA KELOLA DATA' : 'DATA GOVERNANCE & COMPLIANCE',
        caption: isId
          ? 'Implementasi kepatuhan regulasi perlindungan data (UU PDP) dan lokalisasi sistem enterprise.'
          : 'Implementation of Personal Data Protection (UU PDP) compliance and enterprise system localization.'
      },
      {
        src: '/images/city_orbiting_cards.webp',
        tag: isId ? 'TRANSFORMASI KOMERSIAL' : 'COMMERCIAL TRANSFORMATION',
        caption: isId
          ? 'Sinergi antara inovator teknologi Tiongkok dengan jaringan perbankan, ritel, dan konsumen Indonesia.'
          : 'Synergy between Chinese technology innovators and Indonesian banking, retail, and consumer networks.'
      }
    ];
  } else if (cat.includes('consumer') || cat.includes('retail') || slug.includes('ecommerce')) {
    gallery = [
      {
        src: '/images/industry_trade.webp',
        tag: isId ? 'DISTRIBUSI & RITEL MODERN' : 'DISTRIBUTION & MODERN RETAIL',
        caption: isId
          ? 'Jaringan distribusi multi-tier dan adaptasi saluran ritel modern maupun tradisional di pasar Indonesia.'
          : 'Multi-tier distribution networks and adaptation across modern and traditional retail channels in Indonesia.'
      },
      {
        src: '/images/industry_creative.webp',
        tag: isId ? 'LOKALISASI MEREK & LIVE COMMERCE' : 'BRAND LOCALIZATION & LIVE COMMERCE',
        caption: isId
          ? 'Strategi komunikasi merek, studio live-commerce, dan kemitraan kreator lokal untuk penetrasi konsumen.'
          : 'Brand communication strategy, live-commerce studios, and local creator partnerships for consumer penetration.'
      },
      {
        src: '/images/china_trade_port.webp',
        tag: isId ? 'RANTAI PASOK LINTAS BATAS' : 'CROSS-BORDER SUPPLY CHAIN',
        caption: isId
          ? 'Fasilitasi impor resmi melalui entitas PT PMA lokal, gudang berikat, dan sertifikasi produk.'
          : 'Compliant import facilitation through local PT PMA entities, bonded warehousing, and product certification.'
      }
    ];
  }

  /* Connected Knowledge Graph Backlinks (Services, Industries, Gateway) */
  const ecosystemBacklinks = [
    {
      type: isId ? 'Layanan Terkait' : 'Core Service Backlink',
      title: isId ? 'Strategic Advisory & Market Entry' : 'Strategic Advisory & Market Entry',
      desc: isId
        ? 'Studi kelayakan komersial, peta jalan regulasi, dan struktur masuk pasar Indonesia–Tiongkok.'
        : 'Commercial feasibility, regulatory roadmaps, and Indonesia–China market entry structuring.',
      href: '/services/advisory',
      anchor: isId ? 'Konsultasi Masuk Pasar' : 'Market Entry Advisory'
    },
    {
      type: isId ? 'Layanan Terkait' : 'Core Service Backlink',
      title: isId ? 'Government Relations & Stakeholder Engagement' : 'Government Relations & Stakeholder Engagement',
      desc: isId
        ? 'Pelibatan kelembagaan, pemetaan pemangku kepentingan, dan penyelarasan kebijakan publik-swasta.'
        : 'Institutional liaison, stakeholder mapping, and public-private policy alignment.',
      href: '/services/gov-relations',
      anchor: isId ? 'Hubungan Kelembagaan & Regulasi' : 'Institutional & Regulatory Liaison'
    },
    {
      type: isId ? 'Layanan Terkait' : 'Core Service Backlink',
      title: isId ? 'Business Matching & Strategic Partnerships' : 'Business Matching & Strategic Partnerships',
      desc: isId
        ? 'Pencocokan B2B terkurasi dengan mitra distribusi, pemilik kawasan industri, dan investor lokal.'
        : 'Curated B2B matchmaking with distribution partners, industrial estates, and local investors.',
      href: '/services/business-matching',
      anchor: isId ? 'Pencocokan Mitra B2B' : 'B2B Partner Matchmaking'
    },
    {
      type: isId ? 'Koridor Bilateral' : 'Corridor Hub Backlink',
      title: isId ? 'Gerbang Ekspansi Indonesia ⇄ Tiongkok' : 'Indonesia ⇄ China Expansion Gateway',
      desc: isId
        ? 'Panduan strategis dua arah untuk perusahaan Tiongkok ke Indonesia dan perusahaan Indonesia ke Tiongkok.'
        : 'Bi-directional strategic gateway for Chinese enterprises entering Indonesia and Indonesian firms exploring China.',
      href: '/gateway',
      anchor: isId ? 'Gerbang Indonesia–Tiongkok' : 'Indonesia–China Gateway'
    },
    {
      type: isId ? 'Fokus Sektoral' : 'Industry Sector Backlink',
      title: isId ? '5 Sektor Prioritas & Peluang Industri' : '5 Priority Sectors & Industry Opportunities',
      desc: isId
        ? 'Eksplorasi peluang di sektor Infrastruktur, Teknologi, Pariwisata, Ekonomi Kreatif, dan FMCG.'
        : 'Explore bilateral opportunities across Infrastructure, Technology, Tourism, Creative Economy, and Trade.',
      href: '/industries',
      anchor: isId ? 'Ekosistem 5 Industri Prioritas' : '5 Priority Industry Ecosystems'
    },
    {
      type: isId ? 'Kolaborasi Ekosistem' : 'Partnership Hub Backlink',
      title: isId ? 'Program Kemitraan Ekosistem 8 Vice' : '8 Vice Ecosystem Partnership Program',
      desc: isId
        ? 'Daftarkan perusahaan atau asosiasi Anda sebagai mitra strategis dalam ekosistem lintas batas 8 Vice.'
        : 'Register your enterprise or association as a strategic partner within the 8 Vice cross-border ecosystem.',
      href: '/insights#partnership-register',
      anchor: isId ? 'Daftar Partnership 8 Vice' : 'Register for Partnership'
    }
  ];

  return { gallery, ecosystemBacklinks };
}

export default function ArticleDetail({ insight, relatedInsights = [], allInsights = [] }) {
  if (!insight) return null;

  const { lang } = useTranslation();
  const isId = lang === 'id';
  const contentRef = useRef(null);

  const [tocItems, setTocItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [expandAllFaqs, setExpandAllFaqs] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  /* In-Page Search State */
  const [sidebarSearch, setSidebarSearch] = useState('');

  /* Lightbox State for Article Images */
  const [lightboxImg, setLightboxImg] = useState(null);

  /* Copy Citation / Backlink Feedback State */
  const [copiedType, setCopiedType] = useState('');

  /* China Research Paper & Paywall Access State */
  const researchPaper = useMemo(() => getResearchPaperBySlug(insight?.slug), [insight?.slug]);
  const [isPaperUnlocked, setIsPaperUnlocked] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState('individual'); // 'individual' | 'corporate'
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('qris'); // 'qris' | 'va' | 'card' | 'wechat' | 'invoice'
  const [checkoutProcessing, setCheckoutProcessing] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [readerActivePage, setReaderActivePage] = useState(1);

  const redirectUrl = insight?.research_paper_link || researchPaper?.paymentLink;

  const handlePaperRedirectOrCheckout = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }
    setIsCheckoutModalOpen(true);
  };

  const getLocalized = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return (isId ? val.id : val.en) || val.en || val.id || '';
  };

  const titleText = getLocalized(insight.t || insight.title);
  const excerptText = getLocalized(insight.excerpt || insight.description);
  const bodyHtml = getLocalized(insight.body);

  const extras = getArticleExtras(insight);
  const hasFaqs = extras.faqs.length > 0;
  const hasReferences = extras.references.length > 0;

  const { gallery, ecosystemBacklinks } = useMemo(
    () => getContextualMediaAndBacklinks(insight, isId),
    [insight, isId]
  );

  const coverUrl = insight.cover
    ? insight.cover.startsWith('/') || insight.cover.startsWith('http')
      ? insight.cover
      : `/storage/${insight.cover}`
    : '/images/market_intelligence_hero.webp';

  /* Pool of articles for instant in-page search & cluster backlinks */
  const searchableArticles = useMemo(() => {
    const source = Array.isArray(allInsights) && allInsights.length > 0 ? allInsights : relatedInsights;
    return source.map((a) => ({
      ...a,
      displayTitle: getLocalized(a.t || a.title),
      displayExcerpt: getLocalized(a.excerpt || a.description)
    }));
  }, [allInsights, relatedInsights, isId]);

  const searchResults = useMemo(() => {
    const q = sidebarSearch.trim().toLowerCase();
    if (!q) return searchableArticles.filter((a) => a.slug !== insight.slug).slice(0, 4);
    return searchableArticles
      .filter(
        (a) =>
          a.displayTitle.toLowerCase().includes(q) ||
          a.displayExcerpt.toLowerCase().includes(q) ||
          (a.cat || '').toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchableArticles, sidebarSearch, insight.slug]);

  /* Build Dynamic Table of Contents (Daftar Isi) from H2/H3 + Gallery + Backlinks + FAQ + References */
  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll('h2, h3');
    const scanned = [];

    headingElements.forEach((h, idx) => {
      const text = (h.innerText || h.textContent || '').trim();
      if (!text) return;

      const slugId =
        h.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') ||
        `section-${idx + 1}`;

      h.id = slugId;
      h.style.scrollMarginTop = '108px';

      scanned.push({
        id: slugId,
        text,
        level: h.tagName.toLowerCase()
      });
    });

    if (researchPaper) {
      scanned.push({
        id: 'article-research-paper',
        text: isId ? 'Dokumen Riset & Paywall Akses' : 'Research Paper & Document Access',
        level: 'h2'
      });
    }

    scanned.push({
      id: 'article-gallery',
      text: isId ? 'Visualisasi & Dokumentasi Sektor' : 'Sector Visuals & Figures',
      level: 'h2'
    });

    scanned.push({
      id: 'article-backlinks',
      text: isId ? 'Model Backlink & Peta Rujukan' : 'Backlink Model & Knowledge Graph',
      level: 'h2'
    });

    if (hasFaqs) {
      scanned.push({
        id: 'article-faq',
        text: isId ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions (FAQ)',
        level: 'h2'
      });
    }

    if (hasReferences) {
      scanned.push({
        id: 'article-references',
        text: isId ? 'Rujukan Regulasi & Sitasi' : 'Regulatory References & Citations',
        level: 'h2'
      });
    }

    setTocItems(scanned);
    if (scanned.length > 0) {
      setActiveId(scanned[0].id);
    }
  }, [bodyHtml, lang, hasFaqs, hasReferences, isId]);

  /* Scroll-spy for TOC + Reading Progress Bar */
  useEffect(() => {
    const handleScroll = () => {
      const docEl = document.documentElement;
      const scrollTop = window.scrollY || docEl.scrollTop;
      const scrollHeight = docEl.scrollHeight - docEl.clientHeight;
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setReadingProgress(pct);

      const scrollPos = scrollTop + 160;
      let currentActive = '';

      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            currentActive = item.id;
          }
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const handleTocClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(targetId);
      setMobileTocOpen(false);
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const canonicalUrl =
    typeof window !== 'undefined'
      ? window.location.origin + (isId ? '/id' : '') + `/insights/${insight.slug}`
      : `https://8vice.com/insights/${insight.slug}`;

  const handleCopy = (type, text) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(''), 2400);
    }
  };

  const htmlBacklinkSnippet = `<a href="${canonicalUrl}" target="_blank" rel="noopener">${titleText} — 8 Vice Market Intelligence</a>`;
  const citationSnippet = `${insight.author_name || '8 Vice Research Desk'} (${insight.date || '2026'}). "${titleText}." 8 Vice Cross-Border Intelligence. Retrieved from ${canonicalUrl}`;

  return (
    <MainLayout>
      <SeoHead article={insight} />

      {/* Top Reading Progress Bar */}
      <div className="ad-progress-track" aria-hidden="true">
        <div className="ad-progress-bar" style={{ width: `${readingProgress}%` }} />
      </div>

      <article className="ad-page">
        {/* ================================================================
            00 · ARTICLE EXECUTIVE HERO BANNER
            ================================================================ */}
        <header className="ad-hero">
          <div className="ad-hero__bg-wrap">
            <img
              src={coverUrl}
              alt={titleText}
              className="ad-hero__bg-img"
              loading="lazy"
              decoding="async"
            />
            <div className="ad-hero__bg-shade" />
            <div className="ad-hero__grid-overlay" />
          </div>

          <div className="container ad-hero__container">
            <div className="ad-hero__top-bar">
              <nav className="ad-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">{isId ? 'Beranda' : 'Home'}</Link>
                <span>/</span>
                <Link href="/insights">{isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships'}</Link>
                <span>/</span>
                <span className="ad-breadcrumb__current">{insight.cat || 'Briefing'}</span>
              </nav>

              <Link href="/insights" className="ad-back-pill">
                <span>←</span>
                <span>{isId ? 'Kembali ke Semua Wawasan' : 'Back to All Insights'}</span>
              </Link>
            </div>

            <div className="ad-hero__meta-pills">
              <span className="ad-cat-badge">
                <span className="ad-dot" />
                {insight.cat || 'STRATEGIC INSIGHT'}
              </span>
              <span className="ad-meta-chip">{insight.rt || '8 min read'}</span>
              <span className="ad-meta-chip">{insight.date || '2026'}</span>
              <span className="ad-meta-chip ad-meta-chip--verified">
                ✓ {isId ? 'Kajian Terverifikasi 8 Vice' : '8 Vice Verified Briefing'}
              </span>
            </div>

            <h1 className="ad-hero__title">{titleText}</h1>
            <p className="ad-hero__lead">{excerptText}</p>

            {/* Author & Quick Action Bar */}
            <div className="ad-hero__author-bar">
              <div className="ad-author">
                <div className="ad-author__avatar">
                  {(insight.author_name || '8V')
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </div>
                <div>
                  <div className="ad-author__name">
                    {insight.author_name || '8 Vice Strategic Advisory'}
                  </div>
                  <div className="ad-author__role">
                    {insight.author_role || (isId ? 'Intelijen Koridor Lintas Batas' : 'Cross-Border Corridor Intelligence')}
                  </div>
                </div>
              </div>

              <div className="ad-hero__tools">
                <button
                  type="button"
                  onClick={() => handleCopy('url', canonicalUrl)}
                  className="ad-tool-btn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>
                    {copiedType === 'url'
                      ? isId
                        ? 'Tautan Disalin!'
                        : 'Link Copied!'
                      : isId
                        ? 'Salin Tautan'
                        : 'Copy Link'}
                  </span>
                </button>

                <a
                  href="#article-backlinks"
                  onClick={(e) => handleTocClick(e, 'article-backlinks')}
                  className="ad-tool-btn"
                >
                  <span>🔗</span>
                  <span>{isId ? 'Backlink & Sitasi' : 'Backlinks & Cite'}</span>
                </a>

                {hasFaqs && (
                  <a
                    href="#article-faq"
                    onClick={(e) => handleTocClick(e, 'article-faq')}
                    className="ad-tool-btn"
                  >
                    <span>❓</span>
                    <span>FAQ ({extras.faqs.length})</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="ad-tool-btn"
                >
                  <span>🖨️</span>
                  <span>{isId ? 'Cetak / PDF' : 'Print Brief'}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ================================================================
            01 · MAIN EDITORIAL LAYOUT (Content Column + Sticky Intelligence Sidebar)
            ================================================================ */}
        <section className="ad-main-section">
          <div className="container ad-main-container">
            <div className="ad-layout-grid">
              {/* ============================================================
                  LEFT / MAIN COLUMN: Cover + Mobile TOC + Prose + Gallery + Backlinks + FAQ + References
                  ============================================================ */}
              <div className="ad-content-col">
                {/* Primary Featured Image with Caption */}
                <figure className="ad-cover-figure">
                  <div
                    className="ad-cover-figure__frame"
                    onClick={() =>
                      setLightboxImg({
                        src: coverUrl,
                        tag: insight.cat || 'FEATURED VISUAL',
                        caption: titleText
                      })
                    }
                  >
                    <img
                      src={coverUrl}
                      alt={titleText}
                      className="ad-cover-figure__img"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="ad-cover-figure__zoom">
                      🔍 {isId ? 'Perbesar Gambar' : 'Click to Enlarge'}
                    </span>
                  </div>
                  <figcaption className="ad-cover-figure__caption">
                    <span className="ad-cover-figure__caption-tag">
                      {isId ? 'GAMBAR UTAMA' : 'FIGURE 01'}
                    </span>
                    <span>{excerptText}</span>
                  </figcaption>
                </figure>

                {/* Collapsible Mobile / Inline Table of Contents (Daftar Isi) */}
                {tocItems.length > 0 && (
                  <div className="ad-inline-toc">
                    <button
                      type="button"
                      onClick={() => setMobileTocOpen(!mobileTocOpen)}
                      className="ad-inline-toc__toggle"
                    >
                      <div className="ad-inline-toc__toggle-left">
                        <span className="ad-dot" />
                        <span>
                          {isId
                            ? `Daftar Isi Artikel (${tocItems.length} Bagian)`
                            : `Table of Contents (${tocItems.length} Sections)`}
                        </span>
                      </div>
                      <span>{mobileTocOpen ? '▲' : '▼'}</span>
                    </button>

                    {mobileTocOpen && (
                      <ol className="ad-inline-toc__list">
                        {tocItems.map((item, idx) => (
                          <li key={item.id} className={item.level === 'h3' ? 'is-sub' : ''}>
                            <a href={`#${item.id}`} onClick={(e) => handleTocClick(e, item.id)}>
                              <span className="ad-inline-toc__num">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span>{item.text}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}

                {/* Article HTML Body */}
                <div
                  ref={contentRef}
                  className="ad-prose"
                  dangerouslySetInnerHTML={{
                    __html: bodyHtml || '<p>Content will be updated soon.</p>'
                  }}
                />

                {/* ==========================================================
                    01.5 RESEARCH PAPER & LOCKED PAYWALL DOCUMENT VIEWER (#article-research-paper)
                    ========================================================== */}
                {researchPaper && (
                  <section id="article-research-paper" className="ad-block-section ad-paper-section">
                    <div className="ad-paper-card">
                      {/* Paper Section Header */}
                      <div className="ad-paper-head">
                        <div className="ad-paper-badges-row">
                          <span className="ad-paper-badge-pill">
                            <span className="ad-paper-badge-dot" />
                            {isId ? researchPaper.badgeId : researchPaper.badge}
                          </span>
                          <span className={`ad-paper-status-pill ${isPaperUnlocked ? 'is-unlocked' : 'is-locked'}`}>
                            {isPaperUnlocked ? (
                              <>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                                </svg>
                                {isId ? 'DOKUMEN DIBUKA · LISENSI AKTIF' : 'UNLOCKED · ACTIVE LICENSE'}
                              </>
                            ) : (
                              <>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                {isId ? 'DEFAULT TERKUNCI · AKSES BERBAYAR' : 'DEFAULT LOCKED · PAYWALL PROTECTED'}
                              </>
                            )}
                          </span>
                        </div>

                        <h2 className="ad-paper-title">
                          {isId ? researchPaper.title.id : researchPaper.title.en}
                        </h2>

                        <p className="ad-paper-subtitle">
                          {isId ? researchPaper.subtitle.id : researchPaper.subtitle.en}
                        </p>

                        {/* Technical Specifications Strip */}
                        <div className="ad-paper-specs-strip">
                          <div className="ad-paper-spec-item">
                            <span className="ad-paper-spec-lbl">{isId ? 'VOLUME DOKUMEN' : 'TOTAL VOLUME'}</span>
                            <span className="ad-paper-spec-val">58 Pages Unabridged</span>
                          </div>
                          <div className="ad-paper-spec-item">
                            <span className="ad-paper-spec-lbl">{isId ? 'FORMAT BERKAS' : 'FILE FORMAT'}</span>
                            <span className="ad-paper-spec-val">PDF A4 (300 DPI) + XLSX</span>
                          </div>
                          <div className="ad-paper-spec-item">
                            <span className="ad-paper-spec-lbl">{isId ? 'TANGGAL RILIS' : 'RELEASE DATE'}</span>
                            <span className="ad-paper-spec-val">October 2026 (Quarterly)</span>
                          </div>
                          <div className="ad-paper-spec-item">
                            <span className="ad-paper-spec-lbl">{isId ? 'TIM RISET' : 'RESEARCH DESK'}</span>
                            <span className="ad-paper-spec-val">8 Vice Macro & Industrial Desk</span>
                          </div>
                        </div>
                      </div>

                      {/* Chapter Table of Contents & Access Status Matrix */}
                      <div className="ad-paper-toc-wrap">
                        <div className="ad-paper-toc-head">
                          <h3 style={{ margin: 0, fontSize: '16.5px', fontWeight: 700, color: '#FFFFFF' }}>
                            {isId ? 'Daftar Bab Riset & Status Akses Dokumen' : 'Research Chapter Breakdown & Access Matrix'}
                          </h3>
                          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                            {isId ? 'Bab 1–2 terbuka gratis · Bab 3–5 & Lampiran terkunci' : 'Ch. 1–2 free preview · Ch. 3–5 & Datasets locked'}
                          </span>
                        </div>

                        <div className="ad-paper-chapters-grid">
                          {researchPaper.tocPreview.map((ch) => {
                            const isChUnlocked = isPaperUnlocked || !ch.isLocked;
                            return (
                              <div
                                key={ch.num}
                                className={`ad-paper-chapter-row ${isChUnlocked ? 'is-free' : 'is-locked'}`}
                              >
                                <div className="ad-paper-chapter-info">
                                  <span className="ad-paper-chapter-num">CH. {ch.num}</span>
                                  <span className="ad-paper-chapter-title">
                                    {isId ? ch.title.id : ch.title.en}
                                  </span>
                                </div>
                                <div className="ad-paper-chapter-meta">
                                  <span className="ad-paper-chapter-pages">{ch.pages}</span>
                                  <span className={`ad-paper-chapter-pill ${isChUnlocked ? 'pill-free' : 'pill-locked'}`}>
                                    {isChUnlocked ? (
                                      <span>✓ {isId ? 'Pratinjau Terbuka' : 'Preview Available'}</span>
                                    ) : (
                                      <span>🔒 {isId ? 'Terkunci' : 'Locked'}</span>
                                    )}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Document Reader Container */}
                      <div className="ad-paper-viewer-box">
                        {/* PDF Toolbar */}
                        <div className="ad-paper-toolbar">
                          <div className="ad-paper-toolbar-left">
                            <span className="ad-paper-toolbar-icon">📄</span>
                            <span className="ad-paper-toolbar-filename">
                              China-Indonesia-Industrial-Relocation-Blueprint-2026.pdf
                            </span>
                          </div>
                          <div className="ad-paper-toolbar-center">
                            <span className="ad-paper-page-counter">
                              {isId ? `Halaman ${readerActivePage} dari 58` : `Page ${readerActivePage} of 58`}
                            </span>
                          </div>
                          <div className="ad-paper-toolbar-right">
                            <span className="ad-paper-toolbar-zoom">100%</span>
                            <button
                              type="button"
                              className="ad-paper-toolbar-btn"
                              onClick={() => {
                                if (!isPaperUnlocked) {
                                  handlePaperRedirectOrCheckout();
                                }
                              }}
                              title={isPaperUnlocked ? 'Download PDF' : 'Document Locked'}
                            >
                              {isPaperUnlocked ? '⬇ Unduh' : '🔒 Unduh'}
                            </button>
                          </div>
                        </div>

                        {/* Document Content Area */}
                        <div className="ad-paper-doc-canvas">
                          {/* Page 1 (Always Crisp Preview) */}
                          <div className="ad-paper-doc-page">
                            <div className="ad-paper-page-header">
                              <span>8 VICE CROSS-BORDER STRATEGIC RESEARCH · BILATERAL SERIES</span>
                              <span>REPORT REF: 8V-CHN-2026-04</span>
                            </div>

                            <div className="ad-paper-page-hero">
                              <div className="ad-paper-hero-kicker">
                                {isId ? 'CETAKTAKBIR EKSEKUSI INDUSTRI 2026–2030' : 'INDUSTRIAL EXECUTION BLUEPRINT 2026–2030'}
                              </div>
                              <h1 className="ad-paper-page-title">
                                {isId ? researchPaper.title.id : researchPaper.title.en}
                              </h1>
                              <p className="ad-paper-page-meta-line">
                                By {researchPaper.author.name} · {researchPaper.publishedDate} · Jakarta / Shanghai
                              </p>
                            </div>

                            <div className="ad-paper-page-abstract-box">
                              <h4 style={{ margin: '0 0 10px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FF7B7B' }}>
                                {isId ? 'RINGKASAN EKSEKUTIF (EXECUTIVE ABSTRACT)' : 'EXECUTIVE SUMMARY & ABSTRACT'}
                              </h4>
                              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(255,255,255,0.88)' }}>
                                &ldquo;{isId ? researchPaper.sampleExcerpt.id : researchPaper.sampleExcerpt.en}&rdquo;
                              </p>
                            </div>

                            {/* Sample Key Visual Metrics in Report */}
                            <div className="ad-paper-sample-charts">
                              <div className="ad-paper-sample-chart">
                                <div className="ad-chart-title">{isId ? 'Korelasi Kecepatan BEP Pabrik' : 'Factory BEP Velocity Breakdown'}</div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">Lokalisasi Rantai Pasok Tier-2</div>
                                  <div className="ad-chart-bar" style={{ width: '62%' }}>62%</div>
                                </div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">Insentif Fiskal Tax Holiday</div>
                                  <div className="ad-chart-bar is-sub" style={{ width: '24%' }}>24%</div>
                                </div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">Efisiensi Biaya Logistik Awal</div>
                                  <div className="ad-chart-bar is-sub" style={{ width: '14%' }}>14%</div>
                                </div>
                              </div>

                              <div className="ad-paper-sample-chart">
                                <div className="ad-chart-title">{isId ? 'Distribusi Sektor 120 Korporasi' : 'Sector Distribution (120 Firms)'}</div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">EV & Komponen Otomotif</div>
                                  <div className="ad-chart-bar" style={{ width: '34%' }}>34%</div>
                                </div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">Elektronik & Energi Surya</div>
                                  <div className="ad-chart-bar" style={{ width: '28%' }}>28%</div>
                                </div>
                                <div className="ad-chart-bar-wrap">
                                  <div className="ad-chart-label">Permesinan & Fabrikasi Logam</div>
                                  <div className="ad-chart-bar is-sub" style={{ width: '22%' }}>22%</div>
                                </div>
                              </div>
                            </div>

                            <div className="ad-paper-page-footer">
                              <span>Page 01 of 58 · Executive Preview</span>
                              <span>Proprietary Copyright © 2026 8 Vice Strategic Advisory. All rights reserved.</span>
                            </div>
                          </div>

                          {/* Page 2 onwards: Blurred & Overlaid when Locked, or Full Unlocked */}
                          {!isPaperUnlocked ? (
                            <div className="ad-paper-locked-overlay-wrap">
                              {/* Background Blurred Faux Pages */}
                              <div className="ad-paper-blurred-pages" aria-hidden="true">
                                <div className="ad-faux-page">
                                  <div className="ad-faux-line ad-faux-line--title" />
                                  <div className="ad-faux-line ad-faux-line--p" />
                                  <div className="ad-faux-line ad-faux-line--p" />
                                  <div className="ad-faux-grid">
                                    <div className="ad-faux-box" />
                                    <div className="ad-faux-box" />
                                    <div className="ad-faux-box" />
                                  </div>
                                  <div className="ad-faux-line ad-faux-line--p" />
                                  <div className="ad-faux-line ad-faux-line--p" />
                                </div>
                                <div className="ad-faux-page">
                                  <div className="ad-faux-line ad-faux-line--title" />
                                  <div className="ad-faux-table">
                                    <div className="ad-faux-row" />
                                    <div className="ad-faux-row" />
                                    <div className="ad-faux-row" />
                                    <div className="ad-faux-row" />
                                  </div>
                                </div>
                              </div>

                              {/* Centered Floating Paywall Access Card */}
                              <div className="ad-paper-paywall-card">
                                <div className="ad-paywall-lock-pulse">
                                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                  </svg>
                                </div>

                                <div className="ad-paywall-badge">
                                  {isId ? 'DOKUMEN RISET PROPRIETARY TERKUNCI' : 'RESTRICTED ACCESS · PROPRIETARY RESEARCH PAPER'}
                                </div>

                                <h3 className="ad-paywall-title">
                                  {isId
                                    ? 'Buka Akses Laporan Riset 58 Halaman & Model Finansial Excel'
                                    : 'Unlock the Full 58-Page Research Paper & Raw Excel Financial Models'}
                                </h3>

                                <p className="ad-paywall-desc">
                                  {isId
                                    ? 'Laporan lengkap menyajikan matriks formula 40% TKDN, komparasi biaya operasional kawasan industri di 4 koridor, survei empiris 120 korporasi Tiongkok, serta template model finansial Excel mentah.'
                                    : 'The unabridged 58-page PDF report, 24-slide executive presentation deck, and raw financial model spreadsheets (.xlsx) are restricted to verified license holders.'}
                                </p>

                                {/* Pricing Options Grid */}
                                <div className="ad-paywall-tiers-grid">
                                  <div
                                    className={`ad-paywall-tier-card ${selectedLicense === 'individual' ? 'is-selected' : ''}`}
                                    onClick={() => setSelectedLicense('individual')}
                                  >
                                    <div className="ad-tier-header">
                                      <div className="ad-tier-radio">
                                        <span className={`ad-radio-dot ${selectedLicense === 'individual' ? 'is-active' : ''}`} />
                                      </div>
                                      <div>
                                        <div className="ad-tier-name">{isId ? 'Lisensi Eksekutif' : 'Executive License'}</div>
                                        <div className="ad-tier-scope">{isId ? 'Pengguna Tunggal' : 'Single User Access'}</div>
                                      </div>
                                    </div>
                                    <div className="ad-tier-price">
                                      <span className="ad-tier-currency">Rp</span>
                                      <span className="ad-tier-val">1.490.000</span>
                                      <span className="ad-tier-usd">($99 USD)</span>
                                    </div>
                                    <ul className="ad-tier-features">
                                      <li>✓ {isId ? 'Laporan PDF Lengkap 58 Halaman' : 'Full 58-Page PDF Report'}</li>
                                      <li>✓ {isId ? 'Slide Presentasi Eksekutif (24 Slide)' : 'Executive 24-Slide Deck'}</li>
                                      <li>✓ {isId ? 'Tautan Unduhan Instan & Cloud Permanen' : 'Instant Download & Cloud Access'}</li>
                                    </ul>
                                  </div>

                                  <div
                                    className={`ad-paywall-tier-card ${selectedLicense === 'corporate' ? 'is-selected' : ''}`}
                                    onClick={() => setSelectedLicense('corporate')}
                                  >
                                    <div className="ad-tier-ribbon">{isId ? 'REKOMENDASI KORPORAT' : 'CORPORATE CHOICE'}</div>
                                    <div className="ad-tier-header">
                                      <div className="ad-tier-radio">
                                        <span className={`ad-radio-dot ${selectedLicense === 'corporate' ? 'is-active' : ''}`} />
                                      </div>
                                      <div>
                                        <div className="ad-tier-name">{isId ? 'Lisensi Korporat & Konsultasi' : 'Corporate & Advisory License'}</div>
                                        <div className="ad-tier-scope">{isId ? 'Hingga 25 Anggota Tim' : 'Up to 25 Team Seats'}</div>
                                      </div>
                                    </div>
                                    <div className="ad-tier-price">
                                      <span className="ad-tier-currency">Rp</span>
                                      <span className="ad-tier-val">7.490.000</span>
                                      <span className="ad-tier-usd">($499 USD)</span>
                                    </div>
                                    <ul className="ad-tier-features">
                                      <li>✓ {isId ? 'Lisensi Distribusi Internal 25 User' : 'Enterprise 25-Seat Distribution'}</li>
                                      <li>✓ {isId ? 'Dataset Mentah Model Finansial Excel (.xlsx)' : 'Raw Excel Financial Models (.xlsx)'}</li>
                                      <li>✓ {isId ? 'Sesi Tanya-Jawab 30 Menit Bersama Direktur Riset' : '30-Min Q&A Call with Research Directors'}</li>
                                      <li>✓ {isId ? 'Penerbitan Faktur Pajak Resmi' : 'Official Corporate Tax Invoice'}</li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Action Buttons to Pay & Unlock */}
                                <div className="ad-paywall-actions">
                                  <button
                                    type="button"
                                    className="ad-paywall-btn ad-paywall-btn--primary"
                                    onClick={handlePaperRedirectOrCheckout}
                                  >
                                    <span>
                                      {selectedLicense === 'individual'
                                        ? (isId ? 'Beli & Buka Akses Paper (Rp 1.490.000 / $99)' : 'Unlock Full Paper ($99 / Rp 1.49M)')
                                        : (isId ? 'Beli Lisensi Korporat (Rp 7.490.000 / $499)' : 'Purchase Corporate License ($499 / Rp 7.49M)')}
                                    </span>
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                      <line x1="5" y1="12" x2="19" y2="12" />
                                      <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                  </button>

                                  <Link
                                    href={`/contact?service=research-paper&paper=${researchPaper.slug}&tier=${selectedLicense}`}
                                    className="ad-paywall-btn ad-paywall-btn--secondary"
                                  >
                                    <span>{isId ? 'Pesan via Faktur Perusahaan / PO →' : 'Inquire via Corporate Purchase Order →'}</span>
                                  </Link>
                                </div>

                                {/* Trust Guarantees */}
                                <div className="ad-paywall-trust">
                                  <span>🔒 256-Bit SSL Secure Checkout</span>
                                  <span>·</span>
                                  <span>⚡ Instant PDF Download Link</span>
                                  <span>·</span>
                                  <span>📄 Faktur Pajak Resmi Tersedia</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Unlocked State: Full Document Access Granted */
                            <div className="ad-paper-unlocked-container">
                              <div className="ad-unlocked-banner">
                                <div className="ad-unlocked-banner__left">
                                  <div className="ad-unlocked-icon">✓</div>
                                  <div>
                                    <h4 className="ad-unlocked-title">
                                      {isId ? 'Akses Riset 58 Halaman Berhasil Dibuka!' : 'Full 58-Page Research Paper Access Granted!'}
                                    </h4>
                                    <p className="ad-unlocked-sub">
                                      {isId
                                        ? 'Lisensi Anda aktif. Anda dapat membaca seluruh bab di bawah ini atau mengunduh berkas master PDF dan model Excel.'
                                        : 'Your license is active. You can read all chapters below or download the master PDF and raw Excel models.'}
                                    </p>
                                  </div>
                                </div>
                                <div className="ad-unlocked-banner__right">
                                  <button
                                    type="button"
                                    className="ad-unlocked-dl-btn"
                                    onClick={() => alert(isId ? 'Mengunduh Laporan Riset Lengkap (PDF 58 Halaman)...' : 'Downloading Unabridged Research Paper (58-Page PDF)...')}
                                  >
                                    ⬇ Unduh PDF (18.4 MB)
                                  </button>
                                  <button
                                    type="button"
                                    className="ad-unlocked-dl-btn ad-unlocked-dl-btn--xlsx"
                                    onClick={() => alert(isId ? 'Mengunduh Model Finansial Excel (.xlsx)...' : 'Downloading Raw Excel Datasets (.xlsx)...')}
                                  >
                                    📊 Unduh Dataset Excel
                                  </button>
                                  <button
                                    type="button"
                                    className="ad-demo-relock-btn"
                                    onClick={() => setIsPaperUnlocked(false)}
                                    title="Kunci kembali dokumen untuk demonstrasi paywall"
                                  >
                                    🔒 Kunci Kembali (Demo)
                                  </button>
                                </div>
                              </div>

                              {/* Unlocked Detailed Chapters Preview */}
                              <div className="ad-unlocked-chapters-content">
                                <div className="ad-unlocked-chapter-card">
                                  <div className="ad-ch-badge">CHAPTER 02 · KAWASAN INDUSTRI</div>
                                  <h3>Analisis Komparatif Biaya Kawasan: Kendal, Batang, Subang vs. Morowali</h3>
                                  <p>Data survei lapangan 2026 menunjukkan perbedaan signifikan dalam struktur biaya per unit operasional. Kendal Industrial Park (KIP) menawarkan efisiensi integrasi logistik ke Pelabuhan Tanjung Emas dengan tarif sewa lahan $145–$170/m², sementara Batang Integrated Industrial Estate (KITB) unggul dalam insentif masa sewa 80 tahun dan kesiapan kluster energi hijau.</p>
                                  <div className="ad-ch-data-table">
                                    <div className="ad-table-row ad-table-row--head">
                                      <span>Kawasan Industri</span>
                                      <span>Upah Minimum (UMK)</span>
                                      <span>Ketersediaan Tenaga Kerja</span>
                                      <span>Akses Pelabuhan Utama</span>
                                    </div>
                                    <div className="ad-table-row">
                                      <span>Kendal Industrial Park (KIP)</span>
                                      <span>Rp 2.613.000</span>
                                      <span>Tinggi (Kluster Vokasi)</span>
                                      <span>21 km ke Tanjung Emas</span>
                                    </div>
                                    <div className="ad-table-row">
                                      <span>Batang Estate (KITB)</span>
                                      <span>Rp 2.065.000</span>
                                      <span>Sedang (Sedang Ekspansi)</span>
                                      <span>Pelabuhan Terintegrasi</span>
                                    </div>
                                    <div className="ad-table-row">
                                      <span>Subang Smartpolitan</span>
                                      <span>Rp 3.320.000</span>
                                      <span>Tinggi (Penyangga Jabodetabek)</span>
                                      <span>45 km ke Patimban Deep Port</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="ad-unlocked-chapter-card">
                                  <div className="ad-ch-badge">CHAPTER 03 · REGULASI & FORMULA TKDN</div>
                                  <h3>Kepatuhan Regulasi & Formula Perhitungan 40% TKDN bagi OEM Asing</h3>
                                  <p>Berdasarkan Peraturan Menteri Perindustrian No. 29/2021 dan Perpres No. 79/2023, bobot penilaian TKDN terbagi menjadi: Biaya Bahan Baku Domestik (45%), Biaya Tenaga Kerja Langsung Indonesia (30%), Fasilitas Pabrikasi & Peralatan Mesin (15%), serta Aktivitas Riset & Pengembangan Lokal (10%).</p>
                                  <p>Strategi tercepat mencapai batas 40% bagi korporasi Tiongkok adalah mengalokasikan perakitan final dan pengelasan baterai pack di Indonesia, yang secara otomatis menyumbang 26–28% komponen TKDN tanpa harus memindahkan peleburan bahan mentah dasar.</p>
                                </div>

                                <div className="ad-unlocked-chapter-card">
                                  <div className="ad-ch-badge">CHAPTER 04 · SURVEI EMPIRIS & RCEP</div>
                                  <h3>Optimalisasi Skema Tarif RCEP & Penghematan Biaya Komponen Antara</h3>
                                  <p>Dengan memanfaatkan Surat Keterangan Asal (SKA) Form RCEP, korporasi manufaktur bilateral dapat memangkas tarif bea masuk komponen mesin dari 7,5% menjadi 0% dalam jangka waktu 3 tahun, menghasilkan estimasi efisiensi modal hingga $1,8 juta per lini produksi kapasitas medium.</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* ==========================================================
                    VISUAL FIGURES & FIELD GALLERY (#article-gallery)
                    ========================================================== */}
                <section id="article-gallery" className="ad-block-section">
                  <div className="ad-block-head">
                    <div className="ad-kicker">
                      {isId ? 'DOKUMENTASI & VISUALISASI SEKTOR' : 'SECTOR VISUALS & FIELD DOCUMENTATION'}
                    </div>
                    <h2 className="ad-block-title">
                      {isId
                        ? 'Ilustrasi Visual & Konteks Ekosistem'
                        : 'Visual Context & Corridor Gallery'}
                    </h2>
                  </div>

                  <div className="ad-gallery-grid">
                    {gallery.map((img, idx) => (
                      <figure
                        key={idx}
                        className="ad-gallery-card"
                        onClick={() => setLightboxImg(img)}
                      >
                        <div className="ad-gallery-card__img-wrap">
                          <img src={img.src} alt={img.tag} loading="lazy" decoding="async" />
                          <span className="ad-gallery-card__badge">{img.tag}</span>
                          <span className="ad-gallery-card__zoom-ico">⤢</span>
                        </div>
                        <figcaption className="ad-gallery-card__caption">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>

                {/* ==========================================================
                    BACKLINK MODEL & KNOWLEDGE GRAPH (#article-backlinks)
                    ========================================================== */}
                <section id="article-backlinks" className="ad-block-section ad-backlink-section">
                  <div className="ad-block-head">
                    <div className="ad-kicker">
                      {isId
                        ? 'MODEL BACKLINK & EKOSISTEM PENGETAHUAN'
                        : 'BACKLINK MODEL & CONNECTED KNOWLEDGE GRAPH'}
                    </div>
                    <h2 className="ad-block-title">
                      {isId
                        ? 'Jaringan Rujukan Silang, Layanan & Sitasi Artikel'
                        : 'Cross-Corridor Backlinks, Services & Citation Model'}
                    </h2>
                    <p className="ad-block-desc">
                      {isId
                        ? 'Eksplorasi tautan rujukan strategis yang menghubungkan kajian ini dengan kapabilitas layanan 8 Vice, fokus industri, serta perangkat kutipan backlink untuk media dan institusi riset.'
                        : 'Explore structured internal backlinks connecting this briefing with 8 Vice advisory capabilities, priority sectors, and one-click backlink citation tools for media and research partners.'}
                    </p>
                  </div>

                  {/* Part A: 6 Connected Ecosystem & Service Backlink Nodes */}
                  <div className="ad-backlink-grid">
                    {ecosystemBacklinks.map((bl, idx) => (
                      <Link key={idx} href={bl.href} className="ad-backlink-card">
                        <div className="ad-backlink-card__top">
                          <span className="ad-backlink-card__type">{bl.type}</span>
                          <span className="ad-backlink-card__arrow">↗</span>
                        </div>
                        <h3 className="ad-backlink-card__title">{bl.title}</h3>
                        <p className="ad-backlink-card__desc">{bl.desc}</p>
                        <div className="ad-backlink-card__anchor">
                          <span>🔗 Anchor:</span>
                          <code>{bl.anchor}</code>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Part B: Cluster Article Backlinks (Related Intelligence Nodes) */}
                  {relatedInsights && relatedInsights.length > 0 && (
                    <div className="ad-cluster-box">
                      <div className="ad-cluster-box__label">
                        {isId
                          ? 'TAUTAN ARTIKEL DALAM KLASTER TOPIK YANG SAMA (TOPIC CLUSTER BACKLINKS)'
                          : 'CONNECTED BRIEFINGS IN THIS TOPIC CLUSTER'}
                      </div>
                      <div className="ad-cluster-links">
                        {relatedInsights.map((rel, rIdx) => (
                          <Link
                            key={rel.slug || rIdx}
                            href={`/insights/${rel.slug}`}
                            className="ad-cluster-item"
                          >
                            <span className="ad-cluster-item__num">0{rIdx + 1}</span>
                            <div className="ad-cluster-item__body">
                              <span className="ad-cluster-item__cat">{rel.cat}</span>
                              <strong>{getLocalized(rel.t || rel.title)}</strong>
                            </div>
                            <span className="ad-cluster-item__go">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Part C: One-Click External Backlink & Citation Generator */}
                  <div className="ad-cite-box">
                    <div className="ad-cite-box__head">
                      <div>
                        <h4>
                          {isId
                            ? 'Generator Backlink & Kutipan Resmi (Untuk Media / Mitra / Riset)'
                            : 'Official Backlink & Citation Generator (For Media, Partners & Research)'}
                        </h4>
                        <p>
                          {isId
                            ? 'Gunakan tautan permanen atau kode HTML backlink di bawah ini saat merujuk kajian 8 Vice pada publikasi atau situs web Anda.'
                            : 'Use the permalink or HTML anchor snippet below when referencing this 8 Vice briefing on external publications or partner websites.'}
                        </p>
                      </div>
                    </div>

                    <div className="ad-cite-rows">
                      <div className="ad-cite-row">
                        <span className="ad-cite-row__lbl">Permalink URL</span>
                        <code className="ad-cite-row__code">{canonicalUrl}</code>
                        <button
                          type="button"
                          onClick={() => handleCopy('permalink', canonicalUrl)}
                          className="ad-cite-row__btn"
                        >
                          {copiedType === 'permalink' ? (isId ? 'Tersalin!' : 'Copied!') : isId ? 'Salin URL' : 'Copy URL'}
                        </button>
                      </div>

                      <div className="ad-cite-row">
                        <span className="ad-cite-row__lbl">HTML Backlink</span>
                        <code className="ad-cite-row__code">{htmlBacklinkSnippet}</code>
                        <button
                          type="button"
                          onClick={() => handleCopy('html', htmlBacklinkSnippet)}
                          className="ad-cite-row__btn"
                        >
                          {copiedType === 'html' ? (isId ? 'Tersalin!' : 'Copied!') : isId ? 'Salin HTML' : 'Copy HTML'}
                        </button>
                      </div>

                      <div className="ad-cite-row">
                        <span className="ad-cite-row__lbl">{isId ? 'Format Sitasi' : 'Executive Citation'}</span>
                        <code className="ad-cite-row__code">{citationSnippet}</code>
                        <button
                          type="button"
                          onClick={() => handleCopy('cite', citationSnippet)}
                          className="ad-cite-row__btn"
                        >
                          {copiedType === 'cite' ? (isId ? 'Tersalin!' : 'Copied!') : isId ? 'Salin Sitasi' : 'Copy Citation'}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ==========================================================
                    TAXONOMY & TOPIC TAGS
                    ========================================================== */}
                <div className="ad-tags-bar">
                  <div className="ad-tags-bar__left">
                    <span className="ad-tags-bar__lbl">{isId ? 'Kategori:' : 'Category:'}</span>
                    <Link href="/insights" className="ad-tags-bar__cat">
                      {insight.cat}
                    </Link>
                  </div>

                  {extras.tags.length > 0 && (
                    <div className="ad-tags-bar__list">
                      {extras.tags.map((tag, idx) => (
                        <span key={idx} className="ad-tag-chip">
                          {tag.startsWith('#') ? tag : `#${tag}`}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* ==========================================================
                    EXECUTIVE FAQ ACCORDION (#article-faq)
                    ========================================================== */}
                {hasFaqs && (
                  <section id="article-faq" className="ad-block-section">
                    <div className="ad-faq-header">
                      <div>
                        <div className="ad-kicker">
                          {isId ? 'TANYA JAWAB EKSEKUTIF (FAQ)' : 'EXECUTIVE CLARIFICATIONS (FAQ)'}
                        </div>
                        <h2 className="ad-block-title" style={{ margin: 0 }}>
                          {isId
                            ? 'Pertanyaan yang Sering Diajukan'
                            : 'Frequently Asked Questions'}
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpandAllFaqs(!expandAllFaqs)}
                        className="ad-faq-expand-btn"
                      >
                        {expandAllFaqs
                          ? isId
                            ? 'Tutup Semua'
                            : 'Collapse All'
                          : isId
                            ? 'Buka Semua Jawaban'
                            : 'Expand All Answers'}
                      </button>
                    </div>

                    <div className="ad-faq-list">
                      {extras.faqs.map((faq, idx) => {
                        const isOpen = expandAllFaqs || openFaqIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`ad-faq-item ${isOpen ? 'is-open' : ''}`}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                if (expandAllFaqs) setExpandAllFaqs(false);
                                setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
                              }}
                              className="ad-faq-item__q"
                            >
                              <span className="ad-faq-item__num">Q{idx + 1}</span>
                              <span className="ad-faq-item__text">{faq.q}</span>
                              <span className="ad-faq-item__chevron">{isOpen ? '−' : '+'}</span>
                            </button>

                            {isOpen && (
                              <div className="ad-faq-item__a">
                                <p>{faq.a}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* ==========================================================
                    REGULATORY REFERENCES & CITATIONS (#article-references)
                    ========================================================== */}
                {hasReferences && (
                  <section id="article-references" className="ad-block-section">
                    <div className="ad-block-head">
                      <div className="ad-kicker">
                        {isId ? 'SUMBER HUKUM & RUJUKAN PASAR' : 'AUTHORITATIVE SOURCES & POLICY CITATIONS'}
                      </div>
                      <h2 className="ad-block-title">
                        {isId
                          ? 'Rujukan Regulasi & Dokumen Kebijakan'
                          : 'Regulatory References & Official Citations'}
                      </h2>
                    </div>

                    <div className="ad-ref-list">
                      {extras.references.map((ref, idx) => (
                        <div key={idx} className="ad-ref-card">
                          <div className="ad-ref-card__num">
                            [{String(idx + 1).padStart(2, '0')}]
                          </div>
                          <div className="ad-ref-card__body">
                            <div className="ad-ref-card__title">{ref.title}</div>
                            <div className="ad-ref-card__meta">
                              <span>{ref.source}</span>
                              {ref.year && <span>· {ref.year}</span>}
                              {ref.type && <span className="ad-ref-card__badge">{ref.type}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* ============================================================
                  RIGHT / STICKY SIDEBAR: In-Page Search + Daftar Isi (TOC) + Partnership & Advisory CTA
                  ============================================================ */}
              <aside className="ad-sidebar">
                {/* 1. Live In-Page Insights Search & Explorer */}
                <div className="ad-side-card">
                  <div className="ad-side-card__kicker">
                    <span>🔍</span>
                    <span>{isId ? 'CARI WAWASAN & KAJIAN' : 'SEARCH INSIGHTS HUB'}</span>
                  </div>

                  <div className="ad-side-search">
                    <input
                      type="search"
                      placeholder={
                        isId
                          ? 'Cari topik, TKDN, UU PDP, QRIS...'
                          : 'Search TKDN, UU PDP, QRIS, Java...'
                      }
                      value={sidebarSearch}
                      onChange={(e) => setSidebarSearch(e.target.value)}
                    />
                    {sidebarSearch && (
                      <button
                        type="button"
                        onClick={() => setSidebarSearch('')}
                        className="ad-side-search__clear"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <div className="ad-side-search__results">
                    <div className="ad-side-search__sub">
                      {sidebarSearch
                        ? isId
                          ? `Hasil Pencarian (${searchResults.length})`
                          : `Matching Briefings (${searchResults.length})`
                        : isId
                          ? 'Kajian Populer Lainnya'
                          : 'Quick Briefing Switcher'}
                    </div>

                    {searchResults.length > 0 ? (
                      <ul className="ad-side-search__list">
                        {searchResults.map((item, idx) => (
                          <li key={item.slug || idx}>
                            <Link href={`/insights/${item.slug}`} className="ad-side-search__item">
                              <span className="ad-side-search__cat">{item.cat}</span>
                              <span className="ad-side-search__title">{item.displayTitle}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="ad-side-search__empty">
                        {isId ? 'Tidak ditemukan artikel yang cocok.' : 'No matching briefings found.'}
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Sticky Table of Contents (Daftar Isi) */}
                {tocItems.length > 0 && (
                  <div className="ad-side-card ad-side-card--toc">
                    <div className="ad-side-card__toc-head">
                      <span className="ad-side-card__kicker" style={{ margin: 0 }}>
                        {isId ? 'DAFTAR ISI ARTIKEL' : 'TABLE OF CONTENTS'}
                      </span>
                      <span className="ad-side-card__pct">{Math.round(readingProgress)}%</span>
                    </div>

                    <ul className="ad-toc-list">
                      {tocItems.map((item, idx) => {
                        const active = activeId === item.id;
                        return (
                          <li
                            key={item.id}
                            className={`ad-toc-item ${item.level === 'h3' ? 'ad-toc-item--sub' : ''} ${
                              active ? 'is-active' : ''
                            }`}
                          >
                            <a href={`#${item.id}`} onClick={(e) => handleTocClick(e, item.id)}>
                              <span className="ad-toc-item__num">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              <span className="ad-toc-item__txt">{item.text}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* 3. Partnership & Strategic Advisory CTA Card */}
                <div className="ad-side-card ad-side-card--cta">
                  <div className="ad-side-card__kicker" style={{ color: '#ff8a93' }}>
                    {isId ? 'DISKUSI & KEMITRAAN' : 'ADVISORY & PARTNERSHIP'}
                  </div>
                  <h4>
                    {isId
                      ? 'Terapkan Strategi Ini pada Bisnis Anda'
                      : 'Apply This Intelligence to Your Business'}
                  </h4>
                  <p>
                    {isId
                      ? 'Diskusikan rencana masuk pasar, kepatuhan regulasi, atau kemitraan ekosistem Anda bersama penasihat lintas batas 8 Vice.'
                      : 'Speak with our Indonesia–China advisory team to map out your market entry, regulatory compliance, or partnership opportunity.'}
                  </p>
                  <div className="ad-side-card__cta-btns">
                    <Link href="/contact" className="ad-btn ad-btn--primary">
                      {isId ? 'Jadwalkan Konsultasi' : 'Book a Consultation'}
                    </Link>
                    <Link href="/insights#partnership-register" className="ad-btn ad-btn--secondary">
                      {isId ? 'Daftar Partnership' : 'Register as a Partner'}
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ================================================================
            02 · RELATED INSIGHTS & PERSPECTIVES
            ================================================================ */}
        {relatedInsights && relatedInsights.length > 0 && (
          <section className="ad-related-section">
            <div className="container" style={{ maxWidth: '1240px' }}>
              <div className="ad-related-head">
                <div>
                  <div className="ad-kicker">
                    {isId ? 'WAWASAN TERKAIT' : 'CONTINUE EXPLORING'}
                  </div>
                  <h2 className="ad-block-title" style={{ margin: 0 }}>
                    {isId
                      ? 'Wawasan & Perspektif Koridor Lainnya'
                      : 'Related Insights & Perspectives'}
                  </h2>
                </div>
                <Link href="/insights" className="ad-btn ad-btn--secondary">
                  {isId ? 'Lihat Semua Wawasan →' : 'View All Insights →'}
                </Link>
              </div>

              <div className="ad-related-grid">
                {relatedInsights.slice(0, 3).map((rel, i) => {
                  const relTitle = getLocalized(rel.t || rel.title);
                  const relExcerpt = getLocalized(rel.excerpt || rel.description);
                  const relCover = rel.cover
                    ? rel.cover.startsWith('/') || rel.cover.startsWith('http')
                      ? rel.cover
                      : `/storage/${rel.cover}`
                    : '/images/market_intelligence_hero.webp';

                  return (
                    <article key={rel.slug || i} className="ad-rel-card">
                      <Link href={`/insights/${rel.slug}`} className="ad-rel-card__media">
                        <img src={relCover} alt={relTitle} loading="lazy" decoding="async" />
                        <span className="ad-rel-card__cat">{rel.cat}</span>
                      </Link>
                      <div className="ad-rel-card__body">
                        <div className="ad-rel-card__meta">
                          <span>{rel.date || '2026'}</span>
                          <span>·</span>
                          <span>{rel.rt || '7 min read'}</span>
                        </div>
                        <h3>
                          <Link href={`/insights/${rel.slug}`}>{relTitle}</Link>
                        </h3>
                        <p>{relExcerpt}</p>
                        <Link href={`/insights/${rel.slug}`} className="ad-rel-card__more">
                          <span>{isId ? 'Baca Selengkapnya' : 'Read Perspective'}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            IMAGE LIGHTBOX MODAL
            ================================================================ */}
        {lightboxImg && (
          <div className="ad-lightbox" onClick={() => setLightboxImg(null)}>
            <div className="ad-lightbox__inner" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightboxImg(null)}
                className="ad-lightbox__close"
              >
                ×
              </button>
              <img src={lightboxImg.src} alt={lightboxImg.tag} className="ad-lightbox__img" loading="lazy" decoding="async" />
              <div className="ad-lightbox__caption">
                <span className="ad-lightbox__tag">{lightboxImg.tag}</span>
                <p>{lightboxImg.caption}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================
            EXECUTIVE CHECKOUT & PAYMENT MODAL (#ad-checkout-modal)
            ================================================================ */}
        {isCheckoutModalOpen && researchPaper && (
          <div className="ad-checkout-overlay" onClick={() => !checkoutProcessing && setIsCheckoutModalOpen(false)}>
            <div className="ad-checkout-modal" onClick={(e) => e.stopPropagation()}>
              <div className="ad-checkout-modal__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="ad-checkout-badge">8 VICE SECURE CHECKOUT</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>· 256-Bit SSL</span>
                </div>
                <button
                  type="button"
                  className="ad-checkout-modal__close"
                  onClick={() => !checkoutProcessing && setIsCheckoutModalOpen(false)}
                  disabled={checkoutProcessing}
                >
                  ×
                </button>
              </div>

              {!checkoutSuccess ? (
                <div className="ad-checkout-modal__body">
                  <div className="ad-checkout-product-summary">
                    <div className="ad-checkout-product-title">
                      {isId ? researchPaper.title.id : researchPaper.title.en}
                    </div>
                    <div className="ad-checkout-product-meta">
                      <span>📄 58 Pages Unabridged (PDF)</span>
                      <span>·</span>
                      <span>📊 Raw Financial Models (.xlsx)</span>
                      <span>·</span>
                      <span>Instant Delivery</span>
                    </div>
                  </div>

                  {/* Step 1: Select License Tier */}
                  <div className="ad-checkout-step">
                    <label className="ad-checkout-label">{isId ? '1. Pilih Tipe Lisensi Dokumen:' : '1. Select License Package:'}</label>
                    <div className="ad-checkout-tier-options">
                      <div
                        className={`ad-checkout-tier-pill ${selectedLicense === 'individual' ? 'is-selected' : ''}`}
                        onClick={() => setSelectedLicense('individual')}
                      >
                        <div className="ad-checkout-tier-pill-left">
                          <strong>{isId ? 'Lisensi Eksekutif' : 'Executive License'}</strong>
                          <span>{isId ? 'Pengguna Tunggal' : 'Single User'}</span>
                        </div>
                        <div className="ad-checkout-tier-pill-right">
                          <span className="ad-checkout-price-val">Rp 1.490.000</span>
                          <span className="ad-checkout-price-usd">($99)</span>
                        </div>
                      </div>

                      <div
                        className={`ad-checkout-tier-pill ${selectedLicense === 'corporate' ? 'is-selected' : ''}`}
                        onClick={() => setSelectedLicense('corporate')}
                      >
                        <div className="ad-checkout-tier-pill-left">
                          <strong>{isId ? 'Lisensi Korporat & Konsultasi' : 'Corporate License'}</strong>
                          <span>{isId ? 'Hingga 25 Anggota + Sesi Call' : 'Up to 25 Seats + Call'}</span>
                        </div>
                        <div className="ad-checkout-tier-pill-right">
                          <span className="ad-checkout-price-val">Rp 7.490.000</span>
                          <span className="ad-checkout-price-usd">($499)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Select Payment Method */}
                  <div className="ad-checkout-step">
                    <label className="ad-checkout-label">{isId ? '2. Pilih Metode Pembayaran:' : '2. Select Payment Method:'}</label>
                    <div className="ad-checkout-methods-grid">
                      <button
                        type="button"
                        className={`ad-checkout-method-btn ${selectedPaymentMethod === 'qris' ? 'is-active' : ''}`}
                        onClick={() => setSelectedPaymentMethod('qris')}
                      >
                        <span className="method-icon">📱</span>
                        <span>QRIS Instan</span>
                      </button>
                      <button
                        type="button"
                        className={`ad-checkout-method-btn ${selectedPaymentMethod === 'va' ? 'is-active' : ''}`}
                        onClick={() => setSelectedPaymentMethod('va')}
                      >
                        <span className="method-icon">🏦</span>
                        <span>Virtual Account</span>
                      </button>
                      <button
                        type="button"
                        className={`ad-checkout-method-btn ${selectedPaymentMethod === 'card' ? 'is-active' : ''}`}
                        onClick={() => setSelectedPaymentMethod('card')}
                      >
                        <span className="method-icon">💳</span>
                        <span>Kartu Kredit</span>
                      </button>
                      <button
                        type="button"
                        className={`ad-checkout-method-btn ${selectedPaymentMethod === 'wechat' ? 'is-active' : ''}`}
                        onClick={() => setSelectedPaymentMethod('wechat')}
                      >
                        <span className="method-icon">🌏</span>
                        <span>Alipay / WeChat</span>
                      </button>
                    </div>

                    {/* Dynamic Method Preview Box */}
                    <div className="ad-checkout-method-preview">
                      {selectedPaymentMethod === 'qris' && (
                        <div className="ad-method-qris-box">
                          <div className="ad-qris-qr-code">
                            <div className="ad-qris-qr-inner">
                              {/* Vector QR Code SVG */}
                              <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" fill="#ffffff" rx="8" />
                                <rect x="10" y="10" width="28" height="28" fill="#08090C" />
                                <rect x="14" y="14" width="20" height="20" fill="#ffffff" />
                                <rect x="18" y="18" width="12" height="12" fill="#E63946" />
                                <rect x="62" y="10" width="28" height="28" fill="#08090C" />
                                <rect x="66" y="14" width="20" height="20" fill="#ffffff" />
                                <rect x="70" y="18" width="12" height="12" fill="#E63946" />
                                <rect x="10" y="62" width="28" height="28" fill="#08090C" />
                                <rect x="14" y="66" width="20" height="20" fill="#ffffff" />
                                <rect x="18" y="70" width="12" height="12" fill="#E63946" />
                                <rect x="44" y="12" width="8" height="8" fill="#08090C" />
                                <rect x="44" y="28" width="8" height="8" fill="#08090C" />
                                <rect x="12" y="44" width="8" height="8" fill="#08090C" />
                                <rect x="28" y="44" width="8" height="8" fill="#08090C" />
                                <rect x="44" y="44" width="12" height="12" fill="#E63946" />
                                <rect x="60" y="44" width="16" height="8" fill="#08090C" />
                                <rect x="80" y="44" width="8" height="8" fill="#08090C" />
                                <rect x="44" y="64" width="8" height="16" fill="#08090C" />
                                <rect x="60" y="64" width="16" height="8" fill="#08090C" />
                                <rect x="64" y="76" width="12" height="12" fill="#08090C" />
                                <rect x="80" y="64" width="8" height="24" fill="#E63946" />
                              </svg>
                            </div>
                            <span className="ad-qris-timer">⏱ {isId ? 'Berlaku 15 menit' : 'Valid 15 mins'}</span>
                          </div>
                          <div className="ad-qris-instructions">
                            <strong>{isId ? 'Pindai QRIS Standar Nasional' : 'Scan via Any Banking / E-Wallet App'}</strong>
                            <p>{isId ? 'Buka BCA Mobile, GoPay, OVO, ShopeePay, atau Livin Mandiri untuk memindai kode QR.' : 'Open your banking app or digital wallet to scan and complete payment instantly.'}</p>
                            <span className="ad-qris-merchant">Merchant: PT 8 VICE STRATEGIC CONSULTING</span>
                          </div>
                        </div>
                      )}

                      {selectedPaymentMethod === 'va' && (
                        <div className="ad-method-va-box">
                          <div className="ad-va-row">
                            <span className="ad-va-label">BCA / Mandiri Virtual Account:</span>
                            <span className="ad-va-num">8808 2610 3982 104</span>
                          </div>
                          <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                            {isId ? 'Nomor virtual account aktif secara otomatis dan diverifikasi 24/7.' : 'Virtual account is generated automatically and verified 24/7.'}
                          </p>
                        </div>
                      )}

                      {selectedPaymentMethod === 'card' && (
                        <div className="ad-method-card-box">
                          <input type="text" placeholder="1234  5678  9012  3456" className="ad-card-input" readOnly value="•••• •••• •••• 4242" />
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                            <input type="text" placeholder="MM/YY" className="ad-card-input" readOnly value="12/28" />
                            <input type="text" placeholder="CVC" className="ad-card-input" readOnly value="•••" />
                          </div>
                        </div>
                      )}

                      {selectedPaymentMethod === 'wechat' && (
                        <div className="ad-method-wechat-box">
                          <p style={{ margin: 0, fontSize: '13px', color: '#FFFFFF' }}>
                            🇨🇳 <strong>WeChat Pay & Alipay Bilateral Cross-Border Settlement:</strong>
                          </p>
                          <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                            {selectedLicense === 'individual' ? 'Equivalent: ¥720 CNY / $99 USD' : 'Equivalent: ¥3,600 CNY / $499 USD'} · Direct clearing supported under PBOC & Bank Indonesia local currency settlement framework.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Order Total Calculation */}
                  <div className="ad-checkout-summary-box">
                    <div className="ad-summary-line">
                      <span>{isId ? 'Subtotal Paket' : 'Package Subtotal'}</span>
                      <span>{selectedLicense === 'individual' ? 'Rp 1.490.000' : 'Rp 7.490.000'}</span>
                    </div>
                    <div className="ad-summary-line">
                      <span>{isId ? 'Pajak Pertambahan Nilai (PPN 11%)' : 'Value Added Tax (VAT 11%)'}</span>
                      <span>{isId ? 'Termasuk (Inclusive)' : 'Inclusive'}</span>
                    </div>
                    <div className="ad-summary-line ad-summary-line--total">
                      <span>{isId ? 'Total Pembayaran' : 'Total Amount'}</span>
                      <span className="total-highlight">
                        {selectedLicense === 'individual' ? 'Rp 1.490.000 ($99)' : 'Rp 7.490.000 ($499)'}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="ad-checkout-actions">
                    <button
                      type="button"
                      className="ad-checkout-confirm-btn"
                      disabled={checkoutProcessing}
                      onClick={() => {
                        if (redirectUrl) {
                          window.location.href = redirectUrl;
                          return;
                        }
                        setCheckoutProcessing(true);
                        setTimeout(() => {
                          setCheckoutProcessing(false);
                          setCheckoutSuccess(true);
                          setIsPaperUnlocked(true);
                        }, 1200);
                      }}
                    >
                      {checkoutProcessing ? (
                        <span>⏳ {isId ? 'Memproses Pembayaran...' : 'Processing Payment...'}</span>
                      ) : (
                        <span>✓ {isId ? 'Selesaikan Pembayaran & Dapatkan Akses' : 'Complete Payment & Unlock Full Paper'}</span>
                      )}
                    </button>

                    <Link
                      href={`/contact?service=research-paper&paper=${researchPaper.slug}&tier=${selectedLicense}`}
                      className="ad-checkout-contact-link"
                    >
                      {isId ? 'Atau bayar via Invoice Resmi / Hubungi Tim →' : 'Or pay via Corporate Invoice / Contact Desk →'}
                    </Link>
                  </div>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="ad-checkout-modal__body ad-checkout-success-body">
                  <div className="ad-checkout-success-icon">✓</div>
                  <h3 className="ad-checkout-success-title">
                    {isId ? 'Pembayaran Berhasil Dikonfirmasi!' : 'Payment Verified Successfully!'}
                  </h3>
                  <p className="ad-checkout-success-desc">
                    {isId
                      ? 'Lisensi riset Anda telah aktif. Seluruh bab dokumen riset 58 halaman dan model finansial Excel telah terbuka untuk Anda baca dan unduh.'
                      : 'Your research license is now active. All 58 pages and raw Excel datasets have been unlocked for immediate viewing and downloading.'}
                  </p>
                  <div className="ad-checkout-success-actions">
                    <button
                      type="button"
                      className="ad-checkout-confirm-btn"
                      onClick={() => {
                        setIsCheckoutModalOpen(false);
                        setCheckoutSuccess(false);
                        const el = document.getElementById('article-research-paper');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {isId ? 'Buka & Baca Dokumen Sekarang →' : 'Read Unlocked Document Now →'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </article>

      {/* ====================================================================
          SCOPED STYLES FOR ARTICLE DETAIL (/insights/{slug})
          ==================================================================== */}
      <style>{`
        .ad-page {
          background: #08090C;
          color: #ffffff;
          position: relative;
        }
        .ad-progress-track {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255,255,255,0.06);
          z-index: 9999;
        }
        .ad-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #E63946 0%, #ff8a93 100%);
          box-shadow: 0 0 12px #E63946;
          transition: width 0.1s linear;
        }

        /* ====================================================================
           00 · ARTICLE HERO
           ==================================================================== */
        .ad-hero {
          position: relative;
          padding: 132px 0 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .ad-hero__bg-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .ad-hero__bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(18px) brightness(0.28);
          transform: scale(1.1);
        }
        .ad-hero__bg-shade {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(230,57,70,0.22), transparent 55%),
            linear-gradient(180deg, rgba(8,9,12,0.55) 0%, #08090C 100%);
        }
        .ad-hero__grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .ad-hero__container {
          position: relative;
          z-index: 2;
          max-width: 1240px;
        }
        .ad-hero__top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 24px;
        }
        .ad-breadcrumb {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12.5px;
          color: rgba(255,255,255,0.65);
        }
        .ad-breadcrumb a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
        }
        .ad-breadcrumb a:hover {
          color: #E63946;
        }
        .ad-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .ad-back-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.85);
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ad-back-pill:hover {
          border-color: #E63946;
          color: #ffffff;
        }
        .ad-hero__meta-pills {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }
        .ad-cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(230,57,70,0.18);
          border: 1px solid rgba(230,57,70,0.45);
          color: #ff8a93;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .ad-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
          display: inline-block;
        }
        .ad-meta-chip {
          padding: 6px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 12px;
          color: rgba(255,255,255,0.75);
        }
        .ad-meta-chip--verified {
          color: #7ee787;
          border-color: rgba(126,231,135,0.28);
          background: rgba(126,231,135,0.08);
        }
        .ad-hero__title {
          font-size: clamp(28px, 4.2vw, 50px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.025em;
          margin: 0 0 18px;
          max-width: 1020px;
          color: #ffffff;
        }
        .ad-hero__lead {
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.68;
          color: rgba(255,255,255,0.78);
          max-width: 900px;
          margin: 0 0 28px;
        }
        .ad-hero__author-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .ad-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ad-author__avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E63946 0%, #9e1924 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(230,57,70,0.35);
        }
        .ad-author__name {
          font-size: 15.5px;
          font-weight: 700;
          color: #ffffff;
        }
        .ad-author__role {
          font-size: 13px;
          color: rgba(255,255,255,0.58);
        }
        .ad-hero__tools {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .ad-tool-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 15px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.88);
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ad-tool-btn:hover {
          border-color: #E63946;
          background: rgba(230,57,70,0.14);
          color: #ffffff;
        }

        /* ====================================================================
           01 · MAIN LAYOUT & PROSE
           ==================================================================== */
        .ad-main-section {
          padding: 64px 0 96px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ad-main-container {
          max-width: 1240px;
        }
        .ad-layout-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 52px;
          align-items: start;
        }

        /* Cover Figure */
        .ad-cover-figure {
          margin: 0 0 36px;
        }
        .ad-cover-figure__frame {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: zoom-in;
          box-shadow: 0 26px 60px rgba(0,0,0,0.5);
        }
        .ad-cover-figure__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .ad-cover-figure__frame:hover .ad-cover-figure__img {
          transform: scale(1.04);
        }
        .ad-cover-figure__zoom {
          position: absolute;
          bottom: 16px;
          right: 16px;
          padding: 6px 13px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 11.5px;
          font-weight: 600;
          color: #ffffff;
        }
        .ad-cover-figure__caption {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
          font-size: 13px;
          color: rgba(255,255,255,0.58);
        }
        .ad-cover-figure__caption-tag {
          padding: 3px 9px;
          border-radius: 6px;
          background: rgba(230,57,70,0.16);
          color: #ff8a93;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }

        /* Inline Collapsible TOC */
        .ad-inline-toc {
          margin-bottom: 36px;
          border-radius: 18px;
          background: rgba(16, 19, 28, 0.9);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }
        .ad-inline-toc__toggle {
          width: 100%;
          padding: 16px 22px;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        .ad-inline-toc__toggle-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ad-inline-toc__list {
          list-style: none;
          margin: 0;
          padding: 0 22px 18px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 8px 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 14px;
        }
        .ad-inline-toc__list li a {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          padding: 4px 0;
        }
        .ad-inline-toc__list li a:hover {
          color: #E63946;
        }
        .ad-inline-toc__num {
          font-size: 11px;
          font-weight: 800;
          color: #E63946;
        }

        /* Prose Styling */
        .ad-prose {
          color: rgba(255, 255, 255, 0.84);
          font-size: 16.5px;
          line-height: 1.85;
        }
        .ad-prose p.lede {
          font-size: 19px;
          font-weight: 500;
          line-height: 1.72;
          color: #ffffff;
          padding: 22px 26px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(230,57,70,0.12) 0%, rgba(16,19,28,0.9) 100%);
          border-left: 4px solid #E63946;
          margin-bottom: 32px;
        }
        .ad-prose h2 {
          color: #FFFFFF;
          font-size: clamp(22px, 2.5vw, 29px);
          font-weight: 800;
          margin: 44px 0 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          letter-spacing: -0.02em;
        }
        .ad-prose h3 {
          color: #ff8a93;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          margin: 32px 0 12px;
        }
        .ad-prose p {
          margin: 0 0 20px;
          color: rgba(255, 255, 255, 0.8);
        }
        .ad-prose ul, .ad-prose ol {
          margin: 0 0 24px 20px;
          color: rgba(255, 255, 255, 0.8);
        }
        .ad-prose li {
          margin-bottom: 10px;
        }
        .ad-prose strong {
          color: #FFFFFF;
        }
        .ad-prose blockquote {
          margin: 28px 0;
          padding: 22px 26px;
          border-left: 3px solid #E63946;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0 14px 14px 0;
          color: rgba(255, 255, 255, 0.92);
          font-style: italic;
        }

        /* Shared Block Sections inside Article */
        .ad-block-section {
          margin-top: 56px;
          padding-top: 44px;
          border-top: 1px solid rgba(255,255,255,0.09);
          scroll-margin-top: 104px;
        }

        /* ================================================================
           RESEARCH PAPER DOCUMENT & PAYWALL STYLES
           ================================================================ */
        .ad-paper-section {
          margin-top: 56px;
          padding-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ad-paper-card {
          background: linear-gradient(180deg, rgba(22, 26, 36, 0.94) 0%, rgba(13, 16, 24, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top: 3.5px solid #E63946;
          border-radius: 26px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(230, 57, 70, 0.14);
          overflow: hidden;
          padding: clamp(28px, 4vw, 44px);
        }
        .ad-paper-head {
          margin-bottom: 32px;
        }
        .ad-paper-badges-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .ad-paper-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.14);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #FF7B7B;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .ad-paper-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .ad-paper-status-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ad-paper-status-pill.is-locked {
          background: rgba(230, 57, 70, 0.18);
          border: 1px solid rgba(230, 57, 70, 0.5);
          color: #FF8B8B;
        }
        .ad-paper-status-pill.is-unlocked {
          background: rgba(46, 204, 113, 0.18);
          border: 1px solid rgba(46, 204, 113, 0.5);
          color: #2ECC71;
        }
        .ad-paper-title {
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: #FFFFFF;
          margin: 0 0 14px;
        }
        .ad-paper-subtitle {
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.76);
          margin: 0 0 24px;
        }
        .ad-paper-specs-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 768px) {
          .ad-paper-specs-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .ad-paper-spec-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ad-paper-spec-lbl {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
        }
        .ad-paper-spec-val {
          font-size: 13.5px;
          font-weight: 750;
          color: #FFFFFF;
        }
        .ad-paper-toc-wrap {
          margin-bottom: 32px;
          background: rgba(14, 17, 25, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 24px;
        }
        .ad-paper-toc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 16px;
        }
        .ad-paper-chapters-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ad-paper-chapter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .ad-paper-chapter-row.is-free {
          border-left: 3px solid #2ECC71;
        }
        .ad-paper-chapter-row.is-locked {
          border-left: 3px solid #E63946;
        }
        .ad-paper-chapter-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        .ad-paper-chapter-num {
          font-family: monospace, monospace;
          font-size: 11px;
          font-weight: 800;
          color: #FF7B7B;
          background: rgba(230, 57, 70, 0.12);
          padding: 3px 8px;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .ad-paper-chapter-title {
          font-size: 14px;
          font-weight: 650;
          color: rgba(255, 255, 255, 0.9);
        }
        .ad-paper-chapter-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .ad-paper-chapter-pages {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }
        .ad-paper-chapter-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 999px;
        }
        .ad-paper-chapter-pill.pill-free {
          background: rgba(46, 204, 113, 0.15);
          color: #2ECC71;
          border: 1px solid rgba(46, 204, 113, 0.35);
        }
        .ad-paper-chapter-pill.pill-locked {
          background: rgba(230, 57, 70, 0.16);
          color: #FF8B8B;
          border: 1px solid rgba(230, 57, 70, 0.4);
        }
        .ad-paper-viewer-box {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          background: #0B0D14;
        }
        .ad-paper-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #141822;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 12.5px;
        }
        .ad-paper-toolbar-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }
        .ad-paper-page-counter {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
        }
        .ad-paper-toolbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ad-paper-toolbar-zoom {
          color: rgba(255, 255, 255, 0.5);
          font-size: 11.5px;
        }
        .ad-paper-toolbar-btn {
          padding: 6px 14px;
          border-radius: 8px;
          background: #E63946;
          color: #FFFFFF;
          border: none;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .ad-paper-toolbar-btn:hover {
          background: #B81D2A;
        }
        .ad-paper-doc-canvas {
          padding: clamp(20px, 3vw, 32px);
          position: relative;
          background: #08090C;
        }
        .ad-paper-doc-page {
          background: #12151E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: clamp(24px, 3vw, 40px);
          color: #FFFFFF;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
        }
        .ad-paper-page-header {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 28px;
        }
        .ad-paper-hero-kicker {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #E63946;
          margin-bottom: 8px;
        }
        .ad-paper-page-title {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 12px;
          color: #FFFFFF;
        }
        .ad-paper-page-meta-line {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 28px;
        }
        .ad-paper-page-abstract-box {
          background: rgba(230, 57, 70, 0.08);
          border-left: 4px solid #E63946;
          border-radius: 0 12px 12px 0;
          padding: 20px 24px;
          margin-bottom: 28px;
        }
        .ad-paper-sample-charts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 28px;
        }
        @media (max-width: 640px) {
          .ad-paper-sample-charts {
            grid-template-columns: 1fr;
          }
        }
        .ad-paper-sample-chart {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
        }
        .ad-chart-title {
          font-size: 12px;
          font-weight: 700;
          color: #FF7B7B;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ad-chart-bar-wrap {
          margin-bottom: 10px;
        }
        .ad-chart-label {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4px;
        }
        .ad-chart-bar {
          background: #E63946;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          min-width: 32px;
          text-align: right;
        }
        .ad-chart-bar.is-sub {
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }
        .ad-paper-page-footer {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 24px;
        }
        .ad-paper-locked-overlay-wrap {
          position: relative;
          min-height: 480px;
          border-radius: 16px;
          overflow: hidden;
        }
        .ad-paper-blurred-pages {
          filter: blur(10px) brightness(0.35);
          user-select: none;
          pointer-events: none;
        }
        .ad-faux-page {
          background: #141824;
          border-radius: 16px;
          padding: 36px;
          margin-bottom: 24px;
        }
        .ad-faux-line {
          height: 12px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          margin-bottom: 14px;
        }
        .ad-faux-line--title {
          width: 55%;
          height: 20px;
          background: rgba(230, 57, 70, 0.4);
          margin-bottom: 22px;
        }
        .ad-faux-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 24px 0;
        }
        .ad-faux-box {
          height: 70px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }
        .ad-faux-table {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .ad-faux-row {
          height: 24px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 6px;
        }
        .ad-paper-paywall-card {
          position: absolute;
          inset: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 36px clamp(20px, 4vw, 44px);
          background: linear-gradient(135deg, rgba(16, 20, 28, 0.94) 0%, rgba(10, 12, 18, 0.98) 100%);
          border: 1px solid rgba(230, 57, 70, 0.45);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 57, 70, 0.22);
          backdrop-filter: blur(16px);
          z-index: 5;
        }
        .ad-paywall-lock-pulse {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.16);
          border: 1px solid rgba(230, 57, 70, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 0 25px rgba(230, 57, 70, 0.4);
        }
        .ad-paywall-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FF7B7B;
          margin-bottom: 10px;
        }
        .ad-paywall-title {
          font-size: clamp(20px, 2.3vw, 28px);
          font-weight: 800;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0 0 10px;
          max-width: 680px;
        }
        .ad-paywall-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          max-width: 640px;
          margin: 0 0 24px;
        }
        .ad-paywall-tiers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          max-width: 760px;
          margin-bottom: 24px;
          text-align: left;
        }
        @media (max-width: 700px) {
          .ad-paywall-tiers-grid {
            grid-template-columns: 1fr;
          }
        }
        .ad-paywall-tier-card {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
        }
        .ad-paywall-tier-card:hover {
          border-color: rgba(230, 57, 70, 0.45);
          background: rgba(230, 57, 70, 0.06);
        }
        .ad-paywall-tier-card.is-selected {
          border-color: #E63946;
          background: linear-gradient(135deg, rgba(230, 57, 70, 0.16) 0%, rgba(20, 24, 34, 0.9) 100%);
          box-shadow: 0 0 24px rgba(230, 57, 70, 0.2);
        }
        .ad-tier-ribbon {
          position: absolute;
          top: -10px;
          right: 16px;
          padding: 3px 10px;
          border-radius: 999px;
          background: #E63946;
          color: #FFFFFF;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ad-tier-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .ad-tier-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ad-paywall-tier-card.is-selected .ad-tier-radio {
          border-color: #E63946;
        }
        .ad-radio-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
        }
        .ad-radio-dot.is-active {
          background: #E63946;
        }
        .ad-tier-name {
          font-size: 14px;
          font-weight: 750;
          color: #FFFFFF;
        }
        .ad-tier-scope {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
        }
        .ad-tier-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 12px;
        }
        .ad-tier-currency {
          font-size: 14px;
          font-weight: 700;
          color: #FF7B7B;
        }
        .ad-tier-val {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
        }
        .ad-tier-usd {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }
        .ad-tier-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }
        .ad-paywall-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 18px;
        }
        .ad-paywall-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 750;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .ad-paywall-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #B81D2A 100%);
          color: #FFFFFF;
          box-shadow: 0 10px 28px rgba(230, 57, 70, 0.45);
        }
        .ad-paywall-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(230, 57, 70, 0.6);
        }
        .ad-paywall-btn--secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.85);
        }
        .ad-paywall-btn--secondary:hover {
          background: rgba(230, 57, 70, 0.14);
          border-color: rgba(230, 57, 70, 0.4);
          color: #FFFFFF;
        }
        .ad-paywall-trust {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          justify-content: center;
        }
        .ad-paper-unlocked-container {
          padding-top: 10px;
        }
        .ad-unlocked-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          padding: 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(46, 204, 113, 0.14) 0%, rgba(20, 26, 34, 0.95) 100%);
          border: 1px solid rgba(46, 204, 113, 0.4);
          margin-bottom: 28px;
        }
        .ad-unlocked-banner__left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .ad-unlocked-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2ECC71;
          color: #08090C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 20px;
          flex-shrink: 0;
        }
        .ad-unlocked-title {
          font-size: 17px;
          font-weight: 750;
          color: #FFFFFF;
          margin: 0 0 4px;
        }
        .ad-unlocked-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
        .ad-unlocked-banner__right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .ad-unlocked-dl-btn {
          padding: 10px 18px;
          border-radius: 10px;
          background: #2ECC71;
          color: #08090C;
          font-size: 13px;
          font-weight: 750;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .ad-unlocked-dl-btn:hover {
          transform: translateY(-2px);
        }
        .ad-unlocked-dl-btn--xlsx {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .ad-demo-relock-btn {
          padding: 10px 14px;
          border-radius: 10px;
          background: transparent;
          border: 1px solid rgba(230, 57, 70, 0.4);
          color: #FF8B8B;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .ad-unlocked-chapters-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .ad-unlocked-chapter-card {
          background: #12151E;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
        }
        .ad-ch-badge {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #2ECC71;
          margin-bottom: 8px;
        }
        .ad-unlocked-chapter-card h3 {
          font-size: 20px;
          font-weight: 750;
          margin: 0 0 12px;
          color: #FFFFFF;
        }
        .ad-unlocked-chapter-card p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.82);
          margin: 0 0 16px;
        }
        .ad-ch-data-table {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          margin-top: 18px;
        }
        .ad-table-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }
        .ad-table-row--head {
          background: rgba(255, 255, 255, 0.05);
          font-weight: 700;
          color: #FF7B7B;
          font-size: 12px;
          text-transform: uppercase;
        }

        /* ================================================================
           EXECUTIVE CHECKOUT MODAL STYLES
           ================================================================ */
        .ad-checkout-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(14px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .ad-checkout-modal {
          background: linear-gradient(180deg, #151924 0%, #0D1017 100%);
          border: 1px solid rgba(230, 57, 70, 0.45);
          border-radius: 24px;
          width: 100%;
          max-width: 620px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 50px rgba(230, 57, 70, 0.2);
        }
        .ad-checkout-modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ad-checkout-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
          background: rgba(230, 57, 70, 0.12);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .ad-checkout-modal__close {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 24px;
          cursor: pointer;
        }
        .ad-checkout-modal__close:hover {
          color: #FFFFFF;
        }
        .ad-checkout-modal__body {
          padding: 26px;
        }
        .ad-checkout-product-summary {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px 20px;
          margin-bottom: 22px;
        }
        .ad-checkout-product-title {
          font-size: 16px;
          font-weight: 750;
          color: #FFFFFF;
          margin-bottom: 6px;
        }
        .ad-checkout-product-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
        }
        .ad-checkout-step {
          margin-bottom: 22px;
        }
        .ad-checkout-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 10px;
        }
        .ad-checkout-tier-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 540px) {
          .ad-checkout-tier-options {
            grid-template-columns: 1fr;
          }
        }
        .ad-checkout-tier-pill {
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 8px;
          transition: all 0.2s ease;
        }
        .ad-checkout-tier-pill.is-selected {
          border-color: #E63946;
          background: rgba(230, 57, 70, 0.12);
        }
        .ad-checkout-tier-pill-left strong {
          display: block;
          font-size: 13.5px;
          color: #FFFFFF;
        }
        .ad-checkout-tier-pill-left span {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.55);
        }
        .ad-checkout-price-val {
          font-size: 16px;
          font-weight: 800;
          color: #FFFFFF;
        }
        .ad-checkout-price-usd {
          font-size: 12px;
          color: #FF7B7B;
          margin-left: 4px;
        }
        .ad-checkout-methods-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }
        @media (max-width: 540px) {
          .ad-checkout-methods-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .ad-checkout-method-btn {
          padding: 10px 8px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.85);
          font-size: 11.5px;
          font-weight: 650;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .ad-checkout-method-btn.is-active {
          border-color: #E63946;
          background: rgba(230, 57, 70, 0.15);
          color: #FFFFFF;
        }
        .ad-checkout-method-preview {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px;
        }
        .ad-method-qris-box {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .ad-qris-qr-code {
          background: #ffffff;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .ad-qris-timer {
          font-size: 10px;
          font-weight: 700;
          color: #08090C;
          margin-top: 4px;
        }
        .ad-qris-instructions strong {
          display: block;
          font-size: 13.5px;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        .ad-qris-instructions p {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 6px;
        }
        .ad-qris-merchant {
          font-size: 10px;
          font-weight: 700;
          color: #FF7B7B;
          letter-spacing: 0.06em;
        }
        .ad-va-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          border-radius: 8px;
        }
        .ad-va-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        .ad-va-num {
          font-family: monospace, monospace;
          font-size: 16px;
          font-weight: 800;
          color: #FF7B7B;
          letter-spacing: 0.08em;
        }
        .ad-card-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 10px 14px;
          color: #FFFFFF;
          font-size: 13px;
        }
        .ad-checkout-summary-box {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ad-summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
        }
        .ad-summary-line--total {
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 15px;
          font-weight: 800;
          color: #FFFFFF;
        }
        .total-highlight {
          color: #FF7B7B;
          font-size: 17px;
        }
        .ad-checkout-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ad-checkout-confirm-btn {
          width: 100%;
          padding: 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #E63946 0%, #B81D2A 100%);
          color: #FFFFFF;
          border: none;
          font-size: 14.5px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(230, 57, 70, 0.45);
          transition: transform 0.2s ease;
        }
        .ad-checkout-confirm-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.6);
        }
        .ad-checkout-contact-link {
          text-align: center;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
        }
        .ad-checkout-contact-link:hover {
          color: #FF7B7B;
        }
        .ad-checkout-success-body {
          text-align: center;
          padding: 40px 24px;
        }
        .ad-checkout-success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #2ECC71;
          color: #08090C;
          font-size: 28px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }
        .ad-checkout-success-title {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 10px;
        }
        .ad-checkout-success-desc {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.75);
          max-width: 480px;
          margin: 0 auto 24px;
        }
        .ad-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 8px;
        }
        .ad-block-title {
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 10px;
        }
        .ad-block-desc {
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.68);
          margin: 0 0 24px;
        }

        /* Visual Gallery */
        .ad-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 22px;
        }
        .ad-gallery-card {
          margin: 0;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(16,19,28,0.9);
          border: 1px solid rgba(255,255,255,0.09);
          cursor: pointer;
          transition: all 0.28s ease;
        }
        .ad-gallery-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230,57,70,0.45);
        }
        .ad-gallery-card__img-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .ad-gallery-card__img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ad-gallery-card:hover .ad-gallery-card__img-wrap img {
          transform: scale(1.06);
        }
        .ad-gallery-card__badge {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ff8a93;
        }
        .ad-gallery-card__zoom-ico {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(8,9,12,0.8);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .ad-gallery-card__caption {
          padding: 14px 16px;
          font-size: 12.8px;
          line-height: 1.55;
          color: rgba(255,255,255,0.72);
        }

        /* ====================================================================
           BACKLINK MODEL & KNOWLEDGE GRAPH
           ==================================================================== */
        .ad-backlink-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .ad-backlink-card {
          padding: 20px 22px;
          border-radius: 18px;
          background: linear-gradient(155deg, rgba(18,21,31,0.92) 0%, rgba(11,13,20,0.96) 100%);
          border: 1px solid rgba(255,255,255,0.09);
          text-decoration: none;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.28s ease;
        }
        .ad-backlink-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230,57,70,0.5);
          box-shadow: 0 18px 40px rgba(0,0,0,0.45);
        }
        .ad-backlink-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .ad-backlink-card__type {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #E63946;
        }
        .ad-backlink-card__arrow {
          color: rgba(255,255,255,0.5);
          font-size: 15px;
        }
        .ad-backlink-card__title {
          font-size: 16.5px;
          font-weight: 700;
          margin: 0 0 8px;
          color: #ffffff;
        }
        .ad-backlink-card__desc {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255,255,255,0.66);
          margin: 0 0 14px;
        }
        .ad-backlink-card__anchor {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.5);
          padding-top: 10px;
          border-top: 1px dashed rgba(255,255,255,0.1);
        }
        .ad-backlink-card__anchor code {
          color: #ff8a93;
          background: rgba(230,57,70,0.12);
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 11px;
        }

        /* Topic Cluster Backlinks */
        .ad-cluster-box {
          padding: 22px 24px;
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 24px;
        }
        .ad-cluster-box__label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ff8a93;
          margin-bottom: 14px;
        }
        .ad-cluster-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ad-cluster-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(12,15,22,0.85);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        .ad-cluster-item:hover {
          border-color: #E63946;
          transform: translateX(4px);
        }
        .ad-cluster-item__num {
          font-size: 12px;
          font-weight: 800;
          color: #E63946;
        }
        .ad-cluster-item__body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ad-cluster-item__cat {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
        }
        .ad-cluster-item__body strong {
          font-size: 14px;
          color: #ffffff;
        }
        .ad-cluster-item__go {
          color: #E63946;
          font-weight: 700;
        }

        /* Citation & HTML Backlink Copy Box */
        .ad-cite-box {
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(230,57,70,0.1) 0%, rgba(12,15,22,0.95) 100%);
          border: 1px solid rgba(230,57,70,0.32);
        }
        .ad-cite-box__head h4 {
          font-size: 16.5px;
          font-weight: 800;
          margin: 0 0 6px;
          color: #ffffff;
        }
        .ad-cite-box__head p {
          font-size: 13px;
          color: rgba(255,255,255,0.68);
          margin: 0 0 18px;
        }
        .ad-cite-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ad-cite-row {
          display: grid;
          grid-template-columns: 130px minmax(0, 1fr) auto;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(8,9,12,0.78);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .ad-cite-row__lbl {
          font-size: 11.5px;
          font-weight: 700;
          color: #ff8a93;
        }
        .ad-cite-row__code {
          font-size: 12px;
          color: rgba(255,255,255,0.82);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ad-cite-row__btn {
          padding: 6px 13px;
          border-radius: 999px;
          background: rgba(230,57,70,0.2);
          border: 1px solid rgba(230,57,70,0.45);
          color: #ffffff;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
        }
        .ad-cite-row__btn:hover {
          background: #E63946;
        }

        /* Tags Bar */
        .ad-tags-bar {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ad-tags-bar__left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ad-tags-bar__lbl {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
        }
        .ad-tags-bar__cat {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(230,57,70,0.16);
          border: 1px solid rgba(230,57,70,0.38);
          color: #ff8a93;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
        }
        .ad-tags-bar__list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ad-tag-chip {
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.72);
          font-size: 12px;
        }

        /* FAQ Accordion */
        .ad-faq-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 22px;
        }
        .ad-faq-expand-btn {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.85);
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
        }
        .ad-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ad-faq-item {
          border-radius: 16px;
          background: rgba(16,19,28,0.88);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .ad-faq-item.is-open {
          border-color: rgba(230,57,70,0.45);
        }
        .ad-faq-item__q {
          width: 100%;
          padding: 18px 22px;
          background: transparent;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          cursor: pointer;
        }
        .ad-faq-item__num {
          font-size: 11.5px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.3);
          padding: 4px 8px;
          border-radius: 7px;
          flex-shrink: 0;
        }
        .ad-faq-item__text {
          flex: 1;
          font-size: 15.5px;
          font-weight: 700;
          line-height: 1.4;
        }
        .ad-faq-item__chevron {
          font-size: 20px;
          color: #E63946;
          font-weight: 700;
        }
        .ad-faq-item__a {
          padding: 0 22px 20px 58px;
        }
        .ad-faq-item__a p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.72;
          color: rgba(255,255,255,0.75);
        }

        /* References */
        .ad-ref-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ad-ref-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(16,19,28,0.85);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .ad-ref-card__num {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
        }
        .ad-ref-card__title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }
        .ad-ref-card__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.58);
        }
        .ad-ref-card__badge {
          padding: 2px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          font-size: 11px;
          color: rgba(255,255,255,0.8);
        }

        /* ====================================================================
           SIDEBAR (Search + TOC + CTA)
           ==================================================================== */
        .ad-sidebar {
          position: sticky;
          top: 96px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .ad-side-card {
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(165deg, rgba(18,21,30,0.92) 0%, rgba(10,12,18,0.96) 100%);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 20px 44px rgba(0,0,0,0.4);
        }
        .ad-side-card__kicker {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 14px;
        }
        .ad-side-search {
          position: relative;
          margin-bottom: 14px;
        }
        .ad-side-search input {
          width: 100%;
          padding: 10px 32px 10px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.14);
          color: #ffffff;
          font-size: 13px;
          outline: none;
        }
        .ad-side-search input:focus {
          border-color: #E63946;
        }
        .ad-side-search__clear {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          font-size: 16px;
        }
        .ad-side-search__sub {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.48);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .ad-side-search__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ad-side-search__item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 9px 11px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ad-side-search__item:hover {
          border-color: rgba(230,57,70,0.45);
          background: rgba(230,57,70,0.08);
        }
        .ad-side-search__cat {
          font-size: 9.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #ff8a93;
        }
        .ad-side-search__title {
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.38;
          color: rgba(255,255,255,0.9);
        }
        .ad-side-search__empty {
          font-size: 12.5px;
          color: rgba(255,255,255,0.5);
          padding: 8px 0;
        }

        /* Sidebar TOC */
        .ad-side-card__toc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .ad-side-card__pct {
          font-size: 11.5px;
          font-weight: 800;
          color: #ff8a93;
          background: rgba(230,57,70,0.16);
          padding: 3px 9px;
          border-radius: 999px;
        }
        .ad-toc-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 340px;
          overflow-y: auto;
        }
        .ad-toc-item a {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 7px 10px;
          border-radius: 10px;
          border-left: 2px solid transparent;
          font-size: 13px;
          line-height: 1.42;
          color: rgba(255,255,255,0.62);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ad-toc-item--sub a {
          padding-left: 22px;
          font-size: 12.2px;
        }
        .ad-toc-item.is-active a,
        .ad-toc-item a:hover {
          background: rgba(230,57,70,0.1);
          border-left-color: #E63946;
          color: #ffffff;
          font-weight: 600;
        }
        .ad-toc-item__num {
          font-size: 11px;
          font-weight: 800;
          color: #E63946;
          flex-shrink: 0;
        }

        /* Sidebar CTA Card */
        .ad-side-card--cta {
          background: linear-gradient(145deg, rgba(230,57,70,0.18) 0%, rgba(14,17,25,0.96) 100%);
          border-color: rgba(230,57,70,0.38);
        }
        .ad-side-card--cta h4 {
          font-size: 19px;
          font-weight: 800;
          margin: 0 0 10px;
          line-height: 1.3;
          color: #ffffff;
        }
        .ad-side-card--cta p {
          font-size: 13.5px;
          line-height: 1.62;
          color: rgba(255,255,255,0.76);
          margin: 0 0 18px;
        }
        .ad-side-card__cta-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ad-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ad-btn--primary {
          background: #E63946;
          color: #ffffff;
        }
        .ad-btn--primary:hover {
          background: #ff4757;
          transform: translateY(-2px);
        }
        .ad-btn--secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .ad-btn--secondary:hover {
          border-color: #E63946;
        }

        /* ====================================================================
           02 · RELATED ARTICLES
           ==================================================================== */
        .ad-related-section {
          padding: 80px 0 104px;
          background: #090B10;
        }
        .ad-related-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 36px;
        }
        .ad-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ad-rel-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(15,18,26,0.92);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .ad-rel-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230,57,70,0.42);
        }
        .ad-rel-card__media {
          position: relative;
          aspect-ratio: 16 / 10;
          display: block;
          overflow: hidden;
        }
        .ad-rel-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ad-rel-card:hover .ad-rel-card__media img {
          transform: scale(1.05);
        }
        .ad-rel-card__cat {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 11px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(255,255,255,0.14);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .ad-rel-card__body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ad-rel-card__meta {
          display: flex;
          gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 10px;
        }
        .ad-rel-card__body h3 {
          font-size: 17.5px;
          font-weight: 700;
          line-height: 1.38;
          margin: 0 0 10px;
        }
        .ad-rel-card__body h3 a {
          color: #ffffff;
          text-decoration: none;
        }
        .ad-rel-card__body p {
          font-size: 13.5px;
          line-height: 1.62;
          color: rgba(255,255,255,0.65);
          margin: 0 0 18px;
          flex: 1;
        }
        .ad-rel-card__more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #E63946;
          text-decoration: none;
        }

        /* Lightbox */
        .ad-lightbox {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(4,6,10,0.88);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .ad-lightbox__inner {
          position: relative;
          max-width: 980px;
          width: 100%;
          border-radius: 22px;
          overflow: hidden;
          background: #0D1017;
          border: 1px solid rgba(255,255,255,0.16);
        }
        .ad-lightbox__close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(8,9,12,0.85);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          font-size: 22px;
          cursor: pointer;
        }
        .ad-lightbox__img {
          width: 100%;
          max-height: 72vh;
          object-fit: cover;
          display: block;
        }
        .ad-lightbox__caption {
          padding: 18px 24px;
        }
        .ad-lightbox__tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #E63946;
        }
        .ad-lightbox__caption p {
          margin: 6px 0 0;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .ad-layout-grid {
            grid-template-columns: 1fr;
          }
          .ad-sidebar {
            position: static;
          }
          .ad-gallery-grid,
          .ad-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .ad-hero {
            padding: 112px 0 48px;
          }
          .ad-gallery-grid,
          .ad-backlink-grid,
          .ad-related-grid {
            grid-template-columns: 1fr;
          }
          .ad-cite-row {
            grid-template-columns: 1fr;
          }
          .ad-faq-item__a {
            padding-left: 22px;
          }
        }
      `}</style>
    </MainLayout>
  );
}
