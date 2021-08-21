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

$(".icons-menu-carousel").owlCarousel({
  loop: true,
  dots: true,
  nav: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 10000,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 5,
      autoplay: false,
      loop: false,
      dots: false,
    },
  },
});

$(".manufacturers-carousel").owlCarousel({
  loop: true,
  dots: true,
  nav: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 11000,
  animateIn: "fadeIn", // add this
  animateOut: "fadeOut", // and this
  responsive: {
    0: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
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

$(".year").append(new Date().getFullYear());

var height = $("header").height();
$(".main-banner").css({ height: "calc(80vh - " + height + "px)" });

// Owl Carousel with Thumbnails
var sync1 = $(".thumbnail-carousel-slider");
var sync2 = $(".carousel-thumbs");
var thumbnailItemClass = ".owl-item";

var slides = sync1
  .owlCarousel({
    video: true,
    startPosition: 12,
    items: 1,
    loop: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
  })
  .on("changed.owl.carousel", syncPosition);

function syncPosition(el) {
  $owl_slider = $(this).data("owl.carousel");
  var loop = $owl_slider.options.loop;

  if (loop) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
  } else {
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data("owl.carousel");
  var itemClass = "." + owl_thumbnail.options.itemClass;

  var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

  thumbnailCurrentItem.addClass("synced");

  if (!thumbnailCurrentItem.hasClass("active")) {
    var duration = 300;
    sync2.trigger("to.owl.carousel", [current, duration, true]);
  }
}
var thumbs = sync2
  .owlCarousel({
    startPosition: 12,
    items: 4,
    loop: false,
    margin: 10,
    autoplay: false,
    nav: false,
    dots: false,
    onInitialized: function (e) {
      var thumbnailCurrentItem = $(e.target)
        .find(thumbnailItemClass)
        .eq(this._current);
      thumbnailCurrentItem.addClass("synced");
    },
  })
  .on("click", thumbnailItemClass, function (e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex = $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
  })
  .on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data("owl.carousel");
    $owl_slider.to(number, 100, true);
  });
