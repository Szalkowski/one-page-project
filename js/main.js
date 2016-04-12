$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-img').attr("filter", "url(#blur)");
        }
        else {
            $('.header-img').removeAttr( "filter" );
        }
    });
});
