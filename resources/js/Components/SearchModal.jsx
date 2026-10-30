import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import { getServices } from '@/data/services';

const getTypeClass = (type = '') => {
  const t = type.toLowerCase();
  if (t.includes('article') || t.includes('artikel') || t.includes('insight') || t.includes('wawasan')) return 'article';
  if (t.includes('case') || t.includes('kasus')) return 'case';
  if (t.includes('service') || t.includes('layanan')) return 'service';
  return 'page';
};

// Search dialog: Ctrl/Cmd+K to open, arrow keys + Enter to navigate, Esc to close.
export default function SearchModal({ isOpen, onOpen, onClose, lang }) {
  const isId = lang === 'id';
  const [query, setQuery] = useState('');
  const [data, setData] = useState({ results: [], recommended_services: [] });
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);

  const prefix = isId ? '/id' : '';
  const quickLinks = [
    ...getServices(lang).map((s) => ({ type: isId ? 'Layanan' : 'Service', title: s.title, url: `/services/${s.id}` })),
    { type: isId ? 'Halaman' : 'Page', title: isId ? 'Gerbang Indonesia–China' : 'Indonesia–China Gateway', url: '/gateway' },
    { type: isId ? 'Halaman' : 'Page', title: isId ? 'Industri & Peluang' : 'Industries & Opportunities', url: '/industries' },
    { type: isId ? 'Halaman' : 'Page', title: isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships', url: '/insights' },
    { type: isId ? 'Halaman' : 'Page', title: isId ? 'Hubungi Kami' : 'Contact Us', url: '/contact' }
  ];
  const popular = isId
    ? ['Ekspansi Pasar', 'Hubungan Media', 'Kemitraan', 'Pariwisata', 'Teknologi']
    : ['Market Entry', 'Media Relations', 'Partnership', 'Tourism', 'Technology'];

  const hasQuery = query.trim().length > 1;
  const items = hasQuery
    ? (data.results.length ? data.results : data.recommended_services)
    : quickLinks;

  const close = () => { setQuery(''); onClose(); };

  // Global shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? close() : onOpen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Debounced fetch
  useEffect(() => {
    if (!hasQuery) { setData({ results: [], recommended_services: [] }); setLoading(false); return undefined; }
    setLoading(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${lang}`, { signal: ctrl.signal })
        .then((r) => r.json())
        .then((d) => setData({ results: d?.results || [], recommended_services: d?.recommended_services || [] }))
        .catch((err) => { if (err.name !== 'AbortError') setData({ results: [], recommended_services: [] }); })
        .finally(() => setLoading(false));
    }, 250);
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, [query, lang]);

  useEffect(() => setActive(0), [query, data]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.activeElement;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    return () => { document.body.style.overflow = ''; prev?.focus?.(); };
  }, [isOpen]);

  if (!isOpen) return null;

  const go = (url) => {
    close();
    router.visit(/^https?:/.test(url) || url.startsWith(prefix + '/') ? url : prefix + url);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, items.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && e.target === inputRef.current && items[active]) { e.preventDefault(); go(items[active].url); }
    else if (e.key === 'Tab') {
      // Focus trap
      const f = dialogRef.current.querySelectorAll('input, button, a[href]');
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };

  // Group by type, keeping a flat index for keyboard highlight
  const groups = [];
  items.forEach((it, idx) => {
    const key = it.badge || it.type || (isId ? 'Halaman' : 'Page');
    let g = groups.find((x) => x.key === key);
    if (!g) groups.push((g = { key, items: [] }));
    g.items.push({ ...it, idx });
  });

  const heading = !hasQuery
    ? (isId ? 'Akses Cepat' : 'Quick Links')
    : data.results.length
      ? (isId ? `${data.results.length} Hasil Ditemukan` : `${data.results.length} Results Found`)
      : (isId ? `Tidak ada hasil untuk "${query}". Rekomendasi layanan:` : `No matches for "${query}". Recommended services:`);

  return (
    <div className="smartsearch-modal" onKeyDown={onKeyDown}>
      <style>{`
        .smartsearch-body,
        .smartsearch-results,
        .smartsearch-results-list {
          scrollbar-width: thin;
          scrollbar-color: rgba(230, 57, 70, 0.72) rgba(255, 255, 255, 0.03);
        }
        .smartsearch-body::-webkit-scrollbar,
        .smartsearch-results::-webkit-scrollbar,
        .smartsearch-results-list::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .smartsearch-body::-webkit-scrollbar-track,
        .smartsearch-results::-webkit-scrollbar-track,
        .smartsearch-results-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 999px;
          margin: 6px 0;
        }
        .smartsearch-body::-webkit-scrollbar-thumb,
        .smartsearch-results::-webkit-scrollbar-thumb,
        .smartsearch-results-list::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(230, 57, 70, 0.85) 0%, rgba(185, 28, 40, 0.85) 100%);
          border-radius: 999px;
          box-shadow: 0 0 8px rgba(230, 57, 70, 0.35);
        }
        .smartsearch-body::-webkit-scrollbar-thumb:hover,
        .smartsearch-results::-webkit-scrollbar-thumb:hover,
        .smartsearch-results-list::-webkit-scrollbar-thumb:hover {
          background: #E63946;
        }
      `}</style>
      <div className="smartsearch-backdrop" onClick={close}></div>
      <div className="smartsearch-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-label={isId ? 'Pencarian situs' : 'Site search'}>
        <div className="smartsearch-header">
          <svg style={{ marginLeft: '24px', color: 'rgba(255,255,255,0.4)', width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            ref={inputRef}
            type="text"
            placeholder={isId ? 'Cari layanan, industri, artikel, atau halaman...' : 'Search services, industries, insights, or pages...'}
            className="smartsearch-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="smartsearch-listbox"
            aria-activedescendant={items[active] ? `ss-opt-${active}` : undefined}
          />
          {query && (
            <button onClick={() => { setQuery(''); inputRef.current?.focus(); }} aria-label={isId ? 'Hapus pencarian' : 'Clear search'} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
          <button onClick={close} className="smartsearch-close" aria-label={isId ? 'Tutup pencarian' : 'Close search'}>
            <span>ESC</span>
          </button>
        </div>

        <div className="smartsearch-body">
          {!hasQuery && (
            <div className="smartsearch-suggestions" style={{ marginBottom: '22px' }}>
              <span style={{ fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{isId ? 'Populer:' : 'Popular:'}</span>
              {popular.map((p) => (
                <button key={p} type="button" onClick={() => setQuery(p)} className="lang-btn" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '7px 14px', borderRadius: '999px', fontSize: '13px' }}>
                  {p}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="smartsearch-empty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} aria-live="polite">
              <svg className="ico ico-20" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite' }}><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none"></circle><path d="M12 2 A 10 10 0 0 1 22 12" stroke="var(--color-red)" strokeWidth="3" fill="none"></path></svg>
              <span>{isId ? 'Mencari...' : 'Searching...'}</span>
            </div>
          ) : (
            <div className="smartsearch-results" id="smartsearch-listbox" role="listbox">
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '14px' }} aria-live="polite">
                {heading}
              </div>
              {groups.map((g) => (
                <div key={g.key} style={{ marginBottom: '18px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span className={`smartsearch-badge smartsearch-badge--${getTypeClass(g.key)}`}>{g.key}</span>
                  </div>
                  <ul className="smartsearch-results-list">
                    {g.items.map((r) => (
                      <li key={r.idx} id={`ss-opt-${r.idx}`} role="option" aria-selected={r.idx === active}>
                        <Link
                          href={r.url}
                          onClick={close}
                          onMouseEnter={() => setActive(r.idx)}
                          className="smartsearch-result-item"
                          style={r.idx === active ? { borderColor: 'rgba(230,57,70,0.5)', background: 'rgba(230,57,70,0.08)' } : undefined}
                        >
                          <div className="smartsearch-result-content">
                            <div className="smartsearch-result-title">{r.title}</div>
                            {r.desc && <div className="smartsearch-result-desc">{r.desc}</div>}
                          </div>
                          <svg className="ico ico-16 smartsearch-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', fontSize: '11.5px', color: 'rgba(255,255,255,0.35)', marginTop: '8px' }}>
            <span>↑ ↓ {isId ? 'navigasi' : 'navigate'}</span>
            <span>↵ {isId ? 'buka' : 'open'}</span>
            <span>Ctrl K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
