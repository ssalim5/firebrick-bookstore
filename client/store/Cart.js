import axios from "axios";


const initialState = {counter : 0,
  productsArray : []};

const DELETE_ITEM = "DELETE_ITEM";
const ADD_ITEM = "ADD_ITEM";
const EDIT_QUANTITY = "EDIT_QUANTITY";

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
    type: SET_COUNTER,
    num
  }
};

export const _setProducts = (products) => {
  return{
    type: SET_PRODUCTS,
    products
  }}

const _editQuantity = (products) => {
  return {
    type: EDIT_QUANTITY,
    products
  }
}
export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      if(userId){
        const {data} = await axios.get(`api/orders/${userId}`);
        dispatch(_setProducts(data.books));
        localStorage.setItem('guestData', JSON.stringify(data));
        console.log("This is what a REAL cart looks like:", data);
      } else {
        try {
          console.log("reading local storage")
          const data = JSON.parse(localStorage.getItem('guestData'));
          console.log("Local data is:", data)
          dispatch(_setProducts(data.books));
        }
        catch{
          // If this is the first visit for a guest, nothing should happen
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

//Check on this
export const deleteItem = (userId, bookId) => {
  return async (dispatch) => {
     try {
       const {data} = await axios.delete(`api/orders/user=${userId}/book=${bookId}`);
       dispatch(_deleteItem(data));
     } catch (err) {
       console.log(err);
     }
   }
}

export const addItem = (userId,book,quantity) => {
  return async (dispatch) => {
    if (userId){
      try {
        const {data : userBook} = await axios.get(`/api/orders/${userId}`);
        const userData = userBook.books.filter( element => element.id === book.id);
        if (userData.length > 0) {
          const {data} = await axios.put(`/api/orders/user=${userId}/book=${book.id}/quantity=${quantity}`);
          dispatch(_editQuantity(data));
        } else  {
          const {data} = await axios.post(`/api/orders/user=${userId}/book=${book.id}/quantity=${quantity}`);
          dispatch(_addItem(data));
        }
      } catch (err){
        console.log(err);
    }} else {
      const {data} = await axios.get(`/api/books/${book.id}`);

      console.log("Unlogged add item data is:", data)

    }
  }
}

export const setCounter = () => {
  return (dispatch) => {
    dispatch(_setCounter());
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTER: {
      let orderContents = [...state.productsArray];
      let cartTotalItems = 0;
      for (let i = 0; i < orderContents.length; i++){
        cartTotalItems+= orderContents[i].order_products.order_quantity;
      }
      return {...state, counter : cartTotalItems};
    }
    case ADD_ITEM:
      return {...state, productsArray : [...state.productsArray,action.products]};
    case SET_PRODUCTS:
      return {...state, productsArray: [...action.products]};
    case DELETE_ITEM: {
      const copyProductsArray = [...state.productsArray];
      const filteredState = copyProductsArray.filter( element => element.id !== action.books.id);
      return {...state, productsArray: [...filteredState]};
    }
    case EDIT_QUANTITY: {
      const copyProductsArray = [...state.productsArray];
      const editedQuantity = copyProductsArray.map(element => {
        if (element.id === action.products.id) {
          return action.products;
        }
        return element;
      })
      return {...state, productsArray: [...editedQuantity]};
    }
    default:
      return state;
  }
}
