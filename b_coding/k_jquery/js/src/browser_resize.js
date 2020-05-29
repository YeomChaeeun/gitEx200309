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
  // 처음 새로고침 된 디바이스의 이름 값을 beforeDevice에 저장해줌
  beforeDevice = DeviceAction(ww);
  console.log('beforeDevice : ' + DeviceAction(ww));

  // ----------------------------------------------------------------------------

  var ActiveStyle = function(widthSize){
    // console.log(widthSize);
    if(widthSize <= deviceWidth[0].size){
      MotionM1('#333');
      MotionM2(100);
      conStyle();
    }else if(widthSize <= deviceWidth[1].size){
      MotionM1('#fa0'); 
      MotionM2(30);
      conStyle('#acf,#caf');
    }else if(widthSize <= deviceWidth[2].size){ 
      MotionM1('#0af');
      MotionM2(300);
      conStyle('#caf,#faa');
    }else{
      MotionM1('#6f7'); 
      MotionM2(255);
      conStyle('#faa,#fa0');
    } 
  };

  // ----------------------------------------------------------------------------
  win.on('resize',function(){
    var nw = win.outerWidth(true);
    // 현재 리사이즈 된 디바이스 가로 길이의 범위값을 가이용해서 title을 afterDevice에 저장함
    afterDevice = DeviceAction(nw);
    
    // 최초 디바이스 title과 리사이즈 된 디바이스 title 이 다르다면 if조건문이 true가 되어 다음을 수행함
		if(beforeDevice !== afterDevice){
			// 변경된 디바이스 명의 index값을 i에 저장함
			var i = deviceName.indexOf(afterDevice);
      // console.log(deviceName[i]);
			ActiveStyle(deviceWidth[i].size);
			beforeDevice = afterDevice;
			console.log( 'changed : ' + beforeDevice);
    }
  });

  var conBox = $('.con_box');

  var conStyle = function(linearG){
    var lG = linearG;
		(lG  == undefined) ? lG = '#fa0,#acf' : lG = linearG;
    conBox.on('click',function(){
      $(this).css({'backgroundImage':'linear-gradient('+ lG +')'});
    });
  };


  // end
})(jQuery);