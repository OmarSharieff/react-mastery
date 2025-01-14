import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  //managing state for the activePlayer here to grant it access to both <Player/> and <Gamebord/>> components
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="PLAYER 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="PLAYER 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      <Gameboard onSelectSquare ={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
  );
}

export default App;
