import { Divider } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SmoothRender from 'react-smooth-render';
const EmptyCart = () => {
  const navigate = useNavigate()
  return (
   <SmoothRender timing={300}>
    <div className='flex justify-center mb-10 '>
         <div className='flex flex-col gap-2  w-8/12' >
          <div className='bg-white p-4 flex justify-around'><button style={{borderBottom:'1px solid black'}}>Flipkart</button><button>Grocery </button></div>
          <div className='bg-white flex flex-col  items-center gap-10 pb-10'>
            <div> <img className='w-56' src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="logo" /></div>
            <div className='flex flex-col gap-2'>
              <h2>Your cart is empty!</h2>
              <span>add  items to it now</span>
              <button className='bg-blue-600 text-white rounded  p-2' onClick={()=> navigate('/')} >Shop now</button>
            </div>
           

          </div>

         </div>
    </div>
    <Divider/>
    <div className='flex  justify-around opacity-50 text-sm'><div><pre>Policies:Returns PolicyTerms of useSecurityPrivacyInfringement© 2007-2023 Flipkart.com</pre></div><div><pre>Need help? Visit the Help Center or Contact Us</pre></div></div>
    </SmoothRender>
  )
}

export default EmptyCart