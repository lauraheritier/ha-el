$(document).ready(function() {
    scrollHandler();
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoPlay: true,
        speed: 1000
      });
});
function scrollHandler() {
    if ($(window).scrollTop() > 115) {
        $('header nav.navbar').addClass('scrolling');
    } else {
        $('header nav.navbar').removeClass('scrolling');
    }
}