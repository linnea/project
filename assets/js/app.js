$(document).ready(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});
