import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { Divider } from "antd";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import PriceDetail from "./PriceDetail";
import Header from "./Header";
import PlaceOrder from "./PlaceOrder";
import CartPincode from "./CartPincode";
import SmoothRender from "react-smooth-render";
const Cart = () => {
  const data = useSelector((state) => {
    return state.carData.product; 
  });

  return (
    <div>
      {data.length !== 0 ? (
        <div className="mt-5 flex gap-2 justify-center">
          <div className=" w-6/12 flex flex-col ">
            <Header />

            <CartPincode />

            {data.map((item) => {
              return <CartList data={item} />;
            })}
            <PlaceOrder />
          </div>
          <div className="w-[20%]">
            <PriceDetail />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
