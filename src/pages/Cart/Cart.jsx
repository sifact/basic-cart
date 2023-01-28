import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../Context/ShopContextProvider";
import CartItem from "./Cart-item";

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button>Shopping</button>
                <button>checkout</button>
            </div>
        </div>
    );
};

export default Cart;
