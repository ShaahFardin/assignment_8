import React from "react";
import BreakTime from "../BreakTime/BreakTime";

const Exercise = ({ time }) => {
  let numbers = [10, 20, 30, 40, 50];

  const breakTimeHandle = (e) => {
    console.log(e.target.innerText);
    const value = e.target.innerText;
    const breakTime = document.getElementById("breakTime");
    breakTime.innerText = value;
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-left pl-5">Add A Break</h1>
        <div className="flex justify-between p-5 border-2 rounded-xl m-3 my-5 bg-gray-50">
          {numbers.map((number) => (
            <BreakTime
              breakTimeHandle={breakTimeHandle}
              number={number}
            ></BreakTime>
          ))}
        </div>
      </div>

      <div className="flex justify-between p-5 border-2 rounded-xl m-3 my-5 bg-gray-50">
        <div className="text-xl font-semibold">Exercise time</div>
        <div className="font-extralight">{time} minute</div>
      </div>
      <div className="flex justify-between  p-5 border-2 rounded-xl m-3  bg-gray-50">
        <div className="text-xl font-semibold">Break time</div>
        <div id="breakTime" className="font-extralight">
          totalTime
        </div>
      </div>
      <button className="btn btn-success btn-wide hover:btn-success">
        Complete
      </button>
    </div>
  );
};

export default Exercise;
