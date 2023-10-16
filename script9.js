/** Question 9.	Use the following variables to understand how JavaScript stores objects by reference. 
a)  Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift) 
b)  Create a new dog2 variable equal to dog1 and give it a new value 
c)  Create a new cat2 variable equal to cat1 and change its name property 
d)  Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why? 
e)  Change the way the moreSports and cat2 variables are created to ensure the originals remain independent 
*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let originalTeamSports = [...teamSports]; 

let moreSports = teamSports.push('TableTennis','Soccer', 'Kabadi','Silat');

teamSports.unshift('Frizbee');


console.log(moreSports);
console.log(teamSports);

teamSports.unshift('Frizbee');

console.log(teamSports);
console.log('Modified Array of sports:', teamSports);
console.log('Original Array of sports:', originalTeamSports);

let dog2 = dog1;
dog1= 'singa';

console.log('original dog name was: ' + dog2);
console.log('new dog name is :' + dog1);


let cat2=cat1;
cat1.name='Sharpy';
console.log(cat1);






