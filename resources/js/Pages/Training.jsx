import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

const CheckIcon = () => (
  <svg className="ico ico-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const capabilitiesList = [
  {
    title: 'Branding & Public Relationship',
    desc: 'Shape and protect your corporate identity in the local market through strategic narrative building and stakeholder engagement.',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>
  },
  {
    title: 'Marketing Communication',
    desc: 'Craft clear, culturally resonant messaging that bridges the gap between your brand and Indonesian audiences.',
    icon: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across local social platforms, search engines, and marketplaces to drive measurable growth.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>
  },
  {
    title: 'Business Development',
    desc: 'Identify and secure high-value partnerships, distribution channels, and B2B opportunities in a relationship-driven economy.',
    icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>
  },
  {
    title: 'Supply Chain',
    desc: 'Build resilient sourcing, logistics, and distribution networks tailored to Indonesia\'s unique geographical challenges.',
    icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>
  },
  {
    title: 'Sales & Marketing',
    desc: 'Integrate sales strategy with marketing execution to maximize conversion rates and customer retention.',
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>
  },
  {
    title: 'Sustainability',
    desc: 'Align your operations with local ESG regulations and consumer expectations for sustainable business practices.',
    icon: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></>
  },
  {
    title: 'Business Analysis',
    desc: 'Transform raw market data into actionable insights through rigorous financial and operational analysis.',
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>
  },
  {
    title: 'Road to Market',
    desc: 'A complete, sequenced roadmap taking you from strategic planning to successful market entry and product launch.',
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></>
  }
];

export default function Training() {
  const [format, setFormat] = useState('onsite');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value.trim())) {
      setEmailError('Please enter a valid email address.');
      emailInput.focus();
      return;
    }
    setEmailError('');
    setFormSubmitted(true);
  };

  return (
    <MainLayout>
      <Head title="8vice - Training" />

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
                <span className="cur">Training</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '20ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>Make your local team </span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>fluent in the Indonesian market.</span>
                </h1>
                <p className="page-hero__lead">
                  Two ways to build capability: bespoke programs designed and delivered on request, or an on-demand e-learning subscription your whole team can access anytime.
                </p>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/training_hero.png" alt="Training Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CAPABILITIES ============================ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <ScrollReveal className="section-head">
            <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <span className="about-hero__dot"></span>
              Capabilities
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>Our Training Focus Areas.</h2>
          </ScrollReveal>

          <Staggered delay={100} staggerDelay={80} className="svc-cap-grid svc-cap-grid--3col">
            {capabilitiesList.map((cap, i) => (
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

      {/* ============================ CUSTOM TRAINING REQUEST ============================ */}
      <section className="svc-section svc-section--light" id="request">
        <div className="container">
          <ScrollReveal>
            <div className="train-req">
              <div className="train-req__copy">
                <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                  <span className="about-hero__dot"></span>
                  Training · Online & Offline
                </div>
                <h2 className="t-h2">Custom training, built around your team.</h2>
                <p className="t-body-lg">Tell us what your local team needs to learn. We design and deliver bespoke programs - onsite in Jakarta, hybrid, or fully online - led by senior operators who've actually run businesses in this market.</p>
                <ul className="train-feats train-feats--light">
                  <li><CheckIcon /> Scoped to your industry & team size</li>
                  <li><CheckIcon /> Onsite, hybrid, or fully online delivery</li>
                  <li><CheckIcon /> English & Bahasa Indonesia. Mandarin on request</li>
                  <li><CheckIcon /> Delivered by operators, not classroom trainers</li>
                </ul>
              </div>
              <div className="train-req__form">
                <h3 className="t-h4">Request a training program</h3>
                <p className="train-req__note">Tell us the basics. We'll respond within two business days.</p>
                {!formSubmitted ? (
                  <form className="req-form" onSubmit={handleFormSubmit} noValidate>
                    <div className="req-row">
                      <label className="req-field"><span>Full name</span><input type="text" placeholder="Your name" required /></label>
                      <label className="req-field"><span>Company</span><input type="text" placeholder="Company name" /></label>
                    </div>
                    <label className="req-field"><span>Work email</span><input type="email" placeholder="you@company.com" required /></label>
                    <label className="req-field"><span>What does your team need to learn?</span><textarea rows="3" placeholder="e.g. market entry, distribution, cross-cultural management…" /></label>
                    <div className="req-field req-field--inline">
                      <span>Preferred format</span>
                      <div className="req-pills" role="group" aria-label="Preferred format">
                        {['onsite', 'hybrid', 'online'].map(f => (
                          <button key={f} type="button" className={`req-pill${format === f ? ' is-active' : ''}`} onClick={() => setFormat(f)}>
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="field-err">{emailError}</span>
                    <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit request
                      <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                  </form>
                ) : (
                  <div className="req-success" style={{ display: 'flex' }}>
                    <svg className="ico ico-24" viewBox="0 0 24 24" fill="none" stroke="var(--color-success, #00b43c)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24, flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div><strong>Request received.</strong><br />Our team will reach out within two business days.</div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <ScrollReveal variant="up">
        <section className="svc-section svc-section--dark" style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div className="cta-band" style={{ background: '#141519', border: '1px solid rgba(255,255,255,.1)' }}>
              <h2 className="t-h2">Build a team that <span className="accent">gets Indonesia.</span></h2>
              <p className="t-body-lg">Request a bespoke program for your team today.</p>
              <div className="hero__ctas" style={{ justifyContent: 'center' }}>
                <a href="#request" className="btn btn--primary btn--lg">Request Training</a>
                <Link href="/contact" className="btn btn--ghost-light btn--lg">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </MainLayout>
  );
}
