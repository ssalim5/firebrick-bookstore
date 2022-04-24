import React from 'react';
import { Table } from "react-bootstrap";
import { deleteBook } from '../../store/AllProducts';
import { useDispatch} from "react-redux";

const Books = ({currentProducts}) => {

  const dispatch = useDispatch();
  return (
    <>
    <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th>id</th>
            <th>Author</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
    {currentProducts.map((book,index) => {

      return(

      <tr key={index}>
        <td>{book.id}</td>
        <td>{book.author}</td>
        <td>{book.title}</td>
        <td>{book.price}</td>
        <td><button type="button" className="btn btn-success">Edit</button></td>
        <td><button type="button" className="btn btn-danger" onClick={() => dispatch(deleteBook(book.id)) }>Delete</button></td>
        </tr>
      )
    })}
    </tbody>
    </Table>
    </>
  )




};



export default Books;
