$(function(){
    $('.hamburger-menu').on('click',function(){
        $(this).toggleClass('close');
        $('.header-nav-sp').fadeToggle(500);
        $('body').toggleClass('noscroll');
    });
    if($(window).width() < 768){
        $('.header-nav-sp>ul>li>a').on('click',function(){
            $('.header-nav-sp').fadeOut(500);
            $('.hamburger-menu').removeClass('close');
            $('body').removeClass('noscroll');
        });
    }
});

