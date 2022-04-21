import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
import BooksList from "./BooksList";
/**
 * COMPONENT
 */
export const Home = () => {
  const books = useSelector((state) => state.allProducts);
  console.log(books);

  const [counter,setCounter] = useState(0);
  const [itemsArray,setItemsArray] = useState([]);
  // cart counter and items array

  return (
    <section className="products mt-5">
      <div className="container">
        <div className="row">
          {books.map((book) => {
            return <BooksList key={book.id} book={book}  />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
