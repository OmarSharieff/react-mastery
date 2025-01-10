import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="PLAYER 1" symbol="X" />
        <Player initialName="PLAYER 2" symbol="O" />
      </ol>
      <Gameboard/>
    </div>
  );
}

export default App;
