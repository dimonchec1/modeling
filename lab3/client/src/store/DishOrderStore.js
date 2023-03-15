import {makeAutoObservable} from 'mobx'

export default class DishOrderStore {
    constructor() {
        this._orders = []
        this._order = []
        makeAutoObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    setOrder(order) {
        this._order = order
    }

    get orders() {
        return this._orders
    }

    get order() {
        return this._order
    }
}