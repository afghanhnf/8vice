import React from 'react';
import Link from '@/Components/LocalizedLink';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function PageHeroBanner({
  breadcrumbs = [],
  eyebrow = '',
  title = '',
  subtitle = '',
  lead = '',
  bannerImage = '/images/hero_globe_china_indonesia.webp',
  children = null,
  align = 'left',
  minHeight = '440px'
}) {
  const { lang } = useTranslation();
  const isId = lang === 'id';

  const isCenter = align === 'center';

  return (
    <>
      <style>{`
        .inner-page-root {
          background-color: #0B0C10;
          color: #FFFFFF;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
        .inner-page-root h1,
        .inner-page-root h2,
        .inner-page-root h3,
        .inner-page-root h4 {
          font-family: 'Nexa', 'Plus Jakarta Sans', sans-serif;
          color: #FFFFFF;
        }
        .inner-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .inner-grid-pattern {
          position: absolute;
          inset: 0;
          background-size: 56px 56px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.038) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.038) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%);
        }
        .inner-grid-dots {
          position: absolute;
          inset: 0;
          background-size: 56px 56px;
          background-image: radial-gradient(circle, rgba(230, 57, 70, 0.24) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 75% 60% at 50% 50%, #000 20%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse 75% 60% at 50% 50%, #000 20%, transparent 90%);
        }
        .adv-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .adv-card:hover {
          background: rgba(255, 255, 255, 0.045);
          border-color: rgba(230, 57, 70, 0.42);
          transform: translateY(-4px);
          box-shadow: 0 20px 44px rgba(0, 0, 0, 0.48), 0 0 28px rgba(230, 57, 70, 0.12);
        }
        .adv-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          background: linear-gradient(135deg, #E63946 0%, #B8232E 100%);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14.5px;
          letter-spacing: 0.02em;
          text-decoration: none;
          border: none;
          box-shadow: 0 10px 28px rgba(230, 57, 70, 0.35);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .adv-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(230, 57, 70, 0.5);
          color: #FFFFFF;
        }
        .adv-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14.5px;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .adv-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
          color: #FFFFFF;
        }
        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.12);
          border: 1px solid rgba(230, 57, 70, 0.3);
          color: #FF858D;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        @media (max-width: 900px) {
          .resp-grid-2, .resp-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }

        /* Shared inner-page section system */
        .inner-section {
          position: relative;
          padding: 96px 0;
          background: #0B0C10;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }
        .inner-section--alt { background: radial-gradient(ellipse 70% 50% at 85% 10%, rgba(214, 40, 40, 0.08) 0%, transparent 70%), #0E1016; }
        .inner-section--dark { background: #08090C; }
        .inner-section > .container { position: relative; z-index: 1; }
        .inner-head { max-width: 760px; margin-bottom: 48px; }
        .inner-head--center { margin-left: auto; margin-right: auto; text-align: center; }
        .inner-head h2 {
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .inner-head p { font-size: 16px; line-height: 1.72; color: rgba(255, 255, 255, 0.7); margin: 0; }
        .inner-kicker {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 14px;
        }
        .inner-split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 56px;
          align-items: center;
        }
        .inner-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: 20px;
        }
        .inner-prose p { font-size: 15.5px; line-height: 1.78; color: rgba(255, 255, 255, 0.78); margin: 0 0 16px; }
        .inner-prose p:last-child { margin-bottom: 0; }
        .inner-num {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #E63946;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .inner-cta {
          border-radius: 28px;
          padding: clamp(36px, 5vw, 64px);
          text-align: center;
          background: radial-gradient(ellipse 80% 90% at 50% 0%, rgba(230, 57, 70, 0.22) 0%, transparent 70%), #101219;
          border: 1px solid rgba(230, 57, 70, 0.28);
        }
        .inner-cta h2 { font-size: clamp(26px, 3vw, 38px); font-weight: 700; margin: 0 0 14px; letter-spacing: -0.02em; }
        .inner-cta p { color: rgba(255, 255, 255, 0.72); max-width: 640px; margin: 0 auto 28px; line-height: 1.7; }
        .inner-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .inner-pill {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .inner-pill:hover, .inner-pill.is-active { background: rgba(230, 57, 70, 0.16); border-color: rgba(230, 57, 70, 0.5); color: #FFFFFF; }
        .photo-slot {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 12px, transparent 12px 24px), #101219;
          border: 1px dashed rgba(255, 255, 255, 0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 12.5px;
          text-align: center;
          padding: 16px;
        }
        .photo-slot--filled { border-style: solid; border-color: rgba(255, 255, 255, 0.12); padding: 0; }
        .photo-slot img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        @media (max-width: 900px) {
          .inner-split { grid-template-columns: 1fr; gap: 36px; }
          .inner-section { padding: 72px 0; }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight,
          display: 'flex',
          alignItems: 'center',
          padding: '88px 0 76px',
          backgroundColor: '#08090C',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Background Banner Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}
        >
          <img
            src={bannerImage}
            alt={typeof title === 'string' ? title : '8Vice Advisory'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.32,
              filter: 'contrast(1.08) saturate(0.85)',
              transform: 'scale(1.02)'
            }}
          />
          {/* Multi-layered Executive Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(8, 9, 12, 0.94) 0%, rgba(8, 9, 12, 0.80) 55%, rgba(8, 9, 12, 0.88) 100%), linear-gradient(180deg, rgba(8, 9, 12, 0.75) 0%, rgba(8, 9, 12, 0.4) 50%, #0B0C10 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '10%',
              width: '540px',
              height: '540px',
              background: 'radial-gradient(circle, rgba(230, 57, 70, 0.18) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Architectural Grid Overlay */}
        <div className="inner-grid-bg">
          <div className="inner-grid-pattern" />
          <div className="inner-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div
            style={{
              maxWidth: isCenter ? '880px' : '840px',
              margin: isCenter ? '0 auto' : '0',
              textAlign: isCenter ? 'center' : 'left'
            }}
          >
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                padding: '7px 16px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontSize: '12.5px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.65)',
                marginBottom: '24px'
              }}
            >
              <Link
                href="/"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>{isId ? 'Beranda' : 'Home'}</span>
              </Link>

              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '11px' }}>/</span>
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span style={{ color: '#E63946', fontWeight: 600 }}>{crumb.label}</span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Eyebrow */}
            {eyebrow && (
              <div>
                <div className="eyebrow-pill">
                  <span className="eyebrow-dot" />
                  <span>{eyebrow}</span>
                </div>
              </div>
            )}

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(34px, 4.6vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: subtitle ? '14px' : '20px'
              }}
            >
              {title}
            </h1>

            {/* Optional Subtitle */}
            {subtitle && (
              <div
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  fontWeight: 600,
                  color: '#E63946',
                  marginBottom: '18px',
                  lineHeight: 1.35
                }}
              >
                {subtitle}
              </div>
            )}

            {/* Lead Paragraph */}
            {lead && (
              <p
                style={{
                  fontSize: 'clamp(15.5px, 1.4vw, 18px)',
                  lineHeight: 1.72,
                  color: 'rgba(255, 255, 255, 0.78)',
                  maxWidth: isCenter ? '760px' : '720px',
                  margin: isCenter ? '0 auto' : '0'
                }}
              >
                {lead}
              </p>
            )}

            {children && <div style={{ marginTop: '30px' }}>{children}</div>}
          </div>
        </div>
      </section>
    </>
  );
}

