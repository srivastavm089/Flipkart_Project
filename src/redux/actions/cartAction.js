import {ADD_TO_CART,CART_QUANTITY_DEC,  CART_QUANTITY_INC, REMOVE_TO_CART } from '../constant';
export const addToCart =(data)=>{
          return {
            type:ADD_TO_CART,
            data
          }
}
export const removeToCart =(data)=>{
  return{
    type:REMOVE_TO_CART,
    data
  }
}
export const cartQuanityInc =(data)=>{

  return {
    type:CART_QUANTITY_INC,
    data
  }
}
export const cartQuanityDec =(data)=>{

  return{
    type:CART_QUANTITY_DEC,
    data
  }
}
