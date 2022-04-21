import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../store/Cart";

const cart = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.cart);
  const user = useSelector((state) => state.auth);

  //Have to fetchCart particular number for particular ID
  useEffect( () => {
    dispatch(fetchCart(user.id));
  }, [dispatch])
  return (
    <a>
      <div className="cart">
        {books.length > 0 ? books.map( book => {
          return (
            <div key={book.id}>
              <img src={book.cover}></img>
              <button> Delete </button>
            </div>
          );

        }): <div> No books in cart </div>}
        </div>

    </a>
    )
}

export default cart;
