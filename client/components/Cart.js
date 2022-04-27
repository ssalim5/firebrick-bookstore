import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, deleteItem, setCounter, addItem} from "../store/Cart";
import { Link } from "react-router-dom";

const cart = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.cart);
  const user = useSelector((state) => state.auth);
  //Have to fetchCart particular number for particular ID
  useEffect( () => {
    dispatch(fetchCart(user.id))
  }, [dispatch])
  return (
    <div className="container mt-5 mb-5 vh-100">
      <div className="d-flex justify-content-center row">
        <div className="col-md-12 ">
            <div className=" p-2">
                <h4 className="cart-header">Shopping Cart</h4>
            </div>
            {books.productsArray.length > 0 ? books.productsArray.map((book) => {
              return (
                <div key={book.id} className="row align-items-center bg-white m-1 rounded">
                  <div className="col row mr-1">
                    <Link to={`/products/${book.id}`}>
                      <img className="rounded" src={book.cover} width="200" height='260' />
                    </Link>
                  </div>
                    <div className="col d-flex flex-column product-details">
                      <Link to={`/products/${book.id}`}>
                      <span className=" font-weight-bold">{book.title}</span>
                      </Link>
                      <div className="d-flex product-desc">
                          <div className="color"><span className="text-grey">By: {book.author}</span></div>
                      </div>
                  </div>
                  <div className=" qty col d-flex justify-content-center align-items-center">
                    <i onClick={() => {dispatch(addItem(user.id, book, -1)); dispatch(setCounter());}} className="fa fa-minus text-danger m-2"></i>
                    <h5 className="text-grey m-2">{book.order_products.order_quantity}</h5>
                    <i onClick={() => {dispatch(addItem(user.id, book, +1)); dispatch(setCounter());}} className="fa fa-plus text-success ms-1"></i>
                  </div>
                  <div className="col d-flex justify-content-center align-items-center ">
                    <h5 className="text-grey">${(book.price * book.order_products.order_quantity).toFixed(2)}</h5>
                  </div>
                  <div className=" col d-flex justify-content-center align-items-center">
                    <i onClick={async () => {await dispatch(deleteItem(user.id, book.id)); dispatch(setCounter());}}className="fa fa-trash mb-1 text-danger"></i>
                  </div>
                </div>
              )}) : <strong> No books in cart! </strong> }
        </div>
      {books.productsArray.length > 0 ?
        <div>
          <hr className="mb-4"/>
          <Link to='/checkout'>
          <button className="btn btn-primary btn-lg btn-block ms-4" type="submit">Proceed to Payment</button>
          </Link>
        </div>
      : <div> </div> }
      </div>
    </div>
  )
}

export default cart;
