import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function MarketIntelligence() {

  const capabilities = [
    {
      icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
      title: 'Market Sizing & Forecasting',
      desc: 'Data-backed TAM, SAM, and SOM analysis with 3–5 year projections tailored to Indonesia\'s unique regional dynamics across Java, Sumatra, and Kalimantan.'
    },
    {
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
      title: 'Regulatory & Policy Analysis',
      desc: 'Deep-dive into Indonesia\'s evolving regulatory landscape including BKPM requirements, negative investment lists, sector-specific licenses, and regional autonomy implications.'
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
      title: 'Competitor Benchmarking',
      desc: 'Comprehensive mapping of local and international competitors, pricing strategies, distribution networks, and market share analysis across key Indonesian sectors.'
    },
    {
      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
      title: 'Consumer & Channel Insights',
      desc: 'On-the-ground consumer behavior research, retail audit, e-commerce landscape analysis, and distributor network evaluation across Indonesia\'s archipelago.'
    },
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
      title: 'Digital Economy Analysis',
      desc: 'Indonesia\'s digital ecosystem mapped - e-commerce platforms, fintech adoption, social commerce trends, and the infrastructure driving 200M internet users.'
    },
    {
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
      title: 'Industry Sector Deep-Dives',
      desc: 'Dedicated research programs for specific sectors - manufacturing, consumer goods, healthcare, fintech - with local expert panels and primary data collection.'
    }
  ];

  const processSteps = [
    { num: '1', title: 'Discovery', desc: 'Deep-dive kickoff to understand your business objectives, target sectors, and data requirements.' },
    { num: '2', title: 'Field Research', desc: 'Primary and secondary data collection across Indonesian markets, including stakeholder interviews and on-ground surveys.' },
    { num: '3', title: 'Analysis', desc: 'Cross-referencing findings against regulatory, cultural, and economic frameworks with proprietary models.' },
    { num: '4', title: 'Delivery', desc: 'Actionable intelligence report with clear recommendations and a practical go-to-market roadmap.' }
  ];

  const scopeItems = [
    { title: 'Market Entry Report', desc: 'Comprehensive analysis of addressable market, competitive landscape, and regulatory pathways for your specific sector.' },
    { title: 'Regulatory Compliance Guide', desc: 'Detailed mapping of required licenses, permits, and approvals across national and regional government bodies.' },
    { title: 'Competitor Profiles', desc: 'In-depth profiles of top 5–10 competitors including their market positioning, pricing, distribution strategy, and local partnerships.' },
    { title: 'Consumer Survey & Analysis', desc: 'Primary research with target consumer segments, including purchasing behavior, brand awareness, and channel preferences.' },
    { title: 'Digital Landscape Assessment', desc: 'Full e-commerce, social, and fintech ecosystem mapping with platform-specific entry playbooks and cost benchmarks.' }
  ];

  return (
    <MainLayout>
      <Head title="8vice - Market Intelligence" />

      {/* ============================ HERO ============================ */}
      <section className="page-hero page-hero--tall has-geo-bg" style={{ background: 'var(--color-ink)', paddingTop: '120px' }}>
        <div className="geo-bg">
          <div className="geo-bg__grid"></div>
          <div className="geo-bg__gradients"></div>
          <div className="geo-bg__dots"></div>
          <div className="geo-bg__boxes"></div>
          <div className="geo-bg__rects"></div>
          <div className="geo-bg__bars"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <nav className="breadcrumb">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href="/services">Services</Link><span className="sep">/</span>
                <span className="cur">Market Intelligence</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '20ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>Know the market </span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>before the market knows you.</span>
                </h1>
                <p className="page-hero__lead">
                  Data-driven insights to navigate Indonesia's complex regulatory and competitive landscape. We help Chinese businesses decode local market dynamics with precision.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="page-hero__meta">
                  <div><div className="n">50<span className="unit">+</span></div><div className="l">Intelligence reports delivered</div></div>
                  <div><div className="n">15</div><div className="l">Sectors covered</div></div>
                  <div><div className="n">34</div><div className="l">Provinces researched</div></div>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/market_intelligence_hero.png" alt="Market Intelligence Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ INTRO / APPROACH ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <div className="lead-row">
            <ScrollReveal>
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                The Approach
              </div>
              <h2 className="t-h2">Research that actually moves decisions.</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>We combine rigorous quantitative analysis with deep on-the-ground qualitative research to deliver actionable market intelligence. Our analysts work across Indonesia's major urban centers and emerging regional markets to provide a complete picture.</p>
                <p>Every engagement begins with understanding your strategic objectives, then we tailor our research framework to deliver insights that directly inform your go-to-market decisions in Indonesia.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================ CAPABILITIES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              Six Intelligence Pillars
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>How we map the market.</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-cap-grid svc-cap-grid--3col">
            {capabilities.map((cap, i) => (
              <div key={i} className="svc-cap-card">
                <div className="svc-cap-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {cap.icon}
                  </svg>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </Staggered>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="svc-section svc-section--darker">
        <div className="container">
          <ScrollReveal className="section-head" style={{ textAlign: 'left' }}>
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              Research Process
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>From question to roadmap.</h2>
          </ScrollReveal>

          <div className="svc-process__track" style={{ maxWidth: '100%', margin: 0 }}>
            <div className="svc-process__line" style={{ left: '12.5%', right: '12.5%' }}></div>
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

      {/* ============================ SCOPE / DELIVERABLES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              Deliverables
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>What you take away.</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-scope-grid">
            {scopeItems.map((item, i) => (
              <div key={i} className="svc-scope-item">
                <div className="svc-scope-item__ico">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
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

      {/* ============================ CASE TEASER ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <ScrollReveal>
            <div className="impact__inner">
              <div className="impact__thumb" style={{ background: 'linear-gradient(135deg, rgba(214,40,40,0.1) 0%, var(--color-gray-100) 100%)' }}>
                {/* Placeholder for case study image */}
              </div>
              <div>
                <span className="tag">E-Commerce · Market Assessment</span>
                <h2 className="t-h2" style={{ margin: '8px 0 18px' }}>Mapping Indonesia's e-commerce battlefield.</h2>
                <p className="t-body-lg" style={{ color: 'var(--color-gray-600)', marginBottom: '28px' }}>
                  Identified key partnership opportunities with local logistics providers and digital payment gateways for a leading Chinese retail platform entering the Indonesian market.
                </p>
                <Link href="/case-study" className="btn btn--ghost-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Read the case study
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="svc-section svc-section--dark" style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div className="cta-band">
              <h2 className="t-h2">Ready to unlock Indonesia's <span className="accent">market potential?</span></h2>
              <p className="t-body-lg">Let's talk data. We'll scope your intelligence needs within two business days.</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  Request a Market Briefing
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
