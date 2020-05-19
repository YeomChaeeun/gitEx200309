// onepage_scroll.js

(function($){

  $('html, body').animate({scrollTop:0},300); // 새로고침 시 상단으로 이동
  
  var viewBox = $('#viewBox');
  var gnb = $('#gnbBox');
  var gnbLi = gnb.find('li');

  var speed = 700;

  gnbLi.children('a').on('click',function(e){
    e.preventDefault();
    var sectionName = $(this).attr("href");
    var sectionOffset = $(sectionName).offset().top;
    // console.log(sectionOffset);

    $('html, body').animate({scrollTop:sectionOffset},speed);
  });
  
  // 오른쪽에 위치할 이동 인디케이션 생성
  var headBox = $('#headBox');
  headBox.after('<aside id="pointNaviBox"></aside>');
  var pointNavi = $('#pointNaviBox');
  var gnbclone = gnb.children('ul').clone(true);
  pointNavi.append(gnbclone);

  pointNavi.css({position:'fixed', top:10+'rem', right:3+'rem', width:2+'rem', height:'auto'});
  pointNavi.children('ul').css({width:'100%',height:'100%'});
  pointNavi.find('li').css({width:'2rem',height:'2rem',marginBottom:'2rem'});
  pointNavi.find('a').css({display:'block', width:'2rem', height:'2rem', borderRadius: '2rem', backgroundColor:'#3fa', fontSize:0});

  // top 버튼 생성
  // 1000px 이전에는 안보이고 그 이후에 보이게 만들기
  // 클릭시 최 상단으로 이동
  var topMvText = '<div class="top_move_btn"><a href="#"><span>상단으로 이동</span></a></div>';
  $('#asInfoBox').after(topMvText);

  var topMvBtn = $('.top_move_btn');
  topMvBtn.css({position:'fixed',left:'50%',bottom:'3rem',marginLeft:'30rem',zIndex:'1000',width:'100px',height:'100px',backgroundColor:'#fa0'});
  topMvBtn.find('a').css({display:'block',width:'100%',height:'100%'});

  $(window).on('scroll', function(){
    var winScroll = $(window).scrollTop();
    (winScroll>=1000)? topMvBtn.stop().fadeIn() : topMvBtn.stop().fadeOut();
    // if(winScroll>=1000){topMvBtn.stop().fadeIn();}
    // else{topMvBtn.stop().fadeOut();}
  });

  topMvBtn.on('click',['a'],function(e){
    $('html, body').animate({scrollTop:0},300);
  });

  $(window).on('mousewheel DOMMouseScroll',function(e){
    var myEvt = e.originalEvent;
    var wheelValue;

    if(myEvt.wheelDeltaY){
      wheelValue = myEvt.wheelDeltaY;// -120 | 120 
    }else{
      wheelValue = myEvt.detail*-40; // -3 |3
    }
  });

  // top 버튼 생성
  /* //chaeeun version
  var footBox = $('#footBox');
  footBox.before('<div id="topArea"><button type="button" id="topBtn">top</button></div>');
  var topArea = $('#topArea');
  var topBtn = topArea.children('#topBtn');

  topArea.css({position:'fixed',right:5+'rem', bottom:5+'rem',width:'auto',height:'auto'});
  topBtn.css({display:'none', width:3+'rem',height:3+'rem',color:'#fff',textTransform:'uppercase',backgroundColor:'#f00'});

  $(document).on('scroll', function(){
    var Stop = $(this).scrollTop();

    if(Stop>1000){
      topBtn.css({display:'block'});
      topBtn.on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},500); 
      });
    }else{
      topBtn.css({display:'none'});
    }
  });
  */

  // gnb 클릭시 이동하는 기능
  /* chaeeun version
  var viewBox = $('#viewBox');
  var gnbBox = $('#gnbBox');
  var speed = 700;

  gnbBox.find('a').on('click',function(e){
    e.preventDefault();
    var direction = $(this).attr("href");
    var posTop = $(direction).offset().top -120;
    if(posTop<0){posTop=0;}
    console.log(posTop);
    $('html, body').animate({scrollTop:posTop},speed);
  });
  */

  // 오른쪽에 위치할 이동 인디케이션 생성
  /* //chaeeun version
  viewBox.before('<aside class="side_indi hidden_wrap"><ul></ul></aside>');
  var sideIndi = $('.side_indi');
  var sideIndiUl = sideIndi.children('ul');
  var gnbLen = gnb.find('li').length;
  console.log(gnbLen);

  var i = 0;
  for(i=0;i<gnbLen;i++){
    sideIndiUl.append('<li><a href=""><span>'+(i+1)+'번째 이동 버튼</span></a></li>');
  }
  var sideIndiLi = sideIndiUl.children('li');
  var sideBtn = sideIndiLi.children('a');

  sideIndi.css({position:'fixed', top:'50%', right:'10%', width:'auto', height:'auto', transform:'translateY(-50%)'});
  sideIndiUl.css({width:'100%',height:'100%'});
  sideIndiLi.css({width:'30px',height:'30px',marginBottom:'10px', borderRadius: '50%', backgroundColor:'#333'});
  sideIndiLi.eq(gnbLen-1).css({marginBottom:0});
  sideBtn.css({display:'block',width:'100%',height:'100%'});

  sideIndiLi.on('click',function(e){
    e.preventDefault();
    // var sectionName = $(this).attr("href");
    var sideIndex = $(this).index();
    var sectionName = gnbLi.eq(sideIndex).find('a').attr('href');
    var sectionOffset = $(sectionName).offset().top;
    // console.log(sectionOffset);
    $('html, body').animate({scrollTop:sectionOffset},speed);
  });
  */


  

})(jQuery);





