// canvas_02.js

(function($){

  // var canvas = document.getElementsByClassName('.paper')[0];
  var canvas = document.querySelector('.paper');
  var ctx = canvas.getContext('2d');

  // 사각형을 제외한 선을 그릴때에는 선의 시작이라는 표기를 먼저 해야함
  ctx.beginPath();  // 최초의 시작

  ctx.moveTo(200,200);  // 시작점의 위치 잡는것
  ctx.lineTo(200,400);  // 시작점에서 그려지는 위치
  ctx.lineTo(600,400);  // 그 다음 선의 위치
  // ctx.lineTo(200,200);
  // ctx.closePath();      // 닫힌 도형 만들기
  
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 10;
  ctx.lineJoin = 'round'; // 모서리 모양
  // lineJoin = 'miter' | 'round' | 'bebel' ;
  ctx.lineCap = 'round';
  // lineCap = 'butt' | 'round' | 'square' ;

  ctx.stroke();
  
  ctx.moveTo(700,700);
  ctx.lineTo(500,700);
  ctx.stroke();

})(jQuery);