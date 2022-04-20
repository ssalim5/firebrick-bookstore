import axios from "axios";

const initialState = [];

const SET_BOOKS = "SET_BOOKS";

const _setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books
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
    default:
      return state;
  }
}
