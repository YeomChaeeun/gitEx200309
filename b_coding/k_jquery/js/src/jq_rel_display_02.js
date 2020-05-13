// jq_rel_display_02.js


(function($){
  // start
  
  var headOffset = $('#headBox').offset().top;

  $(window).on('scroll',function(){
    var wScroll = $(this).scrollTop();
    if(headOffset < wScroll){
      $('#headBox').css({'position':'fixed','bottom':'auto','top':0});
    }else{
      $('#headBox').removeAttr('style');
    }

  });

  // ===========================================================================

  var langMember = $('.lang_member');
  var lmList = langMember.find('li');
  var lmListLink = lmList.find('a');

  lmListLink.on('mouseenter focus',function(){
    lmList.addClass('action');
  });
  lmListLink.on('mouseleave',function(){
    lmList.removeClass('action');
  });
  lmListLink.eq(-1).on('blur',function(){
    lmList.removeClass('action');
  });

  // ---------------------------------------------
  var gnbNav = $('.gnb_navi');
  var gnbTitle = gnbNav.find('dt');
  var gnbTitleLink = gnbTitle.children('a');
  var gnbContent = gnbNav.find('dd');

  gnbContent.hide();

  gnbTitleLink.on('mouseenter focus',function(){
    $(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
    $(this).parent('dt').next('dd').stop().slideDown();
  });
  gnbNav.on('mouseleave',function(){
    gnbContent.stop().slideUp();
  });
  gnbContent.eq(-1).find('a').eq(-1).on('blur',function(){
    gnbContent.stop().slideUp();
  });


  // ===========================================================================

  var wH = $(window).height();
  // $('#viewBox').height(wH);
  $('#viewBox').css({'height':wH+'px'});
  
  // ===========================================================================
  var accor = $('.accor');
  var accorDt = accor.find('dt');
  var accorBtn = accorDt.children('button');
  var accorDtA = accorDt.find('i');

  accorBtn.on('click',function(e){
    e.preventDefault();
    var myT = $(this);
    var thisNext = myT.parent('dt').next('dd');
    var thisView = thisNext.css('display') === 'none';

    var myTinI = myT.children('i');
    var otherTinI =  myT.parent('dt').siblings('dt').find('i');

    if(thisView){
      thisNext.siblings('dd').stop().slideUp(300);
      thisNext.stop().slideDown(300);
      accorBtn.css({'backgroundColor':'transparent'});
      myT.css({'backgroundColor':'#aca'});
      
      // rotate ----------------------------------------------------
      myTinI.css({'transform':'rotate(180deg)','transition':'all 300ms ease'});
      otherTinI.css({'transform':'rotate(0)','transition':'all 300ms ease'});
      
    }else{
      thisNext.slideUp();
      myT.css({'backgroundColor':'transparent'});
      myTinI.css({'transform':'rotate(0deg)','transition':'all 300ms ease'});
    }
    
    /*
    // class 이름 변경--------------------------------------------
    var myTinI = myT.children('i');
    var otherTinI =  myT.parent('dt').siblings('dt').find('i');
    var hasDownClassName = myT.children('i').hasClass('fa-caret-square-down');

    if(hasDownClassName){
      myTinI.removeClass('fa-caret-square-down');
      myTinI.addClass('fa-caret-square-up');

      otherTinI.removeClass('fa-caret-square-up');
      otherTinI.addClass('fa-caret-square-down');
    }else{
      myTinI.removeClass('fa-caret-square-up');
      myTinI.addClass('fa-caret-square-down');
    }
    */
    // rotate -------------------------------------------------------------
    /*
     
    myTinI.css({'transform':'rotate(180deg)','transition':'all 300ms ease'});
    otherTinI.css({'transform':'rotate(0)','transition':'all 300ms ease'});
    otherTinI.removeAttr('style');
    */
   
  });


  // end
})(jQuery);