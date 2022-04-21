import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router'
import { fetchBook } from '../store/SingleProduct';

/**
 * COMPONENT
 */
export const SingleProduct = () => {

  // this will get the id from router '/products/:productId'
  const productId = useParams().productId;

  const book = useSelector(state => state.singleProduct);

  //next step fetch single book with dispatch.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(productId))
  }, [dispatch]);


  console.log("Reaching component.")
  console.log(book);

  return (
    <div className='d-flex vh-100 m-5'>
      <div className='bg-success w-25' >
        <h3>Filtering div</h3>
      </div>
      <div className='bg-danger w-75'>
        <h3>{book.title}</h3>
      </div>

    </div>
  )
}


export default SingleProduct;
