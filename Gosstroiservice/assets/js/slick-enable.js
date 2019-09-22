$(document).ready(function(){
    $('.carouselAboutCompany').slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.company-slick-prev'),
        nextArrow: $('.company-slick-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        dots: true
    });
    $('.carouselAboutTeam').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 20000,
        prevArrow: $('.company-slick-prev1'),
        nextArrow: $('.company-slick-next1'),
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        dots: true
    });
});

