import axios from "axios"

const BASE_URL = "http://www.liskarm.xyz/AixinMarket"

const http = axios.create({
    timeout: 1000 * 5,
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})

http.interceptors.response.use(function (response) {
    console.log(response)
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * 封装get方法
 * @export
 * @param {String} url
 * @param {Object} [params={}]
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post方法
 * @export
 * @param {String} url
 * @param {Object} [data={}]
 * @returns
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        http.post(url, JSON.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}