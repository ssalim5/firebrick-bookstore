import React from "react";
import { useSelector } from "react-redux";
import { submitOrder, createOrder } from "../store/Orders";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const {id} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
      <div>
        <form >
          {/* <div>
            <label htmlFor="address">
              <small> Mailing Address</small>
            </label>
            <input name="address" type="text" value={order || ''} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})}/>
          </div>
          <div>
            <label htmlFor="title">
              <small>Title</small>
            </label>
            <input name="title" type="title" value={singleBook.title} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})} />
          </div>

          <div>
            <label htmlFor="price">
              <small>Price</small>
            </label>
            <input name="price" type="price" value={singleBook.price} onChange={(e) => setSingleBook({...singleBook, [e.target.name]: e.target.value})}/>
          </div> */}

          <div>
            <button className='btn btn-primary'
              onClick={(e) => {
                e.preventDefault()
                dispatch(submitOrder(id))
                dispatch(createOrder(id))
              }}>
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default Checkout
