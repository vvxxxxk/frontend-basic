/**
 * function
 */

// 만약 2라는 숫자에 * 10 / 2 % 3 을 스트링으로 변환해서 반환받고 싶다면?
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

console.log("함수 선언 - 기본");
function calculate(num) {
    console.log((num * 10 / 2 % 3));
}
calculate(2);
calculate(3);
calculate(4);

console.log("함수 선언 - 매개변수");
function multiply(x, y) {
    console.log(x * y);
}
multiply(2, 4);

console.log("함수 선언 - default 매개변수");
function multiply1(x, y = 10) {
    console.log(x * y);
}
multiply1(2, 4);
multiply1(2);

console.log("함수 선언 - return");
function multiply2(x, y) {
    return x * y;
}
let ret = multiply2(2, 4);
console.log(ret);


console.log("Arrow 함수 - 기본");
let multiply3 = (x, y) => {
    return x * y;
}
console.log(multiply3(1, 2));

console.log("Arrow 함수 - 단일 표현식");
let multiply4 = (x, y) => x * y;
console.log(multiply4(2, 3));

let multiply5 = x => x * 4;
console.log(multiply5(3));

let multiply6 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply6(1)(2)(3));


console.log("arguments 키워드");
const multiply7 = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log(multiply7(2, 3, 4));

const multiplyAll = (...arguments) => {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(1, 2, 3, 4, 5));

console.log("함수 즉시 실행");
(function(x, y) {
    console.log(x * y);
})(5, 10);

console.log(typeof multiply);
console.log(multiply instanceof Object);    // 자바스크립트에서 함수는 Object