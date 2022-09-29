import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Info = () => {
    return (
      <div className="">
        <div className="flex  p-5 border-2 rounded-xl m-3 my-10 bg-gray-50">
          <div className="avatar">
            <div className="w-14 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="text-start ml-5">
            <p className="text-lg font-semibold">Shah Fardin</p>
            <p>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Sylhet,
              Bangladesh
            </p>
          </div>
        </div>
        <div className="flex justify-around p-5 border-2 rounded-xl m-3 mt-5 bg-gray-50">
          <div>
            <p>
              <span className="text-xl font-bold">75</span> Kg
            </p>
            <p>Weight</p>
          </div>
          <div>
            <p className="text-xl font-bold">6.5</p>
            <p>Height</p>
          </div>
          <div>
            <p>
              <span className="text-xl font-bold">22</span>yrs
            </p>
            <p>Age</p>
          </div>
        </div>
      </div>
    );
};

export default Info;