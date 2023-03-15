const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
})

const OrderDish = sequelize.define('order_dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})


const Cart = sequelize.define('cart', {
    quantity: {type: DataTypes.INTEGER}
})


//User.belongsToMany(Dish, { through: Cart });
//Dish.belongsToMany(User, { through: Cart });

User.hasMany(Rating)
Rating.belongsTo(User)

Dish.hasMany(Rating)
Rating.belongsTo(Dish)

User.hasOne(Cart, {primaryKey: true})
Cart.belongsTo(User, {primaryKey: true})

Dish.hasMany(Cart)
Cart.belongsTo(Dish)

User.hasMany(Order)
Order.belongsTo(User)

Dish.hasMany(OrderDish)
OrderDish.belongsTo(Dish)

Type.hasMany(Dish)
Dish.belongsTo(Type)

Order.hasOne(OrderDish)
OrderDish.belongsTo(Order)

module.exports = {
    User,
    Order,
    OrderDish,
    Dish,
    Type,
    Cart
}