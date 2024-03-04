"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Productimage from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import "./check.css";
import { message } from "antd";
interface InputValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPIN: string;
}

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<InputValues>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    setIsFormValid(
      formData.name !== "" &&
        formData.email !== "" &&
        isValidEmail(formData.email) &&
        formData.phoneNumber !== "" &&
        formData.address !== "" &&
        formData.zipCode !== "" &&
        formData.city !== "" &&
        formData.country !== "" &&
        formData.paymentMethod !== "Cash on Delivery" &&
        (formData.paymentMethod === "e-Money"
          ? (formData.eMoneyNumber !== "" && formData.eMoneyPIN !== "")
          : true)
    );
  };

  const handleContinue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emptyField = findEmptyField();
    if (!isFormValid && emptyField) {
      message.error(`Fill in the "${emptyField}" field.`);

      return;
    }
    if (isFormValid && !emptyField) {
      setShowModal(true);
    }
  };

  const findEmptyField = () => {
    const requiredFields: (keyof InputValues)[] = [
      "name",
      "email",
      "phoneNumber",
      "address",
      "zipCode",
      "city",
      "country",
      "paymentMethod",
      "eMoneyPIN",
      "eMoneyNumber",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return field;
      }
    }

    if (
      formData.paymentMethod === "e-Money" &&
      (!formData.eMoneyNumber || !formData.eMoneyPIN)
    ) {
      return formData.eMoneyNumber ? "e-Money PIN" : "e-Money Number";
    }

    return null;
  };
  const handleBackToHome = () => {
    setShowModal(false);
  };

  return (
    <div className="checkout">
      <form className="checkout-wrap" onSubmit={handleContinue}>
        <div className="go-back">
          <Link href={"/headphone"}>Go back</Link>
        </div>
        <div className="order-forms">
          <div className="forms">
            <h1>CHECKOUT</h1>
            <p>BILLING DETAILS</p>
            <div className="biling">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Alexis Sanshez"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@sanchez@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+18455154"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
            </div>
            <p>shipping info</p>
            <div className="addres">
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Tashkent"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="biling">
              <label>
                Zip code
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="1001"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="city">
                City
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="country">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="United States"
                  value={formData.country}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="payment">
              <label>Payment Method</label>
              <div>
                <div className="radio">
                  <input
                    className="check"
                    type="radio"
                    id="e-Money"
                    name="paymentMethod"
                    value="e-Money"
                    checked={formData.paymentMethod === "e-Money"}
                    onChange={handleChange}
                  />
                  <label htmlFor="e-Money">e-Money</label>
                </div>
                <div className="radio">
                  <input
                    className="check"
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={formData.paymentMethod === "Cash on Delivery"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
              </div>
            </div>
            <div className="payment pay-code">
              <label>
                e-Money Number
                <input type="text" name="eMoneyNumber" id="eMoneyNumber" placeholder="238521993" onChange={handleChange} value={formData.eMoneyNumber}/>
              </label>
              <label>
                e-Money PIN
                <input type="text" name="eMoneyPIN" id="eMoneyPIN" placeholder="6891" onChange={handleChange} value={formData.eMoneyPIN} />
              </label>
            </div>
          </div>
          <div className="order-check">
            <p>Summary</p>
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
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </form>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <h1>THANK YOU FOR YOUR ORDER</h1>
            <h6>You will receive an email confirmation shortly.</h6>
            <div className="grand-total">
              <div className="white-left">
                <div className="products lefts">
                  <div className="image-product">
                    <Image src={Productimage} alt="product" />
                  </div>
                  <div className="product-title">
                    <h3>XX99 MK II</h3>
                    <h5>$ 2,999</h5>
                  </div>
                  <h6>x1</h6>
                </div>
              </div>
              <div className="black-right">
                <h3>GRAND TOTAL</h3>
                <h4>$ 5,446</h4>
              </div>
            </div>
            <Link href={"/"}>
              <button onClick={handleBackToHome} className="contin back-to">
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
