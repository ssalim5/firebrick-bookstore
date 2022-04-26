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
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
            <div className="p-2">
                <h4>Shopping cart</h4>
                <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down"></i></div>
            </div>
            {books.productsArray.length > 0 ? books.productsArray.map( book => {
              return (
                // <div key={book.id}>
                //   <img src={book.cover}></img>
                //   <h1>{book.order_products.order_quantity} </h1>
                //   <button onClick={async () => {
                //     await dispatch(deleteItem(user.id, book.id));
                //     dispatch(setCounter());
                //   }}> Delete </button>
                <div key={book.id}>
                  <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                    <div className="mr-1"><img className="rounded" src={book.cover} width="70"/></div>
                    <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{book.title}</span>
                      <div className="d-flex flex-row product-desc">
                          <span className="font-weight-bold">&nbsp;{book.author}</span></div>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                      <h5 className="text-grey mt-1 mr-1 ml-1">{book.order_products.order_quantity}</h5><i className="fa fa-plus text-success"></i>
                    </div>
                    <div>
                      <h5 className="text-grey">${book.price}</h5>
                    </div>
                    <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
                  </div>
              );
            }): <div> No books in cart </div>}
            {/* <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"/></div>
                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
                    <div className="d-flex flex-row product-desc">
                        <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
                        <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                    <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success"></i>
                </div>
                <div>
                    <h5 className="text-grey">$20.00</h5>
                </div>
                <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"/></div>
                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
                    <div className="d-flex flex-row product-desc">
                        <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
                        <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                    <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success"></i>
                </div>
                <div>
                    <h5 className="text-grey">$20.00</h5>
                </div>
                <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"/></div>
                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
                    <div className="d-flex flex-row product-desc">
                        <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
                        <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                    <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success"></i>
                </div>
                <div>
                    <h5 className="text-grey">$20.00</h5>
                </div>
                <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"/></div>
                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Basic T-shirt</span>
                    <div className="d-flex flex-row product-desc">
                        <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
                        <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                    <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success"></i>
                </div>
                <div>
                    <h5 className="text-grey">$20.00</h5>
                </div>
                <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
            </div>
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text" className="form-control border-0 gift-card" placeholder="discount code/gift card"/><button className="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div> */}
        </div>
      </div>
    </div>
  )
}

export default cart;
