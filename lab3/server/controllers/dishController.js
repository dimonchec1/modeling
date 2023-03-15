const uuid = require('uuid')
const path = require('path')
const {Dish, Cart, User} = require('./../models/models')
const ApiError = require('./../error/ApiError')

class DishController {
    async create(req, res, next) {
        try {
            const {name, price, typeId} = req.body
            
            console.log({name, price, typeId})
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const dish = await Dish.create({name, price, typeId, img: fileName})

            return res.json(dish)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
       
    }

    async getAll(req, res) {
        const {typeId, userId} = req.query
        let dishes;
        if (typeId) {
            dishes = await Dish.findAll({
                include: [{
                  model: Cart
                }],
                where:{typeId}
            })
        } else if (userId) {
            dishes = await Dish.findAll({
                include: [{
                  model: Cart,
                  required: false,
                  where:{userId}
                }]
            })
        }
        else {
            dishes = await Dish.findAll()
        }

        return res.json(dishes)
    }

    async getOne(req, res) {
        const {id} = req.params
        const dish = await Dish.findOne(
            {where: {id}}
        )
        return res.json(dish)
    }
}

module.exports = new DishController()