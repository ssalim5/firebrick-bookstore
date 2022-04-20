import axios from "axios";

const initialState = [];

const SET_CART = "SET_CART";
const DELETE_ITEM = "DELETE_ITEM";

const _setCart = (books) => {
  return {
    type: SET_CART,
    books
  }
}

const _deleteItem = (books) => {
  return {
    type: DELETE_ITEM,
    books
  }
}

const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`api/carts/${userId}`);
      dispatch(_setCart(data));
    } catch (err) {
      console.log(err);
    }
  }
}

//Check on this
const deleteItem = (userId, bookId) => {
   return async (dispatch) => {
     try {
       //const {data} = await axios.delete(`api/carts/${userId}/${bookId});
       //dispatch(_deleteItem(data));
     } catch (err) {
       console.log(err);
     }
   }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CART:
        return action.books;
    default:
      return state;
  }
}
