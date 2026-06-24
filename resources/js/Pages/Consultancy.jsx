import React from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import AccordionFAQ from '@/Components/AccordionFAQ';

export default function Consultancy() {

  const capabilities = [
    {
      icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
      title: 'Market Entry Diagnostics',
      desc: 'A clear-eyed read on whether, when, and how to enter - sized, sequenced, and costed.'
    },
    {
      icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>,
      title: 'Licensing & Regulation',
      desc: 'OSS, KBLI classification, the negative investment list, and the permits foreign owners trip on.'
    },
    {
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></>,
      title: 'Local Team Building',
      desc: 'Hiring for the market, not the résumé - leadership, structure, and incentives that hold.'
    },
    {
      icon: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
      title: 'Distribution Strategy',
      desc: 'Channel design and partner selection built around real Indonesian buying behaviour.'
    },
    {
      icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>,
      title: 'Pricing & Positioning',
      desc: 'Localising value and price for a 270-million-person market that is anything but uniform.'
    },
    {
      icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
      title: 'Partner Due Diligence',
      desc: 'Knowing who you\'re actually getting into business with, before the ink dries.'
    },
    {
      icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /></>,
      title: 'Cross-Cultural Management',
      desc: 'Making Mandarin-first HQ and Indonesian operations genuinely work together.'
    },
    {
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
      title: 'Supply Chain & Ops',
      desc: 'Resilient sourcing, production and logistics across Java, Sumatra and beyond.'
    },
    {
      icon: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><polyline points="17 6 23 6 23 12" /></>,
      title: 'Turnaround & Recovery',
      desc: 'When an entry has stalled, we diagnose honestly and rebuild the path forward.'
    }
  ];

  const processSteps = [
    { num: '1', title: 'Discovery', desc: 'A free, candid call. We pressure-test your assumptions and define the real question.' },
    { num: '2', title: 'Scoping', desc: 'A written proposal with a fixed scope, team, timeline and price - sized to your decision.' },
    { num: '3', title: 'Execution', desc: 'We embed with your team and do the work, with weekly checkpoints and zero surprises.' },
    { num: '4', title: 'Handover', desc: 'Board-ready outcomes and a local team able to carry the work without us.' }
  ];

  const faqItems = [
    {
      question: 'How long is a typical engagement?',
      answer: 'It depends on the decision. A focused market-entry diagnostic runs four to six weeks. A full entry - from licensing through first local hires - is usually a three-to-six-month engagement. Turnarounds vary with the depth of the problem. We scope to the work, never to a retainer clock.'
    },
    {
      question: 'Do you stay through execution, or just advise?',
      answer: 'We stay. The whole point of 8vice is that the operators who diagnose the problem are the ones who help you fix it. We embed alongside your team rather than handing over a report and walking away.'
    },
    {
      question: 'How is pricing structured?',
      answer: 'Project-based and fixed at scoping. You\'ll know the price before any work begins, and it won\'t drift. For longer programs we agree milestone-based phases so you can stop or extend at natural decision points.'
    },
    {
      question: 'Can you work with our Mandarin-first HQ?',
      answer: 'Yes. Our China Desk works in Mandarin with your headquarters while our Indonesian operators work locally - so nothing is lost in translation between the two sides of your business.'
    },
    {
      question: 'What if you decide we shouldn\'t proceed?',
      answer: 'Then we\'ll tell you - clearly and early. Talking a client out of a bad move is part of the service. Our reputation in this corridor is worth more than any single engagement fee.'
    }
  ];

  return (
    <MainLayout>
      <Head title="8vice - Consultancy" />

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
                <span className="cur">Consultancy</span>
              </nav>
              <ScrollReveal>
                <h1 className="t-h1" style={{ maxWidth: '18ch', marginBottom: '24px', color: '#fff' }}>
                  <span style={{ fontWeight: '400' }}>Advisory built around your decision, </span>
                  <span style={{ fontWeight: '800', color: 'var(--color-red)' }}>not our template.</span>
                </h1>
                <p className="page-hero__lead">
                  We assemble a small, senior team around your specific situation - then stay through execution. Market entry, expansion, or turnaround, led by operators who've done it here before.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="page-hero__meta">
                  <div><div className="n">9</div><div className="l">Advisory capabilities</div></div>
                  <div><div className="n">6<span className="unit">mo</span></div><div className="l">Typical entry timeline</div></div>
                  <div><div className="n">100<span className="unit">%</span></div><div className="l">Senior-led, no junior pyramids</div></div>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <ScrollReveal delay={300}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#0a0a0a' }}>
                  <img src="/images/consultancy_hero.png" alt="Consultancy Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <h2 className="t-h2">Not generalists. Not narrow specialists.</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>Most firms either generalise - advice you've heard before - or hyper-specialise, handing you one piece of the puzzle instead of the puzzle. We do neither.</p>
                <p>For each engagement we draw from a network of operators who've spent decades inside the specific industry you're entering, and build a team scoped to the decision in front of you. You get depth where it matters and nothing you don't need.</p>
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
              Nine Capabilities
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>What we actually do.</h2>
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
              Engagement Process
            </div>
            <h2 className="t-h2" style={{ color: '#fff' }}>How we work, step by step.</h2>
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

      {/* ============================ FAQ / SCOPE ============================ */}
      <section className="svc-section svc-section--light">
        <div className="container">
          <div className="lead-row" style={{ marginBottom: '40px' }}>
            <ScrollReveal>
              <div className="about-hero__eyebrow" style={{ justifyContent: 'flex-start', width: '100%' }}>
                <span className="about-hero__dot"></span>
                Scope Of Work
              </div>
              <h2 className="t-h2">Common questions, answered plainly.</h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lead-row__body">
                <p>The questions every prospective client asks before we begin. If yours isn't here, the answer is one call away.</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <AccordionFAQ items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CASE TEASER ============================ */}
      <section className="svc-section svc-section--darker">
        <div className="container">
          <ScrollReveal>
            <div className="impact__inner">
              <div className="impact__thumb" style={{ background: 'linear-gradient(135deg, rgba(214,40,40,0.15) 0%, #111 100%)' }}>
                {/* Placeholder for case study image */}
              </div>
              <div>
                <span className="tag">Fintech · Market Entry</span>
                <h2 className="t-h2" style={{ color: '#fff', margin: '8px 0 18px' }}>A Chinese fintech, live in six months.</h2>
                <p className="t-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
                  From licensing pathway to a working local operating team - see how a focused engagement compressed a typically 18-month entry into half the time.
                </p>
                <Link href="/case-study" className="btn btn--ghost-light" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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
              <h2 className="t-h2">Have a move on the <span className="accent">horizon?</span></h2>
              <p className="t-body-lg">Bring us the decision. We'll give you an honest read within two business days.</p>
              <div className="hero__ctas">
                <Link href="/contact" className="btn btn--primary btn--lg">
                  Book Free Consultation
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
