$(function () {

     $('#slider').slick({
        dots: true,
        infinite: false,
        speed: 0,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: false,
        draggable: true,
        swipe: true,
        fade: true
     });
});
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});


