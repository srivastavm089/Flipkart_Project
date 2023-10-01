import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import PriceDetail from "./PriceDetail";
import Header from './Header'
import PlaceOrder from "./PlaceOrder";
import CartPincode from "./CartPincode";

const Cart = () => {
  const data = useSelector((state) => {
    return state.carData.product;
  });

  return (
    <div className="mt-5 ">
         <Header/>
         <CartPincode/>
         <CartList/>

    </div>
  );
};

export default Cart;
