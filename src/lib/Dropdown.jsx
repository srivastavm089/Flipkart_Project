import {AiOutlineDown} from 'react-icons/ai';
import { RxAvatar } from "react-icons/rx";
import { Divider, Dropdown, Space } from "antd";
import { FaPlusSquare } from "react-icons/fa";
import { FaBorderTopLeft } from "react-icons/fa6";
import { AiFillHeart, AiFillGift } from "react-icons/ai";
import '../lib/dropdown.css';
import { useEffect, useState } from 'react';
let items = [];




const DropDown = ({ name, data }) => (
  <Dropdown
    menu={{
      items:data,
    }}
  >
    <div onClick={(e) => e.preventDefault()}>
      <Space  >
        {name}

        <AiOutlineDown  className='nav-outlinedDown'/>
      </Space>
    </div>
  </Dropdown>
);

  

export default DropDown;
