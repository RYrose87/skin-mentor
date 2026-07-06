// Skin Mentor starter scripts.
// Keep this file small and dependency-free for GitHub Pages and Vercel.

document.addEventListener('DOMContentLoaded', function () {
  var yearElements = document.querySelectorAll('[data-current-year]');
  var currentYear = new Date().getFullYear();
  var navToggle = document.querySelector('[data-nav-toggle]');
  var siteNav = document.querySelector('[data-site-nav]');
  var navLinks = document.querySelectorAll('a[href^="#"]');

  yearElements.forEach(function (element) {
    element.textContent = currentYear;
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');

      if (!targetId || targetId === '#') {
        return;
      }

      var targetElement = document.querySelector(targetId);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (siteNav && navToggle && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
