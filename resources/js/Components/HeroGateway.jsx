import React, { useEffect, useRef } from 'react';

/* -------------------------------------------------------------------------- */
/*  SVG shape helpers                                                          */
/* -------------------------------------------------------------------------- */

// Palm tree (trunk + fronds), rendered as strokes
const Palm = ({ x, by, h, lean }) => {
  const tx = x + lean;
  const ty = by - h;
  const fronds = [[-62, 14], [-48, -22], [-12, -40], [26, -34], [56, -4], [44, 22], [-30, 28]];
  return (
    <g stroke="url(#hg-ink-l)" strokeLinecap="round" fill="none">
      <path d={`M${x} ${by} Q${x + lean * 0.25} ${by - h * 0.55} ${tx} ${ty}`} strokeWidth="7" />
      {fronds.map(([dx, dy], i) => (
        <path key={i} d={`M${tx} ${ty} Q${tx + dx * 0.5} ${ty + dy * 0.5 - 16} ${tx + dx} ${ty + dy}`} strokeWidth="5" />
      ))}
    </g>
  );
};

// Skyline tower silhouettes. [x, width, bodyTop, kind?]
const BASE = 640;
const towerPath = ([x, w, top, kind]) => {
  const cx = x + w / 2;
  switch (kind) {
    // Wisma 46 style pen-nib crown
    case 'nib':
      return `M${x} ${BASE} V${top} L${cx} ${top - 46} L${x + w} ${top} V${BASE} Z M${cx - 1.5} ${top - 40} h3 v-36 h-3 Z`;
    // Autograph Tower (Thamrin Nine) style stepped crown + spire
    case 'crown':
      return `M${x} ${BASE} V${top} H${x + 6} V${top - 26} H${x + 12} V${top - 48} H${x + w - 12} V${top - 26} H${x + w - 6} V${top} H${x + w} V${BASE} Z ` +
        `M${cx - 1.5} ${top - 48} h3 v-60 h-3 Z`;
    // Gama Tower style slanted roof
    case 'slant':
      return `M${x} ${BASE} V${top + 28} L${x + w} ${top} V${BASE} Z`;
    // Jin Mao style stepped pagoda-tiers + spire
    case 'jinmao': {
      const n = 6, s = 3.5, h = 10;
      const left = [];
      const right = [];
      for (let i = 1; i <= n; i++) {
        left.push(`L${x + i * s} ${top - (i - 1) * h} L${x + i * s} ${top - i * h}`);
        right.unshift(`L${x + w - i * s} ${top - i * h} L${x + w - i * s} ${top - (i - 1) * h}`);
      }
      const t = top - n * h;
      return `M${x} ${BASE} L${x} ${top} ${left.join(' ')} L${cx - 1.5} ${t} L${cx - 1.5} ${t - 36} L${cx + 1.5} ${t - 36} L${cx + 1.5} ${t} ${right.join(' ')} L${x + w} ${top} L${x + w} ${BASE} Z`;
    }
    // Shanghai World Financial Center ("bottle opener")
    case 'swfc':
      return `M${x} ${BASE} L${x + 4} ${top} H${x + w - 4} L${x + w} ${BASE} Z M${x + 15} ${top + 8} H${x + w - 15} L${x + w - 18} ${top + 30} H${x + 18} Z`;
    // Shanghai Tower: twisting taper
    case 'shtower':
      return `M${x} ${BASE} C${x + 2} ${top + 260} ${x + 10} ${top + 90} ${x + w * 0.3} ${top + 6} L${x + w * 0.74} ${top} ` +
        `C${x + w - 8} ${top + 100} ${x + w - 2} ${top + 260} ${x + w} ${BASE} Z`;
    default:
      return `M${x} ${BASE} V${top} H${x + w} V${BASE} Z`;
  }
};

// Deterministic lit-window grid for a skyline
const winGrid = (towers, seed, maxY) => {
  const out = [];
  towers.forEach(([x, w, top], b) => {
    for (let y = top + 30, r = 0; y < maxY; y += 13, r++) {
      for (let xx = x + 6, c = 0; xx < x + w - 6; xx += 9, c++) {
        const h = (b * 53 + r * 17 + c * 29 + seed) % 23;
        if (h < 3) out.push({ x: xx, y, accent: h === 0, twinkle: h === 1, k: out.length });
      }
    }
  });
  return out;
};

// Jakarta skyline (left: x=0 outer edge -> x=800 centre)
const JKT_TOWERS = [
  [-60, 72, 300], [16, 44, 252], [64, 48, 205, 'nib'], [116, 40, 282], [160, 58, 236],
  [222, 30, 312], [256, 54, 170, 'crown'], [314, 46, 215, 'slant'], [364, 34, 292],
  [402, 52, 332], [458, 40, 302], [502, 62, 382], [568, 44, 412], [616, 58, 442],
  [678, 40, 468], [722, 96, 494],
];
const JKT_BEACONS = [[88, 129], [283, 60], [357, 213]];

// Shanghai skyline (right: x=0 centre -> x=800 outer edge)
const SHA_TOWERS = [
  [-30, 84, 500], [58, 42, 472], [104, 56, 444], [164, 36, 414], [204, 50, 386],
  [258, 42, 350], [304, 52, 318], [362, 48, 286, 'jinmao'], [416, 40, 300],
  [462, 54, 150, 'swfc'], [526, 66, 108, 'shtower'], [606, 44, 268], [654, 58, 318],
  [716, 46, 258], [766, 70, 336],
];
const SHA_BEACONS = [[386, 188], [489, 148], [560, 104]];

// Mid-ground Chinese towers with LED facades
const SHA_MID = [[96, 56, 400], [168, 40, 372], [222, 66, 418], [304, 48, 360]];

// Near-ground modern blocks next to the Oriental Pearl Tower
const SHA_NEAR = [[24, 60, 474], [90, 40, 500], [372, 52, 444], [430, 44, 486], [480, 70, 470], [556, 50, 498]];

const JKT_WIN = winGrid(JKT_TOWERS, 3, 500);
const SHA_WIN = winGrid(SHA_TOWERS, 11, 500);
const NEAR_WIN = winGrid(SHA_NEAR, 7, 528);

// Flying cars: rest position (x, y), scale, direction (-1 = toward gateway), timing
const CARS = [
  { x: 420, y: 330, s: 1, dir: -1, dur: 17, delay: -4 },
  { x: 560, y: 262, s: 0.72, dir: -1, dur: 24, delay: -15 },
  { x: 300, y: 392, s: 1.15, dir: 1, dur: 20, delay: -9 },
  { x: 680, y: 212, s: 0.55, dir: 1, dur: 30, delay: -21 },
];

// Travel offsets (local units) so each car crosses the full side and loops
const carRun = ({ x, s, dir }) =>
  dir < 0
    ? { '--x0': `${(1000 - x) / s}px`, '--x1': `${(-260 - x) / s}px` }
    : { '--x0': `${(x + 260) / s}px`, '--x1': `${(x - 1000) / s}px` };

const FlyingCar = () => (
  <g>
    <path d="M44 1 L160 -1 L160 5 L44 7 Z" fill="url(#hg-trail)" />
    <ellipse cx="22" cy="11" rx="20" ry="3.5" fill="rgba(255,90,70,0.55)" filter="url(#hg-blur)" />
    <path d="M0 4 C2 -2 10 -6 20 -7 L30 -7 C36 -6 42 -2 44 3 L44 6 C30 9 12 9 0 6 Z" fill="#1E1F26" stroke="rgba(255,120,90,0.55)" strokeWidth="0.8" />
    <path d="M12 -5 C16 -11 28 -11 32 -5 Z" fill="rgba(255,205,175,0.35)" />
    <ellipse cx="10" cy="8.5" rx="5" ry="1.6" fill="#2B2C34" />
    <ellipse cx="34" cy="8.5" rx="5" ry="1.6" fill="#2B2C34" />
    <circle cx="1.5" cy="4" r="1.6" fill="#FFE6CC" filter="url(#hg-blur)" />
    <circle cx="1.5" cy="4" r="1" fill="#FFF" />
  </g>
);

const StreetLamp = ({ x, flip = false }) => {
  const d = flip ? -1 : 1;
  return (
    <g>
      <path d={`M${x} 528 V490 q0 -6 ${8 * d} -6 h${6 * d}`} stroke="#2B2C34" strokeWidth="2.5" fill="none" />
      <circle cx={x + 14 * d} cy="486" r="9" fill="rgba(255,170,120,0.16)" />
      <circle cx={x + 14 * d} cy="486" r="2.2" fill="#FFD2A8" />
    </g>
  );
};

// Deterministic embers rising inside the gateway beam
const EMBERS = Array.from({ length: 16 }, (_, i) => ({
  x: (((i * 37) % 100) - 50) * 0.9,
  dur: 6 + ((i * 13) % 7),
  delay: (i * 0.73) % 7,
  size: 2 + (i % 3),
}));

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HeroGateway({ isId = false }) {
  const heroRef = useRef(null);

  // Layered parallax: pointer position (desktop) + scroll offset, eased with rAF
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let tx = 0, ty = 0, cx = 0, cy = 0, sy = 0, lastSy = -1, raf = 0, visible = true;

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      el.style.setProperty('--mx', cx.toFixed(4));
      el.style.setProperty('--my', cy.toFixed(4));
      if (sy !== lastSy) {
        el.style.setProperty('--sy', sy.toFixed(1));
        lastSy = sy;
      }
      if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
        raf = requestAnimationFrame(tick);
      }
    };
    const kick = () => { if (!raf && visible) raf = requestAnimationFrame(tick); };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    };
    const onLeave = () => { tx = 0; ty = 0; kick(); };
    const onScroll = () => { sy = Math.min(Math.max(window.scrollY, 0), 1000); kick(); };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
    });
    io.observe(el);

    if (finePointer) {
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const copy = isId
    ? {
        title: ['Gerbang Strategis', 'Bisnis Anda Menuju', 'Indonesia & Tiongkok'],
        kicker: 'Menghubungkan Pasar. Membuka Pertumbuhan.',
        sub: 'Penasihat strategis bagi bisnis yang bergerak di antara Indonesia dan Tiongkok.',
        cta: 'Jelajahi Layanan Kami',
        link: 'Diskusikan Bisnis Anda',
      }
    : {
        title: ['Your Strategic', 'Gateway to', 'Indonesia & China'],
        kicker: 'Connecting Markets. Enabling Growth.',
        sub: 'Strategic advisory for businesses moving between Indonesia and China.',
        cta: 'Explore Our Services',
        link: 'Discuss Your Business',
      };

  return (
    <section ref={heroRef} className="hg" data-screen-label="Hero" aria-labelledby="hero-title">
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />

      {/* Shared SVG defs (gradients, masks & filters referenced by every layer) */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="hg-ink-l" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0B0C10" />
            <stop offset="0.62" stopColor="#15161B" />
            <stop offset="1" stopColor="#33171B" />
          </linearGradient>
          <linearGradient id="hg-ink-r" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor="#0B0C10" />
            <stop offset="0.62" stopColor="#15161B" />
            <stop offset="1" stopColor="#33171B" />
          </linearGradient>
          <linearGradient id="hg-far-l" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#17181D" />
            <stop offset="1" stopColor="#261619" />
          </linearGradient>
          <linearGradient id="hg-far-r" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#17181D" />
            <stop offset="1" stopColor="#261619" />
          </linearGradient>
          <linearGradient id="hg-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#101115" />
            <stop offset="1" stopColor="#08090B" />
          </linearGradient>
          <linearGradient id="hg-flame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFD59A" />
            <stop offset="0.45" stopColor="#FF7A3D" />
            <stop offset="1" stopColor="#E63946" />
          </linearGradient>
          <linearGradient id="hg-led" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF6A4A" stopOpacity="0.95" />
            <stop offset="1" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hg-trail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF7A5A" stopOpacity="0.6" />
            <stop offset="1" stopColor="#FF7A5A" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hg-sphere" cx="0.3" cy="0.4" r="0.75">
            <stop offset="0" stopColor="#4A1E22" />
            <stop offset="0.5" stopColor="#18191E" />
            <stop offset="1" stopColor="#0B0C10" />
          </radialGradient>
          {/* Moving vehicles fade out as they approach the central gateway */}
          <linearGradient id="hg-fade-l" gradientUnits="userSpaceOnUse" x1="540" y1="0" x2="780" y2="0">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <linearGradient id="hg-fade-r" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="260" y2="0">
            <stop offset="0" stopColor="#000" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <mask id="hg-mask-l" maskUnits="userSpaceOnUse" x="-800" y="-400" width="1600" height="1200">
            <rect x="-800" y="-400" width="1600" height="1200" fill="url(#hg-fade-l)" />
          </mask>
          <mask id="hg-mask-r" maskUnits="userSpaceOnUse" x="0" y="-400" width="1800" height="1200">
            <rect x="0" y="-400" width="1800" height="1200" fill="url(#hg-fade-r)" />
          </mask>
          <filter id="hg-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="hg-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="hg-blur" x="-100%" y="-200%" width="300%" height="500%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>
      </svg>

      {/* Atmosphere */}
      <div className="hg-sky" aria-hidden="true" />
      <div className="hg-layer hg-glow-c" style={{ '--d': 0.15 }} aria-hidden="true" />

      {/* Gateway beam */}
      <div className="hg-beam-wrap" aria-hidden="true">
        <div className="hg-beam" />
        <div className="hg-beam-core" />
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="hg-ember"
            style={{
              left: `calc(50% + ${e.x}px)`,
              width: e.size,
              height: e.size,
              animationDuration: `${e.dur}s`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ============================ INDONESIA (left) ============================ */}
      <div className="hg-side hg-side--l" aria-hidden="true">
        {/* Far: modern Jakarta skyline (Thamrin / Sudirman) */}
        <div className="hg-layer" style={{ '--d': 0.2 }}>
          <svg className="hg-rise" style={{ '--delay': '0.1s' }} viewBox="0 0 800 600" preserveAspectRatio="xMinYMax meet">
            <g fill="url(#hg-far-l)" stroke="rgba(230,57,70,0.10)" strokeWidth="1">
              {JKT_TOWERS.map((t, i) => <path key={i} d={towerPath(t)} />)}
            </g>
            <g>
              {JKT_WIN.map((w) => (
                <rect
                  key={w.k}
                  x={w.x} y={w.y} width="3" height="5"
                  className={w.twinkle ? 'hg-twinkle' : undefined}
                  style={w.twinkle ? { animationDelay: `${(w.k % 9) * -0.6}s` } : undefined}
                  fill={w.accent ? 'rgba(230,57,70,0.6)' : 'rgba(255,190,150,0.3)'}
                />
              ))}
            </g>
            {JKT_BEACONS.map(([x, y], i) => (
              <circle key={i} className="hg-blink" style={{ animationDelay: `${i * -0.5}s` }} cx={x} cy={y} r="2.4" fill="#FF5A4E" filter="url(#hg-glow)" />
            ))}
          </svg>
        </div>

        {/* Mid: elevated LRT Jabodebek viaduct + palms */}
        <div className="hg-layer" style={{ '--d': 0.5 }}>
          <svg className="hg-rise" style={{ '--delay': '0.25s' }} viewBox="0 0 800 600" preserveAspectRatio="xMinYMax meet">
            <g fill="url(#hg-ink-l)" stroke="rgba(230,57,70,0.16)" strokeWidth="1">
              {[40, 170, 300, 430, 560, 690].map((x) => (
                <path key={x} d={`M${x - 7} 640 V488 H${x - 20} V478 H${x + 20} V488 H${x + 7} V640 Z`} />
              ))}
              <rect x="-120" y="466" width="920" height="12" />
            </g>
            <rect x="-120" y="462" width="920" height="3" fill="#2B2C34" />
            <line x1="-120" x2="800" y1="466" y2="466" stroke="rgba(255,110,80,0.35)" strokeWidth="1" />
            <g mask="url(#hg-mask-l)">
              <g className="hg-run" style={{ '--x0': '-480px', '--x1': '900px', animationDuration: '15s', animationDelay: '-6s' }}>
                <g fill="#2A2B32" stroke="rgba(255,255,255,0.10)" strokeWidth="1">
                  <rect x="0" y="438" width="96" height="24" rx="6" />
                  <rect x="100" y="438" width="96" height="24" rx="3" />
                  <path d="M200 438 H276 C291 438 300 450 300 462 H200 Z" />
                </g>
                {[0, 100, 200].map((cx) =>
                  [0, 1, 2, 3].map((j) => (
                    <rect key={`${cx}-${j}`} x={cx + 8 + j * 20} y="444" width="15" height="7" rx="1.5" fill="rgba(255,214,180,0.6)" />
                  ))
                )}
                <rect x="0" y="455" width="296" height="2" fill="#E63946" opacity="0.85" />
                <circle cx="296" cy="457" r="5" fill="rgba(255,230,200,0.5)" filter="url(#hg-blur)" />
                <circle cx="296" cy="457" r="1.6" fill="#FFF" />
              </g>
            </g>
            <Palm x={612} by={532} h={120} lean={14} />
            <Palm x={652} by={534} h={88} lean={-10} />
          </svg>
        </div>

        {/* Near: Monas + street level + MRT Jakarta underground */}
        <div className="hg-layer" style={{ '--d': 0.85 }}>
          <svg className="hg-rise" style={{ '--delay': '0.4s' }} viewBox="0 0 800 600" preserveAspectRatio="xMinYMax meet">
            {/* Monas (National Monument) with glowing flame */}
            <g transform="translate(-470 -80)">
              <circle className="hg-flame-glow" cx="640" cy="106" r="46" fill="rgba(255,110,60,0.35)" filter="url(#hg-soft)" />
              <g fill="url(#hg-ink-l)" stroke="rgba(230,57,70,0.22)" strokeWidth="1">
                <path d="M548 590 L732 590 L752 556 L528 556 Z" />
                <rect x="522" y="549" width="236" height="8" />
                <path d="M622 550 L658 550 L651 172 L629 172 Z" />
                <path d="M606 174 L674 174 L683 155 L597 155 Z" />
                <rect x="600" y="148" width="80" height="7" />
                <path d="M628 148 L652 148 L648 132 L632 132 Z" />
              </g>
              <line x1="655" y1="545" x2="649" y2="178" stroke="rgba(255,110,80,0.35)" strokeWidth="1.5" />
              <g filter="url(#hg-glow)">
                <path className="hg-flame" d="M640 62 C621 92 619 112 630 132 L650 132 C661 112 658 90 640 62 Z" fill="url(#hg-flame)" />
                <path d="M640 90 C632 105 632 118 636 132 L644 132 C648 118 648 105 640 90 Z" fill="#FFE2B0" opacity="0.85" />
              </g>
              {[500, 772].map((x) => (
                <ellipse key={x} cx={x} cy="584" rx="34" ry="22" fill="url(#hg-ink-l)" />
              ))}
            </g>

            {/* Street level + underground, raised so the cut-away stays above the fold */}
            <g transform="translate(0 -18)">
            {/* Street furniture + MRT station entrance */}
            {[330, 392, 640, 724].map((x) => <StreetLamp key={x} x={x} />)}
            <path d="M456 528 V514 Q490 502 524 514 V528 Z" fill="#1A1B21" stroke="rgba(255,120,90,0.4)" strokeWidth="1" />
            <rect x="464" y="516" width="52" height="12" fill="rgba(255,200,160,0.14)" />
            <rect x="534" y="492" width="3" height="36" fill="#2B2C34" />
            <rect x="526" y="477" width="19" height="16" rx="3" fill="#E63946" />
            <text x="535.5" y="489.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="system-ui, sans-serif">M</text>

            {/* Ground cut-away */}
            <rect x="-120" y="528" width="1040" height="8" fill="#17181D" />
            <line x1="-120" x2="920" y1="528" y2="528" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
            <rect x="-120" y="536" width="1040" height="200" fill="url(#hg-ground)" />
            <rect x="-120" y="549" width="1040" height="42" rx="21" fill="#18191F" stroke="rgba(230,57,70,0.42)" strokeWidth="1" />
            <rect x="-120" y="586" width="1040" height="1.5" fill="rgba(255,110,80,0.35)" />
            {Array.from({ length: 15 }, (_, i) => (
              <circle key={i} cx={-90 + i * 64} cy="553" r="1.4" fill="rgba(255,190,150,0.55)" />
            ))}
            {/* Underground station + stairs */}
            <rect x="420" y="543" width="190" height="52" rx="4" fill="#1D1E25" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <rect x="420" y="586" width="190" height="3" fill="rgba(255,150,120,0.3)" />
            {Array.from({ length: 8 }, (_, i) => (
              <rect key={i} x={430 + i * 24} y="546" width="10" height="1.5" fill="rgba(255,210,180,0.55)" />
            ))}
            <path d="M472 536 v4 h4 v4 h4 v4 h4 v4 h4 v4 h4 v4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" />
            {/* MRT train running toward the gateway */}
            <g mask="url(#hg-mask-l)">
              <g className="hg-run" style={{ '--x0': '-420px', '--x1': '920px', animationDuration: '11s', animationDelay: '-2s' }}>
                <g fill="#2E2F37" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
                  <rect x="0" y="560" width="92" height="24" rx="4" />
                  <rect x="96" y="560" width="92" height="24" rx="2" />
                  <path d="M192 560 H276 C284 560 288 568 288 584 H192 Z" />
                </g>
                {[0, 96, 192].map((cx) =>
                  [0, 1, 2, 3].map((j) => (
                    <rect key={`${cx}-${j}`} x={cx + 8 + j * 19} y="565" width="14" height="7" rx="1.5" fill="rgba(255,225,195,0.7)" />
                  ))
                )}
                <rect x="0" y="576" width="286" height="2" fill="#E63946" opacity="0.9" />
                <circle cx="286" cy="579" r="5" fill="rgba(255,230,200,0.5)" filter="url(#hg-blur)" />
              </g>
            </g>
            </g>
          </svg>
        </div>
      </div>

      {/* ============================== CHINA (right) ============================== */}
      <div className="hg-side hg-side--r" aria-hidden="true">
        {/* Far: Lujiazui skyline (Shanghai Tower, SWFC, Jin Mao) */}
        <div className="hg-layer" style={{ '--d': 0.2 }}>
          <svg className="hg-rise" style={{ '--delay': '0.1s' }} viewBox="0 0 800 600" preserveAspectRatio="xMaxYMax meet">
            <g fill="url(#hg-far-r)" stroke="rgba(230,57,70,0.10)" strokeWidth="1" fillRule="evenodd">
              {SHA_TOWERS.map((t, i) => <path key={i} d={towerPath(t)} />)}
            </g>
            <path d="M548 118 C585 220 534 340 586 520" stroke="rgba(255,110,80,0.28)" strokeWidth="1.2" fill="none" />
            <g>
              {SHA_WIN.map((w) => (
                <rect
                  key={w.k}
                  x={w.x} y={w.y} width="3" height="5"
                  className={w.twinkle ? 'hg-twinkle' : undefined}
                  style={w.twinkle ? { animationDelay: `${(w.k % 9) * -0.6}s` } : undefined}
                  fill={w.accent ? 'rgba(230,57,70,0.6)' : 'rgba(255,190,150,0.3)'}
                />
              ))}
            </g>
            {SHA_BEACONS.map(([x, y], i) => (
              <circle key={i} className="hg-blink" style={{ animationDelay: `${i * -0.6}s` }} cx={x} cy={y} r="2.4" fill="#FF5A4E" filter="url(#hg-glow)" />
            ))}
          </svg>
        </div>

        {/* Mid: LED-facade towers + maglev guideway with bullet train */}
        <div className="hg-layer" style={{ '--d': 0.5 }}>
          <svg className="hg-rise" style={{ '--delay': '0.25s' }} viewBox="0 0 800 600" preserveAspectRatio="xMaxYMax meet">
            <g fill="url(#hg-ink-r)" stroke="rgba(230,57,70,0.16)" strokeWidth="1">
              {SHA_MID.map((t, i) => <path key={i} d={towerPath(t)} />)}
            </g>
            {SHA_MID.map(([x, w, top], i) => (
              <g key={i} className="hg-led" style={{ animationDelay: `${i * -0.9}s` }}>
                <rect x={x + 7} y={top + 6} width="2" height={150} fill="url(#hg-led)" />
                <rect x={x + w - 9} y={top + 6} width="2" height={150} fill="url(#hg-led)" />
                <rect x={x + 4} y={top + 2} width={w - 8} height="1.5" fill="rgba(255,110,80,0.7)" />
              </g>
            ))}
            {/* Holographic billboard */}
            <g className="hg-led" style={{ animationDuration: '2.6s' }}>
              <rect x="234" y="432" width="42" height="26" fill="rgba(230,57,70,0.2)" stroke="rgba(255,110,80,0.7)" strokeWidth="1" />
              {[438, 444, 450].map((y) => (
                <rect key={y} x="240" y={y} width={y === 444 ? 22 : 30} height="2" fill="rgba(255,200,170,0.6)" />
              ))}
            </g>
            {/* Maglev guideway */}
            <g fill="url(#hg-ink-r)" stroke="rgba(230,57,70,0.16)" strokeWidth="1">
              {[70, 210, 350, 490, 630, 770].map((x) => (
                <path key={x} d={`M${x - 4} 640 L${x + 4} 640 L${x + 4} 476 L${x + 16} 461 L${x + 10} 461 L${x} 472 L${x - 10} 461 L${x - 16} 461 L${x - 4} 476 Z`} />
              ))}
              <rect x="0" y="452" width="920" height="9" />
            </g>
            <rect x="0" y="461" width="920" height="1" fill="rgba(255,110,80,0.35)" />
            <g mask="url(#hg-mask-r)">
              <g className="hg-run" style={{ '--x0': '900px', '--x1': '-520px', animationDuration: '8s', animationDelay: '-2s' }}>
                <rect x="10" y="450.5" width="350" height="1.2" fill="rgba(255,120,90,0.7)" filter="url(#hg-blur)" />
                <path d="M0 449 C6 436 30 428 74 428 H360 V449 Z" fill="#2E2F37" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <path d="M120 428 V449 M240 428 V449" stroke="#16171C" strokeWidth="1.5" />
                {Array.from({ length: 13 }, (_, i) => (
                  <rect key={i} x={70 + i * 22} y="433" width="15" height="6" rx="1.5" fill="rgba(255,220,190,0.6)" />
                ))}
                <path d="M14 443 C30 444 60 444 360 444 V446 H12 Z" fill="#E63946" opacity="0.9" />
                <circle cx="6" cy="445" r="5" fill="rgba(255,230,200,0.55)" filter="url(#hg-blur)" />
                <circle cx="6" cy="445" r="1.4" fill="#FFF" />
                <path d="M360 432 L470 434 L470 446 L360 448 Z" fill="url(#hg-trail)" opacity="0.5" />
              </g>
            </g>
          </svg>
        </div>

        {/* Near: Oriental Pearl Tower + modern blocks + flying cars & drone */}
        <div className="hg-layer" style={{ '--d': 0.85 }}>
          <svg className="hg-rise" style={{ '--delay': '0.4s' }} viewBox="0 0 800 600" preserveAspectRatio="xMaxYMax meet">
            <g fill="url(#hg-ink-r)" stroke="rgba(230,57,70,0.14)" strokeWidth="1">
              {SHA_NEAR.map((t, i) => <path key={i} d={towerPath(t)} />)}
            </g>
            <g>
              {NEAR_WIN.map((w) => (
                <rect key={w.k} x={w.x} y={w.y} width="4" height="7" fill={w.accent ? 'rgba(230,57,70,0.65)' : 'rgba(255,190,150,0.35)'} />
              ))}
            </g>
            <g transform="translate(530 0)">
              <g fill="url(#hg-ink-r)" stroke="rgba(230,57,70,0.22)" strokeWidth="1">
                <path d="M112 680 L126 680 L167 470 L159 470 Z" />
                <path d="M228 680 L214 680 L173 470 L181 470 Z" />
                <rect x="163" y="160" width="14" height="520" />
                <rect x="157" y="262" width="7" height="140" />
                <rect x="176" y="262" width="7" height="140" />
              </g>
              <circle cx="170" cy="440" r="44" fill="url(#hg-sphere)" stroke="rgba(230,57,70,0.3)" />
              {[372, 340, 308].map((y) => (
                <circle key={y} cx="170" cy={y} r="10" fill="url(#hg-sphere)" stroke="rgba(230,57,70,0.25)" />
              ))}
              <circle cx="170" cy="240" r="32" fill="url(#hg-sphere)" stroke="rgba(230,57,70,0.3)" />
              <path d="M164 210 L176 210 L174 142 L166 142 Z" fill="url(#hg-ink-r)" />
              <circle cx="170" cy="132" r="13" fill="url(#hg-sphere)" stroke="rgba(230,57,70,0.3)" />
              <path d="M167 120 L173 120 L171 40 L169 40 Z" fill="url(#hg-ink-r)" />
              <ellipse cx="170" cy="440" rx="44" ry="5" fill="none" stroke="rgba(255,90,70,0.6)" />
              <ellipse cx="170" cy="240" rx="32" ry="4" fill="none" stroke="rgba(255,90,70,0.6)" />
              <circle className="hg-blink" cx="170" cy="38" r="3.2" fill="#FF5A4E" filter="url(#hg-glow)" />
            </g>

            {/* Street level (aligned with the Indonesian side) */}
            <g transform="translate(0 -18)">
              {[150, 300, 530].map((x) => <StreetLamp key={x} x={x} flip />)}
              <rect x="-120" y="528" width="1040" height="8" fill="#17181D" />
              <line x1="-120" x2="920" y1="528" y2="528" stroke="rgba(230,57,70,0.3)" strokeWidth="1" />
              <line x1="-120" x2="920" y1="532" y2="532" stroke="rgba(255,120,90,0.25)" strokeWidth="1" strokeDasharray="10 8" />
              <rect x="-120" y="536" width="1040" height="200" fill="url(#hg-ground)" />
            </g>

            {/* Flying cars */}
            <g mask="url(#hg-mask-r)">
              {CARS.map((c, i) => (
                <g key={i} transform={`translate(${c.x} ${c.y}) scale(${c.dir < 0 ? c.s : -c.s} ${c.s})`}>
                  <g className="hg-run" style={{ ...carRun(c), animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}>
                    <g className="hg-bob" style={{ animationDelay: `${i * -0.8}s` }}>
                      <FlyingCar />
                    </g>
                  </g>
                </g>
              ))}
            </g>

            {/* Hovering delivery drone */}
            <g transform="translate(612 206)">
              <g className="hg-bob" style={{ animationDuration: '4.2s' }}>
                <path d="M-7 -1 L-18 -6 M7 -1 L18 -6" stroke="#3A3B44" strokeWidth="2" />
                <ellipse cx="-18" cy="-7" rx="8" ry="1.5" fill="rgba(255,255,255,0.22)" />
                <ellipse cx="18" cy="-7" rx="8" ry="1.5" fill="rgba(255,255,255,0.22)" />
                <rect x="-8" y="-3" width="16" height="7" rx="2" fill="#1E1F26" stroke="rgba(255,120,90,0.55)" strokeWidth="0.8" />
                <rect x="-4" y="5" width="8" height="6" fill="#26272E" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" />
                <circle className="hg-blink" cx="0" cy="0.5" r="1.6" fill="#FF5A4E" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Mist + blend into next section */}
      <div className="hg-layer hg-mist" style={{ '--d': 0.9 }} aria-hidden="true" />
      <div className="hg-fade" aria-hidden="true" />
      <div className="hg-grain" aria-hidden="true" />

      {/* Coordinates labels */}
      <div className="hg-coord hg-coord--l" aria-hidden="true">
        <span className="hg-coord__dot" />Indonesia · 06°10′S 106°49′E
      </div>
      <div className="hg-coord hg-coord--r" aria-hidden="true">
        China · 31°13′N 121°28′E<span className="hg-coord__dot" />
      </div>

      {/* ================================ Content ================================ */}
      <div className="hg-content">
        <h1 id="hero-title" className="hg-title">
          {copy.title.map((line, i) => (
            <span key={i} className="hg-title__line" style={{ '--delay': `${0.15 + i * 0.12}s` }}>{line}</span>
          ))}
        </h1>
        <p className="hg-kicker">{copy.kicker}</p>
        <p className="hg-sub">{copy.sub}</p>
        <div className="hg-actions">
          <a href="#services" className="hg-btn" id="hero-cta-services">
            <span>{copy.cta}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="hg-link" id="hero-cta-contact">{copy.link}</a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scoped styles                                                              */
/* -------------------------------------------------------------------------- */

const HERO_CSS = `
.hg {
  --mx: 0; --my: 0; --sy: 0;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: max(660px, calc(100svh - 112px));
  background: #0A0A0C;
  color: #fff;
  display: flex;
  justify-content: center;
}
.hg svg { overflow: visible; display: block; }

.hg-sky {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 38% 55% at 50% 100%, rgba(230,57,70,0.28) 0%, transparent 70%),
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.035) 0%, transparent 70%),
    linear-gradient(180deg, #0A0A0C 0%, #0E0D10 60%, #140D0F 100%);
}

/* Parallax layer: depth --d (0 = far, 1 = near) */
.hg-layer {
  position: absolute; inset: 0;
  will-change: transform;
  transform: translate3d(
    calc(var(--mx) * var(--d) * -34px),
    calc(var(--my) * var(--d) * -14px + var(--sy) * (1 - var(--d)) * 0.45px),
    0);
}

.hg-glow-c {
  z-index: 1;
  background: radial-gradient(ellipse 22% 48% at 50% 78%, rgba(255,95,70,0.30), transparent 70%);
  filter: blur(10px);
}

/* Beam */
.hg-beam-wrap {
  position: absolute; left: 0; right: 0; bottom: 0; height: 60%;
  z-index: 2; pointer-events: none;
  transform: translate3d(calc(var(--mx) * -8px), calc(var(--sy) * 0.2px), 0);
}
.hg-beam, .hg-beam-core {
  position: absolute; left: 50%; bottom: 0; height: 100%;
  transform: translateX(-50%);
}
.hg-beam {
  width: clamp(64px, 6.5vw, 116px);
  background: linear-gradient(to top, #FF6A4A 0%, #E63946 42%, rgba(230,57,70,0.38) 78%, rgba(230,57,70,0) 100%);
  box-shadow: 0 0 70px 12px rgba(230,57,70,0.32), 0 0 180px 50px rgba(230,57,70,0.16);
  opacity: 0.92;
  animation: hgBeam 7s ease-in-out infinite;
  -webkit-mask-image: linear-gradient(to top, #000 70%, transparent 100%);
          mask-image: linear-gradient(to top, #000 70%, transparent 100%);
}
.hg-beam-core {
  width: 2px;
  background: linear-gradient(to top, rgba(255,230,200,0.9), rgba(255,200,170,0) 85%);
  filter: blur(0.5px);
}
.hg-ember {
  position: absolute; bottom: 6%;
  border-radius: 50%;
  background: #FFB08A;
  box-shadow: 0 0 8px 2px rgba(255,120,80,0.7);
  opacity: 0;
  animation-name: hgEmber;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Sides */
.hg-side {
  position: absolute; bottom: 0; z-index: 3;
  width: min(45vw, 780px);
  aspect-ratio: 4 / 3;
  pointer-events: none;
}
.hg-side--l { left: 0; }
.hg-side--r { right: 0; }
.hg-side .hg-layer svg { width: 100%; height: 100%; }

.hg-rise { animation: hgRise 1.6s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: var(--delay, 0s); }
.hg-flame { animation: hgFlicker 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
.hg-flame-glow { animation: hgPulse 3.2s ease-in-out infinite; }
.hg-blink { animation: hgBlink 1.8s steps(1, end) infinite; }

/* Vehicles & city lights */
.hg-run {
  animation-name: hgRun;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.hg-bob { animation: hgBob 3.4s ease-in-out infinite; }
.hg-twinkle { animation: hgTwinkle 5s ease-in-out infinite; }
.hg-led { animation: hgLed 3.6s ease-in-out infinite; }

/* Mist / fade / grain */
.hg-mist {
  z-index: 4; pointer-events: none;
  background:
    radial-gradient(ellipse 30% 22% at 50% 100%, rgba(230,57,70,0.35), transparent 70%),
    radial-gradient(ellipse 45% 10% at 18% 100%, rgba(40,30,34,0.45), transparent 70%),
    radial-gradient(ellipse 45% 10% at 82% 100%, rgba(40,30,34,0.45), transparent 70%);
  animation: hgMist 14s ease-in-out infinite alternate;
}
.hg-fade {
  position: absolute; left: 0; right: 0; bottom: 0; height: 40px; z-index: 5;
  background: linear-gradient(to bottom, rgba(12,13,17,0), #0C0D11);
  pointer-events: none;
}
.hg-grain {
  position: absolute; inset: 0; z-index: 6; pointer-events: none;
  opacity: 0.07; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* Coordinate labels */
.hg-coord {
  position: absolute; bottom: 26px; z-index: 7;
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  text-shadow: 0 1px 8px #000, 0 0 2px #000;
}
.hg-coord--l { left: clamp(20px, 3vw, 48px); }
.hg-coord--r { right: clamp(96px, 7vw, 124px); }
.hg-coord__dot { width: 5px; height: 5px; border-radius: 50%; background: #E63946; box-shadow: 0 0 8px #E63946; }

/* Content */
.hg-content {
  position: relative; z-index: 8;
  width: 100%; max-width: 980px;
  padding: clamp(56px, 10vh, 112px) 24px 0;
  text-align: center;
  transform: translate3d(calc(var(--mx) * 6px), calc(var(--sy) * 0.32px + var(--my) * 4px), 0);
  opacity: calc(1 - var(--sy) / 560);
}
.hg-title {
  margin: 0 0 22px;
  font-family: var(--font-display, "Plus Jakarta Sans", system-ui, sans-serif);
  font-weight: 800;
  font-size: clamp(38px, 5.6vw, 84px);
  line-height: 0.98;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 6px 40px rgba(0,0,0,0.65);
}
.hg-title__line {
  display: block;
  animation: hgUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--delay, 0s);
}
.hg-kicker {
  margin: 0 0 8px;
  font-size: 11.5px; font-weight: 600;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: rgba(255,255,255,0.62);
  animation: hgUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
}
.hg-sub {
  margin: 0 auto 30px; max-width: 520px;
  font-size: 14px; line-height: 1.6; font-weight: 400;
  color: rgba(255,255,255,0.48);
  animation: hgUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
}
.hg-actions {
  display: flex; flex-wrap: wrap; gap: 22px; justify-content: center; align-items: center;
  animation: hgUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.78s both;
}
.hg-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 13px 26px; border-radius: 999px;
  background: #fff; color: #0A0A0C;
  font-size: 13.5px; font-weight: 700; letter-spacing: 0.02em;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  transition: background .3s cubic-bezier(.16,1,.3,1), color .3s cubic-bezier(.16,1,.3,1), transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease;
}
.hg-btn svg { transition: transform .25s ease; }
.hg-btn:hover {
  background: #E63946; color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(230,57,70,0.45);
}
.hg-btn:hover svg { transform: translateX(3px); }
.hg-btn:focus-visible, .hg-link:focus-visible { outline: 2px solid #fff; outline-offset: 4px; }
.hg-link {
  position: relative;
  font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.78);
  padding-bottom: 4px;
  transition: color .25s ease;
}
.hg-link::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
  background: currentColor; transform-origin: left;
  transition: transform .35s cubic-bezier(.16,1,.3,1);
}
.hg-link:hover { color: #fff; }
.hg-link:hover::after { transform: scaleX(0.35); }

/* Keyframes */
@keyframes hgRise  { from { opacity: 0; transform: translateY(70px); } to { opacity: 1; transform: none; } }
@keyframes hgUp    { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes hgBeam  { 0%,100% { opacity: .88; } 50% { opacity: 1; } }
@keyframes hgEmber { 0% { transform: translateY(0); opacity: 0; } 12% { opacity: .9; } 80% { opacity: .5; } 100% { transform: translateY(-46vh); opacity: 0; } }
@keyframes hgFlicker { 0%,100% { transform: scale(1, 1); } 30% { transform: scale(.96, 1.05); } 60% { transform: scale(1.03, .97); } }
@keyframes hgPulse { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
@keyframes hgBlink { 0%,60% { opacity: 1; } 61%,100% { opacity: .25; } }
@keyframes hgMist  { from { transform: translate3d(-1.5%, 0, 0); } to { transform: translate3d(1.5%, 0, 0); } }
@keyframes hgRun   { from { transform: translateX(var(--x0)); } to { transform: translateX(var(--x1)); } }
@keyframes hgBob   { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
@keyframes hgTwinkle { 0%,100% { opacity: 1; } 50% { opacity: .2; } }
@keyframes hgLed   { 0%,100% { opacity: .35; } 50% { opacity: 1; } }

/* Responsive */
@media (max-width: 900px) {
  .hg-side { width: 64vw; opacity: .55; }
  .hg-coord { display: none; }
  .hg-sub { font-size: 13.5px; }
}
@media (max-width: 560px) {
  .hg { min-height: 620px; }
  .hg-side { width: 78vw; opacity: .45; }
  .hg-actions { flex-direction: column; gap: 16px; }
}
@media (prefers-reduced-motion: reduce) {
  .hg *, .hg *::before, .hg *::after { animation: none !important; }
  .hg-ember { display: none; }
}
`;
