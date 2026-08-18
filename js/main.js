(function () {
  'use strict';

  // Header shadow on scroll
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      var open = mobileMenu.hasAttribute('hidden') === false;
      if (open) {
        mobileMenu.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.removeAttribute('hidden');
        burger.setAttribute('aria-expanded', 'true');
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.setAttribute('hidden', '');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
