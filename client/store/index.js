import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import Cart from './Cart';
import Users from './Users';
import Orders from './Orders'

const reducer = combineReducers({ auth : auth,
  allProducts : AllProducts,
  singleProduct : SingleProduct,
  cart : Cart,
  users : Users,
  orders: Orders
 })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
