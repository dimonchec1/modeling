const { OrderDish, Order, Dish } = require('./../models/models')

class DishOrderController {
    async create(req, res) {
        const {orderId, dishId, quantity, price} = req.body
        const type = await OrderDish.create({orderId, dishId, quantity, price})
        return res.json(type)
    }

    async getAll(req, res) {
        const { userId, orderId} = req.query
        let data;
        if (userId) {
            data = await Order.findAll({where:{userId}})
        } else {
            data = await OrderDish.findAll({
                include: [{
                  model: Order
                }],
                include: [{
                    model: Dish
                  }],
                where: {orderId}
            })
        }
        
        return res.json(data)
    }

}

module.exports = new DishOrderController()