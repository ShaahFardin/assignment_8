import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Info from '../PersonalInfo/Info';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let totalTime = 0;
    for(const time of cart){
        totalTime = parseInt(totalTime + time.minute);
    }
    return (
      <div className="player-container">
        
        <h1>Selected playeres : {cart.length}</h1>
        <p>time played : {totalTime}</p>
        <Info></Info>
        <Break></Break>
        <Exercise time={totalTime}></Exercise>
      </div>
    );
};

export default Cart;