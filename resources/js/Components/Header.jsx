import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [copiedWechat, setCopiedWechat] = useState(false);
  const [showLangBanner, setShowLangBanner] = useState(false);
  const [detectedBrowserLang, setDetectedBrowserLang] = useState(null);
  const langDropdownRef = useRef(null);
  const langTimerRef = useRef(null);

  // Lock body scroll and handle ESC key when WeChat modal is open
  useEffect(() => {
    if (!isWeChatModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsWeChatModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWeChatModalOpen]);

  const handleCopyWechatId = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('eightvice');
      setCopiedWechat(true);
      setTimeout(() => setCopiedWechat(false), 2000);
    }
  };

  const normalizedUrl = (url || '/').replace(/^\/(id|cn)(\/|$)/, '/') || '/';
  const isActive = (path) => normalizedUrl === path || normalizedUrl.startsWith(path + '/');

  const getLangUrl = (targetLang) => {
    let currentUrl = typeof window !== 'undefined' ? window.location.pathname : url;
    if (!currentUrl.startsWith('/')) currentUrl = '/' + currentUrl;

    const cleanPath = currentUrl.replace(/^\/(id|cn)(\/|$)/, '/') || '/';
    if (targetLang === 'id') {
      return '/id' + (cleanPath === '/' ? '' : cleanPath);
    }
    if (targetLang === 'cn') {
      return '/cn' + (cleanPath === '/' ? '' : cleanPath);
    }
    return cleanPath;
  };

  const langOptions = [
    { code: 'en', short: 'EN', label: 'English', native: 'English' },
    { code: 'id', short: 'ID', label: 'Indonesia', native: 'Bahasa Indonesia' },
    { code: 'cn', short: 'CN', label: 'Mandarin', native: '中文 (简体)' },
  ];
  const currentLangOption = langOptions.find((o) => o.code === lang) || langOptions[0];

  // Auto-detect browser/device language & show top language alert banner
  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

    const ua = navigator.userAgent || '';
    const isBot = /bot|crawl|spider|lighthouse|pagespeed|gtmetrix|headless|inspect/i.test(ua) || navigator.webdriver;
    if (isBot) return;

    try {
      const rawLang = (
        (Array.isArray(navigator.languages) && navigator.languages[0]) ||
        navigator.language ||
        'en'
      ).toLowerCase();

      let detected = 'en';
      if (rawLang.startsWith('id') || rawLang.startsWith('in')) {
        detected = 'id';
      } else if (rawLang.startsWith('zh')) {
        detected = 'cn';
      }
      setDetectedBrowserLang(detected);

      const manualChoice = window.localStorage.getItem('8vice_lang_manual');
      const autoChecked = window.sessionStorage.getItem('8vice_lang_auto_checked');
      const bannerDismissed = window.localStorage.getItem('8vice_lang_alert_dismissed');

      if (!manualChoice && !autoChecked) {
        window.sessionStorage.setItem('8vice_lang_auto_checked', detected);
        if (detected !== lang) {
          window.location.replace(getLangUrl(detected));
          return;
        }
      }

      if (bannerDismissed !== '1') {
        setShowLangBanner(true);
      }
    } catch (err) {
      // Ignore storage errors in private browsing
    }
  }, [lang]);

  const handleSelectLanguage = (targetCode) => {
    try {
      window.localStorage.setItem('8vice_lang_manual', targetCode);
      window.localStorage.setItem('8vice_lang_alert_dismissed', '1');
    } catch (e) {}
    if (langTimerRef.current) clearTimeout(langTimerRef.current);
    setShowLangBanner(false);
    setIsLangOpen(false);
  };

  const handleDismissLangBanner = () => {
    try {
      window.localStorage.setItem('8vice_lang_alert_dismissed', '1');
    } catch (e) {}
    setShowLangBanner(false);
  };

  const handleLangEnter = () => {
    if (langTimerRef.current) clearTimeout(langTimerRef.current);
    setIsLangOpen(true);
  };

  const handleLangLeave = () => {
    if (langTimerRef.current) clearTimeout(langTimerRef.current);
    langTimerRef.current = setTimeout(() => {
      setIsLangOpen(false);
    }, 240);
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
        if (langTimerRef.current) clearTimeout(langTimerRef.current);
        if (isLangOpen) setIsLangOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        if (langTimerRef.current) clearTimeout(langTimerRef.current);
        setIsLangOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll();
    return () => {
      if (langTimerRef.current) clearTimeout(langTimerRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isSearchOpen, isLangOpen]);

  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;
  const defaultTagline = lang === 'cn'
    ? '通往印尼与中国的战略商业门户'
    : lang === 'id'
    ? 'Gerbang Strategis Anda Menuju Indonesia dan Tiongkok'
    : 'Indonesia, Decoded for Chinese Businesses';
  const displayTagline = typeof siteSettings?.tagline === 'object'
    ? (siteSettings?.tagline?.[lang] || siteSettings?.tagline?.en || defaultTagline)
    : (siteSettings?.tagline || defaultTagline);

  return (
    <>
      {/* Auto-Detected Language Alert Banner (Top of Viewport) */}
      {showLangBanner && (
        <div className="lang-auto-banner" role="region" aria-label="Language selection notice">
          <div className="container lang-auto-banner__inner">
            <div className="lang-auto-banner__text">
              <span className="lang-auto-banner__badge">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                {lang === 'cn' ? '智能语言匹配' : lang === 'id' ? 'Deteksi Bahasa Otomatis' : 'Auto-Detected Language'}
              </span>
              <span className="lang-auto-banner__msg">
                {lang === 'cn'
                  ? '系统已根据您的浏览器/设备匹配为中文。如果语言不合适，您可以随时切换：'
                  : lang === 'id'
                  ? 'Bahasa disesuaikan dengan perangkat/browser Anda. Kurang cocok? Silakan ubah bahasa:'
                  : 'Language matched to your device/browser. Prefer another language? Switch anytime:'}
              </span>
            </div>
            <div className="lang-auto-banner__actions">
              <div className="lang-auto-banner__pills" role="group" aria-label="Switch language">
                {langOptions.map((opt) => (
                  <a
                    key={opt.code}
                    href={getLangUrl(opt.code)}
                    onClick={() => handleSelectLanguage(opt.code)}
                    className={`lang-auto-banner__pill ${lang === opt.code ? 'is-active' : ''}`}
                  >
                    {opt.short} · {opt.code === 'cn' ? '中文' : opt.label}
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={handleDismissLangBanner}
                className="lang-auto-banner__close"
                aria-label={lang === 'cn' ? '关闭提示' : lang === 'id' ? 'Tutup pemberitahuan' : 'Dismiss notice'}
                title={lang === 'cn' ? '关闭' : lang === 'id' ? 'Tutup' : 'Dismiss'}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar / Head Informasi */}
      <div className={`top-bar ${showLangBanner ? 'has-lang-banner' : ''}`}>
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
        .lang-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px 0;
        }
        .lang-dropdown__trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-dropdown__trigger:hover,
        .lang-dropdown.is-open .lang-dropdown__trigger {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(230, 57, 70, 0.45);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }
        .lang-dropdown__caret {
          width: 13px;
          height: 13px;
          transition: transform 0.2s ease;
          opacity: 0.75;
        }
        .lang-dropdown.is-open .lang-dropdown__caret {
          transform: rotate(180deg);
        }
        .lang-dropdown__menu {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 176px;
          background: rgba(13, 15, 20, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.65), 0 0 24px rgba(230, 57, 70, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        /* Invisible hover bridge: prevents dropdown from disappearing when cursor moves between button and menu */
        .lang-dropdown__menu::before {
          content: "";
          position: absolute;
          top: -14px;
          left: -10px;
          right: -10px;
          height: 14px;
          background: transparent;
        }
        .lang-dropdown__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.18s ease;
        }
        .lang-dropdown__item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }
        .lang-dropdown__item.is-active {
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #FFFFFF;
          font-weight: 600;
        }
        .lang-dropdown__code {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 2px 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          color: #FF8A8A;
        }
        .lang-dropdown__item.is-active .lang-dropdown__code {
          background: #E63946;
          color: #FFFFFF;
        }
        .lang-auto-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          min-height: 36px;
          z-index: 10020;
          background: linear-gradient(90deg, rgba(13, 15, 22, 0.98) 0%, rgba(28, 14, 19, 0.98) 50%, rgba(13, 15, 22, 0.98) 100%);
          border-bottom: 1px solid rgba(230, 57, 70, 0.38);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          padding: 4px 0;
        }
        .lang-auto-banner__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          flex-wrap: wrap;
        }
        .lang-auto-banner__text {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.35;
        }
        .lang-auto-banner__badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.18);
          border: 1px solid rgba(230, 57, 70, 0.42);
          color: #FF8A8A;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .lang-auto-banner__actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }
        .lang-auto-banner__pills {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .lang-auto-banner__pill {
          display: inline-flex;
          align-items: center;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          text-decoration: none;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .lang-auto-banner__pill:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
        }
        .lang-auto-banner__pill.is-active {
          background: #E63946;
          border-color: #E63946;
          color: #FFFFFF;
        }
        .lang-auto-banner__close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.8);
          font-size: 11px;
          cursor: pointer;
          transition: all 0.18s ease;
          padding: 0;
        }
        .lang-auto-banner__close:hover {
          background: rgba(230, 57, 70, 0.3);
          color: #FFFFFF;
        }
        .top-bar.has-lang-banner {
          opacity: 0;
          pointer-events: none;
        }
        .header.has-lang-banner.is-scrolled {
          top: 36px;
        }
        @media (max-width: 768px) {
          .lang-auto-banner {
            padding: 6px 0;
          }
          .lang-auto-banner__badge {
            display: none;
          }
          .lang-auto-banner__text {
            font-size: 11px;
            flex: 1 1 auto;
          }
          .header.has-lang-banner {
            top: 38px !important;
          }
        }
      ` }} />

      <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${showLangBanner ? 'has-lang-banner' : ''}`} id="header">
        <div className="header__inner container">
          <Link href="/" className="logo" aria-label="8vice home">
            <img loading="eager" fetchPriority="high" decoding="async" src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" />
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
              <div
                ref={langDropdownRef}
                className={`lang-dropdown ${isLangOpen ? 'is-open' : ''}`}
                onMouseEnter={handleLangEnter}
                onMouseLeave={handleLangLeave}
              >
                <button
                  type="button"
                  className="lang-dropdown__trigger"
                  aria-haspopup="true"
                  aria-expanded={isLangOpen}
                  aria-label="Select Language"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (langTimerRef.current) clearTimeout(langTimerRef.current);
                    setIsLangOpen((prev) => !prev);
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>{currentLangOption.short}</span>
                  <svg className="lang-dropdown__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="lang-dropdown__menu" role="menu" aria-label="Language options">
                    {langOptions.map((opt) => (
                      <a
                        key={opt.code}
                        href={getLangUrl(opt.code)}
                        role="menuitem"
                        className={`lang-dropdown__item ${lang === opt.code ? 'is-active' : ''}`}
                        onClick={() => handleSelectLanguage(opt.code)}
                      >
                        <span>{opt.native}</span>
                        <span className="lang-dropdown__code">{opt.short}</span>
                      </a>
                    ))}
                  </div>
                )}
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
          <Link href="/" className="logo"><img loading="lazy" decoding="async" src="/images/profil/8vice-logo.webp" alt="8vice" className="logo__img" width="100" height="32" /></Link>
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
          <span className="drawer__util-lbl">{lang === 'cn' ? '语言选择' : lang === 'id' ? 'Bahasa' : 'Language'}</span>
          <div className="lang-toggle" role="group" aria-label="Language">
            <a href={getLangUrl('en')} onClick={() => handleSelectLanguage('en')} className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}>EN</a>
            <a href={getLangUrl('id')} onClick={() => handleSelectLanguage('id')} className={`lang-btn ${lang === 'id' ? 'is-active' : ''}`}>ID</a>
            <a href={getLangUrl('cn')} onClick={() => handleSelectLanguage('cn')} className={`lang-btn ${lang === 'cn' ? 'is-active' : ''}`}>CN</a>
          </div>
          <button onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }} className="drawer__login" aria-label="Search" style={{ width: '100%', justifyContent: 'center' }}>
            <svg className="ico ico-20" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </aside>

      <SearchModal isOpen={isSearchOpen} onOpen={() => setIsSearchOpen(true)} onClose={() => setIsSearchOpen(false)} lang={lang} />

      {/* WeChat QR Code Modal (Rendered via Portal to document.body) */}
      {isWeChatModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WeChat Official QR Modal"
          style={{
            position: 'fixed',
            inset: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            height: '100dvh',
            zIndex: 999999,
            background: 'rgba(5, 6, 8, 0.86)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            overflowY: 'auto'
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
              padding: '34px 28px 28px',
              textAlign: 'center',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.18)',
              color: '#FFFFFF',
              margin: 'auto'
            }}
          >
            <button
              type="button"
              onClick={() => setIsWeChatModalOpen(false)}
              aria-label={lang === 'cn' ? '关闭' : lang === 'id' ? 'Tutup' : 'Close'}
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
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
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
                marginBottom: '14px'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '26px', height: '26px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 6px', color: '#FFFFFF' }}>
              {lang === 'cn' ? '8vice 官方微信咨询通道' : lang === 'id' ? 'Saluran Resmi WeChat 8vice' : '8vice Official WeChat Channel'}
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.68)', margin: '0 0 18px' }}>
              {lang === 'cn'
                ? '使用微信扫描下方官方二维码，或直接添加微信号与我们的印中双边战略顾问团队建立联系。'
                : lang === 'id'
                ? 'Pindai kode QR ini menggunakan aplikasi WeChat, atau salin WeChat ID kami untuk terhubung langsung.'
                : 'Scan this QR code with WeChat or copy our WeChat ID to connect directly with our advisory desk.'}
            </p>

            <div
              style={{
                width: '210px',
                height: '210px',
                margin: '0 auto 16px',
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
                src="/images/wechat.webp"
                alt="8vice WeChat QR"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = 'true';
                    e.currentTarget.src = '/images/wechat.jpeg';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', borderRadius: '6px' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              <span>WeChat ID:</span>
              <strong style={{ color: '#07C160', letterSpacing: '0.5px' }}>eightvice</strong>
              <button
                type="button"
                onClick={handleCopyWechatId}
                style={{
                  background: 'rgba(7, 193, 96, 0.18)',
                  border: '1px solid rgba(7, 193, 96, 0.4)',
                  color: '#07C160',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  borderRadius: '6px',
                  padding: '3px 8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#07C160';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(7, 193, 96, 0.18)';
                  e.currentTarget.style.color = '#07C160';
                }}
              >
                {copiedWechat ? (lang === 'cn' ? '已复制 ✓' : lang === 'id' ? 'Tersalin ✓' : 'Copied ✓') : (lang === 'cn' ? '复制' : lang === 'id' ? 'Salin' : 'Copy')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
