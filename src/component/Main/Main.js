import React from "react";
import Players from "../Players/Players";

const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="border-2 border-red-600 col-span-3 p-10">
          <div>
            <h1 className="text-left text-5xl font-medium text-red-500 mt-7">
              IRON-WARRIORS
            </h1>
            <h1 className="text-left text-xl  mt-7">
              Select workout that you want to do today
            </h1>
          </div>
          <div>
            <Players></Players>
          </div>
        </div>

        <div className="border-2 border-green-500 col-span-1">09</div>
      </div>
    </div>
  );
};

export default Main;
