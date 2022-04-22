const router = require('express').Router()
const { models: { Book }} = require('../db')
const Sequelize = require('sequelize')
module.exports = router
const Op = Sequelize.Op;

// GET /api/books
router.get("/", async(req, res, next) => {
  try {
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    if(isEmpty(req.query)){

      const books = await Book.findAll()
      res.json(books)
    }else{

      const books = await Book.findAll({
        where : {title : {
          [Op.iLike]: '%'+ req.query.keyword +'%'
        }}
      })
      res.json(books)
    }

  } catch (error) {
    next(error)
  }
})

router.get("/search", async(req, res, next) => {
  try {

      console.log('hereeee')
      const books = await Book.findAll({
        where : {title : {
          [Op.iLike]: '%'+ req.query.keyword +'%'
        }}
      })
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
