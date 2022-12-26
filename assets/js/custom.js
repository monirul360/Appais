(function ($) {
    "use strict";

    //Mobile Menu
    $(".mobile-menu").click(function () {
        $(".main-nav").toggleClass("slide");
    });

    //Testimonial slider
    var swiper = new Swiper(".testimonial-thumb", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        centeredSlides: true,
        watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".testimonial-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        },
    });

    //App showcase slider
    var swiper = new Swiper(".app-showcase-slider", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

}(jQuery));
