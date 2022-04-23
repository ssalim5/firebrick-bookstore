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
      </tr>
      )
    })}
    </tbody>
    </Table>
    </>
  )




};

export default Users;
