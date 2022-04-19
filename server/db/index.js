//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Book = require('./models/Book')

//associations could go here!

Book.belongsToMany(User, {through: "cart"});
User.belongsToMany(Book, {through: "cart"});

module.exports = {
  db,
  models: {
    User,
    Book
  },
}
