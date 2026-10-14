import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function Header() {
  const { url, props } = usePage();
  const siteSettings = props?.siteSettings;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState({ results: [], count: 0, recommended_services: [] });
  const [isSearching, setIsSearching] = useState(false);

  const isId = lang === 'id';

  const getTypeClass = (type = '') => {
    const t = type.toLowerCase();
    if (t.includes('article') || t.includes('artikel') || t.includes('insight')) return 'article';
    if (t.includes('case')) return 'case';
    if (t.includes('training') || t.includes('pelatihan') || t.includes('course')) return 'training';
    if (t.includes('service') || t.includes('layanan')) return 'service';
    return 'page';
  };

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&lang=${lang}`)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data)) {
              setSearchData({ results: data, count: data.length, recommended_services: [] });
            } else {
              setSearchData({
                results: data?.results || [],
                count: data?.count || 0,
                recommended_services: data?.recommended_services || []
              });
            }
            setIsSearching(false);
          })
          .catch(() => {
            setSearchData({ results: [], count: 0, recommended_services: [] });
            setIsSearching(false);
          });
      }, 250);
      return () => clearTimeout(timer);
    } else {
      setSearchData({ results: [], count: 0, recommended_services: [] });
      setIsSearching(false);
    }
  }, [searchQuery, lang]);

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

  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : 'mailto:hello@8vice.com';
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
              <a href={emailHref} aria-label="Email us">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
              {(siteSettings?.wechat_url || siteSettings?.wechat_qr) && (
                <a href={siteSettings.wechat_url || siteSettings.wechat_qr || '#'} target="_blank" rel="noopener noreferrer" aria-label="WeChat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              )}
              {siteSettings?.whatsapp_url && (
                <a href={siteSettings.whatsapp_url} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ico ico-16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`} id="header">
        <div className="header__inner container">
          <Link href="/" className="logo" aria-label="8vice home">
            <img src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" />
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
                  <div className="dropdown__svc-icon-box">
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title">{t('nav.market_intelligence')}</div>
                    <div className="dropdown__svc-desc">{t('nav.mi_desc')}</div>
                  </div>
                  <svg className="dropdown__svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link className="dropdown__svc" href="/consultancy">
                  <div className="dropdown__svc-icon-box">
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title">{t('nav.consultancy')}</div>
                    <div className="dropdown__svc-desc">{t('nav.consultancy_desc')}</div>
                  </div>
                  <svg className="dropdown__svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link className="dropdown__svc" href="/training">
                  <div className="dropdown__svc-icon-box">
                    <svg className="dropdown__svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      <line x1="8" y1="7" x2="16" y2="7"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                  <div className="dropdown__svc-text">
                    <div className="dropdown__svc-title">{t('nav.training')}</div>
                    <div className="dropdown__svc-desc">{t('nav.training_desc')}</div>
                  </div>
                  <svg className="dropdown__svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
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
          <Link href="/" className="logo"><img src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" /></Link>
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
              <svg style={{ marginLeft: '24px', color: 'rgba(255,255,255,0.4)', width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder={isId ? "Ketik layanan, artikel, atau case study..." : "Search services, insights, case studies, or pages..."} 
                autoFocus 
                className="smartsearch-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  aria-label="Clear search input"
                  style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              )}
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="smartsearch-close" aria-label="Close search">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                <span>ESC</span>
              </button>
            </div>
            
            <div className="smartsearch-body">
              {searchQuery.trim().length > 1 ? (
                <div className="smartsearch-results">
                  {isSearching ? (
                    <div className="smartsearch-empty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <svg className="ico ico-20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none"></circle><path d="M12 2 A 10 10 0 0 1 22 12" stroke="var(--color-red)" strokeWidth="3" fill="none"></path></svg>
                      <span>{isId ? 'Mencari rekomendasi sesuai kata kunci...' : 'Searching recommendations...'}</span>
                    </div>
                  ) : searchData.results && searchData.results.length > 0 ? (
                    <>
                      <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>
                        {isId ? `${searchData.results.length} Rekomendasi Ditemukan` : `${searchData.results.length} Recommendations Found`}
                      </div>
                      <ul className="smartsearch-results-list">
                        {searchData.results.map((result, i) => (
                          <li key={i}>
                            <Link 
                              href={result.url} 
                              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} 
                              className="smartsearch-result-item"
                            >
                              <div className="smartsearch-result-content">
                                <div className="smartsearch-result-header">
                                  <span className={`smartsearch-badge smartsearch-badge--${getTypeClass(result.type)}`}>
                                    {result.type}
                                  </span>
                                </div>
                                <div className="smartsearch-result-title">{result.title}</div>
                                {result.desc && (
                                  <div className="smartsearch-result-desc">{result.desc}</div>
                                )}
                              </div>
                              <svg className="ico ico-16 smartsearch-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    /* Zero results fallback: Provide recommended services */
                    <div className="smartsearch-no-results">
                      <div className="smartsearch-no-results-alert">
                        <div style={{ fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                          {isId ? `Tidak ada hasil langsung untuk "${searchQuery}".` : `No direct matches found for "${searchQuery}".`}
                        </div>
                        <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.5 }}>
                          {isId 
                            ? 'Berikut rekomendasi layanan utama 8vice yang dirancang khusus untuk memandu ekspansi bisnis Anda di Indonesia:' 
                            : 'Here are our core recommended services designed to decode and de-risk your commercial expansion in Indonesia:'}
                        </div>
                      </div>

                      <div className="smartsearch-recommend-grid">
                        {(searchData.recommended_services || []).map((svc, idx) => (
                          <Link 
                            key={idx} 
                            href={svc.url} 
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="smartsearch-recommend-card"
                          >
                            <div className="smartsearch-recommend-card-head">
                              <span className="smartsearch-recommend-card-badge">
                                {svc.badge || (isId ? 'Layanan' : 'Service')}
                              </span>
                              <svg className="ico ico-16 smartsearch-recommend-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                            <div className="smartsearch-recommend-card-title">{svc.title}</div>
                            <div className="smartsearch-recommend-card-desc">{svc.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="smartsearch-empty">
                  <div style={{ marginBottom: '16px', fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
                    {isId ? 'Cari layanan, artikel analitis, atau studi kasus bisnis.' : 'Try searching for services, insights, or business cases.'}
                  </div>
                  <div className="smartsearch-suggestions">
                    <span style={{ fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {isId ? 'Pencarian Populer:' : 'Popular:'}
                    </span>
                    <button type="button" onClick={() => setSearchQuery('Market Intelligence')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Market Intelligence
                    </button>
                    <button type="button" onClick={() => setSearchQuery('Consultancy')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Consultancy
                    </button>
                    <button type="button" onClick={() => setSearchQuery('Training')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Training
                    </button>
                    <button type="button" onClick={() => setSearchQuery('Market Entry')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Market Entry
                    </button>
                    <button type="button" onClick={() => setSearchQuery('Case Studies')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Case Studies
                    </button>
                    <button type="button" onClick={() => setSearchQuery('Career')} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                      Career
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
