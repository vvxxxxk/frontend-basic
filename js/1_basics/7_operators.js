/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 + 10);
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('----------');

/**
 * 증가와 감소
 *  - 연산자의 위치에 따라 전위 증감 연산자, 후위 증감 연산자로 나뉨
 */
let number = 1;
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);
console.log('----------');

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);    // number

sample = true;
console.log(+sample);           // 1
console.log(typeof +sample);    // number

sample = '안유진';
console.log(+sample);           // Nan, 숫자가 아닌 값을 넣으면 Not a Number 처리

sample = '99';
console.log(-sample);           // -99
console.log('----------');

/**
 * 할당 연산자 (assignment opeerator)
 */
number = 100;
console.log(number);    // 100

number += 10;
console.log(number);    // 110
console.log('----------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

// 값의 비교 - 결과가 딱 봐도 이상해 잘 쓰이지 않음
console.log(5 == 5);        // true
console.log(5 == '5');      // true
console.log(0 == '');       // true
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(5 != 5);        // false
console.log(5 != '5');      // false
console.log(0 != '');       // false
console.log(true != 1);     // false
console.log(false != 0);    // false

// 값과 타입의 비교 - 값과 타입을 모두 참고해서 비교
console.log(5 === 5);       // true
console.log(5 === '5');     // false
console.log(0 === '');      // false
console.log(true === 1);    // false
console.log(false === 0);   // false
console.log(5 !== 5);       // false
console.log(5 !== '5');     // true
console.log(0 !== '');      // true
console.log(true !== 1);    // true
console.log(false !== 0);   // true
console.log('----------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);       // true
console.log(100 < 1);       // false
console.log(100 <= 1);      // false
console.log(100 >= 1);      // true
console.log('----------');

/**
 * 삼항 조건 연산자
 */
console.log(10 > 0 ? '10이 0보다 크다.' : '10이 0보다 작다.');
console.log('----------');

/**
 * 논리 연산자
 * 
 * 1) &&
 *  - 둘 다 true여야 true를 반환
 * 2) ||
 *  - 하나만 true여도 true를 반환
 */
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log('----------');

/**
 * 단축 평가
 *  - 논리 연산자 (&&, ||)**의 특성을 활용한 평가 방식
 *  - 이는 연산의 좌측 값을 먼저 평가한 후, 필요에 따라 우측 값을 확인하거나 평가를 중단하는 방식
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('----------');


/**
 * 지수 연산자
 */
console.log(2**2);
console.log(10**3);
console.log('----------');


/**
 * null 연산자
 */
var isUndefined;
let isNull = null;

isUndefined = isUndefined ?? '좌측값이 null이거나 undefined일 때 우측값을 반환해라';
isNull ??= '좌측값이 null이거나 undefined일 때 우측값을 반환해라';
console.log(isUndefined);
console.log(isNull);
console.log('----------');