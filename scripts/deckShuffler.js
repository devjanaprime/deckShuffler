console.log( 'deckShuffler.js sourced' );

// this array will hold our deck of cards
var deck = [];
// the possible suits
var suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];
// the possible faces
var faces = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

var cutDeck = function(){
  console.log( 'in cutDeck' );
} // end funk

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
} // end funk

var showDeck = function(){
  // unordered list for the cards
  var outputList = document.createElement( 'ul' );
  // for each card add a list item
  for( var i=0; i < deck.length; i++ ){
    var listItem = document.createElement( 'li' );
    var textnode = document.createTextNode( deck[ i ].face + " of " + deck[ i ].suit );
    listItem.appendChild( textnode );
    outputList.appendChild( listItem );
  }
  document.getElementById( 'outputDiv' ).appendChild( outputList );
} // end funk

var shuffleDeck = function(){
  console.log( 'in shuffleDeck' );
} // end funk

//run the setupDeck Function
setupDeck();
