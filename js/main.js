$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50){
            $('.mast-header').css({'-webkit-filter': 'blur(7px)', '-moz-filter': 'blur(7px)', 'filter': 'blur(7px)'});
        } else {
            $('.mast-header').css({'-webkit-filter': 'blur(0px)', '-moz-filter': 'blur(0px)', 'filter': 'blur(0px)' });
        }
});
});
