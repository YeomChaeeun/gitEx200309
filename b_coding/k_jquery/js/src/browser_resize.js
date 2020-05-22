// browser_resize.js

(function($){
  // start

  var m1 = $('.motion_01');
  var m2 = $('.motion_02');

  var MotionM1 = function(){
    m1.on('mouseenter',function(){
      $(this).animate({'backgroundColor':'#078'});
      $(this).append('<p>내용이 추가로 담아졌습니다.</p>');
    });
  };

  var deviceWidth = [
    {'size' : 640, "title" : 'mobile'},
    {'size' : 1280, "title" : 'tablet'},
    {'size' : 1600, "title" : 'laptop'},
    {'size' : 2560, "title" : 'pcfull'}
  ];
  
  var win = $(window);
  var ww = win.outerWidth(true);
  var beforeDevice, afterDevice;
  // var check = true;

  // 디바이스 환경이 바뀔때마다 새로고침 해주는 기능을 위한 작업
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
  // console.log(DeviceAction(ww));

  win.on('resize',function(){
    var nw = win.outerWidth(true);
    afterDevice = DeviceAction(nw);

    if(beforeDevice!=afterDevice){
      // 디바이스 상황에따른 변경내용을 수행
      $('.motion_01').append('<p>추가 텍스트 입력</p>');
      beforeDevice = afterDevice;
      // console.log(beforeDevice+' : '+afterDevice);
    }
    console.log(beforeDevice+' : '+afterDevice);
  });


  // end
})(jQuery);