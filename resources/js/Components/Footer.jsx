import React from 'react';
import Link from '@/Components/LocalizedLink';
import { usePage } from '@inertiajs/react';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function Footer() {
  const { siteSettings } = usePage().props;
  const { lang, t } = useTranslation();
  const isId = lang === 'id';

  const displayTagline = typeof siteSettings?.tagline === 'object'
    ? (siteSettings?.tagline?.[lang] || siteSettings?.tagline?.en)
    : (siteSettings?.tagline || (isId
        ? 'Membantu bisnis mentransformasi peluang menjadi pertumbuhan berkelanjutan melalui riset pasar, strategi produk, dan ekspansi lintas batas.'
        : 'We help businesses transform opportunities into sustainable growth through market intelligence, product strategy, and cross-border expansion expertise.'));

  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;

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
              <p className="footer__tag">{displayTagline}</p>
              
              <Link href="/contact" className="footer__cta-pill">
                <span>{isId ? 'Konsultasi Gratis' : 'Book a Consultation'}</span>
                <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Column 2: Navigation */}
            <div className="footer__col">
              <h3>{isId ? 'Navigasi' : 'Navigate'}</h3>
              <div className="footer__nav-list">
                <Link href="/about">{t('nav.about') || 'About'}</Link>
                <Link href="/client">{t('nav.clients') || 'Clients'}</Link>
                <Link href="/case-study">{t('nav.case') || 'Case Study'}</Link>
                <Link href="/article">{t('nav.article') || 'Article'}</Link>
                <Link href="/career">{t('nav.career') || 'Career'}</Link>
                <Link href="/social-impact">{isId ? 'Dampak Sosial' : 'Social Impact'}</Link>
                <Link href="/contact">{t('nav.contact') || 'Contact'}</Link>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="footer__col">
              <h3>{isId ? 'Layanan Kami' : 'Services'}</h3>
              <div className="footer__nav-list">
                <Link href="/market-intelligence">{t('nav.market_intelligence') || 'Market Intelligence'}</Link>
                <Link href="/consultancy">{t('nav.consultancy') || 'Consultancy'}</Link>
                <Link href="/training">{t('nav.training') || 'Training'}</Link>
                <Link href="/services">{t('nav.services') || 'All Practices'}</Link>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="footer__col footer__contact">
              <h3>{isId ? 'Kontak & Kantor' : 'Contact'}</h3>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <span className="lbl">Email</span>
                  <a href={emailHref} className="val" aria-label={`Email ${cleanEmail}`}>
                    <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>{cleanEmail}</span>
                  </a>
                </div>

                <div className="footer__contact-item">
                  <span className="lbl">{isId ? 'Kantor Jakarta' : 'Office'}</span>
                  <span className="val" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)' }}>
                    {siteSettings?.address || 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810'}
                  </span>
                </div>
                
                <div className="footer__contact-item">
                  <span className="lbl">WhatsApp</span>
                  <a href={siteSettings?.whatsapp_url || 'https://wa.me/628118005110'} target="_blank" rel="noopener noreferrer" className="val">
                    <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>+62 811-8005-110</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="footer__social">
                <a href={siteSettings?.linkedin_url || 'https://www.linkedin.com/company/8-vice/'} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="ico ico-20" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href={siteSettings?.instagram_url || 'https://www.instagram.com/8viceofficial'} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg className="ico ico-20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} 8vice. All rights reserved.</span>
            
            <div className="footer__bottom-badge">
              <span className="footer__bottom-pulse"></span>
              <span>{isId ? 'Indonesia, Terdekode untuk Bisnis Global' : 'Indonesia, Decoded for Chinese & Global Businesses'}</span>
            </div>

            <div className="footer__bottom-links">
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <a className="wa-fab" id="wa-fab" href={siteSettings?.whatsapp_url || 'https://wa.me/628118005110'} target="_blank" rel="noopener noreferrer" aria-label="Chat with 8vice on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.97 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43-.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z"></path></svg>
      </a>
    </>
  );
}
