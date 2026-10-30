import React from 'react';
import Link from '@/Components/LocalizedLink';
import {
  ServiceAdvisoryIcon,
  ServiceGovIcon,
  ServiceMatchingIcon,
  ServiceCommsIcon,
  ServiceDigitalIcon,
  ServiceInvestmentIcon
} from '@/Components/HomeIcons';

// Small shared building blocks for inner pages. Styles live in PageHeroBanner's <style> block.

export const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.6" aria-hidden="true" style={{ flexShrink: 0, marginTop: '3px' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SERVICE_ICONS = {
  advisory: ServiceAdvisoryIcon,
  'gov-relations': ServiceGovIcon,
  'business-matching': ServiceMatchingIcon,
  comms: ServiceCommsIcon,
  'media-relations': ServiceDigitalIcon,
  investment: ServiceInvestmentIcon
};

export function ServiceIcon({ slug, size = 22 }) {
  const Icon = SERVICE_ICONS[slug] || ServiceAdvisoryIcon;
  return <Icon size={size} color="#E63946" />;
}

export function SectionHead({ kicker, title, lead, center = false, children }) {
  return (
    <div className={`inner-head${center ? ' inner-head--center' : ''}`}>
      {kicker && <div className="inner-kicker">{kicker}</div>}
      {title && <h2>{title}</h2>}
      {lead && <p>{lead}</p>}
      {children}
    </div>
  );
}

export function ProcessSteps({ steps }) {
  return (
    <ol className="inner-cards" style={{ listStyle: 'none', padding: 0, margin: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))' }}>
      {steps.map((s) => (
        <li key={s.num} className="adv-card" style={{ padding: '26px 22px' }}>
          <span className="inner-num">{s.num}</span>
          <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '18px 0 8px' }}>{s.name}</h3>
          <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'rgba(255,255,255,0.66)', margin: 0 }}>{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ title, desc, primary, primaryHref = '/contact', secondary, secondaryHref }) {
  return (
    <section className="inner-section inner-section--dark" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="inner-cta">
          <h2>{title}</h2>
          {desc && <p>{desc}</p>}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <Link href={primaryHref} className="adv-btn-primary">
              <span>{primary}</span>
              <Arrow />
            </Link>
            {secondary && secondaryHref && (
              <Link href={secondaryHref} className="adv-btn-secondary">
                <span>{secondary}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
