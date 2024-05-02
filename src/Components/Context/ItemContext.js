import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart,setCartItems }}>
            {props.children}
        </CartContext.Provider>
    );
};
