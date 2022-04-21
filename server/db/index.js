//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');
const Book = require('./models/Book');
const Order = require('./models/Order')
const Order_Products = require('./models/OrderProducts')

//associations could go here!
User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Book, {through: Order_Products})
Book.belongsToMany(Order, {through: Order_Products})

module.exports = {
  db,
  models: {
    User,
    Book,
    Order,
    Order_Products
  },
}
