/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand) {
let k = 10;
let Q = 10;
let J = 10;
let A = 1 || 11;
for (var i = 0; i < hand.length; i++) {
var card1 = hand[0];
var card2 = hand[1];
var card3 = hand[2];
let card1= true;
let card2= true;
let card3= true;

var sum = (Number(card1) + Number(card2) + Number(card3));
 console.log(sum);
}
}
handValue(2, 2, 8);
handValue(2, 2, K);
handValue(2, Q,);
handValue(7, J,);
handValue(7, A,);
handValue(7, A, 18);


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/