import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Article() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Market Entry', 'Operations', 'Regulation', 'Culture', 'Distribution'];
  const tags = ['Tech', 'Retail', 'Logistics', 'Manufacturing', 'Energy'];

  const articles = [
    { slug: 'licensing-pathway', title: "The licensing pathway most Chinese entrants get wrong.", excerpt: "Three out of four companies we meet have misread the OSS system. Here's the sequence that actually works.", date: "May 2026", readTime: "8 min", category: "Market Entry", image: "/images/article-cover.jpg", isFeatured: true },
    { slug: 'guanxi-translation', title: "Guanxi doesn't translate. Here's what does in Indonesia.", excerpt: "Why relationship capital built in Shenzhen doesn't always map to Jakarta.", date: "Apr 2026", readTime: "6 min", category: "Culture", image: null },
    { slug: 'negative-investment-list', title: "Reading the 2026 negative investment list.", excerpt: "A pragmatic guide to what's actually closed, and what just requires the right structure.", date: "Mar 2026", readTime: "5 min", category: "Regulation", image: null },
    { slug: 'first-distributor', title: "Why your first distributor is usually the wrong one.", excerpt: "The common mistakes foreign brands make when selecting their initial distribution partners.", date: "Feb 2026", readTime: "7 min", category: "Distribution", image: null },
    { slug: 'supply-chain-rainy-season', title: "Building a supply chain that survives the rainy season.", excerpt: "Logistics realities outside of Java during the monsoon months.", date: "Jan 2026", readTime: "7 min", category: "Operations", image: null },
    { slug: 'java-is-not-indonesia', title: "Java is not Indonesia: a market beyond the capital.", excerpt: "Evaluating tier-2 cities for expansion.", date: "Dec 2025", readTime: "9 min", category: "Market Entry", image: null }
  ];

  const filteredArticles = articles.filter(a => {
    const matchCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredArticle = filteredArticles.find(a => a.isFeatured) || filteredArticles[0];
  const listArticles = filteredArticles.filter(a => a !== featuredArticle);

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.article_title')}</title>
        <meta name="description" content={t('meta.article_desc')} />
        <meta property="og:title" content={t('meta.article_title')} />
        <meta property="og:description" content={t('meta.article_desc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-default.png" />
      </Head>

      {/* ============================ HERO ============================ */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Insight</span>
            </div>
            <h1 className="t-h1">{t('article_page.hero_title') || 'Field notes from the corridor.'}</h1>
            <p className="page-hero__lead">
              {t('article_page.hero_desc') || "What we're learning operating between China and Indonesia - articles, real client cases, and the social-impact work we're proudest of. All free."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ KNOWLEDGE STREAM ============================ */}
      <section className="section section--white">
        <div className="container">
          
          <div className="article-layout">
            {/* Left Stream */}
            <div>
              {/* Featured Split (if we have articles) */}
              {featuredArticle && (
                <ScrollReveal>
                  <div className="feat-split">
                    <article className="feat-main">
                      <div className="ph feat-main__thumb">
                        <span className="ph__tag">FEATURED COVER</span>
                      </div>
                      <div className="meta">
                        <span className="cat" style={{ fontSize:'11px', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--color-red)' }}>{featuredArticle.category}</span>
                        <span className="rt" style={{ fontSize:'13px', color:'var(--color-gray-400)' }}>{featuredArticle.readTime}</span>
                      </div>
                      <h2 className="t-h2">
                        <Link href={`/article/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
                      </h2>
                      <p>{featuredArticle.excerpt}</p>
                      <Link href={`/article/${featuredArticle.slug}`} className="link-arrow">
                        Read article
                        <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </Link>
                    </article>
                    
                    <div className="feat-list">
                      {listArticles.slice(0, 3).map((article, i) => (
                        <div key={i} className="feat-list__item">
                          <div className="ph feat-list__thumb"><span className="ph__tag" style={{fontSize:'9px'}}>1:1</span></div>
                          <div>
                            <div className="meta">
                              <span style={{ fontSize:'11px', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--color-red)' }}>{article.category}</span>
                              <span style={{ fontSize:'12px', color:'var(--color-gray-400)' }}>{article.readTime}</span>
                            </div>
                            <h3>
                              <Link href={`/article/${article.slug}`}>{article.title}</Link>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Standard List */}
              <Staggered delay={100} staggerDelay={100} className="job-list" style={{ marginTop: '48px', borderTop: 'none' }}>
                {listArticles.slice(3).map((article, i) => (
                  <div key={i} className="job-row article-row">
                    <div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-red)', textTransform: 'uppercase' }}>{article.category}</span>
                        <span style={{ color: 'var(--color-gray-400)', fontSize: '13px' }}>{article.readTime}</span>
                      </div>
                      <h3 className="t-h4" style={{ marginBottom: '8px' }}>{article.title}</h3>
                      <p style={{ color: 'var(--color-gray-600)', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>{article.excerpt}</p>
                    </div>
                    <div className="job-meta" style={{ textAlign: 'right' }}>{article.date}</div>
                    <Link href={`/article/${article.slug}`} className="link-arrow">Read<svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                  </div>
                ))}
              </Staggered>
              
              {/* Pagination (Client-side dummy) */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px', padding: '24px 0', borderTop: '1px solid var(--color-gray-200)' }}>
                <button className="btn" style={{ padding: '8px 16px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '4px' }}>1</button>
                <button className="btn" style={{ padding: '8px 16px', background: 'var(--color-gray-100)', color: 'var(--color-ink)', border: 'none', borderRadius: '4px' }}>2</button>
                <button className="btn" style={{ padding: '8px 16px', background: 'var(--color-gray-100)', color: 'var(--color-ink)', border: 'none', borderRadius: '4px' }}>3</button>
              </div>

            </div>

            {/* Right Sidebar (Sticky) */}
            <div className="article-aside">
              <ScrollReveal delay={200}>
                
                {/* Search Box */}
                <div className="aside-box">
                  <h4>Search</h4>
                  <input 
                    type="text" 
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ 
                      width: '100%', 
                      background: 'var(--color-gray-100)', 
                      border: '1px solid var(--color-gray-200)', 
                      color: 'var(--color-ink)', 
                      padding: '12px 16px', 
                      borderRadius: '8px',
                      fontSize: '15px',
                      outline: 'none'
                    }} 
                  />
                </div>

                {/* Categories */}
                <div className="aside-box">
                  <h4>Categories</h4>
                  <ul className="toc-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <button 
                          onClick={() => setActiveCategory(cat)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: activeCategory === cat ? 'var(--color-red)' : 'var(--color-gray-600)',
                            fontSize: '15px',
                            cursor: 'pointer',
                            padding: 0,
                            fontWeight: activeCategory === cat ? '600' : 'normal',
                            textAlign: 'left',
                            width: '100%'
                          }}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="aside-box">
                  <h4>Popular Tags</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tags.map((tag, i) => (
                      <span key={i} style={{ 
                        background: 'var(--color-gray-100)', 
                        color: 'var(--color-gray-600)', 
                        padding: '6px 12px', 
                        borderRadius: '99px', 
                        fontSize: '13px', 
                        cursor: 'pointer' 
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="aside-box" style={{ background: 'var(--color-ink)', color: '#fff', borderColor: 'var(--color-ink)' }}>
                  <h4 style={{ color: 'var(--color-gray-400)' }}>{t('article_page.newsletter_title') || 'Newsletter'}</h4>
                  <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,.75)', lineHeight: 1.55, marginBottom: '16px' }}>
                    {t('article_page.newsletter_desc') || 'Monthly insights for Chinese executives operating in Indonesia.'}
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Your work email"
                      style={{ 
                        width: '100%', 
                        background: 'rgba(255,255,255,0.05)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '4px',
                        color: '#fff', 
                        padding: '12px', 
                        fontSize: '14px',
                        marginBottom: '12px',
                        outline: 'none'
                      }} 
                    />
                    <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Subscribe
                    </button>
                  </form>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
}
