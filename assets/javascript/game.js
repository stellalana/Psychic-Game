
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerGuesses = [];

document.onload = function() {
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuesses.push(compGuess);
	console.log(computerGuesses[0]);
}

document.onkeyup = function(event) {
	var playerGuess = event.key;
	guesses.push(playerGuess);
	console.log(computerGuesses[0]);

if ((playerGuess === computerGuesses[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	guesses.length = 0;
	computerGuesses.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuesses.push(compGuess);
	console.log(computerGuesses[0]);
}
else if ((playerGuess !== computerGuesses[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft - 1;
}
else {
	losses++;
	guessesLeft = 9;
	guesses.length = 0;
	computerGuesses.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuesses.push(compGuess);
	console.log(computerGuesses[0]);
}

var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses So Far: " + guesses + "</p>";
document.querySelector("#game").innerHTML = html;
}