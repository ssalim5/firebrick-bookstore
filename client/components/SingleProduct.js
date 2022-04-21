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
  console.log(typeof book.price);

  return (
    <div className='d-flex vh-100 m-5'>
      <div className='bg-success w-25' >
        <h3>Filtering div</h3>
      </div>
      <div className='bg-danger w-75'>
        <img style={{ height: "66%"}}
        src={book.cover} />
        <h3>{book.title}</h3>
        <div>
        <a className="btn btn-info text-white">Add To Cart</a>
        <div style={{ display: "inline-block"}}>
        <span className="price badge rounded-pill bg-warning text-dark d-flex align-items-center" width>
          {"$"}
          {Number.parseFloat(book.price).toFixed(2)}
        </span>
        </div>
        </div>


      </div>

    </div>
  )
}


export default SingleProduct;
