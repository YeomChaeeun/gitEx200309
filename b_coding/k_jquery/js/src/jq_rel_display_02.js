// jq_rel_display_02.js


(function($){
  // start
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