/**
 * Question 10.	The following constructor function creates a new Person object with the given name and age values. 
a)  Create a new person using the constructor function and store it in a variable 
b)  Create a second person using different name and age values and store it in a separate variable 
c)  Print out the properties of each person object to the console 
d)  Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well. 
e)  Add a canDrive method to both the constructor function and the class that returns true 
if the person is old enough to drive.

*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const Person1 = new Person("Lax", 18);
const Person2 = new Person("Vaniu", 17);

console.log(Person1);
console.log(Person2);
for (propety in (Person.age <= 18,
console.log("Cannot drive"),
console.log("Can drive")));

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

const PersonClass1 = new PersonClass("Shya", 24);
const PersonClass2 = new PersonClass("Gaya", 26);

// Below code is to diplay the result in the main HTML page - it needds to be repaired
var display1 = document.querySelector(".consdecons");
var display2 = document.querySelector(".consdecons1");

display1.textContent = PersonClass1;
display2.textContent += PersonClass2;
