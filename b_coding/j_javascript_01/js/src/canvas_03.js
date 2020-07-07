// canvas_03.js

(function($){

  // var canvas = document.getElementsByClassName('.paper')[0];
  var canvas = document.querySelector('.paper');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(400,400,300,0,Math.PI*2,true);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  // ctx.moveTo(550, 400);
  ctx.arc(400,400,250,0,Math.PI*2,true);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(400,400,200,0,Math.PI*1,false); // true : 반시계방향, false(default) : 시계방향
  ctx.stroke();
  

  ctx.lineWidth = 20;
  ctx.strokeStyle = '#fff';
  ctx.shadowColor = '#f03';
  ctx.shadowBlur = 20;

  ctx.beginPath();
  ctx.arc(300,300,50,0,Math.PI*2,true);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(500,300,50,0,Math.PI*2,true);
  ctx.closePath();
  ctx.stroke();
  


})(jQuery);