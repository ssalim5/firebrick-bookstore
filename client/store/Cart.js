import axios from "axios";


const SET_COUNTER = 'SET_COUNTER';
const SET_PRODUCTS = 'SET_PRODUCTS';


//action creators

export const _setCounter = (num) => {
  return{
    type : SET_COUNTER,
    num
  }
};

export const _setProducts = (products) => {
  return{
    type : SET_PRODUCTS,
    products
  }}

//


const initialState = {counter : 3,
  productsArray : []};




export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTER:
      return {...state, counter : action.num};
    case SET_PRODUCTS:
      return {...state, productsArray : action.products};
    default:
      return state
  }
}
