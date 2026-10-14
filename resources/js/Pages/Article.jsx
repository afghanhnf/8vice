import React, { useState, useMemo } from 'react';
import { Head, useForm } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Article({ insights = [] }) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set();
    insights.forEach(i => {
      if (i.cat) set.add(i.cat);
    });
    return ['All', ...Array.from(set)];
  }, [insights]);

  // Newsletter form
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const { data: form, setData: setForm, post: postForm, processing: processingForm, reset: resetForm, errors: errorsForm } = useForm({
    email: '',
    website_url: '', // honeypot
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    postForm('/subscribe', {
      preserveScroll: true,
      onSuccess: () => {
        setNewsletterSubmitted(true);
        resetForm();
      }
    });
  };

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return insights.filter(a => {
      const matchCategory = activeCategory === 'All' || a.cat === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const title = typeof a.t === 'string' ? a.t : (a.t?.en || a.t?.id || '');
      const excerpt = typeof a.excerpt === 'string' ? a.excerpt : (a.excerpt?.en || a.excerpt?.id || '');
      const matchSearch = !q || title.toLowerCase().includes(q) || excerpt.toLowerCase().includes(q) || a.cat?.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [insights, activeCategory, searchQuery]);

  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  const getCoverUrl = (cover) => {
    if (!cover) return '/images/challenges_insights.webp';
    return cover.startsWith('/') ? cover : `/storage/${cover}`;
  };

  const getInitials = (name) => {
    if (!name) return '8V';
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  return (
    <MainLayout>
      <SeoHead pageCode="article" />

      {/* ============================ HERO ============================ */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Insight</span>
            </div>
            <h1 className="t-h1">{t('article_page.page_title') || t('article_page.hero_title') || 'Field notes from the corridor.'}</h1>
            <p className="page-hero__lead">
              {t('article_page.page_desc') || t('article_page.hero_desc') || "What we're learning operating between China and Indonesia — sector analysis, regulatory briefings, and ground-level playbooks. All free."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ MAIN STREAM ============================ */}
      <section className="section section--white" style={{ paddingTop: '40px', paddingBottom: '96px' }}>
        <div className="container">

          {/* ============================ FEATURED / LATEST ARTICLE (BESAR DI ATAS) ============================ */}
          {featuredArticle && (
            <ScrollReveal>
              <article className="feat-hero-card">
                <div className="feat-hero-card__media">
                  <img 
                    src={getCoverUrl(featuredArticle.cover)} 
                    alt={featuredArticle.t} 
                    loading="eager"
                  />
                  <div className="feat-hero-card__badge">
                    {t('article_page.featured_badge') || 'Latest Insight'}
                  </div>
                </div>

                <div className="feat-hero-card__body">
                  <div className="feat-hero-card__content">
                    <div className="feat-hero-card__meta">
                      <span className="feat-hero-card__cat">{featuredArticle.cat}</span>
                      <span className="feat-hero-card__dot">&bull;</span>
                      <span className="feat-hero-card__rt">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}>
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {featuredArticle.rt}
                      </span>
                      {featuredArticle.date && (
                        <>
                          <span className="feat-hero-card__dot">&bull;</span>
                          <span className="feat-hero-card__date">{featuredArticle.date}</span>
                        </>
                      )}
                    </div>

                    <h2 className="feat-hero-card__title">
                      <Link href={`/article/${featuredArticle.slug || featuredArticle.id}`}>
                        {featuredArticle.t}
                      </Link>
                    </h2>

                    <p className="feat-hero-card__excerpt">
                      {featuredArticle.excerpt || "Strategic intelligence and operational takeaways from 8vice's ongoing advisory work across the China-Indonesia economic corridor."}
                    </p>
                  </div>

                  <div className="feat-hero-card__footer">
                    <div className="feat-hero-card__author">
                      <div className="feat-hero-card__avatar">
                        {getInitials(featuredArticle.author_name)}
                      </div>
                      <div>
                        <div className="feat-hero-card__author-name">{featuredArticle.author_name || '8vice Research'}</div>
                        <div className="feat-hero-card__author-role">{featuredArticle.author_role || 'Corridor Intelligence'}</div>
                      </div>
                    </div>

                    <Link href={`/article/${featuredArticle.slug || featuredArticle.id}`} className="btn btn--primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
                      <span>{t('article_page.read_article') || 'Read Article'}</span>
                      <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          )}

          {/* ============================ FILTER & SEARCH TOOLBAR ============================ */}
          <div className="article-toolbar">
            <div className="article-pills">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`article-pill ${activeCategory === cat ? 'is-active' : ''}`}
                >
                  {cat === 'All' ? (t('article_page.filter_all') || 'All Categories') : cat}
                </button>
              ))}
            </div>

            <div className="article-search-box">
              <span className="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder={t('article_page.search_ph') || 'Search articles by title or topic...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* ============================ EMPTY STATE ============================ */}
          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '72px 24px', background: 'var(--color-gray-100)', borderRadius: '16px', margin: '32px 0' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: 'var(--color-gray-400)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <h3 className="t-h3" style={{ fontSize: '20px', marginBottom: '8px' }}>No articles found</h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '15px', maxWidth: '420px', margin: '0 auto 20px' }}>
                We couldn't find any articles matching your search query or selected category.
              </p>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* ============================ SMALLER ARTICLES GRID (KECIL DI BAWAH) ============================ */}
          {listArticles.length > 0 && (
            <Staggered delay={100} staggerDelay={80} className="article-grid">
              {listArticles.map((article, index) => (
                <article key={article.id || index} className="article-card">
                  <div className="article-card__thumb">
                    <Link href={`/article/${article.slug || article.id}`}>
                      <img 
                        src={getCoverUrl(article.cover)} 
                        alt={article.t} 
                        loading="lazy"
                      />
                    </Link>
                    <span className="article-card__tag">{article.cat}</span>
                    <span className="article-card__rt">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {article.rt}
                    </span>
                  </div>

                  <div className="article-card__body">
                    {article.date && <div className="article-card__date">{article.date}</div>}
                    
                    <h3 className="article-card__title">
                      <Link href={`/article/${article.slug || article.id}`}>
                        {article.t}
                      </Link>
                    </h3>

                    <p className="article-card__excerpt">
                      {article.excerpt || "Practical analysis and strategic intelligence for enterprises navigating cross-border operations between China and Indonesia."}
                    </p>

                    <div className="article-card__footer">
                      <div className="article-card__author">
                        {article.author_name || '8vice Research'}
                      </div>
                      <Link href={`/article/${article.slug || article.id}`} className="article-card__link">
                        <span>Read</span>
                        <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </Staggered>
          )}

          {/* ============================ NEWSLETTER CALLOUT BANNER ============================ */}
          <ScrollReveal delay={150}>
            <section className="article-newsletter">
              <div>
                <div className="eyebrow" style={{ color: 'var(--color-red)', marginBottom: '8px' }}>
                  CORRIDOR DISPATCH
                </div>
                <h2 className="article-newsletter__title">
                  {t('article_page.newsletter_title') || 'Field Notes from the Frontier'}
                </h2>
                <p className="article-newsletter__desc">
                  {t('article_page.newsletter_desc') || 'Monthly briefings for executives and operators navigating the China-Indonesia corridor. Unvarnished, data-backed, zero fluff.'}
                </p>
              </div>

              <div>
                {newsletterSubmitted ? (
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div style={{ color: '#4ade80', fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>✓ Subscribed</div>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                      Thank you for joining. Our monthly corridor intelligence will arrive in your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="article-newsletter__form">
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input 
                        type="text" 
                        name="website_url" 
                        value={form.website_url} 
                        onChange={e => setForm('website_url', e.target.value)} 
                        tabIndex="-1" 
                        autoComplete="off" 
                      />
                    </div>
                    <div className="article-newsletter__input-group">
                      <input 
                        type="email" 
                        placeholder={t('article_page.newsletter_ph') || 'Your work email'} 
                        value={form.email}
                        onChange={e => setForm('email', e.target.value)}
                        required
                        className="article-newsletter__input"
                      />
                      <button 
                        type="submit" 
                        disabled={processingForm} 
                        className="btn btn--primary" 
                        style={{ padding: '12px 24px', flexShrink: 0, opacity: processingForm ? 0.7 : 1 }}
                      >
                        {processingForm ? 'Subscribing...' : (t('article_page.newsletter_btn') || 'Subscribe')}
                      </button>
                    </div>
                    {errorsForm.email && (
                      <div style={{ color: '#ff6b6b', fontSize: '13px' }}>{errorsForm.email}</div>
                    )}
                  </form>
                )}
              </div>
            </section>
          </ScrollReveal>

        </div>
      </section>

    </MainLayout>
  );
}
