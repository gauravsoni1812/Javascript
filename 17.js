// winning number game

let winningNumber =19;

let userGuess= +prompt("Guess a Number");

console.log(typeof userGuess, userGuess);
 if(userGuess===winningNumber){
    console.log("Your guess is right");
}else if(userGuess<winningNumber){
     console.log("Guess a high number");
}else if(userGuess>winningNumber){
     console.log("Guess a lower number");
}