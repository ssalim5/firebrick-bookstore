import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart , deleteItem, setCounter} from "../store/Cart";
import { Link } from "react-router-dom";


const cart = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.cart);
  const user = useSelector((state) => state.auth);

  //Have to fetchCart particular number for particular ID
  useEffect( () => {
    dispatch(fetchCart(user.id));
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

                <div key={book.id} className="row bg-white m-4">

                    <div className="col mr-1"><img className="rounded" src={book.cover} width="200" height='260' /></div>
                    <div className="col d-flex justify-content-center align-items-center">

                          <span className="font-weight-bold ">&nbsp;{book.author}</span>
                      </div>

                    <div className=" qty col d-flex justify-content-center align-items-center"><i className="fa fa-minus text-danger m-2"></i>
                      <h5 className="text-grey m-2">{book.order_products.order_quantity}</h5><i className="fa fa-plus text-success ms-1"></i>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center ">
                      <h5 className="text-grey">${(book.price * book.order_products.order_quantity).toFixed(2)}</h5>
                    </div>
                          <div className=" col d-flex justify-content-center align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={async () => {
                      await dispatch(deleteItem(user.id, book.id));
                      dispatch(setCounter());
                      }}></i></div>
                  </div>
            )}): <p> No books in cart </p>}
        </div>

      </div>
      <hr className="mb-4"/>
      <Link to='/checkout'>

            <button className="btn btn-primary btn-lg btn-block ms-4" type="submit">Proceed to Payment</button>
      </Link>
    </div>
  )
}

export default cart;
