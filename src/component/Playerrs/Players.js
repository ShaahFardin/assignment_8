import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [playerss, setPlayerss] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayerss(data));
  }, []);
  return (
    <div>
      <div className="bg-slate-500">
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-3 p-10">
            <div>
              <h1 className="text-left text-5xl font-medium text-red-500 mt-7">
                Iron-Warriors
              </h1>
              <h1 className="text-left text-2xl my-12">
                Select workout that you want to do today
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playerss.map((player) => (
                <Player player={player}></Player>
              ))}
            </div>
          </div>

          <div className="border-2 border-green-500 col-span-1">09</div>
        </div>
      </div>
    </div>
  );
};

export default Players;
