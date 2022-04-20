const router = require('express').Router()
const { models: { User }} = require('../db')
const { models: { Book }} = require('../db')
module.exports = router

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})


// GET /api/users/:id/books
router.get("/:id/books", async (req, res, next) => {
  try {
    const books = await User.findAll( {include: Book} )
    res.json(books)
  } catch (error) {
    next(error)
  }
})
