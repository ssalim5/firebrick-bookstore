import axios from "axios";

const initialState = {};

const SET_BOOK = "SET_BOOK";


const _setBook = (book) => {
  return {
    type: SET_BOOK,
    book
  };
};


export const fetchBook = (bookId) => {
  return async (dispatch) => {
    try {
      //Api link
      const {data} = await axios.get(`/api/books/${bookId}`);
      dispatch(_setBook(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//this delete thunk added allProducts.js
// export const deleteBook = (bookId, user) => {
//   return async (dispatch) => {
//     if(user.admin) {
//       try {
//         const {data} = await axios.delete(`/api/books/${bookId}`);
//         dispatch(_deleteBook(data));
//       } catch (err) {
//         console.log(err);
//       }
//     } else {
//       //Nothing --> Page that denies
//     }
//   };
// };

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_BOOK:
      return {...action.book};
    default:
      return state;
  }
};
