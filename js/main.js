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

  // Lightbox: click post images for larger preview
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector(".lightbox-backdrop img");
    var lightboxBackdrop = lightbox.querySelector(".lightbox-backdrop");
    var lightboxClose = lightbox.querySelector(".lightbox-close");

    function openLightbox(img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Preview";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".post-featured img, .post-inline-figure img").forEach(function (img) {
      img.addEventListener("click", function () {
        openLightbox(img);
      });
    });

    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener("click", closeLightbox);
    }
    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
})();
