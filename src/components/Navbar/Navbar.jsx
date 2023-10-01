import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./navbar.css";
import {FcAdvertising, FcDownload} from 'react-icons/fc'
import { AiFillBell, AiFillQuestionCircle, AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";

import DropDown from "../../lib/Dropdown";
import { RxAvatar } from "react-icons/rx";

import { FaPlusSquare } from "react-icons/fa";
import { FaBorderTopLeft } from "react-icons/fa6";
import { AiFillHeart, AiFillGift } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {

  const cartValue = useSelector((state)=> {
    return state.carData.product
  })
   console.log(cartValue)
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          My Profile
        </a>
      ),
      icon: <RxAvatar />,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Flipkart Plus Zone
        </a>
      ),
      icon: <FaPlusSquare />,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Orders
        </a>
      ),
      icon: <FaBorderTopLeft />,
    },
    {
      key: "4",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Wishlist
        </a>
      ),
      icon: <AiFillHeart />,
    },
    {
      key: "5",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Rewards
        </a>
      ),
      icon: <AiFillGift />,
    },
    {
      key: "6",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Gift Cards
        </a>
      ),
      icon: <FaPlusSquare />,
    },
  ];

  const items1 = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Notification Preferance
        </a>
      ),
      icon: <AiFillBell />,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          24x7 Customer Care
        </a>
      ),
      icon: <AiFillQuestionCircle />,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Adverties
        </a>
      ),
      icon: <FcAdvertising />,
    },
    {
      key: "4",

      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Download App
        </a>
      ),
      icon: <FcDownload />,
    },
  ];

  return (
    <div>
      <nav className="main-nav">
        <div className="left">
          <div className="section-logo">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
              alt="flipkart-logo"
            />
          </div>
          <div className="section-input">
            <input
              type="text"
              placeholder="Search for product,brands and more"
            />
            <IoSearch className="saerch-icons" />
          </div>
        </div>
        <div className="right">
          <NavLink className="item" >
            <DropDown name={"Profile"} data={items} />
          </NavLink>
          <NavLink className="item">Become a Seller </NavLink>
          <NavLink className="item">
           
            <DropDown name={"More"} data={items1} />
          </NavLink>
          <NavLink className="item cart-pr" to='/cart'>
            <AiOutlineShoppingCart /> Cart { cartValue.length>0?  <span className="cart-value">{cartValue.length}</span>:null}
          </NavLink>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
