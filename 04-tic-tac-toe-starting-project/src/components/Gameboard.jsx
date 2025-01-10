import { useState } from "react";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameboard, setGameboard] = useState(initialGameboard);

  function handleGameBoardButton(rowIndex, colIndex) {
    setGameboard((prevGameboard) => {
      const updatedGameboard = [...prevGameboard].map((innerArray) => [
        ...innerArray,
      ]);
      updatedGameboard[rowIndex][colIndex] = "X";
      return updatedGameboard;
    });
  }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleGameBoardButton(rowIndex, colIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
