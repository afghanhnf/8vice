import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function CaseStudy() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allCases = [
    {
      category: 'Fintech',
      tag: 'Fintech · Market Entry',
      title: 'A Chinese Fintech Live in 6 Months',
      desc: 'Market entry, licensing pathway, and a local operating team - from scoping to launch.',
      image: '/images/case/fintech.jpg',
      link: '/case-study/chinese-fintech-live'
    },
    {
      category: 'Consumer & Retail',
      tag: 'Consumer · Retail',
      title: 'Shelf to Scale Across 40 Cities',
      desc: 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.',
      image: '/images/case/retail.jpg',
      link: '/case-study/shelf-to-scale'
    },
    {
      category: 'Manufacturing',
      tag: 'Manufacturing',
      title: 'Local Production, De-risked',
      desc: 'Site selection, regulatory navigation, and a resilient supply chain for a manufacturing entrant.',
      image: '/images/case/factory.jpg',
      link: '/case-study/local-production'
    },
    {
      category: 'Logistics',
      tag: 'Logistics',
      title: 'Last-Mile Optimization in Java',
      desc: 'Restructuring local fulfillment to drop delivery times by 30% without burning cash.',
      image: '/images/case/logistics.jpg',
      link: '/case-study/last-mile-optimization'
    },
    {
      category: 'Energy',
      tag: 'Energy',
      title: 'Navigating Smelter Regulations',
      desc: 'A compliant roadmap for a nickel downstreaming project in Sulawesi.',
      image: '/images/case/energy.jpg',
      link: '/case-study/navigating-smelter'
    },
    {
      category: 'Tech',
      tag: 'Tech',
      title: 'Building a Jakarta Engineering Hub',
      desc: 'Recruiting and retaining 50+ senior engineers for a cross-border SaaS company.',
      image: '/images/case/tech.jpg',
      link: '/case-study/engineering-hub'
    },
    {
      category: 'Consumer & Retail',
      tag: 'Consumer · Retail',
      title: 'FMCG Market Penetration',
      desc: 'Helping a global brand enter rural markets in Indonesia through localized distribution.',
      image: '/images/case/fmcg.jpg',
      link: '/case-study/fmcg-market-penetration'
    },
    {
      category: 'Fintech',
      tag: 'Fintech',
      title: 'P2P Lending Compliance',
      desc: 'Securing OJK licenses for a foreign peer-to-peer lending platform in record time.',
      image: '/images/case/p2p.jpg',
      link: '/case-study/p2p-compliance'
    }
  ];

  const categories = ['All', 'Fintech', 'Consumer & Retail', 'Manufacturing', 'Logistics', 'Energy', 'Tech'];

  const filteredCases = activeTab === 'All' 
    ? allCases 
    : allCases.filter(c => c.category === activeTab);

  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
  const paginatedCases = filteredCases.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.case_title')}</title>
        <meta name="description" content={t('meta.case_desc')} />
        <meta property="og:title" content={t('meta.case_title')} />
        <meta property="og:description" content={t('meta.case_desc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-default.png" />
      </Head>

      {/* ============================ FEATURED CASE HERO ============================ */}
      <header className="page-hero page-hero--tall" style={{ paddingBottom: '140px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Case Studies</span>
            </div>
            
            <span className="tag" style={{ background: 'rgba(214,40,40,.15)', marginTop: '8px' }}>Fintech · Market Entry</span>
            
            <h1 className="t-display" style={{ fontSize: 'clamp(38px,4.4vw,56px)', marginTop: '18px', maxWidth: '800px', lineHeight: 1.15 }}>
              {t('case_study_page.dir_hero_1') || 'A Chinese fintech, live in six months.'}
            </h1>
            
            <p className="page-hero__lead" style={{ marginTop: '20px' }}>
              {t('case_study_page.dir_feat_brief') || 'A payments company with strong product and real capital had stalled twice trying to enter Indonesia. We compressed a typically 18-month entry into six - licensing, structure, and a working local team.'}
            </p>
            
            <div className="page-hero__meta">
              <div>
                <div className="n">6<span className="unit">mo</span></div>
                <div className="l">Scoping to launch</div>
              </div>
              <div>
                <div className="n">3<span className="unit">×</span></div>
                <div className="l">Faster than prior attempts</div>
              </div>
              <div>
                <div className="n">14</div>
                <div className="l">Local hires onboarded</div>
              </div>
              <div>
                <div className="n">1</div>
                <div className="l">License correctly sequenced</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ============================ CASE COVER IMAGE ============================ */}
      <div className="container" style={{ maxWidth: '1040px', marginTop: '-80px', position: 'relative', zIndex: 2, marginBottom: '100px' }}>
        <ScrollReveal delay={100} variant="up">
          <div style={{ aspectRatio: '21/9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <img src="/images/featured_case_cover.png" alt="Featured Case Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </ScrollReveal>
      </div>

      {/* ============================ CASE MATRIX ============================ */}
      <section className="section section--paper" id="case-matrix">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
              {categories.map((tab, i) => (
                <button 
                  key={i}
                  onClick={() => handleTabChange(tab)}
                  className={`client-filter ${activeTab === tab ? 'is-active' : ''}`}
                  style={{ padding: '8px 24px', fontSize: '14px', borderRadius: '30px', border: activeTab === tab ? 'none' : '1px solid rgba(0,0,0,0.1)', background: activeTab === tab ? 'var(--color-ink)' : 'transparent', color: activeTab === tab ? '#fff' : 'var(--color-ink)', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {paginatedCases.length > 0 ? (
            <Staggered delay={100} staggerDelay={100} className="cards-3">
              {paginatedCases.map((caseItem, i) => (
                <article key={`${caseItem.title}-${i}`} className="case-card">
                  <div className="ph case-card__cover on-dark">
                    <span className="ph__tag">CASE THUMBNAIL</span>
                  </div>
                  <div className="case-card__body">
                    <span className="tag">{caseItem.tag}</span>
                    <h3 className="t-h3">{caseItem.title}</h3>
                    <p>{caseItem.desc}</p>
                    <Link href={caseItem.link} className="link-arrow">
                      Read case study
                      <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </Staggered>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              No case studies found for this category.
            </div>
          )}

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px' }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => {
                     setCurrentPage(page);
                     document.getElementById('case-matrix').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0,0,0,0.1)',
                    background: currentPage === page ? 'var(--color-red)' : 'transparent',
                    color: currentPage === page ? '#fff' : 'inherit',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p className="case-note" style={{ textAlign: 'center' }}>
              Named, detailed case studies are published with client permission.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section section--white">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band">
              <h2 className="t-h2">Stalled on an Indonesia <span className="accent">entry?</span></h2>
              <p className="t-body-lg">Most stalls are sequencing problems, not strategy problems. Let us take an honest look.</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  Book Free Consultancy
                  <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </MainLayout>
  );
}
