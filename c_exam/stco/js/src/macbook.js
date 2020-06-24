// macbook.js

(function($){
  // start
  var win = $(window);
  var openLaptop = $('#openLaptop');
  var openH2 = openLaptop.find('h2');

  win.on('scroll',function(){
    var thisScroll = $(this).scrollTop();
    var myop = 1-thisScroll / 400;

    // console.log(thisScroll);
    // console.log(myop);
    openH2.stop().animate({top:-thisScroll, opacity:myop});


  });



  // end
})(jQuery);