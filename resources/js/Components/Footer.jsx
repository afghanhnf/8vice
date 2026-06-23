import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
  return (
    <>
      <footer className="footer" data-screen-label="Footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__col">
              <Link href="/" className="logo"><span className="logo__word">8vice</span><span className="logo__dot"></span></Link>
              <p className="footer__tag">We help businesses transform opportunities into sustainable growth through market intelligence, product strategy, and cross-border expansion expertise.</p>
            </div>
            <div className="footer__col">
              <h4>Navigate</h4>
              <Link href="/about">About</Link>
              <Link href="/case-study">Clients</Link>
              <Link href="/insight">Insight</Link>
              <Link href="/career">Career</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <Link href="/consultancy">Consultancy</Link>
              <Link href="/training">Training</Link>
              <Link href="/insight">Insight</Link>
            </div>
            <div className="footer__col footer__contact">
              <h4>Contact</h4>
              <a href="mailto:hello@8vice.com">hello@8vice.com</a>
              <span className="lbl">Office</span>
              <span>SOHO Pancoran, MT Haryono<br/>Jakarta Selatan, Indonesia</span>
              <span className="lbl">WhatsApp</span>
              <a href="#">+62 ••• •••• ••••</a>
              <div className="footer__social" style={{ marginTop: '18px' }}>
                <a href="#" aria-label="LinkedIn"><svg className="ico ico-20" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                <a href="#" aria-label="YouTube"><svg className="ico ico-20" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 8vice. All rights reserved.</span>
            <div className="footer__bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <a className="wa-fab" id="wa-fab" href="https://wa.me/0000000000?text=Hi%208vice%2C%20I%27d%20like%20to%20learn%20more%20about%20entering%20the%20Indonesian%20market." target="_blank" rel="noopener noreferrer" aria-label="Chat with 8vice on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.97 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z"></path></svg>
      </a>
    </>
  );
}
