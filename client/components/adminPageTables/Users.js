import React from 'react';
import { Table } from "react-bootstrap";

const Users = ({currentProducts}) => {

  return (
    <>
    <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
    {currentProducts.map((user,index) => {

      return(

      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td><button type="button" className="btn btn-success">Edit</button></td>
        <td><button type="button" className="btn btn-danger">Delete</button></td>
      </tr>
      )
    })}
    </tbody>
    </Table>
    </>
  )




};

export default Users;
