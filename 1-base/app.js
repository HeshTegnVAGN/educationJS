// let num = 42; //number
// let firstName = 'Vlad'  // string
// const isProgrammer = true // boolean

/*
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' //bad
let myNum = 34 // good
let num42 = 10
*/

/*
Restricted
let 42num = '11'
let my-num = 1
*/

// firstName = 'Max'
// isProgrammer = false // error because of const

// alert(firstName)
// console.log('Test:', num, isProgrammer, firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)

// num = num2 - num
// console.log(num, num2)

// let = num3 = (num + 10 * 2) / 5 - 1
// console.log(num3)

// const fullName = firstName + ' Minin'
// const fullName = firstName + ' ' + 'Minin'

const resultElement = document.getElementById ('result')
const input1 = document.getElementById ('input1')
const input2 = document.getElementById ('input2')
const submitBtn = document.getElementById ('submit')
const plusBtn = document.getElementById ('plus')
const minusBtn = document.getElementById ('minus')
const ymnBtn = document.getElementById ('ymn')
const delBtn = document.getElementById ('del')

let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

ymnBtn.onclick = function () {
    action = '*'
}

delBtn.onclick = function () {
    action = '/'
}

function printresult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
    else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printresult(result) 
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printresult(sum)
    // } else if (action == '-') {                                           это плохой вариант. Слишком длинно
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printresult(sum)
    // }

}
