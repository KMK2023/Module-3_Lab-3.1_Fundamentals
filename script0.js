function getTodaysDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${month}/${day}/${year}`;
}

const todaysDate = getTodaysDate();
console.log(todaysDate);
// Access the div element with class "TodaysDate"
var dateDiv = document.querySelector(".TodaysDate");

// Set the content of the div to the todaysDate
dateDiv.textContent = todaysDate;
