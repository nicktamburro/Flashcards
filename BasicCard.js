


function Card (front, back) {
    this.front = front;
    this.back = back;
}

var Card1 = new Card ("Title: The Fire Next Time", "Author: James Baldwin");
var Card2 = new Card ("Title: Pale Fire", "Author: Vladimir Nabokov");
var Card3 = new Card ("Title: Harry Potter and the Goblet of Fire", "Author: JK Rowling");


//for now this only works for the one card!
if (process.argv[2] === "front"){
console.log(Card1.front);
console.log(Card2.front);
console.log(Card3.front);
}

if (process.argv[2] === "back"){
    console.log(Card1.back);
    console.log(Card2.back);
    console.log(Card3.back);
}

module.exports = Card;
