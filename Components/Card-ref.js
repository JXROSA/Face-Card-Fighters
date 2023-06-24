/* Card Range
const cards_range = [
 "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Joker"
]
// Suits
const Suits = [
 "Spades", "Clubs", "Hearts", "Diamonds"
]

// Button
const Joker = document.getElementById("Jokers")
Joker.addEventListener("click", function () {
 console.log(Joker_cards);
});
// Joker Reference 
const Joker_cards = cards_range[13];

// King Button
const Kings = document.getElementById("Kings")
Kings.addEventListener("click", function () {
 console.log(King_cards);
});
// King Reference 
const King_cards = {
 King_Spades: cards_range[12] + " of " + Suits[0],
 King_Clubs: cards_range[12] + " of " + Suits[1],
 King_Hearts: cards_range[12] + " of " + Suits[2],
 King_Diamonds: cards_range[12] + " of " + Suits[3],
}
// Queen
// Button

const Queens = document.getElementById("Queens")
Queens.addEventListener("click", function () {
 console.log(Queen_cards);
});
const Queen_cards = {
 Queen_Spades: cards_range[11] + " of " + Suits[0],
 Queen_Clubs: cards_range[11] + " of " + Suits[1],
 Queen_Hearts: cards_range[11] + " of " + Suits[2],
 Queen_Diamonds: cards_range[11] + " of " + Suits[3],
}
// Button
const Jacks = document.getElementById("Jacks")
Jacks.addEventListener("click", function () {
 console.log(Jack_cards);
});
// Jack
const Jack_cards = {
 Jack_Spades: cards_range[10] + " of " + Suits[0],
 Jack_Clubs: cards_range[10] + " of " + Suits[1],
 Jack_Hearts: cards_range[10] + " of " + Suits[2],
 Jack_Diamonds: cards_range[10] + " of " + Suits[3],
}
// Button
const Tens = document.getElementById("Tens")
Tens.addEventListener("click", function () {
 console.log(Ten_cards);
});
// 10
const Ten_cards = {
 Ten_Spades: cards_range[9] + " of " + Suits[0],
 Ten_Clubs: cards_range[9] + " of " + Suits[1],
 Ten_Hearts: cards_range[9] + " of " + Suits[2],
 Ten_Diamonds: cards_range[9] + " of " + Suits[3],
}
// 9
// Button

const Nines = document.getElementById("Nines")
Nines.addEventListener("click", function () {
 console.log(Nine_cards)
})
const Nine_cards = {
 Nine_Spades: cards_range[8] + " of " + Suits[0],
 Nine_Clubs: cards_range[8] + " of " + Suits[1],
 Nine_Hearts: cards_range[8] + " of " + Suits[2],
 Nine_Diamonds: cards_range[8] + " of " + Suits[3],
}
// 8
// Button

const Eights = document.getElementById("Eights")
Eights.addEventListener("click", function () {
 console.log(Eight_cards)
})
const Eight_cards = {
 Eight_Spades: cards_range[7] + " of " + Suits[0],
 Eight_Clubs: cards_range[7] + " of " + Suits[1],
 Eight_Hearts: cards_range[7] + " of " + Suits[2],
 Eight_Diamonds: cards_range[7] + " of " + Suits[3],
}
// 7
// Button

const Sevens = document.getElementById("Sevens")
Sevens.addEventListener("click", function () {
 console.log(Seven_cards)
})
const Seven_cards = {
 Seven_Spades: cards_range[6] + " of " + Suits[0],
 Seven_Clubs: cards_range[6] + " of " + Suits[1],
 Seven_Hearts: cards_range[6] + " of " + Suits[2],
 Seven_Diamonds: cards_range[6] + " of " + Suits[3],
}
// 6
// Button

const Sixs = document.getElementById("Sixs")
Sixs.addEventListener("click", function () {
 console.log(Six_cards)
})
const Six_cards = {
 Six_Spades: cards_range[5] + " of " + Suits[0],
 Six_Clubs: cards_range[5] + " of " + Suits[1],
 Six_Hearts: cards_range[5] + " of " + Suits[2],
 Six_Diamonds: cards_range[5] + " of " + Suits[3],
}
// 5
// Button

const Fives = document.getElementById("Fives")
Fives.addEventListener("click", function () {
 console.log(Five_cards)
})
const Five_cards = {
 Five_Spades: cards_range[4] + " of " + Suits[0],
 Five_Clubs: cards_range[4] + " of " + Suits[1],
 Five_Hearts: cards_range[4] + " of " + Suits[2],
 Five_Diamonds: cards_range[4] + " of " + Suits[3],
}
// 4
// Button

const Fours = document.getElementById("Fours")
Fours.addEventListener("click", function () {
 console.log(Four_cards)
});
const Four_cards = {
 Four_Spades: cards_range[3] + " of " + Suits[0],
 Four_Clubs: cards_range[3] + " of " + Suits[1],
 Four_Hearts: cards_range[3] + " of " + Suits[2],
 Four_Diamonds: cards_range[3] + " of " + Suits[3],
}
// Button
// 3

const Threes = document.getElementById("Threes")
Threes.addEventListener("click", function () {
 console.log(Three_cards)
});
const Three_cards = {
 Three_Spades: cards_range[2] + " of " + Suits[0],
 Three_Clubs: cards_range[2] + " of " + Suits[1],
 Three_Hearts: cards_range[2] + " of " + Suits[2],
 Three_Diamonds: cards_range[2] + " of " + Suits[3],
}
// 2
// Button

const Twos = document.getElementById("Twos")
Twos.addEventListener("click", function () {
 console.log(Two_cards)
});
const Two_cards = {
 Two_Spades: cards_range[1] + " of " + Suits[0],
 Two_Clubs: cards_range[1] + " of " + Suits[1],
 Two_Hearts: cards_range[1] + " of " + Suits[2],
 Two_Diamonds: cards_range[1] + " of " + Suits[3],
}
// 1
// Button

const Aces = document.getElementById("Aces")
Aces.addEventListener("click", function () {
 console.log(Ace_cards)
});
const Ace_cards = {
 Ace_Spades: cards_range[0] + " of " + Suits[0],
 Ace_Clubs: cards_range[0] + " of " + Suits[1],
 Ace_Hearts: cards_range[0] + " of " + Suits[2],
 Ace_Diamonds: cards_range[0] + " of " + Suits[3],
}

// All Cards
All_Cards = Joker_cards + King_cards + Queen_cards + Jack_cards + Ten_cards + Nine_cards + Eight_cards + Seven_cards + Six_cards + Five_cards + Four_cards + Three_cards + Two_cards + Ace_cards

// Random Card Selector

// const Random_Card_Selector = document.getElementById("Random_Card_Selector")
// Random_Card_Selector.addEventListener("click", function () {
//  console.log(All_Cards)
// });

*/
// Random Card Maker
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var deck1 = [];
var deck2 = [];
var player1Hand = [];
var player2Hand = [];

// Create the decks
for (var i = 0; i < suits.length; i++) {
 for (var j = 0; j < ranks.length; j++) {
  var card = ranks[j] + ' of ' + suits[i];
  if (ranks[j] !== 'Joker1' && ranks[j] !== 'Joker2') {
   deck1.push(card);
  }
  deck2.push(card);
 }
}

// Shuffle the decks
function shuffleDeck(deck) {
 for (var i = deck.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
 }
}

shuffleDeck(deck1);
shuffleDeck(deck2);

// Player One's turn to draw cards
function drawCardsPlayerOne() {
 for (var i = 0; i < 7; i++) {
  if (deck1.length > 0) {
   var drawnCard = deck1.pop();
   player1Hand.push(drawnCard);
  } else {
   console.log("Player One's deck is empty.");
   break;
  }
 }

 console.log("Player One's hand:", player1Hand);
}

// Player Two's turn to draw cards
function drawCardsPlayerTwo() {
 for (var i = 0; i < 7; i++) {
  if (deck2.length > 0) {
   var drawnCard = deck2.pop();
   player2Hand.push(drawnCard);
  } else {
   console.log("Player Two's deck is empty.");
   break;
  }
 }

 console.log("Player Two's hand:", player2Hand);
}

// Draw Three Cards for Player One
function drawThreeCardsPlayerOne() {
 var drawnCards = [];
 for (var i = 0; i < 3; i++) {
  if (deck1.length > 0) {
   var drawnCard = deck1.pop();
   drawnCards.push(drawnCard);
  } else {
   console.log("No more cards in Player One's deck.");
   break;
  }
 }
 console.log("Player One drawn cards:", drawnCards);
}

// Draw Three Cards for Player Two
function drawThreeCardsPlayerTwo() {
 var drawnCards = [];
 for (var i = 0; i < 3; i++) {
  if (deck2.length > 0) {
   var drawnCard = deck2.pop();
   drawnCards.push(drawnCard);
  } else {
   console.log("No more cards in Player Two's deck.");
   break;
  }
 }
 console.log("Player Two drawn cards:", drawnCards);
}

// Button event listeners
var playerOneButton = document.getElementById("PlayerOneButton");
playerOneButton.addEventListener("click", drawCardsPlayerOne);

var playerTwoButton = document.getElementById("PlayerTwoButton");
playerTwoButton.addEventListener("click", drawCardsPlayerTwo);

var drawThreePlayerOneButton = document.getElementById("DrawThreePlayerOneButton");
drawThreePlayerOneButton.addEventListener("click", drawThreeCardsPlayerOne);

var drawThreePlayerTwoButton = document.getElementById("DrawThreePlayerTwoButton");
drawThreePlayerTwoButton.addEventListener("click", drawThreeCardsPlayerTwo);
