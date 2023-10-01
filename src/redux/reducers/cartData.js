import { ADD_TO_CART, CART_QUANTITY_DEC, CART_QUANTITY_INC, REMOVE_TO_CART } from "../constant";
const intial = {
  product: [],
  quantity: [],
  addressDetails:[] 
};

const carData = (state = intial, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let checkId = action.data.id;
      let flag = false;
      state.product.map((item) => {
        if (item.id === checkId) {
          flag = true;
        }
      });
      if (!flag) {
        return { ...state, product: [...state.product, action.data] };
      } else {
        flag = true;
        alert("product already in your cart");
        return state;
      }
    case REMOVE_TO_CART:
      let freshData = state.product.filter((item)=>{
                return item.id!==action.data
      })
      console.log(freshData); 
      return {...state, product:[...freshData]}
    case CART_QUANTITY_INC:
      let f = false;
      state.quantity.map((item) => {
        if (item.id === action.data.id) {
          f = true;
        }
      });

      if (f) {
        const freshData = state.quantity.map((item) => {
          if (item.id === action.data.id && item.value < 4) {
            return { ...item, value: item.value + action.data.value };
          }
          return item;
        });
        return { ...state, quantity: [...freshData] };
      } else {
        return { ...state, quantity: [...state.quantity, action.data] };
      }
    case CART_QUANTITY_DEC:
      let newData = state.quantity.map((item)=>{
        if(item.id===action.data.id && item.value>1){
           return {...item, value:item.value-action.data.value}
        }
        return item
      })
      return {...state, quantity:[...newData]}

    default:
      return state;
  }
};
export default carData;
