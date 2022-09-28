import React from "react";

const Player = (props) => {
  const { name, description , img, minute} = props.player;
  return (
    <div className="border-2 border-red-800">
        <img src={img} alt="" />
      <h1>Player name : {name}</h1>
      <p>description : {description}</p>
      <p>Minutes Played : {minute} </p>
      <button className="bg-fuchsia-400">Add to list</button>
    </div>
  );
};

export default Player;
