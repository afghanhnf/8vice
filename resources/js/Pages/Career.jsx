import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Career() {
  const { t } = useTranslation();
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Advisor - Consumer & Retail",
      dept: "Jakarta · Hybrid",
      type: "Full-time",
      reqs: [
        "10+ years experience in retail operations or distribution in Southeast Asia.",
        "Proven track record of executing strategic market entries.",
        "Fluent in Mandarin and Bahasa Indonesia.",
        "Strong analytical framing and presentation skills."
      ]
    },
    {
      id: 2,
      title: "Partner - China Desk",
      dept: "Jakarta / Shenzhen",
      type: "Full-time",
      reqs: [
        "P&L leadership experience bridging Chinese HQs and Indonesian subsidiaries.",
        "Deep understanding of cross-border regulatory frameworks.",
        "Executive-level stakeholder management.",
        "Must be willing to travel 40%."
      ]
    },
    {
      id: 3,
      title: "Licensing & Regulatory Specialist",
      dept: "Jakarta · Onsite",
      type: "Full-time",
      reqs: [
        "Expert knowledge of OSS, BKPM processes, and KBLI structuring.",
        "5+ years navigating Indonesian bureaucracy for foreign entities.",
        "Detail-oriented with strong legal analysis capabilities."
      ]
    },
    {
      id: 4,
      title: "Training Content Producer (E-learning)",
      dept: "Remote · Indonesia",
      type: "Contract",
      reqs: [
        "Experience producing B2B e-learning or corporate training modules.",
        "Strong storytelling and instructional design skills.",
        "Familiarity with cross-cultural business dynamics."
      ]
    }
  ];

  return (
    <MainLayout>
      <Head title="8vice - Careers" />

      {/* ============================ HERO ============================ */}
      <section className="page-hero page-hero--tall">
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Career</span>
            </div>
            <h1 className="t-h1" style={{ maxWidth: '20ch' }}>
              {t('career_page.hero_title_1') || 'Work where your experience is the product.'}
            </h1>
            <p className="page-hero__lead">
              We don't hire for résumés or run a pyramid of juniors. We bring on operators who've built real things in Indonesia or Greater China - and let them do the work that matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ WHY JOIN ============================ */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="lead-row">
              <div>
                <div className="eyebrow">Why 8vice</div>
                <h2 className="t-h2">Seniority, autonomy, and honest work.</h2>
              </div>
              <div className="lead-row__body">
                <p>Most advisory careers ask you to sell more than you deliver. We're built the other way: small senior teams, scoped engagements, and the freedom to tell a client the truth.</p>
                <p>If you've operated across the China–Indonesia corridor and you're tired of decks that nobody has to live with, you'll feel at home here.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ PERKS ============================ */}
      <section className="section section--white">
        <div className="container">
          <Staggered delay={100} staggerDelay={100} className="cap-grid">
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              </div>
              <h3 className="t-h4">Real autonomy</h3>
              <p>Own your engagements end to end. No layers of approval between you and the client.</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="t-h4">Senior peers</h3>
              <p>Everyone around you has carried P&amp;L. Learn from operators, not slide-makers.</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 className="t-h4">Flexible base</h3>
              <p>Jakarta-anchored, with room to work between Indonesia and Greater China.</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path></svg>
              </div>
              <h3 className="t-h4">Profit share</h3>
              <p>When the firm does well because clients trust us, you share in it directly.</p>
            </div>
          </Staggered>
        </div>
      </section>

      {/* ============================ OPEN ROLES ============================ */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="section-head" style={{ marginBottom: '32px' }}>
              <div className="eyebrow">Open Roles</div>
              <h2 className="t-h2">Where we're hiring.</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="job-list">
              {jobs.map((job) => (
                <div key={job.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  
                  {/* Job Row Trigger */}
                  <div 
                    className="job-row" 
                    onClick={() => toggleJob(job.id)}
                    style={{ cursor: 'pointer', borderBottom: 'none' }}
                  >
                    <div><h3 className="t-h4">{job.title}</h3></div>
                    <span className="job-meta">{job.dept}</span>
                    <span className="tag">{job.type}</span>
                    <button className="link-arrow" style={{ background: 'none', border: 'none', color: 'var(--color-red)', fontWeight: 'bold' }}>
                      {expandedJob === job.id ? 'Close' : 'Details'}
                      <svg className="ico ico-16" viewBox="0 0 24 24" style={{ transform: expandedJob === job.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>

                  {/* Accordion Form */}
                  <div style={{ 
                    maxHeight: expandedJob === job.id ? '1000px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.4s ease',
                    background: 'var(--color-white)'
                  }}>
                      <div style={{ marginTop: '16px', paddingTop: '32px', borderTop: '1px solid var(--color-gray-100)' }}>
                        {/* Reqs */}
                        <div>
                          <h4 style={{ fontSize: '16px', marginBottom: '16px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Requirements</h4>
                          <ul style={{ paddingLeft: '20px', color: 'var(--color-gray-600)', fontSize: '15px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {job.reqs.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="case-note" style={{ textAlign: 'left', marginTop: '28px' }}>
              Don't see your role? We always want to meet strong operators. <a href="#apply-form" className="link-arrow" style={{ fontSize: '14px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); document.getElementById('apply').scrollIntoView({ behavior: 'smooth' }); }}>Send an open application<svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ GLOBAL APPLY FORM ============================ */}
      <section className="section section--white" id="apply" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <ScrollReveal>
             <div className="train-req__form" style={{ padding: '40px', borderRadius: '16px', border: '1px solid var(--color-gray-200)', background: '#fcfcfc' }}>
               <h4 style={{ fontSize: '20px', marginBottom: '32px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Submit your application</h4>
               <form className="req-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                 <label className="req-field" style={{ width: '100%' }}>
                   <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>Role</span>
                   <select required style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }}>
                      <option value="">Select a role...</option>
                      {jobs.map(job => (
                        <option key={job.id} value={job.id}>{job.title}</option>
                      ))}
                      <option value="open">Open Application / Other</option>
                   </select>
                 </label>
                 <label className="req-field" style={{ width: '100%' }}>
                   <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>Full Name</span>
                   <input type="text" placeholder="Your name" required style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} />
                 </label>
                 <label className="req-field" style={{ width: '100%' }}>
                   <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>Email</span>
                   <input type="email" placeholder="you@domain.com" required style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} />
                 </label>
                 <label className="req-field" style={{ width: '100%' }}>
                   <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>LinkedIn Profile</span>
                   <input type="url" placeholder="https://linkedin.com/in/..." style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} />
                 </label>
                 
                 <div className="req-field" style={{ width: '100%', marginTop: '8px' }}>
                   <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>Resume / CV</span>
                   <div style={{ position: 'relative' }}>
                     <input type="file" id="cv-global" style={{ display: 'none' }} />
                     <label htmlFor="cv-global" style={{ 
                       display: 'block', width: '100%', background: '#fff', border: '1px dashed var(--color-gray-400)', 
                       color: 'var(--color-gray-600)', padding: '24px', borderRadius: '8px', textAlign: 'center', cursor: 'pointer',
                       transition: 'background 0.2s', fontSize: '15px'
                     }}>
                       Click to upload PDF
                     </label>
                   </div>
                 </div>
                 
                 <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '16px', borderRadius: '8px', fontSize: '16px' }}>
                   Apply for this role
                 </button>
               </form>
             </div>
          </ScrollReveal>
        </div>
      </section>

    </MainLayout>
  );
}
