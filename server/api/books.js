const router = require('express').Router()
const { models: { Book }} = require('../db')
module.exports = router


// GET /api/books
router.get("/", async(req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (error) {
    next(error)
  }
})

// GET /api/books/:bookId
router.get("/:bookId", async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    res.json(book)
  } catch (error) {
    next(error)
  }
})

// POST /api/books
router.post("/", async(req, res, next) => {
  try {
    res.send( await Book.create(req.body) )
  } catch (error) {
    next(error)
  }
})

// PUT /api/books/:bookId
router.put("/:bookId", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    res.send( await book.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// DELETE /api/books/:bookId
router.delete("/:bookId", async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.param.bookId)
    await book.destroy()
    res.send(book)
  } catch (error) {
    next(error)
  }
})
