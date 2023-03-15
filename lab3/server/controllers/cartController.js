const {Cart, Dish} = require('./../models/models')
const ApiError = require('./../error/ApiError')

class CartController {
    async create(req, res) {
        const {quantity, userId, dishId} = req.body
        const cart = await Cart.create({quantity, userId, dishId})
        return res.json(cart)
    }

    async update(req, res) {
        const {quantity, userId, dishId} = req.body
        console.log(quantity, userId, dishId)
        const cart = await Cart.update({quantity}, {where: {userId, dishId}})
        return res.json(cart)
    }

    async delete(req, res) {
        const {userId, dishId} = req.query
        let cart
        if (userId) {
            cart = await Cart.destroy({where: {userId, dishId}})
        }   else {
            cart = await Cart.destroy({truncate: true})
        }
       
        return res.json(cart)
    }

    async getAll(req, res) {
        const { userId} = req.query
        let dishes;
        dishes = await Dish.findAll({
            include: [{
                model: Cart,
                where:{userId}
            }],
            })
        
        return res.json(dishes)
    }


}

module.exports = new CartController()