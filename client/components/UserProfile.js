import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {updateUserThunk} from '../store/auth';
import { Table } from "react-bootstrap";


export const UserProfile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [username, setUsername] = useState(user.username)
  const [email,setEmail] = useState(user.email);
  const [address,setAddress] = useState(user.address)
  let updateObj = {
    id : user.id,
    username : username,
    email : email,
    address : address,
  }
  console.log(props)
  const orders = useSelector((state) => state.orders)
  let userOrder = orders.filter( (order) => {
    return order.userId === user.id && order.isCompleted
  })
  console.log(userOrder)

  return (
    <div className= "container d-flex w-100 justify-content-evenly mt-5">
      <div className="">
        <Form onSubmit={(e) => {
          e.preventDefault()
          console.log('heyy')
          dispatch(updateUserThunk({...user,...updateObj}))

        }}>
          <Form.Group className="mb-3 mt-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <div style={{
              width : '233px',
              display: "flex",
              alignItems: 'center',
              justifyContent: "space-between",
            }}>
          <Button variant="primary" type="submit">
            Change
          </Button>
          <Link className="ms-2" to="/">
            Go Back
          </Link>
          </div>
        </Form>
      </div>
      <div className="mt-5">
        <div className="p-3">
          <strong p> Order History </strong>
        </div>
        <Table striped bordered hover className="me-2 ms-2">
          <thead>
            <tr>
              <th> id </th>
              <th> Order Date </th>
            </tr>
          </thead>
          <tbody>
            {userOrder.map((order)=>{
              const {totalPrice, totalQuantity} = order.books
              .reduce((prev, curr) => {
                prev.totalPrice += curr.order_products.subtotal_price;
                prev.totalQuantity += curr.order_products.order_quantity;
                return prev;
              }, {totalPrice: 0, totalQuantity: 0 });
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.createdAt.slice(0,10)}</td>
                  <td> <Link to={{pathname : `/orders/${order.id}`, state : {order : order}, }}> <button type="button" className="btn btn-info">View Details</button> </Link> </td>
                  {/* <div className='mt-3'>
                    <b> Purchase Details </b> <br></br>

                    {totalQuantity} items <br></br>
                    Purchased on {order.updatedAt.slice(0, 10)} <br></br>
                    <b> Delivery Address </b> <br></br>
                    {order.user.address} <br></br>
                    Total : {'$' +totalPrice} <br></br>
                  </div> */}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>

    </div>
  );
};

export default UserProfile;
