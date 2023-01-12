alert("Hello" + " Achini");

// Slicing and Extracting Parts of a String
var name = "Achini";
name.slice(0, 2); // --> 'Ac'

// 01 -->
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

// ******* 02 ****** -->
//1 create a var that stores the name that user enters via prompt.
var name = prompt("What is your name?");

//2 Capitalize the first letter of their name.

// a -> isolate the first char
var firstChar = name.slice(0, 1);

// b -> Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// c -> Isolate the rest of the name
var restOfName = name.slice(1, name.length);

// d -> Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();

// e -> concatenate the first char with the rest of the char
var CapitalisedName = upperCaseFirstChar + restOfName;

//3 We use the capitalised version of their name to greet the using an alert.
alert("Hello," + CapitalisedName);

// Hello, Achini.
