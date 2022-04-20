const Sequelize = require('sequelize')
const db = require('../db')
const Book = require('./models/Book');

const Order_Products = db.define('order_products', {
  quantity: {
    type: Sequelize.INTEGER
  },
  subtotal_price: {
    type: Sequelize.FLOAT
  }
})

Order_Products.afterCreate( async(Order_Products, options) => {
  const book = await Book.findByPk( Order_Products.bookId )
  const subtotal_price = Order_Products.quantity * book.price
  Order_Products.total_price = subtotal_price
})

module.exports = Order_Products;
