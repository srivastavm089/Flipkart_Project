import React from 'react'
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../redux/actions/cartAction';
import PlaceOrder from './PlaceOrder';
import RemoveCartModal from '../../lib/RemoveCartModal';
const CartList = ({data}) => {
  const dispatch = useDispatch();
  console.log(data)
  return (
    
    <div className='  '>
       <div className='bg-white flex  gap-10 p-4'>
        <div className='flex flex-col items-center gap-10'>
          < div>
            <img className='w-20' src={data.img} alt="logo" />
          </div>
          <div className='flex gap-2'>
              <button className='bg-gray-400 pl-2 pr-2 rounded-full text-white'>-</button><input  type="text" className='w-5 text-center border' value={1}/><button className='rounded-full bg-gray-400 pr-2 pl-2 text-white'>+</button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <div>
            <div> <p>Portronics MPORT 31C Type C to 4 USB-A Ports POR</p><p>Delivery in 2 days, Thu | ₹40</p></div>
        </div>
        <div className='flex gap-2'><p>Seller:RetailNet</p> <img className='w-16' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="logo" /></div>
        <div><pre> <del>₹999 </del> ₹399 60% Off 2 offers applied</pre></div>
        <div className='flex gap-4 '><button>Save For Later</button> <RemoveCartModal id={data.id}  /></div>
       </div>
       </div>
       
   
    
    </div>
  )
}

export default CartList