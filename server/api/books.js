const router = require('express').Router()
const { models: { Book }} = require('../db')
module.exports = router


// GET /api/books
router.get("/", async(req, res, next) => {
  try {
    const books = await Book.findAll()
    if(!books){
      let error = Error("Books not found")
      error.status = 404
      throw(error)
    }

    res.json(books)
  } catch (error) {
    next(error)
  }
})

// GET /api/books/:bookId
router.get("/:bookId", async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    if(!book){
      let error = Error("Book not found")
      error.status = 404
      throw(error)
    }

    res.json(book)
  } catch (error) {
    next(error)
  }
})

//****NEED TO MAKE THESE ROUTES ONLY FOR ADMIN****
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
    if(!book){
      let error = Error("Book not found")
      error.status = 404
      throw(error)
    }

    res.send( await book.update(req.body) )
  } catch (error) {
    next(error)
  }
})

// DELETE /api/books/:bookId
router.delete("/:bookId", async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    if(!book){
      let error = Error("Book not found")
      error.status = 404
      throw(error)
    }

    await book.destroy()
    res.send(book)
  } catch (error) {
    next(error)
  }
})
