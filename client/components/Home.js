import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from 'react'
import BooksList from "./BooksList";
import Pagination from "./Pagination";
import { _setCounter } from "../store/Cart";
/**
 * COMPONENT
 */
export const Home = () => {
  const books = useSelector((state) => state.allProducts);
  const dispatch = useDispatch()

  const [counter,setCounter] =useState(2);
  const [itemsArr,setItemsArr] =useState([]);


  const cart = useSelector((state) => state.cart);
  //cart.counter = counter
  console.log('carft',cart)
  console.log('state',counter)

  useEffect(()=>{
    console.log('pffffffffffffffffffff')
    dispatch(_setCounter(counter))
  },[counter,setCounter])




  const [currentPage,setCurrentPage] = useState(1);
  const [productsPerPage,setProductsPerPage] = useState(12)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = books.slice(indexOfFirstProduct,indexOfLastProduct);
  const totalPagesSum = Math.ceil(books.length / productsPerPage);

  return (
    <section className="products mt-5">
      <div className="container">
        <div className="row">
          {currentProducts.map((book) => {
            return <BooksList key={book.id} book={book} setCounter={setCounter} counter ={counter} />;
          })}
        </div>
        <Pagination pages ={totalPagesSum} setCurrentPage={setCurrentPage} />
      </div>

    </section>
  );
};

export default Home;
