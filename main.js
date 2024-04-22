const primaryHeader = document.querySelector(".primary-header");
const navButton = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");

navButton.addEventListener("click", () => {
  const visibility = primaryNavigation.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNavigation.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
    primaryHeader.setAttribute("data-overlay", true);
  } else if (visibility === "true") {
    primaryNavigation.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
    primaryHeader.setAttribute("data-overlay", false);
  }
});

// AOS
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
