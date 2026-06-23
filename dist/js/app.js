/* ============================================================
   8VICE homepage - interactions + content injection
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky header blur on scroll ---- */
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Nav dropdowns (Services + Insight) ---- */
  var dropdownItems = [];
  document.querySelectorAll('.nav__item').forEach(function (item) {
    var trigger = item.querySelector('.nav__link[aria-haspopup]');
    if (!trigger) return;
    var closeTimer;
    function open() {
      clearTimeout(closeTimer);
      dropdownItems.forEach(function (d) { if (d.item !== item) d.close(); });
      item.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true');
    }
    function close() { item.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function () { closeTimer = setTimeout(close, 120); });
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.contains('is-open') ? close() : open();
    });
    dropdownItems.push({ item: item, close: close });
  });
  document.addEventListener('click', function (e) {
    dropdownItems.forEach(function (d) { if (!d.item.contains(e.target)) d.close(); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') dropdownItems.forEach(function (d) { d.close(); });
  });

  /* ---- Mobile drawer ---- */
  var hamburger = document.getElementById('hamburger');
  var drawer = document.getElementById('drawer');
  var backdrop = document.getElementById('drawer-backdrop');
  var drawerClose = document.getElementById('drawer-close');
  function openDrawer() { drawer.classList.add('is-open'); backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden'; }
  function shutDrawer() { drawer.classList.remove('is-open'); backdrop.classList.remove('is-open');
    document.body.style.overflow = ''; }
  hamburger.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', shutDrawer);
  backdrop.addEventListener('click', shutDrawer);
  drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shutDrawer); });

  /* ---- Trust bar logos (neutral placeholder wordmarks, by name) ---- */
  var LOGOS = [
    { name: 'Alipay',        glyph: '支' },
    { name: 'DiDi',          glyph: 'D'  },
    { name: 'Bios44',        glyph: 'B'  },
    { name: 'Edutech China', glyph: '教' },
    { name: 'Chinghua',      glyph: '清' },
    { name: 'Xinhua Media',  glyph: '新' },
    { name: 'DingTalk',      glyph: '钉' }
  ];
  var trustRow = document.getElementById('trust-row');
  trustRow.innerHTML = LOGOS.map(function (l) {
    return '<span class="logo-mark" title="' + l.name + ' (placeholder)">' +
      '<span class="glyph">' + l.glyph + '</span>' + l.name + '</span>';
  }).join('');

  /* ---- Case study cards (anonymized interim state per PRD 7.1.5) ---- */
  var CASES = [
    { tag: 'Fintech', cover: 'CASE COVER · digital payments, Jakarta',
      h: 'A Chinese fintech, live in 6 months.', p: 'Market entry, licensing pathway, and a local operating team - from scoping to launch.' },
    { tag: 'Consumer · Retail', cover: 'CASE COVER · retail rollout, SE Asia',
      h: 'Shelf to scale across 40 cities.', p: 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.' },
    { tag: 'Manufacturing', cover: 'CASE COVER · factory floor, industrial estate',
      h: 'Local production, de-risked.', p: 'Site selection, regulatory navigation, and a resilient supply chain for a manufacturing entrant.' }
  ];
  var arrow = '<svg class="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
  document.getElementById('case-grid').innerHTML = CASES.map(function (c) {
    return '<article class="case-card">' +
      '<div class="ph case-card__cover on-dark"><span class="ph__tag">' + c.cover + '</span></div>' +
      '<div class="case-card__body">' +
        '<span class="tag">' + c.tag + '</span>' +
        '<h3 class="t-h3">' + c.h + '</h3>' +
        '<p>' + c.p + '</p>' +
        '<a href="#" class="link-arrow">Read case study' + arrow + '</a>' +
      '</div></article>';
  }).join('');

  /* ---- Insight preview (3 articles + podcast) ---- */
  var ARTICLES = [
    { cat: 'Market Entry', rt: '6 min read', t: 'The licensing pathway most Chinese entrants get wrong.', cover: 'ARTICLE · regulatory desk' },
    { cat: 'Culture', rt: '8 min read', t: 'Guanxi doesn\u2019t translate. Here\u2019s what does in Indonesia.', cover: 'ARTICLE · meeting room' },
    { cat: 'Regulation', rt: '5 min read', t: 'Reading the 2026 negative investment list.', cover: 'ARTICLE · policy documents' }
  ];
  document.getElementById('insight-grid').innerHTML =
    ARTICLES.map(function (a) {
      return '<article class="article-card">' +
        '<div class="ph article-card__thumb"><span class="ph__tag">' + a.cover + '</span></div>' +
        '<div class="meta"><span class="cat">' + a.cat + '</span><span class="rt">' + a.rt + '</span></div>' +
        '<h3 class="t-h3">' + a.t + '</h3></article>';
    }).join('') +
    '<div class="podcast-card">' +
      '<div class="pico"><svg class="ico ico-24" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"></rect><path d="M5 10v1a7 7 0 0 0 14 0v-1"></path><line x1="12" y1="18" x2="12" y2="22"></line></svg></div>' +
      '<div class="pmeta"><div class="ptag">Podcast · Free</div>' +
      '<h4 class="t-h4">Field conversations with operators in the China\u2013Indonesia corridor.</h4>' +
      '<div class="psub">New episodes monthly · Spotify · Apple Podcasts · YouTube</div></div>' +
      '<a href="#" class="link-arrow">Listen' + arrow + '</a>' +
    '</div>';

  /* ---- Subscribe form (client-side email validation) ---- */
  var subForm = document.getElementById('sub-form');
  var subEmail = document.getElementById('sub-email');
  var subErr = document.getElementById('sub-err');
  var subSuccess = document.getElementById('sub-success');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  subForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = subEmail.value.trim();
    if (!EMAIL_RE.test(v)) {
      subForm.classList.add('is-error');
      subErr.textContent = 'Please enter a valid email address.';
      subEmail.focus();
      return;
    }
    subForm.classList.remove('is-error');
    subErr.textContent = '';
    subForm.style.display = 'none';
    subSuccess.style.display = 'flex';
  });
  subEmail.addEventListener('input', function () {
    if (subForm.classList.contains('is-error')) {
      subForm.classList.remove('is-error'); subErr.textContent = '';
    }
  });

  /* ---- Book Review cards ---- */
  var BOOKS = [
    { cat: 'Market & Culture', title: 'Indonesia, Etc.', author: 'Elizabeth Pisani',
      take: 'The single best primer on why Indonesia resists a one-size playbook. Required reading before you land.' },
    { cat: 'Cross-border Strategy', title: 'Dealing with China', author: 'Henry M. Paulson Jr.',
      take: 'A pragmatic read on negotiating across the Chinese state and enterprise, from someone who did it at scale.' },
    { cat: 'Relationships', title: 'Guanxi', author: 'Buderi & Huang',
      take: 'How relationship capital actually compounds. We pair it with the Indonesian context it does not cover.' }
  ];
  document.getElementById('book-grid').innerHTML = BOOKS.map(function (b) {
    return '<article class="book-card">' +
      '<div class="ph book-cover"><span class="ph__tag">COVER</span></div>' +
      '<div class="book-card__body">' +
        '<span class="bk-cat">' + b.cat + '</span>' +
        '<h4 class="t-h4">' + b.title + '</h4>' +
        '<span class="bk-author">' + b.author + '</span>' +
        '<p class="bk-take">' + b.take + '</p>' +
        '<a href="#" class="link-arrow">Read review' + arrow + '</a>' +
      '</div></article>';
  }).join('');

  /* ---- Training Subscription: e-learning course cards ---- */
  var playIcon = '<div class="course-card__play"><span><svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></span></div>';
  function durIco() { return '<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>'; }
  function lessonIco() { return '<svg class="ico" viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg>'; }
  var COURSES = [
    { cat: 'Social Media', title: 'Social Media Strategy for Indonesia', free: true, price: 'Free',
      desc: 'Platforms, formats, and posting rhythms that actually move Indonesian audiences.', dur: '1h 40m', lessons: '8 lessons',
      cover: 'COURSE · social feeds' },
    { cat: 'Marketing', title: 'Digital Marketing for the Indonesian Market', free: false, price: 'Rp 500.000',
      desc: 'A full-funnel playbook: paid, organic, and marketplace marketing localized for Indonesia.', dur: '3h 20m', lessons: '14 lessons',
      cover: 'COURSE · campaign dashboard' },
    { cat: 'Regulation', title: 'Navigating Indonesian Business Licensing', free: false, price: 'Rp 750.000',
      desc: 'OSS, KBLI codes, and the permits foreign-owned companies most often get wrong.', dur: '2h 10m', lessons: '10 lessons',
      cover: 'COURSE · permits & documents' },
    { cat: 'Leadership', title: 'Cross-Cultural Team Management', free: true, price: 'Free',
      desc: 'Lead a local Indonesian team without losing what works in your home culture.', dur: '1h 15m', lessons: '6 lessons',
      cover: 'COURSE · team meeting' },
    { cat: 'E-commerce', title: 'E-commerce & Marketplace Playbook', free: false, price: 'Rp 500.000',
      desc: 'Tokopedia, Shopee, and TikTok Shop - listing, pricing, and fulfilment strategy.', dur: '2h 45m', lessons: '12 lessons',
      cover: 'COURSE · marketplace storefront' },
    { cat: 'Consumer Insight', title: 'Indonesian Consumer Behavior 101', free: true, price: 'Free',
      desc: 'How 270 million consumers really decide - regions, religion, and price sensitivity.', dur: '55m', lessons: '5 lessons',
      cover: 'COURSE · street market' }
  ];
  document.getElementById('course-grid').innerHTML = COURSES.map(function (c) {
    return '<article class="course-card">' +
      '<div class="ph course-card__thumb on-dark"><span class="ph__tag">' + c.cover + '</span>' + playIcon +
        '<span class="course-card__price' + (c.free ? ' is-free' : '') + '">' + c.price + '</span></div>' +
      '<div class="course-card__body">' +
        '<span class="c-cat">' + c.cat + '</span>' +
        '<h3 class="t-h3">' + c.title + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '<div class="course-card__meta"><span>' + durIco() + c.dur + '</span><span>' + lessonIco() + c.lessons + '</span></div>' +
      '</div></article>';
  }).join('');

  /* ---- Highlights: latest podcast / webinar / product / campaign ---- */
  var highlightGrid = document.getElementById('highlight-grid');
  if (highlightGrid) {
    highlightGrid.innerHTML =
      '<article class="highlight-card highlight-card--feature highlight-card--podcast">' +
        '<span class="highlight-card__type"><span class="dot"></span>Podcast · Latest Episode</span>' +
        '<div class="highlight-card__date">Ep. 24 · May 2026</div>' +
        '<h3 class="t-h3">Selling to Gen-Z Indonesia: what Chinese brands keep missing.</h3>' +
        '<p>A field conversation with a Jakarta-based brand operator on TikTok-first launches, local KOLs, and pricing for the archipelago.</p>' +
        '<a href="#" class="link-arrow on-dark">Listen now' + arrow + '</a>' +
      '</article>' +
      '<article class="highlight-card">' +
        '<span class="highlight-card__type"><span class="dot"></span>Webinar · Upcoming</span>' +
        '<div class="highlight-card__date">June 18, 2026 · 14:00 WIB</div>' +
        '<h4 class="t-h4">2026 Foreign Investment Rules, Decoded</h4>' +
        '<a href="#" class="link-arrow on-dark">Reserve a seat' + arrow + '</a>' +
      '</article>' +
      '<article class="highlight-card">' +
        '<span class="highlight-card__type"><span class="dot"></span>Product · New</span>' +
        '<div class="highlight-card__date">Just launched</div>' +
        '<h4 class="t-h4">Market Entry Diagnostic toolkit</h4>' +
        '<a href="#" class="link-arrow on-dark">Explore' + arrow + '</a>' +
      '</article>' +
      '<article class="highlight-card">' +
        '<span class="highlight-card__type"><span class="dot"></span>Campaign</span>' +
        '<div class="highlight-card__date">Now open</div>' +
        '<h4 class="t-h4">Bridge Scholarship: 50 local seats</h4>' +
        '<a href="#" class="link-arrow on-dark">See details' + arrow + '</a>' +
      '</article>' +
      '<article class="highlight-card">' +
        '<span class="highlight-card__type"><span class="dot"></span>Campaign</span>' +
        '<div class="highlight-card__date">Q3 2026</div>' +
        '<h4 class="t-h4">"Decoded" report series, vol. 2</h4>' +
        '<a href="#" class="link-arrow on-dark">Get notified' + arrow + '</a>' +
      '</article>';
  }

  /* ---- Training request form ---- */
  var trainForm = document.getElementById('train-form');
  if (trainForm) {
    trainForm.querySelectorAll('.req-pill').forEach(function (p) {
      p.addEventListener('click', function () {
        trainForm.querySelectorAll('.req-pill').forEach(function (x) { x.classList.remove('is-active'); });
        p.classList.add('is-active');
      });
    });
    var trainErr = document.getElementById('train-err');
    var trainSuccess = document.getElementById('train-success');
    trainForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = trainForm.querySelector('[name="name"]').value.trim();
      var email = trainForm.querySelector('[name="email"]').value.trim();
      if (!name || !EMAIL_RE.test(email)) {
        trainForm.classList.add('is-error');
        trainErr.textContent = 'Please enter your name and a valid work email.';
        return;
      }
      trainForm.classList.remove('is-error');
      trainErr.textContent = '';
      trainForm.style.display = 'none';
      trainSuccess.classList.add('is-shown');
    });
  }

  /* ---- Language toggle (EN / ID) - syncs all groups ---- */
  function setLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('data-lang', lang);
    try { localStorage.setItem('8vice-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  var savedLang;
  try { savedLang = localStorage.getItem('8vice-lang'); } catch (e) {}
  if (savedLang) setLang(savedLang);

  /* ---- Hero visual switching (driven by Tweaks) ---- */
  window.__setHeroViz = function (which) {
    document.querySelectorAll('#hero-visual .hero-viz').forEach(function (el) {
      el.hidden = (el.getAttribute('data-viz') !== which);
    });
  };
  window.__setHeroAccent = function (color) {
    document.documentElement.style.setProperty('--hero-accent', color);
  };
  window.__setHeadline = function (html) {
    var h1 = document.querySelector('.hero h1');
    if (h1) h1.innerHTML = html;
  };
})();
