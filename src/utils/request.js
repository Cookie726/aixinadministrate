import axios from "axios"
import {
    Message,
    MessageBox
} from "element-ui"

const service = axios.create({
    baseURL: "",
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        const res = response.data
        const code = res.code
        if (code === 0) {
            return res
        } else if (code > 0 && code < 2000) {
            if (code === 1004) {
                Message({
                    message: "空数据",
                    type: "info"
                })
            } else if (code === 1003) {
                Message({
                        message: "新密码和原密码相同",
                        type: "error"
                })
            } else {
                return res
            }
        } else if(code>=2000) {
            if(code===2000) {
                Message({
                    message: "用户名或密码错误",
                    type: "error"
                })
            } else if(code === 2001) {
                Message({
                    message: "参数为空",
                    type: "warning"
                })
            }
        }
    }
)