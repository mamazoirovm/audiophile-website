"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Shop from "../../../public/shop.svg";
import Hamburger from "../../../public/hamburger.svg";
import Productimage from "../../../public/assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const openMenu = (e: any) => {
    e.preventDefault();
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openOverlay = () => {
    setOverlay(true);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  return (
    <div className="header">
      {menu && (
        <div className="menus">
          <ul className="menus-list">
            <Link className="links" href={"/"}>
              HOME
            </Link>
            <Link className="links" href={"/headphone"}>
              HEADPHONE
            </Link>
            <Link className="links" href={"/speakers"}>
              SPEAKERS
            </Link>
            <Link className="links" href={"/earphone"}>
              EARPHONES
            </Link>
          </ul>
          <button onClick={closeMenu} className="xs">
            X
          </button>
        </div>
      )}
      <div className="header-content">
        <div className="logod">
          <button onClick={openMenu} className="gamb">
            <Image src={Hamburger} alt="hamburger" />
          </button>
          <a href="#">
            <img
              src="https://audiophile-ecommerce-website.vercel.app/logo.svg"
              alt=""
            />
          </a>
        </div>

        <ul className="header-list">
          <Link className="links" href={"/"}>
            HOME
          </Link>
          <Link className="links" href={"/headphone"}>
            HEADPHONE
          </Link>
          <Link className="links" href={"/speakers"}>
            SPEAKERS
          </Link>
          <Link className="links" href={"/earphone"}>
            EARPHONES
          </Link>
        </ul>
        <button className="border-none bg-transparent shopping-cart-button" onClick={openOverlay}>
          <Image src={Shop} alt="Shop cart" />
        </button>
      </div>
      {overlay && (
        <div onClick={closeOverlay} className="overlay overlay-hd">
          <div className="order-check order-header-check">
            <div className="flex items-center justify-between">
                <p>Summary</p>
                <button type="button" className="overlay-close-button" onClick={closeOverlay}>
            X
          </button>
            </div>
          
            <div className="products">
              <div className="image-product">
                <Image src={Productimage} alt="product" />
              </div>
              <div className="product-title">
                <h3>XX99 MK II</h3>
                <h5>$ 2,999</h5>
              </div>
              <h6>x1</h6>
            </div>
            <div className="prices product">
              <div className="prices-content">
                {" "}
                <h4>TOTAL</h4> <h2>$ 5,396</h2>{" "}
              </div>
              <div className="prices-content">
                {" "}
                <h4>SHIPPING</h4> <h2>$ 5,396</h2>{" "}
              </div>
              <div className="prices-content">
                {" "}
                <h4>VAT (INCLUDED)</h4> <h2>$ 5,396</h2>{" "}
              </div>
              <div className="prices-content">
                {" "}
                <h4>GRAND TOTAL</h4> <h2>$ 5,396</h2>{" "}
              </div>
            </div>
            <button type="submit" className="contin">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
