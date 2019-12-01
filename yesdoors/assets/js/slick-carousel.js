$(window).on('resize', function (e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".doors-slider").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 992) {
        // Если слайдер не запущен
        if (init !== 1) {
            // Запускаем слайдер и записываем в data init-slider = 1
            $('.doors-slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 2000,
                dots: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },

                ]
            }).data({'init-slider': 1});
        }
    }
    // Если десктоп
    else {
        // Если слайдер запущен
        if (init === 1) {
            // Разрушаем слайдер и записываем в data init-slider = 0
            $('#card-box').slick('unslick').data({'init-slider': 0});
        }
    }
}).trigger('resize');

$('.reviews-block').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

    ]
});

