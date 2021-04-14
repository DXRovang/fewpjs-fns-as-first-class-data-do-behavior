/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let value = parseInt(string.split(":")[0], 10)
  if (value < 12){
    return "Good Morning";
  }
  else if (value > 12 && value < 17){
    return "Good Afternoon";
  } 
  else{
    return "Good Evening";
  } 
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let display = document.getElementById('greeting');
  display.innerText = `${string}`;
}