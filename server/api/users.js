const router = require('express').Router()
const { models: { User }} = require('../db')
const Order = require('../db/models/Order')
module.exports = router

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username','address','email','admin']
    })
    if(!users){
      let error = Error("Users not found")
      error.status = 404
      throw(error)
    }

    res.json(users)
  } catch (error) {
    next(error)
  }
})

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      where: { id: req.params.userId },
      attributes: ['id', 'username']
    })
    if(!user){
      let error = Error("Users not found")
      error.status = 404
      throw(error)
    }

    res.json(user)
  } catch (error) {
    next(error)
  }
})



// POST /api/users
router.post("/", async(req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/users/:userId
router.delete("/:userId", async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()
    res.send(user)
  } catch (error) {
    next(error)
  }
})

router.put('/userprofile/:userId',async(req,res,next) => {
  try{
    const user = await User.findByPk(req.params.userId);
    console.log(req.body)
    res.send(await user.update(req.body));
  }catch(err){
    next(err)
  }
})


router.put('/:userId',async(req,res,next) => {
  try{
    const user = await User.findByPk(req.params.userId);
    console.log(req.body)
    res.send(await user.update(req.body));
  }catch(err){
    next(err)
  }
})
