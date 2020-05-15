// jq_eq_index_setInterval.js

(function($){
  // start

  /*
  var indiBtn = $('.indicator').find('a');
  var addView = $('.add_view');
  var addViewContWrap = addView.children('.add_view_wrap');

  indiBtn.on('focus',function(){
    var thisLi = $(this).parent('li');
    var thisIndex = thisLi.index();
    var myPer = - thisIndex * 100;
    addViewContWrap.css({'marginLeft':myPer+'%'});

  });
  */

  // result
  var indi =$('.indicator');
  var indiLi = indi.find('li');
  var indiLink = indiLi.children('a');
  var addView = $('.add_view_wrap');
  var timed = 500;

  var indiNarr = $('.indi_narr');
  var indiNarrLi = indiNarr.find('li');

  var addViewList = addView.find('div');

  var AdViewMv = function(i){
    var myPer = - i * 100;

    addView.stop().animate({'marginLeft':myPer+'%'}, timed);
    // ----------------------------------------------------------
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
    // ----------------------------------------------------------
    indiNarrLi.removeClass('action');
    indiNarrLi.eq(i).addClass('action');
  }

  var i = 0;

  indiLink.on('focus', function(e){
    e.preventDefault();
    i = $(this).parent('li').index();
    AdViewMv(i);
  });

  indiNarrLi.on('click',function(e){
    e.preventDefault();
    i = $(this).index();
    AdViewMv(i);
  });

  setInterval(function(){
    i+=1;

    if(i>=addViewList.length){
      i=0;
    }
    AdViewMv(i);

  },timed*4);


/*
  indiLink.on('focus', function(e){
    e.preventDefault();
    var i = $(this).parent('li').index();
    // console.log(i);


    var myPer = - i * 100;
    // addView.css({'marginLeft':myPer+'%'});
    addView.stop().animate({'marginLeft':myPer+'%'}, timed);

    // ----------------------------------------------------------
    // $(this).parent('li').addClass('action');
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');


    // ----------------------------------------------------------
    indiNarrLi.removeClass('action');
    indiNarrLi.eq(i).addClass('action');
    // indiNarrLi.eq(i).siblings().removeClass('action');

  });

  indiNarrLi.on('click',function(e){
    e.preventDefault();
    var i = $(this).index();
    
    indiNarrLi.removeClass('action');
    indiNarrLi.eq(i).addClass('action');
    // indiNarrLi.eq(i).siblings().removeClass('action');

    // ----------------------------------------------------------
    // $(this).parent('li').addClass('action');
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');

    // ----------------------------------------------------------
    var myPer = - i * 100;
    // addView.css({'marginLeft':myPer+'%'});
    addView.stop().animate({'marginLeft':myPer+'%'}, timed);


  });
  */

  // ==============================================================================


  // end
})(jQuery);