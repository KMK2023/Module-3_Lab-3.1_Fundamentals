function getGreeting(name) {
  return "Hello " + name + "!" + " Welcome to the website";
}
const greeting = getGreeting("Grapes");
console.log(greeting);
// Access the div element with class "welcomeText"
var welcomeDiv = document.querySelector(".welcomeText");

// Set the content of the div to the greeting
welcomeDiv.textContent = greeting;
