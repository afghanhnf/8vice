import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function ServiceDetailLayout({
  pageTitle,
  heroBreadcrumb,
  heroTitle,
  heroTitleAccent,
  heroDesc,
  heroImage,
  approachTitle,
  approachParagraphs,
  approachImage,
  capabilities,
  processTitle,
  processSteps,
  scopeTitle,
  scopeItems,
  caseStudiesTitle,
  caseStudies,
  ctaBanner,
  ctaBtn
}) {
  return (
    <MainLayout>
      <Head title={`8vice - ${pageTitle}`} />

      {/* ============================ HERO ============================ */}
      <section className="has-geo-bg" style={{ background: 'var(--color-ink)', color: '#fff', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="breadcrumb" style={{ marginBottom: '40px' }}>
            <Link href="/">Home</Link><span className="sep">/</span><Link href="/services">Services</Link><span className="sep">/</span><span className="cur">{heroBreadcrumb || pageTitle}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <ScrollReveal>
              <h1 className="t-display" style={{ fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1.1', marginBottom: '24px' }}>
                {heroTitle} <span style={{ color: 'var(--color-red)' }}>{heroTitleAccent}</span>
              </h1>
              <p className="t-body-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
                {heroDesc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{ width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden', background: '#111' }}>
                {heroImage ? (
                  <img src={heroImage} alt={pageTitle} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(214,40,40,0.15) 0%, transparent 100%)' }}></div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================ THE APPROACH ============================ */}
      {approachTitle && (
        <section className="svc-section svc-section--darker">
          <div className="container">
            <ScrollReveal className="section-head">
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                The Approach
              </div>
              <h2 className="t-h2" style={{ color: '#fff' }}>{approachTitle}</h2>
            </ScrollReveal>

            <div className="svc-approach__grid">
              <ScrollReveal>
                <div className="svc-approach__text">
                  {approachParagraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="svc-approach__media">
                  {approachImage ? (
                    <img src={approachImage} alt="Approach" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(214,40,40,0.1) 0%, transparent 100%)' }}></div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ============================ CAPABILITIES ============================ */}
      {capabilities?.length > 0 && (
        <section className="svc-section svc-section--dark">
          <div className="container">
            <ScrollReveal className="section-head">
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                Core Capabilities
              </div>
              <h2 className="t-h2" style={{ color: '#fff' }}>What We Deliver</h2>
            </ScrollReveal>

            <Staggered delay={100} staggerDelay={100} className="svc-cap-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="svc-cap-card">
                  <div className="svc-cap-card__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {cap.icon || <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>}
                    </svg>
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </Staggered>
          </div>
        </section>
      )}

      {/* ============================ PROCESS ============================ */}
      {processSteps?.length > 0 && (
        <section className="svc-section svc-section--darker">
          <div className="container">
            <ScrollReveal className="section-head" style={{ textAlign: 'center' }}>
              <div className="about-hero__eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
                <span className="about-hero__dot"></span>
                Our Process
              </div>
              <h2 className="t-h2" style={{ color: '#fff' }}>{processTitle || 'How We Work'}</h2>
            </ScrollReveal>

            <div className="svc-process__track">
              <div className="svc-process__line"></div>
              <Staggered delay={100} staggerDelay={150} className="svc-process__steps">
                {processSteps.map((step, i) => (
                  <div key={i} className="svc-process-step">
                    <div className="svc-process-step__num">{step.num}</div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </Staggered>
            </div>
          </div>
        </section>
      )}

      {/* ============================ SCOPE OF WORK ============================ */}
      {scopeItems?.length > 0 && (
        <section className="svc-section svc-section--dark">
          <div className="container">
            <ScrollReveal className="section-head">
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                Scope of Work
              </div>
              <h2 className="t-h2" style={{ color: '#fff' }}>{scopeTitle || 'What\'s Included'}</h2>
            </ScrollReveal>

            <Staggered delay={100} staggerDelay={80} className="svc-scope-grid">
              {scopeItems.map((item, i) => (
                <div key={i} className="svc-scope-item">
                  <div className="svc-scope-item__ico">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Staggered>
          </div>
        </section>
      )}

      {/* ============================ CASE STUDIES ============================ */}
      {caseStudies?.length > 0 && (
        <section className="svc-section svc-section--light">
          <div className="container">
            <ScrollReveal className="section-head">
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                Case Studies
              </div>
              <h2 className="t-h2">{caseStudiesTitle || 'Client Success Stories'}</h2>
            </ScrollReveal>

            <Staggered delay={100} staggerDelay={150} className="svc-case-grid">
              {caseStudies.map((cs, i) => (
                <div key={i} className="svc-case-card">
                  <div className="svc-case-card__cover">
                    {cs.image ? (
                      <img src={cs.image} alt={cs.title} />
                    ) : (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-400)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    )}
                  </div>
                  <div className="svc-case-card__body">
                    <h3>{cs.title}</h3>
                    <p>{cs.desc}</p>
                  </div>
                </div>
              ))}
            </Staggered>
          </div>
        </section>
      )}

      {/* ============================ CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="section final-cta has-geo-bg" style={{ paddingBottom: '100px' }}>
          <div className="container">
            <div className="final-cta__inner" style={{ textAlign: 'center' }}>
              <h2 className="t-h1" style={{ marginBottom: '40px' }}>{ctaBanner}</h2>
              <div className="hero__ctas" style={{ justifyContent: 'center' }}>
                <Link href="/contact" className="btn btn--primary btn--lg">
                  {ctaBtn}
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
