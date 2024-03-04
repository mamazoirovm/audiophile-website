import { getProducts } from "./utils/data";
import "./globals.css";
import HomeIMg from "../public/Bitmap.png"
import Image from "next/image";
export default async function Home() {
  const products = await getProducts();
  return (
    <section className="home-page">
      {products
        .filter((product) => product.category === "headphones")
        .slice(-1)
        .map((product) => (
          <div className="home-shop">
            <div className="shop-txt">
              <span>NEW PRODUCT</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <button>See Product</button>
            </div>
            <div className="shop-image">
             <Image src={HomeIMg} alt={product.name} />
            </div>
          </div>
        ))}
    </section>
  );
}
