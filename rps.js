function rockPaperScissors(player1, player2) {
  // win conditions --> keys win over values;
  let winConditions = {
    "rock": ["scissors", "lizard"],
    "scissors": ["paper", "lizard"],
    "paper": ["rock", "spock"],
    "lizard": ["paper", "spock"],
    "spock": ["scissors", "rock"]
  };

  let player1Winner = "player1";
  let player2Winner = "player2";
  
  // check whether its a draw or determine the winner
  if (player1 === player2) return "draw"
  else {
    return (winConditions[player1.toLowerCase()].includes(player2.toLowerCase())) ? player1Winner : player2Winner;
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}