import axios from "axios";


const initialState = {counter : 0,
  productsArray : []};


const SET_CART = "SET_CART";
const DELETE_ITEM = "DELETE_ITEM";

const SET_COUNTER = "SET_COUNTER";
const SET_PRODUCTS = "SET_PRODUCTS";


//action creators

const _deleteItem = (books) => {
  return {
    type: DELETE_ITEM,
    books
  }
}

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

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      //make a userId route
      const {data} = await axios.get(`api/orders/${userId}/books`);
      dispatch(_setProducts(data.books));
    } catch (err) {
      console.log(err);
    }
  }
}

//Check on this
export const deleteItem = (userId, bookId) => {
   return async (dispatch) => {
     try {
       //const {data} = await axios.delete(`api/carts/${userId}/${bookId});
       //dispatch(_deleteItem(data));
     } catch (err) {
       console.log(err);
     }
   }
}


export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTER:
      return {...state, counter : action.num};
    case SET_PRODUCTS:
      let newProducts;
      if (action.products.length > 0) {
        newProducts = action.products.map(product => {
            return product;
        })
      }
      return {...state,productsArray : [...state.productsArray, ...newProducts]};
    default:
      return state
  }
}
