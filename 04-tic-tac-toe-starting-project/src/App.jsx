import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name="PLAYER 1" symbol="X" />
        <Player name="PLAYER 2" symbol="O" />
      </ol>
    </div>
  );
}

export default App;
