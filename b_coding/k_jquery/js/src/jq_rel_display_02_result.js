// jq_rel_display_02.js

(function($){
	// start

	var headOffset = $('#headBox').offset().top;

	$(window).on('scroll', function(){
		$('#headBox').css({'position':'fixed', 'bottom':'auto', 'top':0});
		var wScroll = $(this).scrollTop();
		if(headOffset < wScroll){
		}else{
			$('#headBox').removeAttr('style');
		}
	});
	// -----------------------

	var langMember = $('.lang_member');
	var lmList     = langMember.find('li');
	var lmListLink = lmList.find('a');

	lmListLink.on('mouseenter focus', function(){
		lmList.addClass('action');
	});
	langMember.on('mouseleave', function(){
		lmList.removeClass('action');
	});
	lmListLink.eq(-1).on('blur', function(){
		lmList.removeClass('action');
	});

	// ------------------------------------
	var gnbNav = $('.gnb_navi');
	var gnbDl  = gnbNav.find('dl');
	var gnbTitle = gnbNav.find('dt');
	var gnbTitleLink = gnbTitle.children('a');
	var gnbContent = gnbNav.find('dd');
	var gnbNavLink = gnbNav.find('a');
	var gnbConLink  = gnbContent.find('a');

	gnbContent.hide();
/* // part별로 처리
	gnbTitleLink.on('mouseenter focus', function(){
		 $(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
		 $(this).parent('dt').next('dd').stop().slideDown();
	});
	gnbNav.on('mouseleave', function(){
		gnbContent.stop().slideUp();
	});
	gnbContent.find('a').eq(-1).on('blur', function(){
		gnbContent.stop().slideUp();
	});
*/

	gnbDl.on('mouseenter', function(){
		gnbContent.stop().slideDown();
		gnbTitle.removeClass('action');
		$(this).find('dt').addClass('action');		
	});

  gnbNav.on('mouseleave', function(){
		gnbContent.stop().slideUp();
		gnbTitle.removeClass('action');g
		gnbContent.find('li').removeClass('action');
	});

	gnbTitleLink.on('focus', function(){
		gnbContent.stop().slideDown();
		gnbTitle.removeClass('action');
		$(this).parent('dt').addClass('action');
	});

	gnbConLink.on('focus', function(){
		gnbTitle.removeClass('action');
		$(this).parents('dd').prev('dt').addClass('action');
		
		gnbContent.find('li').removeClass('action');
		$(this).parent('li').addClass('action');
	});

  // gnbContent a의 마지막 요소에서 다른키를 눌러 빠져나갈때 gnbContent 접히는 기능
	gnbContent.find('a').eq(-1).on('blur keyup', function(e){
		var eKey38;
		console.log('find(a).eq(-1):'+ (e.type == 'keyup'));

		if( e.type == 'keyup' ){
			eKey38 = e.keyCode == 38;			
			
			if( !eKey38 ){
				gnbContent.stop().slideUp();
				gnbTitle.removeClass('action');
				gnbContent.find('li').removeClass('action');
			}
		}
	});

  // gnbTitleLink.eq(0).focus();
  // gnbNavLink 는 gnbNav.find('a')로 gnbNav안에 있는 모든 a태그를 담고 있음
  gnbNavLink.on('keyup', function(e){
    e.preventDefault();
    // e.stopPropagation();
    // console.log(e.keyCode);
    // 왼(37), 위(38), 오른(39), 아래(40), esc(27)
    var eKey = e.keyCode;
    var gnbUl = $('.gnb_navi').children('ul');
    var gnbLi = gnbUl.children('li');
    // var i = $(this).parent('li').index();			
    var thisLi = $(this).parents('li').eq(-1).index(); 
    // 현재 가리키고 있는 a요소의 parents의 li는 총 2개 
    //  -> a를 감싸고 있는 박스(gnbNavLink.parents(li))와 제일 큰박스(gnbLi) 
    // dd안의 li요소와 dl을 감싸는 li가 있기 때문에 마지막 li값(gnbLi)을 가르켜 주기 위해서 eq(-1)을 사용함
    
    // console.log($(this).parents('li'));
    // [li.action, li] == [gnbnavLink.parent(li), gnbLi]
    // console.log($(this).parents('li').eq(-1).index());

    // 현재 가르키고 있는 li가 마지막 요소라면 gnbLi[3]이라면 thisLi의 index()값을 -1로 지정해준다.
    // 0~3개의 dl을 감싸는 li의 마지막 번째를 가르키게 될경우 다시 -1로 지정해주어 0번째 li를 가리키게함
    // gnbLi.length = 4-1 -> gnbLi[3] 이라면(thisLi=3) thisLi(gnbLi의 index값)를 -1로 지정해준다
    if(thisLi >= gnbLi.length-1){	thisLi = -1; }
    else if(thisLi < 0){thisLi = gnbLi.length-1; }

    // console.log(i);
    switch(eKey){
      //왼
      case 37:
        // gnbLi[3]이라면 if문에 의해서 thisLi 변수가 -1로 지정되는데,
        // 왼쪽키를 누르면 gibLi.eq(-2)를 지정하여 해당 li의 왼쪽 li를 focus잡음
        gnbLi.eq(thisLi-1).find('a').eq(0).focus();   // eq(-1)은 배열의 역순으로 넘어간다
        gnbContent.find('li').removeClass('action');
      break;
      //위
      case 38:
        if($(this).parent('li').index() == 0){
          // dd>li의 index가 0이라면, 제일 1번째 값이라면 dt로 이동해야함
          gnbLi.eq(thisLi).find('a').eq(0).focus();
          gnbContent.find('li').removeClass('action');
        }else{
          $(this).parent('li').prev('li').find('a').focus();
          // dd>li>a의 부모 li의 이전 li안의 a에 포커스 잡음
        }
      break;
      //오른
      case 39:
        // gnbLi[3]이라면 if문에 의해서 thisLi 변수가 -1로 지정되는데,
        // 오른쪽 키를 누르면 gnbLi.eq(0)을 지정하여 첫번째 li를 focus잡음
        gnbLi.eq(thisLi+1).find('a').eq(0).focus();   // dt의 a요소를 잡음 dl안의 모든 a태그중 0번째로 가르킴
        gnbContent.find('li').removeClass('action');  // 다른 li의 action class 지워줌
      break;
      //아래
      case 40:
        console.log( $(this).parent()[0] == $('dt.action')[0] );
        if( $(this).parent()[0] == $('dt.action')[0] ){
          $(this).parent('dt').next('dd').find('a').eq(0).focus();
        }
        $(this).parent('li').next('li').find('a').focus();
      break;
      //esc - 빠져나가기
      case 27:
        gnbContent.stop().slideUp();
        gnbContent.find('li').removeClass('action');
        gnbTitle.removeClass('action');
      break;
    }
		});



	// =============================================================================
	var wH = $(window).height();
	//  $('#viewBox').height(wH);
	$('#viewBox').css({'height':wH + 'px'});

	// =============================================================================
		var accor = $('.accor');
		var accorDt = accor.find('dt');
		var accorBtn = accorDt.children('button');

		accorBtn.on('click', function(e){
			e.preventDefault();
			var myT           = $(this);
			var thisNext      = myT.parent('dt').next('dd');
			var thisNextState = thisNext.css('display') == 'none';
			
			if(thisNextState){
				thisNext.siblings('dd').stop().slideUp(300);
				thisNext.stop().slideDown(300);
				accorBtn.removeAttr('style');
				myT.css({'backgroundColor':'#aca'});
			}else{
				thisNext.stop().slideUp(300);
				myT.css({'backgroundColor':'transparent'});
			}
		/*
			// class 이름변경 ---------------------------------------
			var myTinI           = myT.find('i');
			var otherTinI        = myT.parent('dt').siblings('dt').find('i');
			var hasDownClassName = myTinI.hasClass('fa-caret-square-down');
			// console.log(hasDownClassName);
			if(hasDownClassName){
				myTinI.removeClass('fa-caret-square-down');
				myTinI.addClass('fa-caret-square-up');
				otherTinI.removeClass('fa-caret-square-up');
				otherTinI.addClass('fa-caret-square-down');
			}else{
				myTinI.removeClass('fa-caret-square-up');
				myTinI.addClass('fa-caret-square-down');
			}
			// ---------------------------------------
		*/
			
			// i요소 rotate기능 ---------------------------------------
			var myTinI           = myT.children('i');
			var otherTinI        = myT.parent('dt').siblings('dt').find('i');

			if(thisNextState){
				myTinI.css({'transform':'rotate(180deg)', 'transition':'all 300ms ease'});
				// otherTinI.css({'transform':'rotate(0)', 'transition':'none'});
				otherTinI.removeAttr('style');
			}else{
				myTinI.removeAttr('style');
			}
		
			// ------------------------------------------------
			
		}); 
	// end
	})(jQuery);