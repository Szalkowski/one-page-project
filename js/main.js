$(function () {
    new WOW().init();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $('.header-img').attr("filter", "url(#blur)");
        }
        else {
            $('.header-img').removeAttr( "filter" );
        }
    });
});
