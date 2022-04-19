import axios from "axios";

const initialState = {};

const SET_BOOK = "SET_BOOK";

const _setBook = (book) => {
  return {
    type: SET_BOOK,
    book
  };
};

export const fetchBook = () => {
  return async (dispatch) => {
    try {
      //Api link
      const {data} = await axios.get("unknown link");
      dispatch(_setBook(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function SingleProductsReducer(state = initialState, action) {
  switch(action.type) {
    case SET_BOOK:
      return {...action.book};
    default:
      return state;
  }
}
