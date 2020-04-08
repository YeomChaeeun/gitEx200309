// js_05_if.js

// 삼항연산자 - 수행 속도 빠름
// 비교 ? 참수행 : 거짓수행
var num = 10;
var moreN = 20;

(num < moreN)? console.log("num이 더 작은 수") : console.log("num이 더 큰수");




// 단수 분기
// if(비교) {참 수행} else {거짓 수행};

/*
if(num<moreN){
  console.log("num이 더 작은 수");
} else{
  console.log("num이 더 큰수");
}
*/
moreN = 'a';
var t = typeof(moreN);
if(t==='number'){
  console.log("moreN은 숫자");
} else if(t ==='string'){
  console.log("moreN은 문자");
} else{
  console.log("문자도 숫자도 아니다");
}

moreN = 1;
// 다수 분기 - switch(){case:; break; defalt:;}
/* switch(조건){ 
  case 조건부합1 : 
    기능수행 ;
    break;
  case 조건부합2 : 
    기능수행 ;
    break;
  case 조건부합3 : 
    기능수행 ;
    break;
  default : 기능수행 ;
}
*/

switch(moreN){
  case 1 :
    console.log("1이다");
    break;
  case 2 :
    console.log("2이다");
    break;
  case 3 :
    console.log("3이다");
    break;
  default :
    console.log("조건에 맞지 않은 상황이다");
}

