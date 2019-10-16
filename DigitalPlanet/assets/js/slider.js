$(document).ready(function() {
    $('.steps').slick({
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    dots: true,
                    appendDots: '.slider_buttons',
                    autoplaySpeed: 4000,
                    appendArrows: '.slider_buttons'
                }
            },
        ]
    });
});
