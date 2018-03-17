

var carOptions =["camaro","mustang","charger","firebird","viper","supra"];
var chosenWord ="";
var lettersinsideWord =[];
var numberofSpaces =0; 
var spacesMissing =[]; 
var worngGuesses=[];  

var guessedLetter=[];

var wins = 0;
var losses =0;
var numberofGuesses=12;


function beginGame(){
  chosenWord = carOptions[Math.floor(Math.random() * carOptions.length)];
  lettersinsideWord = chosenWord.split("");
  numberofSpaces = lettersinsideWord.length;


  numberofGuesses = 12
  worngGuesses =[];
  spacesMissing =[];

for (var i= 0; i<numberofSpaces; i++){
    spacesMissing.push("_");
}

console.log(spacesMissing);


document.getElementById("guess-left").innerHTML = numberofGuesses;
document.getElementById("word-spaces").innerHTML = spacesMissing.join(" ");
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML=losses;

  console.log(chosenWord);
  console.log(lettersinsideWord);
  console.log(numberofSpaces)
}

function compareLetters(letter){

    var checkLetterinWord = false;

    for (var i=0; i<numberofSpaces; i++){
         if(chosenWord[i]== letter) {
          checkLetterinWord = true;
      }
  }

  if (checkLetterinWord){
    for (var i=0; i<numberofSpaces; i++){
      if(chosenWord[i] == letter){
        spacesMissing[i]=letter;

      }
    }
  }

else{worngGuesses.push(letter);
  numberofGuesses --

}

      console.log(spacesMissing);

}

function endOfRound(){


  document.getElementById("guess-left").innerHTML = numberofGuesses;
  document.getElementById("word-spaces").innerHTML = spacesMissing.join(" ");
  document.getElementById("wrong-guess").innerHTML = worngGuesses.join(" ");


  if(lettersinsideWord.toString()== spacesMissing.toString()){
    wins++;
    alert("good shit ma dude");

    document.getElementById("wins").innerHTML = wins;
    
    beginGame();
  }

  else if (numberofGuesses == 0){
    losses ++;
    alert("You Suck my Dude")

    document.getElementById("losses").innerHTML =losses;

    beginGame();
  }


}



beginGame();


document.onkeyup = function(event){
  guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
  compareLetters(guessedLetter);

  endOfRound();


  
  console.log(guessedLetter);


};













