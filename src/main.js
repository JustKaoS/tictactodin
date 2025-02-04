


const Gameboard = (function () {
  const rows = 3;
  const columns = 3;

  const makeBoard = function (rows, columns) {
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = "";

    let idCounter = 1;

    for (let i = 0; i < rows; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      boardContainer.appendChild(rowDiv);

      for (let j = 0; j < columns; j++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.id = idCounter;
        rowDiv.appendChild(cellDiv);

        idCounter++;
      }
    }
  };
  return { makeBoard };
})();





const GameController = (function () {

  const players = [
    {
      name: "Rachel",
      token: "X"
    },
    {
      name: "Daniel",
      token: "O"
    }];

  let activePlayer = players[0];

  const passTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;


  const startBtn = document.getElementById("start-button");
  startBtn.addEventListener("click", function () {
    Gameboard.makeBoard(3, 3);
    console.log(`${getActivePlayer().name}'s turn.`)
  });

  const boardContainer = document.getElementById("boardContainer");

  const pickCell = (e) => {
    if (e.target && e.target.classList.contains("cell")) {
      if (e.target.classList.contains("fullCell")) {
        alert("This cell is occupied!");
      } else {
        e.target.innerHTML = getActivePlayer().token;
        e.target.classList.add("fullCell");
        passTurn();
        console.log(`${getActivePlayer().name}'s turn.`);
      }
    }
  };

  boardContainer.addEventListener("click", pickCell);

})();



// const Player = (function() {
//   const name = "";
//   const team = "";
// }

