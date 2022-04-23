import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from 'react'
import { Table } from "react-bootstrap";
import BooksList from "./BooksList";
import Pagination from "./Pagination";
import { _setCounter } from "../store/Cart";
/**
 * COMPONENT
 */
export const Home = () => {
  const books = useSelector((state) => state.allProducts);

  const cart = useSelector((state) => state.cart);
  const {admin} = useSelector((state) => state.auth)

  ///For pagination ////
  const [currentPage,setCurrentPage] = useState(1);
  const [productsPerPage,setProductsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = books.slice(indexOfFirstProduct,indexOfLastProduct);
  const totalPagesSum = Math.ceil(books.length / productsPerPage);
  const numOfPages = [];
  for(let i = 1; i<=totalPagesSum; i++){
    numOfPages.push(i)
  }
  ///For pagination ////
  ///////////////////
  const booksHeaders = ['id','author','title','price']
  return (

    <div>

    {admin ?
    <div className="container d-flex flex-row justify-content-between vh-100">
      <div className="bg-white w-25 mt-5 aling-items-center">
      <div className="form-check mt-3 ms-2 p-2">
        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Orders
        </label>
      </div>

      <div className="form-check mt-3 ms-2 p-2">
        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Products
        </label>
      </div>

      <div className="form-check mt-3 ms-2 p-2">
        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Users
        </label>
      </div>
      </div>

      <div className=" w-75">

        <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            {booksHeaders.map((elem,index) => {
              return(
                <th key={index}>{elem}</th>
              )
            })}
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
            </tr>
            )
          })}

        </tbody>
        </Table>
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {numOfPages.map((el,index) =>{
              return(
                <li key={el} className="page-link" onClick={() => setCurrentPage(el)}>{el}</li>
              )
            })}
          </ul>
        </nav>
     </div>
    </div>

      // when user is a customer
    : <section className="products mt-5">
      <div className="container">
        <div className="row">
          {currentProducts.map((book) => {
            return <BooksList key={book.id} book={book} counter ={cart.counter} />;
          })}
        </div>
        <Pagination pages ={totalPagesSum} setCurrentPage={setCurrentPage} />
      </div>

    </section>}


    </div>
  );
};

export default Home;
