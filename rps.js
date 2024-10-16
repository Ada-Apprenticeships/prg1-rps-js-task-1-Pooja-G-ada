function rockPaperScissors(player1, player2) {
  // keep data type strict so use === for comparision
  if (player1 === player2){
    return "draw"
  }
   
}




// #below my personal testing
// $node rps.js
console.log(rockPaperScissors("rock", "rock"))
console.log(rockPaperScissors("rock", "scissors"))

// $npm run test - to run unit test in the terminal
// 6 areas of test --includes addional area/criteria


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}