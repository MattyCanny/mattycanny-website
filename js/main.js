(function () {
  "use strict";

  // Parallax: hero background moves slower as you scroll
  var parallaxLayer = document.querySelector(".parallax-layer");
  if (parallaxLayer) {
    var onScroll = function () {
      var y = window.scrollY ?? window.pageYOffset;
      parallaxLayer.style.setProperty("--parallax-y", y * -0.4 + "px");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }
})();
