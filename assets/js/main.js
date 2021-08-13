$("#main-banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  freeDrag: false,
  pullDrag: false,
  touchDrag: false,
  mouseDrag: false,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 1,
    },
  },
});

$("#on-sale").owlCarousel({
  loop: false,
  dots: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 7000,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".search-box").focus(function () {
  $(".suggestion-box").addClass("d-block");
  $(".suggestion-box").removeClass("d-none");
});

$(".search-box").focusout(function () {
  $(".suggestion-box").addClass("d-none");
  $(".suggestion-box").removeClass("d-block");
});

$("#year").append(new Date().getFullYear());
