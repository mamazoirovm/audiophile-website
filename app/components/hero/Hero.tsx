import Image from "next/image";
import React from "react";
import "./hero.css"
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" hero  ">
      <div className="hero-content">
        <div>
          <Link href={"/checkout"}>Checkout</Link>
          <h1 className="title-hero">Bringing you the <br /> <b className="best">best</b>  audio gear</h1>
          <p className="para-hero">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="person"></div>
      </div>
    </div>
  );
};

export default Hero;
