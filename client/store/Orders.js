import axios from 'axios'

const SET_ORDERS = 'SET_ORDERS';
const DELETE_ORDER = 'DELETE_ORDER'
const DELETE_ORDER_BOOK = 'DELETE_ORDER_BOOK'
const SUBMIT_ORDER = 'SUBMIT_ORDER'
const CREATE_ORDER = 'CREATE_ORDER'

const setOrders = (orders) => ({type : SET_ORDERS, orders});
const _deleteOrder = (order) => ({type: DELETE_ORDER, order})
const _deleteOrderBook = (order) => ({type: DELETE_ORDER_BOOK, order})
const _submitOrder = (order) => ({type: SUBMIT_ORDER, order})
const _createOrder = (order) => ({type: CREATE_ORDER, order})

export const createOrder = (userId) => async (dispatch) => {
  try {
    const { data: order } = await axios.post(`/api/orders/${userId}`)
    dispatch( _createOrder(order) )
  } catch (error) {
    console.log(error)
  }
}

export const fetchOrders = () => async dispatch => {
  try {
    const { data: orders } = await axios.get(`/api/orders/`);
    dispatch(setOrders(orders))
  } catch(err){
    console.log(err)
  }
}

export const deleteOrder = (orderId) => async dispatch => {
  try {
    const { data: order } = await axios.delete(`/api/orders/${orderId}`)
    dispatch(_deleteOrder(order))
  } catch (error) {
    console.log(error)
  }
}

export const deleteOrderBook = (orderId, bookId) => async dispatch => {
  try {
    const { data: order } = await axios.delete(`api/orders/order=${orderId}/book=${bookId}`)
    dispatch(_deleteOrderBook(order))
  } catch (error) {
    console.log(error)
  }
}

export const submitOrder = (userId) => async (dispatch) => {
  try {
    const { data: order } = await axios.put(`api/orders/${userId}`, {isCompleted: true})
    dispatch(_submitOrder(order))
  } catch (error) {
    console.log(error)
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders
    case DELETE_ORDER:
      return state.filter( (order) => {
        return order.id !== action.order.id
      })
    case DELETE_ORDER_BOOK:
      return state.map( (order) => {
        if ( order.id === action.order.id ){
          return action.order
        } else {
          return order
        }
      })
    case SUBMIT_ORDER:
      return state.map( (order) => {
        if( order.id === action.order.id ){
          return action.order
        } else {
          return order
        }
      })
    case CREATE_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}
