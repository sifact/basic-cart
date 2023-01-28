import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find(
                    (product) => product.id === Number(item)
                );
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    console.log(cartItems);
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const productInfo = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };
    console.log(cartItems);
    return (
        <ShopContext.Provider value={productInfo}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
