// jq_apiBasic.js

(function($){
  //jQuery start ---------------------------

  var h1 = $('h1');
  // console.log( h1.contents() );
  var h1Con = h1.contents();
  var h1ConChild = h1Con.contents()[0];
  // console.log(h1ConChild);

  var dt = $('dt');
  // console.log(dt);
  var dtParent = dt.parent();
  // console.log(dtParent);

  // var dtWrap = dt.wrap('div');
  // console.log(dtWrap);

  var dtCon = dt.contents();
  // console.log(dtCon);
  dt.html('<span></span>');
  dt.children('span').append(dtCon); //첨부
  //text(), html(), append(), contents(), wrap()




  //jQuery end -----------------------------
})(jQuery);