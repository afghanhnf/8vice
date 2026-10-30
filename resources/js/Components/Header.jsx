import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import { useTranslation } from '@/Contexts/TranslationContext';
import SearchModal from '@/Components/SearchModal';

export default function Header() {
  const { url, props } = usePage();
  const siteSettings = props?.siteSettings;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);


  const isActive = (path) => url === path || url.startsWith(path + '/');

  const getLangUrl = (targetLang) => {
    let currentUrl = typeof window !== 'undefined' ? window.location.pathname : url;

    if (!currentUrl.startsWith('/')) currentUrl = '/' + currentUrl;

    let finalUrl = currentUrl;
    if (targetLang === 'id') {
      if (!currentUrl.startsWith('/id/') && currentUrl !== '/id') {
        finalUrl = '/id' + (currentUrl === '/' ? '' : currentUrl);
      }
    } else {
      if (currentUrl.startsWith('/id/') || currentUrl === '/id') {
        finalUrl = currentUrl.replace(/^\/id/, '') || '/';
      }
    }

    return finalUrl;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleEscape);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;
  const displayTagline = typeof siteSettings?.tagline === 'object'
    ? (siteSettings?.tagline?.[lang] || siteSettings?.tagline?.en || 'Indonesia, Decoded for Chinese Businesses')
    : (siteSettings?.tagline || 'Indonesia, Decoded for Chinese Businesses');

  return (
    <>
      {/* Top Bar / Head Informasi */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar__inner">
            <div className="top-bar__tagline">{displayTagline}</div>
            <div className="top-bar__contact">
              <a
                href={emailHref}
                aria-label={`Email ${cleanEmail}`}
                className="top-bar__email-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="top-bar__email-text" style={{ fontSize: '12.5px' }}>{cleanEmail}</span>
              </a>
              {(siteSettings?.instagram_url || 'https://www.instagram.com/8viceofficial') && (
                <a href={siteSettings?.instagram_url || 'https://www.instagram.com/8viceofficial'} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              )}
              {(siteSettings?.linkedin_url || 'https://www.linkedin.com/company/8-vice/') && (
                <a href={siteSettings?.linkedin_url || 'https://www.linkedin.com/company/8-vice/'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              )}
              <button
                type="button"
                onClick={() => setIsWeChatModalOpen(true)}
                aria-label="WeChat QR Code"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  opacity: 0.85
                }}
                title={lang === 'id' ? 'Buka QR Code WeChat 8vice' : 'Scan 8vice WeChat QR Code'}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </button>
              {siteSettings?.whatsapp_url && (
                <a href={siteSettings.whatsapp_url} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Styles for Navigation Contact Pill */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .nav__contact-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.92);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .nav__contact-pill:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.35);
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.12);
        }
        .nav__contact-pill:active {
          transform: translateY(0);
        }
        .nav__contact-pill.is-current {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
        }
      ` }} />

      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`} id="header">
        <div className="header__inner container">
          <Link href="/" className="logo" aria-label="8vice home">
            <img src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" />
          </Link>

          <nav className="nav" aria-label="Primary">
            {/* Note: Home menu hidden per client instruction, logo points to home */}

            <div className="nav__item">
              <Link href="/about" className={`nav__link${isActive('/about') ? ' is-current' : ''}`}>{t('nav.about')}</Link>
            </div>

            {/* 3. Services (6 Core Capabilities Dropdown) */}
            <div className={`nav__item ${isServicesOpen ? 'is-open' : ''}`} id="services-item" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <Link href="/services" className={`nav__link${isActive('/services') ? ' is-current' : ''}`} id="services-trigger" aria-haspopup="true" aria-expanded={isServicesOpen}>
                {t('nav.services')}
                <svg className="ico ico-16 nav__caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown dropdown--svc" role="menu" aria-label="Services" style={{ minWidth: '380px', padding: '12px' }}>
                <Link className="dropdown__svc" href="/services/advisory" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_strategic_advisory')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_strategic_advisory_desc')}</div>
                  </div>
                </Link>

                <Link className="dropdown__svc" href="/services/gov-relations" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_gov_relations')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_gov_relations_desc')}</div>
                  </div>
                </Link>

                <Link className="dropdown__svc" href="/services/business-matching" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_business_matching')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_business_matching_desc')}</div>
                  </div>
                </Link>

                <Link className="dropdown__svc" href="/services/comms" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_strategic_comms')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_strategic_comms_desc')}</div>
                  </div>
                </Link>

                <Link className="dropdown__svc" href="/services/media-relations" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_media_relations')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_media_relations_desc')}</div>
                  </div>
                </Link>

                <Link className="dropdown__svc" href="/services/investment" onClick={() => setIsServicesOpen(false)}>
                  <div className="dropdown__svc-icon-box" style={{ background: 'rgba(214, 40, 40, 0.12)', color: 'var(--color-red)' }}>
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title" style={{ fontSize: '13.5px' }}>{t('nav.svc_investment_dev')}</div>
                    <div className="dropdown__svc-desc">{t('nav.svc_investment_dev_desc')}</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 4. Indonesia-China Gateway */}
            <div className="nav__item">
              <Link href="/gateway" className={`nav__link${isActive('/gateway') ? ' is-current' : ''}`}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-red)', display: 'inline-block' }}></span>
                  {t('nav.gateway')}
                </span>
              </Link>
            </div>

            {/* 5. Industries & Opportunities */}
            <div className="nav__item">
              <Link href="/industries" className={`nav__link${isActive('/industries') ? ' is-current' : ''}`}>{t('nav.industries')}</Link>
            </div>

            {/* 6. Insights & Partnerships */}
            <div className="nav__item">
              <Link href="/insights" className={`nav__link${(isActive('/insights') || isActive('/article')) ? ' is-current' : ''}`}>{t('nav.insights_partnerships')}</Link>
            </div>

            {/* 7. Contact Us (White Opacity Pill, No Red Text) */}
            <div className="nav__item" style={{ marginLeft: '6px' }}>
              <Link
                href="/contact"
                className={`nav__contact-pill${isActive('/contact') ? ' is-current' : ''}`}
              >
                {t('nav.contact')}
              </Link>
            </div>

            <div className="nav__utils">
              <div className="lang-toggle" role="group" aria-label="Language">
                <a href={getLangUrl('en')} className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}>EN</a>
                <a href={getLangUrl('id')} className={`lang-btn ${lang === 'id' ? 'is-active' : ''}`}>ID</a>
              </div>

              {/* Search */}
              <button className="login-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)} style={{ background: 'transparent', border: 'none' }}>
                <svg className="ico ico-20" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </div>
          </nav>

          <button className="hamburger" id="hamburger" aria-label="Open menu" onClick={() => setIsMobileMenuOpen(true)}>
            <svg className="ico ico-24" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`} id="drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
      <aside className={`drawer ${isMobileMenuOpen ? 'is-open' : ''}`} id="drawer" aria-label="Mobile menu">
        <div className="drawer__head">
          <Link href="/" className="logo"><img src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" /></Link>
          <button className="drawer__close" id="drawer-close" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="ico ico-24" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <Link className="drawer__link" href="/about">{t('nav.about')}</Link>
        <Link className="drawer__link" href="/services">{t('nav.services')}</Link>
        <div className="drawer__sub">
          <Link className="drawer__sublink" href="/services/advisory">{t('nav.svc_strategic_advisory')}</Link>
          <Link className="drawer__sublink" href="/services/gov-relations">{t('nav.svc_gov_relations')}</Link>
          <Link className="drawer__sublink" href="/services/business-matching">{t('nav.svc_business_matching')}</Link>
          <Link className="drawer__sublink" href="/services/comms">{t('nav.svc_strategic_comms')}</Link>
          <Link className="drawer__sublink" href="/services/media-relations">{t('nav.svc_media_relations')}</Link>
          <Link className="drawer__sublink" href="/services/investment">{t('nav.svc_investment_dev')}</Link>
        </div>
        <Link className="drawer__link" href="/gateway" onClick={() => setIsMobileMenuOpen(false)}>
          <span style={{ color: 'var(--color-red)', marginRight: '6px' }}>●</span>
          {t('nav.gateway')}
        </Link>
        <div className="drawer__sub">
          <Link className="drawer__sublink" href="/gateway#china-to-indonesia" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gateway_c2i')}</Link>
          <Link className="drawer__sublink" href="/gateway#indonesia-to-china" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.gateway_i2c')}</Link>
        </div>
        <Link className="drawer__link" href="/industries" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.industries')}</Link>
        <Link className="drawer__link" href="/insights" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.insights_partnerships')}</Link>
        <div style={{ marginTop: '16px', marginBottom: '8px' }}>
          <Link
            className="nav__contact-pill"
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '13.5px' }}
          >
            {t('nav.contact')}
          </Link>
        </div>
        <div className="drawer__utils">
          <span className="drawer__util-lbl">Language</span>
          <div className="lang-toggle" role="group" aria-label="Language">
            <a href={getLangUrl('en')} className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}>EN</a>
            <a href={getLangUrl('id')} className={`lang-btn ${lang === 'id' ? 'is-active' : ''}`}>ID</a>
          </div>
          <button onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }} className="drawer__login" aria-label="Search" style={{ width: '100%', justifyContent: 'center' }}>
            <svg className="ico ico-20" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </aside>

      <SearchModal isOpen={isSearchOpen} onOpen={() => setIsSearchOpen(true)} onClose={() => setIsSearchOpen(false)} lang={lang} />

      {/* WeChat QR Code Modal */}
      {isWeChatModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(5, 6, 8, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsWeChatModalOpen(false);
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              background: '#0D0E13',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '24px',
              padding: '32px 28px',
              textAlign: 'center',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.18)',
              color: '#FFFFFF'
            }}
          >
            <button
              type="button"
              onClick={() => setIsWeChatModalOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(7, 193, 96, 0.15)',
                color: '#07C160',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '26px', height: '26px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 6px', color: '#FFFFFF' }}>
              {lang === 'id' ? 'Saluran Resmi WeChat 8vice' : '8vice Official WeChat Channel'}
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.65)', margin: '0 0 20px' }}>
              {lang === 'id'
                ? 'Pindai kode QR ini menggunakan aplikasi WeChat untuk terhubung langsung dengan tim perwakilan kami.'
                : 'Scan this QR code with WeChat to connect directly with our bilateral advisory desk.'}
            </p>

            <div
              style={{
                width: '210px',
                height: '210px',
                margin: '0 auto 20px',
                padding: '10px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="/images/wechat.jpeg"
                alt="8vice WeChat QR"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <div
              style={{
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '12.5px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              WeChat ID: <strong style={{ color: '#07C160' }}>eightvice</strong> · SOHO Pancoran Jakarta
            </div>
          </div>
        </div>
      )}
    </>
  );
}
