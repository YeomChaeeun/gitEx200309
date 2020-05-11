// jq_rel_display.js

(function($){
  //jquery start =============================================================
  var st01 = $('.style_01');
  var st01Li = st01.find('li');
  var con = $('.content');
  var conLi = con.children('div');

  st01Li.eq(0).addClass('action'); //liBg, conCol 적용할때에 숨겨둠

  // var liBg = conLi.eq(0).css('backgroundColor');
  // var c01 = conLi.eq(0).css('backgroundColor');
  // st01Li.eq(0).css({'backgroundColor':c01});

  st01Li.children('button').on('click focus',function(e){
    e.preventDefault();

    // function 지역변수로 this선언하여 사용함
    var myThis = $(this).parent('li');
    myThis.addClass('action');
    myThis.siblings().removeClass('action');

    var i = myThis.index();
    // conLi.hide();
    // conLi.eq(i).show();
    conLiEq = conLi.eq(i);
    conLiEq.siblings().stop().hide();
    conLiEq.stop().fadeIn();

    //추가코드 : 12~14, 28~30 같은 backgroundColor 적용
    // var conCol = conLi.eq(i).css('backgroundColor');
    // $(this).siblings().css({'bacogroundColor':liBg});
    // $(this).css({'backgroundColor':conCol});

  });

  // -----------------------------------------------------------------
  var testTab = $('.test_tab');
  var testLi = testTab.find('li');
  var testDt = testTab.find('dt');
  var testDd = testTab.find('dd');
  
  testLi.on('click', function(e){
    e.preventDefault();
    
    var myThis = $(this);
    var i = myThis.index();
    testDd.slideUp();
    testDt.eq(i).next('dd').stop().slideDown();
  });
  // -----------------------------------------------------------------
  
  var accMenu = $('.accordion_menu');
  var accSt01 = accMenu.children('.acc_style_01');
  var accSt01_dt = accSt01.find('dt');
  var accSt01_dd = accSt01.find('dd');
  
  // console.log( accSt01_dt.length, accSt01_dd.length );
  
  // dt('accSt01_dt')를 클릭시(버튼을 클릭하는 것으로 설정/focus처리)
  accSt01_dt.find('button').on('click', function(e){
    e.preventDefault();
    var dtPar = $(this).parent('dt');
    var thisPar = dtPar.next('dd');
    var thisView =  thisPar.css('display') === 'none';
    if(thisView){
      accSt01_dd.stop().slideUp();
      thisPar.stop().slideDown();
      dtPar.addClass('action');
      dtPar.siblings('dt').removeClass('action');
    }else{
      accSt01_dd.stop().slideUp();
      dtPar.removeClass('action');
    }
    
  }); 
  
  /**
   * 몇가지 문제점 정리 ...
   * 1. slide 처리시 toggle이 중복현상
   * 2. focus 처리시 색상처리
   * 3. 변수 정리
   * 
   */
  
  // -----------------------------------------------------------------
  
  var tab02 = $('.tabtab');
  var tabSt02 = tab02.children('.style_02');
  var tabSt02_dt = tabSt02.find('dt');
  var tabSt02_dd = tabSt02.find('dd');
  
  tabSt02_dd.eq(0).show();
  tabSt02_dt.find('button').on('click', function(e){
    e.preventDefault();
    
    var dtPar = $(this).parent('dt');
    var thisPar = dtPar.next('dd');
    var thisView =  thisPar.css('display') === 'none';
    
    if(thisView){
      tabSt02_dd.hide();
      thisPar.stop().show();
    }else{
    }
  });
  // -----------------------------------------------------------------
  // 아코디언 메뉴 html 구조를 이용한 탭메뉴 만들기
  
  var moreBtn = $('.more_style').find('dt').children('button');
  
  moreBtn.on('click', function(e){
    e.preventDefault();
    
    var thisDt = $(this).parent('dt');
    var dtNextView = $(this).parent('dt').next('dd').css('display')==='none';
    
    if(dtNextView){
      $('.more_style').find('dd').hide();
      thisDt.next('dd').fadeIn();
      
      thisDt.siblings('dt').removeClass('action');
      thisDt.addClass('action');
    }
  });
  // -----------------------------------------------------------------

  var titleBtn = $('.menu_style').find('dt').children('button');

  titleBtn.on('click',function(e){
    e.preventDefault();

    var thisDt = $(this).parent('dt');
    var dtNextView = thisDt.next('dd').css('display')==='none';

    if(dtNextView){
      $('.menu_style').find('dd').slideUp(200);
      thisDt.next('dd').slideDown(200);
      thisDt.siblings('dt').removeClass('action');
      thisDt.addClass('action');
    }else{
      thisDt.next('dd').slideUp(200);
      thisDt.removeClass('action');
    }
  });




  //jquery end =============================================================
})(jQuery);