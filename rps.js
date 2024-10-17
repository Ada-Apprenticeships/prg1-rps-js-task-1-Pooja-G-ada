function rockPaperScissors(player1, player2) {
  
  // conditions for winning stored in an object data structure 
  // where key wins over values;
  let winConditions = {
    "rock": ["scissors", "lizard"],
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "lizard": ["paper", "spock"],
    "spock": ["scissors", "rock"]
  };

  // output string saved as variable
  let player1Winner = "player1";
  let player2Winner = "player2";

  // condition for draw
  if (player1 === player2){
    return "draw";
  } 

  // check whether player1 or player2 wins
  return (winConditions[player1.toLowerCase()].includes(player2.toLowerCase())) ? player1Winner : player2Winner;
}

// #below my personal testing
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
console.log("-----additional criteria------")
console.log(rockPaperScissors("lizard", "spock"))
console.log(rockPaperScissors("spock", "lizard"))
console.log("------4 lizzard>spock-----")
console.log(rockPaperScissors("spock", "scissors"))
console.log(rockPaperScissors("scissors", "spock"))
console.log("------5 spock>scissors-----")
console.log(rockPaperScissors("rock", "lizard"))
console.log(rockPaperScissors("lizard", "rock"))
console.log("------6 rock>lizzard-----")
console.log(rockPaperScissors("paper", "spock"))
console.log(rockPaperScissors("spock", "paper"))
console.log("------7 paper>spock-----")
console.log(rockPaperScissors("scissors", "lizard"))
console.log(rockPaperScissors("lizard", "scissors"))
console.log("------8 scissors>lizard-----")
console.log(rockPaperScissors("lizard", "paper"))
console.log(rockPaperScissors("paper", "lizard"))
console.log("------9 lizard>paper-----")
console.log(rockPaperScissors("spock", "rock"))
console.log(rockPaperScissors("rock", "spock"))
console.log("------10 spock>rock-----")


// $npm run test - to run unit test in the terminal
// 6 areas of test --includes addional area/criteria


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}