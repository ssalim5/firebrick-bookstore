const Sequelize = require('sequelize')
const db = require('../db')

const Order_Products = db.define('order_products', {
  quantity: DataTypes.INTEGER;
})

module.exports = Order;
