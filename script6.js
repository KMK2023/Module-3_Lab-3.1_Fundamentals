/** Question 6	
    a) Complete the inigo object by adding a lastName property and including it in the greeting. 
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see 
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. 

*/

const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const indigo = {
  firstName: "Indigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    return greeting + this.getCatchPhrase(person);
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
};

console.log(indigo.greeting(westley));
console.log(indigo.greeting(rugen));


// Below code is to diplay the result in the main HTML page - it needds to be repaired
var welcomeElement = document.getElementByClass(".addCatch");
welcomeElement.textContent = inigo.greeting(westley);
