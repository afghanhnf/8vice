import{a as e,c as t,d as n,l as r,n as i,s as a,t as o}from"./app-B06EtrgN.js";import{t as s}from"./SeoHead-BIan2irg.js";import{t as c}from"./LocalizedLink-CG-noAa5.js";import{i as l,t as u}from"./MainLayout-SPETGz1O.js";var d=n(r(),1),f=n(t(),1),p=i();function m({variant:e=`default`}){return(0,p.jsxs)(`div`,{className:`cnt-city-bg cnt-city-bg--${e}`,"aria-hidden":`true`,children:[(0,p.jsx)(`div`,{className:`cnt-city-grid`}),(0,p.jsx)(`div`,{className:`cnt-red-glow cnt-red-glow--1`}),(0,p.jsx)(`div`,{className:`cnt-red-glow cnt-red-glow--2`}),(0,p.jsxs)(`svg`,{className:`cnt-city-svg`,viewBox:`0 0 1440 360`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,preserveAspectRatio:`xMidYMax slice`,children:[(0,p.jsxs)(`defs`,{children:[(0,p.jsxs)(`linearGradient`,{id:`cntSkylineFade-${e}`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,p.jsx)(`stop`,{offset:`0%`,stopColor:`#E63946`,stopOpacity:`0.32`}),(0,p.jsx)(`stop`,{offset:`55%`,stopColor:`#E63946`,stopOpacity:`0.08`}),(0,p.jsx)(`stop`,{offset:`100%`,stopColor:`#08090C`,stopOpacity:`0`})]}),(0,p.jsxs)(`linearGradient`,{id:`cntLineGrad-${e}`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,p.jsx)(`stop`,{offset:`0%`,stopColor:`#E63946`,stopOpacity:`0`}),(0,p.jsx)(`stop`,{offset:`30%`,stopColor:`#E63946`,stopOpacity:`0.55`}),(0,p.jsx)(`stop`,{offset:`70%`,stopColor:`#ff6b78`,stopOpacity:`0.55`}),(0,p.jsx)(`stop`,{offset:`100%`,stopColor:`#E63946`,stopOpacity:`0`})]})]}),(0,p.jsxs)(`g`,{stroke:`rgba(255,255,255,0.05)`,strokeWidth:`1`,fill:`url(#cntSkylineFade-${e})`,opacity:`0.55`,children:[(0,p.jsx)(`rect`,{x:`40`,y:`180`,width:`55`,height:`180`}),(0,p.jsx)(`rect`,{x:`110`,y:`130`,width:`70`,height:`230`}),(0,p.jsx)(`rect`,{x:`200`,y:`160`,width:`50`,height:`200`}),(0,p.jsx)(`rect`,{x:`275`,y:`95`,width:`80`,height:`265`}),(0,p.jsx)(`polygon`,{points:`315,45 275,95 355,95`}),(0,p.jsx)(`rect`,{x:`380`,y:`145`,width:`65`,height:`215`}),(0,p.jsx)(`rect`,{x:`470`,y:`110`,width:`90`,height:`250`}),(0,p.jsx)(`rect`,{x:`590`,y:`150`,width:`60`,height:`210`}),(0,p.jsx)(`rect`,{x:`680`,y:`80`,width:`85`,height:`280`}),(0,p.jsx)(`line`,{x1:`722`,y1:`25`,x2:`722`,y2:`80`,stroke:`#E63946`,strokeWidth:`1.5`,opacity:`0.6`}),(0,p.jsx)(`rect`,{x:`795`,y:`135`,width:`70`,height:`225`}),(0,p.jsx)(`rect`,{x:`890`,y:`105`,width:`95`,height:`255`}),(0,p.jsx)(`rect`,{x:`1010`,y:`155`,width:`60`,height:`205`}),(0,p.jsx)(`rect`,{x:`1100`,y:`90`,width:`80`,height:`270`}),(0,p.jsx)(`polygon`,{points:`1140,40 1100,90 1180,90`}),(0,p.jsx)(`rect`,{x:`1205`,y:`140`,width:`75`,height:`220`}),(0,p.jsx)(`rect`,{x:`1305`,y:`165`,width:`65`,height:`195`})]}),(0,p.jsx)(`path`,{d:`M 145 130 Q 430 10 722 80 T 1140 90`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1.5`,strokeDasharray:`6 6`,className:`cnt-arc-anim`}),(0,p.jsx)(`path`,{d:`M 315 95 Q 620 35 935 105 T 1335 165`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,strokeDasharray:`4 8`,className:`cnt-arc-anim cnt-arc-anim--slow`}),(0,p.jsx)(`line`,{x1:`0`,y1:`260`,x2:`1440`,y2:`260`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,opacity:`0.4`}),(0,p.jsx)(`line`,{x1:`0`,y1:`310`,x2:`1440`,y2:`310`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,opacity:`0.65`}),(0,p.jsx)(`circle`,{cx:`315`,cy:`45`,r:`3.5`,fill:`#E63946`,className:`cnt-beacon-pulse`}),(0,p.jsx)(`circle`,{cx:`722`,cy:`25`,r:`4`,fill:`#E63946`,className:`cnt-beacon-pulse cnt-beacon-pulse--delay`}),(0,p.jsx)(`circle`,{cx:`1140`,cy:`40`,r:`3.5`,fill:`#E63946`,className:`cnt-beacon-pulse`})]})]})}function h(){let{lang:t}=o(),n=t===`id`,r=t===`cn`,{siteSettings:i}=a().props,h=(i?.email||`hello@8vice.com`).replace(/^mailto:/i,``).trim(),g=`mailto:${h}`,_=i?.whatsapp_url||`https://wa.me/628118005110`,[v,y]=(0,d.useState)(!1),[b,x]=(0,d.useState)(!1),[S,C]=(0,d.useState)({}),[w,T]=(0,d.useState)(!1),[E,D]=(0,d.useState)(!1);(0,d.useEffect)(()=>{if(!w)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&T(!1)};return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[w]);let O=()=>{navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(`eightvice`),D(!0),setTimeout(()=>D(!1),2e3))};(0,d.useEffect)(()=>{let e=document.querySelectorAll(`.m3-reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.1,rootMargin:`0px 0px -40px 0px`});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[t,v]);let k=(e,t)=>{H(n=>({...n,[e]:t}))},A=r?[{value:`China to Indonesia`,tag:`CN → ID`,label:`中国至印度尼西亚`,sub:`进入与拓展印尼市场`},{value:`Indonesia to China`,tag:`ID → CN`,label:`印度尼西亚至中国`,sub:`中国市场准入与合作伙伴对接`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`双边战略合作`,sub:`联合倡议与产业生态协同`}]:n?[{value:`China to Indonesia`,tag:`CN → ID`,label:`Tiongkok ke Indonesia`,sub:`Ekspansi & Masuk Pasar Indonesia`},{value:`Indonesia to China`,tag:`ID → CN`,label:`Indonesia ke Tiongkok`,sub:`Akses Pasar & Mitra di Tiongkok`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`Kemitraan Bilateral`,sub:`Inisiatif Bersama & Kolaborasi Ekosistem`}]:[{value:`China to Indonesia`,tag:`CN → ID`,label:`China to Indonesia`,sub:`Entering & Scaling in Indonesia`},{value:`Indonesia to China`,tag:`ID → CN`,label:`Indonesia to China`,sub:`Market Access & Partners in China`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`Bilateral Partnership`,sub:`Joint Initiative & Ecosystem Collaboration`}],j=r?[`基础设施与城市发展`,`科技与数字生态`,`文旅出行与酒店商业`,`创意经济与生活方式`,`国际贸易与消费品`,`其他行业领域`]:n?[`Infrastruktur & Pembangunan Perkotaan`,`Teknologi & Ekosistem Digital`,`Pariwisata, Perjalanan & Perhotelan`,`Ekonomi Kreatif & Gaya Hidup`,`Perdagangan & Barang Konsumen`,`Sektor Lainnya`]:[`Infrastructure & Urban Development`,`Technology & Digital Ecosystems`,`Tourism, Travel & Hospitality`,`Creative Economy & Lifestyle`,`Trade & Consumer Goods`,`Other Sector`],M=typeof window<`u`?new URLSearchParams(window.location.search):null,N=M?M.get(`service`):null,P=M?M.get(`paper`):null,F=M?M.get(`tier`):null,I=N===`research-paper`,L=r?`中国跨境研究报告授权许可`:n?`Lisensi Akses Research Paper China`:`China Research Paper Access License`,R=[...l(t).map(e=>e.title),L],z=I?L:l(t).find(e=>e.id===N)?.title,B=I?r?`申请研究报告发票及访问许可: "${P||`中国跨境出海蓝皮书 2026`}" (许可方案: ${F===`corp`?`企业版 - $499 USD`:`高管版 - $99 USD`})。请提供官方发票与付款详情。`:n?`Permohonan Faktur & Lisensi Dokumen Riset: "${P||`China Cross-Border Blueprint 2026`}" (Paket Lisensi: ${F===`corp`?`Korporat - Rp 7.490.000`:`Eksekutif - Rp 1.490.000`}). Mohon kirimkan instruksi pembayaran dan faktur pajak perusahaan.`:`Request for Invoice & Paper License Access: "${P||`China Cross-Border Blueprint 2026`}" (License Tier: ${F===`corp`?`Corporate - $499 USD`:`Executive - $99 USD`}). Please provide official invoice and payment details.`:``,[V,H]=(0,d.useState)({name:``,company:``,position:``,email:``,phone:``,country:``,direction:A[0].value,industry:j[0],service:z||R[0],description:B,website_url:``}),U=t=>{t.preventDefault(),x(!0),C({});let i=`${V.service} (${V.direction})`,a=[`[Position]: ${V.position||`-`}`,`[Country]: ${V.country||`-`}`,`[Business Direction]: ${V.direction}`,`[Industry]: ${V.industry}`,`[Service Required]: ${V.service}`,``,`[Project Brief]:`,V.description].join(`
`),o=r?`/cn/contact-submit`:n?`/id/contact-submit`:`/contact-submit`;e.post(o,{name:V.name,company:V.company,email:V.email,phone:V.phone,subject:i,message:a,website_url:V.website_url},{preserveScroll:!0,onSuccess:()=>{x(!1),y(!0),H({name:``,company:``,position:``,email:``,phone:``,country:``,direction:A[0].value,industry:j[0],service:R[0],description:``,website_url:``})},onError:e=>{x(!1),C(e||{})}})},W=r?[{num:`01`,title:`项目背景与目标评估`,desc:`我们的咨询团队评估您的项目简报、出海走廊及行业特定需求。`},{num:`02`,title:`高管保密沟通会`,desc:`进行初步高管保密探讨，评估项目可行性、利益相关方和合作路径。`},{num:`03`,title:`结构化行动方案`,desc:`制定定制化的市场准入、政企关系协同或商业伙伴对接方案。`}]:n?[{num:`01`,title:`Peninjauan Profil & Sasaran`,desc:`Tim penasihat kami meninjau konteks proyek, target pasar, dan kebutuhan spesifik Anda.`},{num:`02`,title:`Sesi Penyelarasan Awal`,desc:`Diskusi rahasia untuk memetakan kelayakan peluang, pemangku kepentingan, dan opsi kemitraan.`},{num:`03`,title:`Rekomendasi Langkah Strategis`,desc:`Penyusunan peta jalan masuk pasar atau fasilitasi pencocokan mitra yang terstruktur.`}]:[{num:`01`,title:`Objective & Context Review`,desc:`Our advisory desk evaluates your project brief, target corridor, and sector requirements.`},{num:`02`,title:`Confidential Alignment Call`,desc:`An initial executive discussion to map feasibility, stakeholders, and partnership pathways.`},{num:`03`,title:`Structured Action Plan`,desc:`Formulation of a tailored market entry, government relations, or B2B matching scope.`}];return(0,p.jsxs)(u,{children:[(0,p.jsx)(s,{pageCode:`contact`,title:r?`联系我们`:n?`Hubungi Kami`:`Contact Us`}),(0,p.jsxs)(`div`,{className:`cnt-page`,children:[(0,p.jsxs)(`section`,{className:`cnt-hero`,children:[(0,p.jsx)(m,{variant:`hero`}),(0,p.jsxs)(`div`,{className:`container cnt-hero__container`,children:[(0,p.jsxs)(`div`,{className:`cnt-hero__header m3-reveal`,children:[(0,p.jsxs)(`nav`,{className:`cnt-breadcrumb`,"aria-label":`Breadcrumb`,children:[(0,p.jsx)(c,{href:`/`,children:r?`首页`:n?`Beranda`:`Home`}),(0,p.jsx)(`span`,{className:`cnt-breadcrumb__sep`,children:`/`}),(0,p.jsx)(`span`,{className:`cnt-breadcrumb__current`,children:r?`联系我们`:n?`Hubungi Kami`:`Contact Us`})]}),(0,p.jsxs)(`div`,{className:`cnt-eyebrow-pill`,children:[(0,p.jsx)(`span`,{className:`cnt-eyebrow-dot`}),r?`开启战略对话 · 商业咨询`:n?`MULAI PERCAKAPAN · KONSULTASI STRATEGIS`:`START A CONVERSATION · STRATEGIC INQUIRY`]}),(0,p.jsx)(`h1`,{className:`cnt-hero__title`,children:r?(0,p.jsxs)(p.Fragment,{children:[`开启 `,(0,p.jsx)(`span`,{className:`cnt-text-red`,children:`战略对话。`})]}):n?(0,p.jsxs)(p.Fragment,{children:[`Mari Mulai `,(0,p.jsx)(`span`,{className:`cnt-text-red`,children:`Percakapan Strategis.`})]}):(0,p.jsxs)(p.Fragment,{children:[`Let's Start a `,(0,p.jsx)(`span`,{className:`cnt-text-red`,children:`Conversation.`})]})}),(0,p.jsx)(`p`,{className:`cnt-hero__subtitle`,children:r?`每一次成功的跨境合作，都始于对市场机遇的深刻洞察。`:n?`Setiap kemitraan yang sukses dimulai dari pemahaman yang tepat terhadap peluang.`:`Every successful partnership starts with understanding the opportunity.`}),(0,p.jsxs)(`div`,{className:`cnt-channel-pills`,children:[(0,p.jsxs)(`a`,{href:_,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-channel-pill cnt-channel-pill--wa`,children:[(0,p.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--green`}),(0,p.jsx)(`span`,{children:r?`WhatsApp 咨询`:n?`Konsultasi WhatsApp`:`WhatsApp Consultation`})]}),(0,p.jsxs)(`button`,{type:`button`,onClick:()=>T(!0),className:`cnt-channel-pill cnt-channel-pill--wc`,children:[(0,p.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--wechat`}),(0,p.jsx)(`span`,{children:r?`微信公众号 / 企业微信`:n?`WeChat Official QR Code`:`WeChat Official QR`})]}),(0,p.jsxs)(`a`,{href:g,className:`cnt-channel-pill`,children:[(0,p.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--red`}),(0,p.jsx)(`span`,{children:h})]})]})]}),(0,p.jsx)(`div`,{className:`cnt-hero__showcase m3-reveal m3-reveal--scale`,style:{transitionDelay:`120ms`},children:(0,p.jsxs)(`div`,{className:`cnt-hero__image-frame`,children:[(0,p.jsx)(`img`,{src:`/images/consultation_advisory_bw.webp`,alt:r?`8 Vice 战略咨询`:n?`Konsultasi Strategis 8 Vice`:`8 Vice Strategic Consultation`,className:`cnt-hero__image`,loading:`lazy`,decoding:`async`}),(0,p.jsx)(`div`,{className:`cnt-hero__image-overlay`}),(0,p.jsx)(`div`,{className:`cnt-hero__corner cnt-hero__corner--tl`}),(0,p.jsx)(`div`,{className:`cnt-hero__corner cnt-hero__corner--br`}),(0,p.jsxs)(`div`,{className:`cnt-hero__status-tag`,children:[(0,p.jsx)(`span`,{className:`cnt-eyebrow-dot`}),(0,p.jsx)(`span`,{children:r?`雅加达总部 · 印尼–中国战略咨询台`:n?`MEJA KONSULTASI JAKARTA ⇄ TIONGKOK`:`JAKARTA HQ · INDONESIA–CHINA ADVISORY DESK`})]}),(0,p.jsxs)(`div`,{className:`cnt-hero__quote-box`,children:[(0,p.jsx)(`div`,{className:`cnt-hero__quote-bar`}),(0,p.jsx)(`p`,{className:`cnt-hero__quote-text`,children:r?`“无论您是计划进军新市场的中国企业、寻求在华拓展的印尼企业，还是推动双边合作的机构组织，8 Vice 均热忱期待理解您的战略目标。”`:n?`“Baik Anda sedang merencanakan ekspansi ke pasar baru, mencari mitra bisnis strategis, menjajaki kolaborasi institusional, maupun mengembangkan proyek lintas batas, 8 Vice menyambut baik kesempatan untuk memahami tujuan Anda.”`:`“Whether you are planning to enter a new market, seeking a strategic business partner, exploring institutional collaboration, or developing a cross-border project, 8 Vice welcomes the opportunity to understand your objectives.”`})]})]})})]})]}),(0,p.jsxs)(`section`,{className:`cnt-main-section`,children:[(0,p.jsx)(`div`,{className:`cnt-arch-lines`,"aria-hidden":`true`}),(0,p.jsx)(`div`,{className:`container cnt-main-container`,children:(0,p.jsxs)(`div`,{className:`cnt-grid`,children:[(0,p.jsxs)(`div`,{className:`cnt-left-col`,children:[(0,p.jsxs)(`div`,{className:`cnt-office-card m3-reveal m3-reveal--left`,children:[(0,p.jsxs)(`div`,{className:`cnt-office-card__banner`,children:[(0,p.jsx)(`img`,{src:`/images/city_orbiting_cards.webp`,alt:`8 Vice Jakarta Office`,className:`cnt-office-card__banner-img`,loading:`lazy`,decoding:`async`}),(0,p.jsx)(`div`,{className:`cnt-office-card__banner-shade`}),(0,p.jsxs)(`div`,{className:`cnt-office-card__banner-body`,children:[(0,p.jsxs)(`span`,{className:`cnt-eyebrow-pill`,style:{marginBottom:`6px`},children:[(0,p.jsx)(`span`,{className:`cnt-eyebrow-dot`}),r?`办事处与直通联络`:n?`KANTOR & SALURAN KOMUNIKASI`:`OFFICE & DIRECT CHANNELS`]}),(0,p.jsx)(`h2`,{children:`8 Vice Strategic Advisory`})]})]}),(0,p.jsxs)(`div`,{className:`cnt-office-card__body`,children:[(0,p.jsx)(`p`,{className:`cnt-office-card__intro`,children:r?`我们的咨询团队将评估您的具体需求，并确定最切实的后续策略，全力支持您的跨境战略与海外落地。`:n?`Tim kami akan meninjau kebutuhan Anda dan menentukan langkah tindak lanjut yang paling tepat untuk mendukung ekspansi lintas batas Anda.`:`Our team will review your inquiry and determine the most appropriate next steps to support your cross-border objectives.`}),(0,p.jsxs)(`div`,{className:`cnt-info-list`,children:[(0,p.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,p.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,p.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,p.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,p.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`雅加达总部`:n?`Kantor Pusat Jakarta`:`Jakarta Headquarters`}),(0,p.jsx)(`div`,{className:`cnt-info-item__val`,children:i?.address||`SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia`})]})]}),(0,p.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,p.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,p.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,p.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,p.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`官方邮箱`:n?`Email Resmi`:`Official Email`}),(0,p.jsx)(`a`,{href:g,className:`cnt-info-item__link`,children:h})]})]}),(0,p.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,p.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,p.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,p.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,p.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`服务时间与响应`:n?`Jam Layanan & Respons`:`Service Hours & Response`}),(0,p.jsx)(`div`,{className:`cnt-info-item__val`,children:r?`工作日 (09:00 - 17:00) · 1–2 个工作日内回复`:n?`Hari Kerja (09.00 - 17.00) · Respons 1–2 Hari Kerja`:`Weekdays (9 am-5 pm) · Response within 1–2 Business Days`})]})]})]}),(0,p.jsxs)(`div`,{className:`cnt-direct-box`,children:[(0,p.jsx)(`div`,{className:`cnt-direct-box__lbl`,children:r?`即时沟通通道 (WHATSAPP & 微信)`:n?`HUBUNGI LANGSUNG VIA WHATSAPP ATAU WECHAT`:`INSTANT MESSAGING DESK (WHATSAPP & WECHAT)`}),(0,p.jsxs)(`div`,{className:`cnt-direct-box__btns`,children:[(0,p.jsxs)(`a`,{href:_,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-direct-btn cnt-direct-btn--wa`,children:[(0,p.jsx)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:(0,p.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:`WhatsApp`}),(0,p.jsx)(`span`,{children:r?`官方直接咨询通道`:n?`Saluran Konsultasi Langsung`:`Direct Consultation Channel`})]})]}),(0,p.jsxs)(`button`,{type:`button`,onClick:()=>T(!0),className:`cnt-direct-btn cnt-direct-btn--wc`,children:[(0,p.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,p.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`}),(0,p.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`}),(0,p.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`}),(0,p.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:`WeChat Official`}),(0,p.jsx)(`span`,{children:r?`扫码查看官方二维码`:n?`Lihat QR Code`:`View QR Code`})]})]})]})]})]})]}),(0,p.jsxs)(`div`,{className:`cnt-steps-card m3-reveal m3-reveal--left`,style:{transitionDelay:`90ms`},children:[(0,p.jsx)(`div`,{className:`cnt-kicker`,children:r?`后续服务流程`:n?`TAHAPAN TINDAK LANJUT`:`WHAT HAPPENS NEXT`}),(0,p.jsx)(`div`,{className:`cnt-steps-list`,children:W.map(e=>(0,p.jsxs)(`div`,{className:`cnt-step-item`,children:[(0,p.jsx)(`span`,{className:`cnt-step-item__num`,children:e.num}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h4`,{children:e.title}),(0,p.jsx)(`p`,{children:e.desc})]})]},e.num))})]}),(0,p.jsxs)(`div`,{className:`cnt-map-card m3-reveal m3-reveal--left`,style:{transitionDelay:`150ms`},children:[(0,p.jsxs)(`div`,{className:`cnt-map-card__head`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`cnt-map-card__dot`}),(0,p.jsx)(`strong`,{children:`SOHO Pancoran · South Jakarta`})]}),(0,p.jsx)(`a`,{href:`https://maps.google.com/?q=SOHO+Pancoran+Jakarta`,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-map-card__ext`,children:r?`在谷歌地图中打开 ↗`:n?`Buka Google Maps ↗`:`Open in Maps ↗`})]}),(0,p.jsx)(`div`,{className:`cnt-map-card__frame`,children:(0,p.jsx)(`iframe`,{src:i?.maps_link&&(i.maps_link.includes(`embed`)||i.maps_link.includes(`output=embed`))?i.maps_link:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid`,width:`100%`,height:`100%`,style:{border:0,filter:`grayscale(0.3) contrast(1.08)`},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`SOHO Building Location Map`})})]})]}),(0,p.jsx)(`div`,{className:`cnt-right-col m3-reveal m3-reveal--right`,style:{transitionDelay:`100ms`},children:(0,p.jsxs)(`div`,{className:`cnt-form-card`,children:[(0,p.jsx)(`div`,{className:`cnt-form-card__top-bar`}),v?(0,p.jsxs)(`div`,{className:`cnt-success-state`,children:[(0,p.jsx)(`div`,{className:`cnt-success-state__icon`,children:(0,p.jsx)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,p.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,p.jsx)(`h3`,{children:r?`战略咨询需求已提交`:n?`Permintaan Konsultasi Terkirim`:`Strategic Inquiry Received`}),(0,p.jsx)(`p`,{children:r?`感谢您联络 8 Vice。我们的咨询团队将评估您的项目概况与业务需求，并在 2 个工作日内与您取得联系。`:n?`Terima kasih telah menghubungi 8 Vice. Tim penasihat kami akan meninjau profil dan kebutuhan bisnis Anda serta menghubungi Anda dalam waktu maksimal 2 hari kerja.`:`Thank you for reaching out to 8 Vice. Our advisory team will review your project profile and respond within two business days.`}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>y(!1),className:`cnt-btn cnt-btn--secondary`,children:r?`提交其他需求`:n?`Kirim Pesan Lainnya`:`Submit Another Inquiry`})]}):(0,p.jsxs)(`div`,{className:`cnt-form-card__inner`,children:[(0,p.jsx)(`div`,{className:`cnt-kicker`,children:r?`项目与合作咨询表格`:n?`FORMULIR EKSPLORASI BISNIS`:`PROJECT & PARTNERSHIP INQUIRY`}),(0,p.jsx)(`h2`,{className:`cnt-form-card__title`,children:r?`介绍您的业务需求`:n?`Ceritakan Tentang Bisnis Anda`:`Tell Us About Your Business`}),(0,p.jsx)(`p`,{className:`cnt-form-card__lead`,children:r?`请分享关于贵公司、目标市场及业务目标的简要信息。这将帮助我们更好地了解您的需求并做好针对性的沟通准备。`:n?`Silakan bagikan beberapa detail mengenai perusahaan, target pasar, dan sasaran bisnis Anda. Informasi ini membantu kami memahami kebutuhan Anda dan mempersiapkan diskusi awal yang terarah.`:`Please share a few details about your company, target market, and business objectives. This will help us understand your requirements and prepare for an initial discussion.`}),(0,p.jsx)(`p`,{className:`cnt-form-card__sub`,children:r?`我们热忱欢迎开拓印尼市场的中国企业、寻求在华合作机遇的印尼企业，以及致力于双边合作的机构咨询洽谈。`:n?`Kami menyambut pertanyaan dari perusahaan Tiongkok yang menjajaki Indonesia, bisnis Indonesia yang mencari peluang di Tiongkok, serta organisasi yang ingin mengembangkan kemitraan bilateral.`:`We welcome inquiries from Chinese companies exploring Indonesia, Indonesian businesses seeking opportunities in China, and organizations interested in developing bilateral partnerships.`}),Object.keys(S).length>0&&(0,p.jsxs)(`div`,{className:`cnt-error-box`,children:[(0,p.jsx)(`strong`,{children:r?`请检查以下表单填写项：`:n?`Harap periksa kembali isian formulir:`:`Please check the form inputs:`}),(0,p.jsx)(`ul`,{children:Object.values(S).map((e,t)=>(0,p.jsx)(`li`,{children:e},t))})]}),(0,p.jsxs)(`form`,{onSubmit:U,className:`cnt-form`,children:[(0,p.jsx)(`div`,{style:{display:`none`},"aria-hidden":`true`,children:(0,p.jsx)(`input`,{type:`text`,name:`website_url`,value:V.website_url,onChange:e=>k(`website_url`,e.target.value),tabIndex:`-1`,autoComplete:`off`})}),(0,p.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`姓名 *`:n?`Nama Lengkap *`:`Name *`}),(0,p.jsx)(`input`,{type:`text`,required:!0,placeholder:r?`您的全名`:n?`Nama lengkap Anda`:`Your full name`,value:V.name,onChange:e=>k(`name`,e.target.value)})]}),(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`公司 / 机构名称 *`:n?`Perusahaan / Institusi *`:`Company / Institution *`}),(0,p.jsx)(`input`,{type:`text`,required:!0,placeholder:r?`贵机构或企业名称`:n?`Nama organisasi Anda`:`Your company or organization`,value:V.company,onChange:e=>k(`company`,e.target.value)})]})]}),(0,p.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`职务 / 头衔`:n?`Jabatan / Posisi`:`Position / Title`}),(0,p.jsx)(`input`,{type:`text`,placeholder:r?`例如：总监、战略拓展副总裁`:n?`Contoh: Direktur, VP Ekspansi`:`e.g. Director, VP of Strategy`,value:V.position,onChange:e=>k(`position`,e.target.value)})]}),(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`所在国家 / 地区`:n?`Negara Asal`:`Country`}),(0,p.jsx)(`input`,{type:`text`,placeholder:r?`例如：中国、印尼、新加坡`:n?`Contoh: Indonesia, Tiongkok, Singapura`:`e.g. China, Indonesia, Singapore`,value:V.country,onChange:e=>k(`country`,e.target.value)})]})]}),(0,p.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`工作邮箱 *`:n?`Email Bisnis *`:`Work Email *`}),(0,p.jsx)(`input`,{type:`email`,required:!0,placeholder:`name@company.com`,value:V.email,onChange:e=>k(`email`,e.target.value)})]}),(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`电话 / WhatsApp / 微信号`:n?`WhatsApp / WeChat / Telepon`:`Phone / WhatsApp / WeChat ID`}),(0,p.jsx)(`input`,{type:`text`,placeholder:`+86 / +62 / WeChat ID`,value:V.phone,onChange:e=>k(`phone`,e.target.value)})]})]}),(0,p.jsxs)(`div`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`出海与合作方向 *`:n?`Arah Ekspansi / Kolaborasi Bisnis *`:`Business Direction *`}),(0,p.jsx)(`div`,{className:`cnt-dir-grid`,children:A.map(e=>(0,p.jsxs)(`button`,{type:`button`,onClick:()=>k(`direction`,e.value),className:`cnt-dir-card ${V.direction===e.value?`is-active`:``}`,children:[(0,p.jsx)(`span`,{className:`cnt-dir-card__tag`,children:e.tag}),(0,p.jsx)(`strong`,{children:e.label}),(0,p.jsx)(`small`,{children:e.sub})]},e.value))})]}),(0,p.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`所属行业 *`:n?`Sektor Industri *`:`Industry *`}),(0,p.jsx)(`select`,{value:V.industry,onChange:e=>k(`industry`,e.target.value),children:j.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))})]}),(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`所需咨询服务 *`:n?`Layanan yang Dibutuhkan *`:`Service Required *`}),(0,p.jsx)(`select`,{value:V.service,onChange:e=>k(`service`,e.target.value),children:R.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,p.jsxs)(`label`,{className:`cnt-field`,children:[(0,p.jsx)(`span`,{children:r?`项目或需求简要描述 *`:n?`Deskripsi Singkat Proyek atau Kebutuhan Anda *`:`Brief Description of Your Project *`}),(0,p.jsx)(`textarea`,{rows:`4`,required:!0,placeholder:r?`请简述您的目标市场、合作目标或具体战略咨询需求...`:n?`Ceritakan tujuan pasar, rencana kemitraan, atau dukungan strategis yang Anda perlukan...`:`Tell us about your target market, partnership goals, or specific strategic advisory needs...`,value:V.description,onChange:e=>k(`description`,e.target.value)})]}),(0,p.jsxs)(`button`,{type:`submit`,disabled:b,className:`cnt-btn cnt-btn--primary cnt-btn--submit`,children:[(0,p.jsx)(`span`,{children:b?r?`正在提交...`:n?`Mengirim...`:`Submitting...`:r?`提交战略咨询需求`:n?`Kirim Permintaan Konsultasi Strategis`:`Submit Strategic Inquiry`}),!b&&(0,p.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,p.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,p.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]})]})})]})})]}),w&&typeof document<`u`&&(0,f.createPortal)((0,p.jsx)(`div`,{className:`cnt-modal-backdrop`,onClick:()=>T(!1),role:`dialog`,"aria-modal":`true`,"aria-label":`WeChat QR Code Modal`,children:(0,p.jsxs)(`div`,{className:`cnt-modal-card`,onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(`button`,{type:`button`,className:`cnt-modal-close-btn`,onClick:()=>T(!1),"aria-label":r?`关闭`:n?`Tutup`:`Close`,children:`✕`}),(0,p.jsxs)(`div`,{className:`cnt-eyebrow-pill`,style:{justifyContent:`center`,marginBottom:`10px`},children:[(0,p.jsx)(`span`,{className:`cnt-eyebrow-dot`}),(0,p.jsx)(`span`,{children:`WECHAT OFFICIAL`})]}),(0,p.jsx)(`h3`,{children:r?`通过微信与我们联系`:n?`Hubungi Kami via WeChat`:`Connect on WeChat`}),(0,p.jsx)(`p`,{children:r?`请使用微信扫描下方官方二维码，或直接添加微信号与我们取得联系。`:n?`Pindai QR Code resmi di bawah ini menggunakan aplikasi WeChat, atau salin WeChat ID kami.`:`Scan the official QR code below using your WeChat app, or add our WeChat ID directly.`}),(0,p.jsx)(`div`,{className:`cnt-modal-qr-frame`,children:(0,p.jsx)(`img`,{src:`/images/wechat.webp`,alt:`8 Vice WeChat QR Code`,loading:`eager`,decoding:`sync`,fetchPriority:`high`,onError:e=>{e.currentTarget.dataset.fallback||(e.currentTarget.dataset.fallback=`true`,e.currentTarget.src=`/images/wechat.jpeg`)}})}),(0,p.jsxs)(`div`,{className:`cnt-modal-id-box`,children:[(0,p.jsx)(`span`,{className:`cnt-modal-id-label`,children:`WeChat ID:`}),(0,p.jsx)(`span`,{className:`cnt-modal-id-val`,children:`eightvice`}),(0,p.jsx)(`button`,{type:`button`,className:`cnt-modal-id-copy`,onClick:O,title:r?`复制微信号`:n?`Salin ID`:`Copy ID`,children:E?r?`已复制 ✓`:n?`Tersalin ✓`:`Copied ✓`:r?`复制`:n?`Salin`:`Copy`})]}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>T(!1),className:`cnt-btn cnt-btn--secondary`,style:{width:`100%`,marginTop:`14px`},children:r?`关闭`:n?`Tutup`:`Close`})]})}),document.body)]}),(0,p.jsx)(`style`,{children:`
        .cnt-page {
          background: #08090C;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }
        .cnt-text-red {
          color: #E63946;
        }

        /* Google M3 Emphasized Decelerate Transitions */
        .m3-reveal {
          opacity: 0;
          transform: translateY(34px) scale(0.985);
          filter: blur(4px);
          transition:
            opacity 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            transform 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            filter 0.65s cubic-bezier(0.05, 0.7, 0.1, 1);
          will-change: opacity, transform, filter;
        }
        .m3-reveal--left {
          transform: translateX(-38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--right {
          transform: translateX(38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--scale {
          transform: translateY(24px) scale(0.96);
        }
        .m3-reveal.is-visible {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          filter: blur(0);
        }

        /* Animated Modern City Background */
        .cnt-city-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .cnt-city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
        }
        .cnt-red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          pointer-events: none;
        }
        .cnt-red-glow--1 {
          width: 600px;
          height: 360px;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-red-glow--2 {
          width: 480px;
          height: 320px;
          bottom: 0;
          right: -100px;
          background: radial-gradient(circle, rgba(230,57,70,0.14) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-city-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 320px;
          opacity: 0.72;
        }
        .cnt-arc-anim {
          stroke-dashoffset: 0;
          animation: cntArcFlow 18s linear infinite;
        }
        .cnt-arc-anim--slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        @keyframes cntArcFlow {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .cnt-beacon-pulse {
          animation: cntBeacon 2.8s ease-in-out infinite;
        }
        .cnt-beacon-pulse--delay {
          animation-delay: 1.4s;
        }
        @keyframes cntBeacon {
          0%, 100% { opacity: 0.35; r: 3px; }
          50% { opacity: 1; r: 5.5px; }
        }
        .cnt-arch-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 280px at 85% 15%, rgba(230,57,70,0.09), transparent 70%),
            linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.05) 50%, transparent 100%);
          z-index: 0;
        }

        /* Shared Typography */
        .cnt-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 12px;
        }
        .cnt-kicker::before {
          content: '';
          width: 22px;
          height: 2px;
          background: linear-gradient(90deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }
        .cnt-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .cnt-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 10px #E63946;
          display: inline-block;
        }

        /* ====================================================================
           00 · HERO BANNER
           ==================================================================== */
        .cnt-hero {
          position: relative;
          padding: 136px 0 68px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .cnt-hero__container {
          position: relative;
          z-index: 2;
        }
        .cnt-hero__header {
          text-align: center;
          max-width: 920px;
          margin: 0 auto 42px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cnt-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 20px;
        }
        .cnt-breadcrumb a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
        }
        .cnt-breadcrumb a:hover {
          color: #E63946;
        }
        .cnt-breadcrumb__sep {
          color: rgba(255,255,255,0.3);
        }
        .cnt-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .cnt-hero__title {
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 14px 0 14px;
          color: #ffffff;
        }
        .cnt-hero__subtitle {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          margin: 0 0 26px;
        }
        .cnt-channel-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .cnt-channel-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(15,18,26,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cnt-channel-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.5);
          color: #ffffff;
        }
        .cnt-channel-pill__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .cnt-channel-pill__dot--green {
          background: #25D366;
          box-shadow: 0 0 8px #25D366;
        }
        .cnt-channel-pill__dot--wechat {
          background: #07C160;
          box-shadow: 0 0 8px #07C160;
        }
        .cnt-channel-pill__dot--red {
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }

        /* Panoramic Showcase */
        .cnt-hero__showcase {
          max-width: 1180px;
          margin: 0 auto;
        }
        .cnt-hero__image-frame {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 390px;
          display: flex;
          align-items: flex-end;
          padding: clamp(24px, 4vw, 44px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.65),
            0 0 60px rgba(230,57,70,0.12);
        }
        .cnt-hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.68) contrast(1.08);
          transition: transform 8s ease;
        }
        .cnt-hero__image-frame:hover .cnt-hero__image {
          transform: scale(1.05);
        }
        .cnt-hero__image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.2) 0%, rgba(8,9,12,0.55) 45%, rgba(8,9,12,0.94) 100%),
            radial-gradient(circle at 20% 85%, rgba(230,57,70,0.32), transparent 55%);
        }
        .cnt-hero__corner {
          position: absolute;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 2;
        }
        .cnt-hero__corner--tl {
          top: 20px;
          left: 20px;
          border-top: 2px solid #E63946;
          border-left: 2px solid #E63946;
          border-top-left-radius: 8px;
        }
        .cnt-hero__corner--br {
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid #E63946;
          border-right: 2px solid #E63946;
          border-bottom-right-radius: 8px;
        }
        .cnt-hero__status-tag {
          position: absolute;
          top: 22px;
          right: 26px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(8,9,12,0.8);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffffff;
        }
        .cnt-hero__quote-box {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(22px, 3vw, 32px) clamp(24px, 3.5vw, 38px);
          border-radius: 20px;
          background: rgba(12,14,20,0.8);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(18px);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .cnt-hero__quote-bar {
          width: 5px;
          align-self: stretch;
          border-radius: 999px;
          background: linear-gradient(180deg, #E63946 0%, #ff8a93 100%);
          flex-shrink: 0;
        }
        .cnt-hero__quote-text {
          margin: 0;
          font-size: clamp(15.5px, 1.8vw, 19.5px);
          font-weight: 500;
          line-height: 1.62;
          color: rgba(255,255,255,0.95);
        }

        /* ====================================================================
           01 · MAIN CONTACT SPLIT SECTION
           ==================================================================== */
        .cnt-main-section {
          position: relative;
          padding: clamp(68px, 7vw, 108px) 0 116px;
        }
        .cnt-main-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
        }
        .cnt-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.28fr;
          gap: clamp(32px, 4vw, 48px);
          align-items: start;
        }
        .cnt-left-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Office Card */
        .cnt-office-card {
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(18,21,30,0.94) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 56px rgba(0,0,0,0.45);
        }
        .cnt-office-card__banner {
          position: relative;
          padding: 28px 30px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-office-card__banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.45);
        }
        .cnt-office-card__banner-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,9,12,0.82) 0%, rgba(230,57,70,0.28) 100%);
        }
        .cnt-office-card__banner-body {
          position: relative;
          z-index: 2;
        }
        .cnt-office-card__banner-body h2 {
          font-size: 24px;
          font-weight: 800;
          margin: 4px 0 0;
          color: #ffffff;
        }
        .cnt-office-card__body {
          padding: 26px 30px 30px;
        }
        .cnt-office-card__intro {
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.72);
          margin: 0 0 22px;
        }
        .cnt-info-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }
        .cnt-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .cnt-info-item__icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cnt-info-item__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.48);
          margin-bottom: 3px;
        }
        .cnt-info-item__val {
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.9);
        }
        .cnt-info-item__link {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }
        .cnt-info-item__link:hover {
          color: #E63946;
        }

        /* Direct Instant Channels Box */
        .cnt-direct-box {
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-direct-box__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }
        .cnt-direct-box__btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cnt-direct-btn {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .cnt-direct-btn div {
          display: flex;
          flex-direction: column;
        }
        .cnt-direct-btn strong {
          font-size: 13px;
          font-weight: 700;
        }
        .cnt-direct-btn span {
          font-size: 11.5px;
          opacity: 0.85;
        }
        .cnt-direct-btn--wa {
          background: rgba(37,211,102,0.12);
          border: 1px solid rgba(37,211,102,0.34);
          color: #4ADE80;
        }
        .cnt-direct-btn--wa:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
        }
        .cnt-direct-btn--wc {
          background: rgba(7,193,96,0.12);
          border: 1px solid rgba(7,193,96,0.34);
          color: #34D399;
        }
        .cnt-direct-btn--wc:hover {
          background: rgba(7,193,96,0.2);
          transform: translateY(-2px);
        }

        /* 3-Step Process Card */
        .cnt-steps-card {
          padding: 26px 28px;
          border-radius: 22px;
          background: rgba(15,18,26,0.9);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .cnt-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }
        .cnt-step-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }
        .cnt-step-item__num {
          font-size: 11.5px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.3);
          padding: 4px 8px;
          border-radius: 7px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cnt-step-item h4 {
          font-size: 14.5px;
          font-weight: 700;
          margin: 0 0 3px;
          color: #ffffff;
        }
        .cnt-step-item p {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* Map Card */
        .cnt-map-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(15,18,26,0.92);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cnt-map-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 13px;
        }
        .cnt-map-card__head > div {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cnt-map-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .cnt-map-card__ext {
          font-size: 12px;
          font-weight: 700;
          color: #ff8a93;
          text-decoration: none;
        }
        .cnt-map-card__frame {
          aspect-ratio: 16 / 9.5;
        }

        /* ====================================================================
           RIGHT COLUMN: FORM CARD
           ==================================================================== */
        .cnt-form-card {
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(19,22,32,0.95) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.11);
          box-shadow:
            0 30px 72px rgba(0,0,0,0.55),
            0 0 50px rgba(230,57,70,0.08);
        }
        .cnt-form-card__top-bar {
          height: 4px;
          background: linear-gradient(90deg, #E63946 0%, #ff8a93 50%, transparent 100%);
        }
        .cnt-form-card__inner {
          padding: clamp(28px, 4vw, 44px);
        }
        .cnt-form-card__title {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: #ffffff;
        }
        .cnt-form-card__lead {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0 0 10px;
        }
        .cnt-form-card__sub {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255,255,255,0.54);
          margin: 0 0 28px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-error-box {
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.4);
          color: #ff8a93;
          font-size: 13.5px;
          margin-bottom: 22px;
        }
        .cnt-error-box ul {
          margin: 8px 0 0 18px;
          padding: 0;
        }

        .cnt-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cnt-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cnt-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cnt-field > span {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: rgba(255,255,255,0.85);
        }
        .cnt-field input,
        .cnt-field select,
        .cnt-field textarea {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.13);
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all 0.22s ease;
        }
        .cnt-field select option {
          background: #0F1219;
          color: #ffffff;
        }
        .cnt-field input:focus,
        .cnt-field select:focus,
        .cnt-field textarea:focus {
          border-color: #E63946;
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.18);
        }

        /* Direction Selector Cards */
        .cnt-dir-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .cnt-dir-card {
          padding: 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75);
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.22s ease;
        }
        .cnt-dir-card__tag {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
        }
        .cnt-dir-card strong {
          font-size: 13.5px;
          color: #ffffff;
        }
        .cnt-dir-card small {
          font-size: 11.5px;
          line-height: 1.4;
          color: rgba(255,255,255,0.55);
        }
        .cnt-dir-card.is-active {
          background: rgba(230,57,70,0.16);
          border-color: #E63946;
          box-shadow: 0 10px 24px rgba(230,57,70,0.2);
        }

        .cnt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .cnt-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #b91c28 100%);
          color: #ffffff;
          box-shadow: 0 14px 32px rgba(230,57,70,0.35);
        }
        .cnt-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(230,57,70,0.5);
        }
        .cnt-btn--secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .cnt-btn--submit {
          width: 100%;
          padding: 16px 28px;
          font-size: 15px;
          margin-top: 6px;
        }

        /* Success State */
        .cnt-success-state {
          padding: 64px 28px;
          text-align: center;
        }
        .cnt-success-state__icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(37,211,102,0.15);
          border: 1px solid rgba(37,211,102,0.4);
          color: #4ADE80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
        }
        .cnt-success-state h3 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .cnt-success-state p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.72);
          max-width: 460px;
          margin: 0 auto 26px;
        }

        /* WeChat Modal */
        .cnt-modal-backdrop {
          position: fixed !important;
          inset: 0 !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          z-index: 999999 !important;
          background: rgba(6, 8, 12, 0.86) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 20px !important;
          overflow-y: auto !important;
          animation: cntFadeIn 0.2s ease-out;
        }
        .cnt-modal-card {
          position: relative;
          background: #10131C;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          padding: 34px 28px 28px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.14);
          animation: cntScaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          margin: auto;
        }
        .cnt-modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .cnt-modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .cnt-modal-card h3 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 6px;
          color: #FFFFFF;
        }
        .cnt-modal-card p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 16px;
          line-height: 1.5;
        }
        .cnt-modal-qr-frame {
          background: #ffffff;
          padding: 12px;
          border-radius: 16px;
          display: inline-block;
          margin-bottom: 14px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        }
        .cnt-modal-qr-frame img {
          width: 220px;
          height: 220px;
          object-fit: contain;
          display: block;
          border-radius: 6px;
        }
        .cnt-modal-id-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 8px 14px;
          font-size: 13px;
        }
        .cnt-modal-id-label {
          color: rgba(255, 255, 255, 0.6);
        }
        .cnt-modal-id-val {
          font-weight: 700;
          color: #07C160;
          letter-spacing: 0.5px;
        }
        .cnt-modal-id-copy {
          background: rgba(7, 193, 96, 0.18);
          border: 1px solid rgba(7, 193, 96, 0.4);
          color: #07C160;
          font-size: 11.5px;
          font-weight: 600;
          border-radius: 6px;
          padding: 3px 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cnt-modal-id-copy:hover {
          background: #07C160;
          color: #ffffff;
        }
        @keyframes cntFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cntScaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .cnt-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .cnt-hero {
            padding: 114px 0 54px;
          }
          .cnt-hero__quote-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .cnt-hero__quote-bar {
            width: 56px;
            height: 4px;
          }
          .cnt-form-row,
          .cnt-dir-grid,
          .cnt-direct-box__btns {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{h as default};