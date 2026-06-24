import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function ArticleDetail({ slug }) {
  // In a real app, you would fetch the article data based on the slug.
  // We'll use a hardcoded article matching the legacy design for now.
  const article = {
    title: "The licensing pathway most Chinese entrants get wrong.",
    category: "Market Entry",
    date: "May 2026",
    readTime: "8 min read",
    author: {
      name: "Rizki Pratama",
      role: "Partner, Market Entry",
      photo: "/images/team/placeholder.jpg"
    },
    cover: "/images/article-cover.jpg"
  };

  return (
    <MainLayout>
      <Head>
        <title>{`8vice - ${article.title}`}</title>
        <meta name="description" content={`Insight from 8vice: ${article.title}`} />
        <meta property="og:title" content={`8vice - ${article.title}`} />
        <meta property="og:description" content={`Insight from 8vice: ${article.title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.cover || "/images/og-default.png"} />
      </Head>

      <article>
        {/* ============================ ARTICLE MASTHEAD ============================ */}
        <header className="page-hero">
          <div className="container" style={{ maxWidth: '840px' }}>
            <ScrollReveal>
              <div className="breadcrumb">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href="/article">Insight</Link><span className="sep">/</span>
                <span className="cur">Article</span>
              </div>
              
              <div className="meta" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', marginTop: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-red)' }}>
                  {article.category}
                </span>
                <span style={{ color: 'var(--color-gray-400)', fontSize: '13px' }}>
                  {article.readTime} &middot; {article.date}
                </span>
              </div>
              
              <h1 className="t-h1" style={{ marginBottom: '32px' }}>{article.title}</h1>
              
              <div className="byline">
                <div className="ph byline__avatar" style={{ overflow: 'hidden' }}>
                  {article.author.photo ? <img src={article.author.photo} alt={article.author.name} style={{width:'100%', height:'100%', objectFit:'cover'}} onError={e => e.target.style.display='none'}/> : <span className="ph__tag" style={{ fontSize: '9px' }}>PHOTO</span>}
                </div>
                <div>
                  <div className="byline__name" style={{ color: '#fff' }}>{article.author.name}</div>
                  <div className="byline__role">{article.author.role}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* ============================ COVER IMAGE ============================ */}
        <div className="container" style={{ maxWidth: '1040px', marginTop: '-40px', position: 'relative', zIndex: 2 }}>
          <ScrollReveal delay={100} variant="up">
            <div className="ph" style={{ aspectRatio: '21/9', borderRadius: '16px', overflow: 'hidden' }}>
              {article.cover ? <img src={article.cover} alt="Cover" style={{width:'100%', height:'100%', objectFit:'cover'}} /> : <span className="ph__tag">ARTICLE COVER &middot; 21:9</span>}
            </div>
          </ScrollReveal>
        </div>

        {/* ============================ ARTICLE BODY & SIDEBAR ============================ */}
        <section className="section section--white">
          <div className="container" style={{ maxWidth: '1040px' }}>
            <div className="article-layout">
              
              {/* Main Content */}
              <div className="prose">
                <ScrollReveal>
                  <p className="lede">Three out of four Chinese companies we meet have already misread the Online Single Submission system before they ever call us. Not because they're careless - because the sequence is genuinely counter-intuitive, and the cost of getting it wrong is measured in lost quarters.</p>

                  <p>Here is the pattern. A capable company decides to enter Indonesia. Someone - often a well-meaning law firm working from a checklist - tells them to register the company first, then sort out the business licenses. On paper that's correct. In practice, it's the single most expensive ordering mistake a foreign entrant can make.</p>

                  <h2 id="why">Why the order matters</h2>
                  <p>Indonesia classifies every business activity under a KBLI code, and your permitted foreign ownership, your minimum capital, and your licensing burden all flow from that code. Choose the company structure before you've pinned the exact KBLI - and confirmed it against the latest investment list - and you can find yourself legally incorporated but unable to actually do the thing you came to do.</p>
                  <p>We've watched companies spend four months and real money unwinding a structure that was technically valid and strategically useless. The fix is not more diligence at the end. It's a different sequence at the start.</p>

                  <blockquote>
                    The report telling them what to do was never wrong. It was just never written by anyone who'd have to live with the consequences.
                    <cite>- from our field notes, 2025</cite>
                  </blockquote>

                  <h2 id="sequence">The sequence that works</h2>
                  <p>When we run a market-entry diagnostic, the licensing order looks like this - and it rarely matches the checklist a client arrives with:</p>
                  <ol>
                    <li><strong>Pin the exact activity, then the KBLI.</strong> Not the approximate one. The specific sub-code that governs ownership and capital for what you'll really be doing on day one and in year three.</li>
                    <li><strong>Confirm foreign-ownership headroom.</strong> Check the activity against the current Positive Investment List before any structure is drawn. This is where assumptions quietly break.</li>
                    <li><strong>Design the structure to the code.</strong> Only now decide on PT PMA shape, capital, and any local partnership - because now you know the constraints you're designing within.</li>
                    <li><strong>Sequence the permits.</strong> Some licenses gate others. Map the dependency chain so you're never waiting on a permit you could have filed two months earlier.</li>
                  </ol>

                  <h2 id="assumption">The costly assumption</h2>
                  <p>The assumption almost everyone makes is that licensing is an administrative task to be completed - a box to tick after the strategy is set. It isn't. In Indonesia, the licensing reality <em>is</em> part of the strategy. What you're permitted to own, where, and how fast, should shape the business plan, not merely follow it.</p>
                  
                  <h2 id="next">Where to start</h2>
                  <p>If you're early, do one thing before anything else: write down, in a single sentence, exactly what your Indonesian entity will do on its first day of operation. Then bring that sentence to someone who can map it to a KBLI code and an ownership reality. Almost everything else follows from getting that one sentence right.</p>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <aside className="article-aside">
                <ScrollReveal delay={200}>
                  
                  <div className="aside-box">
                    <h4>In this article</h4>
                    <ul className="toc-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      <li><a href="#why">Why the order matters</a></li>
                      <li><a href="#sequence">The sequence that works</a></li>
                      <li><a href="#assumption">The costly assumption</a></li>
                      <li><a href="#next">Where to start</a></li>
                    </ul>
                  </div>

                  <div className="aside-box">
                    <h4>Share</h4>
                    <div className="share-row">
                      <a href="#" aria-label="LinkedIn">
                        <svg className="ico ico-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" aria-label="Copy link">
                        <svg className="ico ico-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </a>
                      <a href="#" aria-label="Email">
                        <svg className="ico ico-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7l-10 6L2 7"></path></svg>
                      </a>
                    </div>
                  </div>

                  <div className="aside-box" style={{ background: 'var(--color-ink)', color: '#fff', borderColor: 'var(--color-ink)' }}>
                    <h4 style={{ color: 'var(--color-gray-400)' }}>Need this mapped?</h4>
                    <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,.75)', lineHeight: 1.55, marginBottom: '16px' }}>
                      Bring us your one-sentence activity. We'll map the KBLI and ownership reality in your free consultancy call.
                    </p>
                    <Link href="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px' }}>
                      Book a call
                    </Link>
                  </div>

                </ScrollReveal>
              </aside>

            </div>
          </div>
        </section>

        {/* ============================ RELATED ARTICLES ============================ */}
        <section className="section section--paper">
          <div className="container">
            <ScrollReveal>
              <div className="section-head" style={{ marginBottom: '40px' }}>
                <div className="eyebrow">Keep Reading</div>
                <h2 className="t-h3">Related field notes.</h2>
              </div>
            </ScrollReveal>
            
            <Staggered delay={100} staggerDelay={100} className="cards-3">
              <article className="case-card" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden' }}>
                <Link href="/article/negative-investment-list" className="ph" style={{ aspectRatio: '16/10', display: 'block', textDecoration: 'none' }}>
                  <span className="ph__tag">ARTICLE &middot; 16:10</span>
                </Link>
                <div className="case-card__body">
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-red)' }}>Regulation</span>
                    <span style={{ fontSize: '12px', color: '#888' }}>5 min read</span>
                  </div>
                  <h3 className="t-h4" style={{ marginBottom: '12px', minHeight: '56px' }}>Reading the 2026 negative investment list.</h3>
                  <p style={{ fontSize: '14px', marginBottom: '24px', color: 'var(--color-ink)', opacity: 0.8 }}>How the latest updates affect foreign ownership in key sectors.</p>
                  <Link href="/article/negative-investment-list" className="link-arrow" style={{ fontSize: '14px', fontWeight: '600' }}>
                     Read article
                     <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </article>

              <article className="case-card" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden' }}>
                <Link href="/article/first-distributor" className="ph" style={{ aspectRatio: '16/10', display: 'block', textDecoration: 'none' }}>
                  <span className="ph__tag">ARTICLE &middot; 16:10</span>
                </Link>
                <div className="case-card__body">
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-red)' }}>Distribution</span>
                    <span style={{ fontSize: '12px', color: '#888' }}>7 min read</span>
                  </div>
                  <h3 className="t-h4" style={{ marginBottom: '12px', minHeight: '56px' }}>Why your first distributor is usually the wrong one.</h3>
                  <p style={{ fontSize: '14px', marginBottom: '24px', color: 'var(--color-ink)', opacity: 0.8 }}>Avoiding the common pitfalls when selecting local partners.</p>
                  <Link href="/article/first-distributor" className="link-arrow" style={{ fontSize: '14px', fontWeight: '600' }}>
                     Read article
                     <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </article>

              <article className="case-card" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden' }}>
                <Link href="/article/guanxi-translation" className="ph" style={{ aspectRatio: '16/10', display: 'block', textDecoration: 'none' }}>
                  <span className="ph__tag">ARTICLE &middot; 16:10</span>
                </Link>
                <div className="case-card__body">
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-red)' }}>Culture</span>
                    <span style={{ fontSize: '12px', color: '#888' }}>6 min read</span>
                  </div>
                  <h3 className="t-h4" style={{ marginBottom: '12px', minHeight: '56px' }}>Guanxi doesn't translate. Here's what does.</h3>
                  <p style={{ fontSize: '14px', marginBottom: '24px', color: 'var(--color-ink)', opacity: 0.8 }}>Navigating business relationships and trust building in Indonesia.</p>
                  <Link href="/article/guanxi-translation" className="link-arrow" style={{ fontSize: '14px', fontWeight: '600' }}>
                     Read article
                     <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </article>
            </Staggered>
          </div>
        </section>
      </article>
    </MainLayout>
  );
}
