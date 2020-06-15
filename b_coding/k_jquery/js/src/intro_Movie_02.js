
(function($){

	$('#wrap').height('5000px');

	var imgArea = $('.img_area');
	var imgLen = 105;
	var imgUrl;

	for(var i=0; i<imgLen; i++){
		imgUrl = '../img/introMovie/introMovie_' + (i + 1);
		imgArea.append('<img src="' + imgUrl + '.png" alt="내용 입력">');
	}

	imgArea.find('img').css({display:'none', position:'relative', top:50+'%',width:100+'%',
	                         transform:'translateY('+ -50 + '%)'});
	imgArea.find('img').eq(0).show();
	imgArea.css({overflow:'hidden'});

	var j=0;
	var intervalImg = {};

	var SetIntervalImg = function(){
		intervalImg = setInterval(function(){		
			j += 1;		
			// console.log(j); 	
			imgArea.find('img').eq(j).show();
			imgArea.find('img').eq(j).siblings().hide();

			if(j >= imgLen){		
				clearInterval( intervalImg );	
			}
		}, 30);
	};

	// SetIntervalImg();
	$(window).on('scroll', function(){
		var st = $(this).scrollTop();
		if(st >= 50){
			SetIntervalImg();
		}
	});

	// ------------------------------------------

	var win   = $(window);
	var winH  = win.outerHeight();
	var splitText_01 = $('.split_text_01');
	var stT01_Img = splitText_01.find('img');
	var spT01Offset = splitText_01.offset().top;
	
	stT01_Img.css({position:'absolute',top:0, left:0, width:'100%', height:'auto'});
	var imgP = [];
	for(var k=0; k < 42; k++){		imgP[k] = -380 * k;	}
	var l=0;
	var Go= {};
	var Got = true;
	function SetI(){
		if(Got){
			Got = false;
			Go = setInterval(function(){
						l += 1;
						stT01_Img.css({top:imgP[l]});
						if(l > 42) { clearInterval(Go); }
							// console.log(l)
						}, 30);				
		}
	};

	win.on('scroll', function(e){
		var st = $(this).scrollTop();
		if(st + (winH/2) >= spT01Offset){
			SetI();
		}else if(st < winH/2){
			clearInterval(Go);
			l=0;
			stT01_Img.css({top:imgP[l]});
			Got = true;
		}
	});


//** 문제점(수정해야할 사항):  스크롤시 setInterval 기능이 반복수행됨.
// setInterval 중복 조건처리기능을 반복수행하지 못하게해서 처리

var arr2 = [ [], [] ];
for(var i=0; i<4; i++){	arr2[0][i] = 429 * -i;  }
for(var j=0; j<11; j++){ arr2[1][j] = 378 * -j;  }
console.log( arr2 );

var splitText_02 = $('.split_text_02');
var stT02_Img = splitText_02.find('img');
var spT02Offset = splitText_02.offset().top;

stT02_Img.css({position:'absolute',top:0, left:0, width:'400%', height:'auto'});

var s2 = 0;
var s2_01 = 0;
var s2_02 = 0;

var ForFn = function(){
	for(s2_01=0;s2_01<11;s2_01++){
		for(s2_02=0;s2_02<4;s2_02++){
			console.log(s2_01,s2_02);
			stT02_Img.css({top:arr2[0][s2_01]+'px', left:arr2[1][s2_02]+'px'});
		}
	}
};

ForFn();
var scroll2Bool = true;
var scroll2Go;
var Set2Interval = function(){
	if(scroll2Bool){
		scroll2Bool = false;
		scroll2Go = setInterval(function(){
			ForFn();
			s2+=1;
			console.log(s2);
			if(s2>15){
				clearInterval(scroll2Go);
			}
		},30);

	}
}

win.on('scroll', function(e){
	var thisScroll = $(this).scrollTop();
	var thisScrollPlus = thisScroll + (winH/3*2);

	if(thisScrollPlus>spT02Offset){
		Set2Interval();
		
	}else if((thisScroll-1000) < spT02Offset){
		clearInterval(scroll2Go);
		s2=0;
		scroll2Bool = true;
	}
});


})(jQuery);