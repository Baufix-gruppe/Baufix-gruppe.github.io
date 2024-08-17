
$(document).ready(function() {
   $('.carousel').carousel({
     interval: 9000
   });
 });

var breakpoint = {
  // Small screen / phone
  sm: 576,
  // Medium screen / tablet
  md: 768,
  // Large screen / desktop
  lg: 992,
  // Extra large screen / wide desktop
  xl: 1200
};

// slick slider
$('#slick').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  draggable: true,
  infinite: true,
  dots: false,
  arrows: false,
  speed: 1000,
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true
      }
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true
      }
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: true
      }
    }
  ]
});
