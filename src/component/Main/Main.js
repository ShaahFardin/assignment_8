import React from "react";
import Players from "../Players/Players";

const Main = () => {
  return (
    <div className="bg-slate-100">
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
