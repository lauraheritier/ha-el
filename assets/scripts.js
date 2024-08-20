let small = window.matchMedia("(max-width: 991px)");
let large = window.matchMedia("(min-width: 992px)");

$(document).ready(function() {
    if(large.matches) {
        scrollHandler();
    }    
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoPlay: true,
        speed: 1000
      });
});
$(window).bind('scroll', function () {
    scrollHandler();
});
function scrollHandler() {
    if ($(window).scrollTop() > 115) {
        $('header.desktop nav.navbar').addClass('scrolling');
    } else {
        $('header.desktop nav.navbar').removeClass('scrolling');
    }
}