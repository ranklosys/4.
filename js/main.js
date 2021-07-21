$(function(){
    
    var winWidth=$(window).width();
    if (winWidth>480){
        $('header nav').show();
        $('.mo_menu').hide();
        
    $('.sitemap').hide();
    $('.menu_btn').click(function(){
        $('.sitemap').show();
    });
    $('.site_close').click(function(){
        $('.sitemap').hide();
    });


    //main slide 

    var num=0;
    var total=$('.photo').length
    var imgHeight=$('.photo').height();

    //1
    $('.photo').css('z-index',1);
    $('.p1').css('z-index',5);
    $('.small').hide();
    $('.small:first').show();
    $('.txt').removeClass('active').hide();
    $('.txt:first').show().addClass('active');
    $('.numbering a').hide();
    $('.numbering a:first').show();

    $('.next_btn').click(function(){
        clearInterval(auto);
        auto=setInterval(movefn,10000);
        barfn();
        num++;
        if(num>=total) {num=0;}
        $('.photo').each(function(){
            var imgNum=$(this).index();
            if(num==imgNum){
                $('.photo').css('z-index',1);
                $(this).css({'top':imgHeight, 'z-index':5});
                $(this).animate({'top':0},500,'easeOutExpo');
                $(this).prev().css('z-index',3);
            }
        });
        $('.small').each(function(){
            var centerNum=$(this).index();
            if(num==centerNum){
                $('.small').fadeOut();
                $(this).fadeIn();
            }
        });
        $('.numbering a').each(function(){
            var aNum=$(this).index();
            if(num==aNum){
                $('.numbering a').hide();
                $(this).show();
            }
        });
        $('.txt').each(function(){
            var txtNum=$(this).index();
            if(num==txtNum){
                $('.txt').removeClass('active').hide();
                $(this).show().addClass('active');
            }
        });
    });


    $('.prev_btn').click(function(){
        num--;
        if(num<0) {num=total-1;}
        $('.photo').each(function(){
            var imgNum=$(this).index();
            if(num==imgNum){
                // $('.photo').css('z-index',1);
                // $(this).css({'top':imgHeight, 'z-index':5});
                // $(this).animate({'top':0});
                // $(this).prev().css('z-index',3);
                
                $('.photo').css('z-index',3);
                $(this).next().css('z-index',4);
                $(this).prev().css('z-index',1);
                $(this).css({'top':imgHeight, 'z-index':5});
                $(this).animate({'top':0},500,'easeOutExpo');
            }
        });
        $('.small').each(function(){
            var centerNum=$(this).index();
            if(num==centerNum){
                $('.small').fadeOut();
                $(this).fadeIn();
            }
        });
        $('.numbering a').each(function(){
            var aNum=$(this).index();
            if(num==aNum){
                $('.numbering a').hide();
                $(this).show();
            }
        });
        $('.txt').each(function(){
            var txtNum=$(this).index();
            if(num==txtNum){
                $('.txt').removeClass('active').hide();
                $(this).show().addClass('active');
            }
        });
    });

    var auto=setInterval(movefn, 10000);
    function movefn(){
        $('.next_btn').trigger('click');
        barfn();
    }
    function barfn(){
        $('.bar').stop()
        $('.bar').animate({'width':'0'},0);
        $('.bar').animate({'width':'100%'},9000,)
        };
    
    barfn();

    $('.box_hover').mouseover(function(){
        var x=Math.ceil(Math.random()*50);
        var y=Math.ceil(Math.random()*50);
        var truex=x-25
        var truey=y-25
        
        $(this).find('.box_move').stop().animate({'left':truex,'top':truey},500)
    });

    var sw=0;
    $('.box_btn').click(function(e){
        var ulMove=Math.ceil($('.box > div').width()/2);
        e.preventDefault();
        if(sw==0){
            sw=1
            $('.box_btn').css('background-position','left center');
            $('.box > div').stop().animate({left:-ulMove},700);
        }else{
            sw=0
            $('.box_btn').css('background-position','right center');
            $('.box > div').stop().animate({left:0},700);
        }
    });

    
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        // navigationTooltips: ['MAIN','Production','HIT','Customer Center'],
        // showActiveTooltip: ture,
        // afterLoad:function(anchorLink, Index, direction){
        //     if(index==2 || index==4 ){
        //         $('header nav > div > div').addClass('active');
        //     }
        //     if(index==1 || index==3 ){
        //         $('header nav > div > div').removeClass('active');
        //     }
        // },
        onLeave:function(index, nextIndex, direction){
            if(index==4 && nextIndex==5){
                $('header').fadeOut();
            }else{
                $('header').fadeIn();
            }
        }
    });


    var contentheight=$('.place_wrap .content').outerWidth();
    $('.place_wrap .content').css('height',contentheight)


    }else{
        $('header nav').hide();
        $('.sitemap').hide();   
        
        $('.mo_menu').hide();
        $('.menu_btn').click(function(){
            // if(winWidth>=1600){
            //     $('.sitemap').show();
            // }else{
                $('.mo_menu').show();
            // }
            
        });
        $('.mo_close').click(function(){
            $('.mo_menu').hide();
        });

        $('.mo_nav .sub').hide();
        $('.mo_nav > div > div').click(function(){

            //만약 클릭한 메뉴에 active가 설정되어 있지 않다면
            if($(this).attr('class') != 'active'){
                $('.mo_nav > div > div').removeClass('active');
                $(this).addClass('active');
                $('.mo_nav .sub').slideUp();
                $(this).find('.sub').slideToggle();
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').slideUp();
            }
        })

        var mo_num=0;
        var mo_total=$('.photo').length;
        var imgWidth=$('.photo').width();
        $('.photo').show();
        $('.small').show();
        $('.photo:last-child').prependTo('.slide')
        $('.small:last-child').prependTo('.center_img');
        $('.left_img').css('left',-imgWidth);
        $('.center_img').css('left',-imgWidth);
        $('.numbering a:first-child').addClass('active');
        $('.right_txt .txt:first-child').addClass('active');


        $('.next_btn').click(function(){
            mo_num++;
            if(mo_num>=mo_total){mo_num=0;}
            $('.numbering a').eq(mo_num-1).removeClass('active');
            $('.numbering a').eq(mo_num).addClass('active');
            $('.txt').eq(mo_num-1).removeClass('active');
            $('.txt').eq(mo_num).addClass('active');


            $('.left_img').animate({left:'-='+imgWidth},700,'easeOutExpo',function(){
                $('.photo:first-child').appendTo('.left_img');
                $('.left_img').css('left',-imgWidth);
            });
            $('.center_img').animate({left:'-='+imgWidth},700,'easeOutExpo',function(){
                $('.small:first-child').appendTo('.center_img');
                $('.center_img').css('left',-imgWidth);
            });
        });
        $('.prev_btn').click(function(){
            mo_num--;
            if(mo_num<0){mo_num=mo_total-1;}
            $('.numbering a:not(:eq(mo_num))').removeClass('active');
            $('.numbering a').eq(mo_num).addClass('active');
            $('.txt:not(:eq(mo_num))').removeClass('active');
            $('.txt').eq(mo_num).addClass('active');


            $('.left_img').animate({left:'+='+imgWidth},700,'easeOutExpo',function(){
                $('.photo:last-child').prependTo('.left_img');
                $('.left_img').css('left',-imgWidth);
            });
            $('.center_img').animate({left:'+='+imgWidth},700,'easeOutExpo',function(){
                $('.small:last-child').prependTo('.center_img');
                $('.center_img').css('left',-imgWidth);
            });
        });

        var mo_width=$('.mo_box > div > div').outerWidth();
        $('.mo_box > div > div:last-child').prependTo('.mo_box > div');
        $('.mo_box > div').css('left',-mo_width);

        var startX={};
        var endX={};
        $('.mo_box > div').on({
            // touchstart이벤트 설정, e - 이벤트 전달 변수
            'touchstart':function(e){
                //e.touches[0] - 터치 이벤트가 발생한 객체
                //pageX - 가로스크롤을 포함한 브라우저 화면을기준으로 한 x좌표
                // 정리하자면, 드래그 시작 지점의 x좌표값을 저장
                startX=e.touches[0].pageX;
            },
            'touchmove':function(e){
                //드래그가 끝난 지점의 x좌표값을 저장
                endX=e.touches[0].pageX;
                //위 두 저장값의 차를 저장(음수일 경우 오른쪽, 양수일 경우 좌쪽)
                var fnX=startX-endX;
                if(fnX>0){
                    $('.mo_box > div').stop().animate({'left':'-='+mo_width},700,'easeOutExpo',function(){
                        $('.mo_box > div > div:first-child').appendTo('.mo_box > div');
                        $('.mo_box > div').css('left',-mo_width);
                    });
                }else{
                    $('.mo_box > div').stop().animate({'left':'+='+mo_width},700,'easeOutExpo',function(){
                        $('.mo_box > div > div:last-child').prependTo('.mo_box > div');
                        $('.mo_box > div').css('left',-mo_width);
                    });
                }
            }
        });

        var rectheight=$('.place_wrap .rect').outerWidth();
        $('.place_wrap .place > div> div').css('height',rectheight)
    }





});