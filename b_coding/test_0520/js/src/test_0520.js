// test_0520.js

(function($){
  // jQuery start

  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var miniProduct = $('#miniProduct');
  var productUl = miniProduct.find('.product');
  var productLi = productUl.children('li');
  
  var check = true;
  var timed = 700;

  // headBox 45px 이상으로 스크롤시 고정해주는 함수
  var headT = function(winScroll){
    if(winScroll>=45){
      headBox.stop().animate({top:0});
    }else{
      headBox.stop().animate({top:'45px'});
    }
  }

  // indicator 생성
  var indi = $('.indicator');
  var indiText = '<div class="indi_color"><ul></ul></div>';
  indi.prepend(indiText);
  var indiColor = $('.indi_color');
  var indiUl = $('.indi_color').children('ul');

  var i = 0;
  var proLiLen = productLi.length;
  for(;i<proLiLen;i++){
    indiUl.append('<li><a href="#"><span>광고 ' + (i+1) + ' 설명</span></a></li>');
  }
  
  // 인디케이터 클릭시 슬라이드 기능 및 색상 변경
  var indiLi = indiUl.children('li');
  indiLi.eq(0).addClass('action');
  
  indiLi.on('click', function(e){
    e.preventDefault();
    var n = $(this).index();
  
    indiLi.eq(n).addClass('action');
    indiLi.eq(n).siblings().removeClass('action');
  
    productUl.stop().animate({left: -n * 100 + '%'}, timed);
    indi.children('span').find('i').text(n+1);
  });

  // 인디케이터 뒤 순서 번호 나타내기
  indiColor.after('<span><i></i> / '+ proLiLen + '</span>');
  indi.children('span').css({marginLeft:'1rem',color:'#fff', fontStyle: 'normal', });
  indi.children('span').children('i').css({fontStyle: 'inherit'});
  indi.children('span').find('i').text('1');

  // next, prev 버튼 클릭시 slide 기능
  var miniBtn = miniProduct.find('.product_btn').find('button');
  var miniBtnNext = $('.product_btn').find('.next');
  var miniBtnPrev = $('.product_btn').find('.prev');

  var cloneLi   = productUl.children('li').eq(-1).clone(true);
  productUl.prepend(cloneLi);
      
  var productLi = productUl.children('li');
  var proLiLen = productLi.length;
  
  productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%', position: 'relative'});
  productLi.width(100 / proLiLen + '%');

  var n = 0;
  miniBtn.on('click', function(e){
    e.preventDefault();
    var thisBtn = $(this)[0];
    
    if(thisBtn === miniBtnNext[0] && check){// next 버튼 클릭시
      check = false;
      n += 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n >= proLiLen - 2){	n = -1;}
        productUl.css({left: -n * 100 + '%'});
        check = true;
      });
    }else if(check) { // prev 버튼 클릭
      check = false;
      n -= 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n <= -1){	n = proLiLen - 2;	}
        productUl.css({left: -n * 100 + '%'});
        check = true;
      });
    }
    indiLi.eq(n).addClass('action');
    indiLi.eq(n).siblings().removeClass('action');
    
    var k = n+1;
    if(k<=0 || k>=6){k=5;}
    if(1<=k && k<=5){indi.children('span').find('i').text(k);}
  });

  // 자동 움직임 -------------------------------------------------------
  var mvImg;
  var mvSlideGo = function(){
    mvImg = setInterval(function(){
      miniBtn.trigger('click');
    }, timed*3);
  };
  
  mvSlideGo();
  
  var ClearFn = function(){clearInterval(mvImg)};
  var GoFn = function(){mvSlideGo()};

  miniProduct.on({'mouseenter':ClearFn, 'mouseleave':GoFn});

  // top 버튼 생성
  var topMvText = '<div class="top_move_btn"><a href="#"><span class="hidden">상단으로 이동</span><i class="fas fa-arrow-up"></i></a></div>';
  viewBox.after(topMvText);

  var topMvBtn = $('.top_move_btn');
  topMvBtn.css({display:'none', position:'fixed',left:'50%',bottom:'3rem',marginLeft:'516px',zIndex:'1000',width:'100px',height:'100px',backgroundColor:'#222'});
  topMvBtn.find('a').css({display:'block',width:'100%',height:'100%',color:'#fff',fontSize:'3rem',lineHeight:'100px',textAlign:'center'});

  // scroll시 headBox 고정과 top버튼 나타내는 동작
  $(window).on('scroll', function(){
    var winScroll = $(window).scrollTop();
    headT(winScroll);
    (winScroll>=300)? topMvBtn.stop().fadeIn(300) : topMvBtn.stop().fadeOut(300);
  });

  topMvBtn.on('click',['a'],function(e){
    $('html, body').animate({scrollTop:0},300);
  });



  // jQuery end
})(jQuery);