// gallery.js

(function($){
  // start
  // gallery 페이지 만들기
  // 1. html문서에서 큰 이미지의 경로/파일을 직접 입력해서 가져오게 하기
  var part01 = $('.part_01');
  var bigRec = part01.find('.big_rec');
  var part01Li = part01.find('li');
  var part01LiLink = part01Li.children('a');
  var bigSource = '../../img/gallery/big/';
  
  part01LiLink.on('click',function(e){
    e.preventDefault();
    // var thisImg = $(this).css('backgroundImage');
    var thisImg = $(this).parent('li').attr('data-bg');

    // console.log(thisImg);
    bigRec.css({backgroundImage:'url('+bigSource+thisImg+')'});
  });

  
  // -----------------------------------------------------------------------
  // 2. js를 통해 경로를 입력해서 처리하게 만들기 
  // result - 원래 url 노출을 막기위한 function작업 해야함
  var thumList = [
    'gallery_01.jpg',
    'gallery_02.jpg',
    'gallery_03.jpg',
    'gallery_04.jpg',
    'gallery_05.jpg',
  ];
  var bigList = [
    'gallery_01.jpg',
    'gallery_02.jpg',
    'gallery_03.jpg',
    'gallery_04.jpg',
    'gallery_05.jpg',
  ];
  var thumUrl = '../../img/gallery/thum/';
  var bigUrl = '../../img/gallery/big/';

  var galleryList = {
    thumUrl : thumUrl,
    bigUrl : bigUrl,
    thumList : thumList,
    bigList : bigList
  };
   
  var part02 = $('.part_02');
  var partRec = part02.find('.big_rec');
  var thumImg = part02.find('.thum_img');

  var i = 0;
  for(i;i<thumList.length;i++){
    thumImg.find('ul').append('<li><a href="#"><span></span></a></li>');
    thumImg.find('li').eq(i).css({backgroundImage:'url('+ thumUrl+thumList[i]+')'});
  }
  
  var p2thumLi = thumImg.find('li');
  var p2thumLiLink = p2thumLi.find('a');

  partRec.css({backgroundImage:'url('+bigUrl+galleryList.bigList[0]+')'})
  p2thumLiLink.on('click',function(e){
    e.preventDefault();
    var itIndex = $(this).parent('li').index();
    partRec.css({backgroundImage:'url('+bigUrl+galleryList.bigList[itIndex]+')'})
  });
  // p2thumLi.eq(0).find('a').trigger('click');

  // chaeeun version
  /*
  var part02 = $('.part_02');
  var bigRec02 = part02.find('.big_rec');
  var part02ThumImg = part02.children('.thum_img');
  var part02Ul = part02ThumImg.children('ul');

  var newList = [
    {imglink:'gallery_01.jpg', title:'thum_01'},
    {imglink:'gallery_02.jpg', title:'thum_02'},
    {imglink:'gallery_03.jpg', title:'thum_03'},
    {imglink:'gallery_04.jpg', title:'thum_04'},
    {imglink:'gallery_05.jpg', title:'thum_05'}
  ];

  var i = 0;
  for(i;i<newList.length;i++){
    part02Ul.append('<li data-bg='+newList[i].imglink+'><a href="#"><span>'+newList[i].title+'</span></a></li>');
  }

  var part02Li = part02Ul.children('li');
  var part02LiLink = part02Li.find('a');

  for(i=0;i<newList.length;i++){
    part02Li.eq(i).css({backgroundImage:'url(../../img/gallery/'+newList[i].imglink+')'});
  }

  bigRec02.css({backgroundImage:'url('+bigSource+newList[0].imglink+')'});
  part02LiLink.on('click',function(e){
    e.preventDefault();
    var thisImg = $(this).parent('li').attr('data-bg');
    bigRec02.css({backgroundImage:'url('+bigSource+thisImg+')'});
  });
  */

  // 3. gallery를 응용하여, popup창(모달 윈도우) 만들기
  var part03 = $('.part_03');
  var bigModal = part03.children('.big_modal');
  var bigModalBtn = bigModal.find('.close_btn');
  var part03Ul = part03.find('ul');

  var part03Li = '<li><a href="#"><span></span></a></li>';

  var bigImg = bigModal.find('.big_img');
  var bigBg = bigModal.find('.big_bg');
  
  for(i=0;i<galleryList.thumList.length;i++){
    part03Ul.append(part03Li);
    part03Ul.find('li').eq(i).css({backgroundImage:'url('+thumUrl+thumList[i]+')'});
  }

  var n = 0;
  var p03Link = part03Ul.find('li').children('a');
  p03Link.on('click',function(e){
    e.preventDefault();
    var itIndex = $(this).parent('li').index();
    n = itIndex;

    bigImg.css({backgroundImage:'url('+bigUrl+galleryList.bigList[itIndex]+')',backgroundSize:'cover',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});
    bigModal.fadeIn(function(){
      $(window).on('keyup',function(evt){
        var keyCode = evt.keyCode;
        // console.log(keyCode);
        // 왼37, 오른39, 빠져나가기27
        if(keyCode ===37){
          n-=1;
          if(n<0){n=galleryList.thumList.length-1;}
          bigImg.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
        }else if(keyCode ===39){
          n+=1;
          if(n>galleryList.thumList.length-1){n=0;}
          bigImg.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
        }else if(keyCode ===27){
          bigModal.fadeOut(400,function(){
            p03Link.eq(0).focus();
          });
        }
      });
    });
  });

  bigModalBtn.on('click',function(e){
    e.preventDefault();
    bigModal.fadeOut();
  });








  // chaeeun v
  /*
  var part03 = $('.part_03');
  var bigModal = part03.children('.big_modal');
  var bigImg = bigModal.find('.big_img');
  var bigBg = bigModal.find('.big_bg');
  var closeBtn = bigModal.find('.close_btn');

  var p3thumImg = part03.children('.thum_img');
  var p3thumLi =  p3thumImg.find('li');

  p3thumLi.find('a').on('click',function(e){
    e.preventDefault();
    var thisIndex = $(this).parent('li').index();
    bigModal.fadeIn();
    bigImg.css({backgroundImage:'url('+bigUrl+p3thumLi.eq(thisIndex).attr('data-bg')+')',backgroundSize:'cover',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});

  });

  closeBtn.on('click',function(e){
    e.preventDefault();
    bigModal.fadeOut();
  });
  bigBg.on('click',function(){
    bigModal.fadeOut();
  });
  */


  // end
})(jQuery);