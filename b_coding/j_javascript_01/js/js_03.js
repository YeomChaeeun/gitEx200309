// js_03.js

//const, let, var

var a, b, c;

a=10;
b='10';

// console.log(a, b);
// console.log(a);
// console.log(b);

// console.log(typeof(a));
// console.log(typeof(b));

// c = a + 10; //10 + 10
// console.log(c);

// c = 'x' + 'i';  
// console.log(c);

// c = 10 + 'i';
// console.log(c);

// c = 1 + '1000'; //11000
// console.log(c, typeof(c));

c = a + b;
// console.log(c);

c = parseInt(c) + 10; //parseInt() -> ()안의 내용을 정수화 처리 
// console.log(c);

c = c + 10;
// console.log(c);

c = 'a' + c;
// console.log(c);

c = parseInt(c);
// console.log(c);

// 숫자 + 숫자 = 숫자
// 문자 + 숫자 = 문자로 변환이 되면서 나열
// 문자 + 문자 = 나열 
// parseInt() = 앞에서부터 순서대로 정수로 변환, 
// 중간에 문자가 오면 이전 숫자까지만 처리 첫글자가 문자이면 NaN(숫자가아님) 도출 
// 문자의 연산은 나열을 뜻하는 +만 사용, 나머지 / * - % 연산은 사용하지 않음

// ====================================================================================

// +(더하기), -(빼기), *(곱하기), /(나누기), %(나머지)

var d, e, f, g;

d = 10 + 100;
// console.log(d); //110

d = 10 - 5;
// console.log(d); //5

d = 10 * 2;
// console.log(d); //20

d = 10 / 3;
// console.log(d); // 3.333333
// console.log(Math.round(d)); //3
// console.log(Math.ceil(d)); //4

// Math.abs()   : 절댓값
// Math.round() : 반올림
// Math.ceil()  : 소수점 없애서 전체 올린 숫자
// Math.floor()  : 소수점 없애서 전체 낮춘 숫자
// Math.PIE()
// Math.random() : 0~1
// Math.sign() 값이 양수/음수 구분

// parseInt() - 강제로 정수화(소수점 가질 수 없음)
// parsefloat() - 강제로 실수화(소수점 가질 수 있음)


d = 10 % 3;
console.log(d); //1

// 홀수/짝수
// 요일

e = 3 % 2;
if(e==1){
  // console.log('홀수값');
}else{
  // console.log('짝수값');
}

// (e==1)? console.log('홀수값') : console.log('짝수값');
//a==b -> a와 b서로 비교하여 true/false 값 도출
//(조건비교)? 조건이 참인경우 output : 조건이 거짓인 경우 output ;

/*
e = 10; 
console.log(e);

e = e + 5 ;
console.log(e);

e = e + 20 ;
console.log(e);

e+=10;
console.log(e);

e+=300;
console.log(e);

e-=100;
console.log(e);

e*=10;
console.log(e);

e/=100;
console.log(e);

e = Math.round(e);
console.log(e);

e%=4;
console.log(e);

*/

f = 7;
console.log(f);

f = f+1;
console.log(f);

f+=1;
console.log(f);

f++;
console.log(f);

f++;
console.log(f);

++f;
console.log(f); //12

console.log(++f);
console.log(++f);
console.log(++f);
console.log(++f);
console.log(++f); //17
console.log(f); //17

console.log('====================='); 

console.log(f++); //17
console.log(f++); //18
console.log(f++); //19
console.log(f++); //20
console.log(f++); //21
console.log(f); //22

console.log('====================='); 
console.log(f--); //22
console.log(--f); //20

// 증감연산자 : ++, -- 처리하여 1씩 증가/감소 
// 전치연산자, 후치연산자




