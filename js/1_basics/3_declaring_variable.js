/**
 * 1) var
 *  - 더 이상 사용 X
 * 
 * 2) let
 *  - 값 수정 가능
 * 
 * 3) const
 *  - 값 수정 불가능
 * 
 */

var a = 'a';
console.log(a);

var n = 30;
console.log(n);

let ive = '아이브';
console.log(ive);

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
// const 변수는 수정이 불가능
// newJeans = 'new jeans';

var n = '홍길동';
console.log(n);

// var, let 키워드로 변수를 선언만하면 자동으로 초기값이 undefined로 할당
var v1;
console.log(v1);    // undefined

// const 키워드로 변수를 선언하면 동시에 초기화도 진행되어야 한다.
const v2 = '초기화하지 않으면 에러 발생';
console.log(v2);

