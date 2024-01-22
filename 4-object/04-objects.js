const person = {
    name: 'Vlad',
    age: 29,
    isYouTuber: true,
    languages: ['ru', 'en'],
    address: {
        city: 'Saint-Petersburg',
        street: 'Nevsky',
    },
    'complex key': 'complex value',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet from person'), this;
    },
    arrow: () => {
        console.log('Person Arrow', this);
    },
    info() {
        console.log('Person name', this.name);
    },
}

// console.log(person.address);
// const addressKey = 'address'
// console.log(person['addressKey']);
// console.log(person['complex key']);
// person.age++
// person.languages.push('de')
// console.log(person.languages);
// delete person.address
// console.log(person);

// Destruction
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const { age, name: firstName = 'TEST', languages } = person

// console.log(languages, age, firstName);

// console.log([1, 2]);

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key]);
//     }
// }

// const keys = Object.keys(person)
// keys.forEach(key => {
//     console.log(person[key]);
// })

const logger = {
    keys() {
        console.log('Objext keys', Object.keys(this));
    },
    keysAndValues() {
        Object.keys(this).forEach((key) => {
        console.log('Key', key);
        console.log('Value', this[key]);
})
    }
}


// const bound = logger.keys.bind(person)
// bound(false)

// logger.keys.call(person, false)
// logger.keys.apply(person, [false])


class Human { 
    static isHuman = true

    humanGreet() {
        console.log('Greet from human');
    }
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefind name'
        this.age = age ?? 'Undefind age'
    }

    sayHello() {
        console.log('Hello from', this.name);
    }
}

const person1 = new Person('Vlad', 30)
const person2 = new Person('Viki', 20)

// console.log(Human.isHuman)


















