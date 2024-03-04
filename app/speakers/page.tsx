import React from "react";
import { getProducts } from "../utils/data";
import "../index.css"
import Image from "next/image";

const page = async () => {
  const products = await getProducts();

  return (
    <div className="categories">
    <div className="navbar">
      <h1>SPEAKERS</h1>
    </div>
    {products.filter((product) => product.category === "speakers").map((product, index) => (
  <div key={product.id}  className={index === 1 ? "shop reverse" : "shop"}>
    <div className="shop-image">
      <img src={`.${product.image.desktop}`} alt={product.name} />
      
    </div>
    <div className="shop-txt">
      <span>NEW PRODUCT</span>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <button>See Product</button>
    </div>
  </div>
))}

    </div>
  );
};

export default page;
