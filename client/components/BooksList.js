import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setCounter } from "../store/Cart";
const book = ({book, counter}) => {
  const user = useSelector((state) => state.auth);
  const books = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  // dispatch(setCounter(books.productsArray))

  return (
    <div key={book.id} className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={'/products/' + book.id}>
          <img
            style={{ height: "320px" }}
            className="card-img-top img-fluid rounded"
            src={book.cover}></img>
        </Link>

        <div className="card-body h-100  d-flex flex-column justify-content-between">
          <div>
            <h5>{book.author}</h5>
            <p style={{ display: "inline" }}>{book.title}</p>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a className="btn btn-info text-white" onClick={(e) => {
              e.preventDefault()
              dispatch(addItem(user.id,book,1))
              dispatch(setCounter())
            }}>Add To Cart</a>

            <span className="price badge rounded-pill bg-warning text-dark d-flex align-items-center">
              {"$"}
              {book.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default book;
