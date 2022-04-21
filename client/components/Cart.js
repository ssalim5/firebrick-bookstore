import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../store/Cart";

const cart = (props) => {
  //const [books, setBooks] = useState([]);
  const books = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const cartInfo = dispatch(fetchCart());
  console.log(cartInfo);
  return (
    <a>
      <div className="cart">
        {books.map( book => {
          return (
            <div key={book.id}>
              <img src={book.cover}></img>
              <button> Delete </button>
            </div>
          );

        })}
        </div>
      <button> check </button>

    </a>
    )
}

export default cart;
