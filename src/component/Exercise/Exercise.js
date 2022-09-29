import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const toaster =()=>{
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
        <div className="modal-action">
          <a href="#" className="btn">
            Yay!
          </a>
        </div>
      </div>
    </div>;
  }
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-left pl-5 mt-20">
          Add A Break
        </h1>
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
          second
        </div>
      </div>

      {/* Toaster added */}
      <p>
        <a
          href="#my-modal-2"
          className="btn btn-success btn-wide hover:btn-success"
        >
          Complete
        </a>
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <img
              className="pl-11"
              src="https://t4.ftcdn.net/jpg/02/02/78/81/360_F_202788149_9sndfcPPme9zRtstjROSmyLFma2UMYaM.jpg"
              alt=""
            />
            <p className="py-4 text-2xl">
              Congratulation, You have completed your activity today!
            </p>
            <div className="modal-action">
              <a href="#" className="btn btn-success">
                Yay!
              </a>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Exercise;
