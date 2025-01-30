const startButton = document.getElementById("start-button");


const Gameboard = (function () {
  const rows = 3;
  const columns = 3;

  function makeBoard() {
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = "";

    let idCounter = 1;

    for (let i = 0; i > rows; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      boardContainer.appendChild(rowDiv);

      for (let j = 0; j < columns, j++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.id = idCounter;
        rowDiv.appendChild(cellDiv);

        idCounter++;
      }
    }





    // for (let i = 0; i < rows; i++) {
    //   board[i] = [];
    //   for (let j = 0; j < columns; j++) {
    //     board[i].push(Cell());
    //   }
    // }
  }
})();



const GameController = (function(
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

  function pickSquare(row, column, player) {

   };

}
)();



function Player() {
  const name = "";
  const team = "";
}

