import { Divider } from 'antd'
import React from 'react'

const PriceDetail = () => {
  return (
    <div className='bg-white'>
      <h2 className='opacity-50 flex pt-2 pl-2'>PRICE DETAILS</h2>
       <Divider/>
       <div  className='text-sm' >
        <div className='flex justify-between pl-2 pr-2'>
          <div>Price (1 item)</div>
          <div>32000</div>
        </div>
        <div className='flex justify-between pl-2 pr-2'>
        <div>  Discount</div>
        <div>23,401</div>
        </div>
      
        <div className='flex justify-between pl-2 pr-2'>
          <div>Delivery   Charges</div>
          <div>40  Free</div>
        </div>
        <Divider/>
       
       
       </div>
       <div className='flex justify-between pl-2 pr-2'>
        <div>Total Amount</div>
        <div>85999</div>
       </div>
       <Divider/>
       <div  className='flex justify-center items-center'>you will save rupees on this order</div>
    </div>
  )
}

export default PriceDetail