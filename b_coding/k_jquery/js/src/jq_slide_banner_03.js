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

  // indicator 기능 추가(indicator_color)
  // 광고 갯수만큼(복제처리제외) indicator 처리
  var miniProIndiBtnArea = miniProduct.find('.indicator');

  miniProIndiBtnArea.after('<div class = "indi_color hidden_wrap"><ul></ul></div>');
  var miniProIndiUl = $('.indi_color').children('ul');
  var i = 0;
  for(;i<proLiLen-1;i++){
    miniProIndiUl.append('<li><a href=""><span>광고 ' + (i+1) + ' 설명</span></a></li>');  
  }

  // $('head').append('<style></style>');
  // var styleEl = $('head').find('style');
  // var styleT = ".pr_01{\background-image: url('../../img/cake/2412_small_img');}\
  //               .pr_02{background-image: url('../../img/cake/2413_small_img');}\
  //               .pr_03{background-image: url('../../img/cake/2414_small_img');}\
  //               .pr_04{background-image: url('../../img/cake/2415_small_img');}\
  //               .pr_05{background-image: url('../../img/cake/2416_small_img');} ";
  
  // styleEl.text(styleT);
  
  
  // next, prev 각 버튼 클릭시
  //  miniBtnNext.on('click', function(e){
  //    e.preventDefault();
  //    if(check){
  //      check = false;
  //      n += 1;
  //      productUl.stop().animate({left: -n * 100 + '%'}, 300, function(){
  //        if(n >= proLiLen - 2){	n = -1;	 }
  //        productUl.css({left: -n * 100 + '%'});
  //        check = true;
  //       });
  //     }
  //  });
  //  miniBtnPrev.on('click', function(e){
  //   e.preventDefault();
  //   if(check){
  //     check = false;
  //     n -= 1;
  //     productUl.stop().animate({left: -n * 100 + '%'}, 300, function(){
  //       if(n <= -1){	n = proLiLen - 2;	 }
  //       productUl.css({left: -n * 100 + '%'});
  //       check = true;
  //      });
  //    }
  // });

  /*
  var prSpan = productLi.find('span');
  // prSpan.css({bottom:-100+'%'});

  // 버튼 기능 합치기
  miniBtn.on('click',function(e){
    e.preventDefault();
    var thisBtn = $(this)[0];
    // next 버튼 클릭시
    prSpan.css({bottom:-100+'%'});

    if(thisBtn === miniBtnNext[0] && check){
      check = false;
      n += 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n >= proLiLen - 2){	n = -1;	 }
        prSpan.css({bottom:0});
        productUl.css({left: -n * 100 + '%'});
        check = true;
       });
    } 
    // prev 버튼 클릭시  +
    else if(check){
      check = false;
      n -= 1;
      productUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
        if(n <= -1){	n = proLiLen - 2;	 }
        productUl.css({left: -n * 100 + '%'});
        check = true;
       });
    }
  });
  
  // 자동 움직임
  var mvImg;
  var mvSlideGo = function(){
    mvImg = setInterval(function(){
      miniBtnNext.trigger('click');
    }, timed*4);
  };
  
  mvSlideGo();
  
  // miniProduct.on('mouseenter', function(){clearInterval( mvSlideGo );});
  var ClearFn = function(){clearInterval(mvImg)};
  // miniProduct.on('mouseleave', function(){mvSlideGo();});
  var GoFn = function(){mvSlideGo()};

  miniProduct.on({'mouseenter':ClearFn, 'mouseleave':GoFn});
  */

  // miniProduct.css('color','#fff');

  // chaeeun version
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