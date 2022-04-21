import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const cart = (props) => {
  //const [books, setBooks] = useState([]);
  const books = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {books.length > 0 ? books.map( element => {
        return (
          <div key={element.id}>
            <img src={element.cover}></img>
            <button> Delete </button>
          </div>
        );

      })
      : <div> No books found </div>}
    </div>
    )
}

export default cart;
