// headphone/page.tsx
import React from "react";
import { getProducts } from "../utils/data";
import "../index.css";
const page = async () => {
  const products = await getProducts();

  return (
    <div className="categories">
      <div className="navbar">
        <h1>EARPHONE</h1>
      </div>
      {products
  .filter((product) => product.category === "earphones")
  .map((product) => (
    <div key={product.id} className="shop">
      <div className="shop-image">
        <img src={product.image.desktop} alt="" />
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
