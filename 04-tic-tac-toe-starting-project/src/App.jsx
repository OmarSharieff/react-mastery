import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  //managing state for the activePlayer here to grant it access to both <Player/> and <Gamebord/>> components
  const [activePlayer, setActivePlayer] = useState("X");

  //lifting state to manage the array of player turns
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    let currentPlayer = "X";
    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
    ]);

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
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
          // activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
