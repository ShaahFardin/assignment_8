import {  faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";



const Players = () => {


  const [playerss, setPlayerss] = useState([]);


  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayerss(data));
  }, []);


  const handleAddToCart = (player) => {
    console.log(player);
    const newCart = [...cart, player];
    setCart(newCart);
  };

  
  return (
    <div>
      <div className="bg-gray-50">
        <div className="grid md:grid-cols-4 gap-4">
          <div className=" col-span-3 p-10">
            <div>
              <h1 className="text-left text-7xl font-bold text-red-500 mt-7">
                <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
                Iron-Warriors
              </h1>
              <h1 className="text-left text-3xl my-12">
                Select workout that you want to do today
              </h1>
            </div>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20">
              {playerss.map((player) => (
                <Player
                  player={player}
                  handleAddToCart={handleAddToCart}
                ></Player>
              ))}
            </div>
            <div>
              <h1 className="text-left text-5xl font-semibold my-10">
                Question and answer section
              </h1>
              <div className="">
                <h1>How does react work?</h1>
                <p>
                  ReactJS divides the UI into isolated reusable pieces of code
                  known as components. React components work similarly to
                  JavaScript functions as they accept arbitrary inputs called
                  properties or props. It's possible to have as many components
                  as necessary without cluttering your code.
                </p>
                <h1>What are the difference between props and state?</h1>
                <p>
                  Props are used to pass data from one component to another. The
                  state is a local data storage that is local to the component
                  only and cannot be passed to other components.
                </p>
                <h1>Other use of React Hook rather than fetching data?</h1>
                <p>
                  <li>validating input field</li>
                  <li>live filtering</li>
                  <li>trigger animation on new array value</li>
                  <li>update paragraph list on fetched API data update</li>
                  <li>updating fetched API data to get BTC updated price</li>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-gray-100">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
