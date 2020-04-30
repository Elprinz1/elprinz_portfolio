// Sellect Document object model (DOM) items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");
const smHeading = document.querySelector(".sm-heading");
const icons = document.querySelector(".lg-heading");

// Set Initial state of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));
    smHeading.classList.add("slide-down");
    icons.classList.add("slide-down");

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));
    smHeading.classList.remove("slide-down");
    icons.classList.remove("slide-down");

    // set menu state
    showMenu = false;
  }
}
