import React, { useState, useMemo, useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getAllResearchPapers } from '@/data/researchPapers';

/* ============================================================================
   Reusable Animated Modern City & Architectural Grid Background
   ============================================================================ */
function ModernCityBg({ variant = 'default' }) {
  return (
    <div className={`ins-city-bg ins-city-bg--${variant}`} aria-hidden="true">
      <div className="ins-city-grid" />
      <div className="ins-red-glow ins-red-glow--1" />
      <div className="ins-red-glow ins-red-glow--2" />

      <svg
        className="ins-city-svg"
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id={`insSkylineFade-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#E63946" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#08090C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`insLineGrad-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
            <stop offset="30%" stopColor="#E63946" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#ff6b78" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill={`url(#insSkylineFade-${variant})`} opacity="0.55">
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
          stroke={`url(#insLineGrad-${variant})`}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="ins-arc-anim"
        />
        <path
          d="M 315 95 Q 620 35 935 105 T 1335 165"
          stroke={`url(#insLineGrad-${variant})`}
          strokeWidth="1"
          strokeDasharray="4 8"
          className="ins-arc-anim ins-arc-anim--slow"
        />

        <line x1="0" y1="260" x2="1440" y2="260" stroke={`url(#insLineGrad-${variant})`} strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="310" x2="1440" y2="310" stroke={`url(#insLineGrad-${variant})`} strokeWidth="1" opacity="0.65" />

        <circle cx="315" cy="45" r="3.5" fill="#E63946" className="ins-beacon-pulse" />
        <circle cx="722" cy="25" r="4" fill="#E63946" className="ins-beacon-pulse ins-beacon-pulse--delay" />
        <circle cx="1140" cy="40" r="3.5" fill="#E63946" className="ins-beacon-pulse" />
      </svg>
    </div>
  );
}

/* ============================================================================
   Pillar Vector Icons (01 to 06)
   ============================================================================ */
function PillarIcon({ num }) {
  switch (num) {
    case '01':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 5-6" />
          <circle cx="20" cy="8" r="2" fill="#E63946" />
        </svg>
      );
    case '02':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <polygon points="14.5,9.5 9.5,11.5 11.5,14.5 14.5,9.5" fill="rgba(230,57,70,0.25)" />
          <path d="M16 8l-6 2.5L7.5 16l6-2.5L16 8z" />
        </svg>
      );
    case '03':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <rect x="3" y="10" width="4" height="10" rx="1" />
          <rect x="10" y="6" width="4" height="14" rx="1" />
          <rect x="17" y="3" width="4" height="17" rx="1" />
        </svg>
      );
    case '04':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <circle cx="7" cy="12" r="3" />
          <circle cx="17" cy="12" r="3" />
          <path d="M10 12h4" />
          <path d="M7 9C7 5 17 5 17 9" strokeDasharray="2 2" />
          <path d="M7 15c0 4 10 4 10 0" strokeDasharray="2 2" />
        </svg>
      );
    case '05':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="9" x2="17" y2="9" />
          <line x1="7" y1="13" x2="14" y2="13" />
          <circle cx="17" cy="15" r="1.5" fill="#E63946" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      );
  }
}

export default function Article({ insights = [] }) {
  const { lang } = useTranslation();
  const isId = lang === 'id';

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  /* Partnership Registration Form State */
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    name: '',
    role: '',
    email: '',
    phone: '',
    track: 'Commercial & Distribution Partnership',
    corridor: 'Bilateral (Indonesia ⇄ China)',
    objectives: ''
  });
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  /* China In-Depth Research Papers & Intelligence Reports */
  const allResearchPapers = useMemo(() => getAllResearchPapers(), []);
  const flagshipPaper = allResearchPapers[0];
  const secondaryPapers = allResearchPapers.slice(1);

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
  }, [lang, activeCategory, searchQuery]);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (isPartnerModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPartnerModalOpen]);

  const categories = useMemo(() => {
    const set = new Set();
    insights.forEach((i) => {
      if (i.cat) set.add(i.cat);
    });
    return ['All', ...Array.from(set)];
  }, [insights]);

  const getLocalized = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return (isId ? val.id : val.en) || val.en || val.id || '';
  };

  const filteredArticles = useMemo(() => {
    return insights.filter((a) => {
      const matchCategory = activeCategory === 'All' || a.cat === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const title = getLocalized(a.t || a.title);
      const excerpt = getLocalized(a.excerpt);
      const matchSearch =
        !q ||
        title.toLowerCase().includes(q) ||
        excerpt.toLowerCase().includes(q) ||
        (a.cat || '').toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [insights, activeCategory, searchQuery, isId]);

  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  const getCoverUrl = (cover) => {
    if (!cover) return '/images/challenges_insights.webp';
    return cover.startsWith('/') || cover.startsWith('http') ? cover : `/storage/${cover}`;
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    setPartnerSubmitting(true);
    try {
      const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
      await fetch('/contact-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrf,
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: `${partnerForm.name} (${partnerForm.role || 'Partner'})`,
          company: partnerForm.organization,
          email: partnerForm.email,
          phone: partnerForm.phone,
          service: `Partnership: ${partnerForm.track} [${partnerForm.corridor}]`,
          message: partnerForm.objectives || 'Partnership registration inquiry via Insights & Partnerships hub.'
        })
      });
      setPartnerSuccess(true);
    } catch (_) {
      setPartnerSuccess(true);
    } finally {
      setPartnerSubmitting(false);
    }
  };

  const copy = isId
    ? {
        breadcrumbHome: 'Beranda',
        breadcrumb: 'Wawasan & Kemitraan',
        eyebrow: 'INTELIJEN PASAR & EKOSISTEM KOLABORATIF',
        heroTitle: 'Wawasan untuk Dunia Bisnis yang Terhubung.',
        heroSubtitle: 'Pahami Pasar. Lihat Peluangnya.',
        heroLead:
          'Ekspansi lintas batas menuntut keputusan yang terinformasi, pemahaman atas dinamika pasar yang terus berubah, serta pandangan jernih terhadap peluang dan tantangan di depan.',
        ctaRegisterPartner: 'Daftar Partnership',
        ctaExploreInsights: 'Jelajahi Wawasan',
        dualHubLabel1: 'KEBUTUHAN 01 · INTELIJEN & RISET',
        dualHubTitle1: 'Publikasi, Regulasi & Panduan Koridor',
        dualHubDesc1: 'Akses kajian mendalam seputar masuk pasar, kebijakan TKDN, UU PDP, dan dinamika industri Indonesia–Tiongkok.',
        dualHubLabel2: 'KEBUTUHAN 02 · EKOSISTEM KOLABORATIF',
        dualHubTitle2: 'Program Kemitraan Strategis 8 Vice',
        dualHubDesc2: 'Bergabung sebagai mitra komersial, asosiasi industri, penyedia teknologi, atau institusi pendukung ekspansi.',
        dualHubBtn2: 'Daftar Sebagai Mitra →',
        introParagraphs: [
          'Melalui wawasan dan perspektif kami, 8 Vice mengeksplorasi perkembangan bisnis, tren industri, pertimbangan masuk pasar, serta area kolaborasi baru antara Indonesia dan Tiongkok.',
          'Sasaran kami adalah membantu pelaku usaha dan pengambil keputusan membangun perspektif yang lebih utuh mengenai peluang lintas negara sehingga dapat mengambil keputusan strategis yang lebih matang.',
          'Jelajahi perspektif terbaru kami mengenai pengembangan pasar, kemitraan bisnis, ekosistem digital, pariwisata, industri kreatif, dan kerja sama ekonomi Indonesia–Tiongkok.'
        ],
        pillarsEyebrow: '01 · 6 KATEGORI WAWASAN & PERSPEKTIF',
        pillarsTitle: 'Fokus Kajian & Dokumentasi Strategis Kami.',
        pillars: [
          {
            num: '01',
            title: 'Market Intelligence',
            idTitle: 'Intelijen Pasar (Market Intelligence)',
            desc: 'Perspektif mengenai dinamika pasar, peluang komersial, dan pertimbangan penting bagi bisnis yang menjajaki Indonesia dan Tiongkok.'
          },
          {
            num: '02',
            title: 'Cross-Border Business Guides',
            idTitle: 'Panduan Bisnis Lintas Batas',
            desc: 'Wawasan praktis seputar persiapan pasar, pemilihan mitra, lokalisasi merek, dan pengembangan bisnis lintas negara.'
          },
          {
            num: '03',
            title: 'Industry Perspectives',
            idTitle: 'Perspektif Industri',
            desc: 'Ulasan mendalam mengenai sektor pariwisata, teknologi, infrastruktur, ekonomi kreatif, pasar konsumen, dan sektor relevan lainnya.'
          },
          {
            num: '04',
            title: 'Indonesia–China Relations',
            idTitle: 'Hubungan Ekonomi Indonesia–Tiongkok',
            desc: 'Perspektif berfokus bisnis mengenai kerja sama bilateral, keterlibatan institusional, dan area kolaborasi yang sedang berkembang.'
          },
          {
            num: '05',
            title: 'News & Activities',
            idTitle: 'Berita & Aktivitas Ekosistem',
            desc: 'Pembaruan mengenai forum bisnis terpilih, delegasi korporat, pertemuan strategis, acara industri, dan inisiatif kemitraan 8 Vice.'
          },
          {
            num: '06',
            title: 'Case Studies',
            idTitle: 'Studi Kasus Terpilih',
            desc: 'Contoh terpilih dari proyek, pendekatan strategis, dan hasil kolaborasi yang menunjukkan kapabilitas kami (tunduk pada kerahasiaan klien).'
          }
        ],
        chinaResearchEyebrow: '02 · KERTAS RISET MENDALAM TIONGKOK & PAPERS',
        chinaResearchTitle: 'Kertas Riset Industri & Panduan Strategis Lintas Batas Tiongkok–Indonesia',
        chinaResearchSubtitle:
          'Kajian empiris mendalam 8 Vice berbasis audit operasional 120+ korporasi manufaktur, matriks formula 40% TKDN, dan pemodelan biaya kawasan industri bilateral.',
        chinaResearchBadge: 'LAPORAN RISET EKSKLUSIF · 2026',
        chinaResearchLockedPill: '🔒 DOKUMEN TERKUNCI · AKSES BERBAYAR',
        chinaResearchPriceLabel: 'Harga Lisensi Eksekutif Lengkap:',
        chinaResearchPriceNote:
          'Termasuk laporan PDF lengkap 58 halaman, slide presentasi eksekutif (24 slide), dan dataset mentah model finansial Excel (.xlsx).',
        chinaResearchCtaPrimary: 'Buka Artikel & Akses Research Paper',
        chinaResearchCtaLocked: 'Buka Akses Paper (Rp 1.490.000 / $99)',
        chinaResearchOtherTitle: 'Kertas Riset & Makro Kebijakan Lainnya Mengenai Tiongkok',
        streamEyebrow: '03 · PUBLIKASI & ARTIKEL TERBARU',
        streamTitle: 'Eksplorasi Wawasan & Analisis Koridor.',
        filterAll: 'Semua Kategori',
        searchPh: 'Cari artikel, regulasi, atau topik strategis...',
        readBtn: 'Baca Selengkapnya',
        emptyText: 'Tidak ada artikel yang sesuai dengan filter pencarian Anda.',
        resetBtn: 'Reset Filter',
        partnerEyebrow: '04 · KEMITRAAN EKOSISTEM & PENDAFTARAN MITRA',
        partnerTitle: 'Kolaborasi Menciptakan Kemungkinan yang Lebih Besar.',
        partnerParagraphs: [
          'Kami meyakini bahwa pertumbuhan bisnis yang bermakna jarang dicapai sendirian. Pertumbuhan tersebut dibangun melalui kolaborasi di antara perusahaan, institusi, organisasi industri, penyedia teknologi, dan pemangku kepentingan relevan lainnya.',
          '8 Vice berfokus mengembangkan ekosistem kolaboratif yang mendukung pengembangan bisnis lintas negara antara Indonesia dan Tiongkok.',
          'Bergantung pada sasaran setiap penugasan, kolaborasi dapat mencakup kemitraan komersial, inisiatif industri, dialog institusional, ekosistem teknologi, promosi pariwisata, maupun pengembangan pasar bersama.',
          'Kami menjunjung tinggi kemitraan yang berlandaskan kesamaan tujuan, kapabilitas yang saling melengkapi, integritas profesional, dan manfaat timbal balik.'
        ],
        partnerTracksTitle: 'Jalur Kemitraan Ekosistem 8 Vice',
        partnerTracks: [
          {
            code: '01',
            name: 'Mitra Komersial & Distribusi',
            desc: 'Korporasi, grup bisnis, dan jaringan distribusi nasional yang membuka jalur pasar bagi merek lintas batas.'
          },
          {
            code: '02',
            name: 'Asosiasi Industri & Kamar Dagang',
            desc: 'Organisasi bisnis, dewan perdagangan bilateral, dan penyelenggara delegasi investasi sektoral.'
          },
          {
            code: '03',
            name: 'Penyedia Teknologi & Solusi Enterprise',
            desc: 'Platform digital, penyedia infrastruktur cloud/AI, pembayaran lintas batas, dan ekosistem teknologi.'
          },
          {
            code: '04',
            name: 'Mitra Institusional, Kawasan Industri & Riset',
            desc: 'Pengelola kawasan industri, lembaga kajian, konsultan spesialis, dan mitra penyelenggara forum eksekutif.'
          }
        ],
        partnerBoxTitle: 'Formulir Pendaftaran Kemitraan (Partnership Registration)',
        partnerBoxDesc:
          'Daftarkan organisasi Anda untuk menjajaki peluang kolaborasi strategis di koridor Indonesia–Tiongkok bersama tim ekosistem 8 Vice.',
        partnerCta: 'Kirim Pendaftaran Partnership'
      }
    : {
        breadcrumbHome: 'Home',
        breadcrumb: 'Insights & Partnerships',
        eyebrow: 'MARKET INTELLIGENCE & COLLABORATIVE ECOSYSTEM',
        heroTitle: 'Insights for a Connected Business World.',
        heroSubtitle: 'Understand the Market. See the Opportunity.',
        heroLead:
          'Cross-border expansion requires informed decisions, an understanding of changing market conditions, and a clear view of the opportunities and challenges ahead.',
        ctaRegisterPartner: 'Register for Partnership',
        ctaExploreInsights: 'Explore Insights',
        dualHubLabel1: 'FOCUS 01 · MARKET INTELLIGENCE',
        dualHubTitle1: 'Executive Briefings & Regulatory Playbooks',
        dualHubDesc1: 'In-depth analysis on market entry, TKDN local content rules, UU PDP compliance, and Indonesia–China corridor shifts.',
        dualHubLabel2: 'FOCUS 02 · COLLABORATIVE ECOSYSTEM',
        dualHubTitle2: '8 Vice Strategic Partnership Program',
        dualHubDesc2: 'Partner with us as a commercial enterprise, industry association, technology provider, or institutional stakeholder.',
        dualHubBtn2: 'Apply for Partnership →',
        introParagraphs: [
          'Through our insights and perspectives, 8 Vice explores business developments, industry trends, market entry considerations, and emerging areas of collaboration between Indonesia and China.',
          'Our objective is to help businesses and decision-makers develop a more informed perspective on cross-border opportunities and make better-prepared strategic decisions.',
          'Explore our latest perspectives on market development, business partnerships, digital ecosystems, tourism, creative industries, and Indonesia–China economic cooperation.'
        ],
        pillarsEyebrow: '01 · SIX INSIGHT & KNOWLEDGE PILLARS',
        pillarsTitle: 'Our Editorial & Intelligence Coverage.',
        pillars: [
          {
            num: '01',
            title: 'Market Intelligence',
            idTitle: 'Market Intelligence',
            desc: 'Perspectives on market dynamics, commercial opportunities, and considerations for businesses exploring Indonesia and China.'
          },
          {
            num: '02',
            title: 'Cross-Border Business Guides',
            idTitle: 'Cross-Border Business Guides',
            desc: 'Practical insights into market preparation, partner selection, localization, and business development across different markets.'
          },
          {
            num: '03',
            title: 'Industry Perspectives',
            idTitle: 'Industry Perspectives',
            desc: 'Commentary on tourism, technology, infrastructure, creative economy, consumer markets, and other relevant sectors.'
          },
          {
            num: '04',
            title: 'Indonesia–China Relations',
            idTitle: 'Indonesia–China Relations',
            desc: 'Business-focused perspectives on bilateral cooperation, institutional engagement, and emerging areas of collaboration.'
          },
          {
            num: '05',
            title: 'News & Activities',
            idTitle: 'News & Activities',
            desc: 'Updates on selected business forums, delegations, meetings, industry events, and partnership initiatives involving 8 Vice.'
          },
          {
            num: '06',
            title: 'Case Studies',
            idTitle: 'Case Studies',
            desc: 'Selected examples of projects, approaches, and outcomes that demonstrate our capabilities, subject to client confidentiality and authorization.'
          }
        ],
        chinaResearchEyebrow: '02 · IN-DEPTH CHINA RESEARCH & PAPERS',
        chinaResearchTitle: 'China Cross-Border Strategic Research & Industry Intelligence Papers',
        chinaResearchSubtitle:
          'Comprehensive empirical studies by 8 Vice based on operational audits of 120+ manufacturing corporations, 40% TKDN compliance matrices, and bilateral industrial estate cost models.',
        chinaResearchBadge: 'EXCLUSIVE RESEARCH REPORT · 2026',
        chinaResearchLockedPill: '🔒 LOCKED DOCUMENT · PAYWALL PROTECTED',
        chinaResearchPriceLabel: 'Full Executive License Price:',
        chinaResearchPriceNote:
          'Includes unabridged 58-page PDF report, executive 24-slide presentation deck, and raw financial model spreadsheets (.xlsx).',
        chinaResearchCtaPrimary: 'Read Article & Access Research Paper',
        chinaResearchCtaLocked: 'Unlock Paper ($99 / Rp 1.49M)',
        chinaResearchOtherTitle: 'Other Strategic China Research & Policy Papers',
        streamEyebrow: '03 · FEATURED PERSPECTIVES & ARTICLES',
        streamTitle: 'Latest Briefings & Market Perspectives.',
        filterAll: 'All Categories',
        searchPh: 'Search insights by title, policy, or topic...',
        readBtn: 'Read Perspective',
        emptyText: 'No articles match your current filter criteria.',
        resetBtn: 'Reset Filters',
        partnerEyebrow: '04 · ECOSYSTEM PARTNERSHIPS & REGISTRATION',
        partnerTitle: 'Collaboration Creates Greater Possibilities.',
        partnerParagraphs: [
          'We believe meaningful business growth is rarely achieved alone. It is built through collaboration among companies, institutions, industry organizations, technology providers, and other relevant stakeholders.',
          '8 Vice seeks to develop a collaborative ecosystem that supports cross-border business development between Indonesia and China.',
          'Depending on the objectives of each engagement, collaboration may involve commercial partnerships, industry initiatives, institutional dialogue, technology ecosystems, tourism promotion, and joint market development.',
          'We value partnerships grounded in shared objectives, complementary capabilities, professional integrity, and mutual benefit.'
        ],
        partnerTracksTitle: '8 Vice Ecosystem Partnership Tracks',
        partnerTracks: [
          {
            code: '01',
            name: 'Commercial & Distribution Partners',
            desc: 'Enterprises, conglomerates, and national distribution networks unlocking market access for cross-border brands.'
          },
          {
            code: '02',
            name: 'Industry Associations & Chambers',
            desc: 'Trade councils, business associations, and bilateral chambers co-hosting sector delegations and dialogues.'
          },
          {
            code: '03',
            name: 'Technology & Ecosystem Providers',
            desc: 'Digital platforms, FinTech/payment gateways, cloud/AI providers, and enterprise solution partners.'
          },
          {
            code: '04',
            name: 'Industrial Zones, Advisory & Research',
            desc: 'Industrial parks, policy think-tanks, legal/tax specialists, and bilateral summit co-organizers.'
          }
        ],
        partnerBoxTitle: 'Ecosystem Partnership Registration',
        partnerBoxDesc:
          'Register your organization to explore structured collaboration opportunities across Indonesia and China with the 8 Vice partnership desk.',
        partnerCta: 'Submit Partnership Application'
      };

  const hrefOf = (a) => `/insights/${a.slug || a.id}`;

  const renderPartnerForm = (inModal = false) => {
    if (partnerSuccess) {
      return (
        <div className="ins-partner-success">
          <div className="ins-partner-success__icon">✓</div>
          <h4>
            {isId
              ? 'Pendaftaran Kemitraan Berhasil Diterima'
              : 'Partnership Registration Received'}
          </h4>
          <p>
            {isId
              ? 'Terima kasih atas ketertarikan organisasi Anda. Tim Kemitraan Ekosistem 8 Vice akan meninjau profil Anda dan menghubungi Anda untuk sesi penjajakan awal.'
              : 'Thank you for registering your organization. The 8 Vice Ecosystem Partnership Desk will review your profile and reach out to schedule an initial alignment call.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '18px' }}>
            <button
              type="button"
              className="ins-btn ins-btn--secondary"
              onClick={() => setPartnerSuccess(false)}
            >
              {isId ? 'Kirim Pendaftaran Lain' : 'Submit Another Inquiry'}
            </button>
            {inModal && (
              <button
                type="button"
                className="ins-btn ins-btn--primary"
                onClick={() => setIsPartnerModalOpen(false)}
              >
                {isId ? 'Tutup' : 'Close'}
              </button>
            )}
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={handlePartnerSubmit} className="ins-partner-form">
        <div className="ins-form-row">
          <div className="ins-form-field">
            <label>{isId ? 'Nama Organisasi / Perusahaan *' : 'Organization / Company Name *'}</label>
            <input
              type="text"
              required
              placeholder={isId ? 'Contoh: PT Nusantara Global / Shenzhen Tech Co.' : 'e.g. PT Nusantara Global / Shenzhen Tech Co.'}
              value={partnerForm.organization}
              onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
            />
          </div>
          <div className="ins-form-field">
            <label>{isId ? 'Kategori Kemitraan *' : 'Partnership Track *'}</label>
            <select
              value={partnerForm.track}
              onChange={(e) => setPartnerForm({ ...partnerForm, track: e.target.value })}
            >
              <option value="Commercial & Distribution Partnership">
                {isId ? 'Mitra Komersial & Distribusi' : 'Commercial & Distribution Partner'}
              </option>
              <option value="Industry Association & Chamber">
                {isId ? 'Asosiasi Industri & Kamar Dagang' : 'Industry Association & Chamber'}
              </option>
              <option value="Technology & Digital Ecosystem">
                {isId ? 'Penyedia Teknologi & Ekosistem Digital' : 'Technology & Digital Ecosystem'}
              </option>
              <option value="Industrial Park & Institutional Partner">
                {isId ? 'Kawasan Industri & Mitra Institusional' : 'Industrial Park & Institutional Partner'}
              </option>
              <option value="Media, Event & Delegation Co-Host">
                {isId ? 'Mitra Media, Forum & Delegasi' : 'Media, Event & Delegation Co-Host'}
              </option>
            </select>
          </div>
        </div>

        <div className="ins-form-row">
          <div className="ins-form-field">
            <label>{isId ? 'Nama Lengkap PIC *' : 'Contact Person Name *'}</label>
            <input
              type="text"
              required
              placeholder={isId ? 'Nama lengkap Anda' : 'Your full name'}
              value={partnerForm.name}
              onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
            />
          </div>
          <div className="ins-form-field">
            <label>{isId ? 'Jabatan / Peran' : 'Title / Role'}</label>
            <input
              type="text"
              placeholder={isId ? 'Contoh: Head of Strategic Partnerships' : 'e.g. Head of Strategic Partnerships'}
              value={partnerForm.role}
              onChange={(e) => setPartnerForm({ ...partnerForm, role: e.target.value })}
            />
          </div>
        </div>

        <div className="ins-form-row">
          <div className="ins-form-field">
            <label>{isId ? 'Email Korporat *' : 'Corporate Email *'}</label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={partnerForm.email}
              onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
            />
          </div>
          <div className="ins-form-field">
            <label>{isId ? 'WhatsApp / WeChat ID *' : 'WhatsApp / WeChat ID *'}</label>
            <input
              type="text"
              required
              placeholder="+62 811... / WeChat ID"
              value={partnerForm.phone}
              onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="ins-form-field">
          <label>{isId ? 'Fokus Koridor Kolaborasi' : 'Corridor Focus'}</label>
          <div className="ins-corridor-chips">
            {[
              'Bilateral (Indonesia ⇄ China)',
              'China → Indonesia Market Entry',
              'Indonesia → China Market Access'
            ].map((cor) => (
              <button
                key={cor}
                type="button"
                onClick={() => setPartnerForm({ ...partnerForm, corridor: cor })}
                className={`ins-corridor-chip ${partnerForm.corridor === cor ? 'is-active' : ''}`}
              >
                {cor}
              </button>
            ))}
          </div>
        </div>

        <div className="ins-form-field">
          <label>{isId ? 'Sasaran Kolaborasi & Sinergi yang Diharapkan *' : 'Collaboration Objectives & Proposed Synergy *'}</label>
          <textarea
            rows={3}
            required
            placeholder={
              isId
                ? 'Ceritakan secara singkat kapabilitas organisasi Anda dan bentuk kolaborasi yang ingin dijajaki bersama 8 Vice...'
                : 'Briefly describe your organization’s capabilities and the partnership initiatives you wish to explore with 8 Vice...'
            }
            value={partnerForm.objectives}
            onChange={(e) => setPartnerForm({ ...partnerForm, objectives: e.target.value })}
          />
        </div>

        <button type="submit" disabled={partnerSubmitting} className="ins-btn ins-btn--primary ins-btn--full">
          <span>
            {partnerSubmitting
              ? isId
                ? 'Mengirim Pendaftaran...'
                : 'Submitting Application...'
              : copy.partnerCta}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    );
  };

  return (
    <MainLayout>
      <SeoHead pageCode="article" title={copy.breadcrumb} />

      <div className="ins-page">
        {/* ================================================================
            00 · ASYMMETRIC SPLIT HERO — Left Narrative & Search + Right Dual-Hub Stack (Insights + Partnership CTA)
            ================================================================ */}
        <section className="ins-hero">
          <ModernCityBg variant="hero" />

          <div className="container ins-hero__container">
            <div className="ins-hero__split">
              {/* Left Column: Breadcrumb, Eyebrow, Title, Subtitle, Lead, Search & Dual CTAs */}
              <div className="ins-hero__left m3-reveal m3-reveal--left">
                <nav className="ins-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">{copy.breadcrumbHome}</Link>
                  <span className="ins-breadcrumb__sep">/</span>
                  <span className="ins-breadcrumb__current">{copy.breadcrumb}</span>
                </nav>

                <div className="ins-eyebrow-pill">
                  <span className="ins-eyebrow-dot" />
                  {copy.eyebrow}
                </div>

                <h1 className="ins-hero__title">{copy.heroTitle}</h1>
                <div className="ins-hero__subtitle">{copy.heroSubtitle}</div>
                <p className="ins-hero__lead">{copy.heroLead}</p>

                {/* Primary Dual-Need Action Bar */}
                <div className="ins-hero__actions">
                  <button
                    type="button"
                    onClick={() => setIsPartnerModalOpen(true)}
                    className="ins-btn ins-btn--primary"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" y1="8" x2="19" y2="14" />
                      <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                    <span>{copy.ctaRegisterPartner}</span>
                  </button>

                  <a href="#insights-stream" className="ins-btn ins-btn--secondary">
                    <span>{copy.ctaExploreInsights}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Integrated Quick Search Bar in Hero */}
                <div className="ins-hero__search-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="search"
                    placeholder={copy.searchPh}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        document.getElementById('insights-stream')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="ins-hero__search-clear"
                    >
                      ×
                    </button>
                  )}
                  <a href="#insights-stream" className="ins-hero__search-go">
                    {isId ? 'Cari' : 'Find'}
                  </a>
                </div>
              </div>

              {/* Right Column: Dual-Purpose Interactive Visual Hub (Insights Card + Partnership Registration Card) */}
              <div className="ins-hero__right m3-reveal m3-reveal--right" style={{ transitionDelay: '120ms' }}>
                <div className="ins-dual-stack">
                  {/* Card 01: Market Intelligence Hub */}
                  <a href="#insights-stream" className="ins-hub-card ins-hub-card--insights">
                    <img
                      src="/images/market_intelligence_hero.webp"
                      alt={copy.dualHubTitle1}
                      className="ins-hub-card__bg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="ins-hub-card__overlay" />
                    <div className="ins-hub-card__top">
                      <span className="ins-hub-card__tag">{copy.dualHubLabel1}</span>
                      <span className="ins-hub-card__count">
                        {insights.length} {isId ? 'Publikasi' : 'Briefings'}
                      </span>
                    </div>
                    <div className="ins-hub-card__bottom">
                      <h3>{copy.dualHubTitle1}</h3>
                      <p>{copy.dualHubDesc1}</p>
                    </div>
                  </a>

                  {/* Card 02: Collaborative Partnership Hub with Direct Registration CTA */}
                  <div className="ins-hub-card ins-hub-card--partner">
                    <img
                      src="/images/china_city_network.webp"
                      alt={copy.dualHubTitle2}
                      className="ins-hub-card__bg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="ins-hub-card__overlay ins-hub-card__overlay--red" />

                    <div className="ins-hub-card__top">
                      <span className="ins-hub-card__tag ins-hub-card__tag--red">
                        <span className="ins-eyebrow-dot" />
                        {copy.dualHubLabel2}
                      </span>
                      <span className="ins-hub-card__count">ID ⇄ CN</span>
                    </div>

                    <div className="ins-hub-card__bottom">
                      <h3>{copy.dualHubTitle2}</h3>
                      <p>{copy.dualHubDesc2}</p>
                      <div className="ins-hub-card__actions">
                        <button
                          type="button"
                          onClick={() => setIsPartnerModalOpen(true)}
                          className="ins-hub-card__cta-btn"
                        >
                          {copy.dualHubBtn2}
                        </button>
                        <a href="#partnership-register" className="ins-hub-card__link">
                          {isId ? 'Lihat Jalur Kemitraan' : 'View Partnership Tracks'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            01 · SIX INSIGHT & KNOWLEDGE PILLARS
            ================================================================ */}
        <section className="ins-section">
          <div className="ins-arch-lines" aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ins-pillars-intro m3-reveal">
              <div>
                <div className="ins-kicker">{copy.pillarsEyebrow}</div>
                <h2 className="ins-section-title">{copy.pillarsTitle}</h2>
              </div>
              <div className="ins-prose">
                {copy.introParagraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'ins-prose__lead' : ''}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="ins-pillars-grid">
              {copy.pillars.map((pil, idx) => (
                <div
                  key={pil.num}
                  className="ins-pillar-card m3-reveal"
                  style={{ transitionDelay: `${idx * 65}ms` }}
                >
                  <div className="ins-pillar-card__top">
                    <div className="ins-pillar-card__icon">
                      <PillarIcon num={pil.num} />
                    </div>
                    <span className="ins-pillar-card__num">{pil.num}</span>
                  </div>
                  <h3 className="ins-pillar-card__title">
                    {isId ? pil.idTitle : pil.title}
                  </h3>
                  <p className="ins-pillar-card__desc">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            02 · IN-DEPTH CHINA RESEARCH & PAPERS (#china-research)
            ================================================================ */}
        <section id="china-research" className="ins-section ins-section--research">
          <ModernCityBg variant="research" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ins-stream-head m3-reveal" style={{ marginBottom: '40px' }}>
              <div>
                <div className="ins-kicker">{copy.chinaResearchEyebrow}</div>
                <h2 className="ins-section-title" style={{ margin: 0 }}>
                  {copy.chinaResearchTitle}
                </h2>
              </div>
              <p className="ins-research-head-lead">
                {copy.chinaResearchSubtitle}
              </p>
            </div>

            {/* Flagship Research Paper Card */}
            {flagshipPaper && (
              <div className="ins-research-flagship m3-reveal m3-reveal--scale">
                {/* Left: Technical Visual & Badges */}
                <div className="ins-research-flagship__media">
                  <img
                    src={flagshipPaper.cover}
                    alt={isId ? flagshipPaper.title.id : flagshipPaper.title.en}
                    className="ins-research-flagship__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ins-research-flagship__shade" />

                  {/* Top Badges */}
                  <div className="ins-research-flagship__badges-top">
                    <span className="ins-research-badge-pill">
                      <span className="ins-research-badge-dot" />
                      {isId ? flagshipPaper.badgeId : flagshipPaper.badge}
                    </span>
                    <span className="ins-research-locked-badge">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }}>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      {isId ? 'DOKUMEN TERKUNCI' : 'LOCKED PAPER'}
                    </span>
                  </div>

                  {/* Bottom Spec Pills */}
                  <div className="ins-research-flagship__badges-bottom">
                    <div className="ins-research-spec-pill">
                      <span>📄 58 PAGES UNABRIDGED</span>
                      <span>·</span>
                      <span>PDF + RAW XLSX</span>
                      <span>·</span>
                      <span>OCT 2026</span>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Metadata & Pricing Box */}
                <div className="ins-research-flagship__body">
                  <div className="ins-research-flagship__meta">
                    <span className="ins-research-cat-tag">
                      {isId ? flagshipPaper.categoryId : flagshipPaper.category}
                    </span>
                    <span className="ins-meta-sep">·</span>
                    <span className="ins-research-time-tag">
                      {flagshipPaper.readTime}
                    </span>
                  </div>

                  <h3 className="ins-research-flagship__title">
                    <Link href={`/insights/${flagshipPaper.slug}`}>
                      {isId ? flagshipPaper.title.id : flagshipPaper.title.en}
                    </Link>
                  </h3>

                  <p className="ins-research-flagship__excerpt">
                    {isId ? flagshipPaper.subtitle.id : flagshipPaper.subtitle.en}
                  </p>

                  {/* Highlights Grid */}
                  <div className="ins-research-highlights-grid">
                    {(isId ? flagshipPaper.highlights.id : flagshipPaper.highlights.en).map((hl, hIdx) => (
                      <div key={hIdx} className="ins-research-highlight-box">
                        <div className="ins-research-highlight-val">{hl.value}</div>
                        <div className="ins-research-highlight-lbl">{hl.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Lock Callout Box */}
                  <div className="ins-research-pricing-callout">
                    <div className="ins-research-pricing-head">
                      <div>
                        <div className="ins-research-pricing-sub">
                          {copy.chinaResearchPriceLabel}
                        </div>
                        <div className="ins-research-price-val">
                          <span className="ins-research-price-amount">
                            {flagshipPaper.pricing.individualPriceFormatted}
                          </span>
                          <span className="ins-research-price-usd">
                            ({flagshipPaper.pricing.individualPriceUsd})
                          </span>
                        </div>
                      </div>
                      <span className="ins-research-locked-pill">
                        🔒 {isId ? 'Default Terkunci' : 'Default Locked'}
                      </span>
                    </div>
                    <p className="ins-research-pricing-note">
                      {copy.chinaResearchPriceNote}
                    </p>
                  </div>

                  {/* Action CTAs */}
                  <div className="ins-research-flagship__actions">
                    <Link
                      href={`/insights/${flagshipPaper.slug}`}
                      className="ins-research-btn ins-research-btn--primary"
                    >
                      <span>{copy.chinaResearchCtaPrimary}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>

                    <Link
                      href={`/insights/${flagshipPaper.slug}#article-research-paper`}
                      className="ins-research-btn ins-research-btn--locked"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>{copy.chinaResearchCtaLocked}</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary China Research Briefs */}
            {secondaryPapers.length > 0 && (
              <div className="ins-research-secondary-wrap m3-reveal">
                <div className="ins-research-secondary-head">
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#FFFFFF' }}>
                    {copy.chinaResearchOtherTitle}
                  </h4>
                </div>
                <div className="ins-research-secondary-grid">
                  {secondaryPapers.map((paper) => (
                    <div key={paper.id} className="ins-research-secondary-card">
                      <div className="ins-research-secondary-card__top">
                        <span className="ins-research-mini-badge">
                          {isId ? paper.badgeId : paper.badge}
                        </span>
                        <span className="ins-research-mini-locked">🔒 {paper.pagesCount}p PDF</span>
                      </div>
                      <h4 className="ins-research-secondary-card__title">
                        <Link href={`/insights/${paper.slug}`}>
                          {isId ? paper.title.id : paper.title.en}
                        </Link>
                      </h4>
                      <p className="ins-research-secondary-card__desc">
                        {isId ? paper.subtitle.id : paper.subtitle.en}
                      </p>
                      <div className="ins-research-secondary-card__foot">
                        <span className="ins-research-secondary-card__price">
                          {paper.pricing.individualPriceFormatted}
                        </span>
                        <Link
                          href={`/insights/${paper.slug}#article-research-paper`}
                          className="ins-research-secondary-card__link"
                        >
                          {isId ? 'Buka Paper →' : 'Unlock Paper →'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================
            03 · FEATURED PERSPECTIVES & ARTICLES STREAM (#insights-stream)
            ================================================================ */}
        <section id="insights-stream" className="ins-section ins-section--alt">
          <ModernCityBg variant="stream" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ins-stream-head m3-reveal">
              <div>
                <div className="ins-kicker">{copy.streamEyebrow}</div>
                <h2 className="ins-section-title" style={{ margin: 0 }}>
                  {copy.streamTitle}
                </h2>
              </div>

              <div className="ins-stream-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="search"
                  placeholder={copy.searchPh}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="ins-stream-search__clear">
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="ins-filter-pills m3-reveal" role="group" aria-label="Category filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`ins-filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                >
                  {cat === 'All' ? copy.filterAll : cat}
                </button>
              ))}
            </div>

            {/* Featured Lead Article */}
            {featuredArticle && (
              <article className="ins-featured-card m3-reveal m3-reveal--scale">
                <Link href={hrefOf(featuredArticle)} className="ins-featured-card__media">
                  <img
                    src={getCoverUrl(featuredArticle.cover)}
                    alt={getLocalized(featuredArticle.t || featuredArticle.title)}
                    className="ins-featured-card__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="ins-featured-card__shade" />
                  <span className="ins-featured-card__badge">
                    <span className="ins-eyebrow-dot" />
                    {isId ? 'SOROTAN UTAMA' : 'FEATURED BRIEFING'}
                  </span>
                </Link>

                <div className="ins-featured-card__body">
                  <div className="ins-art-meta">
                    {featuredArticle.cat && (
                      <span className="ins-art-meta__cat">{featuredArticle.cat}</span>
                    )}
                    <span>·</span>
                    <span>{featuredArticle.date || '2026'}</span>
                    {featuredArticle.rt && (
                      <>
                        <span>·</span>
                        <span>{featuredArticle.rt}</span>
                      </>
                    )}
                  </div>

                  <h3 className="ins-featured-card__title">
                    <Link href={hrefOf(featuredArticle)}>
                      {getLocalized(featuredArticle.t || featuredArticle.title)}
                    </Link>
                  </h3>

                  <p className="ins-featured-card__excerpt">
                    {getLocalized(featuredArticle.excerpt)}
                  </p>

                  <div className="ins-featured-card__footer">
                    <div className="ins-author-mini">
                      <div className="ins-author-mini__avatar">
                        {(featuredArticle.author_name || '8V')
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')
                          .toUpperCase()}
                      </div>
                      <div>
                        <div className="ins-author-mini__name">
                          {featuredArticle.author_name || '8 Vice Research Desk'}
                        </div>
                        <div className="ins-author-mini__role">
                          {featuredArticle.author_role || (isId ? 'Intelijen Koridor' : 'Corridor Intelligence')}
                        </div>
                      </div>
                    </div>

                    <Link href={hrefOf(featuredArticle)} className="ins-btn ins-btn--primary">
                      <span>{copy.readBtn}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Articles Grid */}
            {listArticles.length > 0 && (
              <div className="ins-articles-grid">
                {listArticles.map((art, idx) => (
                  <article
                    key={art.id || art.slug || idx}
                    className="ins-art-card m3-reveal"
                    style={{ transitionDelay: `${(idx % 3) * 75}ms` }}
                  >
                    <Link href={hrefOf(art)} className="ins-art-card__media">
                      <img
                        src={getCoverUrl(art.cover)}
                        alt={getLocalized(art.t || art.title)}
                        className="ins-art-card__img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="ins-art-card__shade" />
                      {art.cat && <span className="ins-art-card__cat-pill">{art.cat}</span>}
                    </Link>

                    <div className="ins-art-card__body">
                      <div className="ins-art-meta">
                        <span>{art.date || '2026'}</span>
                        {art.rt && (
                          <>
                            <span>·</span>
                            <span>{art.rt}</span>
                          </>
                        )}
                      </div>

                      <h4 className="ins-art-card__title">
                        <Link href={hrefOf(art)}>
                          {getLocalized(art.t || art.title)}
                        </Link>
                      </h4>

                      <p className="ins-art-card__excerpt">
                        {getLocalized(art.excerpt)}
                      </p>

                      <div className="ins-art-card__footer">
                        <span className="ins-art-card__author">
                          {art.author_name || '8 Vice Research Desk'}
                        </span>
                        <Link href={hrefOf(art)} className="ins-art-card__link">
                          <span>{copy.readBtn}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {filteredArticles.length === 0 && (
              <div className="ins-empty-card m3-reveal">
                <p>{copy.emptyText}</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="ins-btn ins-btn--secondary"
                >
                  {copy.resetBtn}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================
            03 · ECOSYSTEM PARTNERSHIPS & ON-PAGE PARTNERSHIP REGISTRATION
            ================================================================ */}
        <section id="partnership-register" className="ins-section ins-section--partner">
          <ModernCityBg variant="partner" />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="ins-partner-grid">
              {/* Left Column: Ecosystem Narrative + 4 Partnership Tracks */}
              <div className="ins-partner__left m3-reveal m3-reveal--left">
                <div className="ins-kicker">{copy.partnerEyebrow}</div>
                <h2 className="ins-section-title">{copy.partnerTitle}</h2>

                <div className="ins-prose">
                  {copy.partnerParagraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? 'ins-prose__lead' : ''}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* 4 Partnership Tracks Grid */}
                <div className="ins-tracks-wrap">
                  <div className="ins-tracks-label">{copy.partnerTracksTitle}</div>
                  <div className="ins-tracks-grid">
                    {copy.partnerTracks.map((tr) => (
                      <div key={tr.code} className="ins-track-card">
                        <div className="ins-track-card__num">{tr.code}</div>
                        <div>
                          <h4>{tr.name}</h4>
                          <p>{tr.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Dedicated Partnership Registration Card & Form */}
              <div id="partnerships" className="ins-partner__right m3-reveal m3-reveal--right" style={{ transitionDelay: '120ms' }}>
                <div className="ins-register-card">
                  <div className="ins-register-card__banner">
                    <img
                      src="/images/city_orbiting_cards.webp"
                      alt={copy.partnerBoxTitle}
                      className="ins-register-card__banner-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="ins-register-card__banner-shade" />
                    <div className="ins-register-card__banner-content">
                      <span className="ins-eyebrow-pill" style={{ marginBottom: '8px' }}>
                        <span className="ins-eyebrow-dot" />
                        {isId ? 'KOLABORASI BILATERAL' : 'BILATERAL COLLABORATION'}
                      </span>
                      <h3>{copy.partnerBoxTitle}</h3>
                      <p>{copy.partnerBoxDesc}</p>
                    </div>
                  </div>

                  <div className="ins-register-card__body">
                    {renderPartnerForm(false)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PARTNERSHIP REGISTRATION MODAL (Triggered from Hero CTA)
            ================================================================ */}
        {isPartnerModalOpen && (
          <div className="ins-modal-backdrop" onClick={() => setIsPartnerModalOpen(false)}>
            <div
              className="ins-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={copy.partnerBoxTitle}
            >
              <div className="ins-modal-header">
                <div>
                  <span className="ins-eyebrow-pill" style={{ marginBottom: '6px' }}>
                    <span className="ins-eyebrow-dot" />
                    {isId ? 'PROGRAM KEMITRAAN EKOSISTEM 8 VICE' : '8 VICE ECOSYSTEM PARTNERSHIP PROGRAM'}
                  </span>
                  <h3>{copy.partnerBoxTitle}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPartnerModalOpen(false)}
                  className="ins-modal-close"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="ins-modal-body">
                <p className="ins-modal-sub">{copy.partnerBoxDesc}</p>
                {renderPartnerForm(true)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================================
          SCOPED STYLES FOR /insights + GOOGLE M3 TRANSITIONS
          ==================================================================== */}
      <style>{`
        .ins-page {
          background: #08090C;
          color: #ffffff;
          overflow: hidden;
          position: relative;
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

        /* Background City & Grid */
        .ins-city-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .ins-city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
        }
        .ins-red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          pointer-events: none;
        }
        .ins-red-glow--1 {
          width: 620px;
          height: 360px;
          top: -90px;
          left: 25%;
          background: radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0) 70%);
        }
        .ins-red-glow--2 {
          width: 500px;
          height: 340px;
          bottom: 0;
          right: -100px;
          background: radial-gradient(circle, rgba(230,57,70,0.16) 0%, rgba(230,57,70,0) 70%);
        }
        .ins-city-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 320px;
          opacity: 0.72;
        }
        .ins-arc-anim {
          stroke-dashoffset: 0;
          animation: insArcFlow 18s linear infinite;
        }
        .ins-arc-anim--slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        @keyframes insArcFlow {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .ins-beacon-pulse {
          animation: insBeacon 2.8s ease-in-out infinite;
        }
        .ins-beacon-pulse--delay {
          animation-delay: 1.4s;
        }
        @keyframes insBeacon {
          0%, 100% { opacity: 0.35; r: 3px; }
          50% { opacity: 1; r: 5.5px; }
        }
        .ins-arch-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 280px at 85% 15%, rgba(230,57,70,0.09), transparent 70%),
            linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.05) 50%, transparent 100%);
          z-index: 0;
        }

        /* Shared Typography & Buttons */
        .ins-kicker {
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
        .ins-kicker::before {
          content: '';
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }
        .ins-section-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 18px;
          color: #ffffff;
        }
        .ins-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .ins-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 10px #E63946;
          display: inline-block;
        }
        .ins-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ins-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #b91c28 100%);
          color: #ffffff;
          box-shadow: 0 12px 28px rgba(230,57,70,0.34);
        }
        .ins-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(230,57,70,0.5);
        }
        .ins-btn--secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .ins-btn--secondary:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }
        .ins-btn--full {
          width: 100%;
        }

        /* ====================================================================
           00 · ASYMMETRIC SPLIT HERO (Left Content + Right 2-Need Hub Stack)
           ==================================================================== */
        .ins-hero {
          position: relative;
          padding: 136px 0 80px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ins-hero__container {
          position: relative;
          z-index: 2;
        }
        .ins-hero__split {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: clamp(32px, 4.5vw, 56px);
          align-items: center;
        }
        .ins-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          font-size: 12.5px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 20px;
        }
        .ins-breadcrumb a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
        }
        .ins-breadcrumb a:hover {
          color: #E63946;
        }
        .ins-breadcrumb__sep {
          color: rgba(255,255,255,0.3);
        }
        .ins-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .ins-hero__title {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 14px 0 12px;
          color: #ffffff;
        }
        .ins-hero__subtitle {
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 700;
          color: #E63946;
          margin-bottom: 16px;
        }
        .ins-hero__lead {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255,255,255,0.76);
          margin: 0 0 28px;
          max-width: 620px;
        }
        .ins-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 26px;
        }

        /* Quick Search Bar in Hero */
        .ins-hero__search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 560px;
          padding: 7px 8px 7px 18px;
          border-radius: 999px;
          background: rgba(14, 17, 24, 0.85);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(12px);
        }
        .ins-hero__search-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 14px;
        }
        .ins-hero__search-clear {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 18px;
          cursor: pointer;
          padding: 0 6px;
        }
        .ins-hero__search-go {
          padding: 9px 18px;
          border-radius: 999px;
          background: rgba(230,57,70,0.18);
          border: 1px solid rgba(230,57,70,0.4);
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ins-hero__search-go:hover {
          background: #E63946;
        }

        /* Right Column: Dual Hub Cards */
        .ins-dual-stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ins-hub-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          padding: 24px 26px;
          min-height: 215px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,0.13);
          text-decoration: none;
          color: #ffffff;
          box-shadow: 0 24px 54px rgba(0,0,0,0.5);
          transition: all 0.35s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ins-hub-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230,57,70,0.5);
        }
        .ins-hub-card__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.65) contrast(1.08);
          transition: transform 6s ease;
        }
        .ins-hub-card:hover .ins-hub-card__bg {
          transform: scale(1.06);
        }
        .ins-hub-card__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.3) 0%, rgba(8,9,12,0.92) 100%);
        }
        .ins-hub-card__overlay--red {
          background:
            linear-gradient(180deg, rgba(8,9,12,0.25) 0%, rgba(16,10,14,0.94) 100%),
            radial-gradient(circle at 85% 20%, rgba(230,57,70,0.36), transparent 60%);
        }
        .ins-hub-card__top,
        .ins-hub-card__bottom {
          position: relative;
          z-index: 2;
        }
        .ins-hub-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 18px;
        }
        .ins-hub-card__tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(8,9,12,0.78);
          border: 1px solid rgba(255,255,255,0.16);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.9);
        }
        .ins-hub-card__tag--red {
          border-color: rgba(230,57,70,0.45);
          color: #ff8a93;
        }
        .ins-hub-card__count {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ff8a93;
          background: rgba(230,57,70,0.18);
          border: 1px solid rgba(230,57,70,0.35);
          padding: 4px 11px;
          border-radius: 999px;
        }
        .ins-hub-card__bottom h3 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 6px;
          color: #ffffff;
        }
        .ins-hub-card__bottom p {
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.76);
          margin: 0;
        }
        .ins-hub-card__actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 14px;
        }
        .ins-hub-card__cta-btn {
          padding: 9px 18px;
          border-radius: 999px;
          background: #E63946;
          border: none;
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ins-hub-card__cta-btn:hover {
          background: #ff4757;
          transform: translateX(3px);
        }
        .ins-hub-card__link {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.82);
          text-decoration: underline;
        }

        /* ====================================================================
           01 · SIX INSIGHT PILLARS
           ==================================================================== */
        .ins-section {
          position: relative;
          padding: clamp(72px, 8vw, 108px) 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ins-section--alt {
          background: linear-gradient(180deg, #0B0D13 0%, #08090C 100%);
        }
        .ins-section--research {
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230, 57, 70, 0.16) 0%, transparent 70%), #0A0C12;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .ins-research-head-lead {
          max-width: 620px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          line-height: 1.68;
          margin: 0;
        }
        .ins-research-flagship {
          background: linear-gradient(180deg, rgba(22, 26, 36, 0.94) 0%, rgba(13, 16, 24, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top: 3.5px solid #E63946;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 36px rgba(230, 57, 70, 0.14);
          display: grid;
          grid-template-columns: 1.02fr 1.18fr;
          margin-bottom: 48px;
          backdrop-filter: blur(14px);
        }
        .ins-research-flagship__media {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          background: #08090C;
        }
        .ins-research-flagship__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.72) contrast(1.15);
          transition: transform 0.8s cubic-bezier(0.2, 0, 0, 1);
        }
        .ins-research-flagship:hover .ins-research-flagship__img {
          transform: scale(1.05);
        }
        .ins-research-flagship__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 9, 12, 0.2) 0%, rgba(8, 9, 12, 0.5) 50%, rgba(8, 9, 12, 0.94) 100%),
                      radial-gradient(ellipse at 30% 90%, rgba(230, 57, 70, 0.3) 0%, transparent 60%);
        }
        .ins-research-flagship__badges-top {
          position: absolute;
          top: 22px;
          left: 22px;
          right: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          z-index: 2;
        }
        .ins-research-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(10, 12, 18, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }
        .ins-research-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .ins-research-locked-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.2);
          border: 1px solid rgba(230, 57, 70, 0.55);
          color: #FF7B7B;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }
        .ins-research-flagship__badges-bottom {
          position: absolute;
          bottom: 22px;
          left: 22px;
          right: 22px;
          z-index: 2;
        }
        .ins-research-spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 12px;
          background: rgba(14, 18, 26, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.85);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          backdrop-filter: blur(10px);
        }
        .ins-research-flagship__body {
          padding: 38px 40px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          background: linear-gradient(135deg, rgba(20, 24, 34, 0.9) 0%, rgba(12, 14, 20, 0.96) 100%);
        }
        .ins-research-flagship__meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }
        .ins-research-cat-tag {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF7B7B;
        }
        .ins-research-time-tag {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
        }
        .ins-research-flagship__title {
          font-size: clamp(22px, 2.3vw, 30px);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
        }
        .ins-research-flagship__title a {
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .ins-research-flagship__title a:hover {
          color: #FF6B76;
        }
        .ins-research-flagship__excerpt {
          font-size: 15px;
          line-height: 1.68;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 24px;
        }
        .ins-research-highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        @media (max-width: 640px) {
          .ins-research-highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .ins-research-highlight-box {
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ins-research-highlight-val {
          font-size: 16px;
          font-weight: 800;
          color: #FF7B7B;
          letter-spacing: -0.01em;
        }
        .ins-research-highlight-lbl {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
        }
        .ins-research-pricing-callout {
          padding: 16px 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(230, 57, 70, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(230, 57, 70, 0.35);
          margin-bottom: 24px;
        }
        .ins-research-pricing-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .ins-research-pricing-sub {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }
        .ins-research-price-val {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .ins-research-price-amount {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }
        .ins-research-price-usd {
          font-size: 13px;
          font-weight: 600;
          color: #FF7B7B;
        }
        .ins-research-locked-pill {
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.2);
          border: 1px solid rgba(230, 57, 70, 0.4);
          color: #FF8B8B;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .ins-research-pricing-note {
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.68);
          margin: 0;
        }
        .ins-research-flagship__actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .ins-research-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .ins-research-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #B81D2A 100%);
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(230, 57, 70, 0.38);
        }
        .ins-research-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.55);
          color: #FFFFFF;
        }
        .ins-research-btn--locked {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(230, 57, 70, 0.45);
          color: #FF8B8B;
        }
        .ins-research-btn--locked:hover {
          background: rgba(230, 57, 70, 0.16);
          color: #FFFFFF;
          transform: translateY(-2px);
        }
        .ins-research-secondary-wrap {
          margin-top: 24px;
        }
        .ins-research-secondary-head {
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ins-research-secondary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }
        .ins-research-secondary-card {
          background: linear-gradient(180deg, rgba(20, 24, 32, 0.85) 0%, rgba(12, 14, 20, 0.9) 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          transition: transform 0.35s ease, border-color 0.35s ease;
        }
        .ins-research-secondary-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 57, 70, 0.45);
        }
        .ins-research-secondary-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }
        .ins-research-mini-badge {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #FF7B7B;
          text-transform: uppercase;
        }
        .ins-research-mini-locked {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.05);
          padding: 3px 8px;
          border-radius: 6px;
        }
        .ins-research-secondary-card__title {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0 0 10px;
        }
        .ins-research-secondary-card__title a {
          color: #FFFFFF;
          text-decoration: none;
        }
        .ins-research-secondary-card__title a:hover {
          color: #FF6B76;
        }
        .ins-research-secondary-card__desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 18px;
        }
        .ins-research-secondary-card__foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ins-research-secondary-card__price {
          font-size: 14px;
          font-weight: 800;
          color: #FF7B7B;
        }
        .ins-research-secondary-card__link {
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .ins-research-secondary-card__link:hover {
          color: #E63946;
        }
        @media (max-width: 980px) {
          .ins-research-flagship {
            grid-template-columns: 1fr;
          }
          .ins-research-flagship__media {
            min-height: 300px;
          }
          .ins-research-flagship__body {
            padding: 28px 24px;
          }
        }
        .ins-pillars-intro {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(28px, 4vw, 56px);
          align-items: start;
          margin-bottom: 48px;
        }
        .ins-prose p {
          font-size: 15px;
          line-height: 1.78;
          color: rgba(255,255,255,0.74);
          margin: 0 0 14px;
        }
        .ins-prose p.ins-prose__lead {
          font-size: 17px;
          font-weight: 600;
          color: rgba(255,255,255,0.94);
          border-left: 3px solid #E63946;
          padding-left: 16px;
        }
        .ins-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ins-pillar-card {
          padding: 26px;
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(18,21,30,0.88) 0%, rgba(10,12,18,0.94) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ins-pillar-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230,57,70,0.42);
          box-shadow: 0 20px 44px rgba(0,0,0,0.45);
        }
        .ins-pillar-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .ins-pillar-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ins-pillar-card__num {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(230,57,70,0.85);
        }
        .ins-pillar-card__title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 10px;
          color: #ffffff;
        }
        .ins-pillar-card__desc {
          font-size: 14px;
          line-height: 1.68;
          color: rgba(255,255,255,0.68);
          margin: 0;
        }

        /* ====================================================================
           02 · ARTICLES STREAM
           ==================================================================== */
        .ins-stream-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }
        .ins-stream-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.14);
          min-width: min(100%, 320px);
        }
        .ins-stream-search input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 14px;
        }
        .ins-stream-search__clear {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          font-size: 18px;
        }
        .ins-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 36px;
        }
        .ins-filter-pill {
          padding: 9px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .ins-filter-pill:hover,
        .ins-filter-pill.is-active {
          background: rgba(230,57,70,0.18);
          border-color: #E63946;
          color: #ffffff;
        }

        /* Featured Article Card */
        .ins-featured-card {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(155deg, rgba(20,23,33,0.95) 0%, rgba(11,13,19,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.11);
          margin-bottom: 32px;
          box-shadow: 0 28px 64px rgba(0,0,0,0.5);
        }
        .ins-featured-card__media {
          position: relative;
          min-height: 360px;
          display: block;
          overflow: hidden;
        }
        .ins-featured-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 6s ease;
        }
        .ins-featured-card:hover .ins-featured-card__img {
          transform: scale(1.05);
        }
        .ins-featured-card__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,9,12,0.1) 0%, rgba(8,9,12,0.7) 100%);
        }
        .ins-featured-card__badge {
          position: absolute;
          top: 20px;
          left: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(230,57,70,0.45);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffffff;
        }
        .ins-featured-card__body {
          padding: clamp(28px, 4vw, 44px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ins-art-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.52);
          margin-bottom: 12px;
        }
        .ins-art-meta__cat {
          color: #ff8a93;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .ins-featured-card__title {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 14px;
        }
        .ins-featured-card__title a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ins-featured-card__title a:hover {
          color: #ff8a93;
        }
        .ins-featured-card__excerpt {
          font-size: 15px;
          line-height: 1.72;
          color: rgba(255,255,255,0.74);
          margin: 0 0 26px;
        }
        .ins-featured-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .ins-author-mini {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ins-author-mini__avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(230,57,70,0.18);
          border: 1px solid rgba(230,57,70,0.45);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ins-author-mini__name {
          font-size: 13.5px;
          font-weight: 700;
          color: #ffffff;
        }
        .ins-author-mini__role {
          font-size: 12px;
          color: rgba(255,255,255,0.52);
        }

        /* 3-Col Articles Grid */
        .ins-articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ins-art-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(15, 18, 26, 0.9);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          transition: all 0.32s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .ins-art-card:hover {
          transform: translateY(-6px);
          border-color: rgba(230,57,70,0.42);
          box-shadow: 0 22px 48px rgba(0,0,0,0.45);
        }
        .ins-art-card__media {
          position: relative;
          aspect-ratio: 16 / 10;
          display: block;
          overflow: hidden;
          background: #10131C;
        }
        .ins-art-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ins-art-card:hover .ins-art-card__img {
          transform: scale(1.06);
        }
        .ins-art-card__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(8,9,12,0.75) 100%);
        }
        .ins-art-card__cat-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(8,9,12,0.82);
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .ins-art-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ins-art-card__title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.38;
          margin: 0 0 10px;
        }
        .ins-art-card__title a {
          color: #ffffff;
          text-decoration: none;
        }
        .ins-art-card__title a:hover {
          color: #ff8a93;
        }
        .ins-art-card__excerpt {
          font-size: 13.8px;
          line-height: 1.65;
          color: rgba(255,255,255,0.66);
          margin: 0 0 20px;
          flex: 1;
        }
        .ins-art-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .ins-art-card__author {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        .ins-art-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #E63946;
          text-decoration: none;
        }

        /* ====================================================================
           03 · ECOSYSTEM PARTNERSHIPS & REGISTRATION
           ==================================================================== */
        .ins-partner-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: clamp(32px, 4.5vw, 56px);
          align-items: start;
        }
        .ins-tracks-wrap {
          margin-top: 28px;
        }
        .ins-tracks-label {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ff8a93;
          margin-bottom: 14px;
        }
        .ins-tracks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .ins-track-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s ease;
        }
        .ins-track-card:hover {
          border-color: rgba(230,57,70,0.4);
          background: rgba(230,57,70,0.06);
        }
        .ins-track-card__num {
          font-size: 12px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.3);
          padding: 5px 9px;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .ins-track-card h4 {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 4px;
          color: #ffffff;
        }
        .ins-track-card p {
          font-size: 13.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.68);
          margin: 0;
        }

        /* Registration Card & Form */
        .ins-register-card {
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(19, 22, 32, 0.96) 0%, rgba(10, 12, 18, 0.98) 100%);
          border: 1px solid rgba(230,57,70,0.34);
          box-shadow:
            0 28px 68px rgba(0,0,0,0.55),
            0 0 50px rgba(230,57,70,0.1);
        }
        .ins-register-card__banner {
          position: relative;
          padding: 28px 30px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ins-register-card__banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.45);
        }
        .ins-register-card__banner-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,9,12,0.75) 0%, rgba(230,57,70,0.28) 100%);
        }
        .ins-register-card__banner-content {
          position: relative;
          z-index: 2;
        }
        .ins-register-card__banner-content h3 {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 8px;
          color: #ffffff;
        }
        .ins-register-card__banner-content p {
          font-size: 13.8px;
          line-height: 1.6;
          color: rgba(255,255,255,0.82);
          margin: 0;
        }
        .ins-register-card__body {
          padding: 28px 30px;
        }
        .ins-partner-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ins-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .ins-form-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .ins-form-field label {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.03em;
        }
        .ins-form-field input,
        .ins-form-field select,
        .ins-form-field textarea {
          width: 100%;
          padding: 11px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.13);
          color: #ffffff;
          font-size: 13.5px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .ins-form-field select option {
          background: #0F1219;
          color: #ffffff;
        }
        .ins-form-field input:focus,
        .ins-form-field select:focus,
        .ins-form-field textarea:focus {
          border-color: #E63946;
        }
        .ins-corridor-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .ins-corridor-chip {
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.78);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ins-corridor-chip.is-active {
          background: rgba(230,57,70,0.2);
          border-color: #E63946;
          color: #ffffff;
        }
        .ins-partner-success {
          text-align: center;
          padding: 28px 16px;
        }
        .ins-partner-success__icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(230,57,70,0.2);
          border: 2px solid #E63946;
          color: #ffffff;
          font-size: 24px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .ins-partner-success h4 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 10px;
        }
        .ins-partner-success p {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }

        /* Modal */
        .ins-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(4, 6, 10, 0.82);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .ins-modal-dialog {
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 24px;
          background: #0D1017;
          border: 1px solid rgba(230,57,70,0.4);
          box-shadow: 0 32px 80px rgba(0,0,0,0.75);
        }
        .ins-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 28px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ins-modal-header h3 {
          font-size: 22px;
          font-weight: 800;
          margin: 4px 0 0;
          color: #ffffff;
        }
        .ins-modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #ffffff;
          font-size: 22px;
          cursor: pointer;
        }
        .ins-modal-body {
          padding: 22px 28px 28px;
        }
        .ins-modal-sub {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255,255,255,0.75);
          margin: 0 0 20px;
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .ins-hero__split,
          .ins-pillars-intro,
          .ins-featured-card,
          .ins-partner-grid {
            grid-template-columns: 1fr;
          }
          .ins-pillars-grid,
          .ins-articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .ins-hero {
            padding: 114px 0 60px;
          }
          .ins-pillars-grid,
          .ins-articles-grid,
          .ins-form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </MainLayout>
  );
}
