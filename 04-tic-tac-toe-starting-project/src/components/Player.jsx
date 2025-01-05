import { useState } from "react";

export default function Player({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing(!isEditing)
  }
  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input></input>
          ) : (
            <span className="player-name">PLAYER 1</span>
          )}
          <span className="player-symbol">X</span>
        </span>
        <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
