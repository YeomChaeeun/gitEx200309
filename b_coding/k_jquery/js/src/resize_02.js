// resize_02.js

(function($){
  // start
  var win = $(window);
  var headBox = $('#headBox');
  var gnbMenu = $('#gnbBox');
  var gnbBtn = gnbMenu.find('.gnb_view_btn');
  var gnbList = gnbMenu.find('.gnb_list');

  // 디바이스 환경
  var winW = win.width();
  
  var mob700 = function(){
    gnbBtn.on('click',['button'],function(e){
      e.preventDefault();
      gnbList.stop().slideToggle();
    });
  };
  var tablet1400 = function(){
    gnbList.on('mouseenter',function(){
      $(this).addClass('action');
    });
    headBox.on('mouseleave',function(){
      gnbList.removeClass('action');
    });
  };
  var pcFull = function(){
    gnbList.on('mouseenter',function(){
      $(this).addClass('action');
    });
    headBox.on('mouseleave',function(){
      gnbList.removeClass('action');
    });    
  };
  // -------------------------------------------------------------
  // 디바이스 사이즈 체크
  if(winW<=700){
    mob700();
  }else if(winW<=1400){
    tablet1400();
  }else{
    pcFull();
  }

  // resize -------------------------------------------------------
  win.on('resize',function(){
    var nowWinW = win.width();
    var deviceWidthCheck = (winW !== nowWinW);

    if(deviceWidthCheck){
      location.reload(); 
    }


  });





  // end
})(jQuery);