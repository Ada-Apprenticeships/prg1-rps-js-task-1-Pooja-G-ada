function rockPaperScissors(player1, player2) {
  if (player1 === player2){
    return "draw"
  } else if (player1.toLowerCase() === "rock" && player2.toLowerCase() === "scissors"){
    return "player1"
  } else if (player2.toLowerCase() === "rock" && player1.toLowerCase() === "scissors"){
    return "player2"
  } else if (player1.toLowerCase() === "scissors" && player2.toLowerCase() === "paper"){
    return "player1"
  } else if (player2.toLowerCase() === "scissors" && player1.toLowerCase() === "paper"){
    return "player2"
  } else if (player1.toLowerCase() === "paper" && player2.toLowerCase() === "rock"){
    return "player1"
  } else if (player2.toLowerCase() === "paper" && player1.toLowerCase() === "rock"){
    return "player2"
  // ---------!Additional criteria!-------
  } else if (player1.toLowerCase() === "lizard" && player2.toLowerCase() === "spock"){
    return "player1"
  } else if (player2.toLowerCase() === "lizard" && player1.toLowerCase() === "spock"){
    return "player2"
  } 
  else if (player1.toLowerCase() === "spock" && player2.toLowerCase() === "scissors"){
    return "player1"
  } else if (player2.toLowerCase() === "spock" && player1.toLowerCase() === "scissors"){
    return "player2"
  } 
  else if (player1.toLowerCase() === "rock" && player2.toLowerCase() === "lizard"){
    return "player1"
  } else if (player2.toLowerCase() === "rock" && player1.toLowerCase() === "lizard"){
    return "player2"
  } 
  else if (player1.toLowerCase() === "paper" && player2.toLowerCase() === "spock"){
    return "player1"
  } else if (player2.toLowerCase() === "paper" && player1.toLowerCase() === "spock"){
    return "player2"
  } 
}
// #below my personal testing
// $node rps.js
console.log(rockPaperScissors("rock", "rock"))
console.log(rockPaperScissors("rock", "scissors"))
console.log(rockPaperScissors("scissors", "rock"))
console.log("-----1 rock>scissor------")
console.log(rockPaperScissors("Scissors", "Paper"))
console.log(rockPaperScissors("Paper", "Scissors"))
console.log("-----2 scissor>paper------")
console.log(rockPaperScissors("Paper", "Rock"))
console.log(rockPaperScissors("Rock", "Paper"))
console.log("-----3 paper>rock------")
console.log(rockPaperScissors("lizard", "spock"))
console.log(rockPaperScissors("spock", "lizard"))
console.log("------4 lizzard>spock-----")
console.log(rockPaperScissors("rock", "lizard"))
console.log(rockPaperScissors("lizard", "rock"))
console.log("------4 rock>lizzard-----")



// $npm run test - to run unit test in the terminal
// 6 areas of test --includes addional area/criteria


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}