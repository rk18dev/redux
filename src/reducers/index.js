import { combineReducers } from "redux";
import { productsReducer,productsReducer1 } from "./productReducers";

const reducers = combineReducers({
  allProducts: productsReducer
});
export default reducers;