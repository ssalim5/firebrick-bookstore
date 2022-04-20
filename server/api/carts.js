const router = require('express').Router()
module.exports = router
const { models: { Cart }} = require('../db')

// GET /api/carts
router.get("/", async(req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.json(carts)
  } catch (error) {
    next(error)
  }
})

// GET /api/carts/:cartId
router.get("/:cartId", async(req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

//****NEED TO MAKE THESE ROUTES ONLY FOR ADMIN****
// POST /api/carts
router.post("/", async(req, res, next) => {
  try {
    res.send( await Cart.create(req.body) )
  } catch (error) {
    next(error)
  }
})

// PUT /api/carts/:cartId
router.put("/:cartId", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId)
    res.send( await cart.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// DELETE /api/carts/:cartId
router.delete("/:cartId", async(req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.param.cartId)
    await cart.destroy()
    res.send(cart)
  } catch (error) {
    next(error)
  }
})
