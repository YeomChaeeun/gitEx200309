// test_01.js

(function($){
  // jquery start

  var accMenu = $('.accordion_menu');
  var accSt = accMenu.find('.acc_style');
  var accMenuDt = accSt.find('dt');
  var accMenuDd = accSt.find('dd');
  var accMenuIcon = $('.acc_icon');

  accMenuDt.find('button').on('click',function(e){
    e.preventDefault();

    var dtPar = $(this).parent('dt');
    var thisPar = dtPar.next('dd');
    var thisIcon = dtPar.find('.acc_icon');
    var thisView = thisPar.css('display') === 'none';
    if(thisView){
      accMenuDd.slideUp();
      thisPar.slideDown();
      dtPar.siblings().removeClass('action');
      dtPar.addClass('action');
      accMenuIcon.removeClass('rotate');
      thisIcon.addClass('rotate');
    }else{
      thisPar.slideUp();
      dtPar.removeClass('action');
      thisIcon.removeClass('rotate');
    }
  });


  // jquery end
})(jQuery);
