/**
 * 타입 변환
 * type conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let strAge = age.toString();
console.log(typeof strAge, strAge);

// 문자열 타입으로 변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString()); 

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');



console.log('---------------');
// 암묵적
// 숫자에 앞뒤로 문자를 더하면 string 값으로 변환됨
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);  // 982
console.log('98' * 2);  // 196
console.log('98' - 2);  // 96
console.log('---------------');

// 불리언 타입으로의 변환
//  - String 값 안에 어떤 값이든 들어있다면 true
console.log(`!!'x': ` + !!'x');
console.log(!!'false');     // false라는 문자도 true
console.log(!!'0');         // 0이라는 문자는 true
console.log(!!{});          // object는 안에 값이 있든 없든 true
console.log(!![]);          // array는 안에 값이 있든없든 true
console.log(!!'');

console.log(!!0);           // false
console.log(!!false);       // false
console.log(!!undefined);   // false
console.log(!!null);        // false

