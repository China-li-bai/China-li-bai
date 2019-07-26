//初始化

var w = new WOW({
    boxClass:     'wow',             //动画元素的CSS类 (默认类名 wow)
    animateClass: 'animated',        //动画CSS类 (默认类名 animated)
    offset:       200,                 //距离可视区域多少px时开始执行动画(默认值 0)
    mobile:       true,              //是否在移动设备上执行动画(默认值 true)
});
w.init();

var swiper = new Swiper('#banner .swiper-container',{
    // 垂直
    // direction:'vertical',

    //分页器 调用
    pagination:{ el:'.swiper-pagination'},
    //导航 翻页
    navigation:{nextEl:'.right',
        prevEl: '.left', },
    loop:true,    //循环播放

    // autoplay:true,
    autoplay:{
        delay:2000,
        // stopOnLastSlide: true,  //停在最后一张  在loop下是不适用
        // disableOnInteraction: true,  //用户有操作时 暂停循环播放
    },
    mousewheel:true,
    effect:'coverflow',


    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }}


});
var container=document.getElementsByClassName('swiper-container')[0];
container.onmouseenter=function () {
    swiper.autoplay.stop()
};

container.onmouseleave=function () {
        swiper.autoplay.start()
    }






//    icon 图标动作

$('.iconse a').eq(0).click(function () {
    $('.game').hide().fadeIn().siblings().hide()
})


$('.iconse a').eq(1).click(function () {
    $('.tupiao').hide().fadeIn().siblings().hide()
})


//    icon  ===================
$('.iconse a').click(function () {
    $(this).addClass('color').siblings().removeClass('color')
    $('.game').hide().fadeIn().siblings().hide()
})


$('.iconse a').eq(1).click(function () {
    $(this).addClass('color').siblings().removeClass('color')
    $('.tupiao').hide().fadeIn().siblings().hide()
})


$('.content img').hover(function() {
    $(this).siblings().stop().fadeTo(300,0.3);
    $(this).parent().siblings().stop().fadeTo(300,0.3);
    $(this).css({'transform':'scale(1.5)','transition':'1s'})
},function(){
    $('.content img').stop().fadeTo(300,1);
    $(this).parent().siblings().stop().fadeTo(300,1);
    $(this).css({'transform':'scale(1)','transition':'1s'})
})

//    icon  ==============



//web  点击切换=====================
$('.web .yuan img').click(function () {
   var index= $(this).index();
   $('.main li').eq(index).fadeIn().siblings().fadeOut()
})

//web  点击切换=====================






/* app切换 */
$('.appNav li').click(function () {
    let index =$(this).index();
    $(this).addClass('act').siblings().removeClass('act')
    $('.appContent li').eq(index).stop().fadeIn().siblings().stop().fadeOut()
})



var swiperAppME = new Swiper('#appME.swiper-container', {

    effect: 'coverflow',
    loop:true,
    // autoplay:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var swiperAppHP = new Swiper('#appHP.swiper-container', {

    effect: 'coverflow',
    loop:true,
    // autoplay:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiperAppDD = new Swiper('#appDD.swiper-container', {

    effect: 'coverflow',
    loop:true,
    // autoplay:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



//app===========================================



//C4D ====================
$('#c4d p').hover(function () {
    $(this).addClass(' animated pulse').stop().fadeTo(300,1)
        .siblings().removeClass('animated pulse').stop().fadeTo(300,0.4);
},function () {
    $('#c4d p').stop().fadeTo(300,1)
})





// footer
// $('.footer .lianxi img').mouseenter(function () {
//     $(this).siblings().stop().slideDown();
// 
// })
// 
// $('.footer .lianxi img').mouseleave(function () {
//     $(this).siblings().stop().slideUp();
// 
// })

$('.xmnl img').hover(function () {
    $(this).addClass('animated bounce')
        .siblings().removeClass('animated bounce')
})
$('.zydz img').hover(function () {
    $(this).addClass('animated bounce')
        .siblings().removeClass('animated bounce')
})



















