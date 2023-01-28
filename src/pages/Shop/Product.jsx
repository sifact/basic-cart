import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContextProvider";

const Product = ({ product }) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const { id, productName, price, productImage } = product;

    const cartAmount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage} alt="" className="productImage" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add to cart {cartAmount > 0 && <>({cartAmount})</>}
                </button>
            </div>
        </div>
    );
};

export default Product;
