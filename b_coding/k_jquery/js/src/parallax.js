

(function($){
  //start

  var win = $(window);
  var winW = win.innerWidth();
  var introBox = $('#introBox');
  var introDiv = introBox.children('div');
  var divImg = $('.img');
  var imgArr = [];
  var i = 0;
  for(;i<divImg.length;i++){
    imgArr[i]=divImg.eq(i).offset().top;
  }

  if(winW<640){
    introBox.children('div').remove();
  }

  win.on('resize', function(){
    var winW = win.innerWidth();
    if(winW<640){
      introBox.children('div').remove();
    }else{
      location.reload();
    }  
  });

  win.on('scroll',function(e){
    e.preventDefault();
    var winTop = win.scrollTop();
    console.log(winTop);
    introDiv.eq(0).css({backgroundPositionY:winTop/15*15});
    introDiv.eq(1).css({backgroundPositionY:winTop/15*14});
    introDiv.eq(2).css({backgroundPositionY:winTop/15*13});
    introDiv.eq(3).css({backgroundPositionY:winTop/15*11});
    introDiv.eq(4).css({backgroundPositionY:winTop/15*9});
    introDiv.eq(5).css({backgroundPositionY:winTop/15*7});
    introDiv.eq(6).css({backgroundPositionY:winTop/15*5});
    introDiv.eq(7).css({backgroundPositionY:winTop/15*3});
    introDiv.eq(8).css({backgroundPositionY:winTop/15*0});
  });




  //end
})(jQuery);