$(document).ready(function () {
    //添加固定头部颜色
    var scrollTop;
    $(window).scroll(function () {
        scrollTop=$(document).scrollTop();
        if(scrollTop>0){
            $('.top').css('display','block');
            $('nav .nav-inner').addClass('active');
        }else{
            $('.top').css('display','none');
            $('nav .nav-inner').removeClass('active');
        }

        //bussiness下移
        if(scrollTop>$('.bussiness-center').offset().top&&scrollTop<$('.bussiness-center').offset().top+$('.bussiness-center').height()){
            $('.bussiness-inner').css('transform','translateY('+-($('.bussiness-center').offset().top-scrollTop)+'px)')
        }


        //设置移动端下移
        if(scrollTop>=$('.mobel').height()*2&&scrollTop<=$('.mobel').height()*3){
            $('.mobel-center').css('transform','translateY('+-($('.mobel').height()*2-scrollTop)+'px)');
        }

        //设置种类帧动画
        if(scrollTop>=$('.kindcase2').scrollTop()+$('.kindcase2').height()){
            $('.kindcase2.active>a').addClass('active')
        }
        //设置种类下移
        if(scrollTop>=$('.kind-center').scrollTop()+$('.kind-center').height()&&scrollTop<=$('.kind-center').scrollTop()+$('.kind-center').height()*2){
            $('.kind-center').css('transform','translateY('+-($('.kind-center').scrollTop()+$('.kind-center').height()-scrollTop)+'px)')
        }
        //banner图下移
        if(scrollTop>$(window).height()){
            return;
        }
        $('.center-img').css('transform','translateY('+scrollTop+'px)')

    })

    $('.top').click(function () {
        $(document.body).animate({scrollTop:0},1000,function () {
            console.log($(document.body).scrollTop())
        })
    });
    //设置种类初选项卡
    $('ul>li').click(function () {
        $('ul>li').removeClass('active');
        $(this).addClass('active');
        var now = $(this).index();
        $('.kindcase2').removeClass('active').eq(now).addClass('active').children('a').addClass('active')
    })

    //小屏状态下选项卡
    //屏幕改变时清除选项卡
    var rg = $('.kindcase1.active').index()/2;
    $('.kindcase1').click(function () {
        $('.kindcase1').removeClass('active');
        var now = $(this).index()/2;
        if(rg==now){
            $(this).removeClass('active');
            $('.kindcase2').removeClass('active').eq(now).removeClass('active');
        }else{
            rg=now;
            $(this).addClass('active');
            $('.kindcase2').removeClass('active').eq(now).addClass('active').children('a').addClass('active')
        }
    })

    //利用swiper设计轮播图
    var swiper = new Swiper('.mobel .swiper-container',{
        centeredSlides: true,
        paginationClickable: true,
        grabCursor: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    })

    //customers
    var swipers = new Swiper('.customers .swiper-container',{
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        slidesPerColumn: 2,
        grabCursor: true
    })




})