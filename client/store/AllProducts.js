import axios from "axios";

const initialState = [];

const SET_BOOKS = "SET_BOOKS";
const ADD_BOOK = "ADD_BOOK";

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

export const addBook = (book, user) => {
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

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      //Api link
      const {data} = await axios.get("/api/books");
      dispatch(_setBooks(data));
    } catch (err) {
      console.log(err);
    }
  };
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
    default:
      return state;
  }
}
