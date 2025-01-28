const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {
  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleGameBoardButton(rowIndex, colIndex) {
  //   setGameboard((prevGameboard) => {
  //     const updatedGameboard = [...prevGameboard].map((innerArray) => [
  //       ...innerArray,
  //     ]);
  //     updatedGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameboard;
  //   });
  //   onSelectSquare();
  // }
  let gameboard = initialGameboard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
