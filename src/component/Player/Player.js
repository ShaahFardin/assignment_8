import React from "react";

const Player = (props) => {
  const { name, description , img, minute} = props.player;
  return (
    <div>
      {/* card starts */}
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-left">{description}</p>
          <p className="text-start my-3">Minutes Played: {minute}</p>
          <button className="btn btn-error hover:btn-success ">Add to list</button>
        </div>
      </div>
      {/* card ends */}
    </div>
  );
};

export default Player;
