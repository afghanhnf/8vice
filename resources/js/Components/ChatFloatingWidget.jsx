import React, { useState, useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { useTranslation } from '@/Contexts/TranslationContext';

export default function ChatFloatingWidget() {
  const { siteSettings } = usePage().props;
  const { lang } = useTranslation();
  const isId = lang === 'id';

  const [isOpen, setIsOpen] = useState(false);
  const [showWechatModal, setShowWechatModal] = useState(false);
  const widgetRef = useRef(null);

  const whatsappUrl = siteSettings?.whatsapp_url || 'https://wa.me/628118005110';

  // Close popup menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key to close menu and modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setShowWechatModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Floating Action Button & Menu Container */}
      <div
        ref={widgetRef}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 9990,
          fontFamily: 'inherit'
        }}
      >
        {/* Floating Options Menu */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              bottom: '68px',
              right: 0,
              width: '240px',
              background: 'rgba(16, 18, 24, 0.96)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '14px',
              boxShadow: '0 18px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              animation: 'chatMenuSlideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.45)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 8px 6px'
              }}
            >
              {isId ? 'Pilih Saluran Konsultasi' : 'Direct Channels'}
            </div>

            {/* Option 1: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
                e.currentTarget.style.transform = 'translateX(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.97 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43-.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>WhatsApp</div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                  {isId ? 'Chat langsung' : 'Chat directly'}
                </div>
              </div>
            </a>

            {/* Option 2: WeChat */}
            <button
              type="button"
              onClick={() => {
                setShowWechatModal(true);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(7, 193, 96, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(7, 193, 96, 0.4)';
                e.currentTarget.style.transform = 'translateX(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#07C160',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(7, 193, 96, 0.35)'
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.94.97 3.69 2.5 4.88-.11.75-.48 2.22-1.25 3.32 1.46-.22 3.12-.92 3.97-1.57.71.24 1.48.37 2.28.37.28 0 .56-.02.83-.05C8.83 14.7 8.5 13.88 8.5 13c0-3.87 3.81-7 8.5-7 .34 0 .67.02 1 .06C17.02 3.73 13.11 2 8.5 2zm-2.25 4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 7c-3.87 0-7 2.69-7 6s3.13 6 7 6c.64 0 1.25-.09 1.83-.26.68.52 2.01 1.08 3.17 1.26-.62-.88-.91-2.06-1-2.66 1.22-.95 2-2.35 2-3.9 0-3.31-3.13-6-7-6zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>WeChat</div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                  {isId ? 'Pindai QR Code' : 'Scan QR Code'}
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Trigger Button (Green Chat FAB with Radar Pulse & Subtle Motion) */}
        <button
          type="button"
          className={`chat-fab-btn ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Tutup menu chat' : 'Buka opsi konsultasi (WhatsApp & WeChat)'}
        >
          {isOpen ? (
            /* Close X Icon */
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            /* Chat Icon */
            <svg className="chat-fab-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="rgba(255, 255, 255, 0.16)" />
              <circle cx="9" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
              <circle cx="12.5" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
              <circle cx="16" cy="11.5" r="1.15" fill="currentColor" stroke="none" />
            </svg>
          )}
        </button>
      </div>

      {/* WeChat QR Code Modal */}
      {showWechatModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowWechatModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 7, 12, 0.82)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px',
            animation: 'chatModalFadeIn 0.2s ease-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#12141B',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '36px 30px 30px',
              maxWidth: '380px',
              width: '100%',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              position: 'relative',
              textAlign: 'center',
              animation: 'chatModalScaleUp 0.24s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowWechatModal(false)}
              aria-label="Tutup"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.75)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(7, 193, 96, 0.12)',
                border: '1px solid rgba(7, 193, 96, 0.28)',
                borderRadius: '20px',
                color: '#07C160',
                fontSize: '12.5px',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.94.97 3.69 2.5 4.88-.11.75-.48 2.22-1.25 3.32 1.46-.22 3.12-.92 3.97-1.57.71.24 1.48.37 2.28.37.28 0 .56-.02.83-.05C8.83 14.7 8.5 13.88 8.5 13c0-3.87 3.81-7 8.5-7 .34 0 .67.02 1 .06C17.02 3.73 13.11 2 8.5 2zm-2.25 4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 7c-3.87 0-7 2.69-7 6s3.13 6 7 6c.64 0 1.25-.09 1.83-.26.68.52 2.01 1.08 3.17 1.26-.62-.88-.91-2.06-1-2.66 1.22-.95 2-2.35 2-3.9 0-3.31-3.13-6-7-6zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span>WeChat Official Channel</span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '8px',
                letterSpacing: '-0.01em'
              }}
            >
              {isId ? 'Hubungi Kami via WeChat' : 'Connect on WeChat'}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: 1.5,
                marginBottom: '20px',
                padding: '0 4px'
              }}
            >
              {isId
                ? 'Pindai kode QR di bawah ini dengan aplikasi WeChat Anda untuk terhubung langsung dengan tim penasihat 8Vice.'
                : 'Scan the QR code below using your WeChat scanner to connect directly with 8Vice advisory team.'}
            </p>

            {/* QR Code Container */}
            <div
              style={{
                background: '#FFFFFF',
                padding: '16px',
                borderRadius: '16px',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                marginBottom: '16px'
              }}
            >
              <img
                src="/images/wechat.jpeg"
                alt="8Vice WeChat QR Code"
                style={{
                  width: '210px',
                  height: '210px',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: '6px'
                }}
              />
            </div>

            {/* Footer note */}
            <div
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.45)',
                letterSpacing: '0.02em'
              }}
            >
              {isId ? 'Konsultasi Strategis Lintas Batas' : 'Cross-Border Strategic Advisory'} · Indonesia &amp; China
            </div>
          </div>
        </div>
      )}

      {/* Embedded Animation Styles */}
      <style>{`
        .chat-fab-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #16A34A 100%);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.42), 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.25s ease;
          animation: chatFabFloat 3.6s ease-in-out infinite;
        }
        .chat-fab-btn::before,
        .chat-fab-btn::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid #25D366;
          opacity: 0.75;
          pointer-events: none;
          animation: chatFabRadarPulse 2.4s cubic-bezier(0.2, 0, 0, 1) infinite;
        }
        .chat-fab-btn::after {
          animation-delay: 1.2s;
        }
        .chat-fab-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 16px 36px rgba(37, 211, 102, 0.55);
        }
        .chat-fab-btn.is-open {
          background: #1A1E26;
          border: 1px solid rgba(37, 211, 102, 0.45);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5), 0 0 18px rgba(37, 211, 102, 0.25);
          transform: rotate(90deg);
          animation: none;
        }
        .chat-fab-btn.is-open::before,
        .chat-fab-btn.is-open::after {
          display: none;
        }
        .chat-fab-icon {
          animation: chatIconWiggle 4.5s ease-in-out infinite;
        }
        @keyframes chatFabRadarPulse {
          0% {
            transform: scale(0.92);
            opacity: 0.8;
          }
          50% {
            opacity: 0.35;
          }
          100% {
            transform: scale(1.42);
            opacity: 0;
          }
        }
        @keyframes chatFabFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes chatIconWiggle {
          0%, 82%, 100% {
            transform: rotate(0deg) scale(1);
          }
          86% {
            transform: rotate(-8deg) scale(1.06);
          }
          90% {
            transform: rotate(8deg) scale(1.06);
          }
          94% {
            transform: rotate(-4deg) scale(1.03);
          }
        }
        @keyframes chatMenuSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes chatModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes chatModalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
