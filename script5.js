/**
 * Question 5.	Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 
function getGreeting(name) {
return 'Hello ' + name + '!';
 */

function getGreeting(name) {
    return 'Hello ' + name + '!'};

// Function Expression syntax
const getGreeting = function(name){return 'Hello ' + name + '!'}
console.log(getGreeting)
const greeting=getGreeting("Ram")
console.log(greeting)

//Arrow function syntax
getGreeting2 = (name2)=>{return 'Hello ' + name2 + '!'}
console.log(getGreeting2)
const greeting2=getGreeting2("Ram")
console.log(greeting2)

