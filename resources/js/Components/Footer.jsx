import React, { useState, useEffect, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import Link from '@/Components/LocalizedLink';
import { usePage, useForm } from '@inertiajs/react';
import { useTranslation } from '@/Contexts/TranslationContext';

const ChatFloatingWidget = lazy(() => import('@/Components/ChatFloatingWidget'));

export default function Footer() {
  const { siteSettings, footerInsights = [] } = usePage().props;
  const { lang, t } = useTranslation();
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null
  const [subAlert, setSubAlert] = useState(null); // { type: 'success' | 'error', text: string }

  const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    email: '',
    website_url: '', // honeypot
  });

  const subscribeEndpoint = isCn ? '/cn/subscribe' : isId ? '/id/subscribe' : '/subscribe';

  const handleSubscribe = (e) => {
    e.preventDefault();
    clearErrors();
    setSubAlert(null);

    post(subscribeEndpoint, {
      preserveScroll: true,
      onSuccess: (page) => {
        const msg =
          page?.props?.flash?.success ||
          (isCn
            ? '订阅成功！感谢您加入 8vice 商业洞察简报。'
            : isId
            ? 'Berhasil terkirim! Email Anda telah terdaftar di newsletter 8vice.'
            : 'Successfully subscribed! Thank you for joining the 8vice newsletter.');
        setSubAlert({ type: 'success', text: msg });
        reset('email');
      },
      onError: (errs) => {
        const errMsg =
          errs?.email ||
          (isCn
            ? '提交失败，请检查您的邮箱地址是否正确。'
            : isId
            ? 'Gagal mengirim, pastikan alamat email valid.'
            : 'Submission failed. Please enter a valid email address.');
        setSubAlert({ type: 'error', text: errMsg });
      },
    });
  };

  useEffect(() => {
    if (!subAlert) return;
    const timer = setTimeout(() => setSubAlert(null), 6000);
    return () => clearTimeout(timer);
  }, [subAlert]);

  // Escape key listener for legal modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLegalModal(null);
    };
    if (activeLegalModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLegalModal]);

  const defaultFooterDescription = isCn
    ? '8 Vice 是一家专注于印尼与中国的双边战略咨询及业务拓展机构，致力于协助企业把握市场准入、政企关系与跨境合作机遇。凭借二十余年的双边实战积淀，我们将企业的商业愿景转化为务实高效的本土落地执行。'
    : isId
    ? '8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–Tiongkok yang mendampingi perusahaan menavigasi masuk pasar, hubungan kelembagaan, dan kemitraan bilateral. Berbekal pengalaman lintas batas lebih dari dua dekade, kami menjembatani ambisi komersial dengan eksekusi nyata di lapangan.'
    : '8 Vice is an Indonesia–China strategic advisory and business development firm helping enterprises navigate market entry, institutional engagement, and bilateral partnerships. With over two decades of cross-border experience, we bridge commercial ambition with practical execution on the ground.';

  const hasSiteSettings = Boolean(siteSettings && typeof siteSettings === 'object');
  const displayFooterDescription = typeof siteSettings?.footer_description === 'object'
    ? (siteSettings?.footer_description?.[lang] || siteSettings?.footer_description?.en || defaultFooterDescription)
    : (siteSettings?.footer_description || defaultFooterDescription);

  const rawEmail = (hasSiteSettings ? (siteSettings.email || '') : 'hello@8vice.com').trim();
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = cleanEmail ? `mailto:${cleanEmail}` : '';
  const displayAddress = (hasSiteSettings
    ? (siteSettings.address || '')
    : 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810'
  ).trim();
  const linkedinUrl = (hasSiteSettings ? (siteSettings.linkedin_url || '') : 'https://www.linkedin.com/company/8-vice/').trim();
  const instagramUrl = (hasSiteSettings ? (siteSettings.instagram_url || '') : 'https://www.instagram.com/8viceofficial').trim();

  const fallbackFooterInsights = [
    {
      slug: 'asean-china-strategic-partnership',
      t_i18n: {
        en: 'ASEAN–China Strategic Partnership & RCEP Tariff Utilization',
        id: 'Kemitraan Strategis ASEAN–Tiongkok & Pemanfaatan Tarif RCEP',
        cn: '东盟与中国全面战略伙伴关系与 RCEP 关税优惠应用'
      }
    },
    {
      slug: 'decoding-china-5-year-plan',
      t_i18n: {
        en: "Decoding China's 15th 5-Year Plan for Southeast Asia",
        id: 'Membedah Rencana Pembangunan ke-15 Tiongkok untuk Asia Tenggara',
        cn: '深度解读中国“十五五”规划对东南亚经贸走廊的启示'
      }
    },
    {
      slug: 'cross-border-payments-qris',
      t_i18n: {
        en: 'Cross-Border Payments: Indonesia–China QRIS & LCS',
        id: 'Pembayaran Lintas Batas: Interoperabilitas QRIS & LCS',
        cn: '跨境支付新潮流：印尼与中国 QRIS 互通与本币结算 (LCS)'
      }
    },
    {
      slug: 'tier-2-tier-3-indonesia-consumer-markets-distribution',
      t_i18n: {
        en: 'Beyond Greater Jakarta: Cracking Tier-2 & Tier-3 Markets',
        id: 'Melampaui Jabodetabek: Menembus Pasar Tier-2 & Tier-3',
        cn: '走出大雅加达：深度渗透印尼二三线核心消费市场'
      }
    },
    {
      slug: 'uu-pdp-indonesia-enterprise-saas-cloud-compliance',
      t_i18n: {
        en: "Mastering Indonesia's UU PDP for Enterprise & Cloud",
        id: 'Memahami UU PDP Indonesia untuk SaaS Korporat & Cloud',
        cn: '掌握印尼《个人数据保护法》(UU PDP) 企业级合规路线图'
      }
    }
  ];

  const featuredArticles = (Array.isArray(footerInsights) && footerInsights.length > 0 ? footerInsights : fallbackFooterInsights)
    .slice(0, 5)
    .map((art) => {
      const i18n = typeof art.t_i18n === 'object' && art.t_i18n ? art.t_i18n : null;
      const title = (i18n && (i18n[lang] || i18n.en)) || (typeof art.t === 'object' ? (art.t[lang] || art.t.en) : art.t) || art.slug;
      return {
        slug: art.slug,
        title,
      };
    });

  return (
    <>
      <footer className="footer" data-screen-label="Footer">
        <div className="container">
          <div className="footer__grid">
            
            {/* Column 1: Brand & Action */}
            <div className="footer__col footer__brand">
              <Link href="/" className="logo" aria-label="8vice home">
                <span className="logo__word">8vice</span>
                <span className="logo__dot"></span>
              </Link>
              <p className="footer__tag" style={{ fontSize: '13.8px', lineHeight: 1.68 }}>
                {displayFooterDescription}
              </p>
              
              <Link href="/contact" className="footer__cta-pill">
                <span>{isCn ? '预约免费咨询' : isId ? 'Konsultasi Gratis' : 'Book a Consultation'}</span>
                <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Column 2: Explore (Synced with Visible Navigation Menu) */}
            <div className="footer__col">
              <h3>{isCn ? '网站导航' : isId ? 'Eksplorasi' : 'Explore'}</h3>
              <div className="footer__nav-list">
                <Link href="/about">{t('nav.about') || (isCn ? '关于我们' : isId ? 'Tentang Kami' : 'About Us')}</Link>
                <Link href="/services">{t('nav.services') || (isCn ? '我们的服务' : isId ? 'Layanan Kami' : 'Our Services')}</Link>
                <Link href="/insights">{t('nav.insights_partnerships') || (isCn ? '商业洞察与合作' : isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships')}</Link>
                <Link href="/contact">{t('nav.contact') || (isCn ? '联系我们' : isId ? 'Hubungi Kami' : 'Contact Us')}</Link>
              </div>
            </div>

            {/* Column 3: Variative Featured Insights / Articles */}
            <div className="footer__col">
              <h3>{isCn ? '精选商业洞察' : isId ? 'Artikel Pilihan' : 'Featured Articles'}</h3>
              <div className="footer__nav-list">
                {featuredArticles.map((art) => (
                  <Link
                    key={art.slug}
                    href={`/insights/${art.slug}`}
                    style={{ lineHeight: 1.45, paddingBlock: '5px' }}
                  >
                    {art.title}
                  </Link>
                ))}
                <Link
                  href="/insights"
                  style={{
                    marginTop: '6px',
                    color: '#FF7B7B',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{isCn ? '浏览全部文章与洞察' : isId ? 'Lihat Semua Artikel' : 'Explore All Articles'}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="footer__col footer__contact">
              <h3>{isCn ? '联系方式与办公地址' : isId ? 'Kontak & Kantor' : 'Contact'}</h3>
              <div className="footer__contact-items">
                {cleanEmail && (
                  <div className="footer__contact-item">
                    <span className="lbl">{isCn ? '电子邮箱' : 'Email'}</span>
                    <a href={emailHref} className="val" aria-label={`Email ${cleanEmail}`}>
                      <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      <span>{cleanEmail}</span>
                    </a>
                  </div>
                )}

                {displayAddress && (
                  <div className="footer__contact-item">
                    <span className="lbl">{isCn ? '雅加达总部' : isId ? 'Kantor Jakarta' : 'Office'}</span>
                    <span className="val" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)' }}>
                      {displayAddress}
                    </span>
                  </div>
                )}
                
                <div className="footer__contact-item">
                  <span className="lbl">{isCn ? '服务时间' : isId ? 'Jam Layanan' : 'Service Hours'}</span>
                  <span
                    className="val footer__hours-val"
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255,255,255,0.72)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <svg className="ico ico-14" style={{ flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{isCn ? '工作日 (09:00 - 17:00)' : isId ? 'Hari Kerja (09.00 - 17.00)' : 'Weekdays (9 am-5 pm)'}</span>
                  </span>
                </div>
              </div>

              {/* Social Media */}
              {(linkedinUrl || instagramUrl) && (
                <div className="footer__social">
                  {linkedinUrl && (
                    <a href={linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <svg className="ico ico-20" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  )}
                  {instagramUrl && (
                    <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <svg className="ico ico-20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Dedicated Newsletter Subscription Section */}
          <div className="footer__newsletter-section">
            <div className="footer__newsletter-info">
              <div className="footer__newsletter-eyebrow">
                <span className="footer__newsletter-dot" />
                <span>{isCn ? '订阅商业洞察简报' : isId ? 'Berlangganan Newsletter' : 'Subscribe Newsletter'}</span>
              </div>
              <h4>
                {isCn
                  ? '定期获取印尼–中国商业战略与市场研究精华'
                  : isId
                  ? 'Dapatkan Ringkasan Riset & Wawasan Lintas Negara Terbaru'
                  : 'Receive Curated Market Briefings & Cross-Border Intelligence'}
              </h4>
              <p>
                {isCn
                  ? '涵盖监管动向、重点产业报告与双边商业合作动态，直达您的邮箱。'
                  : isId
                  ? 'Wawasan regulasi, analisis industri prioritas, dan peluang ekspansi Indonesia–Tiongkok langsung ke inbox Anda.'
                  : 'Regulatory updates, priority sector briefings, and Indonesia–China partnership perspectives delivered to your inbox.'}
              </p>
            </div>

            <div className="footer__newsletter-form-wrap">
              <form
                onSubmit={handleSubscribe}
                className="footer__newsletter-form"
                toolname="subscribe_newsletter"
                tooldescription="Subscribe to the 8vice cross-border business intelligence and regulatory updates newsletter."
              >
                <label
                  htmlFor="footer-newsletter-email"
                  style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}
                >
                  {isCn ? '邮箱地址' : isId ? 'Alamat Email Newsletter' : 'Newsletter Email Address'}
                </label>
                <input
                  type="text"
                  name="website_url"
                  value={data.website_url}
                  onChange={(e) => setData('website_url', e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  placeholder={isCn ? '输入您的企业邮箱地址...' : isId ? 'Masukkan alamat email Anda...' : 'Enter your email address...'}
                  aria-label={isCn ? '邮箱地址' : isId ? 'Alamat Email Newsletter' : 'Newsletter Email Address'}
                  toolparamdescription="Subscriber work email address"
                  disabled={processing}
                  className="footer__newsletter-input"
                />
                <button
                  type="submit"
                  disabled={processing}
                  className="footer__newsletter-btn"
                >
                  {processing
                    ? (isCn ? '提交中...' : isId ? 'Mengirim...' : 'Sending...')
                    : (isCn ? '立即订阅' : isId ? 'Subscribe' : 'Subscribe')}
                </button>
              </form>

              {errors.email && (
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#FF7B7B' }}>
                  {errors.email}
                </div>
              )}

              {subAlert && (
                <div
                  role="status"
                  style={{
                    marginTop: '10px',
                    padding: '9px 12px',
                    borderRadius: '10px',
                    fontSize: '12.5px',
                    lineHeight: 1.4,
                    background: subAlert.type === 'success' ? 'rgba(16, 185, 129, 0.14)' : 'rgba(230, 57, 70, 0.16)',
                    border: `1px solid ${subAlert.type === 'success' ? 'rgba(16, 185, 129, 0.42)' : 'rgba(230, 57, 70, 0.45)'}`,
                    color: subAlert.type === 'success' ? '#6EE7B7' : '#FCA5A5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{subAlert.type === 'success' ? '✓' : '!'}</span>
                  <span>{subAlert.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} 8vice. All rights reserved.</span>
            
            <div className="footer__bottom-badge">
              <span className="footer__bottom-pulse"></span>
              <span>{isCn ? '为中资与全球企业深度解码印尼市场' : isId ? 'Indonesia, Terdekode untuk Bisnis Global' : 'Indonesia, Decoded for Chinese & Global Businesses'}</span>
            </div>

            <div className="footer__bottom-links">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                style={{ background: 'transparent', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                {isCn ? '隐私与数据保护政策' : isId ? 'Kebijakan Privasi' : 'Privacy Policy'}
              </button>
              <span style={{ opacity: 0.3 }}>·</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                style={{ background: 'transparent', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                {isCn ? '咨询服务条款' : isId ? 'Syarat & Ketentuan' : 'Terms of Engagement'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* LEGAL DIALOG MODAL (PRIVACY & TERMS OF ENGAGEMENT)                       */}
      {/* ========================================================================= */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(5, 6, 8, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveLegalModal(null);
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '88vh',
              background: '#0D0E13',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '24px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75), 0 0 40px rgba(230, 57, 70, 0.16)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              color: '#FFFFFF'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: 'rgba(230, 57, 70, 0.12)',
                    color: '#E63946',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 id="legal-modal-title" style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
                    {activeLegalModal === 'privacy'
                      ? (isCn ? '隐私与个人数据保护政策' : isId ? 'Kebijakan Privasi & Perlindungan Data' : 'Privacy & Data Protection Policy')
                      : (isCn ? '战略咨询与客户合作条款' : isId ? 'Syarat & Ketentuan Penugasan' : 'Terms of Advisory & Client Engagement')}
                  </h3>
                  <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    PT Delapan Solusi Penasihat (8vice) · Jakarta, Indonesia
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close dialog"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div
              style={{
                padding: '28px',
                overflowY: 'auto',
                fontSize: '14.5px',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.78)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {activeLegalModal === 'privacy' ? (
                isCn ? (
                  <>
                    <p>
                      <strong>1. 保密承诺与印尼《个人数据保护法》合规</strong><br />
                      8vice 严格遵守印度尼西亚共和国《个人数据保护法》（UU PDP No. 27/2022）及国际合规治理标准，全力保障企业客户商业机密、研究文档及个人联络信息的安全与完整。
                    </p>
                    <p>
                      <strong>2. 信息收集与使用目的</strong><br />
                      通过本网站提交的所有市场需求、商务资料及联系方式，仅用于战略咨询评估、印中双边商务配对对接，或履行付费研究报告的授权交付。
                    </p>
                    <p>
                      <strong>3. 第三方数据保护与保密协议（NDA）</strong><br />
                      未经客户书面授权或签署保密协议（NDA），8vice 绝不向任何第三方出售、出租或转让客户商业信息。
                    </p>
                  </>
                ) : isId ? (
                  <>
                    <p>
                      <strong>1. Komitmen Kerahasiaan & PDP Indonesia</strong><br />
                      8vice berkomitmen menjaga integritas data klien korporasi, dokumen riset, dan informasi perorangan sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) Republik Indonesia dan standar tata kelola kepatuhan internasional.
                    </p>
                    <p>
                      <strong>2. Penggunaan Informasi Penugasan</strong><br />
                      Setiap informasi pasar, data komersial, materi kontak, dan korespondensi yang disampaikan melalui situs ini semata-mata digunakan untuk evaluasi inisiasi kemitraan, konsultasi strategis, atau pemenuhan pengiriman dokumen riset berbayar.
                    </p>
                    <p>
                      <strong>3. Batasan Berbagi Data Pihak Ketiga</strong><br />
                      Kami tidak pernah menjual, menyewakan, atau memindahtangankan data identitas klien kepada pihak ketiga mana pun tanpa persetujuan tertulis (*Non-Disclosure Agreement*).
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Data Protection & Indonesia PDP Law Compliance</strong><br />
                      8vice is committed to safeguarding corporate client data, proprietary market insights, and institutional correspondence in strict compliance with Indonesia&apos;s Personal Data Protection Law (Law No. 27/2022) and international security best practices.
                    </p>
                    <p>
                      <strong>2. Purpose of Information Processing</strong><br />
                      Information submitted through our digital channels is utilized exclusively for strategic advisory evaluation, bilateral business matching facilitation, or fulfillment of licensed research paper access.
                    </p>
                    <p>
                      <strong>3. Non-Disclosure & Third-Party Protections</strong><br />
                      Under no circumstances does 8vice sell, rent, or distribute client intelligence to third parties without prior mutual Non-Disclosure Agreement (NDA) covenants.
                    </p>
                  </>
                )
              ) : (
                isCn ? (
                  <>
                    <p>
                      <strong>1. 战略咨询服务范围</strong><br />
                      8vice 发布的市场研究报告、行业简报及战略路线图均基于独立专业的调研方法论编制，旨在为跨境扩张与投资决策提供高价值战略参考。
                    </p>
                    <p>
                      <strong>2. 知识产权与研究报告许可</strong><br />
                      所有研究出版物、量化数据模型及印中产业蓝图文档均受 8vice 知识产权保护。高管版与企业版许可严格按照约定的授权席位范围使用。
                    </p>
                    <p>
                      <strong>3. 政企沟通与合规透明度</strong><br />
                      所有政府关系对接与公私部门对话均通过合法、透明的官方渠道开展，严格遵守反腐败准则及双边投资法规。
                    </p>
                  </>
                ) : isId ? (
                  <>
                    <p>
                      <strong>1. Ruang Lingkup Penugasan Konsultasi</strong><br />
                      Kajian, artikel riset, dan analisis komersial yang dipublikasikan oleh 8vice disiapkan berdasarkan metodologi riset independen. Informasi ini bersifat strategis dan ditujukan sebagai panduan awal ekspansi pasar.
                    </p>
                    <p>
                      <strong>2. Hak Cipta & Lisensi Research Paper</strong><br />
                      Seluruh publikasi riset, data model (.xlsx), dan dokumen kajian China-Indonesia Blueprint dilindungi hak cipta intelektual 8vice. Lisensi Eksekutif dan Korporat diberikan sesuai ketentuan hak pakai yang disepakati.
                    </p>
                    <p>
                      <strong>3. Integritas Hubungan Pemerintah & Regulasi</strong><br />
                      Seluruh fasilitasi kelembagaan publik-swasta dijalankan melalui jalur resmi, transparan, dan mematuhi etika anti-penyuapan serta peraturan penanaman modal bilateral.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Advisory Scope of Engagement</strong><br />
                      Market analyses, intelligence briefs, and strategic roadmaps prepared by 8vice represent independent professional evaluations aimed at facilitating cross-border expansion and investment decisions.
                    </p>
                    <p>
                      <strong>2. Intellectual Property & Research Licensing</strong><br />
                      All research publications, quantitative datasets, and bilateral industrial blueprints remain the intellectual property of 8vice. Executive and Corporate licenses are granted strictly per user seat covenants.
                    </p>
                    <p>
                      <strong>3. Regulatory & Institutional Transparency</strong><br />
                      All government liaison and public-private dialogue engagements are conducted through sanctioned, compliant channels adhering to anti-corruption standards and statutory investment codes.
                    </p>
                  </>
                )
              )}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacy')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeLegalModal === 'privacy' ? 'rgba(230, 57, 70, 0.2)' : 'transparent',
                    color: activeLegalModal === 'privacy' ? '#FF7B7B' : 'rgba(255, 255, 255, 0.6)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {isCn ? '隐私政策' : isId ? 'Privasi' : 'Privacy'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('terms')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeLegalModal === 'terms' ? 'rgba(230, 57, 70, 0.2)' : 'transparent',
                    color: activeLegalModal === 'terms' ? '#FF7B7B' : 'rgba(255, 255, 255, 0.6)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {isCn ? '服务条款' : isId ? 'Ketentuan' : 'Terms'}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isCn ? '我知道了' : isId ? 'Tutup' : 'Understood'}
              </button>
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        <ChatFloatingWidget />
      </Suspense>

      {/* Floating Newsletter Toast Alert */}
      {subAlert && typeof document !== 'undefined' && createPortal(
        <div
          role="alert"
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 999999,
            maxWidth: '380px',
            padding: '14px 18px',
            borderRadius: '14px',
            background: subAlert.type === 'success' ? 'rgba(10, 26, 20, 0.96)' : 'rgba(28, 12, 14, 0.96)',
            border: `1px solid ${subAlert.type === 'success' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(230, 57, 70, 0.5)'}`,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}
        >
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: subAlert.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(230, 57, 70, 0.2)',
              color: subAlert.type === 'success' ? '#34D399' : '#F87171',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '13px',
              flexShrink: 0,
              marginTop: '1px'
            }}
          >
            {subAlert.type === 'success' ? '✓' : '!'}
          </span>
          <div style={{ flex: 1, fontSize: '13.5px', lineHeight: 1.45, color: 'rgba(255, 255, 255, 0.92)' }}>
            {subAlert.text}
          </div>
          <button
            type="button"
            onClick={() => setSubAlert(null)}
            aria-label="Close alert"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.55)',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '0 2px',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
