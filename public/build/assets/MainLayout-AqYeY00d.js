const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SearchModal-rGXFAOh4.js","assets/rolldown-runtime-QTnfLwEv.js","assets/vendor-react-DPCMAjqV.js","assets/vendor-inertia-ITStVNxA.js","assets/LocalizedLink-fuylsXB8.js","assets/ChatFloatingWidget-Dshjk9ti.js","assets/app-DFD0-oRs.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{a as t,c as n,o as r,s as i}from"./vendor-inertia-ITStVNxA.js";import{o as a}from"./vendor-react-DPCMAjqV.js";import{n as o,t as s}from"./app-DFD0-oRs.js";import{t as c}from"./LocalizedLink-fuylsXB8.js";var l=e(n(),1),u=e(i(),1),d=a(),f=(0,l.lazy)(()=>o(()=>import(`./SearchModal-rGXFAOh4.js`),__vite__mapDeps([0,1,2,3,4])));function p(){let{url:e,props:t}=r(),n=t?.siteSettings,[i,a]=(0,l.useState)(!1),{lang:o,t:p}=s(),[m,h]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[b,x]=(0,l.useState)(!1),[S,C]=(0,l.useState)(!1),[w,T]=(0,l.useState)(!1),[E,D]=(0,l.useState)(!1),[O,k]=(0,l.useState)(null),A=(0,l.useRef)(null),j=(0,l.useRef)(null),M=(0,l.useRef)(null),N=!!(n&&typeof n==`object`),P=(N?n.email||``:`hello@8vice.com`).trim().replace(/^mailto:/i,``).trim(),F=P?`mailto:${P}`:``,I=(N?n.instagram_url||``:`https://www.instagram.com/8viceofficial`).trim(),L=(N?n.linkedin_url||``:`https://www.linkedin.com/company/8-vice/`).trim(),R=(N&&n.whatsapp_url||``).trim(),z=(N?n.wechat_id||``:`eightvice`).trim(),B=(N?n.wechat_qr||``:`/images/wechat.webp`).trim(),V=B?B.startsWith(`http`)||B.startsWith(`/`)?B:`/storage/${B.replace(/^\/+/,``)}`:``,H=!!(z||V);(0,l.useEffect)(()=>{if(!S&&!i)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&(C(!1),a(!1))};return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[S,i]);let U=()=>{z&&navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(z),T(!0),setTimeout(()=>T(!1),2e3))},W=(e||`/`).replace(/^\/(id|cn)(\/|$)/,`/`)||`/`,G=e=>W===e||W.startsWith(e+`/`),K=t=>{let n=typeof window<`u`?window.location.pathname:e;n.startsWith(`/`)||(n=`/`+n);let r=n.replace(/^\/(id|cn)(\/|$)/,`/`)||`/`;return t===`id`?`/id`+(r===`/`?``:r):t===`cn`?`/cn`+(r===`/`?``:r):r},q=[{code:`en`,short:`EN`,label:`English`,native:`English`},{code:`id`,short:`ID`,label:`Indonesia`,native:`Bahasa Indonesia`},{code:`cn`,short:`CN`,label:`Mandarin`,native:`中文 (简体)`}],J=q.find(e=>e.code===o)||q[0];(0,l.useEffect)(()=>{if(typeof window>`u`||typeof navigator>`u`)return;let e=navigator.userAgent||``;if(!(/bot|crawl|spider|lighthouse|pagespeed|gtmetrix|headless|inspect/i.test(e)||navigator.webdriver))try{let e=(Array.isArray(navigator.languages)&&navigator.languages[0]||navigator.language||`en`).toLowerCase(),t=`en`;e.startsWith(`id`)||e.startsWith(`in`)?t=`id`:e.startsWith(`zh`)&&(t=`cn`),k(t);let n=window.localStorage.getItem(`8vice_lang_manual`),r=window.sessionStorage.getItem(`8vice_lang_auto_checked`),i=window.localStorage.getItem(`8vice_lang_alert_dismissed`);if(!n&&!r&&(window.sessionStorage.setItem(`8vice_lang_auto_checked`,t),t!==o)){window.location.replace(K(t));return}i!==`1`&&t!==o&&D(!0)}catch{}},[o]);let Y=e=>{try{window.localStorage.setItem(`8vice_lang_manual`,e),window.localStorage.setItem(`8vice_lang_alert_dismissed`,`1`)}catch{}M.current&&clearTimeout(M.current),D(!1),y(!1)},X=()=>{try{window.localStorage.setItem(`8vice_lang_alert_dismissed`,`1`)}catch{}D(!1)},Z=()=>{M.current&&clearTimeout(M.current),y(!0)},Q=()=>{M.current&&clearTimeout(M.current),M.current=setTimeout(()=>{y(!1)},240)};(0,l.useEffect)(()=>{let e=()=>{window.scrollY>12?_(!0):_(!1)},t=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`){e.preventDefault(),h(e=>!e);return}e.key===`Escape`&&(i&&a(!1),M.current&&clearTimeout(M.current),v&&y(!1),b&&x(!1))},n=e=>{A.current&&!A.current.contains(e.target)&&(M.current&&clearTimeout(M.current),y(!1)),j.current&&!j.current.contains(e.target)&&x(!1)};return window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`keydown`,t),document.addEventListener(`mousedown`,n),e(),()=>{M.current&&clearTimeout(M.current),window.removeEventListener(`scroll`,e),window.removeEventListener(`keydown`,t),document.removeEventListener(`mousedown`,n)}},[i,m,v,b]);let $=o===`cn`?`通往印尼与中国的战略商业门户`:o===`id`?`Gerbang Strategis Anda Menuju Indonesia dan Tiongkok`:`Indonesia, Decoded for Chinese Businesses`,ee=typeof n?.tagline==`object`?n?.tagline?.[o]||n?.tagline?.en||$:n?.tagline||$;return(0,d.jsxs)(d.Fragment,{children:[E&&(0,d.jsx)(`div`,{className:`lang-auto-banner`,role:`region`,"aria-label":`Language selection notice`,children:(0,d.jsxs)(`div`,{className:`container lang-auto-banner__inner`,children:[(0,d.jsxs)(`div`,{className:`lang-auto-banner__text`,children:[(0,d.jsxs)(`span`,{className:`lang-auto-banner__badge`,children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,d.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),o===`cn`?`智能语言匹配`:o===`id`?`Deteksi Bahasa Otomatis`:`Auto-Detected Language`]}),(0,d.jsx)(`span`,{className:`lang-auto-banner__msg`,children:o===`cn`?`系统已根据您的浏览器/设备匹配为中文。如果语言不合适，您可以随时切换：`:o===`id`?`Bahasa disesuaikan dengan perangkat/browser Anda. Kurang cocok? Silakan ubah bahasa:`:`Language matched to your device/browser. Prefer another language? Switch anytime:`})]}),(0,d.jsxs)(`div`,{className:`lang-auto-banner__actions`,children:[(0,d.jsx)(`div`,{className:`lang-auto-banner__pills`,role:`group`,"aria-label":`Switch language`,children:q.map(e=>(0,d.jsxs)(`a`,{href:K(e.code),onClick:()=>Y(e.code),className:`lang-auto-banner__pill ${o===e.code?`is-active`:``}`,children:[e.short,` · `,e.code===`cn`?`中文`:e.label]},e.code))}),(0,d.jsx)(`button`,{type:`button`,onClick:X,className:`lang-auto-banner__close`,"aria-label":o===`cn`?`关闭提示`:o===`id`?`Tutup pemberitahuan`:`Dismiss notice`,title:o===`cn`?`关闭`:o===`id`?`Tutup`:`Dismiss`,children:`✕`})]})]})}),(0,d.jsx)(`div`,{className:`top-bar ${E?`has-lang-banner`:``}`,children:(0,d.jsx)(`div`,{className:`container`,children:(0,d.jsxs)(`div`,{className:`top-bar__inner`,children:[(0,d.jsx)(`div`,{className:`top-bar__tagline`,children:ee}),(0,d.jsxs)(`div`,{className:`top-bar__contact`,children:[P&&(0,d.jsxs)(`a`,{href:F,"aria-label":`Email ${P}`,className:`top-bar__email-link`,style:{display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`ico ico-16`,children:[(0,d.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,d.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),(0,d.jsx)(`span`,{className:`top-bar__email-text`,style:{fontSize:`12.5px`},children:P})]}),I&&(0,d.jsx)(`a`,{href:I,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Instagram`,children:(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`ico ico-16`,children:[(0,d.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`}),(0,d.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,d.jsx)(`line`,{x1:`17.5`,y1:`6.5`,x2:`17.51`,y2:`6.5`})]})}),L&&(0,d.jsx)(`a`,{href:L,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`ico ico-16`,children:[(0,d.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,d.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,d.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})}),H&&(0,d.jsx)(`button`,{type:`button`,onClick:()=>C(!0),"aria-label":`WeChat QR Code`,style:{background:`transparent`,border:`none`,color:`inherit`,cursor:`pointer`,padding:0,display:`inline-flex`,alignItems:`center`,opacity:.85},title:o===`id`?`Buka QR Code WeChat 8vice`:`Scan 8vice WeChat QR Code`,children:(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.9`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`ico ico-16`,children:[(0,d.jsx)(`path`,{d:`M9.5 14c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 .7-.2 1.4-.5 2`}),(0,d.jsx)(`path`,{d:`M5.8 13.1 4.5 15.5l2.5-.9`}),(0,d.jsx)(`circle`,{cx:`7.7`,cy:`8.3`,r:`0.6`,fill:`currentColor`,stroke:`none`}),(0,d.jsx)(`circle`,{cx:`11.3`,cy:`8.3`,r:`0.6`,fill:`currentColor`,stroke:`none`}),(0,d.jsx)(`path`,{d:`M15.5 19.8c2.8 0 5-1.8 5-4.1s-2.2-4.1-5-4.1-5 1.8-5 4.1 2.2 4.1 5 4.1Z`}),(0,d.jsx)(`path`,{d:`M18.2 19.2 19.5 21l-2.2-.8`})]})}),R&&(0,d.jsx)(`a`,{href:R,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`WhatsApp`,title:`WhatsApp`,children:(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`ico ico-16`,children:[(0,d.jsx)(`path`,{d:`M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21`}),(0,d.jsx)(`path`,{d:`M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1`})]})})]})]})})}),(0,d.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .header__inner {
          justify-content: space-between;
          gap: 24px !important;
        }
        .header .nav {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
        }
        .header .nav__item {
          flex-shrink: 0;
        }
        .header .nav__link {
          white-space: nowrap !important;
          padding: 10px 15px;
          font-size: 13px;
          letter-spacing: 0.05em;
        }
        .nav__utils {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          margin-left: 12px;
          padding-left: 14px;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
        }
        .nav__contact-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap !important;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.92);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .nav__contact-pill:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.35);
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.12);
        }
        .nav__contact-pill:active {
          transform: translateY(0);
        }
        .nav__contact-pill.is-current {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
        }
        .lang-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px 0;
        }
        .lang-dropdown__trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #FFFFFF;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-dropdown__trigger:hover,
        .lang-dropdown.is-open .lang-dropdown__trigger {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(230, 57, 70, 0.45);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }
        .lang-dropdown__caret {
          width: 13px;
          height: 13px;
          transition: transform 0.2s ease;
          opacity: 0.75;
        }
        .lang-dropdown.is-open .lang-dropdown__caret {
          transform: rotate(180deg);
        }
        .lang-dropdown__menu {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 176px;
          background: rgba(13, 15, 20, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.65), 0 0 24px rgba(230, 57, 70, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        /* Invisible hover bridge: prevents dropdown from disappearing when cursor moves between button and menu */
        .lang-dropdown__menu::before {
          content: "";
          position: absolute;
          top: -14px;
          left: -10px;
          right: -10px;
          height: 14px;
          background: transparent;
        }
        .lang-dropdown__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.18s ease;
        }
        .lang-dropdown__item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
        }
        .lang-dropdown__item.is-active {
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #FFFFFF;
          font-weight: 600;
        }
        .lang-dropdown__code {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 2px 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          color: #FF8A8A;
        }
        .lang-dropdown__item.is-active .lang-dropdown__code {
          background: #E63946;
          color: #FFFFFF;
        }
        .nav__link.is-current {
          color: #FFFFFF;
        }
        .nav__link.is-current::after {
          transform: scaleX(1);
        }
        .lang-auto-banner {
          position: fixed;
          bottom: 20px;
          left: 20px;
          max-width: min(520px, calc(100vw - 104px));
          z-index: 9980;
          background: rgba(13, 15, 22, 0.96);
          border: 1px solid rgba(230, 57, 70, 0.42);
          border-radius: 14px;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          padding: 10px 14px;
        }
        .lang-auto-banner__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          flex-wrap: wrap;
          padding: 0 !important;
        }
        .lang-auto-banner__text {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.35;
        }
        .lang-auto-banner__badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(230, 57, 70, 0.18);
          border: 1px solid rgba(230, 57, 70, 0.42);
          color: #FF8A8A;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .lang-auto-banner__actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }
        .lang-auto-banner__pills {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
        .lang-auto-banner__pill {
          display: inline-flex;
          align-items: center;
          padding: 3px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          text-decoration: none;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .lang-auto-banner__pill:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
        }
        .lang-auto-banner__pill.is-active {
          background: #E63946;
          border-color: #E63946;
          color: #FFFFFF;
        }
        .lang-auto-banner__close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.8);
          font-size: 11px;
          cursor: pointer;
          transition: all 0.18s ease;
          padding: 0;
        }
        .lang-auto-banner__close:hover {
          background: rgba(230, 57, 70, 0.3);
          color: #FFFFFF;
        }
        .top-bar.has-lang-banner {
          opacity: 1;
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 10030;
        }
        .drawer-backdrop {
          z-index: 10040 !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .drawer {
          z-index: 10050 !important;
          height: 100vh;
          height: 100dvh;
          width: min(88vw, 350px) !important;
          padding: 20px 20px calc(28px + env(safe-area-inset-bottom, 0px)) !important;
        }
        .drawer__close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .drawer__close:hover {
          background: rgba(255, 255, 255, 0.14);
        }
        .drawer__link.is-current {
          color: #FF7B7B;
          border-bottom-color: rgba(230, 57, 70, 0.4);
        }
        .header__mobile-actions {
          display: none;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
        }
        .header__mobile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .header__mobile-btn:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(230, 57, 70, 0.45);
        }
        @media (max-width: 1024px) {
          .header__inner {
            gap: 12px !important;
            height: 68px !important;
          }
          .header .nav {
            display: none !important;
          }
          .header__mobile-actions {
            display: inline-flex;
          }
          .hamburger {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: #FFFFFF;
            margin-left: 0 !important;
            padding: 0 !important;
            cursor: pointer;
          }
          .hamburger:hover {
            background: rgba(255, 255, 255, 0.14);
          }
        }
        @media (max-width: 768px) {
          .lang-auto-banner {
            bottom: 84px;
            left: 12px;
            right: 12px;
            max-width: none;
            padding: 10px 12px;
          }
          .lang-auto-banner__inner {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .lang-auto-banner__badge {
            display: none;
          }
          .lang-auto-banner__text {
            font-size: 11.5px;
          }
          .lang-auto-banner__actions {
            margin-left: 0;
            justify-content: space-between;
            width: 100%;
          }
          .top-bar {
            height: auto;
            min-height: 36px;
            padding: 6px 0;
          }
          .top-bar__contact {
            gap: 14px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .header__inner {
            height: 62px !important;
            padding-inline: 16px !important;
          }
          .header .logo__img,
          .drawer__head .logo__img {
            height: 26px;
            width: auto;
          }
        }
        @media (max-width: 420px) {
          .lang-auto-banner__pill {
            padding: 3px 7px;
            font-size: 10.5px;
          }
          .header__mobile-actions {
            gap: 6px;
          }
          .header__mobile-btn,
          .hamburger {
            width: 36px;
            height: 36px;
          }
          .lang-dropdown__trigger {
            padding: 6px 10px;
            font-size: 11.5px;
          }
        }
      `}}),(0,d.jsx)(`header`,{className:`header ${g?`is-scrolled`:``} ${E?`has-lang-banner`:``}`,id:`header`,children:(0,d.jsxs)(`div`,{className:`header__inner container`,children:[(0,d.jsx)(c,{href:`/`,className:`logo`,"aria-label":`8vice home`,children:(0,d.jsx)(`img`,{loading:`eager`,fetchPriority:`high`,decoding:`async`,src:`/images/profil/8vice-logo.webp`,alt:`8vice`,className:`logo__img`,width:`100`,height:`32`})}),(0,d.jsxs)(`nav`,{className:`nav`,"aria-label":`Primary`,children:[(0,d.jsx)(`div`,{className:`nav__item`,children:(0,d.jsx)(c,{href:`/about`,className:`nav__link${G(`/about`)?` is-current`:``}`,children:p(`nav.about`)})}),(0,d.jsx)(`div`,{className:`nav__item`,children:(0,d.jsx)(c,{href:`/services`,className:`nav__link${G(`/services`)?` is-current`:``}`,children:p(`nav.services`)})}),(0,d.jsx)(`div`,{className:`nav__item`,children:(0,d.jsx)(c,{href:`/insights`,className:`nav__link${G(`/insights`)||G(`/article`)?` is-current`:``}`,children:p(`nav.insights_partnerships`)})}),(0,d.jsx)(`div`,{className:`nav__item`,style:{marginLeft:`6px`},children:(0,d.jsx)(c,{href:`/contact`,className:`nav__contact-pill${G(`/contact`)?` is-current`:``}`,children:p(`nav.contact`)})}),(0,d.jsxs)(`div`,{className:`nav__utils`,children:[(0,d.jsxs)(`div`,{ref:A,className:`lang-dropdown ${v?`is-open`:``}`,onMouseEnter:Z,onMouseLeave:Q,children:[(0,d.jsxs)(`button`,{type:`button`,className:`lang-dropdown__trigger`,"aria-haspopup":`true`,"aria-expanded":v,"aria-label":`${J.short} - Select Language`,onClick:e=>{e.stopPropagation(),M.current&&clearTimeout(M.current),y(e=>!e)},children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{opacity:.85},children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,d.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),(0,d.jsx)(`span`,{children:J.short}),(0,d.jsx)(`svg`,{className:`lang-dropdown__caret`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,d.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),v&&(0,d.jsx)(`div`,{className:`lang-dropdown__menu`,role:`menu`,"aria-label":`Language options`,children:q.map(e=>(0,d.jsxs)(`a`,{href:K(e.code),role:`menuitem`,className:`lang-dropdown__item ${o===e.code?`is-active`:``}`,onClick:()=>Y(e.code),children:[(0,d.jsx)(`span`,{children:e.native}),(0,d.jsx)(`span`,{className:`lang-dropdown__code`,children:e.short})]},e.code))})]}),(0,d.jsx)(`button`,{className:`login-btn`,"aria-label":`Search`,onClick:()=>h(!0),style:{background:`transparent`,border:`none`},children:(0,d.jsxs)(`svg`,{className:`ico ico-20`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,d.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})})]})]}),(0,d.jsxs)(`div`,{className:`header__mobile-actions`,children:[(0,d.jsxs)(`div`,{ref:j,className:`lang-dropdown ${b?`is-open`:``}`,children:[(0,d.jsxs)(`button`,{type:`button`,className:`lang-dropdown__trigger`,"aria-haspopup":`true`,"aria-expanded":b,"aria-label":`${J.short} - Select Language`,onClick:e=>{e.stopPropagation(),x(e=>!e)},children:[(0,d.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{opacity:.85},children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,d.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),(0,d.jsx)(`span`,{children:J.short}),(0,d.jsx)(`svg`,{className:`lang-dropdown__caret`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,d.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),b&&(0,d.jsx)(`div`,{className:`lang-dropdown__menu`,role:`menu`,"aria-label":`Mobile language options`,children:q.map(e=>(0,d.jsxs)(`a`,{href:K(e.code),role:`menuitem`,className:`lang-dropdown__item ${o===e.code?`is-active`:``}`,onClick:()=>{Y(e.code),x(!1)},children:[(0,d.jsx)(`span`,{children:e.native}),(0,d.jsx)(`span`,{className:`lang-dropdown__code`,children:e.short})]},e.code))})]}),(0,d.jsx)(`button`,{type:`button`,className:`header__mobile-btn`,"aria-label":`Search`,onClick:()=>h(!0),children:(0,d.jsxs)(`svg`,{className:`ico ico-18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,d.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,d.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})}),(0,d.jsx)(`button`,{type:`button`,className:`hamburger`,id:`hamburger`,"aria-label":`Open menu`,"aria-expanded":i,onClick:()=>a(!0),children:(0,d.jsxs)(`svg`,{className:`ico ico-22`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,d.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,d.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]})})]})]})}),(0,d.jsx)(`div`,{className:`drawer-backdrop ${i?`is-open`:``}`,id:`drawer-backdrop`,onClick:()=>a(!1)}),(0,d.jsxs)(`aside`,{className:`drawer ${i?`is-open`:``}`,id:`drawer`,"aria-label":`Mobile menu`,children:[(0,d.jsxs)(`div`,{className:`drawer__head`,children:[(0,d.jsx)(c,{href:`/`,className:`logo`,onClick:()=>a(!1),children:(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/images/profil/8vice-logo.webp`,alt:`8vice`,className:`logo__img`,width:`100`,height:`32`})}),(0,d.jsx)(`button`,{type:`button`,className:`drawer__close`,id:`drawer-close`,"aria-label":`Close menu`,onClick:()=>a(!1),children:(0,d.jsxs)(`svg`,{className:`ico ico-22`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,d.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]}),(0,d.jsx)(c,{className:`drawer__link${G(`/about`)?` is-current`:``}`,href:`/about`,onClick:()=>a(!1),children:p(`nav.about`)}),(0,d.jsx)(c,{className:`drawer__link${G(`/services`)?` is-current`:``}`,href:`/services`,onClick:()=>a(!1),children:p(`nav.services`)}),(0,d.jsx)(c,{className:`drawer__link${G(`/insights`)||G(`/article`)?` is-current`:``}`,href:`/insights`,onClick:()=>a(!1),children:p(`nav.insights_partnerships`)}),(0,d.jsx)(`div`,{style:{marginTop:`16px`,marginBottom:`8px`},children:(0,d.jsx)(c,{className:`nav__contact-pill`,href:`/contact`,onClick:()=>a(!1),style:{width:`100%`,justifyContent:`center`,padding:`12px 20px`,fontSize:`13.5px`},children:p(`nav.contact`)})}),(0,d.jsxs)(`div`,{className:`drawer__utils`,children:[(0,d.jsx)(`span`,{className:`drawer__util-lbl`,children:o===`cn`?`语言选择`:o===`id`?`Bahasa`:`Language`}),(0,d.jsxs)(`div`,{className:`lang-toggle`,role:`group`,"aria-label":`Language`,children:[(0,d.jsx)(`a`,{href:K(`en`),onClick:()=>Y(`en`),className:`lang-btn ${o===`en`?`is-active`:``}`,children:`EN`}),(0,d.jsx)(`a`,{href:K(`id`),onClick:()=>Y(`id`),className:`lang-btn ${o===`id`?`is-active`:``}`,children:`ID`}),(0,d.jsx)(`a`,{href:K(`cn`),onClick:()=>Y(`cn`),className:`lang-btn ${o===`cn`?`is-active`:``}`,children:`CN`})]}),(0,d.jsx)(`button`,{onClick:()=>{a(!1),h(!0)},className:`drawer__login`,"aria-label":`Search`,style:{width:`100%`,justifyContent:`center`},children:(0,d.jsxs)(`svg`,{className:`ico ico-20`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,d.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})})]})]}),m&&(0,d.jsx)(l.Suspense,{fallback:null,children:(0,d.jsx)(f,{isOpen:m,onOpen:()=>h(!0),onClose:()=>h(!1),lang:o})}),S&&typeof document<`u`&&(0,u.createPortal)((0,d.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":`WeChat Official QR Modal`,style:{position:`fixed`,inset:0,top:0,left:0,right:0,bottom:0,width:`100vw`,height:`100vh`,height:`100dvh`,zIndex:999999,background:`rgba(5, 6, 8, 0.86)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,overflowY:`auto`},onClick:e=>{e.target===e.currentTarget&&C(!1)},children:(0,d.jsxs)(`div`,{style:{position:`relative`,width:`100%`,maxWidth:`420px`,background:`#0D0E13`,border:`1px solid rgba(255, 255, 255, 0.14)`,borderRadius:`24px`,padding:`34px 28px 28px`,textAlign:`center`,boxShadow:`0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.18)`,color:`#FFFFFF`,margin:`auto`},children:[(0,d.jsx)(`button`,{type:`button`,onClick:()=>C(!1),"aria-label":o===`cn`?`关闭`:o===`id`?`Tutup`:`Close`,style:{position:`absolute`,top:`16px`,right:`16px`,width:`32px`,height:`32px`,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.08)`,border:`none`,color:`#FFFFFF`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`background 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.2)`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.08)`},children:`✕`}),(0,d.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`14px`,background:`rgba(7, 193, 96, 0.15)`,color:`#07C160`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`14px`},children:(0,d.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,style:{width:`26px`,height:`26px`},children:(0,d.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})})}),(0,d.jsx)(`h3`,{style:{fontSize:`19px`,fontWeight:700,margin:`0 0 6px`,color:`#FFFFFF`},children:o===`cn`?`8vice 官方微信咨询通道`:o===`id`?`Saluran Resmi WeChat 8vice`:`8vice Official WeChat Channel`}),(0,d.jsx)(`p`,{style:{fontSize:`13px`,lineHeight:1.6,color:`rgba(255, 255, 255, 0.68)`,margin:`0 0 18px`},children:o===`cn`?`使用微信扫描下方官方二维码，或直接添加微信号与我们的印中双边战略顾问团队建立联系。`:o===`id`?`Pindai kode QR ini menggunakan aplikasi WeChat, atau salin WeChat ID kami untuk terhubung langsung.`:`Scan this QR code with WeChat or copy our WeChat ID to connect directly with our advisory desk.`}),(0,d.jsx)(`div`,{style:{width:`210px`,height:`210px`,margin:`0 auto 16px`,padding:`10px`,background:`#FFFFFF`,borderRadius:`16px`,boxShadow:`0 10px 30px rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,d.jsx)(`img`,{src:V||`/images/wechat.webp`,alt:`8vice WeChat QR`,loading:`eager`,decoding:`sync`,fetchPriority:`high`,onError:e=>{e.currentTarget.dataset.fallback||(e.currentTarget.dataset.fallback=`true`,e.currentTarget.src=`/images/wechat.jpeg`)},style:{width:`100%`,height:`100%`,objectFit:`contain`,display:`block`,borderRadius:`6px`}})}),z&&(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`,padding:`10px 14px`,borderRadius:`12px`,background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,fontSize:`13px`,color:`rgba(255, 255, 255, 0.8)`},children:[(0,d.jsx)(`span`,{children:`WeChat ID:`}),(0,d.jsx)(`strong`,{style:{color:`#07C160`,letterSpacing:`0.5px`},children:z}),(0,d.jsx)(`button`,{type:`button`,onClick:U,style:{background:`rgba(7, 193, 96, 0.18)`,border:`1px solid rgba(7, 193, 96, 0.4)`,color:`#07C160`,fontSize:`11.5px`,fontWeight:600,borderRadius:`6px`,padding:`3px 8px`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#07C160`,e.currentTarget.style.color=`#FFFFFF`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(7, 193, 96, 0.18)`,e.currentTarget.style.color=`#07C160`},children:w?o===`cn`?`已复制 ✓`:o===`id`?`Tersalin ✓`:`Copied ✓`:o===`cn`?`复制`:o===`id`?`Salin`:`Copy`})]})]})}),document.body)]})}var m=(0,l.lazy)(()=>o(()=>import(`./ChatFloatingWidget-Dshjk9ti.js`),__vite__mapDeps([5,1,6,2,3])));function h(){let{siteSettings:e,footerInsights:n=[]}=r().props,{lang:i,t:a}=s(),o=i===`id`,f=i===`cn`,[p,h]=(0,l.useState)(null),[g,_]=(0,l.useState)(null),{data:v,setData:y,post:b,processing:x,errors:S,reset:C,clearErrors:w}=t({email:``,website_url:``}),T=f?`/cn/subscribe`:o?`/id/subscribe`:`/subscribe`,E=e=>{e.preventDefault(),w(),_(null),b(T,{preserveScroll:!0,onSuccess:e=>{_({type:`success`,text:e?.props?.flash?.success||(f?`订阅成功！感谢您加入 8vice 商业洞察简报。`:o?`Berhasil terkirim! Email Anda telah terdaftar di newsletter 8vice.`:`Successfully subscribed! Thank you for joining the 8vice newsletter.`)}),C(`email`)},onError:e=>{_({type:`error`,text:e?.email||(f?`提交失败，请检查您的邮箱地址是否正确。`:o?`Gagal mengirim, pastikan alamat email valid.`:`Submission failed. Please enter a valid email address.`)})}})};(0,l.useEffect)(()=>{if(!g)return;let e=setTimeout(()=>_(null),6e3);return()=>clearTimeout(e)},[g]),(0,l.useEffect)(()=>{let e=e=>{e.key===`Escape`&&h(null)};return p?(document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e)):document.body.style.overflow=``,()=>{document.body.style.overflow=``,window.removeEventListener(`keydown`,e)}},[p]);let D=f?`8 Vice 是一家专注于印尼与中国的双边战略咨询及业务拓展机构，致力于协助企业把握市场准入、政企关系与跨境合作机遇。凭借二十余年的双边实战积淀，我们将企业的商业愿景转化为务实高效的本土落地执行。`:o?`8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–Tiongkok yang mendampingi perusahaan menavigasi masuk pasar, hubungan kelembagaan, dan kemitraan bilateral. Berbekal pengalaman lintas batas lebih dari dua dekade, kami menjembatani ambisi komersial dengan eksekusi nyata di lapangan.`:`8 Vice is an Indonesia–China strategic advisory and business development firm helping enterprises navigate market entry, institutional engagement, and bilateral partnerships. With over two decades of cross-border experience, we bridge commercial ambition with practical execution on the ground.`,O=!!(e&&typeof e==`object`),k=typeof e?.footer_description==`object`?e?.footer_description?.[i]||e?.footer_description?.en||D:e?.footer_description||D,A=(O?e.email||``:`hello@8vice.com`).trim().replace(/^mailto:/i,``).trim(),j=A?`mailto:${A}`:``,M=(O?e.address||``:`SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810`).trim(),N=(O?e.linkedin_url||``:`https://www.linkedin.com/company/8-vice/`).trim(),P=(O?e.instagram_url||``:`https://www.instagram.com/8viceofficial`).trim(),F=(Array.isArray(n)&&n.length>0?n:[{slug:`asean-china-strategic-partnership`,t_i18n:{en:`ASEAN–China Strategic Partnership & RCEP Tariff Utilization`,id:`Kemitraan Strategis ASEAN–Tiongkok & Pemanfaatan Tarif RCEP`,cn:`东盟与中国全面战略伙伴关系与 RCEP 关税优惠应用`}},{slug:`decoding-china-5-year-plan`,t_i18n:{en:`Decoding China's 15th 5-Year Plan for Southeast Asia`,id:`Membedah Rencana Pembangunan ke-15 Tiongkok untuk Asia Tenggara`,cn:`深度解读中国“十五五”规划对东南亚经贸走廊的启示`}},{slug:`cross-border-payments-qris`,t_i18n:{en:`Cross-Border Payments: Indonesia–China QRIS & LCS`,id:`Pembayaran Lintas Batas: Interoperabilitas QRIS & LCS`,cn:`跨境支付新潮流：印尼与中国 QRIS 互通与本币结算 (LCS)`}},{slug:`tier-2-tier-3-indonesia-consumer-markets-distribution`,t_i18n:{en:`Beyond Greater Jakarta: Cracking Tier-2 & Tier-3 Markets`,id:`Melampaui Jabodetabek: Menembus Pasar Tier-2 & Tier-3`,cn:`走出大雅加达：深度渗透印尼二三线核心消费市场`}},{slug:`uu-pdp-indonesia-enterprise-saas-cloud-compliance`,t_i18n:{en:`Mastering Indonesia's UU PDP for Enterprise & Cloud`,id:`Memahami UU PDP Indonesia untuk SaaS Korporat & Cloud`,cn:`掌握印尼《个人数据保护法》(UU PDP) 企业级合规路线图`}}]).slice(0,5).map(e=>{let t=typeof e.t_i18n==`object`&&e.t_i18n?e.t_i18n:null,n=t&&(t[i]||t.en)||(typeof e.t==`object`?e.t[i]||e.t.en:e.t)||e.slug;return{slug:e.slug,title:n}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`footer`,{className:`footer`,"data-screen-label":`Footer`,children:(0,d.jsxs)(`div`,{className:`container`,children:[(0,d.jsxs)(`div`,{className:`footer__grid`,children:[(0,d.jsxs)(`div`,{className:`footer__col footer__brand`,children:[(0,d.jsxs)(c,{href:`/`,className:`logo`,"aria-label":`8vice home`,children:[(0,d.jsx)(`span`,{className:`logo__word`,children:`8vice`}),(0,d.jsx)(`span`,{className:`logo__dot`})]}),(0,d.jsx)(`p`,{className:`footer__tag`,style:{fontSize:`13.8px`,lineHeight:1.68},children:k}),(0,d.jsxs)(c,{href:`/contact`,className:`footer__cta-pill`,children:[(0,d.jsx)(`span`,{children:f?`预约免费咨询`:o?`Konsultasi Gratis`:`Book a Consultation`}),(0,d.jsxs)(`svg`,{className:`ico ico-14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,d.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,d.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]}),(0,d.jsxs)(`div`,{className:`footer__col`,children:[(0,d.jsx)(`h3`,{children:f?`网站导航`:o?`Eksplorasi`:`Explore`}),(0,d.jsxs)(`div`,{className:`footer__nav-list`,children:[(0,d.jsx)(c,{href:`/about`,children:a(`nav.about`)||(f?`关于我们`:o?`Tentang Kami`:`About Us`)}),(0,d.jsx)(c,{href:`/services`,children:a(`nav.services`)||(f?`我们的服务`:o?`Layanan Kami`:`Our Services`)}),(0,d.jsx)(c,{href:`/insights`,children:a(`nav.insights_partnerships`)||(f?`商业洞察与合作`:o?`Wawasan & Kemitraan`:`Insights & Partnerships`)}),(0,d.jsx)(c,{href:`/contact`,children:a(`nav.contact`)||(f?`联系我们`:o?`Hubungi Kami`:`Contact Us`)})]})]}),(0,d.jsxs)(`div`,{className:`footer__col`,children:[(0,d.jsx)(`h3`,{children:f?`精选商业洞察`:o?`Artikel Pilihan`:`Featured Articles`}),(0,d.jsxs)(`div`,{className:`footer__nav-list`,children:[F.map(e=>(0,d.jsx)(c,{href:`/insights/${e.slug}`,style:{lineHeight:1.45,paddingBlock:`5px`},children:e.title},e.slug)),(0,d.jsxs)(c,{href:`/insights`,style:{marginTop:`6px`,color:`#FF7B7B`,fontWeight:600,display:`inline-flex`,alignItems:`center`,gap:`6px`},children:[(0,d.jsx)(`span`,{children:f?`浏览全部文章与洞察`:o?`Lihat Semua Artikel`:`Explore All Articles`}),(0,d.jsx)(`span`,{children:`→`})]})]})]}),(0,d.jsxs)(`div`,{className:`footer__col footer__contact`,children:[(0,d.jsx)(`h3`,{children:f?`联系方式与办公地址`:o?`Kontak & Kantor`:`Contact`}),(0,d.jsxs)(`div`,{className:`footer__contact-items`,children:[A&&(0,d.jsxs)(`div`,{className:`footer__contact-item`,children:[(0,d.jsx)(`span`,{className:`lbl`,children:f?`电子邮箱`:`Email`}),(0,d.jsxs)(`a`,{href:j,className:`val`,"aria-label":`Email ${A}`,children:[(0,d.jsxs)(`svg`,{className:`ico ico-14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,d.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,d.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),(0,d.jsx)(`span`,{children:A})]})]}),M&&(0,d.jsxs)(`div`,{className:`footer__contact-item`,children:[(0,d.jsx)(`span`,{className:`lbl`,children:f?`雅加达总部`:o?`Kantor Jakarta`:`Office`}),(0,d.jsx)(`span`,{className:`val`,style:{fontSize:`13.5px`,color:`rgba(255,255,255,0.72)`},children:M})]}),(0,d.jsxs)(`div`,{className:`footer__contact-item`,children:[(0,d.jsx)(`span`,{className:`lbl`,children:f?`服务时间`:o?`Jam Layanan`:`Service Hours`}),(0,d.jsxs)(`span`,{className:`val footer__hours-val`,style:{fontSize:`13.5px`,color:`rgba(255,255,255,0.72)`,display:`inline-flex`,alignItems:`center`,gap:`8px`,whiteSpace:`nowrap`},children:[(0,d.jsxs)(`svg`,{className:`ico ico-14`,style:{flexShrink:0},viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,d.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]}),(0,d.jsx)(`span`,{children:f?`工作日 (09:00 - 17:00)`:o?`Hari Kerja (09.00 - 17.00)`:`Weekdays (9 am-5 pm)`})]})]})]}),(N||P)&&(0,d.jsxs)(`div`,{className:`footer__social`,children:[N&&(0,d.jsx)(`a`,{href:N,"aria-label":`LinkedIn`,target:`_blank`,rel:`noopener noreferrer`,children:(0,d.jsxs)(`svg`,{className:`ico ico-20`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z`}),(0,d.jsx)(`rect`,{x:`2`,y:`9`,width:`4`,height:`12`}),(0,d.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})}),P&&(0,d.jsx)(`a`,{href:P,"aria-label":`Instagram`,target:`_blank`,rel:`noopener noreferrer`,children:(0,d.jsxs)(`svg`,{className:`ico ico-20`,viewBox:`0 0 24 24`,children:[(0,d.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`}),(0,d.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`}),(0,d.jsx)(`line`,{x1:`17.5`,y1:`6.5`,x2:`17.51`,y2:`6.5`})]})})]})]})]}),(0,d.jsxs)(`div`,{className:`footer__newsletter-section`,children:[(0,d.jsxs)(`div`,{className:`footer__newsletter-info`,children:[(0,d.jsxs)(`div`,{className:`footer__newsletter-eyebrow`,children:[(0,d.jsx)(`span`,{className:`footer__newsletter-dot`}),(0,d.jsx)(`span`,{children:f?`订阅商业洞察简报`:o?`Berlangganan Newsletter`:`Subscribe Newsletter`})]}),(0,d.jsx)(`h4`,{children:f?`定期获取印尼–中国商业战略与市场研究精华`:o?`Dapatkan Ringkasan Riset & Wawasan Lintas Negara Terbaru`:`Receive Curated Market Briefings & Cross-Border Intelligence`}),(0,d.jsx)(`p`,{children:f?`涵盖监管动向、重点产业报告与双边商业合作动态，直达您的邮箱。`:o?`Wawasan regulasi, analisis industri prioritas, dan peluang ekspansi Indonesia–Tiongkok langsung ke inbox Anda.`:`Regulatory updates, priority sector briefings, and Indonesia–China partnership perspectives delivered to your inbox.`})]}),(0,d.jsxs)(`div`,{className:`footer__newsletter-form-wrap`,children:[(0,d.jsxs)(`form`,{onSubmit:E,className:`footer__newsletter-form`,toolname:`subscribe_newsletter`,tooldescription:`Subscribe to the 8vice cross-border business intelligence and regulatory updates newsletter.`,children:[(0,d.jsx)(`label`,{htmlFor:`footer-newsletter-email`,style:{position:`absolute`,width:`1px`,height:`1px`,overflow:`hidden`,clip:`rect(0 0 0 0)`,whiteSpace:`nowrap`},children:f?`邮箱地址`:o?`Alamat Email Newsletter`:`Newsletter Email Address`}),(0,d.jsx)(`input`,{type:`text`,name:`website_url`,value:v.website_url,onChange:e=>y(`website_url`,e.target.value),tabIndex:-1,autoComplete:`off`,"aria-hidden":`true`,style:{position:`absolute`,left:`-9999px`,width:`1px`,height:`1px`,opacity:0}}),(0,d.jsx)(`input`,{id:`footer-newsletter-email`,name:`email`,type:`email`,required:!0,value:v.email,onChange:e=>y(`email`,e.target.value),placeholder:f?`输入您的企业邮箱地址...`:o?`Masukkan alamat email Anda...`:`Enter your email address...`,"aria-label":f?`邮箱地址`:o?`Alamat Email Newsletter`:`Newsletter Email Address`,toolparamdescription:`Subscriber work email address`,disabled:x,className:`footer__newsletter-input`}),(0,d.jsx)(`button`,{type:`submit`,disabled:x,className:`footer__newsletter-btn`,children:x?f?`提交中...`:o?`Mengirim...`:`Sending...`:f?`立即订阅`:`Subscribe`})]}),S.email&&(0,d.jsx)(`div`,{style:{marginTop:`8px`,fontSize:`12px`,color:`#FF7B7B`},children:S.email}),g&&(0,d.jsxs)(`div`,{role:`status`,style:{marginTop:`10px`,padding:`9px 12px`,borderRadius:`10px`,fontSize:`12.5px`,lineHeight:1.4,background:g.type===`success`?`rgba(16, 185, 129, 0.14)`:`rgba(230, 57, 70, 0.16)`,border:`1px solid ${g.type===`success`?`rgba(16, 185, 129, 0.42)`:`rgba(230, 57, 70, 0.45)`}`,color:g.type===`success`?`#6EE7B7`:`#FCA5A5`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,d.jsx)(`span`,{children:g.type===`success`?`✓`:`!`}),(0,d.jsx)(`span`,{children:g.text})]})]})]}),(0,d.jsxs)(`div`,{className:`footer__bottom`,children:[(0,d.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` 8vice. All rights reserved.`]}),(0,d.jsxs)(`div`,{className:`footer__bottom-badge`,children:[(0,d.jsx)(`span`,{className:`footer__bottom-pulse`}),(0,d.jsx)(`span`,{children:f?`为中资与全球企业深度解码印尼市场`:o?`Indonesia, Terdekode untuk Bisnis Global`:`Indonesia, Decoded for Chinese & Global Businesses`})]}),(0,d.jsxs)(`div`,{className:`footer__bottom-links`,children:[(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(`privacy`),style:{background:`transparent`,border:`none`,color:`inherit`,font:`inherit`,cursor:`pointer`,padding:0},children:f?`隐私与数据保护政策`:o?`Kebijakan Privasi`:`Privacy Policy`}),(0,d.jsx)(`span`,{style:{opacity:.3},children:`·`}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(`terms`),style:{background:`transparent`,border:`none`,color:`inherit`,font:`inherit`,cursor:`pointer`,padding:0},children:f?`咨询服务条款`:o?`Syarat & Ketentuan`:`Terms of Engagement`})]})]})]})}),p&&(0,d.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`legal-modal-title`,style:{position:`fixed`,inset:0,zIndex:99999,background:`rgba(5, 6, 8, 0.82)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`},onClick:e=>{e.target===e.currentTarget&&h(null)},children:(0,d.jsxs)(`div`,{style:{position:`relative`,width:`100%`,maxWidth:`680px`,maxHeight:`88vh`,background:`#0D0E13`,border:`1px solid rgba(255, 255, 255, 0.14)`,borderRadius:`24px`,boxShadow:`0 30px 80px rgba(0, 0, 0, 0.75), 0 0 40px rgba(230, 57, 70, 0.16)`,overflow:`hidden`,display:`flex`,flexDirection:`column`,color:`#FFFFFF`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`22px 28px`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,background:`rgba(255, 255, 255, 0.02)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,d.jsx)(`div`,{style:{width:`32px`,height:`32px`,borderRadius:`10px`,background:`rgba(230, 57, 70, 0.12)`,color:`#E63946`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,d.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,d.jsx)(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`})})}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{id:`legal-modal-title`,style:{fontSize:`17px`,fontWeight:700,margin:0,color:`#FFFFFF`},children:p===`privacy`?f?`隐私与个人数据保护政策`:o?`Kebijakan Privasi & Perlindungan Data`:`Privacy & Data Protection Policy`:f?`战略咨询与客户合作条款`:o?`Syarat & Ketentuan Penugasan`:`Terms of Advisory & Client Engagement`}),(0,d.jsx)(`span`,{style:{fontSize:`11.5px`,color:`rgba(255, 255, 255, 0.5)`},children:`PT Delapan Solusi Penasihat (8vice) · Jakarta, Indonesia`})]})]}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(null),"aria-label":`Close dialog`,style:{width:`36px`,height:`36px`,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.06)`,border:`1px solid rgba(255, 255, 255, 0.1)`,color:`rgba(255, 255, 255, 0.8)`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,transition:`all 0.2s ease`},children:`✕`})]}),(0,d.jsx)(`div`,{style:{padding:`28px`,overflowY:`auto`,fontSize:`14.5px`,lineHeight:1.75,color:`rgba(255, 255, 255, 0.78)`,display:`flex`,flexDirection:`column`,gap:`20px`},children:p===`privacy`?f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. 保密承诺与印尼《个人数据保护法》合规`}),(0,d.jsx)(`br`,{}),`8vice 严格遵守印度尼西亚共和国《个人数据保护法》（UU PDP No. 27/2022）及国际合规治理标准，全力保障企业客户商业机密、研究文档及个人联络信息的安全与完整。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. 信息收集与使用目的`}),(0,d.jsx)(`br`,{}),`通过本网站提交的所有市场需求、商务资料及联系方式，仅用于战略咨询评估、印中双边商务配对对接，或履行付费研究报告的授权交付。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. 第三方数据保护与保密协议（NDA）`}),(0,d.jsx)(`br`,{}),`未经客户书面授权或签署保密协议（NDA），8vice 绝不向任何第三方出售、出租或转让客户商业信息。`]})]}):o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. Komitmen Kerahasiaan & PDP Indonesia`}),(0,d.jsx)(`br`,{}),`8vice berkomitmen menjaga integritas data klien korporasi, dokumen riset, dan informasi perorangan sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) Republik Indonesia dan standar tata kelola kepatuhan internasional.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. Penggunaan Informasi Penugasan`}),(0,d.jsx)(`br`,{}),`Setiap informasi pasar, data komersial, materi kontak, dan korespondensi yang disampaikan melalui situs ini semata-mata digunakan untuk evaluasi inisiasi kemitraan, konsultasi strategis, atau pemenuhan pengiriman dokumen riset berbayar.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. Batasan Berbagi Data Pihak Ketiga`}),(0,d.jsx)(`br`,{}),`Kami tidak pernah menjual, menyewakan, atau memindahtangankan data identitas klien kepada pihak ketiga mana pun tanpa persetujuan tertulis (*Non-Disclosure Agreement*).`]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. Data Protection & Indonesia PDP Law Compliance`}),(0,d.jsx)(`br`,{}),`8vice is committed to safeguarding corporate client data, proprietary market insights, and institutional correspondence in strict compliance with Indonesia's Personal Data Protection Law (Law No. 27/2022) and international security best practices.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. Purpose of Information Processing`}),(0,d.jsx)(`br`,{}),`Information submitted through our digital channels is utilized exclusively for strategic advisory evaluation, bilateral business matching facilitation, or fulfillment of licensed research paper access.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. Non-Disclosure & Third-Party Protections`}),(0,d.jsx)(`br`,{}),`Under no circumstances does 8vice sell, rent, or distribute client intelligence to third parties without prior mutual Non-Disclosure Agreement (NDA) covenants.`]})]}):f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. 战略咨询服务范围`}),(0,d.jsx)(`br`,{}),`8vice 发布的市场研究报告、行业简报及战略路线图均基于独立专业的调研方法论编制，旨在为跨境扩张与投资决策提供高价值战略参考。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. 知识产权与研究报告许可`}),(0,d.jsx)(`br`,{}),`所有研究出版物、量化数据模型及印中产业蓝图文档均受 8vice 知识产权保护。高管版与企业版许可严格按照约定的授权席位范围使用。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. 政企沟通与合规透明度`}),(0,d.jsx)(`br`,{}),`所有政府关系对接与公私部门对话均通过合法、透明的官方渠道开展，严格遵守反腐败准则及双边投资法规。`]})]}):o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. Ruang Lingkup Penugasan Konsultasi`}),(0,d.jsx)(`br`,{}),`Kajian, artikel riset, dan analisis komersial yang dipublikasikan oleh 8vice disiapkan berdasarkan metodologi riset independen. Informasi ini bersifat strategis dan ditujukan sebagai panduan awal ekspansi pasar.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. Hak Cipta & Lisensi Research Paper`}),(0,d.jsx)(`br`,{}),`Seluruh publikasi riset, data model (.xlsx), dan dokumen kajian China-Indonesia Blueprint dilindungi hak cipta intelektual 8vice. Lisensi Eksekutif dan Korporat diberikan sesuai ketentuan hak pakai yang disepakati.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. Integritas Hubungan Pemerintah & Regulasi`}),(0,d.jsx)(`br`,{}),`Seluruh fasilitasi kelembagaan publik-swasta dijalankan melalui jalur resmi, transparan, dan mematuhi etika anti-penyuapan serta peraturan penanaman modal bilateral.`]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`1. Advisory Scope of Engagement`}),(0,d.jsx)(`br`,{}),`Market analyses, intelligence briefs, and strategic roadmaps prepared by 8vice represent independent professional evaluations aimed at facilitating cross-border expansion and investment decisions.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`2. Intellectual Property & Research Licensing`}),(0,d.jsx)(`br`,{}),`All research publications, quantitative datasets, and bilateral industrial blueprints remain the intellectual property of 8vice. Executive and Corporate licenses are granted strictly per user seat covenants.`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`3. Regulatory & Institutional Transparency`}),(0,d.jsx)(`br`,{}),`All government liaison and public-private dialogue engagements are conducted through sanctioned, compliant channels adhering to anti-corruption standards and statutory investment codes.`]})]})}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`16px 28px`,borderTop:`1px solid rgba(255, 255, 255, 0.08)`,background:`rgba(255, 255, 255, 0.02)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(`privacy`),style:{padding:`6px 12px`,borderRadius:`8px`,border:`none`,background:p===`privacy`?`rgba(230, 57, 70, 0.2)`:`transparent`,color:p===`privacy`?`#FF7B7B`:`rgba(255, 255, 255, 0.6)`,fontSize:`12px`,fontWeight:600,cursor:`pointer`},children:f?`隐私政策`:o?`Privasi`:`Privacy`}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(`terms`),style:{padding:`6px 12px`,borderRadius:`8px`,border:`none`,background:p===`terms`?`rgba(230, 57, 70, 0.2)`:`transparent`,color:p===`terms`?`#FF7B7B`:`rgba(255, 255, 255, 0.6)`,fontSize:`12px`,fontWeight:600,cursor:`pointer`},children:f?`服务条款`:o?`Ketentuan`:`Terms`})]}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>h(null),style:{padding:`9px 20px`,borderRadius:`999px`,background:`linear-gradient(135deg, #E63946 0%, #B81D2A 100%)`,border:`none`,color:`#FFFFFF`,fontSize:`13px`,fontWeight:600,cursor:`pointer`},children:f?`我知道了`:o?`Tutup`:`Understood`})]})]})}),(0,d.jsx)(l.Suspense,{fallback:null,children:(0,d.jsx)(m,{})}),g&&typeof document<`u`&&(0,u.createPortal)((0,d.jsxs)(`div`,{role:`alert`,style:{position:`fixed`,top:`24px`,right:`24px`,zIndex:999999,maxWidth:`380px`,padding:`14px 18px`,borderRadius:`14px`,background:g.type===`success`?`rgba(10, 26, 20, 0.96)`:`rgba(28, 12, 14, 0.96)`,border:`1px solid ${g.type===`success`?`rgba(16, 185, 129, 0.5)`:`rgba(230, 57, 70, 0.5)`}`,boxShadow:`0 20px 50px rgba(0, 0, 0, 0.65)`,backdropFilter:`blur(14px)`,WebkitBackdropFilter:`blur(14px)`,color:`#FFFFFF`,display:`flex`,alignItems:`flex-start`,gap:`12px`},children:[(0,d.jsx)(`span`,{style:{width:`24px`,height:`24px`,borderRadius:`50%`,background:g.type===`success`?`rgba(16, 185, 129, 0.2)`:`rgba(230, 57, 70, 0.2)`,color:g.type===`success`?`#34D399`:`#F87171`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,fontWeight:700,fontSize:`13px`,flexShrink:0,marginTop:`1px`},children:g.type===`success`?`✓`:`!`}),(0,d.jsx)(`div`,{style:{flex:1,fontSize:`13.5px`,lineHeight:1.45,color:`rgba(255, 255, 255, 0.92)`},children:g.text}),(0,d.jsx)(`button`,{type:`button`,onClick:()=>_(null),"aria-label":`Close alert`,style:{background:`transparent`,border:`none`,color:`rgba(255, 255, 255, 0.55)`,cursor:`pointer`,fontSize:`14px`,padding:`0 2px`,lineHeight:1},children:`✕`})]}),document.body)]})}function g({children:e}){let{url:t}=r();return(0,l.useEffect)(()=>{document.querySelectorAll(`img`).forEach(e=>{e.closest(`.page-hero, .hero, .hero-slider, .geo-hero, header`)?(e.setAttribute(`loading`,`eager`),e.getAttribute(`fetchpriority`)||e.setAttribute(`fetchpriority`,`high`)):(e.getAttribute(`loading`)||e.setAttribute(`loading`,`lazy`),e.getAttribute(`decoding`)||e.setAttribute(`decoding`,`async`)),e.complete&&e.naturalWidth>0?e.classList.add(`is-loaded`):e.addEventListener(`load`,()=>e.classList.add(`is-loaded`),{once:!0})})},[t]),(0,l.useEffect)(()=>{let e=e=>{let t=e.target.closest(`.btn, .article-pill, .tab, .case-card, .article-card, .nav__link`);t&&t.classList.add(`m3-active-state`)},t=()=>{document.querySelectorAll(`.m3-active-state`).forEach(e=>{e.classList.remove(`m3-active-state`)})};return document.addEventListener(`mousedown`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`mouseup`,t)}},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsx)(`main`,{className:`m3-page-transition`,children:e},t),(0,d.jsx)(h,{})]})}export{g as t};