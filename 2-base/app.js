/* theory

const array = [1, 2, 3, 5, 20, 42, 111]
const arrayString = ['a', 'b', 'c', 'd', null, 12]



console.log(array.length)

console.log(array[2])

console.log(array[array.length - 1]) // array[6 - 1]
array[0] = 'Privet!'
console.log(array)

array[array.length] = 'becon'
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['записать блок про массивы', 'рассказать теорию объектов']

// function render() {

//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }

//     for (let note of notes ) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }

//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//         <li class="list-group-item d-flex justify-content-between align-items-center mb-2" style="border-radius: 10px;">
//             <span>${title}</span>
//             <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }

/**
 * Object theory


const person = {
    firstName: 'Vlad',
    lastName: 'Ivan',
    year: 2002,
    hasGirlfriend: false,
    langauges: ['ru', 'en', 'de'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}
console.log(person.year)
console.log(person['langauges'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true

console.log(person[key])
*/

const notes = [
    {
    title: 'Записать блок про массивы',
    completed: false,
    },
    {
        title: 'Рассказать теорию объектов',
        completed: true,
    },
]

function render() {

    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }

    for (let note of notes ) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    inputElement.value = ''
}

function getNoteTemplate(note) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2" style="border-radius: 10px;">
            <span>${note.title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
    `
}

