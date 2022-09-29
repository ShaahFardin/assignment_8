import React from 'react';
import Info from '../PersonalInfo/Info';
import './Cart.css'

const Cart = ({cart}) => {
    return (
      <div className="player-container">
        
        <h1>Selected playeres : {cart.length}</h1>
        <Info></Info>
      </div>
    );
};

export default Cart;