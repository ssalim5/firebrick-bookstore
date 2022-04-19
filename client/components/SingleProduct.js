import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router'
/**
 * COMPONENT
 */
export const SingleProduct = () => {
  const productId = useParams(); // this will get the id from router '/products/:productId'
  const dispatch = useDispatch(); // we will use this one to fetch book data
  //next step fetch single book with dispatch.
  return (
    <div className='d-flex vh-100 m-5'>
      <div className='bg-success w-25' >
        <h3>Filtering div</h3>
      </div>
      <div className='bg-danger w-75'>
        <h3>books div</h3>
      </div>

    </div>
  )
}


export default SingleProduct;