import React from 'react'

const CartList = () => {
  return (
    <div className='flex justify-center mt-2'>
       <div className='bg-white flex w-5/12 gap-10'>
        <div className='flex flex-col items-center'>
          <div>
            <img src="https://rukminim2.flixcart.com/image/224/224/kwqq1zk0/usb-gadget/f/o/l/por-1485-portronics-original-imag9cz4bzgutphv.jpeg?q=90" alt="logo" />
          </div>
          <div>
            <button>-</button><input type="text" className='w-5 text-center' value={1}/><button>+</button>
          </div>
        </div>
        <div>
        <div>
            <div> <p>Portronics MPORT 31C Type C to 4 USB-A Ports POR</p><p>Delivery in 2 days, Thu | ₹40</p></div>
        </div>
        <div><p>Seller:RetailNet</p> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="logo" /></div>
        <div><pre> <del>₹999 </del> ₹399 60% Off 2 offers applied</pre></div>
        <div><button>Save For Later</button> <button>Remove</button></div>
       </div>
       </div>
    </div>
  )
}

export default CartList