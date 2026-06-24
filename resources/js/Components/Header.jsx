import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function Header() {
  const { url } = usePage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (path) => url === path || url.startsWith(path + '/');

  const getLangUrl = (targetLang) => {
    let currentUrl = typeof window !== 'undefined' ? window.location.pathname : url;
    
    const isStaticPreview = typeof window !== 'undefined' && window.location.hostname === 'afghanhnf.github.io';
    if (isStaticPreview) {
      currentUrl = currentUrl.replace(/^\/8vice/, '');
    }
    if (!currentUrl.startsWith('/')) currentUrl = '/' + currentUrl;

    let finalUrl = currentUrl;
    if (targetLang === 'id') {
      if (!currentUrl.startsWith('/id/') && currentUrl !== '/id') {
          finalUrl = '/id' + (currentUrl === '/' ? '' : currentUrl);
      }
    } else {
      finalUrl = currentUrl.replace(/^\/id(\/|$)/, '/') || '/';
      finalUrl = finalUrl.replace(/\/\//g, '/');
    }

    if (isStaticPreview) {
      return '/8vice' + finalUrl;
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
        if (isSearchOpen) setIsSearchOpen(false);
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

  return (
    <>
      {/* Top Bar / Head Informasi */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar__inner">
            <div className="top-bar__tagline">Indonesia, Decoded for Chinese Businesses</div>
            <div className="top-bar__contact">
              <a href="mailto:hello@8vice.com" aria-label="Email us">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://wechat.com" target="_blank" rel="noopener noreferrer" aria-label="WeChat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`} id="header">
        <div className="header__inner container">
          <Link href="/" className="logo" aria-label="8vice home">
            <img src="/images/profil/8vice-logo.png" alt="8vice" className="logo__img" />
          </Link>

          <nav className="nav" aria-label="Primary">
            <div className="nav__item"><Link href="/about" className={`nav__link${isActive('/about') ? ' is-current' : ''}`}>{t('nav.about')}</Link></div>

            <div className={`nav__item ${isServicesOpen ? 'is-open' : ''}`} id="services-item" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <Link href="/services" className={`nav__link${isActive('/services') ? ' is-current' : ''}`} id="services-trigger" aria-haspopup="true" aria-expanded="false">
                {t('nav.services')}
                <svg className="ico ico-16 nav__caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown dropdown--svc" role="menu" aria-label="Our Services">
                <Link className="dropdown__svc" href="/market-intelligence">
                  <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  <div>
                    <div className="dropdown__svc-title">{t('nav.market_intelligence')}</div>
                    <div className="dropdown__svc-desc">{t('nav.mi_desc')}</div>
                  </div>
                </Link>
                <Link className="dropdown__svc" href="/consultancy">
                  <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <div>
                    <div className="dropdown__svc-title">{t('nav.consultancy')}</div>
                    <div className="dropdown__svc-desc">{t('nav.consultancy_desc')}</div>
                  </div>
                </Link>
                <Link className="dropdown__svc" href="/training">
                  <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    <line x1="8" y1="7" x2="16" y2="7"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <div>
                    <div className="dropdown__svc-title">{t('nav.training')}</div>
                    <div className="dropdown__svc-desc">{t('nav.training_desc')}</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="nav__item"><Link href="/client" className={`nav__link${isActive('/client') ? ' is-current' : ''}`}>{t('nav.clients')}</Link></div>
            <div className="nav__item"><Link href="/case-study" className={`nav__link${isActive('/case-study') ? ' is-current' : ''}`}>{t('nav.case')}</Link></div>

            {/* Insight / Article */}
            <div className="nav__item"><Link href="/article" className={`nav__link${isActive('/article') ? ' is-current' : ''}`}>{t('nav.article')}</Link></div>

            <div className="nav__item"><Link href="/career" className={`nav__link${isActive('/career') ? ' is-current' : ''}`}>{t('nav.career')}</Link></div>
            <div className="nav__item"><Link href="/contact" className={`nav__link${isActive('/contact') ? ' is-current' : ''}`}>{t('nav.contact')}</Link></div>

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
          <Link href="/" className="logo"><img src="/images/profil/8vice-logo.png" alt="8vice" className="logo__img" /></Link>
          <button className="drawer__close" id="drawer-close" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="ico ico-24" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <Link className="drawer__link" href="/about">{t('nav.about')}</Link>
        <Link className="drawer__link" href="/services">{t('nav.services')}</Link>
        <div className="drawer__sub">
          <Link className="drawer__sublink" href="/market-intelligence">{t('nav.market_intelligence')}</Link>
          <Link className="drawer__sublink" href="/consultancy">{t('nav.consultancy')}</Link>
          <Link className="drawer__sublink" href="/training">{t('nav.training')}</Link>
        </div>
        <Link className="drawer__link" href="/client">{t('nav.clients')}</Link>
        <Link className="drawer__link" href="/case-study">{t('nav.case')}</Link>
        <Link className="drawer__link" href="/article">{t('nav.article')}</Link>
        <Link className="drawer__link" href="/career">{t('nav.career')}</Link>
        <Link className="drawer__link" href="/contact">{t('nav.contact')}</Link>
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

      {/* Smartsearch Modal */}
      {isSearchOpen && (
        <div className="smartsearch-modal">
          <div className="smartsearch-backdrop" onClick={() => setIsSearchOpen(false)}></div>
          <div className="smartsearch-dialog">
            <div className="smartsearch-header">
              <svg className="ico ico-20" viewBox="0 0 24 24" style={{ marginLeft: '20px', color: '#999' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search 8vice insights, services, and cases..." autoFocus className="smartsearch-input" />
              <button onClick={() => setIsSearchOpen(false)} className="smartsearch-close">
                <svg className="ico ico-20" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                <span>ESC</span>
              </button>
            </div>
            <div className="smartsearch-body">
              <div className="smartsearch-empty">
                <p>Type to start searching...</p>
                <div className="smartsearch-suggestions">
                  <span>Try:</span>
                  <Link href="/consultancy" onClick={() => setIsSearchOpen(false)}>Consultancy</Link>
                  <Link href="/article" onClick={() => setIsSearchOpen(false)}>Market Entry</Link>
                  <Link href="/case-study" onClick={() => setIsSearchOpen(false)}>Case Studies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
