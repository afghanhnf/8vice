import React, { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';
import { getArticleExtras } from '@/data/articleExtras';

export default function ArticleDetail({ insight, relatedInsights }) {
  if (!insight) return null;

  const { t, locale } = useTranslation();
  const isId = locale === 'id';
  const contentRef = useRef(null);

  const [tocItems, setTocItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const extras = getArticleExtras(insight);
  const hasFaqs = extras.faqs.length > 0;
  const hasReferences = extras.references.length > 0;

  // Scan prose headings and append FAQ and References to dynamic Table of Contents
  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll('h2, h3');
    const scanned = [];

    headingElements.forEach((h, idx) => {
      const text = (h.innerText || h.textContent || '').trim();
      if (!text) return;

      const slugId = h.id || text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || `section-${idx + 1}`;

      h.id = slugId;
      h.style.scrollMarginTop = '100px';

      scanned.push({
        id: slugId,
        text,
        level: h.tagName.toLowerCase(),
      });
    });

    // Add FAQ Section (only when the CMS provides FAQs)
    if (hasFaqs) {
      scanned.push({
        id: 'article-faq',
        text: isId ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions',
        level: 'h2',
      });
    }

    // Add References Section (only when the CMS provides references)
    if (hasReferences) {
      scanned.push({
        id: 'article-references',
        text: isId ? 'Rujukan & Regulasi' : 'Regulatory References',
        level: 'h2',
      });
    }

    setTocItems(scanned);
    if (scanned.length > 0) {
      setActiveId(scanned[0].id);
    }
  }, [insight.body, locale, hasFaqs, hasReferences]);

  // Scroll spy to highlight active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let currentActive = '';

      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            currentActive = item.id;
          }
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const handleTocClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(targetId);
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <MainLayout>
      <SeoHead article={insight} />

      <article>
        {/* ============================ ARTICLE MASTHEAD ============================ */}
        <header className="page-hero has-geo-bg" style={{ paddingTop: '56px', paddingBottom: '104px', background: 'var(--color-ink)', position: 'relative', overflow: 'hidden' }}>
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
                <Link href="/">{isId ? 'Beranda' : 'Home'}</Link><span className="sep">/</span>
                <Link href="/article">{isId ? 'Wawasan' : 'Insight'}</Link><span className="sep">/</span>
                <span className="cur">{isId ? 'Artikel' : 'Article'}</span>
              </div>
              
              <div className="meta" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '18px', marginTop: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--color-red)' }}>
                  {insight.cat}
                </span>
                <span style={{ color: 'var(--color-gray-400)', fontSize: '13.5px' }}>
                  {insight.rt} &middot; {insight.date}
                </span>
              </div>
              
              <h1 className="t-h1" style={{ marginBottom: '32px', fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.2, maxWidth: '980px' }}>
                {insight.t}
              </h1>
              
              <div className="byline" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '28px', marginBottom: '8px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--color-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px', flexShrink: 0, boxShadow: '0 4px 12px rgba(214,40,40,0.35)' }}>
                  {insight.author_name ? insight.author_name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : '8V'}
                </div>
                <div>
                  <div className="byline__name" style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}>{insight.author_name || '8vice Research'}</div>
                  <div className="byline__role" style={{ color: 'var(--color-gray-400)', fontSize: '13.5px' }}>{insight.author_role || 'Corridor Intelligence'}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* ============================ COVER IMAGE ============================ */}
        <div className="container" style={{ maxWidth: '1240px', marginTop: '-36px', position: 'relative', zIndex: 2 }}>
          <ScrollReveal delay={100} variant="up">
            <div className="ph" style={{ aspectRatio: '21/9', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.32)' }}>
              {insight.cover ? (
                <img width="1200" height="600" src={insight.cover.startsWith('/') ? insight.cover : `/storage/${insight.cover}`} alt={insight.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img width="1200" height="600" src="/images/article-sample.webp" alt="Cover Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                  <div ref={contentRef} dangerouslySetInnerHTML={{ __html: insight.body || '<p>Content will be updated soon.</p>' }} />
                </ScrollReveal>

                {/* ===================== TAXONOMY (CATEGORY & TAGS) ===================== */}
                <div className="article-taxonomies">
                  <div className="article-taxonomies__row">
                    <span className="article-taxonomies__label">{isId ? 'Kategori' : 'Category'}:</span>
                    <span className="article-category-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      {insight.cat}
                    </span>
                  </div>

                  {extras.tags.length > 0 && (
                  <div className="article-taxonomies__row">
                    <span className="article-taxonomies__label">{isId ? 'Topik Terkait' : 'Topics'}:</span>
                    <div className="article-tag-list">
                      {extras.tags.map((tag, idx) => (
                        <span key={idx} className="article-tag-pill">
                          {tag.startsWith('#') ? tag : `#${tag}`}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}
                </div>

                {/* ===================== FAQ ACCORDION ===================== */}
                {hasFaqs && (
                <section id="article-faq" className="article-faq" style={{ scrollMarginTop: '100px' }}>
                  <div className="article-faq__header">
                    <div className="eyebrow">{isId ? 'Tanya Jawab & Penjelasan' : 'Executive Clarifications'}</div>
                    <h2>{isId ? 'Pertanyaan yang Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}</h2>
                  </div>

                  <div className="article-faq__list">
                    {extras.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className={`article-faq__item ${isOpen ? 'is-open' : ''}`}>
                          <button
                            type="button"
                            className="article-faq__trigger"
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={isOpen}
                          >
                            <span>{faq.q}</span>
                            <span className="article-faq__chevron">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="article-faq__body">
                              <p style={{ margin: 0 }}>{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
                )}

                {/* ===================== REFERENCES SECTION ===================== */}
                {hasReferences && (
                <section id="article-references" className="article-references" style={{ scrollMarginTop: '100px' }}>
                  <div className="article-references__header">
                    <div className="eyebrow">{isId ? 'Sumber & Rujukan Regulasi' : 'Authoritative Sources'}</div>
                    <h2>{isId ? 'Rujukan Regulasi & Laporan Pasar' : 'Regulatory References & Citations'}</h2>
                  </div>

                  <div className="article-references__list">
                    {extras.references.map((ref, idx) => (
                      <div key={idx} className="article-references__item">
                        <span className="article-references__idx">[{String(idx + 1).padStart(2, '0')}]</span>
                        <div className="article-references__content">
                          <div className="article-references__title">{ref.title}</div>
                          <div className="article-references__meta">
                            <span>{ref.source}</span>
                            {ref.year && <span style={{ opacity: 0.6 }}>&middot; {ref.year}</span>}
                            {ref.type && <span className="article-references__tag">{ref.type}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                )}
              </div>

              {/* Sidebar */}
              <aside className="article-aside">
                <ScrollReveal delay={200}>
                  
                  <div className="aside-box">
                    <h4>{isId ? 'Daftar Isi' : 'In this article'}</h4>
                    <ul className="toc-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {tocItems.map((item) => (
                        <li key={item.id} className={item.level === 'h3' ? 'toc-level-3' : 'toc-level-2'}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={activeId === item.id ? 'is-active' : ''}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="share-box" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--color-gray-200)' }}>
                      <div className="eyebrow" style={{ marginBottom: '16px' }}>{isId ? 'Bagikan artikel ini' : 'Share this piece'}</div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="LinkedIn">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <button onClick={() => { if(typeof window !== 'undefined') navigator.clipboard.writeText(window.location.href); alert(isId ? 'Tautan disalin!' : 'Link copied!'); }} className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="Copy link">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        </button>
                        <a href={`mailto:?subject=${encodeURIComponent(insight.t)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} className="btn btn--secondary" style={{ padding: '8px 12px', minWidth: 0 }} aria-label="Email">
                          <svg className="ico ico-16" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="aside-box" style={{ background: 'var(--color-ink)', color: '#fff', borderColor: 'var(--color-ink)' }}>
                    <h4 style={{ color: 'var(--color-gray-400)' }}>{isId ? 'Butuh Analisis Regulasi?' : 'Need this mapped?'}</h4>
                    <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,.75)', lineHeight: 1.55, marginBottom: '16px' }}>
                      {isId
                        ? 'Sampaikan aktivitas bisnis Anda. Kami akan memetakan kode KBLI dan kelayakan regulasi dalam sesi konsultasi awal.'
                        : "Bring us your one-sentence activity. We'll map the KBLI and ownership reality in your free consultancy call."}
                    </p>
                    <Link href="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px' }}>
                      {isId ? 'Jadwalkan Konsultasi' : 'Book a call'}
                    </Link>
                  </div>

                </ScrollReveal>
              </aside>

            </div>
          </div>
        </section>

        {/* ============================ RELATED ARTICLES ============================ */}
        <section className="section section--paper">
          <div className="container" style={{ maxWidth: '1240px' }}>
            <ScrollReveal>
              <div className="section-head" style={{ marginBottom: '40px' }}>
                <div className="eyebrow">{isId ? 'Lanjutkan Membaca' : 'Keep Reading'}</div>
                <h2 className="t-h3">{isId ? 'Catatan Lapangan Terkait.' : 'Related field notes.'}</h2>
              </div>
            </ScrollReveal>
            
            <Staggered delay={100} staggerDelay={100} className="cards-3">
              {(relatedInsights && relatedInsights.length > 0 ? relatedInsights : []).map((rel, i) => (
                <article key={i} className="case-card" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden' }}>
                  <Link href={`/article/${rel.slug}`} className="ph" style={{ aspectRatio: '16/10', display: 'block', textDecoration: 'none' }}>
                    {rel.cover ? (
                        <img width="800" height="600" src={rel.cover.startsWith('/') ? rel.cover : `/storage/${rel.cover}`} alt={rel.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <span className="ph__tag">ARTICLE &middot; {rel.rt}</span>
                    )}
                  </Link>
                  <div className="case-card__body">
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-red)' }}>{rel.cat}</span>
                      <span style={{ fontSize: '12px', color: '#888' }}>{rel.rt}</span>
                    </div>
                    <h3 className="t-h4" style={{ marginBottom: '12px', minHeight: '56px' }}>{rel.t}</h3>
                    <p style={{ fontSize: '14px', marginBottom: '24px', color: 'var(--color-ink)', opacity: 0.8 }}>
                      {rel.excerpt || rel.description || (isId ? 'Temukan wawasan lebih lanjut dari tim kami.' : 'Discover more insights from our team.')}
                    </p>
                    <Link href={`/article/${rel.slug}`} className="link-arrow" style={{ fontSize: '14px', fontWeight: '600' }}>
                       {isId ? 'Baca artikel' : 'Read article'}
                       <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </Staggered>
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
