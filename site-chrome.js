/* ============================================================
   8VICE — shared site chrome (header, drawer, footer, WA button)
   Injected on every inner page so nav stays in sync.
   Set <body data-page="services"> to highlight the active item.
   ============================================================ */
(function () {
  'use strict';

  var HOME = '8vice Homepage.html';
  var page = document.body.getAttribute('data-page') || '';

  /* ---------- HEADER ---------- */
  var headerHTML =
  '<header class="header" id="header">' +
    '<div class="header__inner">' +
      '<a href="' + HOME + '" class="logo" aria-label="8vice home"><span class="logo__word">8vice</span><span class="logo__dot"></span></a>' +
      '<nav class="nav" aria-label="Primary">' +
        '<div class="nav__item"><a href="About.html" class="nav__link" data-nav="about">About</a></div>' +
        '<div class="nav__item" id="services-item">' +
          '<a href="Services.html" class="nav__link" id="services-trigger" data-nav="services" aria-haspopup="true" aria-expanded="false">Our Services' +
            '<svg class="ico ico-16 nav__caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg></a>' +
          '<div class="dropdown dropdown--mega" role="menu" aria-label="Our Services">' +
            '<div class="dropdown__group"><div class="dropdown__col-title">Consultancy</div>' +
              '<a class="dropdown__link" href="Consultancy.html">Scope of Work <span>How we scope engagements</span></a>' +
              '<a class="dropdown__link" href="Consultancy.html">Capabilities <span>Nine advisory areas</span></a>' +
              '<a class="dropdown__link" href="Case-Study.html">Clients <span>China-focus engagements</span></a></div>' +
            '<div class="dropdown__group"><div class="dropdown__col-title">Training</div>' +
              '<a class="dropdown__link" href="Training.html">Offline &amp; Online <span>Custom, by request</span></a>' +
              '<a class="dropdown__link" href="Training.html#subscription">Training Subscription <span>E-learning modules</span></a></div>' +
            '<div class="dropdown__group"><div class="dropdown__col-title">Insight</div>' +
              '<a class="dropdown__link" href="Insight.html">Podcast <span>Free - field conversations</span></a>' +
              '<a class="dropdown__link" href="Insight.html#books">Book Review <span>Cross-border reading</span></a></div>' +
          '</div>' +
        '</div>' +
        '<div class="nav__item"><a href="Case-Study.html" class="nav__link" data-nav="clients">Clients</a></div>' +
        '<div class="nav__item" id="insight-item">' +
          '<a href="Insight.html" class="nav__link" id="insight-trigger" data-nav="insight" aria-haspopup="true" aria-expanded="false">Insight' +
            '<svg class="ico ico-16 nav__caret" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg></a>' +
          '<div class="dropdown dropdown--menu" role="menu" aria-label="Insight">' +
            '<a class="dropdown__link" href="Insight.html">Article <span>Field notes &amp; analysis</span></a>' +
            '<a class="dropdown__link" href="Case-Study.html">Case Study <span>Real client engagements</span></a>' +
            '<a class="dropdown__link" href="Social-Impact.html">Social Impact <span>Value for the region</span></a>' +
          '</div>' +
        '</div>' +
        '<div class="nav__item"><a href="Career.html" class="nav__link" data-nav="career">Career</a></div>' +
        '<div class="nav__item"><a href="Contact.html" class="nav__link" data-nav="contact">Contact</a></div>' +
        '<div class="nav__utils">' +
          '<div class="lang-toggle" role="group" aria-label="Language">' +
            '<button class="lang-btn is-active" data-lang="en" type="button">EN</button>' +
            '<button class="lang-btn" data-lang="id" type="button">ID</button></div>' +
          '<a href="Contact.html" class="login-btn" aria-label="Log in">' +
            '<svg class="ico ico-20" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span>Log in</span></a>' +
        '</div>' +
      '</nav>' +
      '<button class="hamburger" id="hamburger" aria-label="Open menu">' +
        '<svg class="ico ico-24" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>' +
    '</div>' +
  '</header>' +
  '<div class="drawer-backdrop" id="drawer-backdrop"></div>' +
  '<aside class="drawer" id="drawer" aria-label="Mobile menu">' +
    '<div class="drawer__head"><a href="' + HOME + '" class="logo"><span class="logo__word">8vice</span><span class="logo__dot"></span></a>' +
      '<button class="drawer__close" id="drawer-close" aria-label="Close menu"><svg class="ico ico-24" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>' +
    '<a class="drawer__link" href="About.html">About</a>' +
    '<a class="drawer__link" href="Services.html">Our Services</a>' +
    '<div class="drawer__sub"><a class="drawer__sublink" href="Consultancy.html">Consultancy</a>' +
      '<a class="drawer__sublink" href="Training.html">Training</a>' +
      '<a class="drawer__sublink" href="Training.html#subscription">Training Subscription</a></div>' +
    '<a class="drawer__link" href="Case-Study.html">Clients</a>' +
    '<a class="drawer__link" href="Insight.html">Insight</a>' +
    '<div class="drawer__sub"><a class="drawer__sublink" href="Insight.html">Article</a>' +
      '<a class="drawer__sublink" href="Case-Study.html">Case Study</a>' +
      '<a class="drawer__sublink" href="Social-Impact.html">Social Impact</a></div>' +
    '<a class="drawer__link" href="Career.html">Career</a>' +
    '<a class="drawer__link" href="Contact.html">Contact</a>' +
    '<div class="drawer__utils"><span class="drawer__util-lbl">Language</span>' +
      '<div class="lang-toggle" role="group" aria-label="Language"><button class="lang-btn is-active" data-lang="en" type="button">EN</button><button class="lang-btn" data-lang="id" type="button">ID</button></div>' +
      '<a href="Contact.html" class="drawer__login"><svg class="ico ico-20" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Log in</a></div>' +
  '</aside>';

  /* ---------- FOOTER ---------- */
  var footerHTML =
  '<footer class="footer">' +
    '<div class="container"><div class="footer__grid">' +
      '<div class="footer__col"><a href="' + HOME + '" class="logo"><span class="logo__word">8vice</span><span class="logo__dot"></span></a>' +
        '<p class="footer__tag">Bridging Chinese business into Indonesia - with advisors who\'ve operated on the ground.</p></div>' +
      '<div class="footer__col"><h4>Navigate</h4>' +
        '<a href="About.html">About</a><a href="Case-Study.html">Clients</a><a href="Insight.html">Insight</a><a href="Career.html">Career</a><a href="Contact.html">Contact</a></div>' +
      '<div class="footer__col"><h4>Services</h4>' +
        '<a href="Consultancy.html">Consultancy</a><a href="Training.html">Training (Online &amp; Offline)</a><a href="Training.html#subscription">Training Subscription</a><a href="Insight.html">Insight &amp; Podcast</a><a href="Insight.html#books">Book Review</a></div>' +
      '<div class="footer__col footer__contact"><h4>Contact</h4>' +
        '<a href="mailto:hello@8vice.com">hello@8vice.com</a>' +
        '<span class="lbl">Office</span><span>SOHO Pancoran, MT Haryono<br>Jakarta Selatan, Indonesia</span>' +
        '<span class="lbl">WhatsApp</span><a href="#">+62 ••• •••• ••••</a>' +
        '<div class="footer__social" style="margin-top:18px;">' +
          '<a href="#" aria-label="LinkedIn"><svg class="ico ico-20" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>' +
          '<a href="#" aria-label="YouTube"><svg class="ico ico-20" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>' +
          '<a href="#" aria-label="Spotify"><svg class="ico ico-20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14.5c2.5-.8 5.5-.5 7.5 1"></path><path d="M7.5 11.5c3-1 6.5-.6 9 1.2"></path><path d="M7.5 8.7c3.4-1 7.4-.5 10 1.3"></path></svg></a>' +
        '</div></div>' +
    '</div>' +
    '<div class="footer__bottom"><span>© 2026 8vice. All rights reserved.</span>' +
      '<div class="footer__bottom-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="Insight.html">Subscribe</a></div></div>' +
    '</div></footer>' +
  '<a class="wa-fab" href="https://wa.me/0000000000?text=Hi%208vice" target="_blank" rel="noopener" aria-label="Chat with 8vice on WhatsApp">' +
    '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 6.97 3.86zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z"></path></svg></a>';

  /* ---------- INSERT ---------- */
  var main = document.querySelector('main');
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  if (main) main.insertAdjacentHTML('afterend', footerHTML);
  else document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* active nav */
  if (page) {
    var act = document.querySelector('.nav__link[data-nav="' + page + '"]');
    if (act) act.classList.add('is-current');
  }

  /* ---------- INTERACTIONS ---------- */
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var dd = [];
  document.querySelectorAll('.nav__item').forEach(function (item) {
    var trigger = item.querySelector('.nav__link[aria-haspopup]');
    if (!trigger) return;
    var t;
    function open() { clearTimeout(t); dd.forEach(function (d) { if (d.item !== item) d.close(); });
      item.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); }
    function close() { item.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function () { t = setTimeout(close, 120); });
    trigger.addEventListener('click', function (e) { e.preventDefault();
      item.classList.contains('is-open') ? close() : open(); });
    dd.push({ item: item, close: close });
  });
  document.addEventListener('click', function (e) { dd.forEach(function (d) { if (!d.item.contains(e.target)) d.close(); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') dd.forEach(function (d) { d.close(); }); });

  var drawer = document.getElementById('drawer');
  var backdrop = document.getElementById('drawer-backdrop');
  function openDrawer() { drawer.classList.add('is-open'); backdrop.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
  function shutDrawer() { drawer.classList.remove('is-open'); backdrop.classList.remove('is-open'); document.body.style.overflow = ''; }
  document.getElementById('hamburger').addEventListener('click', openDrawer);
  document.getElementById('drawer-close').addEventListener('click', shutDrawer);
  backdrop.addEventListener('click', shutDrawer);
  drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shutDrawer); });

  function setLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-lang') === lang); });
    document.documentElement.setAttribute('data-lang', lang);
    try { localStorage.setItem('8vice-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang-btn').forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); }); });
  var saved; try { saved = localStorage.getItem('8vice-lang'); } catch (e) {}
  if (saved) setLang(saved);
})();
