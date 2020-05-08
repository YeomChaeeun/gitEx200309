// jq_apiBasic_02_test.js


(function(){
  //jQuery start --------------------------------------------------------

  var h1 = $('h1');
  var headBox = $('#headBox');
  headBox.prepend(h1);
  // ================================================
  $('#viewBox').prepend('<h2>광고 영역</h2>');
  $('#conBox').prepend('<h2>컨텐츠 영역</h2>');
  $('#footBox').prepend('<h2>footer</h2>');
  // ================================================
  
  var gnbUl = $('#gnbBox').find('ul');
  var gnbLinkText = [
    '네이버','다음','구글','xido','apple','samsung','11st','gmarket','homeplus','lotte mart'

  ];
  var gnbLink = [
    'http://naver.com',
    'http://duam.net',
    'http://google.com',
    'http://xido.com',
    'http://apple.com',
    'http://samsung.com',
    'http://11st.co.kr',
    'http://gmarket.com',
    'http://homeplus.com',
    'http://lottemart.com'
  ];

  // gnbUl.text('');
  var linkText;

  gnbUl.empty();
  for(var i = 0;i<gnbLink.length;i++){
    linkText = '<li><a target="_blank" href="' + gnbLink[i] + '">' + gnbLinkText[i] + '</a></li>';
    // linkText = `<li><a herf="${gnbLink[i]}">${gnbLinkText[i]}</a></li>`;
    gnbUl.append(linkText);

  }
  
  var gnbLinkMore = [
    {'text':'네이버','link':'http://naver.com'},
    {'text':'다음','link':'http://daum.net'},
    {'text':'구길','link':'http://google.com'}
  ];

  console.log(gnbLinkMore[1].text);
  for(var i = 0;i<gnbLinkMore.length;i++){
    linkText = '<li><a target="_blank" href="' + gnbLinkMore[i].link + '">' + gnbLinkMore[i].text + '</a></li>';
    // linkText = `<li><a herf="${gnbLink[i]}">${gnbLinkText[i]}</a></li>`;
    gnbUl.append(linkText);

  }

  // ================================================
  var h2 = $('h2');
  // h2.attr({'class':'hidden'});
  h2.addClass('hidden');
  // $('#conBox').find('h2').removeAttr('class');
  // $('#conBox').find('h2').removeClass('hidden');

  // ================================================
  
  var vBtn = $('.view_btn');
  vBtn.append('<button type="button" clasee="next_btn">다음</button>');
  vBtn.append('<button type="button" clasee="prev_btn">이전</button>');


  $('#headBox').after('<div class="test_wrap"></div>');
  var testW = $('.test_wrap');

  for(var i=0;i<5;i++){
    testW.append('<p></p>');

    for(var j = 0; j<i;j++){
      testW.find('p').eq(i).append('*');
    }
  }



  //jQuery end ----------------------------------------------------------
})(jQuery);