/**
 * Question 5.	Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 
function getGreeting(name) {
return 'Hello ' + name + '!';
 */

// Function Declaration syntax
function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting); // This will log the function definition

const greetings = getGreeting("Ram");
console.log(greeting);

// Function Expression syntax
const getGreetingExpression = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreetingExpression); // This will log the function definition

const greetingExpression = getGreetingExpression("Ram");
console.log(greetingExpression);

// Arrow function syntax
const getGreetingArrow = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreetingArrow); // This will log the function definition

const greetingArrow = getGreetingArrow("Ram");
console.log(greetingArrow);

// Setting text content of an HTML element
const welcomeElement = document.querySelector(".welcome");

// You should set the text content using a function call, not the function itself
welcomeElement.textContent = greeting;
