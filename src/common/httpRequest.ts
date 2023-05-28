import axios from "axios";

const instance = axios.create()
instance.defaults.baseURL = 'http://localhost:1337/api'

//请求拦截器
instance.interceptors.request.use()

//响应拦截器
instance.interceptors.response.use()

//get
export const getHttp = (params:object) => {
    const param = params
}
//post

export const postHttp = () => {
    
}