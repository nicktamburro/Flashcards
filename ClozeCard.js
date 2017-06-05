


function ClozeCard (cloze, fulltext) {
    this.cloze = cloze;
    this.partial = fulltext.replace(cloze,"...");
    this.fulltext = fulltext;
}

var ClozeCard1 = new ClozeCard("James Baldwin", "James Baldwin wrote 'The Fire Next Time");
var ClozeCard2 = new ClozeCard("Vladimir Nabokov", "Vladimir Nabokov wrote 'Pale Fire'");
var ClozeCard3 = new ClozeCard("JK Rowling", "JK Rowling wrote 'Harry Potter and the Goblet of Fire'")

if (process.argv[2] === "text"){
    console.log(ClozeCard1.fulltext);
    console.log(ClozeCard2.fulltext);
    console.log(ClozeCard3.fulltext);
} else if (process.argv[2] === "cloze"){
    console.log(ClozeCard1.partial);
    console.log(ClozeCard2.partial);
    console.log(ClozeCard3.partial);
} else {
    console.log("Please type 'text' or 'cloze'");
}



module.exports = ClozeCard;
