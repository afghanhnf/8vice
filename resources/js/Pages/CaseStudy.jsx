import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function CaseStudy({ caseStudies = [] }) {
  const { t, locale } = useTranslation();
  const isId = locale === 'id';
  const featured = caseStudies.find(c => c.is_featured) || caseStudies[0] || null;
  const featuredUrl = featured ? `/case-study/${featured.slug || featured.id}` : '/case-study';
  const featuredCover = featured?.cover
    ? (featured.cover.startsWith('/') ? featured.cover : `/storage/${featured.cover}`)
    : '/images/featured_case_cover.webp';
  const featuredMetrics = Array.isArray(featured?.metrics) ? featured.metrics.filter(m => m && m.value) : [];
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const tabs = ['All', ...new Set(caseStudies.map(c => c.tag).filter(Boolean))];

  const filteredCases = activeTab === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.tag === activeTab);

  const totalPages = Math.ceil(filteredCases.length / itemsPerPage);
  const paginatedCases = filteredCases.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <MainLayout>
      <SeoHead pageCode="case_study" />

      {/* ============================ FEATURED CASE HERO ============================ */}
      <header className="page-hero page-hero--tall" style={{ paddingBottom: '140px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Case Studies</span>
            </div>
            
            {featured?.tag && (
              <span className="tag" style={{ background: 'rgba(214,40,40,.15)', marginTop: '8px' }}>{featured.tag}</span>
            )}
            
            <h1 className="t-display" style={{ fontSize: 'clamp(38px,4.4vw,56px)', marginTop: '18px', maxWidth: '800px', lineHeight: 1.15 }}>
              {featured?.h || t('case_study_page.dir_hero_1') || 'A Chinese fintech, live in six months.'}
            </h1>
            
            <p className="page-hero__lead" style={{ marginTop: '20px' }}>
              {featured?.p || t('case_study_page.dir_feat_brief')}
            </p>

            <div style={{ marginTop: '28px', marginBottom: '40px' }}>
              <Link href={featuredUrl} className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                {t('case_study_page.dir_feat_btn') || 'Read Featured Case Study'}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
            
            {featuredMetrics.length > 0 && (
              <div className="page-hero__meta">
                {featuredMetrics.map((m, i) => (
                  <div key={i}>
                    <div className="n">{m.value}{m.unit ? <span className="unit">{m.unit}</span> : null}</div>
                    <div className="l">{(isId ? m.label_id : m.label_en) || m.label_en || m.label_id}</div>
                  </div>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </header>

      {/* ============================ CASE COVER IMAGE ============================ */}
      <div className="container" style={{ maxWidth: '1040px', marginTop: '-80px', position: 'relative', zIndex: 2, marginBottom: '100px' }}>
        <ScrollReveal delay={100} variant="up">
          <Link href={featuredUrl} style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ aspectRatio: '21/9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', transition: 'transform 0.3s ease' }}>
              <img width="800" height="600" src={featuredCover} alt={featured?.h || 'Featured Case Cover'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Link>
        </ScrollReveal>
      </div>

      {/* ============================ CASE MATRIX ============================ */}
      <section className="section section--paper" id="case-matrix">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
              {tabs.map((tab, i) => (
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
                <article key={caseItem.id || i} className="case-card" style={{ background: '#fff', border: '1px solid #ebebeb', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <Link href={`/case-study/${caseItem.slug || caseItem.id}`} style={{ display: 'block', overflow: 'hidden', height: '240px' }}>
                    {caseItem.cover ? (
                      <img width="800" height="600" src={caseItem.cover.startsWith('/') ? caseItem.cover : `/storage/${caseItem.cover}`} alt={caseItem.h} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                    ) : (
                      <div className="ph case-card__cover on-dark" style={{ height: '100%' }}>
                        <span className="ph__tag">CASE THUMBNAIL</span>
                      </div>
                    )}
                  </Link>
                  <div className="case-card__body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span className="tag" style={{ marginBottom: '10px', alignSelf: 'flex-start' }}>{caseItem.tag}</span>
                    <h3 className="t-h3" style={{ fontSize: '19px', lineHeight: 1.3, marginBottom: '12px' }}>{caseItem.h}</h3>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.55, marginBottom: '20px', flexGrow: 1 }}>{caseItem.p}</p>
                    <Link href={`/case-study/${caseItem.slug || caseItem.id}`} className="link-arrow" style={{ fontSize: '14px', fontWeight: 600 }}>
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
