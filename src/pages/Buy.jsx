import React from "react";
import orderConfirmedSvg from "../img/order-confirmed.svg";
import { Link } from "react-router-dom";

export default function Buy() {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <img
          src={orderConfirmedSvg}
          alt="order_confirmed"
          className="w-52 mt-24"
        />
        <p className="text-lg font-semibold mt-4 ">Order Confirmed!</p>
        <span className="text-neutral-500"> Your order will be delivered in on 25th Jan 2024</span>
        <Link to="/">
          <button className="text-sm underline">Back to Home</button>
        </Link>
      </div>
    </>
  );
}
