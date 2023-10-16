/** let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
console.log(result) += 'less than 10';
} else {
console.log(result) += 'greater than 10';
} */

let a = 2;
let b = 3;
let result = `${a}` + `${b} ` + `is`;
if (a + b < 10) {
console.log(result += ' less than 10');
} else {
console.log(result += ' greater than 10');
} 