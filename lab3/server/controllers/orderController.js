const { Order} = require('./../models/models')

class OrderController {
    async create(req, res) {
        const {userId} = req.body
        const status = 'open'
        const date = new Date(Date.now()).toISOString();
        const type = await Order.create({userId, date, status})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new OrderController()