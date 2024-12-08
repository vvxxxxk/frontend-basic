/**
 * data types
 * 
 * JS에는 여섯 개의 primitive type과 한 개의 object type이 있다.
 * 
 * primitive type
 * 1) Number    (숫자)
 * 2) String    (문자열)
 * 3) Boolean   (불리언)
 * 4) undefined (언디파인드)
 * 5) null      (널)
 * 6) Symbol    (심볼)
 * 
 * object type
 * 1) Object    (객체)
 *  - Function, Array, Obejct, ...
 */

// Number 타입
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('---------------');


// String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브'";
console.log(ive);

const iveWonYoung = `아이브
장원영
백틱으로 문자열 선언 시 입력한 그대로 출력되는 것을 알 수 있다! " \ '`
console.log(iveWonYoung);
const groupName = '아이브';
console.log(`${groupName} 안유진`);
console.log('---------------');


// Boolean 타입
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('---------------');


// Undefined 타입
//  - 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
//  - 직접 undefined로 값을 초기화하는 것은 지양해야 한다.
let isUndefined;
console.log(typeof isUndefined);
console.log('---------------');

// Null 타입
//  - undefined와 마찬가지로 값이 없다는 뜻이나 JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용
//  - 아래의 타입을 확인하면 object 타입으로 나옴 -> 일종의 버그임 (이미 null을 object 타입으로 두고 개발한 레거시 코드가 너무 많아서 수정 X)
let isNull = null;
console.log(typeof isNull);
console.log('---------------');

// Symbol 타입
//  - 유일무이한 값을 생성할 때 사용한다.
//  - 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
console.log('---------------');


// Object 타입
//  - key:value 쌍으로 이루어져 있음
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(typeof dictionary);

// Array 타입
//  - 값을 리스트로 나열할 수 있는 타입
const iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log(iveMembers)
console.log(iveMembers[0]);
console.log(iveMembers[5]);
console.log(typeof iveMembers);
console.log('---------------');