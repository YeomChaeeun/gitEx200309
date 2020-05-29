(function($){
  // start
  // js는 불러오는 html파일 위치 기준으로 파일을 가져옴
  /*var d;
  $.ajax({
    url:'../data/ajaxTest.json',
    dataType:'json',
    async:false,
    success:function(data){
      d=data;
      return d;
    }
    
  });
  console.log(d); // async기능으로 d를 확인할 수 있게함
  $('#wrap').append(d[0]);
  */

  // $.getJSON();
  // $.load();
  var wrap = $('#wrap');
  var h1 = wrap.find('h1');
  
  wrap.append('<div class="headBox_wrap"></div>');
  wrap.append('<div class="footBox_wrap"></div>');

  var headWrap = wrap.find('.headBox_wrap');
  var footWrap = wrap.find('.footBox_wrap');

  headWrap.load('../page/common/headBox.html',function(){
    var headBox = $('#headBox');
    console.log(headBox);
  });
  footWrap.load('../page/common/footBox.html');

  // setTimeout(function(){
  //   var headBox = $('#headBox');
  //   console.log(headBox);
  // },100);




  // end
})(jQuery);