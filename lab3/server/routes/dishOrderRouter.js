const Router = require('express')
const router = new Router()
const dishOrderController = require('./../controllers/dishOrderController')


router.post('/', dishOrderController.create)
router.get('/', dishOrderController.getAll)

module.exports = router