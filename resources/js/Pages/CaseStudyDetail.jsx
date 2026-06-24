import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal from '@/Components/ScrollReveal';

export default function CaseStudyDetail({ slug }) {
  const caseData = {
    tag: 'Fintech · Market Entry',
    title: 'A Chinese Fintech Live in 6 Months',
    date: 'March 2026',
    desc: 'A payments company with strong product and real capital had stalled twice trying to enter Indonesia. We compressed a typically 18-month entry into six - licensing, structure, and a working local team.',
    deliverables: [
      'Market Entry Strategy',
      'Regulatory Licensing',
      'Corporate Restructuring',
      'Local Team Recruitment'
    ]
  };

  const relatedCases = [
    {
      tag: 'Logistics',
      title: 'Last-Mile Optimization in Java',
      desc: 'Restructuring local fulfillment to drop delivery times by 30% without burning cash.',
      link: '/case-study/last-mile-optimization'
    },
    {
      tag: 'Tech',
      title: 'Building a Jakarta Engineering Hub',
      desc: 'Recruiting and retaining 50+ senior engineers for a cross-border SaaS company.',
      link: '/case-study/engineering-hub'
    },
    {
      tag: 'Manufacturing',
      title: 'Local Production, De-risked',
      desc: 'Site selection, regulatory navigation, and a resilient supply chain for a manufacturing entrant.',
      link: '/case-study/local-production'
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>{`8vice - Case Study - ${caseData.title}`}</title>
        <meta name="description" content={caseData.desc || caseData.p} />
        <meta property="og:title" content={`8vice - Case Study - ${caseData.title}`} />
        <meta property="og:description" content={caseData.desc || caseData.p} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={caseData.cover || "/images/og-default.png"} />
      </Head>

      {/* 1. Title & 2. Explanation */}
      <header className="page-hero page-hero--tall" style={{ paddingBottom: '80px', paddingTop: '140px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/case-study">Case Studies</Link><span className="sep">/</span>
              <span className="cur">{caseData.title}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <span className="tag" style={{ background: 'rgba(214,40,40,.15)' }}>{caseData.tag}</span>
                <span className="tag" style={{ background: 'rgba(0,0,0,.05)', color: '#666' }}>{caseData.date}</span>
            </div>
            
            <h1 className="t-display" style={{ fontSize: 'clamp(38px,4.4vw,56px)', marginTop: '18px', maxWidth: '800px', lineHeight: 1.15 }}>
              {caseData.title}
            </h1>
            
            <p className="page-hero__lead" style={{ marginTop: '20px' }}>
              {caseData.desc}
            </p>
            
            {/* 3. Deliverables / Metrics */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '40px' }}>
              {caseData.deliverables.map((item, i) => (
                <span key={i} className="tag" style={{ background: '#000', padding: '10px 20px', borderRadius: '30px', fontSize: '15px', fontWeight: '600', color: '#fff' }}>
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Removed Big Image */}

      <section className="section section--paper" style={{ paddingBottom: '120px' }}>
        
        {/* 5. Project Analysis with Side Image */}
        <div className="container" style={{ marginBottom: '80px' }}>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 min(100%, 400px)' }}>
                 <ScrollReveal>
                    <h2 className="t-h2" style={{ marginBottom: '24px' }}>Project Analysis</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--color-ink)', opacity: 0.8, marginBottom: '16px' }}>
                       We began by dissecting the client's previous two failed attempts to penetrate the Indonesian market. The primary issue was not a lack of capital or a flawed product, but rather a sequence mismatch in licensing and structural setup. 
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--color-ink)', opacity: 0.8 }}>
                       Our team mapped out the precise KBLI requirements, ownership thresholds, and regulatory roadblocks, ultimately designing a comprehensive structural pathway that prioritized legal compliance without sacrificing operational agility.
                    </p>
                 </ScrollReveal>
              </div>
              <div style={{ flex: '1 1 min(100%, 500px)' }}>
                 <ScrollReveal delay={200}>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
                       <img src="/images/project_analysis.png" alt="Project Analysis" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                 </ScrollReveal>
              </div>
           </div>
        </div>

        {/* 6. Challenges & Insights with Side Image (Alternating Layout) */}
        <div className="container" style={{ marginBottom: '80px' }}>
           <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '48px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 min(100%, 500px)' }}>
                 <ScrollReveal delay={200}>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
                       <img src="/images/challenges_insights.png" alt="Challenges and Insights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                 </ScrollReveal>
              </div>
              <div style={{ flex: '1 1 min(100%, 400px)' }}>
                 <ScrollReveal>
                    <h2 className="t-h2" style={{ marginBottom: '24px' }}>Challenges & Insights</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--color-ink)', opacity: 0.8, marginBottom: '16px' }}>
                       The most significant hurdle was un-winding the technically sound but practically unusable corporate structure established by the previous consultancy. It required meticulous negotiation and restructuring.
                    </p>
                    <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--color-ink)', opacity: 0.8 }}>
                       A key insight gained was that in the Indonesian fintech space, sequencing is everything. Permits often gate other operational capabilities. By reordering the application and setup process, we bypassed typical bottlenecks and compressed the timeline dramatically.
                    </p>
                 </ScrollReveal>
              </div>
           </div>
        </div>

        {/* 7. CTA */}
        <div className="container" style={{ marginBottom: '80px' }}>
          <ScrollReveal>
              <div style={{ padding: '60px', background: 'var(--color-ink)', color: '#fff', borderRadius: '16px', textAlign: 'center' }}>
                  <h3 className="t-h2" style={{ marginBottom: '16px', color: '#fff' }}>Facing a similar challenge?</h3>
                  <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
                     Let's discuss how we can help you navigate the Indonesian market with a properly sequenced, data-driven strategy.
                  </p>
                  <Link href="/contact" className="btn btn--primary btn--lg">
                      Book Free Consultancy
                      <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
              </div>
          </ScrollReveal>
        </div>

        {/* 8. Other Case Studies */}
        <div className="container">
          <ScrollReveal>
            <div className="section-head" style={{ marginBottom: '40px', textAlign: 'left' }}>
              <div className="eyebrow" style={{ justifyContent: 'flex-start' }}>Keep Reading</div>
              <h2 className="t-h3">Other Case Studies</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
             <div className="cards-3">
               {relatedCases.map((rc, i) => (
                  <article key={i} className="case-card" style={{ background: '#f9f9f9', border: '1px solid #eaeaea', borderRadius: '12px' }}>
                     <div className="case-card__body">
                        <span className="tag" style={{ background: 'rgba(0,0,0,0.05)', color: '#666' }}>{rc.tag}</span>
                        <h4 className="t-h4" style={{ marginTop: '16px', marginBottom: '12px' }}>{rc.title}</h4>
                        <p style={{ fontSize: '14px', marginBottom: '24px' }}>{rc.desc}</p>
                        <Link href={rc.link} className="link-arrow" style={{ fontSize: '14px', fontWeight: '600' }}>
                           Read case study
                           <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                     </div>
                  </article>
               ))}
             </div>
          </ScrollReveal>
        </div>

      </section>
    </MainLayout>
  );
}
