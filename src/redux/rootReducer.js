import { combineReducers } from "redux";

import carData from './reducers/cartData';
const rootReducer = combineReducers({
carData,

});
export default rootReducer;