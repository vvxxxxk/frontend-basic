/**
 * hoisting
 */

console.log('Hello');
console.log('World');

console.log(name);      // undefined
var name = '테스트';

// Hoisting이란?
// 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
// 그러나 실제 이동이 되는 것이 아님

// let, const에도 호이스팅은 되지만 초기화 전에는 ReferenceError가 발생 (호이스팅이 되지 않으면 정의되지 않는다는 에러가 발생)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;


/**
 * 결론
 * var: 선언은 호이스팅되지만 초기화는 나중에 이루어짐 → undefined 반환.
 * let/const: 선언은 호이스팅되지만 초기화 전에 접근 불가 → ReferenceError
 */