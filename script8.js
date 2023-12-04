/** Question 8.: The object below represents a single city. 
1.	a)  Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below. 
2.	b)  Create a new object for a different city with different properties and call your function again with the new object. 


const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
*/
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

// To print with for..in loop
for (const property in sydney) {
  console.log(property + ":" + sydney[property]);
}

// To print "founded in" using If-else statement within the code
for (const property in sydney) {
  if (property.startsWith("found")) {
    console.log(property + " in " + sydney[property]);
  } else {
    console.log(property + ":" + sydney[property]);
  }
}

var cityName = document.getElementsByClassName("city");
cityName.textContent =
  "City: " + sydney.name + ", Population: " + sydney.population;

// Create a new object for a different city with different properties and call your function again with the new object.
const singa = {
  name: "Singapore",
  nickname: "Red-dot",
  weather: "Tropical",
  main_Economy: "Finance, Tourism",
  currency: "Singapore Dollars",
  population: "6 million",
};

for (const property in singa) {
  console.log(property + ":" + singa[property]);
}

// Below code is to diplay the result in the main HTML page - it needds to be repaired to add City
var cityName1 = document.getElementsByClassName("city1")[0];
cityName1.textContent =
  "City 1: " + singa.name + ", Population: " + singa.population;
