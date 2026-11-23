import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{c as t,o as n,s as r}from"./vendor-inertia-ITStVNxA.js";import{o as i}from"./vendor-react-DPCMAjqV.js";import{t as a}from"./app-BmQl1GCB.js";var o=e(t(),1),s=e(r(),1),c=i();function l(){let{siteSettings:e}=n().props,{lang:t}=a(),r=t===`id`,i=t===`cn`,[l,u]=(0,o.useState)(!1),[d,f]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!1),h=(0,o.useRef)(null),g=!!(e&&typeof e==`object`),_=(g?e.whatsapp_url||``:`https://wa.me/628118005110`).trim(),v=(g?e.wechat_id||``:`eightvice`).trim(),y=(g?e.wechat_qr||``:`/images/wechat.webp`).trim(),b=y?y.startsWith(`http`)||y.startsWith(`/`)?y:`/storage/${y.replace(/^\/+/,``)}`:``,x=!!(v||b);return(0,o.useEffect)(()=>{if(!d)return;let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=e}},[d]),(0,o.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,o.useEffect)(()=>{let e=e=>{e.key===`Escape`&&(u(!1),f(!1))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),!_&&!x?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{ref:h,style:{position:`fixed`,right:`24px`,bottom:`24px`,zIndex:9990,fontFamily:`inherit`},children:[l&&(0,c.jsxs)(`div`,{style:{position:`absolute`,bottom:`68px`,right:0,width:`240px`,background:`rgba(16, 18, 24, 0.96)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`,border:`1px solid rgba(255, 255, 255, 0.12)`,borderRadius:`20px`,padding:`14px`,boxShadow:`0 18px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.05)`,display:`flex`,flexDirection:`column`,gap:`8px`,animation:`chatMenuSlideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards`},children:[(0,c.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:700,color:`rgba(255, 255, 255, 0.45)`,textTransform:`uppercase`,letterSpacing:`0.08em`,padding:`4px 8px 6px`},children:i?`直接咨询通道`:r?`Pilih Saluran Konsultasi`:`Direct Channels`}),_&&(0,c.jsxs)(`a`,{href:_,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>u(!1),style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`10px 12px`,borderRadius:`14px`,background:`rgba(255, 255, 255, 0.03)`,border:`1px solid rgba(255, 255, 255, 0.06)`,color:`#FFFFFF`,textDecoration:`none`,transition:`all 0.2s ease`,cursor:`pointer`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(37, 211, 102, 0.12)`,e.currentTarget.style.borderColor=`rgba(37, 211, 102, 0.4)`,e.currentTarget.style.transform=`translateX(-2px)`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.03)`,e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.06)`,e.currentTarget.style.transform=`translateX(0)`},children:[(0,c.jsx)(`div`,{style:{width:`36px`,height:`36px`,borderRadius:`50%`,background:`#25D366`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#FFFFFF`,flexShrink:0,boxShadow:`0 4px 12px rgba(37, 211, 102, 0.35)`},children:(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`currentColor`,children:(0,c.jsx)(`path`,{d:`M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.97 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43-.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z`})})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{fontSize:`14.5px`,fontWeight:600,color:`#FFFFFF`,lineHeight:1.2},children:`WhatsApp`}),(0,c.jsx)(`div`,{style:{fontSize:`11.5px`,color:`rgba(255, 255, 255, 0.55)`,marginTop:`2px`},children:i?`即时在线沟通`:r?`Chat langsung`:`Chat directly`})]})]}),x&&(0,c.jsxs)(`button`,{type:`button`,onClick:()=>{f(!0),u(!1)},style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`10px 12px`,borderRadius:`14px`,background:`rgba(255, 255, 255, 0.03)`,border:`1px solid rgba(255, 255, 255, 0.06)`,color:`#FFFFFF`,textAlign:`left`,width:`100%`,transition:`all 0.2s ease`,cursor:`pointer`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(7, 193, 96, 0.12)`,e.currentTarget.style.borderColor=`rgba(7, 193, 96, 0.4)`,e.currentTarget.style.transform=`translateX(-2px)`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.03)`,e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.06)`,e.currentTarget.style.transform=`translateX(0)`},children:[(0,c.jsx)(`div`,{style:{width:`36px`,height:`36px`,borderRadius:`50%`,background:`#07C160`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#FFFFFF`,flexShrink:0,boxShadow:`0 4px 12px rgba(7, 193, 96, 0.35)`},children:(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`currentColor`,children:(0,c.jsx)(`path`,{d:`M8.5 2C4.36 2 1 4.91 1 8.5c0 1.94.97 3.69 2.5 4.88-.11.75-.48 2.22-1.25 3.32 1.46-.22 3.12-.92 3.97-1.57.71.24 1.48.37 2.28.37.28 0 .56-.02.83-.05C8.83 14.7 8.5 13.88 8.5 13c0-3.87 3.81-7 8.5-7 .34 0 .67.02 1 .06C17.02 3.73 13.11 2 8.5 2zm-2.25 4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 7c-3.87 0-7 2.69-7 6s3.13 6 7 6c.64 0 1.25-.09 1.83-.26.68.52 2.01 1.08 3.17 1.26-.62-.88-.91-2.06-1-2.66 1.22-.95 2-2.35 2-3.9 0-3.31-3.13-6-7-6zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z`})})}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{style:{fontSize:`14.5px`,fontWeight:600,color:`#FFFFFF`,lineHeight:1.2},children:`WeChat`}),(0,c.jsx)(`div`,{style:{fontSize:`11.5px`,color:`rgba(255, 255, 255, 0.55)`,marginTop:`2px`},children:i?`扫描二维码`:r?`Pindai QR Code`:`Scan QR Code`})]})]})]}),(0,c.jsx)(`button`,{type:`button`,className:`chat-fab-btn ${l?`is-open`:``}`,onClick:()=>u(e=>!e),"aria-label":l?i?`关闭聊天菜单`:`Tutup menu chat`:i?`打开咨询选项 (WhatsApp & WeChat)`:`Buka opsi konsultasi (WhatsApp & WeChat)`,children:l?(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.4`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,c.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,c.jsxs)(`svg`,{className:`chat-fab-icon`,viewBox:`0 0 24 24`,width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.1`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`,fill:`rgba(255, 255, 255, 0.16)`}),(0,c.jsx)(`circle`,{cx:`9`,cy:`11.5`,r:`1.15`,fill:`currentColor`,stroke:`none`}),(0,c.jsx)(`circle`,{cx:`12.5`,cy:`11.5`,r:`1.15`,fill:`currentColor`,stroke:`none`}),(0,c.jsx)(`circle`,{cx:`16`,cy:`11.5`,r:`1.15`,fill:`currentColor`,stroke:`none`})]})})]}),d&&typeof document<`u`&&(0,s.createPortal)((0,c.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":`WeChat Consultation Modal`,onClick:()=>f(!1),style:{position:`fixed`,inset:0,top:0,left:0,right:0,bottom:0,width:`100vw`,height:`100vh`,height:`100dvh`,backgroundColor:`rgba(5, 7, 12, 0.85)`,backdropFilter:`blur(10px)`,WebkitBackdropFilter:`blur(10px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:999999,padding:`20px`,overflowY:`auto`,animation:`chatModalFadeIn 0.2s ease-out`},children:(0,c.jsxs)(`div`,{onClick:e=>e.stopPropagation(),style:{background:`#12141B`,border:`1px solid rgba(255, 255, 255, 0.14)`,borderRadius:`24px`,padding:`36px 30px 28px`,maxWidth:`390px`,width:`100%`,boxShadow:`0 28px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.15)`,position:`relative`,textAlign:`center`,margin:`auto`,animation:`chatModalScaleUp 0.24s cubic-bezier(0.16, 1, 0.3, 1)`},children:[(0,c.jsx)(`button`,{type:`button`,onClick:()=>f(!1),"aria-label":i?`关闭`:r?`Tutup`:`Close`,style:{position:`absolute`,top:`16px`,right:`16px`,background:`rgba(255, 255, 255, 0.08)`,border:`1px solid rgba(255, 255, 255, 0.1)`,color:`rgba(255, 255, 255, 0.8)`,width:`32px`,height:`32px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.2)`,e.currentTarget.style.color=`#FFFFFF`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255, 255, 255, 0.08)`,e.currentTarget.style.color=`rgba(255, 255, 255, 0.8)`},children:(0,c.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,c.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,c.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`8px`,padding:`6px 14px`,background:`rgba(7, 193, 96, 0.12)`,border:`1px solid rgba(7, 193, 96, 0.28)`,borderRadius:`20px`,color:`#07C160`,fontSize:`12.5px`,fontWeight:600,marginBottom:`14px`},children:[(0,c.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,children:(0,c.jsx)(`path`,{d:`M8.5 2C4.36 2 1 4.91 1 8.5c0 1.94.97 3.69 2.5 4.88-.11.75-.48 2.22-1.25 3.32 1.46-.22 3.12-.92 3.97-1.57.71.24 1.48.37 2.28.37.28 0 .56-.02.83-.05C8.83 14.7 8.5 13.88 8.5 13c0-3.87 3.81-7 8.5-7 .34 0 .67.02 1 .06C17.02 3.73 13.11 2 8.5 2zm-2.25 4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 7c-3.87 0-7 2.69-7 6s3.13 6 7 6c.64 0 1.25-.09 1.83-.26.68.52 2.01 1.08 3.17 1.26-.62-.88-.91-2.06-1-2.66 1.22-.95 2-2.35 2-3.9 0-3.31-3.13-6-7-6zm-2 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z`})}),(0,c.jsx)(`span`,{children:`WeChat Official Channel`})]}),(0,c.jsx)(`h3`,{style:{fontSize:`20px`,fontWeight:700,color:`#FFFFFF`,marginBottom:`8px`,letterSpacing:`-0.01em`},children:i?`通过微信联系我们`:r?`Hubungi Kami via WeChat`:`Connect on WeChat`}),(0,c.jsx)(`p`,{style:{fontSize:`13px`,color:`rgba(255, 255, 255, 0.68)`,lineHeight:1.5,marginBottom:`16px`,padding:`0 4px`},children:i?`使用微信扫描下方官方二维码，或直接添加微信号与 8Vice 战略咨询团队取得联系。`:r?`Pindai kode QR di bawah ini dengan WeChat, atau salin WeChat ID kami untuk terhubung langsung dengan tim 8Vice.`:`Scan the QR code below using WeChat, or copy our WeChat ID to connect directly with 8Vice advisory team.`}),b&&(0,c.jsx)(`div`,{style:{background:`#FFFFFF`,padding:`12px`,borderRadius:`16px`,display:`inline-block`,boxShadow:`0 10px 30px rgba(0, 0, 0, 0.45)`,marginBottom:`14px`},children:(0,c.jsx)(`img`,{src:b,alt:`8Vice WeChat QR Code`,loading:`eager`,decoding:`sync`,fetchPriority:`high`,onError:e=>{e.currentTarget.dataset.fallback||(e.currentTarget.dataset.fallback=`true`,e.currentTarget.src=`/images/wechat.jpeg`)},style:{width:`210px`,height:`210px`,objectFit:`contain`,display:`block`,borderRadius:`6px`}})}),v&&(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`,background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,borderRadius:`12px`,padding:`8px 14px`,fontSize:`13px`,marginBottom:`14px`},children:[(0,c.jsx)(`span`,{style:{color:`rgba(255, 255, 255, 0.6)`},children:`WeChat ID:`}),(0,c.jsx)(`strong`,{style:{color:`#07C160`,letterSpacing:`0.5px`},children:v}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>{v&&navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(v),m(!0),setTimeout(()=>m(!1),2e3))},style:{background:`rgba(7, 193, 96, 0.18)`,border:`1px solid rgba(7, 193, 96, 0.4)`,color:`#07C160`,fontSize:`11.5px`,fontWeight:600,borderRadius:`6px`,padding:`3px 8px`,cursor:`pointer`,transition:`all 0.2s ease`},onMouseEnter:e=>{e.currentTarget.style.background=`#07C160`,e.currentTarget.style.color=`#FFFFFF`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(7, 193, 96, 0.18)`,e.currentTarget.style.color=`#07C160`},children:p?i?`已复制 ✓`:r?`Tersalin ✓`:`Copied ✓`:i?`复制`:r?`Salin`:`Copy`})]}),(0,c.jsxs)(`div`,{style:{fontSize:`12px`,color:`rgba(255, 255, 255, 0.45)`,letterSpacing:`0.02em`},children:[i?`跨境战略咨询`:r?`Konsultasi Strategis Lintas Batas`:`Cross-Border Strategic Advisory`,` · Indonesia & China`]})]})}),document.body),(0,c.jsx)(`style`,{children:`
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
      `})]})}export{l as default};