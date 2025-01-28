import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  //managing state for the activePlayer here to grant it access to both <Player/> and <Gamebord/>> components
  // const [activePlayer, setActivePlayer] = useState("X");

  //lifting state to manage the array of player turns
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="PLAYER 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="PLAYER 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          // activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
