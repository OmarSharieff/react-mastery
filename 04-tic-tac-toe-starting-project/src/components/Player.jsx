import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing(editing=>!editing);
  }

  function handleChange(event) {
    console.log(event)
    setPlayerName(event.target.value);
  }

  let playerNameContent = <span className="player-name">{playerName}</span>;
  
  if (isEditing) {
    playerNameContent = <input type="text" required value={playerName} onChange={handleChange}></input>
  }
  return (
    <>
      <li>
        <span className="player">
          {playerNameContent}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
