// popupModal.js

(function($){
  var cardData = listData;
  var colorData = colorArr;
  var listView = $('#listViewBox');
  var listUl = listView.find('ul');
  var modalWin = $('#modalBox');
  var modalImg = modalWin.find('.modal_image');
  var modalCloseBtn = modalWin.find('.modal_close');

  // 비동기 처리로 인해 새로 생겨나는 형태는 기존의 변수나 선택자에 담기지 않는다.
  // 이를 해결하기 위한 방법으로는
  // 첫번째 : $(document) 에서부터 찾아서 선택하는 형식을 취하면 된다.
  // 두번째 : 최종선택자는 클릭후에 판단하는 형식으로 취한다.

  $(document).find(listUl).on('click','li',function(e){
    e.preventDefault();
    var indexCard = $(this).index();
    console.log(indexCard);

    modalImg.css({backgroundImage:'url('+cardData[indexCard].image+')'});
    modalImg.text(cardData[indexCard].model_);
    modalWin.fadeIn();
    
  });

  modalCloseBtn.on('click',function(e){
    e.preventDefault();
    modalWin.fadeOut(100);
  });



})(jQuery);