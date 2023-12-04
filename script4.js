/** Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do? 


let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
*/

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
a + b < 10 ? (result += "less than 10") : (result += "greater than 10");
console.log(result);

// Access the div element with class "welcomeText"
var calculationResult = document.querySelector(".calculation");

// Set the content of the calculation to the result
calculationResult.textContent = result + ` when adding ${a} and ${b}`;

/** How to console.log for different values of a,b */
