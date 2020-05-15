// jq_slide_banner_02.js

(function($){
  // start
  var miniP = $('#miniProduct');
  var miniIndi = miniP.find('.indicator');
  var miniIndiLi = miniIndi.find('li').children('a');

  var miniPlist = miniP.find('.product');
  var miniParea = miniPlist.children('ul');

  var timed = 700;
  
  // miniParea.css({'overflow':'hidden'});
  miniIndi.hide();
  /*
  miniIndiLi.on('click', function(e){
    e.preventDefault();
    var i = $(this).parent('li').index();
    var myPer = - i * 100;
    miniParea.stop().animate({'marginLeft': myPer+'%'}, timed);

  });
  */
  var miniPareaLi = miniParea.find('li');
  // 마지막 li 요소 복제해서 붙여놓음
  var miniPliCopy = miniPareaLi.eq(-1).clone(true);
  miniParea.prepend(miniPliCopy);

  // 복제해서 붙여놓은 li를 다시 한번 파악 해줘야함 
  miniPareaLi = miniParea.find('li');

  var milienT = miniPareaLi.length;
  console.log(milienT);



  var i = 0;
  var MyProSlide = function(){
    i+=1;
    var pLiLen = miniParea.find('li').length;
    if(i>=pLiLen){i = 0;}

    var myPer = - i * 100;
    miniParea.stop().animate({'marginLeft': myPer+'%'}, timed);
  };


  setInterval(function(){  
    MyProSlide();
  }, timed*2);



  // end
})(jQuery);