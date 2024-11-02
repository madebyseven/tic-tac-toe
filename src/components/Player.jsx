import { useState } from "react";

function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditBtn() {
    setIsEditing((editing) => !editing);
  }

  let editablePlayerName = <span className="player-name">{name}</span>;
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={name} />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditBtn}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
