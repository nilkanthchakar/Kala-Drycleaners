/**
 * Kala Drycleaners — Main JavaScript
 * Handles: sticky navbar shadow, mobile menu toggle,
 * active nav link highlighting, and smooth scroll.
 */

(function () {
  "use strict";

  // ── DOM References ──
  var navbar = document.getElementById("navbar");
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  var navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];
  var sections = document.querySelectorAll("section[id]");

  // ── Sticky Navbar Shadow on Scroll ──
  function handleNavbarShadow() {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // ── Mobile Menu Toggle ──
  function toggleMenu() {
    if (!menuToggle || !navLinks) return;
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  }

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  }

  // ── Active Navigation Link Highlighting ──
  function highlightActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // ── Event Listeners ──
  window.addEventListener("scroll", function () {
    handleNavbarShadow();
    highlightActiveLink();
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Close mobile menu when a nav link is clicked
  navAnchors.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Run on page load
  handleNavbarShadow();
  highlightActiveLink();
})();
