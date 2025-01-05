import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player playerName="PLAYER 1" playerSymbol="X" />
        <Player playerName="PLAYER 2" playerSymbol="O" />
      </ol>
    </div>
  );
}

export default App;
