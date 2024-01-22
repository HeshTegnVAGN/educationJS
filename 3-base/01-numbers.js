const num = 42 //integer
const float = 42.42 // float
const pow = 10e3
const big = 1_000_000


// типы чисел
/*
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0);
console.log(Number.isFinite(Infinity));

const weird = 23 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(12));
*/

const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt));
// console.log(Number(strFloat));


// Парсинг простых чисел и дробных

// console.log(parseInt(strInt));
// console.log(parseFloat(strFloat));

// console.log(+strInt, +strFloat);

// .toFix фиксит результат числового значения кол-вом знаков после 0

// console.log(parseFloat((0.1 + 0.2).toFixed(10))); // можно записать так, но если запись parseFloat будет очень длинной, то ее можно будет занести в отдельную переменную

// BigInt - создан для работы с числами свыше MAX_SAFE_INTEGER

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94213423n);
// console.log(-42n);
// console.log(42.42n); // error - числа только целые могут быть. 

// console.log(10n - 4); // BigInt работает только с BigInt
// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);
// console.log(5 / 2);


// console.log(Math.E);
// console.log(Math.PI);

const myNum = 4.9

// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 3));
// console.log(Math.abs(-42));
// console.log(Math.max(2, 5, 42, 199, 0));
// console.log(Math.min(2, 5, 42, 199, 0));
// console.log(Math.floor(myNum));
// console.log(Math.ceil(myNum));
// console.log(Math.round(myNum));
// console.log(Math.trunc(myNum));
// console.log(Math.random());

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const num1 = getRandomNumber(10, 100)
// console.log(num1);









