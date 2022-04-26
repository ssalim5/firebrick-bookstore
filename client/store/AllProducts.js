import axios from "axios";
//import { DELETE } from "sequelize/types/query-types";

const initialState = [];

const SET_BOOKS = "SET_BOOKS";
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = 'DELETE_BOOK';

const _setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books
  };
};

const _addBook = (books) => {
  return {
    type: ADD_BOOK,
    books
  };
};

const _deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    id
  };
};



export const addBookThunk = (book, user) => {
  return async (dispatch) => {
    if (user.admin) {
      try {
        const {data} =  await axios.post("/api/books",book);
        dispatch(_addBook(data));
      } catch (err){
        console.log(err);
      }
    } else {
      //Nothing --> Page that denies
    }
  };
};

export const fetchBooks = (keyword) => {
  return async (dispatch) => {
    try {
      //Api link
      const {data} = await axios.get("/api/books",{params : {keyword}});
      dispatch(_setBooks(data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const deleteBook = (bookId) => {
  return async (dispatch) => {

      try {
        console.log('asdfsadfsad',bookId)
        const {data} =  await axios.delete(`/api/books/${bookId}`);
        dispatch(_deleteBook(data.id));
      } catch (err){
        console.log(err);
      }
    }

};



export default (state = initialState, action) => {
  switch(action.type) {
    case SET_BOOKS:
      return action.books;
    case ADD_BOOK: {
      const books = state.map( element => {
        return element;
      });
      return [...books];

    }
    case DELETE_BOOK:

      return state.filter((book) => book.id != action.id)

    default:
      return state;
  }
}
