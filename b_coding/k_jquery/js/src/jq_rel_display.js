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

  var accMenu = $('.accoordion_menu');
  var accSt01 = accMenu.children('.acc_style_01');
  var accSt01_dt = accSt01.find('dt');
  var accSt01_dd = accSt01.find('dd');

  // console.log(accSt01_dt.length,accSt01_dd.length);

  // dt클릭시 바로 뒤에있는 dd를 나타나게 해라
  accSt01_dt.on('click',function(){
    //바로 뒤에있는 dd('accSt01_dd')를 나타나게 해라
    var thisView = $(this).next('dd').css('display');
    if( thisView ==='none'){
      accSt01_dd.slideUp();
    }
    $(this).next('dd').slideDown();
  });
  
  

  //jquery end =============================================================
})(jQuery);