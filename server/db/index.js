//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Book = require('./models/Book')
const Cart = require('./model/Cart')

//associations could go here!

Cart.hasMany(Book);
Book.hasMany(Cart)



module.exports = {
  db,
  models: {
    User,
    Book,
    Cart
  },
}
