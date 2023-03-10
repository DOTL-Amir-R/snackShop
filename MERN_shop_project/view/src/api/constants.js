import axios from "axios"
const baseURL = 'http://localhost:3000/api'
export const uploadsURL = 'http://localhost:3000/static/uploads/'

export const mainInstance = axios.create({
    baseURL,
})