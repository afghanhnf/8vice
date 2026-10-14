import React from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function CaseStudyDetail({ caseStudy, relatedCases = [] }) {
  const { t, locale } = useTranslation();
  const isId = locale === 'id';
  if (!caseStudy) return null;

  return (
    <MainLayout>
      <SeoHead caseStudy={caseStudy} />

      <article>
        {/* ============================ CASE STUDY MASTHEAD ============================ */}
        <header className="page-hero has-geo-bg" style={{ paddingTop: '56px', paddingBottom: '100px', background: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}>
          <div className="geo-bg">
            <div className="geo-bg__grid"></div>
            <div className="geo-bg__gradients"></div>
            <div className="geo-bg__dots"></div>
            <div className="geo-bg__boxes"></div>
            <div className="geo-bg__rects"></div>
            <div className="geo-bg__bars"></div>
          </div>
          <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 10 }}>
            <ScrollReveal>
              <div className="breadcrumb">
                <Link href="/">{t('nav.about') === 'Tentang Kami' ? 'Beranda' : 'Home'}</Link><span className="sep">/</span>
                <Link href="/case-study">{t('nav.case') || 'Case Studies'}</Link><span className="sep">/</span>
                <span className="cur">{caseStudy.tag || 'Case Study'}</span>
              </div>
              
              <div className="meta" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '18px', marginTop: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--color-red)' }}>
                  {caseStudy.tag}
                </span>
              </div>
              
              <h1 className="t-h1" style={{ marginBottom: '20px', fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.2 }}>
                {caseStudy.h}
              </h1>
              
              {caseStudy.p && (
                <p className="page-hero__lead" style={{ fontSize: '20px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.85)', margin: 0, maxWidth: '80ch' }}>
                  {caseStudy.p}
                </p>
              )}
            </ScrollReveal>
          </div>
        </header>

        {/* ============================ COVER IMAGE ============================ */}
        <div className="container" style={{ maxWidth: '1240px', marginTop: '-36px', position: 'relative', zIndex: 2 }}>
          <ScrollReveal delay={100} variant="up">
            <div className="ph" style={{ aspectRatio: '21/9', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.32)' }}>
              {caseStudy.cover ? (
                <img width="1200" height="600" src={caseStudy.cover.startsWith('/') ? caseStudy.cover : `/storage/${caseStudy.cover}`} alt={caseStudy.h} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img width="1200" height="600" src="/images/article-sample.webp" alt="Cover Placeholder" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* ============================ ARTICLE BODY & SIDEBAR ============================ */}
        <section className="section section--white">
          <div className="container" style={{ maxWidth: '1240px' }}>
            <div className="article-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '56px', alignItems: 'start' }}>
              
              {/* Main Content */}
              <div className="prose" style={{ maxWidth: '100%' }}>
                <ScrollReveal>
                  <div dangerouslySetInnerHTML={{ __html: caseStudy.body || '<p>Detailed case study information will be updated soon.</p>' }} />
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <aside className="article-aside">
                <ScrollReveal delay={200}>
                  
                  {/* Engagement Snapshot (CMS: sector = tag, corridor, capabilities) */}
                  <div className="aside-box" style={{ background: '#fafafa', border: '1px solid #ebebeb' }}>
                    <div className="eyebrow" style={{ marginBottom: '14px', color: 'var(--color-ink)' }}>{isId ? 'Ringkasan Proyek' : 'Engagement Overview'}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
                      {caseStudy.tag && (
                        <div>
                          <div style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{isId ? 'Sektor / Bidang' : 'Sector / Domain'}</div>
                          <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{caseStudy.tag}</div>
                        </div>
                      )}
                      {caseStudy.corridor && (
                        <div>
                          <div style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{isId ? 'Koridor Geografis' : 'Geographic Corridor'}</div>
                          <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{caseStudy.corridor}</div>
                        </div>
                      )}
                      {caseStudy.capabilities && (
                        <div>
                          <div style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{isId ? 'Kapabilitas Advisory' : 'Advisory Capabilities'}</div>
                          <div style={{ fontWeight: 500, color: '#444', lineHeight: 1.4 }}>{caseStudy.capabilities}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Share Box */}
                  <div className="aside-box">
                    <div className="share-box">
                      <div className="eyebrow" style={{ marginBottom: '16px' }}>{isId ? 'Bagikan studi kasus ini' : 'Share this case study'}</div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="LinkedIn">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <button onClick={() => { if(typeof window !== 'undefined') navigator.clipboard.writeText(window.location.href); alert(isId ? 'Tautan disalin!' : 'Link copied!'); }} className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="Copy link">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </button>
                        <a href={`mailto:?subject=Sharing Case Study: ${encodeURIComponent(caseStudy.h || '')}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="Email">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="aside-box" style={{ background: 'var(--color-ink)', color: '#fff', borderColor: 'var(--color-ink)' }}>
                    <h4 style={{ color: 'var(--color-gray-400)', fontSize: '18px', marginBottom: '8px' }}>{isId ? 'Menghadapi tantangan serupa?' : 'Facing a similar challenge?'}</h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.8)', lineHeight: 1.55, marginBottom: '20px' }}>
                      {isId
                        ? 'Mari diskusikan bagaimana 8vice membantu Anda menavigasi regulasi Indonesia, membangun kemitraan lokal, dan menekan risiko ekspansi pasar Anda.'
                        : "Let's discuss how 8vice can help you navigate Indonesian regulations, build local partnerships, and de-risk your market expansion."}
                    </p>
                    <Link href="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontWeight: 600 }}>
                      {isId ? 'Jadwalkan Konsultasi Gratis' : 'Book Free Consultancy'}
                    </Link>
                  </div>

                </ScrollReveal>
              </aside>

            </div>
          </div>
        </section>

        {/* ============================ RELATED CASE STUDIES ============================ */}
        {relatedCases && relatedCases.length > 0 && (
          <section className="section section--paper">
            <div className="container" style={{ maxWidth: '1240px' }}>
              <ScrollReveal>
                <div className="section-head" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <div className="eyebrow" style={{ color: 'var(--color-red)' }}>More Success Stories</div>
                    <h2 className="t-h3" style={{ margin: 0 }}>Explore related client cases.</h2>
                  </div>
                  <Link href="/case-study" className="link-arrow" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                    View all case studies
                    <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </ScrollReveal>

              <Staggered delay={100} staggerDelay={100} className="cards-3">
                {relatedCases.map((rel, i) => (
                  <article key={rel.id || i} className="case-card" style={{ background: '#fff', border: '1px solid #ebebeb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <Link href={`/case-study/${rel.slug || rel.id}`} style={{ display: 'block', overflow: 'hidden', aspectRatio: '16/10' }}>
                      {rel.cover ? (
                        <img width="600" height="375" src={rel.cover.startsWith('/') ? rel.cover : `/storage/${rel.cover}`} alt={rel.h} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                      ) : (
                        <div className="ph case-card__cover on-dark" style={{ height: '100%' }}>
                          <span className="ph__tag">CASE STUDY</span>
                        </div>
                      )}
                    </Link>
                    <div className="case-card__body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span className="tag" style={{ marginBottom: '10px', alignSelf: 'flex-start' }}>{rel.tag}</span>
                      <h3 className="t-h4" style={{ fontSize: '17px', lineHeight: 1.35, marginBottom: '10px' }}>{rel.h}</h3>
                      <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>{rel.p}</p>
                      <Link href={`/case-study/${rel.slug || rel.id}`} className="link-arrow" style={{ fontSize: '14px', fontWeight: 600 }}>
                        Read case study
                        <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </Staggered>
            </div>
          </section>
        )}
      </article>
    </MainLayout>
  );
}
