let small = window.matchMedia("(max-width: 991px)");
let large = window.matchMedia("(min-width: 992px)");

$(document).ready(function() {
    if(large.matches) {
        scrollHandler();
    }
    if(small.matches) {
        $("header .nav-link").on("click", function() {
            $("#menu-toggle").prop("checked", false);
        });
    }
    const swiper = new Swiper('.swiper', {        
        loop: true,
        autoPlay: true,
        speed: 1000,
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
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