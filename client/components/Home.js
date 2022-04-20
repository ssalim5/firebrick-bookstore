import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BooksList from "./BooksList";
/**
 * COMPONENT
 */
export const Home = (props) => {
  const books = useSelector((state) => state.allProducts);
  console.log(books);

  return (
    <section className="products mt-5">
      <div className="container">
        <div className="row">
          {books.map((book) => {
            return <BooksList key={book.id} book={book} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
