document.addEventListener('DOMContentLoaded', function () {
 var button = document.getElementById('draw');

 // Define the event listener function
 function handleClick() {
  console.log('Button clicked!');

  // Remove the event listener after the first click
  button.removeEventListener('click', handleClick);
 }

 // Add the event listener to the button
 button.addEventListener('click', handleClick);
});