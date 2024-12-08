/**
 * for
 */
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('----------');

/**
 * 1) for ... in
 * 2) for ... of
 *  - 반복 가능한 객체(iterable)에 대해서만 사용이 가능
 */
const yujin = {
    name: '안유진',
    year: 2003
}
for (let key in yujin) {
    console.log('key:' + key + ', value:' + yujin[key]);
}

const iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
for (let key in iveMembers) {
    let idx = key;
    console.log(idx + "번째 멤버: " + iveMembers[idx]);
}

// 배열의 경우에는 for ... of 문을 사용해 값을 바로 가져올 수 있음
for (let value of iveMembers) {
    console.log(value);
}
console.log('----------');

/**
 * while
 */
let number = 0;

while (number < 10) {
    number++;
    console.log(number);
}
console.log('----------');

/**
 * do ... while
 */
number = 0;
do {
    number++;
    console.log(number);
} while (number < 10);
console.log('----------');

/**
 * break;
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('----------');


/**
 * continue
 */
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
console.log('----------');