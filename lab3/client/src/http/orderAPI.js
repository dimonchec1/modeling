import { $authHost, $host } from "./index";

export const createOrder = async (uderId) => {
    const {data} = await $authHost.post('api/order', uderId)
    return data
}

export const fetchDishes = async (userId, typeId) => {
    const {data} = await $host.get('api/dish', {params: {userId, typeId}})
    return data
}



export const fetchOneDish = async (id) => {
    const {data} = await $host.get('api/dish/' + id)
    return data
}