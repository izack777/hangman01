var winCounter = 0;
var lossCounter = 0;
var numberOfGuesses = 12;


var topicList = [ "Camaro" ,"Corvette", "Supra","Skyline"];

var wordSelected = "";

var lettersinWordPicked =[];

var blanksSpaces= 0; 

var blanksandOther = [];

var wrongGuess = [];


function beginGame(){

	numberOfGuesses = 12;

	wordSelected = topicList[Math.floor(Math.random()*topicList.length)];

	lettersinWordPicked = wordSelected.split("");

	blanksSpaces = lettersinWordPicked.lenght;



	console.log(wordSelected);
	

	blanksandOther= [];
	wrongGuess = [];

	for (var i = 0; i<blanksSpaces; i++){
		blanksandOther.push("_");

		console.log(blanksandOther);
	

document.getElementById("guess_left").innerHTML=numberOfGuesses;
document.getElementById("word_spaces").innerHTML=blanksandOther;
document.getElementById("wrong_guess").innerHTML=wrongGuess.join(" ");


}

function letterChecker(event){

	var lettersinWord= false

	for (var i = 0; i<blanksSpaces; i++){
		if (wordSelected[i]===event){

			lettersinWord = true
		}
	}

 	if(lettersinWord){
 		for(var i = 0; i < blanksSpaces; i++){
 			blanksandOther[i]= event;
 		}
 	}

console.log(blanksandOther);


	else{
		wrongGuess.push(event);
		numberOfGuesses--;
	}
}

function roundComplete(){


  console.log("wins:" + winCounter + " | losses: " + lossCounter + " | guess-left: " + numGuesses);
  
  document.getElementById("guess-left").innerHTML = numGuesses;

  document.getElementById("word-spaces").innerHTML = blanksAndSuccesses.join(" ");
 
  document.getElementById("wrong-guess").innerHTML = wrongGuesses.join(" ");
 
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;
    alert("You win!");
  
    document.getElementById("wins").innerHTML = winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
 
    lossCounter++;
  
    alert("You lose");
 
    document.getElementById("losses").innerHTML = lossCounter;

    beginGame();
  }
}

beginGame();

document.onkeyup = function(event) {

  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  checkLetters(letterGuessed);
  
  roundComplete();





};

beginGame()
