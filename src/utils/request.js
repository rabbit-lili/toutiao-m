// 请求模块
// 2022年7月28日

import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000',//接口的基准路径
    timeout: 5000,
})
// 请求拦截器

// 响应拦截器


export default request