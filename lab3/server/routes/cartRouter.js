const Router = require('express')
const router = new Router()
const cartController = require('./../controllers/cartController')


router.post('/', cartController.create)
router.put('/', cartController.update)
router.delete('/', cartController.delete)
router.get('/', cartController.getAll)

module.exports = router