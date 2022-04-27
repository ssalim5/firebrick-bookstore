'use strict'

const {db, models: {User, Book, Order, Order_Products} } = require('../server/db');
const booksToSeed = require('../server/db/models/seedBooks.js')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody@pug.com',
     address:  '220 Welton Way, Pofton, NY'}),
    User.create({ username: 'murphy', password: '123', email: 'murphy@beds.com',
    address:  '10 Burden Blvd, Crimes Hollow, NY'}),
    User.create({ username: 'phony', password: '123', email: 'phony@wrong.com',
    address:  '101 Goose Street, Tammany, NY'}),
    User.create({ username: 'yeoman', password: '123', email: 'yeoman@oops.com',
    address:  '111 Coriander Ct, Scoopton, NY'}),
    User.create({ username: 'clam', password: '123', email: 'under@thesea.com',
    address:  '92 Offal Ave, Gutrend, NY',admin : true}),
  ])

  console.log(users.length, "users seeded.")

  // Creating books
  let booksSeeded = []
  for (let i = 0; i < booksToSeed.books.length; i++){
    booksToSeed.books[i].price.toFixed(2)
    const seededbook = await Book.create(booksToSeed.books[i]);
    booksSeeded.push(seededbook);
  }

  console.log(booksSeeded.length, 'books seeded.')

  // Creating Orders...
  let orders = []
  for(let i = 0; i < users.length; i++){
    const order = await Order.create()
    const completedOrder = await Order.create( {isCompleted: true} )
    const completedOrder2 = await Order.create( {isCompleted: true} )
    orders.push(order)
    orders.push(completedOrder)
    orders.push(completedOrder2)
    await order.setUser( await User.findByPk(i+1) )
    await completedOrder.setUser( await User.findByPk(i+1) )
    await completedOrder2.setUser( await User.findByPk(i+1) )
  }

  console.log(orders.length, 'orders seeded.')

  //Filling Orders
  let orderMin = 2;
  let orderMax = 12;
  let booksSeededLength = booksSeeded.length;

  for (let i = 0; i < orders.length; i++){
    let orderSize = Math.floor(Math.random() * (orderMax-orderMin) + orderMin)

    let j = 0;
    const order = orders[i]
    while (j < orderSize) {
      j++;
      const randomBook = booksSeeded[ Math.floor(Math.random() * booksSeededLength) ]
      const randQuantity = Math.floor( Math.random()*(randomBook.stock-1) + 1 )
      await order.addBook(randomBook, { through:
        {
          order_quantity: randQuantity,
          subtotal_price: Math.round( randomBook.price*randQuantity *100)/100
        }
      })
    }
  }
  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
