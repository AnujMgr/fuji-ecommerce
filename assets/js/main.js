$(".main-banner-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 8000,
  touchDrag: true,
  mouseDrag: true,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".on-sale-carousel").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  margin: 20,
  autoplayTimeout: 9000,
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
      autoplay: false,
      loop: false,
    },
  },
});

$(".icons-menu-carousel").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 10000,
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
      autoplay: false,
      loop: false,
    },
  },
});

$(".manufacturers-carousel").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 11000,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
      autoplay: false,
      loop: false,
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

var height = $("header").height();
$(".main-banner").css({ height: "calc(80vh - " + height + "px)" });
