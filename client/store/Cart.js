import axios from "axios";


const initialState = {counter : 0,
  productsArray : []};

const DELETE_ITEM = "DELETE_ITEM";
const ADD_ITEM = "ADD_ITEM";

const SET_COUNTER = "SET_COUNTER";
const SET_PRODUCTS = "SET_PRODUCTS";


//action creators

const _deleteItem = (books) => {
  return {
    type: DELETE_ITEM,
    books
  }
}

export const _addItem = (products) => {
  return{
    type: ADD_ITEM,
    products
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
      const {data} = await axios.get(`api/orders/${userId}`);
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

export const addItem = (userId,book,quantity) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/orders/user=${userId}/book=${book.id}/quantity=${quantity}`);
      console.log('Api response');
      console.log(data);
      dispatch(_addItem(data));
    } catch (err){
      console.log(err);
    }
  }
}

export const setCounter = (books) => {
  return (dispatch) => {
    console.log(books);
    let orderContents = books;
    let cartTotalItems = 0;
    for (let i = 0; i < orderContents.length; i++){
      cartTotalItems+= orderContents[i].order_products.order_quantity;
    }
    dispatch(_setCounter(cartTotalItems));
  }
}

//Revisit Later when dealing with localstorage and logging in
// let newProducts = [];
// if (action.products.isAr || action.products.length > 0) {
//   newProducts = action.products.map(product => {
//     return product;
//   })
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTER:
      return {...state, counter : action.num};
    case ADD_ITEM:
      console.log("Add_ITEM")
      console.log(action);
      return {...state, productsArray : [...state.productsArray,action.products]};
    case SET_PRODUCTS:
      return {...state, productsArray: [...action.products]}
    default:
      return state;
  }
}
