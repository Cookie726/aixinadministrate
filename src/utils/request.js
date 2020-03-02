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
        if (res.code != 0) {
            if (res.code === 1004) {
                Message({
                    message: "无数据"
                })
            }
        } else {
            return res
        }
    }
)