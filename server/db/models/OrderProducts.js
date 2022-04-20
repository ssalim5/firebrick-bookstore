const Sequelize = require('sequelize')
const db = require('../db')

const Order_Products = db.define('order_products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,

  },
  subtotal_price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Order_Products;
