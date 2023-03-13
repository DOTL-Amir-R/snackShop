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

export const handelShowProductService = async () => {
    const res = await mainInstance.get("/showProduct")
    return res
}

export const readSingleProductService = async (productName) => {
    const res = await mainInstance.get(`/showProduct?productName=${productName}`)
    return res
}
export const handleSortProduct = async (data)=>{
    const res = await mainInstance.post('/sortByProduct',data)
    return res
}
