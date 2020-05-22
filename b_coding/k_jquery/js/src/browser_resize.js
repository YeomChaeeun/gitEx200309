// browser_resize.js

(function($){
  // start
  var m1 = $('.motion_01');
  var m2 = $('.motion_02');

  var MotionM1 = function(myC){
    var myColor;
		(myC  == undefined) ? myColor = '#078' : 	myColor = myC;
		// var myColor = myC | '#078';
		var j = 0;
		m1.on('mouseenter', function(){
			j++;
			var sel = $(this);
			sel.stop().animate({'backgroundColor':myColor});	
			sel.prepend('<p>'+j+'. 내용이 추가로 담아졌습니다.</p>');
		});
		console.log(myColor);
  };

  var MotionM2 = function(wc){  
    var wC = wc;
    m2.on('click',function(){
      $(this).stop().animate({width:wC+'px'});
      if($(this).width()==wC){
        $(this).stop().animate({width:'48%'});
      }
    });

  };


  var deviceName = ['mobile','tablet','laptop','pcfull'];
  var deviceWidth = [
    {'size' : 640, "title" : deviceName[0]},
    {'size' : 1280, "title" : deviceName[1]},
    {'size' : 1600, "title" : deviceName[2]},
    {'size' : 2560, "title" : deviceName[3]}
  ];
  
  var win = $(window);
  var ww = win.outerWidth(true);
  var beforeDevice, afterDevice;
  // var check = true;

  // 디바이스 환경이 바뀔때마다 1번만 실행시키게 하기 위해서 nowDevice에 기기 title을 저장하여 리턴해줌
  var DeviceAction = function(widthSize){
    var nowDevice;
    if(widthSize < deviceWidth[0].size){
      nowDevice = deviceWidth[0].title;
    }else if(widthSize < deviceWidth[1].size){
      nowDevice = deviceWidth[1].title;
    }else if(widthSize < deviceWidth[2].size){
      nowDevice = deviceWidth[2].title;
    }else{
      nowDevice = deviceWidth[3].title;
    }
    return nowDevice;
    // if(widthSize>=deviceWidth[1].size && check){
    //   MotionM1();
    //   check = false;
    // }
  };
  beforeDevice = DeviceAction(ww);
  // consoli.lot('1.'+beforeDevice+'---');
  console.log('....'+DeviceAction(ww));

  // ----------------------------------------------------------------------------

  var ActiveStyle = function(widthSize){
    // console.log(widthSize);
    if(widthSize <= deviceWidth[0].size){
      MotionM1('#333');
      MotionM2(100);
    }else if(widthSize <= deviceWidth[1].size){
      MotionM1('#fa0'); 
      MotionM2(30);
    }else if(widthSize <= deviceWidth[2].size){ 
      MotionM1('#0af');
      MotionM2(300);
    }else{
      MotionM1('#6f7'); 
      MotionM2(255);
    } 
  };

  // ----------------------------------------------------------------------------

  win.on('resize',function(){
    var nw = win.outerWidth(true);
		afterDevice = DeviceAction(nw);
		if(beforeDevice !== afterDevice){
			// 디바이스 상황에따른 변경내용을 수행
			var i = deviceName.indexOf(afterDevice);
      // console.log(deviceName[i]);
			ActiveStyle(deviceWidth[i].size);
			beforeDevice = afterDevice;
			// console.log( 'changed : ' + beforeDevice);
    }
  });


  // end
})(jQuery);