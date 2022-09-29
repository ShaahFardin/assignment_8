import React from 'react';


const Break = () => {
   const breakTime = (id) =>{
    console.log("10 second clicked")
   }
    return (
      <div>
        <div className="my-10">
          <h1 className="text-2xl font-semibold text-left pl-5">Add A Break</h1>
          <div className="flex justify-between p-5 border-2 rounded-xl m-3  bg-gray-50">
            <p itemID='1122'
              
              onClick={() => breakTime()}
              className="border rounded-full p-2 hover:bg-red-500 cursor-pointer"
            >
              10s
            </p>
            <p className="border rounded-full p-2 hover:bg-red-500 cursor-pointer">
              20s
            </p>
            <p className="border rounded-full p-2 hover:bg-red-500 cursor-pointer">
              30s
            </p>
            <p className="border rounded-full p-2 hover:bg-red-500 cursor-pointer">
              40s
            </p>
            <p className="border rounded-full p-2 hover:bg-red-500 cursor-pointer">
              50s
            </p>
          </div>
        </div>
      </div>
    );
};

export default Break;