import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>PedroTech Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
