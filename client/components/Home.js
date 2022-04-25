import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { Table } from "react-bootstrap";
import BooksList from "./BooksList";
import Pagination from "./Pagination";

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
  ///For pagination ////
  return (

    <div>

    {admin ?
    <div className="container d-flex flex-row justify-content-between vh-100">
      <div className="bg-white w-25 mt-5 aling-items-center">
      <div class="form-check mt-3 ms-2 p-2">
        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Orders
        </label>
      </div>

      <div class="form-check mt-3 ms-2 p-2">
        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Products
        </label>
      </div>

      <div class="form-check mt-3 ms-2 p-2">
        <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Users
        </label>
      </div>
      </div>

      <div className="bg-danger w-75">

        <Table striped bordered hover className="me-2 ms-2">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        </Table>
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
