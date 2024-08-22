let small = window.matchMedia("(max-width: 991px)");
let large = window.matchMedia("(min-width: 992px)");

$(document).ready(function() {
    AOS.init();
    if(large.matches) {
        scrollHandler();
    }
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,     
        loop: true,
        autoPlay: true,
        speed: 1000,
        slidesPerView: 1.1,
        breakpoints: {
            992: {
                slidesPerView: 4,                
            }
        }
      });
});
$(window).bind('scroll', function () {
    scrollHandler();
});
function scrollHandler() {
    if ($(window).scrollTop() > 115) {
        $('header nav.navbar').addClass('scrolling');
    } else {
        $('header nav.navbar').removeClass('scrolling');
    }
}