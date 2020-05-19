// jq_slide_banner_03.js


(function($){
  //result

  var miniProduct = $('#miniProduct');
  var miniBtn = miniProduct.find('button');
  var miniBtnNext = miniProduct.find('.next');
  var miniBtnPrev = miniProduct.find('.prev');
  var timed = 500;
  // -----------------------------------------------------
  // 버튼 태그 확인
  // miniBtn.on('click', function(e){
  //   // console.log( $(this) );
  //   // console.log('next:', miniBtnNext);
  //   // console.log('next:', miniBtnPrev);
  //   var t = $(this)[0];
  //   console.log( t == miniBtnNext[0]);
  // });
  // -----------------------------------------------------
  var productWrap = $('.product_wrap');
  var productUl = miniProduct.find('.product');
  // fade 기능을 위해 clone 주석 처리함
  // var cloneLi   = productUl.children('li').eq(-1).clone(true);
  //     productUl.prepend(cloneLi);
  
  var productLi = productUl.children('li');
  var proLiLen  = productLi.length;
  console.log(proLiLen);
  
  // slide 기능을 위한 ul, li width값 설정
  // productUl.width(proLiLen * 100 + '%');
  productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%', position: 'relative'});
  productLi.width(100 / proLiLen + '%');

  var n = 0;
  var i = 0;
  var check = true;

  // ------------------------------------------------------------------------------------
  // .indicator_color 생성
  // indicator 기능 추가(indicator_color)
  // 광고 갯수만큼(복제처리제외) indicator 처리

  var miniProIndiBtnArea = miniProduct.find('.indicator');

  miniProIndiBtnArea.after('<div class = "indi_color hidden_wrap"><ul></ul></div>');
  var miniProIndiUl = $('.indi_color').children('ul');

  for(;i<proLiLen;i++){
    miniProIndiUl.append('<li><a href=""><span>광고 ' + (i+1) + ' 설명</span></a></li>');  
  }
  $('head').append('<style></style>');

  // 인디케이터 뒤에 순서 나타내는 태그 생성 - result
  var indiColor = $('.indi_color');
  indiColor.append('<p><span class="n_count">1</span>/<span class="t_count">5</span></p>');

  var indicatorColorCount = '.indi_color p {float:right; width:40px; background-color:#caf;}';
  $('head').find('style').append(indicatorColorCount);

  $('.n_count').text(n+1);
  $('.t_count').text(proLiLen);
  // 인디케이터 뒤에 순서 나타내는 태그 생성함 
  // chaeeun version
  /*
  indiColor.append('<span><i></i> / '+ proLiLen + '</span>');
  indiColor.find('span').css({float:'right'});
  indiColor.find('i').text('1');*/
  

  // $('head').append('<style></style>');
  // var styleEl = $('head').find('style');
  // var styleT = ".pr_01{\background-image: url('../../img/cake/2412_small_img');}\
  //               .pr_02{background-image: url('../../img/cake/2413_small_img');}\
  //               .pr_03{background-image: url('../../img/cake/2414_small_img');}\
  //               .pr_04{background-image: url('../../img/cake/2415_small_img');}\
  //               .pr_05{background-image: url('../../img/cake/2416_small_img');} ";
  
  // styleEl.text(styleT);

  // fadeIn, fadeOut 기능을 위한 css 재설정 ---------------------------------------
  productUl.width(100+'%');
  productUl.css({marginLeft:0});
  productLi.css({width:100+'%', float:'none'});

  // indicator fadeIn/Out 처리 ---------------------------------------------------
  var miniProIndiLi = miniProIndiUl.find('li').children('a');
  miniProIndiLi.parent().eq(0).addClass('action');

  miniProIndiLi.on('click',function(e){
    e.preventDefault();
    var thisParent = $(this).parent();
    n = thisParent.index();

    thisParent.addClass('action');
    thisParent.siblings().removeClass('action');

    // productUl.stop().animate({left: -n * 100 + '%'}, timed);
    productLi.eq(n).siblings().fadeOut(timed);
    productLi.eq(n).fadeIn(timed);
    $('.n_count').text(n+1);
    // indiColor.find('i').text(n+1);
    
  });
  
 
  var prSpan = productLi.find('span');
  prSpan.css({bottom:-100+'%'});

  var FadeFn = function(n,k){
    if(k!==n){ 
      $('.n_count').text(n+1);
      productLi.eq(n).css({zIndex:5, display:'block'});
      miniProIndiLi.parent().eq(n).addClass('action');
      miniProIndiLi.parent().eq(n).siblings().removeClass('action');

      productLi.eq(k).fadeOut(timed,function(){
        prSpan.css({bottom:0});
        productLi.eq(n).css({zIndex:10});
        productLi.eq(n).siblings('li').css({zIndex:0});
        // indiColor.find('i').text(n+1);
        check = true;
      });
    }
  }

  // 버튼 기능 합치기 fadeIn, fadeOut --------------------------------------------
  miniBtn.on('click',function(e){
    e.preventDefault();
    var k = n;
    var thisBtn = $(this)[0];
    // next 버튼 클릭시
    prSpan.css({bottom:-100+'%'});

    if(thisBtn === miniBtnNext[0] && check){
      //$(this)[0]===$('.next'[0] && bool)
      check = false;

      //result
      (n>=productLi.length-1)? n=0 : n+=1;
      FadeFn(n,k);

      // chaeeun version
      /*
      n += 1;      
      productLi.eq(n).siblings().fadeOut(timed);
      
      productLi.eq(n).fadeIn(timed, function(){
        if(n >= proLiLen - 1){	n = -1;	 }
        prSpan.css({bottom:0});
        productLi.eq(n).fadeIn(timed);
        // productUl.css({left: -n * 100 + '%'});
        check = true;
       });
       */

    }else if($(this)[0]===$('.prev')[0] && check){ // prev 버튼 클릭시
      //$(this)[0]===$('.prev'[0] && bool)
      check = false;

      // result
      (n<=0)? n=productLi.length-1 : n-=1;
      FadeFn(n,k);

      // chaeeun version
      /*
      n -= 1;
      productLi.eq(n).siblings().fadeOut(timed);
      
      productLi.eq(n).fadeIn(timed, function(){
        if(n <= -1){	n = proLiLen - 1;	 }
        prSpan.css({bottom:0});
        productLi.eq(n).fadeIn(timed);
        // productUl.css({left: -n * 100 + '%'});
        check = true;
       });
       */
    }
  });
  
  // 자동 움직임 -------------------------------------------------------
  var mvImg;
  var mvSlideGo = function(){
    mvImg = setInterval(function(){
      miniBtn.trigger('click');
    }, timed*4);
  };
  
  mvSlideGo();
  
  // miniProduct.on('mouseenter', function(){clearInterval( mvSlideGo );});
  var ClearFn = function(){clearInterval(mvImg)};
  // miniProduct.on('mouseleave', function(){mvSlideGo();});
  var GoFn = function(){mvSlideGo()};

  miniProduct.on({'mouseenter':ClearFn, 'mouseleave':GoFn});


  //next, prev 각 버튼 클릭 처리 (참고)
  /*
  miniBtnNext.on('click', function(e){
    e.preventDefault();
    if(check){
      check = false;
      n += 1;
      productUl.stop().animate({left: -n * 100 + '%'}, 300, function(){
        if(n >= proLiLen - 2){	n = -1;	 }
        productUl.css({left: -n * 100 + '%'});
        check = true;
        });
      }
  });
  miniBtnPrev.on('click', function(e){
    e.preventDefault();
    if(check){
      check = false;
      n -= 1;
      productUl.stop().animate({left: -n * 100 + '%'}, 300, function(){
        if(n <= -1){	n = proLiLen - 2;	 }
        productUl.css({left: -n * 100 + '%'});
        check = true;
      });
    }
  });
  */

  // button, indicator 기능시 슬라이드
  // slide result ==============================================================================
  /*
  var miniProduct        = $('#miniProduct');

  var miniBtn            = miniProduct.find('button');
  var miniBtnNext        = miniProduct.find('.next');
  var miniBtnPrev        = miniProduct.find('.prev');
  var timed              = 500;
  
  // ----------------------------------------------
  var productUl = miniProduct.find('.product');
  var cloneLi   = productUl.children('li').eq(-1).clone(true);
      productUl.prepend(cloneLi);
  
  var productLi = productUl.children('li');
  var proLiLen  = productLi.length;
  console.log(proLiLen);
  
  // productUl.width(proLiLen * 100 + '%');
   productUl.css({width:proLiLen * 100 + '%', marginLeft: -100 + '%', position: 'relative'});
   productLi.width(100 / proLiLen + '%');
  
   var n = 0;
   var check = true;
   
  // ** indicator기능 추가(indicator_color) 
  // 광고 갯수만큼(복제처리제외) indicator 처리
   var miniProIndiBtnArea = miniProduct.find('.indicator');
   miniProIndiBtnArea.after('<div class="indi_color hidden_wrap"><ul></ul></div>');
   var miniProIndiUl = $('.indi_color').children('ul');
   var i=0;
   for(; i< proLiLen - 1 ; i++){
      miniProIndiUl.append('<li><a href="#"><span>광고 ' + (i + 1) + ' 설명</span></a></li>');
   }
  // -----------------------------------------------------------------------------
  
  var miniProIndiLi = miniProIndiUl.find('li').children('a');
  miniProIndiUl.find('li').eq(0).addClass('action');
  
  miniProIndiLi.on('click', function(e){
    e.preventDefault();
    var thisParent = $(this).parent();
        n = thisParent.index();
  
    thisParent.addClass('action');
    thisParent.siblings().removeClass('action');
  
    productUl.stop().animate({left: -n * 100 + '%'}, timed);
  });
  
  // -------------------------------------
  
  var prSpan = productLi.find('span');
  // 버튼 기능 합치기
  miniBtn.on('click', function(e){
    e.preventDefault();
    var thisBtn = $(this)[0];
    prSpan.animate({bottom:-100 + '%'});
    if(thisBtn === miniBtnNext[0] && check){// next 버튼 클릭시
      check = false;
      n += 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n >= proLiLen - 2){	n = -1;	 }
        prSpan.animate({bottom:0});
        productUl.css({left: -n * 100 + '%'});
        check = true;
       });
    }else if(check) { // prev 버튼 클릭
      check = false;
      n -= 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n <= -1){	n = proLiLen - 2;	 }
        prSpan.animate({bottom:0});
        productUl.css({left: -n * 100 + '%'});
        check = true;
       });
    }
    miniProIndiUl.find('li').eq(n).addClass('action');
    miniProIndiUl.find('li').eq(n).siblings('li').removeClass('action');
  });
  
  var mvImg;
  var MvSlideGo = function(){
    mvImg = setInterval(function(){
      miniBtnNext.trigger('click');
      console.log('!');
    }, timed*5);
  };
  
  MvSlideGo();
  var ClearFn = function(){	clearInterval( mvImg ) };
  var GoFn    =  function(){	MvSlideGo()};
   miniProduct.on({'mouseenter' :ClearFn , 'mouseleave':GoFn });


  */
  //=================================================================================





  // chaeeun version ===============================================================
  // var miniP = $('.miniProduct');
  // var miniBtn = miniP.find('.slide_btn');
  // var miniNext = miniBtn.children('.next');
  // var miniPrev = miniBtn.children('.prev');
  // var timed = 500;
  
  // var miniBanner = miniP.find('.product');
  // var miniBanLast = miniBanner.find('li').eq(-1).clone(true);

  // miniBanner.prepend(miniBanLast);
  // miniBanner.parent('.product_wrap').css({'overflow':'hidden'});
  
  // var miniBanLen = miniBanner.children('li').length;
  // miniBanner.css({'width':miniBanLen*100+'%'});
  // miniBanner.children('li').css({'width':100/miniBanLen+'%'});
  // var n = 0;


  // miniNext.on('click',function(e){
  //   e.preventDefault();
  //   n += 1;
  //   miniBanner.animate({'marginLeft': n*-100 +'%'}, timed ,function(){
  //     if(n>=miniBanLen-2){
  //       n=-1;
  //       miniBanner.css({'marginLeft':100+'%'});
  //     }
  //   });

  // });
  // miniPrev.on('click',function(e){
  //   e.preventDefault();
  //   n -= 1;
    
  //   miniBanner.stop().animate({'marginLeft': n*-100 +'%'}, timed, function(){
  //     if(n<0){ n = miniBanLen -2; }
  //     miniBanner.css({'marginLeft':n*-100+'%'});
  //   });

  // });

})(jQuery);