import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart} from "../store/Cart";

const cart = (props) => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.cart);

  // function fetchData() {
  //   dispatch(fetchCart(1));
  // }
  useEffect( () => {
    //Have to fetchCart particular number for particular ID
    dispatch(fetchCart(2));
  }, [dispatch])
  console.log(books);
  return (
    <a>
      <div className="cart">
        {books.productsArray.length > 0 ? books.productsArray.map( book => {
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
