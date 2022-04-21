const router = require('express').Router()
module.exports = router
const { models: { Order }} = require('../db')
const Book = require('../db/models/Book')
const User = require('../db/models/User')

// GET /api/orders
// Get all orders
router.get("/", async(req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId
// Get an order
router.get("/:orderId", async(req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId/books
// Get books inside an order
router.get( "/:orderId/books", async(req, res, next) => {
 try {
   const orderAndBooks = await Order.findOne({
     where: {id: req.params.orderId},
     include: Book
   })
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
    order.setUser(user)
    res.send(order)
  } catch (error) {
    next(error)
  }
})

// Different actions:
// -Set order to completed
// -Add new book to order
// -Update quantity

// PUT /api/orders/:orderId
// To complete an order:
router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.send( await order.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// POST /api/orders/:orderId/:bookId
// Add a new book to an order
router.post("/:orderId/:bookId/:quantity", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    const newBook = await Book.findByPk( req.params.bookId )
    order.addBook( newBook, { through:
      {
        quantity: req.params.quantity,
        subtotal_price: newBook.price*req.params.quantity
      }
    })
    res.send( newBook )
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId/:bookId
// Update quantity of a book in an order
// ** IN PROGRESS **
// router.put( "/:orderId/:bookId", async(req, res, next) => {
//   try {
//     const orderAndBook = Order.findOne({
//       where: {id: req.params.orderId},
//       include: {
//         model: Book,
//         where: {id: req.params.bookId}
//       }
//     })
//     console.log(orderAndBook)
//     res.json(orderAndBook)
//   } catch (error) {
//     next(error)
//   }
// })

// DELETE /api/orders/:orderId/:bookId
// Remove book from order
router.delete("/:orderId", async(req, res, next) => {
  try {
    const order = await Order.findByPk(req.param.orderId)
    await order.destroy()
    res.send(order)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/orders/:orderId
// Remove an order
router.delete("/:orderId", async(req, res, next) => {
  try {
    const order = await Order.findByPk(req.param.orderId)
    await order.destroy()
    res.send(order)
  } catch (error) {
    next(error)
  }
})
