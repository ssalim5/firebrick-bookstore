const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cover: {
    type: Sequelize.STRING,
    unique: true,
    validate: { isUrl: true }
  },
  price: {
    type: Sequelize.FLOAT
  },
  quantity: {
   type: Sequelize.INTEGER,
  }
})

module.exports = Book;
