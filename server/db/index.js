//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');
const Book = require('./models/Book');
const Cart = require('./models/Cart');

//associations could go here!

Book.belongsToMany(User, {through: "library"});
User.belongsToMany(Book, {through: "library"});
User.hasOne(Cart);
Cart.hasMany(Book);

module.exports = {
  db,
  models: {
    User,
    Book,
    Cart
  },
}
