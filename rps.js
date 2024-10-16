function rockPaperScissors(player1, player2) {
  if (player1 === player2){
    return "draw"
  } 
  // ---!Rock beats Scissors!----
  // player1 wins
  if (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors") 
  {
    return "player1"
  } 
  // player2 wins
  if (player2.toLowerCase() === "rock" && player1.toLowerCase() === "scissors")
  {
    return "player2"
  } 

  //---!Scissors beats paper!----
  // player1 wins
  if (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper") 
    {
      return "player1"
    } 
  // player2 wins
  if (player2.toLowerCase() === "scissors" && player1.toLowerCase() === "paper")
  {
    return "player2"
  } 
  // --!Paper beats rock!----
  // player1 wins
  if (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock") 
    {
      return "player1"
    } 
  // player2 wins
  if (player2.toLowerCase() === "paper" && player1.toLowerCase() === "rock")
  {
    return "player2"
  } 
}




// #below my personal testing
// $node rps.js
console.log(rockPaperScissors("rock", "rock"))
console.log(rockPaperScissors("rock", "scissors"))
console.log(rockPaperScissors("scissors", "rock"))

console.log(rockPaperScissors("Scissors", "Paper"))
console.log(rockPaperScissors("Paper", "Scissors"))


console.log(rockPaperScissors("Paper", "Rock"))
console.log(rockPaperScissors("Rock", "Paper"))


// $npm run test - to run unit test in the terminal
// 6 areas of test --includes addional area/criteria


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}