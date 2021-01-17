const toggle_menu = document.getElementById("toggle-menu");
const close = document.getElementById("close");
const Nav = document.querySelector(".nav-menu");
const Header = document.getElementById("header");

/////////////////Togle Menu
toggle_menu.addEventListener("click", () => {
  Nav.classList.toggle("open");
});
close.addEventListener("click", () => {
  Nav.classList.remove("open");
});

//////////////////navbar
window.addEventListener("scroll", () => {
  Header.classList.toggle("bg", window.scrollY > 50);
});

$(function () {
  ////////////////////////////Loader
  window.onload = function () {
    window.setTimeout(fadeout, 400);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }
  /////////////////////////Carousel
  $("#testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 1200,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $("#universities-carousel").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
