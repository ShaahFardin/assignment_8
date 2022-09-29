import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div >
      
      {players.map((player) => (
        <Player player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
