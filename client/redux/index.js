import { combineReducers } from "redux";
import AllProductsReducer from "./AllProducts";
import SingleProductsReducer from "./SingleProduct";

const appReducer = combineReducers({
  allProducts: AllProductsReducer,
  singleProduct: SingleProductsReducer
});

export default appReducer;
