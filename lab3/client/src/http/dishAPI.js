import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}


export const createDish = async (dish) => {
    const {data} = await $authHost.post('api/dish', dish, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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