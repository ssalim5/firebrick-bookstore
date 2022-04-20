const router = require("express").Router()
module.exports = router

router.use("/users", require("./users"))

router.use("/books", require("./books"))

<<<<<<< Updated upstream
router.use("/carts", require("./carts"))

=======
router.use("/orders", require("./orders"))
>>>>>>> Stashed changes

router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})
