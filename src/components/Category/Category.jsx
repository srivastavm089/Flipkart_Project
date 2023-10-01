import React from "react";
import "../Category/category.css";
import DropDown from "../../lib/Dropdown";
import { NavLink } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <span>Men's Top Wear</span>,
  },
  {
    key: "2",
    label: <span>Men's Bottom Wear</span>,
    //   icon:
  },
  {
    key: "3",
    label: <span>Woman Ethnic</span>,
  },
  {
    key: "4",

    label: <span>Women Western</span>,
  },
  {
    key: "5",

    label: <span>Men Footwear</span>,
  },
  {
    key: "6",

    label: <span>Watches & Accessories</span>,
  },
  {
    key: "7",

    label: <span>Bags,Suitcases, & Luggage</span>,
  },
  {
    key: "8",

    label: <span>Kids</span>,
  },
  {
    key: "9",

    label: <span>Essentials</span>,
  },
  {
    key: "10",

    label: <span>Winter</span>,
  },
];
const items1 = [
  {
    key: "1",
    label: <span>Audio</span>,
  },
  {
    key: "2",
    label: <span>Electronic GST Store</span>,
    //   icon:
  },
  {
    key: "3",
    label: <span>Cameras & Accessories</span>,
  },
  {
    key: "4",

    label: <span>Computer Peripherals</span>,
  },
  {
    key: "5",

    label: <span>Gaming</span>,
  },
  {
    key: "6",

    label: <span>Health & Personal Care</span>,
  },
  {
    key: "7",

    label: <span>Laptop & Accessories</span>,
  },
  {
    key: "8",

    label: <span>Laptop & Accessories</span>,
  },
  {
    key: "9",

    label: <span>MobileAccessories</span>,
  },
  {
    key: "10",

    label: <span>Powerbank</span>,
  },
  {
    key: "11",

    label: <span>Smart Home Automation</span>,
  },
  {
    key: "12",

    label: <span>Smart Wearables</span>,
  },
  {
    key: "13",

    label: <span>Storage</span>,
  },
  {
    key: "14",

    label: <span>Tablet</span>,
  },
];
const items2 = [
  {
    key: "1",
    label: <span>Home Furnishing</span>,
  },
  {
    key: "2",
    label: <span>Furniture Studio</span>,
    //   icon:
  },
  {
    key: "3",
    label: <span>Living Room Furniture</span>,
  },
  {
    key: "4",

    label: <span>Kitchen & Dining</span>,
  },
  {
    key: "5",

    label: <span>Bedroom Furniture</span>,
  },
  {
    key: "6",

    label: <span>Home Decor</span>,
  },
  {
    key: "7",

    label: <span>Tools & Utility</span>,
  },
  {
    key: "9",

    label: <span>Work Space Funiture</span>,
  },
  {
    key: "10",

    label: <span>Lighting & Electricals</span>,
  },
  {
    key: "11",

    label: <span>Space Saving Furniture</span>,
  },
  {
    key: "12",

    label: <span>Cleaning & Bath</span>,
  },
  {
    key: "13",

    label: <span>Kids Furniture</span>,
  },
  {
    key: "14",

    label: <span>Pet & Gardening</span>,
  },
];
const items3 = [
  {
    key: "1",
    label: <span>Beauty & Personal Care</span>,
  },
  {
    key: "2",
    label: <span>Men's Grooming</span>,
    //   icon:
  },
  {
    key: "3",
    label: <span>Food & Drinks</span>,
  },
  {
    key: "4",

    label: <span>Nurtrition & Health Care</span>,
  },
  {
    key: "5",

    label: <span>Baby Care</span>,
  },
  {
    key: "6",

    label: <span>Toys And School Supplies</span>,
  },
  {
    key: "7",

    label: <span>Sport & Fitness</span>,
  },
  {
    key: "8",

    label: <span>Books</span>,
  },
  {
    key: "9",

    label: <span>Music</span>,
  },
  {
    key: "10",

    label: <span>Stationery & Office Supplies</span>,
  },
  {
    key: "11",

    label: <span>Auto Accessories</span>,
  },
  {
    key: "12",

    label: <span>Safety & Hygiene Essentials</span>,
  },
];
const items4 = [
  {
    key: "1",
    label: <span>Petrol Vehicles</span>,
  },
  {
    key: "2",
    label: <span>Electric Vehicles</span>,
    //   icon:
  },
];

const Category = () => {
  return (
    <div style={{padding:'1vh 2vh 0 2vh'}}>
      <div className="category-main">
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt="grocery"
          />
          <p>Grocery</p>
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt="mobile"
          />
          <p>Mobile</p>
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
            alt="fashion"
          />

          <DropDown name={"Fashion"} data={items} />
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt="electronic"
          />

          <DropDown name={"Electronic"} data={items1} />
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            alt="furniture"
          />
          <DropDown name={"Home & Furniture"} data={items2} />
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
            alt="Appliances"
          />
          <p>Appliances</p>
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
            alt="flight"
          />
          <p>Flight</p>
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            alt="offer"
          />
          <p>Top Offers</p>
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            alt="toys"
          />
          <DropDown name={"Beauty, Toys & More"} data={items3} />
        </NavLink>
        <NavLink>
          <img
            className="item"
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
            alt="Two Wheelers"
          />

          <DropDown name={"Two Wheelers"} data={items4} />
        </NavLink>
      </div>
    </div>
  );
};

export default Category;
