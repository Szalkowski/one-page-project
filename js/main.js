$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.mast-header').addClass('header-bg-blur');
        }
        else {
            $('.mast-header').removeClass('header-bg-blur');
        }
    });
});
