import React from 'react';
import { Table } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOrder } from '../../store/Orders';

const Orders = ({currentOrders}) => {
  const dispatch = useDispatch()
  return (
    <>
      <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th> id </th>
            <th> Customer Name </th>
            <th> Order Date </th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map( (order) => {
            return(
              <tr key={order.id}>
                <td> {order.id} </td>
                <td>{order.user.username}</td>
                <td> {order.createdAt.slice(0,10)} </td>
                <td><button type="button" className="btn btn-success">Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => dispatch(deleteOrder(order.id)) } >Delete</button></td>
                <td> <Link to={{pathname : `/orders/${order.id}`, state : {order : order}, }}> <button type="button" className="btn btn-info">View Details</button> </Link> </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default Orders
