var header = $('h1');
var firstParagraph = $('.introduction');
var button = $('.button');
var quote = $('#quote');

button.on("click", quoteGenerator);

var quotes = ["You awe doing gweat sweetie (・`ω´・) ", "You make me feew pwoud.",
"Awl youw effowt wiwl pay off, I pwomise (・`ω´・) ", "You awe a wondewfuw pewson.",
"Youw smiwe does magic (・`ω´・) ", "You awe a wondew to be awound (・`ω´・) ", "UWU I wuv you (・`ω´・) ",
"I weawwy admiwe you (・`ω´・) ", "Positivity wiww be youw best fwiend today (・`ω´・) ",
"Today, you awe amazing.", "Good wuck is on youw side today (・`ω´・) ",
"Take a nyew opowtunyity if you get onye (・`ω´・) ", ]

function quoteGenerator(){
  console.log("you clicked the button!");
  var random = Math.random() * quotes.length;
  var rounded = Math.floor(random);
  var quote2 = quotes[rounded];
  quote.text(quote2)

}

console.log(header)
console.log(firstParagraph)
