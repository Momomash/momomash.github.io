//transform burger in menu
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }
    ;

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

//left dropdown menu
function dropdownmenu() {
    $('.dropdown_menu').toggleClass('dropdown_menu__open');
}

// scrolling menu background

var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 10) {
        $(".menu_block").css({"background": "#ffffff"})
        $(".logo").css({"color": "#000000"})
        $(".c-hamburger span").css({"background": "#000000"})
    }
    if (10 > scrolled) {
        $(".menu_block").css({"background": "transparent"})
        $(".logo").css({"color": "#ffffff"})
        $(".c-hamburger span").css({"background": "#ffffff"})
    }

}

//reviews slider show all text

$('.show_text').on('click', function () {
    if ($(this).prev().is(':visible')) {
        $(this).text('Прочитать полностью');
        $(this).prev().hide('slow');
        $('.shadow-block').addClass('shadow');
    } else {
        $(this).text('Скрыть');
        $(this).prev().show('slow');
        $('.shadow-block').removeClass('shadow');

    }
});

//animation scrolling to anchor

$(document).ready(function(){
    $("#anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});