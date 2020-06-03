// mousewheelPage.js

(function($){
  //start

  var win = $(window);
  var winH = win.innerHeight();
  $('#wrap').css({height:'auto'});
  var page = $('.page');
  page.css({height:winH});

  var n = 0;
  var mvTrue = true;

  win.on('mousewheel DOMMouseScroll',function(e){
    var evt = e.originalEvent;
    var result;
    (evt.wheelDelta) ? result = -evt.wheelDelta : result = evt.detail*40 ;
    if(mvTrue){
      mvTrue = false;
      (result>0)? n+=1 : n-=1;
      if(n>=page.length){
        n = page.length;
      }else if(n<0){
        n = 0;
      }
      // console.log(n);
      $('#wrap').animate({top:n*winH},function(){
        mvTrue=true;
      });
      // $('html, body').animate({scrollTop:n*winH},function(){
      //   mvTrue=true;
      // });
      // setTimeout(function(){mvTrue=true;},200);
    }
  });

  //end
})(jQuery);