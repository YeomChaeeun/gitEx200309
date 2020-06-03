

(function($){
  //start
  // $('html, body').css({overflowX:'hidden'});

  var win = $(window);
  var winW = win.innerWidth();
  var winH = win.height();
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
    var winTop2 = winTop + winH;

    // 상단 #introBox =================================================
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

    // =================================================================
    // 중간 기능 처리 #contentBox
    if(winTop2>imgArr[0] && winTop2<=imgArr[1]){
      console.log('!!!!!!! ------------------------1');
      divImg.eq(0).css({backgroundPositionY: -(imgArr[0]-winTop2)/20+'px'});
      divImg.eq(0).next('p').css({top:-(imgArr[0]-winTop2)/5});
    }
    if(winTop2>imgArr[1] && winTop2<=imgArr[2]){
      console.log('!!!!!!! ------------------------2');
      divImg.eq(1).css({backgroundPositionY: -(imgArr[1]-winTop2)/20+'px'});
      divImg.eq(1).next('p').css({left:-(imgArr[1]-winTop2)/5});
    }
    if(winTop2>imgArr[2] && winTop2<=imgArr[3]){
      console.log('!!!!!!! ------------------------3');
      divImg.eq(2).css({backgroundPositionY: -(imgArr[2]-winTop2)/20+'px'});
      divImg.eq(2).next('p').css({right:(imgArr[2]-winTop2)/5});
    }
    if(winTop2>imgArr[3]){
      console.log('!!!!!!! ------------------------4');
      divImg.eq(2).css({backgroundPositionY: -(imgArr[3]-winTop2)/20+'px'});
      divImg.eq(3).next('p').css({top:-(imgArr[3]-winTop2)/25});
    }
  });




  //end
})(jQuery);