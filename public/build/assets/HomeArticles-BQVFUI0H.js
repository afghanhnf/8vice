import{d as e,l as t,n,t as r}from"./app-C6bGQ0Rc.js";import{t as i}from"./LocalizedLink-Bf8tj_lj.js";var a=e(t(),1),o=n();function s({isId:e=!1,fullSection:t=!1}){let[n,i]=(0,a.useState)(!1),{lang:s}=r(),c=s===`cn`;(0,a.useEffect)(()=>{let e=e=>{e.key===`Escape`&&i(!1)};return n?(window.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`):document.body.style.overflow=``,()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[n]);let l=c?{eyebrow:`我们的品牌宣言 · 02:48`,quote_1:`市场情报`,quote_2:`绝不仅仅是一项附加功能，`,quote_3:`它正是我们交付的核心产品。`,sub:`一部 3 分钟短片，讲述我们的运作理念以及如何打通印尼与中国之间的真实商业生态。`,play:`观看品牌宣言视频`}:e?{eyebrow:`MANIFESTO KAMI · 02:48`,quote_1:`Intelijen pasar`,quote_2:` bukanlah sebuah fitur.`,quote_3:`Itu adalah seluruh produk kami.`,sub:`Film 3 menit mengenai alasan mengapa kami beroperasi dan bagaimana kami menghubungkan realitas komersial antara Indonesia dan China.`,play:`Putar Video Manifesto`}:{eyebrow:`OUR MANIFESTO · 02:48`,quote_1:`Market intelligence`,quote_2:` is not a feature.`,quote_3:`It is our entire product.`,sub:`A 3-minute film on why we operate this way and how we connect commercial reality across Indonesia and China.`,play:`Watch Video Manifesto`};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
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
      `}}),t?(0,o.jsxs)(`section`,{className:`section manifesto-full-section`,onClick:()=>i(!0),role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&i(!0)},"aria-label":l.play,style:{position:`relative`,overflow:`hidden`,backgroundColor:`#07080A`,color:`#FFFFFF`,paddingBlock:`110px`,borderTop:`1px solid rgba(255, 255, 255, 0.08)`,borderBottom:`1px solid rgba(255, 255, 255, 0.08)`,cursor:`pointer`},children:[(0,o.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/images/video_manifesto_cover.webp`,alt:`8 Vice Video Manifesto`,className:`manifesto-bg-img`}),(0,o.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg, rgba(7, 8, 10, 0.88) 0%, rgba(7, 8, 10, 0.65) 50%, rgba(214, 40, 40, 0.38) 100%)`,pointerEvents:`none`}}),(0,o.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`radial-gradient(ellipse 85% 70% at 50% 50%, transparent 35%, rgba(7, 8, 10, 0.75) 100%)`,pointerEvents:`none`}}),(0,o.jsx)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,justifyContent:`space-between`,minHeight:`340px`,gap:`48px`},children:[(0,o.jsx)(`div`,{children:(0,o.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.18)`,border:`1px solid rgba(230, 57, 70, 0.35)`,padding:`6px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,backdropFilter:`blur(8px)`},children:[(0,o.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`,boxShadow:`0 0 8px #E63946`}}),l.eyebrow]})}),(0,o.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`32px`},children:[(0,o.jsxs)(`div`,{style:{maxWidth:`880px`,flex:`1 1 500px`},children:[(0,o.jsxs)(`h3`,{style:{fontFamily:`"Plus Jakarta Sans", system-ui, sans-serif`,fontSize:`clamp(24px, 3vw, 40px)`,lineHeight:1.25,color:`#FFFFFF`,fontWeight:300,margin:`0 0 16px 0`,textShadow:`0 4px 24px rgba(0, 0, 0, 0.75)`},children:[(0,o.jsxs)(`span`,{style:{display:`block`},children:[(0,o.jsx)(`span`,{style:{color:`#E63946`,fontWeight:700,fontStyle:`italic`,textShadow:`0 0 30px rgba(230, 57, 70, 0.5)`},children:l.quote_1}),l.quote_2]}),(0,o.jsx)(`span`,{style:{display:`block`,fontWeight:700,marginTop:`4px`},children:l.quote_3})]}),(0,o.jsx)(`p`,{style:{fontSize:`16px`,color:`rgba(255, 255, 255, 0.8)`,lineHeight:1.65,margin:0,maxWidth:`620px`},children:l.sub})]}),(0,o.jsx)(`div`,{className:`manifesto-play-pulse`,"aria-hidden":`true`,style:{width:`84px`,height:`84px`},children:(0,o.jsx)(`svg`,{width:`30`,height:`30`,viewBox:`0 0 24 24`,fill:`currentColor`,style:{marginLeft:`4px`},children:(0,o.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})})})]})]})})]}):(0,o.jsx)(`section`,{id:`manifesto`,className:`section`,style:{background:`radial-gradient(ellipse 70% 50% at 50% 50%, rgba(214, 40, 40, 0.12) 0%, transparent 70%), #0A0B0E`,color:`#FFFFFF`,paddingBlock:`100px`,borderBottom:`1px solid rgba(255, 255, 255, 0.06)`,position:`relative`},children:(0,o.jsx)(`div`,{className:`container`,children:(0,o.jsxs)(`div`,{className:`manifesto-card`,onClick:()=>i(!0),role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&i(!0)},"aria-label":l.play,style:{minHeight:`440px`,padding:`clamp(32px, 5vw, 64px)`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`},children:[(0,o.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/images/video_manifesto_cover.webp`,alt:`8 Vice Video Manifesto`,className:`manifesto-bg-img`}),(0,o.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg, rgba(10, 12, 16, 0.85) 0%, rgba(10, 12, 16, 0.6) 50%, rgba(214, 40, 40, 0.35) 100%)`,pointerEvents:`none`}}),(0,o.jsx)(`div`,{style:{position:`relative`,zIndex:2},children:(0,o.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.18)`,border:`1px solid rgba(230, 57, 70, 0.35)`,padding:`6px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,backdropFilter:`blur(8px)`},children:[(0,o.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`,boxShadow:`0 0 8px #E63946`}}),l.eyebrow]})}),(0,o.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`32px`},children:[(0,o.jsxs)(`div`,{style:{maxWidth:`880px`,flex:`1 1 500px`},children:[(0,o.jsxs)(`h3`,{style:{fontFamily:`"Plus Jakarta Sans", system-ui, sans-serif`,fontSize:`clamp(22px, 2.8vw, 38px)`,lineHeight:1.25,color:`#FFFFFF`,fontWeight:300,margin:`0 0 16px 0`,textShadow:`0 4px 20px rgba(0, 0, 0, 0.7)`},children:[(0,o.jsxs)(`span`,{style:{display:`block`},children:[(0,o.jsx)(`span`,{style:{color:`#E63946`,fontWeight:600,fontStyle:`italic`,textShadow:`0 0 25px rgba(230, 57, 70, 0.4)`},children:l.quote_1}),l.quote_2]}),(0,o.jsx)(`span`,{style:{display:`block`,fontWeight:600,marginTop:`4px`},children:l.quote_3})]}),(0,o.jsx)(`p`,{style:{fontSize:`15px`,color:`rgba(255, 255, 255, 0.75)`,lineHeight:1.6,margin:0,maxWidth:`580px`},children:l.sub})]}),(0,o.jsx)(`div`,{className:`manifesto-play-pulse`,"aria-hidden":`true`,children:(0,o.jsx)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 24 24`,fill:`currentColor`,style:{marginLeft:`3px`},children:(0,o.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})})})]})]})})}),n&&(0,o.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:9999,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`rgba(0, 0, 0, 0.92)`,backdropFilter:`blur(12px)`,animation:`fadeInModal 0.25s ease`},onClick:()=>i(!1),children:[(0,o.jsx)(`button`,{onClick:()=>i(!1),"aria-label":`Close video`,style:{position:`absolute`,top:`28px`,right:`28px`,background:`rgba(255, 255, 255, 0.1)`,border:`1px solid rgba(255, 255, 255, 0.2)`,color:`#FFFFFF`,borderRadius:`50%`,width:`44px`,height:`44px`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,zIndex:1e4,transition:`background 0.2s ease`},children:(0,o.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,o.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,o.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,o.jsx)(`div`,{style:{width:`92%`,maxWidth:`1040px`,aspectRatio:`16 / 9`,backgroundColor:`#000000`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`0 30px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 57, 70, 0.3)`},onClick:e=>e.stopPropagation(),children:(0,o.jsx)(`iframe`,{width:`100%`,height:`100%`,src:`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`,title:`8 Vice Strategic Video Manifesto`,frameBorder:`0`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0})})]})]})}function c({isId:e=!1,insights:t=[]}){let{lang:n}=r(),a=n===`cn`,s=t&&t.length>0?t.slice(0,3):[{cat:a?`监管与科技合规`:e?`Regulasi & Kepatuhan`:`Regulatory & Technology`,rt:a?`8 分钟阅读`:`8 min read`,date:a?`2026年8月`:`August 2026`,t:a?`印尼跨境数据合规指南：深度解读《个人数据保护法》(UU PDP)`:e?`Panduan Kepatuhan UU Perlindungan Data Pribadi (UU PDP) untuk Penyedia SaaS Lintas Negara`:`Cross-Border Data Compliance in Indonesia: Deciphering the Personal Data Protection Law (UU PDP)`,excerpt:a?`针对印尼第 27/2022 号法令 (UU PDP) 的实用合规指南：本地数据存储要求、强制性数据保护官 (DPO) 任命及双边数据传输协议。`:e?`Panduan praktis kepatuhan UU PDP: kewajiban lokalisasi data, penunjukan Data Protection Officer (DPO), dan protokol transfer data bilateral.`:`A pragmatic compliance guide to Law No. 27/2022 (UU PDP): local data residency mandates, mandatory DPO appointments, and bilateral data transfer protocols.`,cover:`/images/project_analysis.webp`,slug:`indonesia-pdp-data-protection-compliance-guide`},{cat:a?`供应链与制造业`:e?`Rantai Pasok & Manufaktur`:`Operations & Supply Chain`,rt:a?`11 分钟阅读`:`11 min read`,date:a?`2026年7月`:`July 2026`,t:a?`爪哇岛与外岛工业园区选址对比：劳动力生产力与港口物流评估`:e?`Pemilihan Kawasan Industri di Jawa vs Luar Jawa: Produktivitas Tenaga Kerja & Akses Pelabuhan`:`Industrial Estate Site Selection in Java vs. Outer Islands: Labor Productivity and Port Access`,excerpt:a?`全面对比中爪哇（肯德尔、巴塘）、西爪哇（苏邦）及苏拉威西工业园区，为制造业产能转移与物流效率提供决策基准。`:e?`Analisis komparatif kawasan industri Kendal, Batang, dan Subang Smartpolitan untuk relokasi fasilitas manufaktur dan efisiensi logistik.`:`A comparative benchmark of Central Java (Kendal, Batang), West Java (Subang), and Sulawesi for manufacturing relocations and logistics efficiency.`,cover:`/images/video_manifesto_cover.webp`,slug:`indonesia-industrial-park-site-selection-java-kendal-batang`},{cat:a?`金融与科技`:e?`Keuangan & FinTech`:`Finance & Tech`,rt:a?`7 分钟阅读`:`7 min read`,date:a?`2026年5月`:`May 2026`,t:a?`跨境支付新纪元：印尼与中国 QRIS 互联互通及本币结算 (LCS) 未来展望`:e?`Pembayaran Lintas Batas: Masa Depan Interoperabilitas QRIS Indonesia–China & LCS`:`Cross-Border Payments: The Future of Indonesia-China QRIS Interoperability & Local Currency Settlement`,excerpt:a?`印尼央行与中国人民银行双边二维码互联互通及本币结算 (LCS) 框架如何消除跨境贸易、电商与旅游的外汇摩擦。`:e?`Bagaimana kerangka kerja sama Bank Indonesia dan PBOC mengeliminasi friksi valuta asing untuk pariwisata, e-commerce, dan penyelesaian perdagangan.`:`How Bank Indonesia and PBOC's bilateral QR code interoperability and Local Currency Settlement (LCS) framework eliminate FX friction for cross-border trade.`,cover:`/images/challenges_insights.webp`,slug:`cross-border-payments-qris`}],c=a?{eyebrow:`市场情报与深度洞察`,title:`双边商业走廊最新战略洞察`,subtitle:`深度行业研究报告、监管合规简报与商业情报，为您的跨境投资与扩张路线图保驾护航。`,cta_all:`查看全部洞察与报告`,read_more:`阅读深度分析`}:e?{eyebrow:`INTELIJEN PASAR & WAWASAN`,title:`Wawasan Strategis Terkini dari Koridor Bilateral`,subtitle:`Laporan analisis mendalam, panduan kepatuhan regulasi, dan intelijen pasar untuk memandu keputusan ekspansi Anda.`,cta_all:`Lihat Seluruh Artikel & Laporan`,read_more:`Baca Analisis`}:{eyebrow:`MARKET INTELLIGENCE & INSIGHTS`,title:`Latest Strategic Analysis from the Bilateral Corridor`,subtitle:`In-depth research reports, regulatory briefings, and commercial intelligence de-risking your cross-border roadmap.`,cta_all:`View All Insights & Reports`,read_more:`Read Analysis`};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .home-article-card {
          background: #0E1015;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .home-article-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230, 57, 70, 0.4);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(230, 57, 70, 0.15);
        }
        .home-article-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.5;
          overflow: hidden;
          background: #14161C;
        }
        .home-article-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .home-article-card:hover .home-article-thumb-img {
          transform: scale(1.05);
        }
        .home-article-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(10, 12, 16, 0.78);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #FF8A8A;
        }
      `}}),(0,o.jsx)(`section`,{className:`section`,id:`articles`,style:{background:`#090A0D`,color:`#FFFFFF`,paddingBlock:`108px`,borderBottom:`1px solid rgba(255, 255, 255, 0.06)`,position:`relative`},children:(0,o.jsxs)(`div`,{className:`container`,children:[(0,o.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,flexWrap:`wrap`,gap:`24px`,marginBottom:`56px`},children:[(0,o.jsxs)(`div`,{className:`m3-header`,style:{maxWidth:`680px`},children:[(0,o.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,background:`rgba(230, 57, 70, 0.12)`,border:`1px solid rgba(230, 57, 70, 0.3)`,padding:`5px 14px`,borderRadius:`999px`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.1em`,color:`#FF7B7B`,marginBottom:`14px`},children:[(0,o.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#E63946`}}),c.eyebrow]}),(0,o.jsx)(`h2`,{style:{fontSize:`clamp(28px, 3.4vw, 42px)`,fontWeight:700,letterSpacing:`-0.02em`,lineHeight:1.2,marginBottom:`14px`},children:c.title}),(0,o.jsx)(`p`,{style:{fontSize:`16px`,lineHeight:1.65,color:`rgba(255, 255, 255, 0.65)`,margin:0},children:c.subtitle})]}),(0,o.jsx)(`div`,{children:(0,o.jsxs)(i,{href:`/insights`,className:`btn`,style:{background:`rgba(255, 255, 255, 0.06)`,border:`1px solid rgba(255, 255, 255, 0.16)`,color:`#FFFFFF`,borderRadius:`999px`,padding:`12px 24px`,fontSize:`13.5px`,fontWeight:600,display:`inline-flex`,alignItems:`center`,gap:`8px`,transition:`all 0.25s ease`},children:[(0,o.jsx)(`span`,{children:c.cta_all}),(0,o.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,o.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,o.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})})]}),(0,o.jsx)(`div`,{className:`m3-stagger`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:`28px`},children:s.map((t,n)=>(0,o.jsxs)(i,{href:t.slug?`/insights/${t.slug}`:`/insights`,className:`home-article-card`,children:[(0,o.jsxs)(`div`,{className:`home-article-thumb-wrap`,children:[(0,o.jsx)(`img`,{src:t.cover||`/images/project_analysis.webp`,alt:t.t,width:`420`,height:`240`,loading:`lazy`,decoding:`async`,className:`home-article-thumb-img`}),(0,o.jsx)(`div`,{className:`home-article-cat-badge`,children:t.cat||(a?`深度洞察`:e?`Wawasan`:`Insights`)})]}),(0,o.jsxs)(`div`,{style:{padding:`28px`,display:`flex`,flexDirection:`column`,flexGrow:1,justifyContent:`space-between`},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,fontSize:`12px`,color:`rgba(255, 255, 255, 0.45)`,marginBottom:`12px`},children:[(0,o.jsx)(`span`,{children:t.date||(a?`最新`:e?`Terkini`:`Recent`)}),(0,o.jsx)(`span`,{children:`•`}),(0,o.jsx)(`span`,{children:t.rt||(a?`8 分钟阅读`:`8 min read`)})]}),(0,o.jsx)(`h3`,{style:{fontSize:`19px`,fontWeight:600,color:`#FFFFFF`,lineHeight:1.4,marginBottom:`12px`},children:t.t}),(0,o.jsx)(`p`,{style:{fontSize:`13.5px`,color:`rgba(255, 255, 255, 0.62)`,lineHeight:1.6,margin:`0 0 20px 0`},children:t.excerpt})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`13px`,fontWeight:600,color:`#E63946`,paddingTop:`16px`,borderTop:`1px solid rgba(255, 255, 255, 0.06)`},children:[(0,o.jsx)(`span`,{children:c.read_more}),(0,o.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,o.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,o.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]},n))})]})})]})}export{s as n,c as t};