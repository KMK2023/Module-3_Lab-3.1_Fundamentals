const userA = {
  name: "Jasmine",
  lastName: "Henderson",
  Gender: "M",
};

const userB = {
  name: "Amana",
  lastName: "Shal",
  Gender: "F",
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}
  ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers == 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};
inigo.greeting(userA);
inigo.greeting(userB);

// Access the div element with class "addLastName"
var GenderDiv = document.querySelector(".addLastName");

// Set the content of the div to the greeting
GenderDiv.textContent = inigo.greeting(userA);
