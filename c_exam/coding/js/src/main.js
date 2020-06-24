// main.js

(function($){
  // start
  var viewBox = $('#viewBox');
  var productWrap = viewBox.children('.product_wrap');
  var productList = productWrap.find('.pruduct_list');

  var indicatorArea = viewBox.children('.indicator_area');
  var indicator = indicatorArea.find('.indicator');

  var proList = [
    {img : 'pro_01.png', pcimg : 'pro_01.jpg', title : 'product_01', imgNarr : 'product 01 이미지 설명'},
    {img : 'pro_02.png', pcimg : 'pro_02.jpg', title : 'product_02', imgNarr : 'product 02 이미지 설명'},
    {img : 'pro_03.png', pcimg : 'pro_03.jpg', title : 'product_03', imgNarr : 'product 03 이미지 설명'},
    {img : 'pro_04.png', pcimg : 'pro_04.jpg', title : 'product_04', imgNarr : 'product 04 이미지 설명'},
    {img : 'pro_05.png', pcimg : 'pro_05.jpg', title : 'product_05', imgNarr : 'product 05 이미지 설명'},
    {img : 'pro_06.png', pcimg : 'pro_06.jpg', title : 'product_06', imgNarr : 'product 06 이미지 설명'},
    {img : 'pro_07.png', pcimg : 'pro_07.jpg', title : 'product_07', imgNarr : 'product 07 이미지 설명'},
    {img : 'pro_08.png', pcimg : 'pro_08.jpg', title : 'product_08', imgNarr : 'product 08 이미지 설명'},
    {img : 'pro_09.png', pcimg : 'pro_09.jpg', title : 'product_09', imgNarr : 'product 09 이미지 설명'},
    {img : 'pro_10.png', pcimg : 'pro_10.jpg', title : 'product_10', imgNarr : 'product 10 이미지 설명'},
    {img : 'pro_11.png', pcimg : 'pro_11.jpg', title : 'product_11', imgNarr : 'product 11 이미지 설명'},
    {img : 'pro_12.png', pcimg : 'pro_12.jpg', title : 'product_12', imgNarr : 'product 12 이미지 설명'},
    {img : 'pro_13.png', pcimg : 'pro_13.jpg', title : 'product_13', imgNarr : 'product 13 이미지 설명'},
    {img : 'pro_14.png', pcimg : 'pro_14.jpg', title : 'product_14', imgNarr : 'product 14 이미지 설명'},
    {img : 'pro_15.png', pcimg : 'pro_15.jpg', title : 'product_15', imgNarr : 'product 15 이미지 설명'},
    {img : 'pro_16.png', pcimg : 'pro_16.jpg', title : 'product_16', imgNarr : 'product 16 이미지 설명'},
  ];

  var ImgUrl = '../img/viewBox/'
  var ListTextEl = function(i){
    var	listEl = '<li>\
            <a href="#">\
              <div class="img_box"><span class="hidden">'+ proList[i].imgNarr +'</span></div>\
            </a>\
            </li>';
    return listEl;
  }; 

  var i = 0;
  for(i=0;i<proList.length; i++){
    productList.append(ListTextEl(i));
    productList.children('li').eq(i).find('.img_box').css({
      backgroundImage : 'url('+ImgUrl+proList[i].img+')',
      backgroundRepeat : 'no-repeat',
      backgroundSize : 'cover',
      backgroundPosition : '50% 50%'
    });
  }

  // indicator 생성
  
  for(i=0;i<proList.length; i++){
    var indiText = '<li>\
      <a href="#">\
        <div><span class="hidden">'+ proList[i].title +'인디케이터 버튼</span></div>\
      </a>\
    </li>';
    indicator.append(indiText);
  }

  // slide clone








  // end
})(jQuery);