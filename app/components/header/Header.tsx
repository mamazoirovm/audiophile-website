"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Shop from "../../../public/shop.svg";
import Hamburger from "../../../public/hamburger.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = (e:any) => {
    e.preventDefault()
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
    
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
        <button className="border-none bg-transparent shopping-cart-button">
          <Image src={Shop} alt="Shop cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
