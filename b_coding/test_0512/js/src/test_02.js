// test_02.js

(function($){
  // jquery start

  var gnb = $('.gnb');
  var gnbMenu = $('.menu');
  var gnbLi = gnbMenu.children('li');
  var gnbDt = gnbLi.find('dt');
  var gnbDd = gnbLi.find('dd');

  var gnbDdA = gnbDd.find('a');

  var langMenu = $('.lang_menu');

  gnbDt.find('a').on('click',function(e){
    e.preventDefault();

    myThis = $(this).parent('dt');
    myThisPar = myThis.parents('li');
    var pi = myThisPar.index();
    // console.log(myThis, myThisPar, pi);

    var dtPar = myThis;
    var thisPar = dtPar.next('dd');

    var thisView = gnbDd.css('display') === 'none';

    if(thisView){
      gnbDd.show();
      gnbDt.removeClass('action');
      dtPar.addClass('action');

    }else{
      gnbDt.removeClass('action');
      dtPar.addClass('action');
    }

    gnbLi.eq(pi).find('dd').find('li').children('a').on('click',function(e){
      e.preventDefault();
  
      myThis = $(this).parent('li');
      var i = myThis.index();
      // console.log(i);
      
      var thisAview = myThis.eq(i).find('a').hasClass('icon_add');

      if(thisAview == false){
        gnbLi.find('dd').find('a').removeClass('icon_add');
        gnbLi.eq(pi).find('dd').find('li').eq(i).children('a').addClass('icon_add');
      }else{
        gnbDd.removeClass('icon_add');
      }

    }); 

    gnb.on('mouseleave',function(e){
      gnbDd.css({'display':'none'});
  
    }); 
    

    // thisPar.find('li').children('a').on('click',function(e){
    //   e.preventDefault();
  
    //   myThis = $(this).parent('li');
    //   var i = myThis.index();
      
    //   var thisAview = myThis.eq(i).find('a').hasClass('icon_add');

    //   if(thisAview == false){
    //     gnbDd.find('a').removeClass('icon_add');
    //     gnbDd.find('a').eq(i).addClass('icon_add');
    //   }else{
    //     gnbDd.removeClass('icon_add');
    //   }

    // }); 
  
  });

  




  // jquery end
})(jQuery);