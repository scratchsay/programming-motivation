var quotes = ["Programs must be written for people to read, and only incidentally for machines to execute.", "I’m not a great programmer; I’m just a good programmer with great habits.", "First, solve the problem. Then, write the code.", "The computer was born to solve problems that did not exist before.", "Good code is its own best documentation."];
var authors = ["Harold Abelson", "Kent Beck", "John Johnson", "Bill Gates", "Steve McConnell"];
var randomNumber = Math.random();
var randomIndex = Math.floor(randomNumber * quotes.length);
var randomQuote = quotes[randomIndex];
var randomAuthor = authors[randomIndex];
document.getElementById("quote").innerHTML = randomQuote;
document.getElementById("author").innerHTML = "- " + randomAuthor;