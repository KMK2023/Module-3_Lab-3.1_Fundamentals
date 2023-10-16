/** Question 6	
    a) Complete the inigo object by adding a lastName property and including it in the greeting. 
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see 
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. 

<!--const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
} } 
inigo.greeting(westley)
inigo.greeting(rugen)
*/

const westley = {
    name: 'Westley',
    numFingers: 5
};

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo = {
    firstName: 'Inigo',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
};

const greet1 = inigo.greeting(westley);
const greet2 = inigo.greeting(rugen);

const westley1 = {
    name: 'Westley',
    numFingers: 5
};

const rugen1 = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo1 = {
    firstName: 'Inigo',
    greeting1(person) {
        let greeting1 = `Hello ${person.name}, my name is ${this.firstName} ${this.secondName}. `;
        console.log(greeting1 + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return 'Nice to meet you.';
    }
};

inigo1.secondName= 'Chambers';


inigo.greeting1(westley1);
inigo.greeting1(rugen1);

const westley2 = {
    name: 'Westley',
    numFingers: 5
};

const rugen2 = {
    name: 'Count Rugen',
    numFingers: 6
};

const inigo2 = {
    firstName: 'Inigo',
    secondName: 'Chambers', // Added a secondName property
    greeting2(person) {
        let greeting2 = `Hello ${person.name}, my name is ${this.firstName} ${this.secondName}. `;
        console.log(greeting2 + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.numFingers === 5) {
            return 'Nice to meet you.';
        } else {
            return 'Extremely Pleased to meet you.';
        }
    }
};

inigo2.greeting2(westley2);
inigo2.greeting2(rugen2);

