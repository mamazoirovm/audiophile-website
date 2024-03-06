import "../index.css";

import { getProducts } from "../utils/data";
import Link from "next/link";

const page = async () => {
  const products = await getProducts();
  return (
    <div className="categories">
      <div className="navbar">
        <h1>HEADPHONES</h1>
      </div>
      {products
        .filter((product) => product.category === "headphones")
        .map((product, index) => (
          <div
            key={product.id}
            className={index === 1 ? "shop reverse" : "shop"}
          >
            <div className="shop-image">
              <img src={product.image.desktop} alt="" />
            </div>
            <div className="shop-txt">
              <span>NEW PRODUCT</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <Link href={`/product/${product.id}`} key={product.id}>
                <button>See Product</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
