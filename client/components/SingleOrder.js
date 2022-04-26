import React from 'react';
import { Table } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteOrderBook } from '../store/Orders';

const SingleOrder = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const {order} = location.state;
  console.log(order);
  const {totalPrice, totalQuantity} = order.books
  .reduce((prev, curr) => {
    prev.totalPrice += curr.price;
    prev.totalQuantity += curr.order_products.order_quantity;
    return prev;
  }, {totalPrice: 0, totalQuantity: 0 });
  return (
    <>
      <div>
        <b> Purchase Details </b> <br></br>
        Order #{order.id} <br></br>
        {totalQuantity} items <br></br>
        Purchased on {order.updatedAt.slice(0, 10)} <br></br>
        <b> Delivery Address </b> <br></br>
        {order.user.address} <br></br>
        Total: ${totalPrice} <br></br>
      </div>
      <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th> Title </th>
            <th> Author </th>
            <th> Qty </th>
            <th> Unit Price </th>
          </tr>
        </thead>
        <tbody>
          {order.books.map( (book) => {
            return(
              <tr key={book.id}>
                <td> {book.title} </td>
                <td> {book.author} </td>
                <td> {book.order_products.order_quantity} </td>
                <td> {book.price} </td>
                <td> <button type="button" className="btn btn-success">Edit</button> </td>
                <td> <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteOrderBook(order.id, book.id)) }>Delete</button> </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SingleOrder;
