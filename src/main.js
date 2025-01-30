


const Gameboard = (function () {
  const rows = 3;
  const columns = 3;
  const board = [];

  function makeBoard() {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }
  }
})();



function GameController(
  playerOneName = "Daniel",
  playerTwoName = "Rachel"
) {

  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }];

    let activePlayer = players[0];

    const passTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const newRound = () => {
      board.makeBoard();
      console.log(`${getActivePlayer().name}'s turn.`);
    };
  function gameEnd() { };

  function pickSquare(row, column, player) { };

}




function Player() {
  const name = "";
  const team = "";
}

