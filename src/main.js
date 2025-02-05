


const Gameboard = (function () {

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


const PlayerController = (function () {
  const players = [
    {
      name: "",
      token: "X"
    },
    {
      name: "",
      token: "O"
    }];

  const getNames = () => {
    let p1Name = document.getElementById("p1").value;
    let p2Name = document.getElementById("p2").value;
    players[0].name = p1Name;
    players[1].name = p2Name;
  }

  let activePlayer = players[0];
  const passTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    GameController.headerHandler("play");
  };
  const getActivePlayer = () => activePlayer;
  return { players, getNames, passTurn, getActivePlayer };
})();




const GameController = (function () {
  let gameCounter = 0;
  let gameState = "start";

  const startBtn = document.getElementById("start-button");
  startBtn.addEventListener("click", function () {
    headerHandler("start");
    ModalManager.on();
  });

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    ModalManager.off();
    PlayerController.getNames();
    headerHandler("play");
    Gameboard.makeBoard(3, 3);
  });

  function headerHandler(state) {
    const h1 = document.getElementById("h1");
    if (state == "start") {
      h1.innerText = "Hi.";
    } else if (state == "play") {
      h1.innerText = `${PlayerController.getActivePlayer().name}'s turn.`;
    } else if (state == "win") {
      h1.innerText = `${PlayerController.getActivePlayer().name} wins the game!`;
    } else if (state == "oops") {
      h1.innerHTML = `That square is <span style="color: red;">OCCUPIED.</span>`
    }
  };

  const ModalManager = (function modalManager() {
    const cells = document.getElementsByClassName("cell");
    function on() {
      modal.classList.remove("hidden");
      modal.style.display = "inline-block";
      startBtn.classList.add("hidden");

      Array.from(cells).forEach(cell => {
        cell.classList.add("hidden");
      })
    };

    function off() {
      modal.classList.add("hidden");
      modal.style.display = "none";
      startBtn.classList.remove("hidden");
      Array.from(cells).forEach(cell => {
        cell.classList.remove("hidden");
      })
    }; return { off, on };
  })();

  const pickCell = (e) => {
    if (e.target && e.target.classList.contains("cell")) {
      if (e.target.classList.contains("fullCell")) {
        headerHandler("oops");
      } else {
        e.target.innerHTML = PlayerController.getActivePlayer().token;
        e.target.classList.add("fullCell");
        e.target.classList.add(PlayerController.getActivePlayer().token);
        if (winCheck()) {
          headerHandler("win");
        } else {
          PlayerController.passTurn();
        }
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

    let winningCells = [];

    for (const pattern of winPatterns) {
      const [id1, id2, id3] = pattern;
      const cell1 = document.getElementById(id1);
      const cell2 = document.getElementById(id2);
      const cell3 = document.getElementById(id3);
      if (cell1.innerText && cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText) {
        winningCells = [cell1, cell2, cell3];
        cell1.style.color = "gold";
        cell2.style.color = "gold";
        cell3.style.color = "gold";
        cell1.style.borderColor = "gold";
        cell2.style.borderColor = "gold";
        cell3.style.borderColor = "gold";
        cell1.style.fontSize = "36px";
        cell2.style.fontSize = "36px";
        cell3.style.fontSize = "36px";

        const allCells = document.querySelectorAll(".cell");
        allCells.forEach(cell => {
          if (!winningCells.includes(cell)) {
            cell.style.opacity = 0.3;
          }
        });

        return true;
      }
      return false;
    }
  };

  return { headerHandler }
})();