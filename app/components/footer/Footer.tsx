import Link from "next/link";
import React from "react";
import Insta from "../../../public/insta.svg";
import Face from "../../../public/face.svg";
import Twit from "../../../public/twit.svg";
import Image from "next/image";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="#">
          <img
            src="https://audiophile-ecommerce-website.vercel.app/logo.svg"
            alt=""
          />
        </a>
        <ul className="foot-list">
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
      </div>
      <div className="footer-bottom  ">
        <p className="text-para">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <ul className="social">
          <li>
            <Image src={Face} alt="logo" />
          </li>
          <li>
            <Image src={Twit} alt="logo" />
          </li>
          <li>
            <Image src={Insta} alt="logo" />
          </li>
        </ul>
      </div>
      <div className="copy ">
        <p className="text-[15px] mt-3 text-right text-slate-50 opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
