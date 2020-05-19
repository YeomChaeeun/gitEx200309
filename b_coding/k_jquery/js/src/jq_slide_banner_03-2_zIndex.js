// jq_slide_banner_03-2_zIndex.js


var poduct = $('.product');
var productLi = product.children('li');
var productBtn = $('.product_btn').children('button');

product.parent().css({overflow:'visible'});

product.css({width:'100%',position:'relative'});
product.children().css({width:'100%',position:'absolute',left:0,rignt:0});

// 1.보이고자 하는 요소는 남고, 나머지는 display:none;
// 2. 순서의 배치를 역순으로 배치해서 처리하는 방법

productLi.eq(0).css({zIndex:10});
productLi.eq(0).siblings('li').css({zIndex:0,display:'none'});

var n = 0;
var bool = true;

productBtn.on('click',function(e){
  e.preventDefault();

  if($(this)[0]===$('.next'[0] && bool)){
    // next 버튼 클릭
    bool = false;
    (n>=productLi.length-1)? n=0 : n+=1;
    
    productLi.eq(n).css({zIndex:5, display:'block'});
    productLi.eq(n-1).fadeOut(function(){
      productLi.eq(n).css({zIndex:10});
      productLi.eq(n).siblings('li').css({zIndex:0});
      bool = true;
    });


  }else if($(this)[0]===$('.prev'[0] && bool)){
    // prev 버튼 클릭
    bool = false;
    (n<=0)? n=productLi.length-1 : n-=1;

    productLi.eq(n).css({zIndex:5, display:'block'});
    productLi.eq(n+1).fadeOut(function(){
      productLi.eq(n).css({zIndex:10});
      productLi.eq(n).siblings('li').css({zIndex:0});
      bool = true;
    });


  }



});

