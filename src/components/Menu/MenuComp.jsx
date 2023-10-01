import React from "react";
import {MdOutlineLocalOffer} from 'react-icons/md';
import './menu.css';


import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<p >View 13 more offers</p>, "sub3", null, [
    getItem(
      <p style={{ color: "black"  }} >
        Special PriceGet extra ₹5000 off (price inclusive of cashback/coupon)T&C
      </p>
      ,
      1
      ,
      <MdOutlineLocalOffer style={{color:'black'}}/>
    ),
    getItem(
      <p style={{ color: "black" }}>FreebieSpotify Premium - 12M at ₹699T&C</p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Buy this product & get ₹500 Off on your next LG Refrigerator purchaseT&C
      </p>
     
    ),
    getItem(
      <p style={{ color: "black" }}>
        Bank Offer10% Instant Discount on Kotak Bank Credit Card Txns, up to
        ₹750, on orders of ₹5,000 and aboveT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Bank Offer10% Instant Discount on Kotak Bank Credit Card EMI Txns, up to
        ₹1,250 on orders of ₹5,000 and aboveT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Bank Offer10% Instant Discount on Kotak Bank Debit Card & EMI Txns, up
        to ₹500, on orders of ₹5,000 and aboveT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Buy this product & get ₹500 Off on your next Voltas Beko Refrigerator
        purchaseT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>Extra 5% Off Up to ₹250 on MicrowavesT&C</p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Partner OfferSign-up for Flipkart Pay Later & get free Times Prime
        Benefits worth ₹10,000*Know More
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>
        Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow
        More
      </p>
    ),
    getItem(
      <p style={{ color: "black" }}>EMI starting from ₹1,026/monthView Plans</p>
    ),
  ]),
];
const MenuComp = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu className="Menu-access"
    
      onClick={onClick}
      style={{
        width: 1008,
        background:"white"
      }}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default MenuComp;
