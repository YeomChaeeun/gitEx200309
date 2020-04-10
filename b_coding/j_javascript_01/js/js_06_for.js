// js_06_for.js

// while
// ------------------------------------------------
// 변수를 먼저 선언
// while(조건의비교){ 기능 ... 변수값의 변화}
// ------------------------------------------------

/*
var i = 0;
while(i<10){
  
  console.log(i);
  i++;

}*/

// do~while
// 최초의 변수선언
// do{}while(조건비교)

/*
var i = 0;

do{
  console.log(i);
  i+=1;
}while(i<10)
*/

// ======================================
// 최조의 변수값
// for(;조건비교;){ 기능... 변수의 변화}
// for{최초변수값; 조건비교; 변수의변화}{ 기능 ... }

/*
var i = 0;
for(;i<10;){

  console.log(i);
  i += 1;
}

for(let i=0; i<10; i+=1){
  console.log(i);
}
console.log(i); //var이면 지역변수여도 출력됨, let이면 출력되지 않음

*/


var arr = ['월','화','수','목','금','토','일'];
var obj = {
  'kf94':'한국인증초미세먼지용-마스크',
  'kf95':'중국인증마스크',
  'kf80':'한국인증미세먼지용-마스크'
};
/*
var j;
for(j=0;j<7;j+=1){
  console.log(arr[j]+'요일');
}
*/

// for-in

for(var k in obj){
  console.log(obj[k]);
}

arr.forEach(function(a){
  console.log(a); //arr 배열 각각의 순서를 가져옴
});

// for      -반복
// for in   -obj
// forEach  -arr
// for of