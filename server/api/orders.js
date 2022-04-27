const router = require('express').Router();
module.exports = router;
const { models: { Order, Order_Products, Book, User }} = require('../db');

// GET /api/orders
// Get all orders along with the books inside each order
router.get("/", async(req, res, next) => {
  try {
    const ordersAndBooks = await Order.findAll({
      include: [Book,
        {
          model: User,
          attributes: ['username', 'email', 'address']
        }
    ]});
    res.json(ordersAndBooks);
  } catch (error) {
    next(error);
  }
});

// GET /api/orders/:userId/
// Get user's unfulfilled order and the books inside of it
router.get( "/:userId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      },
      include: Book
    });
    if(!userOrder){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }
    res.json(userOrder);
  } catch (error) {
    next(error);
  }
});


// // GET /api/orders/user=:userId/all
// // Get a user's completed orders
router.get( "/:userId/all", async(req, res, next) => {
  try {
    const userOrders = await Order.findAll({
      where: {userId: req.params.userId, isCompleted: true},
      include: [Book,
        {
          model: User,
          attributes: ['username', 'email', 'address']
        }
    ]})
    if(!userOrders){
      let error = Error("User orders not found");
      error.status = 404;
      throw(error);
    }
    res.json(userOrders);
  } catch (error) {
    next(error);
  }
});

// GET /api/orders/user=:userId/order=:orderId
// Get specific user's order and the books in it
router.get("/order=:orderId", async(req, res, next) => {
  try {
    console.log("none");
    const userOrder = await Order.findOne({
      where: {id: req.params.orderId},
      include: Book
    });
    if(!userOrder){
      let error = Error("User order not found");
      error.status = 404;
      throw(error);
    }
    res.json(userOrder);
  } catch (error) {
    next(error);
  }
});

// POST /api/orders
// Create a cart, i.e. an unfulfilled order
// When an item is first added to cart create an unfulfilled order
router.post("/:userId", async(req, res, next) => {
  try {
    const order = await Order.create(req.body);
    const user = await User.findByPk(req.params.userId);
    if(!user){
      let error = Error('User not found');
      error.status = 404;
      throw(error);
    }
    await order.setUser(user);
    res.send(order);
  } catch (error) {
    next(error);
  }
});

// Different actions:
// -Set order to completed
// -Add new book to order
// -Update quantity

// PUT /api/orders/:userId
// To complete user's unfulfilled order:
router.put("/:userId", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      },
      include: [Book,
        {
          model: User,
          attributes: ['username', 'email', 'address']
        }
    ]});
    if( !userOrder ){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }
    res.send( await userOrder.update(req.body) );
  } catch (error) {
    next(error);
  }
});

// POST /api/orders/user=:userId/book=:bookId/quantity=:quantity
// Add a new book to cart order
// Add a new book to an order
router.post("/user=:userId/book=:bookId/quantity=:quantity", async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    });

    if( !userOrder ){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }

    const newBook = await Book.findByPk( req.params.bookId );
    if(!newBook){
      let error = Error('Book not found');
      error.status = 404;
      throw(error);
    }

    await userOrder.addBook( newBook, { through:
      {
        order_quantity: req.params.quantity,
        subtotal_price: newBook.price*req.params.quantity
      }
    });

    const orderUpdate = await Order.findOne({
      where: { userId: req.params.userId },
      include:{
        model: Book,
        where: {id: req.params.bookId}
      }
    });
    res.send(orderUpdate.books[0]);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/user=:userId/book=:bookId/quantity=:quantity
// Update quantity of a book in cart order
// Update quantity of a book in an order
router.put( "/user=:userId/book=:bookId/quantity=:quantity", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    });
    if(!userOrder){
      let error = Error("User order not found");
      error.status = 404;
      throw(error);
    }

    const book = await Book.findByPk(req.params.bookId);
    if(!book){
      let error = Error("Book not found");
      error.status = 400;
      throw error;
    }

    const oldBook = (await Order.findOne({
      where: {id: userOrder.id},
      include:[{
        model: Book,
        where: {id: req.params.bookId}
      }]
    })).books[0];
    const old_quantity = oldBook.order_products.order_quantity;

    await userOrder.removeBook(book);
    const newBook = await userOrder.addBook(book, {through:
      {
        order_quantity: old_quantity+Number(req.params.quantity),
        subtotal_price: oldBook.price*(old_quantity+Number(req.params.quantity))
      }
    });

    const orderUpdate = await Order.findOne({
      where: { userId: req.params.userId },
      include:{
        model: Book,
        where: {id: req.params.bookId}
      }
    });
    res.json(orderUpdate.books[0]);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/orders/user=:userId/book=:bookId
// Remove book from cart order
// Remove book from order
router.delete("/user=:userId/book=:bookId", async(req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCompleted: false
      }
    });
    if(!userOrder){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }

    const book = await Book.findByPk( req.params.bookId );
    if(!book){
      let error = Error('Book not found');
      error.status = 404;
      throw(error);
    }

    await userOrder.removeBook(book);
    res.send(book);
  } catch (error) {
    next(error);
  }
});

//* Guest Cart Checkout Route */

router.post("/guestCheckout", async (req, res, next) => {

  // Create user based on email and address

  // attach cart to user

  // checkout cart

})




//***ADMIN ROUTES***
// POST /api/orders/order=:orderId/book=:bookId/quantity=:quantity
// Add a new book to an order
router.post("/order=:orderId/book=:bookId/quantity=:quantity", async (req, res, next) => {
  try {
    const userOrder = await Order.findByPk(req.params.orderId);

    if( !userOrder ){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }

    const newBook = await Book.findByPk( req.params.bookId );
    if(!newBook){
      let error = Error('Book not found');
      error.status = 404;
      throw(error);
    }

    await userOrder.addBook( newBook, { through:
      {
        order_quantity: req.params.quantity,
        subtotal_price: newBook.price*req.params.quantity
      }
    });

    const orderUpdate = await Order.findOne({
      where: { id: req.params.orderId },
      include:{
        model: Book,
        where: {id: req.params.bookId}
      }
    });
    res.json(orderUpdate);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/order=:orderId/book=:bookId/quantity=:quantity
// Update quantity of a book in an order
router.put( "/order=:orderId/book=:bookId/quantity=:quantity", async(req, res, next) => {
  try {
    const userOrder = await Order.findByPk(req.params.orderId);
    if(!userOrder){
      let error = Error("User order not found");
      error.status = 404;
      throw(error);
    }

    const book = await Book.findByPk(req.params.bookId);
    if(!book){
      let error = Error("Book not found");
      error.status = 400;
      throw error;
    }

    const oldBook = (await Order.findOne({
      where: {id: userOrder.id},
      include:[{
        model: Book,
        where: {id: req.params.bookId}
      }]
    })).books[0];
    const old_quantity = oldBook.order_products.order_quantity;

    await userOrder.removeBook(book);
    const newBook = await userOrder.addBook(book, {through:
      {
        order_quantity: old_quantity+req.params.quantity,
        subtotal_price: oldBook.price*(old_quantity+req.params.quantity)
      }
    });

    res.json(userOrder);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/orders/order=:orderId/book=:bookId
// Remove book from order
router.delete("/order=:orderId/book=:bookId", async(req, res, next) => {
  try {
    const userOrder = await Order.findByPk(req.params.orderId);
    if(!userOrder){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }

    const book = await Book.findByPk( req.params.bookId );
    if(!book){
      let error = Error('Book not found');
      error.status = 404;
      throw(error);
    }

    await userOrder.removeBook(book);

    const updateOrder = await Order.findOne({
      where: {id: req.params.orderId},
      include:[
        Book,
        {
          model: User,
          attributes: ['username', 'email', 'address']
        }
      ]
    })

    res.send(updateOrder);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/orders/:orderId
// Remove order
router.delete("/:orderId", async(req, res, next) => {
  try {
    const userOrder = await Order.findByPk(req.params.orderId);
    if(!userOrder){
      let error = Error('User order not found');
      error.status = 404;
      throw(error);
    }
    await userOrder.destroy();
    res.send(userOrder);
  } catch (error) {
    next(error);
  }
});
