import React from "react";

const BreakTime = (props) => {
 
  return (
    <div>
      <button
        onClick={(e) =>props.breakTimeHandle(e)}
        
        className="border-2 p-2 rounded-full hover:bg-red-500 hover:text-white"
      >
        {props.number}
      </button>
    </div>
  );
};

export default BreakTime;
