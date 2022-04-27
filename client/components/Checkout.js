import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { usStates, countryList } from "../../public/statesAndCountries";
import { submitOrder, createOrder } from "../store/Orders";

const Checkout = () => {
  const history = useHistory()
  const {id} = useSelector((state) => state.auth)
  const orders = useSelector((state) => state.orders)
  const dispatch = useDispatch()
  let userOrder = orders.filter( (order) => {
    return order.userId === id && !order.isCompleted
  })[0]
  let totalItem = useSelector((state) => state.cart.counter)
  console.log("USER ORDER:", userOrder, totalItem)
  // const [address, setAddress] = useState(userOrder.user.address)
  // const [email, setEmail] = useState(userOrder.user.email);
  let totalDollar = 0;
  if(userOrder){
    totalDollar = userOrder.books.reduce((prev,curr) => {
      return prev + curr.order_products.subtotal_price
    }, 0)
  }
  console.log('dollar : ', totalDollar)

  return (
    <div className="container">

      <div className="row mt-5">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill text-black">{totalItem} items</span>
          </h4>
          <ul className="list-group mb-3">
            {userOrder ? userOrder.books.map((book,index) => {
              return (
                <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{book.title}</h6>
                <small className="text-muted">Qty: {book.order_products.order_quantity}</small>
              </div>
              <span className="text-muted">{'$' + book.order_products.subtotal_price.toFixed(2)}</span>
            </li>
              )
            }) : <></>}

            {/* <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li> */}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{'$' + (totalDollar).toFixed(2) }</strong>
            </li>
          </ul>
        </div>

        <div className="col-md-8 order-md-1">
          <h4 className="mb-1">Shipping Information</h4>
          <section className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder=""  required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder=""  required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                Your username is required.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  { countryList.map( (country, idx) => {
                    return (
                      <option key={idx}>{country}</option>
                    )
                  })}
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  { usStates.map( (state, idx) => {
                    return (
                      <option key={idx}>{state.abbreviation}</option>
                    )
                  })}
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" onChange={null} checked required/>
                <label className="custom-control-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" onChange={null} required/>
                <label className="custom-control-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" onChange={null} required/>
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="d-flex">
              <button className='btn btn-primary mr-auto p-2'
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(submitOrder(id))
                  dispatch(createOrder(id))
                  history.push('/')
                  alert("Order successfully submitted")
                }}> Submit Order </button>

              <Link to="/cart">
                <button className="btn btn-primary p-2"> Return to cart </button>
              </Link>
            </div>

          </section>
        </div>
      </div>
    </div>

    // {/* // <div>
    // //   <form>
    // //     <div>
    // //       <label htmlFor="address">
    // //         <small> Billing Address</small>
    // //       </label>
    // //       <input name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
    // //     </div>

    // //     <div>
    // //       <label htmlFor="email">
    // //         <small>Email </small>
    // //       </label>
    // //       <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    // //     </div>

    // //     <div>
    // //       <button className='btn btn-primary'
    // //         onClick={(e) => {
    // //           e.preventDefault()
    // //           dispatch(submitOrder(id))
    // //           dispatch(createOrder(id))
    // //         }}>
    // //         Submit Order
    // //       </button>

    // //       <Link to='/cart'>
    // //         <button className="btn btn-primary"> Return to cart </button>
    // //       </Link>

    // //     </div>
    // //   </form>
    // // </div> */}

  )
}

export default Checkout
