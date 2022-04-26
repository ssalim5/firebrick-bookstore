import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from 'react'

import BooksList from "./BooksList";
import Pagination from "./Pagination";
import { _setCounter } from "../store/Cart";
import Users from "./adminPageTables/Users";
import Books from "./adminPageTables/Books";
import Orders from "./adminPageTables/Orders";

/**
 * COMPONENT
 */
export const Home = () => {
  const books = useSelector((state) => state.allProducts);
  const users = useSelector((state) => state.users);
  const orders = useSelector((state) => state.orders)
  const cart = useSelector((state) => state.cart);
  const {admin} = useSelector((state) => state.auth)

  ///For pagination ////
  const [currentPage,setCurrentPage] = useState(1);
  const [productsPerPage,setProductsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;




  ///For pagination ////
  ///////////////////
  const classes = ['books','users', 'orders']
  const [checkedState, setCheckedState] = useState(
    new Array(classes.length).fill(false)
  );
  const [currentState,setCurrentState] = useState(classes[0])




  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : false
    );

    setCheckedState(updatedCheckedState);

    const resultIndex = updatedCheckedState.filter(
      (elem, index) => {
        if (elem === true) {
          setCurrentState(classes[index]);
          return index;
        }
      });
    };
  let showArray;
  if(currentState === 'books'){
    showArray= books;
  }else if (currentState === 'users'){
    showArray= users; // later make users
  }else{
    showArray= orders; // later make orders
  }


  const currentProducts = showArray.slice(indexOfFirstProduct,indexOfLastProduct);
  const totalPagesSum = Math.ceil(books.length / productsPerPage);
  const numOfPages = [];
  for(let i = 1; i<=totalPagesSum; i++){
    numOfPages.push(i)
  }






  return (

    <div>

    {admin ?
    <div className="container d-flex flex-row justify-content-between vh-100">
      <div className="bg-white w-25 mt-5 aling-items-center">
      {classes.map((name,index)=>{
        return (
          <div key={index} className="form-check mt-3 ms-2 p-2">
            <input className="form-check-input ms-2" type="radio" name={name} id={`custom-checkbox-${index}`} value={name}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
            {name}
            </label>
      </div>
        )
      })}
      </div>

      <div className=" w-75">

      {currentState === 'books' ? <Books currentProducts={currentProducts}/> : currentState ==='users' ? <Users currentProducts={currentProducts}/> : <Orders currentOrders={currentProducts}/> }

        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {numOfPages.map((el,index) =>{
              //console.log(el,currentPage)
              return(
                <li key={el} className={el === currentPage ? 'page-item active' : 'page-item' } onClick={() => setCurrentPage(el)}><p className="page-link">{el}</p></li>
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
