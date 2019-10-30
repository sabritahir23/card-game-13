//build a deck of cards, then shuffle it and deal a hand
//card class,deck class

//create card class 
class Card{
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}
//create deck class
class Deck {
  constructor(){
    this.deck = [];
  }

  createDeck(suits,values){
    for(let suit of suits){
      for(let value of values){
        this.deck.push(new Card(suit,value));
      }
    }
    return this.deck;
  }
//shuffle function
  shuffle(){
    let counter = this.deck.length, temp, i;

    while(counter){
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }
//deal function
  deal(){
    let hand = [];
    while(hand.length < 13){
      hand.push(this.deck.pop());
    }
    return hand;
  }
}
//declare constants
const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
const values = [3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace',2];
//create new deck and shuffle
let deck = new Deck();
deck.createDeck(suits,values);
deck.shuffle();
//deal deck
console.log(deck.deal());
