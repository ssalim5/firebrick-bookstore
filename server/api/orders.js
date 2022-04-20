const router = require('express').Router()
module.exports = router
const { models: { Order }} = require('../db')
const Book = require('../db/models/Book')

// GET /api/orders
router.get("/", async(req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId
router.get("/:orderId", async(req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:orderId/books
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
router.post("/", async(req, res, next) => {
  try {
    const order = await Order.create(req.body)

    res.send( order )
  } catch (error) {
    next(error)
  }
})

// Different Updates:
// -Set order to completed
// -Add new book to order
// -Update quantity

// PUT /api/orders/:orderId
// For completing:
router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.send( await order.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// PUT /api/orders/:orderId/:bookId
router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    res.send( await order.update(req.body) )
  } catch (error) {
    next(error)
  }
})


// DELETE /api/orders/:orderId
router.delete("/:orderId", async(req, res, next) => {
  try {
    const order = await Order.findByPk(req.param.orderId)
    await order.destroy()
    res.send(order)
  } catch (error) {
    next(error)
  }
})
