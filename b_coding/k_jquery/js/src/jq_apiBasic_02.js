// jq_apiBasic_02.js
// $(function(){});
//$.ready(function(){});

(function(){
/**
 * html(html내용확인, 코드의 내부를 삭제 및 변경), text(글자내용을 확인, 콛내부의 글자를 삭제 및 변경)
 * wrap(감싸는 영역 생성, 그 자체의 내용을 확인), contents(내용 요소를 확인:코드+글자 포함)
 * append, appendTo, prepend, prependTo (선택자 내부 앞/뒤에 추가요소를 담는 기능)
 * before, after (선택자의 형제로, 전/후 추가요소를 담는 기능)
 * attr(속성값을 확인, 지정 속성을 변경하는 기능), val(form요소 내부의 value값을 확인/변경)
 * remove(선택요소 자체를 삭제), empty(선택요소 내부를 비우는 기능)
 * clone(선택요소를 복제, 'true'를 함께 사용하면 내용요소의 기능 포함 복제)
 * addClass, removeClass(class 이름값을 추가/삭제)
 * hasClass(선택요소에 해당클래스이름의 유무 판단)
 * is(선택요소에 class를 제외한 속성의 유무를 판단)
 */

  //jQuery start ---------------------------

  var h1 = $('h1');
  var headBox = $('#headBox');
  var gnbBox = $('#gnbBox');
  var viewBox = $('#viewBox');
  var conBox = $('#conBox');
  var footBox = $('#footBox');

  // headBox.prepend(h1); // headBox 내부의 앞에 h1을 담아라
  h1.prependTo(headBox); //h1을 headBox 내부 앞에 담아라
  h1.css({'text-align':'center'});

  headBox.css({'width':'100%', 'height':'150px', backgroundColor:'#ddd'});
  viewBox.css({'width':'100%', 'height':'350px', backgroundColor:'#999'});
  conBox.css({'width':'100%', 'height':'350px', backgroundColor:'#555'});
  footBox.css({'width':'100%', 'height':'150px', backgroundColor:'#ddd'});

  gnbBox.prepend('<div class="gnb_btn"><button type="button">메뉴</button></div>');

  var j = 0;
  for(j;j<6;j++){
    headBox.find('ul').append('<li>xido 이동하기</li>');
  }
  var gnbUl = gnbBox.find('ul');
  var gnbList = gnbBox.find('li');
  gnbUl.css({'width': '100%', 'padding':'20px','box-sizing':'border-box'});
  gnbList.css({'float':'left','margin':'10px','background-color':'#acf'});

  var gnbLen = gnbList.length;
  console.log(gnbLen);

  var gnbListText;
  // var gnbListText = gnbList.eq(0).text();
  // console.log(gnbListText);
  // gnbList.eq(i).html('<a href=\"#\">' + gnbListText + '</a>');
  // gnbList.eq(i).text(gnbListText + ' 하이');

  // $('#wrap').html('<p>글자를 입력해 보겠습니다.</p>');

  for(var i=0; i<gnbLen;i++){
    gnbListText = gnbList.eq(i).text();
    gnbList.eq(i).html('<a href=\"#\">' + gnbListText + '</a>');
  }

  // 속성 attr ====================================================================================
  var gnbLinkArr = ['http://naver.com','http://daum.net','http://google.com','http://xidoweb.com'];

  var liLink = gnbList.eq(j).children('a');
  console.log(liLink.attr('href'));
  

  for(;j<gnbLen;j++){
    var liLink = gnbList.eq(j).children('a');
    liLink.attr({'href':gnbLinkArr[j],'target':'_blank','title':gnbLinkArr[j]});
    if(gnbLen>3){
      liLink.attr({'href':gnbLinkArr[3],'target':'_blank','title':gnbLinkArr[3]});
    }
  }

  var h2ListArr = ['view영역','content영역','footer'];
  viewBox.prepend('<h2>'+ h2ListArr[0] +'</h2>');
  conBox.prepend('<h2>'+ h2ListArr[1] +'</h2>');
  footBox.prepend('<h2>'+ h2ListArr[2] +'</h2>');

  var h2 = $('h2');
  h2.attr({'class':'hidden'});


  var view_add = $('.view_add');
  view_add.append('<button type="button" class="next_btn"></button>');
  view_add.append('<button type="button" class="prev_btn"></button>');

  view_add.children('button').css({'width':'100px','height':'100px', 'backgroundColor':'#ffa'})
  var view_next = view_add.children('button')[0];
  var view_prev = view_add.children('button')[1];

  // ======================================================================

  var conArea = conBox.find('.con_area');
  var conContents = conArea.children().eq(0).clone(true);
  // conArea.empty();
  
  for(i=0;i<2;i++){
    conContents = conArea.children().eq(0).clone(true);
    conArea.append(conContents);
  }
  for(i=0;i<3;i+=1){
    conArea.children().eq(i).attr({'class':'con_0'+(i+1)});
  }


  //jQuery end -----------------------------
})(jQuery);