// jq_selector.js

/* 
 * jquery 코드 참고 사이트
 * http://code.jquery.com/ 
 *
 * jQuery 3.x
 *  ie 포함 - uncomperssed, minified(용량줄인버전)
 *  ie 미포함 - slim, slim minified(용량줄인버전)
 * jQuery 2.x - ie 미포함
 * jQuery 1.x - ie 포함
 * jquery migrate - 이전 버전 모두 포함
 * 
 * jQuery 3.x ie포함 minified 사용할것
 * 불러오는 순서 js -> ui.js
*/

// jquery 선택자
/**
 * js의 선택자는 매우 복잡하게 만들어져 있기에 처음 접하기엔 거리감이 있어,
 * css 선택자와 유사한 형태로 만들어져있기에 접근하기 쉬운 라이브러리
 * css 선택자에 $(' ') 형태만 감싸주면 동일하게 선택됨
 */


  
$('h1').css({width:'500px',height:'100px',backgroundColor:'#01f'});
$('h1 a').css({'display':'block','width':'400px','backgroundColor':'#fa0'});
$('h1 > a').css({'color':'#fff','text-align':'center','margin':'auto'});
$('a[href="#"]').css({'padding':'0.5rem','textShadow':'0.2rem 0.2rem 0.2rem #000'});


/**
 * jquery 선택자
 * type선택자(tag를 직접 선택) : $('html, body'), $('h1,h2,h3,h4,h5,h6')
 * 자식선택자 : $('ul > li'), $('ul').children('li')
 * 자손선택자 : $('ul li'), $('ul).find('li')
 * 형제선택자  
 *    인접형제 : $('dt + dd'), $('dt').next('dd')
 *    동생인 형제들 : $('dt ~ dd'), $('dt').nextAll('dd')
 * -------------------------------------------------------------------------------
 *    이전형제 : $('dd').prev('dt')
 *    형에 해당하는 형제들 : $('dd').prevAll('dt')
 *    자신을 제외한 형제모두 : $('dt').siblings('dd')
 * --------------------------------------------------------------------------------
 * 
 * 부모선택자(css에서는 없는 기능)
 *    바로 위의 선택자 : $('#box').parent('div')
 *    조상격 부모 : $('#box').parents()      // 부모격에 해당하는 모든
 *                $('#box').parentsUntil()  // 괄호안 부모격 해당하는 요소 하나
 * nth 선택자(css에 일부 존재)
 *    $('li:nth-child(3)'), $('li:nth(2)') 
 *    $('li:nth-of-type(3)'), $('li:nth(2)')
 *    $('li').eq(2)
 *    $('li').odd(), $('li').even()
 * 
 * 속성선택자 : $('a[href="#"]')
 * 
 * =================================================================================
 * 해당위치를 파악하는 기능
 *    $('li').eq(0) : li 요소의 순번을 직접 지정
 *    $('.n').index() : .n 의 순번을 확인하는 기능
 * 이벤트가 발생되는(주체가되는) 요소
 *    $(this)
 * 
 */

 // $(document).ready(function(){})

 (function($){
  // 자식선택자/자손선택자
  // $("ul>li").css({"color":"#777"});
  // $("ul").children('li').css({"color":"#77f"});

  // $("ul >li span").css({"fontSize":"1.5rem","fontWeight":"bold"});
  // $("ul").children("li").find("span").css({"fontSize":"1.5rem","fontWeight":"bold"});
  //메소드 체인

  // var myCss = {"fontSize":"1.5rem","fontWeight":"lighter"};
  // $("ul").children("li").find("span").css(myCss);

  var myCss = {"border":"1px solid #333"};
  // 인접형제, 동생인 형제들
  // $(".three").next().find("span").css(myCss);
  // $(".three").nextAll("li").find("span").css(myCss);

  // 이전형제, 형에 해당하는 형제들, 자신을 제외한 형제 모두
  // $(".three").prev().find("span").css(myCss);
  // $(".three").prevAll("li").find("span").css(myCss);
  // $(".three").prevAll("li").css(myCss);
  // $(".three").siblings("li").find("span").css(myCss);

  // 부모선택자
  // $('.three').parent('ul').css(myCss);
  // $('span').parents("ul").css(myCss);
  // $('.four').parents("ul").css(myCss);

  // ul의 바로 직전의 li에게 적용 Until:~까지의부모격에서 해당하는 요소중하나
  // $('span').parentsUntil("ul").css(myCss);
  // $('.four').parentsUntil('ul').css(myCss);  

  // 해당위치 지정
  // $('li').eq(2).css(myCss);
  // $('dd').index(0).css(myCss); //????????????

  $('.other_01').siblings().css({"marginBottom":"2rem"});

  // $('.four').parent().css({"padding":"2rem"});
  
  $('.four').parents("ul").css({
    "padding":"2rem", 
    "backgroundColor":"#333", 
    "borderRadius" : "3rem", 
    "border" : "2px solid #fff"
  });
  
  $('.four').parents().siblings("h2").css({"backgroundColor":"#fa0",});

  var fourI = $('.four').parent().index();
  // console.log(fourI);
  // console.log($('li').length); // 갯수
  // console.log($('li')); // 배열형식으로 알려줌
  $('li').eq(fourI+1).children("span").css({"textShadow":"0.2rem 0.2rem 0.2rem #fff"})


 })(jQuery);  