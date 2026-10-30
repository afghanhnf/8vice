import React, { useState, useEffect } from 'react';

export default function VideoManifesto({ isId = false, fullSection = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const copy = isId
    ? {
        eyebrow: "MANIFESTO KAMI · 02:48",
        quote_1: "Intelijen pasar",
        quote_2: " bukanlah sebuah fitur.",
        quote_3: "Itu adalah seluruh produk kami.",
        sub: "Film 3 menit mengenai alasan mengapa kami beroperasi dan bagaimana kami menghubungkan realitas komersial antara Indonesia dan China.",
        play: "Putar Video Manifesto"
      }
    : {
        eyebrow: "OUR MANIFESTO · 02:48",
        quote_1: "Market intelligence",
        quote_2: " is not a feature.",
        quote_3: "It is our entire product.",
        sub: "A 3-minute film on why we operate this way and how we connect commercial reality across Indonesia and China.",
        play: "Watch Video Manifesto"
      };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .manifesto-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #0D0E12;
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55), 0 0 80px rgba(230, 57, 70, 0.12);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease;
        }
        .manifesto-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 57, 70, 0.45);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 100px rgba(230, 57, 70, 0.22);
        }
        .manifesto-full-section {
          position: relative;
          overflow: hidden;
          background: #07080A;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        .manifesto-full-section:hover .manifesto-bg-img {
          opacity: 0.52 !important;
          transform: scale(1.025);
        }
        .manifesto-full-section:hover .manifesto-play-pulse {
          transform: scale(1.1);
          background: #E63946;
          color: #FFFFFF;
        }
        .manifesto-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.38;
          transition: opacity 0.5s ease, transform 0.7s ease;
        }
        .manifesto-card:hover .manifesto-bg-img {
          opacity: 0.48;
          transform: scale(1.03);
        }
        .manifesto-play-pulse {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #0A0A0C;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
        }
        .manifesto-play-pulse::before {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: rgba(230, 57, 70, 0.4);
          animation: manifestoPulse 2.4s infinite ease-out;
          z-index: -1;
        }
        .manifesto-card:hover .manifesto-play-pulse {
          transform: scale(1.08);
          background: #E63946;
          color: #FFFFFF;
        }
        @keyframes manifestoPulse {
          0% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.2; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      ` }} />

      {fullSection ? (
        <section 
          className="section manifesto-full-section"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
          aria-label={copy.play}
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#07080A',
            color: '#FFFFFF',
            paddingBlock: '110px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            cursor: 'pointer'
          }}
        >
          {/* Background Cover Image with Red Gradient Overlay */}
          <img 
            src="/images/video_manifesto_cover.webp" 
            alt="8 Vice Video Manifesto" 
            className="manifesto-bg-img"
          />
          
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(7, 8, 10, 0.88) 0%, rgba(7, 8, 10, 0.65) 50%, rgba(214, 40, 40, 0.38) 100%)',
              pointerEvents: 'none'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 85% 70% at 50% 50%, transparent 35%, rgba(7, 8, 10, 0.75) 100%)',
              pointerEvents: 'none'
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px', gap: '48px' }}>
              
              {/* Top Badge */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(230, 57, 70, 0.18)',
                  border: '1px solid rgba(230, 57, 70, 0.35)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#FF7B7B',
                  backdropFilter: 'blur(8px)'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', boxShadow: '0 0 8px #E63946' }}></span>
                  {copy.eyebrow}
                </div>
              </div>

              {/* Bottom Content & Play Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
                <div style={{ maxWidth: '880px', flex: '1 1 500px' }}>
                  <h3 style={{ 
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: 'clamp(24px, 3vw, 40px)', 
                    lineHeight: 1.25, 
                    color: '#FFFFFF', 
                    fontWeight: 300, 
                    margin: '0 0 16px 0',
                    textShadow: '0 4px 24px rgba(0, 0, 0, 0.75)'
                  }}>
                    <span style={{ display: 'block' }}>
                      <span style={{ color: '#E63946', fontWeight: 700, fontStyle: 'italic', textShadow: '0 0 30px rgba(230, 57, 70, 0.5)' }}>
                        {copy.quote_1}
                      </span>
                      {copy.quote_2}
                    </span>
                    <span style={{ display: 'block', fontWeight: 700, marginTop: '4px' }}>{copy.quote_3}</span>
                  </h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.65, margin: 0, maxWidth: '620px' }}>
                    {copy.sub}
                  </p>
                </div>

                {/* Glowing Play Button */}
                <div className="manifesto-play-pulse" aria-hidden="true" style={{ width: '84px', height: '84px' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>
      ) : (
        <section id="manifesto"
          className="section"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(214, 40, 40, 0.12) 0%, transparent 70%), #0A0B0E',
            color: '#FFFFFF',
            paddingBlock: '100px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            position: 'relative'
          }}
        >
          <div className="container">
            
            <div 
              className="manifesto-card"
              onClick={() => setIsOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
              aria-label={copy.play}
              style={{ minHeight: '440px', padding: 'clamp(32px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
            {/* Background Cover Image with Red Gradient Overlay */}
            <img 
              src="/images/video_manifesto_cover.webp" 
              alt="8 Vice Video Manifesto" 
              className="manifesto-bg-img"
            />
            
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10, 12, 16, 0.85) 0%, rgba(10, 12, 16, 0.6) 50%, rgba(214, 40, 40, 0.35) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Badge */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(230, 57, 70, 0.18)',
                border: '1px solid rgba(230, 57, 70, 0.35)',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#FF7B7B',
                backdropFilter: 'blur(8px)'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', boxShadow: '0 0 8px #E63946' }}></span>
                {copy.eyebrow}
              </div>
            </div>

            {/* Bottom Content & Play Button */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
              <div style={{ maxWidth: '880px', flex: '1 1 500px' }}>
                <h3 style={{ 
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: 'clamp(22px, 2.8vw, 38px)', 
                  lineHeight: 1.25, 
                  color: '#FFFFFF', 
                  fontWeight: 300, 
                  margin: '0 0 16px 0',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
                }}>
                  <span style={{ display: 'block' }}>
                    <span style={{ color: '#E63946', fontWeight: 600, fontStyle: 'italic', textShadow: '0 0 25px rgba(230, 57, 70, 0.4)' }}>
                      {copy.quote_1}
                    </span>
                    {copy.quote_2}
                  </span>
                  <span style={{ display: 'block', fontWeight: 600, marginTop: '4px' }}>{copy.quote_3}</span>
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0, maxWidth: '580px' }}>
                  {copy.sub}
                </p>
              </div>

              {/* Glowing Play Button */}
              <div className="manifesto-play-pulse" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '3px' }}>
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* Video Modal Popup */}
      {isOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 9999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.92)', 
            backdropFilter: 'blur(12px)',
            animation: 'fadeInModal 0.25s ease'
          }}
          onClick={() => setIsOpen(false)}
        >
          <button 
            onClick={() => setIsOpen(false)} 
            aria-label="Close video"
            style={{ 
              position: 'absolute', 
              top: '28px', 
              right: '28px', 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              color: '#FFFFFF', 
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000,
              transition: 'background 0.2s ease'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div 
            style={{ 
              width: '92%', 
              maxWidth: '1040px', 
              aspectRatio: '16 / 9', 
              backgroundColor: '#000000', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 57, 70, 0.3)' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="8 Vice Strategic Video Manifesto" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
