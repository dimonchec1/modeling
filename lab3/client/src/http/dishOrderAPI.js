import { $authHost, $host } from "./index";

export const createDishOrder = async (params) => {
    const {data} = await $authHost.post('api/cart', params)
    return data
}

export const createDishOrderH = async (params) => {
    const {data} = await $authHost.post('api/orderdish', params)
    return data
}


export const updateDishOrder = async (params) => {
    const {data} = await $authHost.put('api/cart', params)
    return data
}

export const deleteDishOrder = async (userId, dishId) => {
    const {data} = await $authHost.delete('api/cart', {params: userId, dishId,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    return data
}

export const fetchOrderDishes = async (userId) => {
    const {data} = await $authHost.get('api/cart', {params: {userId}})
    return data
}

export const fetchOrderDishesH = async (userId) => {
    const {data} = await $authHost.get('api/orderdish', {params: {userId}})
    return data
}

export const fetchOrder = async (orderId) => {
    const {data} = await $authHost.get('api/orderdish', {params: {orderId}})
    return data
}