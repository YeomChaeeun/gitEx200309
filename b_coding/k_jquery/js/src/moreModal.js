// moreModal.js

var listData;
var colorArr;
var NowListLen;

(function($){
  var listView = $('#listViewBox');
  var listUl = listView.find('ul');
  var moreBtn = listView.find('.more_btn');
  var liCode = '<li><a href=""><span></span></a></li>'
  
  // console.log('before');
  var i = 0;

  var InsertLi = function(db, color){
    NowListLen = i+3;
    for(i;i<NowListLen;i+=1){
      if(i>=db.length){
        moreBtn.hide();
        break;
      }else{				
				listUl.append(liCode);
				// console.log(i);
				listUl.find('li').eq(i).children('a').css({
					backgroundColor:color[i]
				});
				listUl.find('li').eq(i).find('span').text(db[i].displayName);
			}
    }
  };

  // 비동기처리 - 바깥의 기능을 수행한 뒤 수행함
  $.ajax({
    url:'../data/people2.json',
    async:false,
    success:function(data){
      listData = data;
      // 컬러 차트 만들기 ------------------------------------
      var dataLen = listData.length;
      colorArr = [];
      for(var colorI=0 ; colorI<dataLen; colorI+=1){
        // hsla(각도,100%,50%,1); 색상,채도,명도,투명도
        colorArr[colorI] = 'hsla('+parseInt(Math.random() * 360)+',50%,50%,1)';
      }
      // console.log(colorArr);
      // -----------------------------------------------------
      // console.log('ajax');
      InsertLi(listData, colorArr);
      moreBtn.on('click',function(){
        InsertLi(listData, colorArr);
      });
    }
  });

  // ajax 불러온 뒤 콘솔로 찍어줘야함
  // setTimeout(function(){
  //   console.log(listData);
  // },1000);
  // console.log('modal.js');



})(jQuery);