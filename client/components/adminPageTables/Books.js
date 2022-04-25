import React from 'react';
import { Table } from "react-bootstrap";
import { deleteBook } from '../../store/AllProducts';
import { useDispatch} from "react-redux";
import EditBook from './EditBook';
import { Link } from "react-router-dom";

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
            <th>Stock</th>
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
        <td>{book.stock}</td>
        <td><Link to={{pathname :`/book/${book.id}`,state : {book : book}, }}><button type="button" className="btn btn-success">Edit</button></Link></td>
        <td><button type="button" className="btn btn-danger" onClick={() => dispatch(deleteBook(book.id)) } onMouseDown={(e) => e.preventDefault() }>Delete</button></td>
        </tr>
      )
    })}
    </tbody>
    </Table>
    </>
  )




};



export default Books;
