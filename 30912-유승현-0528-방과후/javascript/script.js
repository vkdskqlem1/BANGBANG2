$('.main > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown();
});

$('.main > li').mouseout(function(){
    $(this).children('.sub').stop().slideUp();
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.imgslide');
},3000);