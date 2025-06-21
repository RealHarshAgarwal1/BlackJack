const generateDeck = () => {
    const deck = [];
    const suits = ["Hearts", "Club", "Diamond", "Spades"];
    const cards = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace",
    ];

    for(const card of cards){
        for(const suit of suits){
            deck.push({Card:card,Suit:suit});}
    }
    return deck;
}
const drawCard = (deck) => {
    const randomIndex= Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    deck.splice(randomIndex,1);
    return card;
}
const checkScore = (hand) => {
    let total = 0;

    for(const cardObject of hand){
        if(cardObject.Card==="Ace"){
            total+=1;
        }else if(cardObject.Card==="King"){
            total+=10;
        }else if(cardObject.Card==="Queen"){
            total+=10;
        }else if(cardObject.Card==="Jack"){
            total+=10;
        }else{
            total+=Number(cardObject.Card);
        }
    }
    return total;
};


const myDeck = generateDeck();
const playerHand = []
const dealerHand = [];


while(true){

    //deal cards
    playerHand.push(drawCard(myDeck));
    //check if Players bust over 21.
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore((dealerHand));

    //check if Player hit 21.
    if(playerScore===21){
        console.log(`You Won! Your Final Score = ${playerScore}
        The Dealer Score = ${dealerScore}`);
        break;
    }

    // deal dealer cards
    dealerHand.push(drawCard(myDeck));
    //check if Dealer bust
    dealerScore= checkScore(dealerHand);
    if(dealerScore>21){
        console.log(`You Won! Your Final Score = ${playerScore}
        The Dealer Score = ${dealerScore}`);
        break;
    }
    //check if Dealer hit 21.
    if(dealerScore===21){
        console.log(`You Lose! Your Final Score = ${playerScore}
        The Dealer Score = ${dealerScore}`);
        break;
    }
}

console.log("Ending Player Hand = ",playerHand)
console.log("Ending Player Score = ",checkScore(playerHand))
console.log("Ending Dealer Hand = ",dealerHand)
console.log("Ending Dealer Score = ",checkScore(dealerHand))

