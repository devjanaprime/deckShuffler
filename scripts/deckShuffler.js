console.log( 'deckShuffler.js sourced' );

// this array will hold our deck of cards
var deck = [];
// the possible suits
var suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
// the possible faces
var faces = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

var setupDeck = function(){
  // use suits and faces to create the deck
  for( var i=0; i < suits.length; i++){
    for( var j=0; j < faces.length; j++ ){
      // create a new card with the current face/suit combination
      var newCard={
        suit: suits[ i ],
        face: faces [ j ]
      };
      //push the new card into the deck
      deck.push( newCard );
    } // end faces loop
  } // end suits loop
  console.log( deck );
}
