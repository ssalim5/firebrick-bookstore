import axios from "axios";
import history from '../history'
const initialState = {};

const SET_BOOK = "SET_BOOK";
const UPDATE_BOOK = 'UPDATE_BOOK';


const _setBook = (book) => {
  return {
    type: SET_BOOK,
    book
  };
};

const _updateBook = (book) => {
  return {
    type : UPDATE_BOOK,
    book
  }
}

export const fetchBook = (bookId) => {
  return async (dispatch) => {
    try {
      //Api link
      const {data} = await axios.put(`/api/books/${bookId}`);

      dispatch(_setBook(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateBookThunk = (book) => {
  return async (dispatch) => {
    try{
      console.log(book)
      const {data:updated} = await axios.put(`/api/books/${book.id}`,book);
      console.log('sdafsadfsdfsdafsdfsdafsadfsdf')
      dispatch(_updateBook(updated))
      history.push('/')
    }catch(err){
      console.log(err)
    }
  }
}

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
    case UPDATE_BOOK:
      return action.book;
    default:
      return state;
  }
};
