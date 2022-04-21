const router = require('express').Router()
module.exports = router
const { models: { Order, Book, User }} = require('../db')

// GET /api/orders
// Get all orders with the books inside each order
router.get("/", async(req, res, next) => {
  try {
    const ordersAndBooks = await Order.findAll({include: Book})
    res.json(ordersAndBooks)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:userId/
// Get user's unfulfilled order and the books inside of it
router.get( "/:userId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if(!userOrder){
      let error = Error('User order not found')
      error.status = 404
      throw(error)
    }

    const orderId = userOrder.id
    const orderAndBooks = await Order.findOne({
      where: {id: orderId},
      include: Book
    })
    if(!orderAndBooks){
      let error = Error('Matching order not found')
      error.status = 404
      throw(error)
    }

    res.json(orderAndBooks)
  } catch (error) {
    next(error)
  }
})

// POST /api/orders
// When an item is first added to cart create an order
router.post("/:userId", async(req, res, next) => {
  try {
    const order = await Order.create(req.body)
    const user = await User.findByPk(req.params.userId)
    if(!user){
      let error = Error('User not found')
      error.status = 404
      throw(error)
    }
    await order.setUser(user)
    res.send(order)
  } catch (error) {
    next(error)
  }
})

// Different actions:
// -Set order to completed
// -Add new book to order
// -Update quantity

// PUT /api/orders/:userId
// To complete user's unfulfilled order:
router.put("/:userId", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if( !userOrder ){
      let error = Error('User order not found')
      error.status = 404
      throw(error)
    }
    res.send( await userOrder.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// POST /api/orders/:userId/:bookId/:quantity
// Add a new book to an order
router.post("/user=:userId/book=:bookId/quantity=:quantity", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if( !userOrder ){
      let error = Error('User order not found')
      error.status = 404
      throw(error)
    }

    const newBook = await Book.findByPk( req.params.bookId )
    if(!newBook){
      let error = Error('Book not found')
      error.status = 404
      throw(error)
    }

    await userOrder.addBook( newBook, { through:
      {
        order_quantity: req.params.quantity,
        subtotal_price: newBook.price*req.params.quantity
      }
    })
    res.send(newBook)
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId/:bookId
// Update quantity of a book in an order
router.put( "/user=:userId/book=:bookId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if(!userOrder){
      let error = Error("User order not found")
      error.status = 404
      throw(error)
    }

    const book = await Book.findByPk(req.params.bookId)
    if(!book){
      let error = Error("Book not found")
      error.status = 400
      throw error
    }

    const oldBook = (await Order.findOne({
      where: {id: userOrder.id},
      include:[{
        model: Book,
        where: {id: req.params.bookId}
      }]
    })).books[0]
    const old_quantity = oldBook.order_products.order_quantity

    await userOrder.removeBook(book)
    const newBook = await userOrder.addBook(book, {through:
      {
        order_quantity: old_quantity+1,
        subtotal_price: oldBook.price*(old_quantity+1)
      }
    })
    res.json(newBook)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/orders/:orderId/:bookId
// Remove book from order
router.delete("/user=:userId/book=:bookId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if(!userOrder){
      let error = Error('User order not found')
      error.status = 404
      throw(error)
    }

    const book = await Book.findByPk( req.params.bookId )
    if(!book){
      let error = Error('Book not found')
      error.status = 404
      throw(error)
    }

    await userOrder.removeBook(book)
    res.send(book)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/orders/:orderId
// Remove user's pending order
router.delete("/:userId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    })
    if(!userOrder){
      let error = Error('User order not found')
      error.status = 404
      throw(error)
    }

    await userOrder.destroy()
    res.send(userOrder)
  } catch (error) {
    next(error)
  }
})
