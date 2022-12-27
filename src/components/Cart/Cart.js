import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order summery</h1>
            <p>cart summery: {cart.length}</p>
        </div>
    );
};

export default Cart;