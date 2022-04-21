import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {updateUserThunk} from '../store/auth';

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
  return (
    <div className= "container mt-5">
      <div>
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

    </div>
  );
};

export default UserProfile;
