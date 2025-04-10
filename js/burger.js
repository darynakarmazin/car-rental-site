const burgerBtns = document.querySelectorAll(".burger-btn");
const burgerIcons = document.querySelectorAll(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.body;
const navLinks = document.querySelectorAll(".nav-menu a");

burgerBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");

    burgerIcons.forEach((icon) => {
      icon.classList.toggle("active");
    });

    if (burgerMenu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    burgerMenu.classList.remove("active");

    burgerIcons.forEach((icon) => {
      icon.classList.remove("active");
    });

    body.style.overflow = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  function toggleHeaderClass() {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", toggleHeaderClass);
  toggleHeaderClass();
});
