// canvas_04.js

// var canvas = document.getElementsByClassName('.paper')[0];
var canvas = document.querySelector('.paper');
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'hsla('+Math.random()*360+',100%,50%,0.7)';
var MoveCircle = function(posX,posY){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.fillStyle = 'hsla('+Math.random()*360+',100%,50%,0.7)';
  ctx.beginPath();
  var x = posX || 0;
  var y = posY || 0;
  ctx.arc(x,y,80,0,Math.PI*2,false);
  ctx.closePath();
  ctx.fill();
}
var i=0;
var j=400;
var setmove;

var MoveAni = function(){
  setmove = setInterval(function(){
    i+=10;
    if(i>200){ 
      j+=10;
      if(j>600){ 
        j=600; 
      }
    }
    MoveCircle(i,j);
    // console.log(i);
    if(i>700){
      clearInterval(setmove);
    }
  },40);
};
// MoveAni();

var k=0;
var reqAni;
function Move(){
  k+=1;
  console.log(k);
  reqAni = requestAnimationFrame(Move);

  if(k>=500){
    cancelAnimationFrame(reqAni);
  }
}

Move();