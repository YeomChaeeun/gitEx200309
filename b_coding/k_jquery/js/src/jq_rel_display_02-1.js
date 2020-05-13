// jq_rel_display_02-1.js

(function($){
  var vb = $('#viewBox');

  for(var i=0;i<5;i++){
    vb.append('<p><span>'+i+'</span>'+2+'</p>');
  }

  var p = vb.find('p');
  p.css({'width':'100px','margin':'10px','backgroundColor':'#a5c','color':'#fff','float':'left'});

  p.on('click',function(e){
    $(this).animate({'backgroundColor':'#7af'});

    $(this).find('span').on('click',function(){
      $(this).css({'border':'2px solid #333'});
    });

  });



})(jQuery);