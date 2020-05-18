// jq_slide_banner_03.js


(function($){
  //result

  var miniProduct = $('#miniProduct');
  var miniBtnNext = miniProduct.find('.next');
  var miniBtnPrev = miniProduct.find('.prev');
  
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
  
  var mvImg;
  var mvSlideGo = function(){
    mvImg = setInterval(function(){
      miniBtnNext.trigger('click');
    }, 2000);
  };
  
  mvSlideGo();
  
  productUl.on('moueseenter', function(){
    clearInterval( mvSlideGo );
  });

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