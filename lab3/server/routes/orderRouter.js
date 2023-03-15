const Router = require('express')
const router = new Router()
const OrderController = require('./../controllers/orderController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/', OrderController.create)
router.get('/', OrderController.getAll)

module.exports = router