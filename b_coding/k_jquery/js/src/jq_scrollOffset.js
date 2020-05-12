// jq_scrollOffset.js

(function($){
  // jquery start

  // scrollTop() : 화면내의 스크롤이 이동한 값을 표기하는 형태
  // scrollTop : animate() 메소드내에도 기능을 사용할 수 있다.
  /* //#headBox position absolute로 변경한뒤 사용
  $(document).on('scroll',function(e){
    // console.log($(this).scrollTop());   // 이동값 확인
    var myScroll = $(this).scrollTop();
    console.log(myScroll);

    if(myScroll >= 100){
      $('#headBox').css({'position':'fixed'});
      $('#headBox').animate({'top':0},1000);
    }else{
      $('#headBox').removeAttr('style');
    }
  });

  $('body').on('click',function(e){
    $('html, body').animate({'scrollTop':'500px'});   // 스크롤 강제 이동
    // $('html, body').scrollTop(500);
  });
  */

  // ---------------------------------------------------------------------------
  
  // offset().top : 브라우저 상단에서 부터 원하는 개체(선택자)가 
  // 얼마만큼 떨어져 있는지를 확인하는 기능
  
  // #headBox-fixed : doOffset값 변경됨, absolute시 top값으로 고정값 나옴
  /*
  $(document).on('scroll', function(){
    var doScroll = $(this).scrollTop();
    var doOffset = $('#headBox').offset();
    
    console.log(doScroll, doOffset);
    $('#headBox').offset({top:doScroll, left: doScroll});
  });
  */
  // ---------------------------------------------------------------------------
  /*
  $(document).on('scroll',function(){
    var smBoxOffset = $('.sm_box').offset();
    var ttBoxOffset = $('.tt_box').offset();
    var lgBoxOffset = $('.lg_box').offset();
    
    console.log(smBoxOffset, ttBoxOffset, lgBoxOffset);
  });
  */
  // ---------------------------------------------------------------------------
  var headBox = $('#headBox');
  var hT = headBox.offset().top;
  
  $(document).on('scroll',function(){
    var docST = $(document).scrollTop();    // 스크롤의 위치 파악

    if(docST>hT){
      headBox.css({'position':'fixed', 'top':0});
    }else{
      headBox.removeAttr('style');
    }
  });
  // ---------------------------------------------------------------------------

  var bodyH = $('body').height();
  // console.log(bodyH);
  $('#viewBox').height(bodyH);
  // ---------------------------------------------------------------------------

  var viewBox = $('#viewBox');
  var viewBoxH2 = viewBox.children('h2');
  var viewVideo = viewBox.find('.video');
  var titleBg = $('.title_bg');

  var conBgP = $('.con_img').css('backgroundPositionY');
  var parseCon = parseInt(conBgP);
  console.log(conBgP, parseCon);

  // var htTop = viewBoxH2.offset().top;
  // console.log(htTop);

  $(document).on('scroll', function(){
    var doScroll = $(document).scrollTop();
    viewBoxH2.css({'marginTop':-doScroll/2+'px'});
    viewVideo.css({'marginTop':doScroll*1.2+'px'});

    // console.log(-doScroll/5+'px');
    var ot = -doScroll/3;
    titleBg.css({'marginTop':ot*0.65+'px'});
    titleBg.children('h2').css({'marginTop':ot*0.4+'px'});

    $('.con_img').css({'backgroundPositionY': parseCon-(ot/15)+'%'});
  });



  // jquery end
})(jQuery);