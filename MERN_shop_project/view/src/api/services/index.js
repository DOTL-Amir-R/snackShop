import { mainInstance } from "./../constants"

export const handelLoginService = async (data) => {
        const res = await mainInstance.post("/login" , data)
        return res
}
export const handelSingInService = async (data) => {
    const res = await mainInstance.post("/signIn", data)
    return res
}

export const creatProductService = async (data) => {
    const res = await mainInstance({
        method: 'post',
        url: '/creatProduct',
        data: data,
        headers: {'Content-Type': 'multipart/form-data' }
        })
    return res
}