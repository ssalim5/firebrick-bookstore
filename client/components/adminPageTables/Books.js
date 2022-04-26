import React,{useState,useEffect} from 'react';
import { Table } from "react-bootstrap";
import { deleteBook } from '../../store/AllProducts';
import { useDispatch,useSelector} from "react-redux";
import { addBookThunk,fetchBooks } from '../../store/AllProducts';
import { Link } from "react-router-dom";

const Books = ({currentProducts}) => {
  const [addBook,setAddBook] = useState({
    author : '',
    title : '',
    price : '',
    stock : '',
  });
  const [addBtnClicked,setAddBtnClicked] = useState(0);
  const adminUser = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBooks())
  },[addBtnClicked,setAddBtnClicked])
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
        <tr>
          <td>#</td>
          <td><input name='author' type="text" value={addBook.author} onChange= {(e) => setAddBook({...addBook, [e.target.name] : e.target.value})}></input></td>
          <td><input name='title' type="text" value={addBook.title} onChange= {(e) => setAddBook({...addBook, [e.target.name] : e.target.value})}></input></td>
          <td><input name='price' type="text" value={addBook.price} onChange= {(e) => setAddBook({...addBook, [e.target.name] : e.target.value})}></input></td>
          <td><input name='stock' type="text" value={addBook.stock} onChange= {(e) => setAddBook({...addBook, [e.target.name] : e.target.value})}></input></td>
          <td colSpan="2"><button type="button" className="btn btn-primary w-100" onClick={() => {dispatch(addBookThunk(addBook,adminUser))
          setAddBook({
            author : '',
            title : '',
            price : '',
            stock : '',
          })
          setAddBtnClicked(addBtnClicked + 1)} } onMouseDown={(e) => {
            e.preventDefault()
             }}>Add</button></td>
        </tr>
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
