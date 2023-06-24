/*
const defense = {
 red: { heart: 3, },
 black: { clubs: 3, },


}

const attack = {
 red: { diamonds: 3 },
 black: { spades: 3, }
}

const king = {
 name: 'king',
 attack: 0,
 defense: 0,
 speed: 0,
 energy: 0,
}

let Player_One = {
 red_attack: 7,
 black_attack: 7,
 red_d_s: 7,
 black_d_s: 7,
}

let Player_Two = {
 red_attack: 5,
 black_attack: 5,
 red_d_s: 5,
 black_d_s: 5,
}

function HealthCheck() {
 if (Player_One.red_attack > Player_Two.red_d_s) {
  console.log("Your attack is higher");
 }
}

HealthCheck()
// if P1 red attack <= P2 red defense then do nothing 
// if P1 red attack > P2 red defense then check black cards, 
// if P1 black card > P2 black card => kill 
// if P1 black card <- P2 black card => Flip Coin heads:kill,Tails: miss
*/
// Get the button element
const flipButton = document.getElementById('flipButton');

// Add a click event listener to the button
flipButton.addEventListener('click', flipCoin);

// Function to flip the coin
function flipCoin() {
 // Generate a random number between 0 and 1
 const randomNumber = Math.random();

 // Determine the result based on the random number
 const result = randomNumber < 0.5 ? 'killed' : 'missed';

 // Display the result in the console
 alert(`You have ${result} the opponent!`);
}



