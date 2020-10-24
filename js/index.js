$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    });

    //main title에 있는 menu link 클릭 시 해당 섹션으로 이동
    var $menu = $('.bot_txt ul li');//main title에 있는 menu link
    var $contents = $('.container > div');//해당 섹션

    $menu.click(function(){//menu link 클릭 시
        var idx = $(this).index();//메뉴 인덱스 변수 지정
        var section = $contents.eq(idx);//해당 페이지 인덱스 지정
        if(idx == 2) {
            var section = $contents.eq(3);
            $('html').stop().animate({scrollTop:sectionDistance});
        }
        var sectionDistance = section.offset().top;
        $('html').stop().animate({scrollTop:sectionDistance});
    });

    //scrollTop scroll event 스크롤 이벤트 - 헤더 높이 조정, top버튼 등장
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},700);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    //box1 스페셜 할인 쿠폰 - 쿠폰 유의 사항
    $('.bot_txt1 a').on('click',function(){
        $('.container .box1').toggleClass('on');

        const arrow = $('.container .box1').hasClass('on');
        if(arrow) {
            $(this).children().attr({"src":"images/arrow_up.png"});
        } else {
            $(this).children().attr({"src":"images/arrow_view.png"});
        }
    });

    //box2 베스트 추천템 - 공유 이벤트 유의사항
    $('.bot_txt2 a').on('click',function(){
        $('.container .box2').toggleClass('on');

        const arrow = $('.container .box2').hasClass('on');
        if(arrow) {
            $(this).children().attr({"src":"images/arrow_up.png"});
        } else {
            $(this).children().attr({"src":"images/arrow_view.png"});
        }
    });
});