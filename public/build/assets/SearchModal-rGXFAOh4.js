import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{c as t,i as n,o as r,s as i}from"./vendor-inertia-ITStVNxA.js";import{o as a}from"./vendor-react-DPCMAjqV.js";import{t as o}from"./LocalizedLink-fuylsXB8.js";var s=e(t(),1),c=e(i(),1),l=a(),u=(e=``)=>{let t=e.toLowerCase();return t.includes(`article`)||t.includes(`artikel`)||t.includes(`insight`)||t.includes(`wawasan`)||t.includes(`洞察`)||t.includes(`文章`)?`article`:`page`};function d({isOpen:e,onOpen:t,onClose:i,lang:a}){let{props:d}=r(),f=d?.footerInsights||[],p=a===`id`,m=a===`cn`,[h,g]=(0,s.useState)(``),[_,v]=(0,s.useState)({results:[],recommended_services:[]}),[y,b]=(0,s.useState)(!1),[x,S]=(0,s.useState)(0),C=(0,s.useRef)(null),w=(0,s.useRef)(null),T=m?`/cn`:p?`/id`:``,E=m?`页面`:p?`Halaman`:`Page`,D=m?`洞察文章`:p?`Artikel`:`Article`,O=(e,t=``)=>e?typeof e==`string`?e:typeof e==`object`?e[a]||e.en||e.id||e.cn||Object.values(e)[0]||t:String(e):t,k=[{type:E,title:m?`首页`:p?`Beranda`:`Home`,desc:m?`8vice 印中跨境战略商业门户首页`:p?`Gerbang strategis ekspansi lintas batas Indonesia–Tiongkok`:`Strategic advisory gateway connecting Indonesia & China`,url:`/`},{type:E,title:m?`关于我们`:p?`Tentang Kami`:`About Us`,desc:m?`领导团队、愿景使命与跨国咨询方法论`:p?`Profil pimpinan, visi, misi, dan cara kami bekerja`:`Senior leadership, vision, mission, and advisory approach`,url:`/about`},{type:E,title:m?`核心服务`:p?`Layanan Kami`:`Our Services`,desc:m?`六大跨境战略咨询与企业拓展服务支柱`:p?`Enam pilar konsultasi strategis & masuk pasar`:`Six integrated cross-border advisory capabilities`,url:`/services`},{type:E,title:m?`商业洞察与合作`:p?`Wawasan & Kemitraan`:`Insights & Partnerships`,desc:m?`深度行业研究报告与监管合规分析`:p?`Laporan riset pasar, panduan regulasi, dan artikel strategis`:`Market intelligence, regulatory briefings, and research reports`,url:`/insights`},{type:E,title:m?`联系我们`:p?`Hubungi Kami`:`Contact Us`,desc:m?`预约 8vice 雅加达顾问团队咨询讨论`:p?`Jadwalkan konsultasi strategis bersama tim kami`:`Book a candid strategic discussion with our advisors`,url:`/contact`}],A=(Array.isArray(f)?f:[]).filter(e=>e&&e.slug).slice(0,3).map(e=>({type:D,title:O(e.t_i18n||e.t,`Insight`),desc:O(e.cat,``),url:`/insights/${e.slug}`})),j=[...k,...A],M=m?[`市场准入`,`政府关系`,`EV供应链`,`个人数据保护`,`跨境支付`]:p?[`Ekspansi Pasar`,`Hubungan Pemerintah`,`UU PDP`,`TKDN`,`QRIS`]:[`Market Entry`,`Advisory`,`UU PDP`,`TKDN`,`QRIS`],N=h.trim().length>1,P=N?_.results.length?_.results:_.recommended_services:j,F=()=>{g(``),i()};if((0,s.useEffect)(()=>{let n=n=>{(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()===`k`&&(n.preventDefault(),e?F():t())};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e]),(0,s.useEffect)(()=>{if(!N){v({results:[],recommended_services:[]}),b(!1);return}b(!0);let e=new AbortController,t=setTimeout(()=>{fetch(`/api/search?q=${encodeURIComponent(h)}&lang=${a}`,{signal:e.signal}).then(e=>e.json()).then(e=>v({results:e?.results||[],recommended_services:e?.recommended_services||[]})).catch(e=>{e.name!==`AbortError`&&v({results:[],recommended_services:[]})}).finally(()=>b(!1))},220);return()=>{clearTimeout(t),e.abort()}},[h,a]),(0,s.useEffect)(()=>S(0),[h,_]),(0,s.useEffect)(()=>{if(!e)return;let t=document.activeElement,n=document.body.style.overflow;document.body.style.overflow=`hidden`;let r=setTimeout(()=>w.current?.focus(),20);return()=>{clearTimeout(r),document.body.style.overflow=n,t?.focus?.()}},[e]),!e||typeof document>`u`)return null;let I=e=>{F();let t=/^https?:/.test(e)||e===`/`||e.startsWith(T+`/`)?e===`/`?T||`/`:e:T+e;n.visit(t)},L=e=>{if(e.key===`Escape`)e.preventDefault(),F();else if(e.key===`ArrowDown`)e.preventDefault(),S(e=>Math.min(e+1,Math.max(0,P.length-1)));else if(e.key===`ArrowUp`)e.preventDefault(),S(e=>Math.max(e-1,0));else if(e.key===`Enter`&&e.target===w.current&&P[x])e.preventDefault(),I(P[x].url);else if(e.key===`Tab`&&C.current){let t=C.current.querySelectorAll(`input, button, a[href]`),n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())}},R=[];P.forEach((e,t)=>{let n=e.badge||e.type||E,r=R.find(e=>e.key===n);r||R.push(r={key:n,items:[]}),r.items.push({...e,idx:t})});let z=N?_.results.length?m?`找到 ${_.results.length} 条结果`:p?`${_.results.length} Hasil Ditemukan`:`${_.results.length} Results Found`:m?`未找到与 "${h}" 匹配的结果 · 推荐页面`:p?`Tidak ada hasil untuk "${h}" · Halaman Rekomendasi`:`No matches for "${h}" · Recommended Pages`:m?`快捷访问`:p?`Akses Cepat`:`Quick Links`;return(0,c.createPortal)((0,l.jsxs)(`div`,{className:`smartsearch-modal`,onKeyDown:L,children:[(0,l.jsx)(`style`,{children:`
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
      `}),(0,l.jsx)(`div`,{className:`smartsearch-backdrop`,onClick:F}),(0,l.jsxs)(`div`,{className:`smartsearch-dialog`,ref:C,role:`dialog`,"aria-modal":`true`,"aria-label":m?`全站搜索`:p?`Pencarian situs`:`Site search`,children:[(0,l.jsxs)(`div`,{className:`smartsearch-header`,children:[(0,l.jsxs)(`svg`,{style:{color:`rgba(255,255,255,0.48)`,width:`19px`,height:`19px`,flexShrink:0},viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,l.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,l.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,l.jsx)(`input`,{ref:w,type:`text`,placeholder:m?`搜索页面、服务或洞察文章...`:p?`Cari halaman atau artikel...`:`Search pages or articles...`,className:`smartsearch-input`,value:h,onChange:e=>g(e.target.value),role:`combobox`,"aria-expanded":`true`,"aria-controls":`smartsearch-listbox`,"aria-activedescendant":P[x]?`ss-opt-${x}`:void 0}),h&&(0,l.jsx)(`button`,{type:`button`,onClick:()=>{g(``),w.current?.focus()},"aria-label":m?`清除搜索`:p?`Hapus pencarian`:`Clear search`,style:{background:`transparent`,border:`none`,color:`rgba(255,255,255,0.55)`,padding:`6px`,cursor:`pointer`,display:`flex`,alignItems:`center`,flexShrink:0},children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,l.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,l.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,l.jsx)(`button`,{type:`button`,onClick:F,className:`smartsearch-close`,"aria-label":m?`关闭搜索`:p?`Tutup pencarian`:`Close search`,children:(0,l.jsx)(`span`,{children:`ESC`})})]}),(0,l.jsxs)(`div`,{className:`smartsearch-body`,children:[!N&&(0,l.jsxs)(`div`,{className:`smartsearch-suggestions`,children:[(0,l.jsx)(`span`,{className:`smartsearch-popular-label`,children:m?`热门搜索：`:p?`Populer:`:`Popular:`}),M.map(e=>(0,l.jsx)(`button`,{type:`button`,onClick:()=>g(e),className:`smartsearch-popular-pill`,children:e},e))]}),y?(0,l.jsxs)(`div`,{className:`smartsearch-empty`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`,paddingBlock:`32px`},"aria-live":`polite`,children:[(0,l.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,style:{animation:`spin 1s linear infinite`},children:[(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,stroke:`rgba(255,255,255,0.2)`,strokeWidth:`3`,fill:`none`}),(0,l.jsx)(`path`,{d:`M12 2 A 10 10 0 0 1 22 12`,stroke:`#E63946`,strokeWidth:`3`,fill:`none`})]}),(0,l.jsx)(`span`,{children:m?`正在搜索...`:p?`Mencari...`:`Searching...`})]}):(0,l.jsxs)(`div`,{className:`smartsearch-results`,id:`smartsearch-listbox`,role:`listbox`,children:[(0,l.jsx)(`div`,{className:`smartsearch-group-heading`,"aria-live":`polite`,children:z}),R.map(e=>(0,l.jsxs)(`div`,{style:{marginBottom:`18px`},children:[(0,l.jsx)(`div`,{style:{marginBottom:`10px`},children:(0,l.jsx)(`span`,{className:`smartsearch-badge smartsearch-badge--${u(e.key)}`,children:e.key})}),(0,l.jsx)(`ul`,{className:`smartsearch-results-list`,children:e.items.map(e=>(0,l.jsx)(`li`,{id:`ss-opt-${e.idx}`,role:`option`,"aria-selected":e.idx===x,children:(0,l.jsxs)(o,{href:e.url,onClick:F,onMouseEnter:()=>S(e.idx),className:`smartsearch-result-item ${e.idx===x?`is-active`:``}`,children:[(0,l.jsxs)(`div`,{className:`smartsearch-result-content`,children:[(0,l.jsx)(`div`,{className:`smartsearch-result-title`,children:e.title}),e.desc&&(0,l.jsx)(`div`,{className:`smartsearch-result-desc`,children:e.desc})]}),(0,l.jsxs)(`svg`,{className:`smartsearch-result-arrow`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,"aria-hidden":`true`,children:[(0,l.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,l.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})},e.idx))})]},e.key))]}),(0,l.jsxs)(`div`,{className:`smartsearch-footer-hints`,children:[(0,l.jsxs)(`span`,{children:[`↑ ↓ `,m?`上下切换`:p?`navigasi`:`navigate`]}),(0,l.jsxs)(`span`,{children:[`↵ `,m?`打开`:p?`buka`:`open`]}),(0,l.jsx)(`span`,{children:`Ctrl K`})]})]})]})]}),document.body)}export{d as default};