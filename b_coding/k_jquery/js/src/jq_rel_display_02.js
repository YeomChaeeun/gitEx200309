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
  var gnbDl = gnbNav.find('dl');
  var gnbTitle = gnbNav.find('dt');
  var gnbTitleLink = gnbTitle.children('a');
  var gnbContent = gnbNav.find('dd');
  // var gnbNavLink = gnbNav.find('a');
  var gnbConLink = gnbContent.find('a');

  gnbContent.hide();

  // part 별로 메뉴 나오게 슬라이드
  /*
  gnbTitleLink.on('mouseenter focus',function(){
    $(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
    $(this).parent('dt').next('dd').stop().slideDown();
  });
  gnbNav.on('mouseleave',function(){
    gnbContent.stop().slideUp();
  });
  gnbContent.find('a').eq(-1).on('blur',function(){
    gnbContent.stop().slideUp();
  });
  */

 gnbDl.on('mouseenter',function(){
    gnbContent.stop().slideDown();
    gnbTitle.removeClass('action');
    $(this).children('dt').addClass('action');
  });
  gnbNav.on('mouseleave',function(){
    gnbContent.stop().slideUp();
    gnbTitle.removeClass('action');
  });
  gnbTitleLink.on('focus',function(){
    gnbContent.stop().slideDown();
    gnbTitle.removeClass('action');
    $(this).parent('dt').addClass('action');
  });
  gnbContent.find('a').eq(-1).on('blur',function(){
    gnbContent.stop().slideUp();
  });
  gnbConLink.on('focus',function(){
    gnbTitle.removeClass('action');
    $(this).parents('dd').prev('dt').addClass('action');
    
    gnbContent.find('li').removeClass('action');
    $(this).parent('li').addClass('action');

  });

  /*
  gnbTitleLink.on('focus',function(){
    gnbContent.stop().slideDown(function(){
      gnbNavLink.on('keyup',function(e){
        e.preventDefault();
        e.stopPropagation();

        console.log(e.keyCode);
        // 37, 38, 39, 40
        // var ekey = e.keyCode;
        // switch(ekey){
        //   case 37:
        //     $(this).parentsUntil('li').parentsUntil('ul').prev('li').find('dt').find('a').focus();
        //     break;
        //   case 38:
        //     $(this).parent('li').prev('li').find('a').focus();
        //     break;
        //   case 39:
        //     $(this).parent('li').next('li').find('a').focus();
        //     break;
        //   case 40:
        //     $(this).parentsUntil('li').parentsUntil('ul').next('li').find('dt').find('a').focus();
        //     break;
        //   case 27:
        //     gnbContent.stop().slideUp();
        //     break;
        // }
      });
    });
  });
  */

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