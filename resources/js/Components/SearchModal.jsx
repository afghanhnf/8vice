import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { router, usePage } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';

const getTypeClass = (type = '') => {
  const t = type.toLowerCase();
  if (t.includes('article') || t.includes('artikel') || t.includes('insight') || t.includes('wawasan') || t.includes('洞察') || t.includes('文章')) {
    return 'article';
  }
  return 'page';
};

// Search dialog: Ctrl/Cmd+K to open, arrow keys + Enter to navigate, Esc to close.
export default function SearchModal({ isOpen, onOpen, onClose, lang }) {
  const { props } = usePage();
  const footerInsights = props?.footerInsights || [];
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const [query, setQuery] = useState('');
  const [data, setData] = useState({ results: [], recommended_services: [] });
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);

  const prefix = isCn ? '/cn' : isId ? '/id' : '';
  const pageLabel = isCn ? '页面' : isId ? 'Halaman' : 'Page';
  const articleLabel = isCn ? '洞察文章' : isId ? 'Artikel' : 'Article';

  const pickLoc = (val, fallback = '') => {
    if (!val) return fallback;
    if (typeof val === 'string') return val;
    if (typeof val === 'object') {
      return val[lang] || val.en || val.id || val.cn || Object.values(val)[0] || fallback;
    }
    return String(val);
  };

  // Only active, non-hidden pages + latest published articles
  const quickPages = [
    {
      type: pageLabel,
      title: isCn ? '首页' : isId ? 'Beranda' : 'Home',
      desc: isCn ? '8vice 印中跨境战略商业门户首页' : isId ? 'Gerbang strategis ekspansi lintas batas Indonesia–Tiongkok' : 'Strategic advisory gateway connecting Indonesia & China',
      url: '/'
    },
    {
      type: pageLabel,
      title: isCn ? '关于我们' : isId ? 'Tentang Kami' : 'About Us',
      desc: isCn ? '领导团队、愿景使命与跨国咨询方法论' : isId ? 'Profil pimpinan, visi, misi, dan cara kami bekerja' : 'Senior leadership, vision, mission, and advisory approach',
      url: '/about'
    },
    {
      type: pageLabel,
      title: isCn ? '核心服务' : isId ? 'Layanan Kami' : 'Our Services',
      desc: isCn ? '六大跨境战略咨询与企业拓展服务支柱' : isId ? 'Enam pilar konsultasi strategis & masuk pasar' : 'Six integrated cross-border advisory capabilities',
      url: '/services'
    },
    {
      type: pageLabel,
      title: isCn ? '商业洞察与合作' : isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships',
      desc: isCn ? '深度行业研究报告与监管合规分析' : isId ? 'Laporan riset pasar, panduan regulasi, dan artikel strategis' : 'Market intelligence, regulatory briefings, and research reports',
      url: '/insights'
    },
    {
      type: pageLabel,
      title: isCn ? '联系我们' : isId ? 'Hubungi Kami' : 'Contact Us',
      desc: isCn ? '预约 8vice 雅加达顾问团队咨询讨论' : isId ? 'Jadwalkan konsultasi strategis bersama tim kami' : 'Book a candid strategic discussion with our advisors',
      url: '/contact'
    }
  ];

  const quickArticles = (Array.isArray(footerInsights) ? footerInsights : [])
    .filter((item) => item && item.slug)
    .slice(0, 3)
    .map((item) => ({
      type: articleLabel,
      title: pickLoc(item.t_i18n || item.t, 'Insight'),
      desc: pickLoc(item.cat, ''),
      url: `/insights/${item.slug}`
    }));

  const quickLinks = [...quickPages, ...quickArticles];

  const popular = isCn
    ? ['市场准入', '政府关系', 'EV供应链', '个人数据保护', '跨境支付']
    : isId
      ? ['Ekspansi Pasar', 'Hubungan Pemerintah', 'UU PDP', 'TKDN', 'QRIS']
      : ['Market Entry', 'Advisory', 'UU PDP', 'TKDN', 'QRIS'];

  const hasQuery = query.trim().length > 1;
  const items = hasQuery
    ? (data.results.length ? data.results : data.recommended_services)
    : quickLinks;

  const close = () => {
    setQuery('');
    onClose();
  };

  // Global shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? close() : onOpen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Debounced fetch from /api/search
  useEffect(() => {
    if (!hasQuery) {
      setData({ results: [], recommended_services: [] });
      setLoading(false);
      return undefined;
    }
    setLoading(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${lang}`, { signal: ctrl.signal })
        .then((r) => r.json())
        .then((d) => setData({ results: d?.results || [], recommended_services: d?.recommended_services || [] }))
        .catch((err) => {
          if (err.name !== 'AbortError') setData({ results: [], recommended_services: [] });
        })
        .finally(() => setLoading(false));
    }, 220);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [query, lang]);

  useEffect(() => setActive(0), [query, data]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      prev?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  const go = (url) => {
    close();
    const targetUrl = /^https?:/.test(url) || url === '/' || url.startsWith(prefix + '/')
      ? (url === '/' ? (prefix || '/') : url)
      : prefix + url;
    router.visit(targetUrl);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(0, items.length - 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && e.target === inputRef.current && items[active]) {
      e.preventDefault();
      go(items[active].url);
    } else if (e.key === 'Tab' && dialogRef.current) {
      const f = dialogRef.current.querySelectorAll('input, button, a[href]');
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  };

  // Group items by category type
  const groups = [];
  items.forEach((it, idx) => {
    const key = it.badge || it.type || pageLabel;
    let g = groups.find((x) => x.key === key);
    if (!g) groups.push((g = { key, items: [] }));
    g.items.push({ ...it, idx });
  });

  const heading = !hasQuery
    ? (isCn ? '快捷访问' : isId ? 'Akses Cepat' : 'Quick Links')
    : data.results.length
      ? (isCn ? `找到 ${data.results.length} 条结果` : isId ? `${data.results.length} Hasil Ditemukan` : `${data.results.length} Results Found`)
      : (isCn ? `未找到与 "${query}" 匹配的结果 · 推荐页面` : isId ? `Tidak ada hasil untuk "${query}" · Halaman Rekomendasi` : `No matches for "${query}" · Recommended Pages`);

  const modalUi = (
    <div className="smartsearch-modal" onKeyDown={onKeyDown}>
      <style>{`
        .smartsearch-modal {
          position: fixed !important;
          inset: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          z-index: 200000 !important;
          display: flex !important;
          align-items: flex-start !important;
          justify-content: center !important;
          padding: clamp(24px, 8vh, 80px) 16px 24px !important;
          box-sizing: border-box !important;
        }
        .smartsearch-backdrop {
          position: fixed !important;
          inset: 0 !important;
          background: rgba(5, 6, 9, 0.78) !important;
          backdrop-filter: blur(14px) !important;
          -webkit-backdrop-filter: blur(14px) !important;
        }
        .smartsearch-dialog {
          position: relative !important;
          z-index: 2 !important;
          width: 100% !important;
          max-width: 720px !important;
          max-height: calc(100dvh - clamp(48px, 14vh, 120px)) !important;
          display: flex !important;
          flex-direction: column !important;
          background: rgba(16, 17, 22, 0.96) !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          border-radius: 18px !important;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.72), 0 0 0 1px rgba(230, 57, 70, 0.08) !important;
          overflow: hidden !important;
          color: #FFFFFF !important;
          animation: ssModalIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        @keyframes ssModalIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .smartsearch-header {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 0 16px 0 20px !important;
          min-height: 64px !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          flex-shrink: 0 !important;
        }
        .smartsearch-input {
          flex: 1 !important;
          min-width: 0 !important;
          width: 100% !important;
          border: none !important;
          padding: 18px 4px !important;
          font-size: 16px !important;
          font-weight: 400 !important;
          color: #FFFFFF !important;
          background: transparent !important;
          outline: none !important;
          font-family: inherit !important;
        }
        .smartsearch-input::placeholder {
          color: rgba(255, 255, 255, 0.44) !important;
        }
        .smartsearch-close {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.16) !important;
          border-radius: 8px !important;
          padding: 6px 11px !important;
          margin: 0 !important;
          color: rgba(255, 255, 255, 0.85) !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.06em !important;
          cursor: pointer !important;
          flex-shrink: 0 !important;
          transition: all 0.18s ease !important;
        }
        .smartsearch-close:hover {
          background: rgba(230, 57, 70, 0.25) !important;
          border-color: rgba(230, 57, 70, 0.6) !important;
          color: #FFFFFF !important;
        }
        .smartsearch-body {
          flex: 1 !important;
          overflow-y: auto !important;
          padding: 20px 22px 18px !important;
          scrollbar-width: thin;
          scrollbar-color: rgba(230, 57, 70, 0.72) rgba(255, 255, 255, 0.04);
        }
        .smartsearch-body::-webkit-scrollbar { width: 5px; }
        .smartsearch-body::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.03); border-radius: 999px; }
        .smartsearch-body::-webkit-scrollbar-thumb { background: rgba(230, 57, 70, 0.78); border-radius: 999px; }
        .smartsearch-suggestions {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          flex-wrap: wrap !important;
          gap: 8px !important;
          margin: 0 0 20px 0 !important;
          padding-bottom: 16px !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
        }
        .smartsearch-popular-label {
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          color: rgba(255, 255, 255, 0.45) !important;
          margin-right: 4px !important;
        }
        .smartsearch-popular-pill {
          background: rgba(255, 255, 255, 0.06) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          color: rgba(255, 255, 255, 0.88) !important;
          padding: 6px 13px !important;
          border-radius: 999px !important;
          font-size: 12.5px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: all 0.18s ease !important;
          line-height: 1.2 !important;
        }
        .smartsearch-popular-pill:hover {
          background: #C81E2B !important;
          border-color: #C81E2B !important;
          color: #FFFFFF !important;
        }
        .smartsearch-group-heading {
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          color: rgba(255, 255, 255, 0.46) !important;
          margin-bottom: 14px !important;
        }
        .smartsearch-badge {
          display: inline-flex !important;
          align-items: center !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          padding: 4px 10px !important;
          border-radius: 999px !important;
          line-height: 1 !important;
        }
        .smartsearch-badge--article {
          background: rgba(230, 57, 70, 0.18) !important;
          color: #FF8A8A !important;
          border: 1px solid rgba(230, 57, 70, 0.4) !important;
        }
        .smartsearch-badge--page {
          background: rgba(255, 255, 255, 0.09) !important;
          color: rgba(255, 255, 255, 0.86) !important;
          border: 1px solid rgba(255, 255, 255, 0.18) !important;
        }
        .smartsearch-results-list {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
        }
        .smartsearch-result-item {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 14px !important;
          padding: 13px 16px !important;
          border-radius: 12px !important;
          background: rgba(255, 255, 255, 0.035) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          text-decoration: none !important;
          color: #FFFFFF !important;
          transition: all 0.18s ease !important;
        }
        .smartsearch-result-item:hover,
        .smartsearch-result-item.is-active {
          background: rgba(230, 57, 70, 0.1) !important;
          border-color: rgba(230, 57, 70, 0.52) !important;
          transform: translateX(3px) !important;
        }
        .smartsearch-result-content {
          flex: 1 !important;
          min-width: 0 !important;
        }
        .smartsearch-result-title {
          font-size: 14.5px !important;
          font-weight: 600 !important;
          line-height: 1.38 !important;
          color: #FFFFFF !important;
          margin-bottom: 3px !important;
        }
        .smartsearch-result-desc {
          font-size: 12.5px !important;
          line-height: 1.48 !important;
          color: rgba(255, 255, 255, 0.58) !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 2 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
        }
        .smartsearch-result-arrow {
          color: rgba(255, 255, 255, 0.38) !important;
          width: 16px !important;
          height: 16px !important;
          flex-shrink: 0 !important;
          transition: transform 0.18s ease, color 0.18s ease !important;
        }
        .smartsearch-result-item:hover .smartsearch-result-arrow,
        .smartsearch-result-item.is-active .smartsearch-result-arrow {
          color: #FF7B7B !important;
          transform: translateX(3px) !important;
        }
        .smartsearch-footer-hints {
          display: flex !important;
          gap: 16px !important;
          justify-content: flex-end !important;
          font-size: 11.5px !important;
          color: rgba(255, 255, 255, 0.4) !important;
          margin-top: 12px !important;
          padding-top: 12px !important;
          border-top: 1px solid rgba(255, 255, 255, 0.06) !important;
        }
        @media (max-width: 640px) {
          .smartsearch-modal {
            padding: 14px 12px 16px !important;
          }
          .smartsearch-dialog {
            max-height: calc(100dvh - 30px) !important;
            border-radius: 16px !important;
          }
          .smartsearch-body {
            padding: 16px !important;
          }
          .smartsearch-footer-hints {
            display: none !important;
          }
        }
      `}</style>
      <div className="smartsearch-backdrop" onClick={close}></div>
      <div className="smartsearch-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-label={isCn ? '全站搜索' : isId ? 'Pencarian situs' : 'Site search'}>
        <div className="smartsearch-header">
          <svg style={{ color: 'rgba(255,255,255,0.48)', width: '19px', height: '19px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder={isCn ? '搜索页面、服务或洞察文章...' : isId ? 'Cari halaman atau artikel...' : 'Search pages or articles...'}
            className="smartsearch-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="smartsearch-listbox"
            aria-activedescendant={items[active] ? `ss-opt-${active}` : undefined}
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              aria-label={isCn ? '清除搜索' : isId ? 'Hapus pencarian' : 'Clear search'}
              style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.55)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
          <button type="button" onClick={close} className="smartsearch-close" aria-label={isCn ? '关闭搜索' : isId ? 'Tutup pencarian' : 'Close search'}>
            <span>ESC</span>
          </button>
        </div>

        <div className="smartsearch-body">
          {!hasQuery && (
            <div className="smartsearch-suggestions">
              <span className="smartsearch-popular-label">{isCn ? '热门搜索：' : isId ? 'Populer:' : 'Popular:'}</span>
              {popular.map((p) => (
                <button key={p} type="button" onClick={() => setQuery(p)} className="smartsearch-popular-pill">
                  {p}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="smartsearch-empty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', paddingBlock: '32px' }} aria-live="polite">
              <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}>
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none"></circle>
                <path d="M12 2 A 10 10 0 0 1 22 12" stroke="#E63946" strokeWidth="3" fill="none"></path>
              </svg>
              <span>{isCn ? '正在搜索...' : isId ? 'Mencari...' : 'Searching...'}</span>
            </div>
          ) : (
            <div className="smartsearch-results" id="smartsearch-listbox" role="listbox">
              <div className="smartsearch-group-heading" aria-live="polite">
                {heading}
              </div>
              {groups.map((g) => (
                <div key={g.key} style={{ marginBottom: '18px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span className={`smartsearch-badge smartsearch-badge--${getTypeClass(g.key)}`}>{g.key}</span>
                  </div>
                  <ul className="smartsearch-results-list">
                    {g.items.map((r) => (
                      <li key={r.idx} id={`ss-opt-${r.idx}`} role="option" aria-selected={r.idx === active}>
                        <Link
                          href={r.url}
                          onClick={close}
                          onMouseEnter={() => setActive(r.idx)}
                          className={`smartsearch-result-item ${r.idx === active ? 'is-active' : ''}`}
                        >
                          <div className="smartsearch-result-content">
                            <div className="smartsearch-result-title">{r.title}</div>
                            {r.desc && <div className="smartsearch-result-desc">{r.desc}</div>}
                          </div>
                          <svg className="smartsearch-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="smartsearch-footer-hints">
            <span>↑ ↓ {isCn ? '上下切换' : isId ? 'navigasi' : 'navigate'}</span>
            <span>↵ {isCn ? '打开' : isId ? 'buka' : 'open'}</span>
            <span>Ctrl K</span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalUi, document.body);
}
