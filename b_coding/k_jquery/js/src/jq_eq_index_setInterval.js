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

  indiLink.on('focus', function(e){
    e.preventDefault();
    var i = $(this).parent('li').index();
    // console.log(i);
    var myPer = - i * 100;
    addView.stop().animate({'marginLeft':myPer+'%'}, timed);
  });
  

  // end
})(jQuery);