// jq_rel_display.js

(function($){
  //jquery start =============================================================
  var st01 = $('.style_01');
  var st01Li = st01.find('li');
  var con = $('.content');
  var conLi = con.children('div');

  // st01Li.eq(0).addClass('action'); //liBg, conCol 적용때문에 숨겨둠

  var liBg = conLi.eq(0).css('backgroundColor');
  var c01 = conLi.eq(0).css('backgroundColor');
  st01Li.eq(0).css({'backgroundColor':c01});

  st01Li.on('click',function(e){
    e.preventDefault();
    $(this).addClass('action');
    $(this).siblings().removeClass('action');

    var i = $(this).index();
    // conLi.hide();
    // conLi.eq(i).show();
    conLi.eq(i).siblings().stop().hide();
    conLi.eq(i).stop().fadeIn();

    //추가코드 : 12~14, 28~30
    var conCol = conLi.eq(i).css('backgroundColor');
    $(this).siblings().css({'bacogroundColor':liBg});
    $(this).css({'backgroundColor':conCol});

  });

  //jquery end =============================================================
})(jQuery);