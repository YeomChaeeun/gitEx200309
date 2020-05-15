// jq_slide_banner_02.js

(function($){

	var miniP = $('#miniProduct');
	var miniIndi = miniP.find('.indicator');
	var miniIndiLi = miniIndi.find('li').children('a');

	var miniPlist = miniP.find('.product');
	var miniParea = miniPlist.children('ul');
	var timed = 700;

	miniPlist.css({'overflow':'hidden'});
	miniIndi.hide();
  /*
    miniIndiLi.on('click', function(e){
      e.preventDefault();
      var i = $(this).parent('li').index();
      var iPer = -i * 100;
      miniParea.stop().animate({'marginLeft': iPer +'%'}, timed);
    });
  */

  var miniPareaLi = miniParea.find('li');
  var miniPliCopy = miniPareaLi.eq(-1).clone(true);

  miniParea.prepend(miniPliCopy);
  miniPareaLi = miniParea.find('li');

  var mLilenT = miniPareaLi.length;
  // console.log( mLilenT );

  miniParea.css({width: (mLilenT * 100) + '%','position':'relative','left':-100+'%'});
  miniPareaLi.css({width: (100 / mLilenT) + '%'});


	var i = 0;
  var MyProSlide = function(){
		i += 1;
		// var pLiLen = miniParea.find('li').length-1;
		// if(i >= (mLilenT-1)){ i = -1;	}

		var iPer = -i * 100;
		miniParea.stop().animate({'marginLeft': iPer +'%'}, timed, function(){
      if(i>=mLilenT-2){
        miniParea.css({'marginLeft': 100 + '%'});
        i = -1;
      }
    });
	};


	setInterval(function(){	
		MyProSlide();
  }, timed*2);


  // result ----------------------------------------------------------------------------
  var miniP2 = $('#miniProduct2');
  var miniBtn = miniP2.find('.btn');
  var miniNext = miniBtn.children('.next');
  var miniPrev = miniBtn.children('.prev');

  var miniBanner = miniP2.children('.product').find('ul');
  var miniBanLast = miniBanner.find('li').eq(-1).clone(true);
  miniBanner.prepend(miniBanLast);
  var miniBan2Len = miniBanner.children('li').length;
  miniBanner.css({'width':miniBan2Len*100+'%'});
  miniBanner.children('li').css({'width':100/miniBan2Len+'%'});
  var n = 0;

  miniBanner.css({'position':'relative','left':-100+'%'});


  miniNext.on('click',function(e){
    e.preventDefault();
    n += 1;
    miniBanner.animate({'marginLeft': n*-100 +'%'}, timed ,function(){
      if(n>=miniBan2Len-2){
        n=-1;
        miniBanner.css({'marginLeft':100+'%'});
      }
    });

  });
  miniPrev.on('click',function(e){
    e.preventDefault();
    n -= 1;
    
    miniBanner.stop().animate({'marginLeft': n*-100 +'%'}, timed, function(){
      if(n<0){ n = miniBan2Len -2; }
      miniBanner.css({'marginLeft':n*-100+'%'});
    });

  });

  // setInterval은 변수화 해도 동작함. 따로 적지않아도됨 
  var myInterval;
  var MvSlide = function(){
    myInterval = setInterval(function(){miniNext.trigger('click');}, timed*4);
  };

  MvSlide();
  // setInterval을 정지시켜주는 기능
  // clearInterval(myInterval);
  miniP2.on('mouseenter',function(){
    clearInterval(myInterval);
  });

  miniP2.on('mouseenter',function(){
    MvSlide();
  });

  /*
  var miniP02 = $('#miniProduct2');
	var mini02Btn = miniP02.children('.btn').find('button');

	var mini02Plist = miniP02.find('.product');
  var mini02Parea = mini02Plist.children('ul');
  

  var k = 0;
  mini02Btn.on('click',function(e){
    e.preventDefault();
    var i = $(this).index();
    var mini02Li = mini02Parea.children('li');

    console.log(i);
    var iPer;

    // console.log(mini02Li.length);
    if(i==0){
      if(k<mini02Li.length-1){
        k = k+1;
        iPer = -k * 100;
        mini02Parea.stop().animate({'marginLeft': iPer +'%'}, timed);
        console.log(k);
      }else if(k>=mini02Li.length-1){
        mini02Parea.css({'marginLeft': 0 + '%'});
        k=0;
      }

    }else if(i==1){
      k=mini02Li.length-1;
      if(k>=mini02Li.length-1){
        mini02Parea.css({'marginLeft': -200 + '%'});
        console.log(k);
        k=k-1;
      }else if(k<mini02Li.length-1){
        iPer = k * 100;
        mini02Parea.stop().animate({'marginLeft': iPer +'%'}, timed);
        k=k-1;
      }
    }
  });
  */
  
})(jQuery);