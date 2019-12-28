//scrolling fixed white menu
var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 70) {
        $(".js_header").removeClass('header_transparent');
        $(".js_navbar").removeClass('navbar_brand__white');
        $(".js_navbar_text").removeClass('navbar_brand__text_white');
    }
    if (70 > scrolled) {
        $(".js_header").addClass('header_transparent');
        $('.js_navbar').addClass('navbar_brand__white');
        $('.js_navbar_text').addClass('navbar_brand__text_white');
    }
};

// //homepage slider
// $(document).ready(function() {
//     $('.header_slider').slick({
//         slidesToShow: 1,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 4000,
//         dots: true,
//         appendDots: $('.dots_container')
//
//     });
// });
// $(document).ready(function() {
//     $('.project_slider').slick({
//         slidesToShow: 1,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 4000,
//         dots: true
//
//     });
// });

//scroll yak link
 $(document).ready(function(){
    $(".nav-yak").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

