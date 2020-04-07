// js_04.js


/** =========================================================================
 * javascript 자료형
  기본형 - 숫자integer, 문자('')string, 논리형(참:true/거짓:false)boolean, 심볼
  특수형 - undefined, null
  복합형 - 객체object(배열, 객체), 함수function
 ============================================================================ */

// typeof()

var n = 7;
var t2, r;
var t = typeof(n);

//console.log(n + '은 ' + t + '이다.');


n = 'text';
t = typeof(n);
//console.log(t);

n = 1 === 10;
//console.log(n);
t = typeof(n);
//console.log(t);

n = null;
//console.log(n);
t = typeof(n);
t2 = typeof(r);
// console.log(t, t2);

var check = n==r;
// console.log(check);

/* = 기호가 
  1개일 경우 : 대입
  2개일 경우 : 비교 (단순 값만 비교)
  3개일 경우 : 형타입(typeof) 비교
*/

check = 1 === '1';
// console.log(check);

// null은 값을 강제 삭제시키는 형태이며, 형타입은 객체(object) 형식
// undefined 는 애초에 값을 넣은 적이 없으므로, 형타입은 미정의(undefined)형식 
// =========================================================================

// 배열(array-list) : []
// 객체(object-dictionary) : {} 
// 함수(function) :  function(){}

var arr = [1,2,10,5,100,70,'apple','grape','banana','집'];
// t = typeof(arr); //object
// console.log(t);
// console.log(arr);

// var fruit = ['apple', 'banana', 'grape', 'melon'];

var f1 ='apple';
var f2 ='banana';
var f3 ='grape';
var f4 ='melon';
var fruit=[f1,f2,f3,f4];

// console.log(fruit[3]);
// console.log(arr[200]);

// css 1번째를 ->1
// 다른  프로그램 언어 : 1번째 -> 0

// =========================================================

//class 생각하면 될듯? 객체
var obj = {
        "apple" : "red",
        "monkey banana" : "yellow",
        "grape" : "green",
        "melon" : "mint"
}; 

// t=typeof(obj);
// console.log(obj);

// console.log(obj.apple);
// console.log(obj["monkey banana"]);

var obj2 = {
  0 : "samsung",
  1 : "apple",
  2 : "lg"
}
// console.log(obj2[0]);


// 함수 표현식
// var Fn = function(){}

// 함수 선언식 
// function Fn1(){}

//function 함수명(매개변수(인수)) {인자(인수를 받아쓰는 입장)};

function F1(i, d){
  return i * d * 8500;
}
// t = typeof(F1);
// console.log(t);
console.log(F1(8, 5));

// ==========================================================
// 함수 : 기능을 수행하게 만드는 묶음
// 객체 : 속성명:값 형식의 배열 
// 배열 : 값의 나열
// boolean : true/false 을 비교하여 판단하는 기능 
// 문자 : '', "" 묶어서 글자로 인지되는 형태
// 숫자 : 소수, 음수, 양수, 정수 ...
// null : 이미 사용한 변수/배열/객체의 내용을 비우는것
// undefined : 사용하기 전 선언되어 있으나 값이 비어있는 것  