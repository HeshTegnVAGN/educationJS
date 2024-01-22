

// function greet(name) {
//     console.log('Hello -',name);
// }

// function Expression

// const greet2 = function (name){
//     console.log('2 Hello -',name);
// }

// greet('Vlad')
// greet2('Vlad')

// console.dir(greet);

// setTimeout(function (){
//     greet('Vlad2');
// }, 1500)

// let counter = 0

// setInterval(function(){
//     if (counter === 9) {

//     } else {
//         console.log(++ counter)
//     }
// }, 1000)


// function greet(name) {
//         console.log('Hello -',name);
//     }


// const arrow = (name, age) => {
//     console.log('Hello -',name. age);
// }

// const arrow2 = (name) => console.log('Hello -', name);

// function pow(num, exp) {
//     return Math.pow(num, exp)
// }

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow(2, 3));

// arrow2('Vlad', 11)

// ============= Default Parameters
// const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2));
// console.log(sum());

// function sumAll(... numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res

//     return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// console.log(sumAll(1, 2, 3, 4, 5));

// Closures

// function createPerson(name) {
//     return function(lastName) {
//         console.log(name + ' ' + lastName);
//     }
// }

// const addLastName = createPerson('Vlad')
// addLastName('Minin')
// addLastName('Petrov')


















