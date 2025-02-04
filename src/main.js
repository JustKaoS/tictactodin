


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
    console.log(`${getActivePlayer().name}'s turn.`);
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
        e.target.classList.add(getActivePlayer().token);
        if (winCheck()) {
          alert(`${getActivePlayer().name} has won the game!`);
        };
        passTurn();


      }
    }
  };

  boardContainer.addEventListener("click", pickCell);


  const winCheck = () => {
    const winPatterns = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    for (const pattern of winPatterns) {
      const [id1, id2, id3] = pattern;
      const cell1 = document.getElementById(id1).innerHTML;
      const cell2 = document.getElementById(id2).innerHTML;
      const cell3 = document.getElementById(id3).innerHTML;
      if (cell1 && cell1 === cell2 && cell2 === cell3) {
return true;
      }
    }
return false;
  }


})();



// const Player = (function() {
//   const name = "";
//   const team = "";
// }

