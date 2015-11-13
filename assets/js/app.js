// Changes number of carousel elements based on viewport

$(document).ready(function() {
    var carousel = $('.carousel');
    var viewportWidth = $(window).width();
    if (viewportWidth < 640) {
        carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    } else if (viewportWidth < 1024) {
        carousel.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    } else {
        carousel.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }
    var carouselResize = function(viewportWidth) {
        if (viewportWidth < 640) {
            carousel.slick('setOption', 'slidesToShow', 1);
            carousel.slick('setOption', 'slidesToScroll', 1);
        } else if (viewportWidth < 1024) {
            carousel.slick('setOption', 'slidesToShow', 2);
            carousel.slick('setOption', 'slidesToScroll', 2);
        } else {
            carousel.slick('setOption', 'slidesToShow', 3);
            carousel.slick('setOption', 'slidesToScroll', 3);
        }
    };

    $('.carousel--single').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(window).resize(function(viewportWidth) {
        carouselResize($(window).width());
    });
});
