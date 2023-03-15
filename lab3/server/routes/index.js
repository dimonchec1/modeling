const Router = require('express')
const router = new Router()
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter')
const dishOrderRouter = require('./dishOrderRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/dish', dishRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)
router.use('/orderdish', dishOrderRouter)

module.exports = router