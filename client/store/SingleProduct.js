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

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_BOOK:
      return {...action.book};
    default:
      return state;
  }
}
