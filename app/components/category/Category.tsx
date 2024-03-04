import React from "react";
import { getProducts } from "@/app/utils/data";
import Link from "next/link";
import Headphone from "../../../public/hedphone.png";
import Earphone from "../../../public/erphone.png";
import Kalonka from "../../../public/kalonka.png";
import Image from "next/image";
import "./category.css";
const Category = async () => {
  const products = await getProducts();
  return (
    <div className="category">
      <div className="content-category">
        <div className="category-item">
          <Image src={Headphone} alt="Hedphone" />
          <h3>Headphone</h3>
          <Link href={"/headphone"}>
            Shop <b>{">"}</b>
          </Link>
        </div>
        <div className="category-item">
          <Image src={Kalonka} alt="Hedphone" />
          <h3>speakers</h3>
          <Link href={"/speakers"}>
            Shop <b>{">"}</b>
          </Link>
        </div>
        <div className="category-item">
          <Image className="ear" src={Earphone} alt="Hedphone" />
          <h3>Earphone</h3>
          <Link href={"/earphone"}>
            Shop <b>{">"}</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
