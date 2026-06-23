/* 8VICE — inner-page interactions: tabs + accordion + simple forms */
(function () {
  'use strict';

  /* Tabs */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    var panels = document.querySelectorAll('[data-panel]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var name = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
        panels.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-panel') === name); });
        if (history.replaceState) history.replaceState(null, '', '#' + name);
      });
    });
    // open from hash
    var hash = (location.hash || '').replace('#', '');
    if (hash) { var match = group.querySelector('.tab[data-tab="' + hash + '"]'); if (match) match.click(); }
  });

  /* Accordion */
  document.querySelectorAll('.acc-trigger').forEach(function (trig) {
    trig.addEventListener('click', function () {
      var item = trig.closest('.acc-item');
      var body = item.querySelector('.acc-body');
      var open = item.classList.toggle('is-open');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
    });
  });

  /* Generic demo forms -> success state */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      var err = form.querySelector('.field-err');
      if (email && !EMAIL.test(email.value.trim())) {
        if (err) err.textContent = 'Please enter a valid email address.';
        email.focus(); return;
      }
      if (err) err.textContent = '';
      var success = form.parentElement.querySelector('[data-success]');
      if (success) { form.style.display = 'none'; success.style.display = 'flex'; }
    });
  });

  /* Format pills (training request) */
  document.querySelectorAll('.req-pills').forEach(function (group) {
    group.querySelectorAll('.req-pill').forEach(function (p) {
      p.addEventListener('click', function () {
        group.querySelectorAll('.req-pill').forEach(function (x) { x.classList.remove('is-active'); });
        p.classList.add('is-active');
      });
    });
  });
})();
