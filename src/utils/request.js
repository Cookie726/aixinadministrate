import axios from "axios"
import router from "@/router/index"
const BASE_URL = "http://www.liskarm.xyz/AixinMarket"
// import {
//     Message
// } from "element-ui"
const http = axios.create({
    timeout: 1000 * 5,
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})

http.interceptors.response.use(function (response) {
    const code = response.data.code
    if (code >= 2000) {
        switch (code) {
            case 2000:
                window.ELEMENT.Message({
                    message: "账号或密码错误",
                    type: "error"
                })
                break;
            case 2003:
                window.ELEMENT.Message({
                    message: "账号或密码错误",
                    type: "error"
                })
                break;
            case 2005:
                window.ELEMENT.Message.error(response.data.msg)
                break;
            default:
                break;
        }
        return
    } else {
        switch (code) {
            case 0:
                break;
            case 1002:
                router.replace({
                    name: "login"
                })
                break
            default:
                break;
        }
        return response.data
    }
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
        http.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}