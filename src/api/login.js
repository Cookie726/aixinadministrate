import {
    post
} from "@/utils/request"
export function login(data) {
    console.log(data)
    // return Promise.resolve({
    //     name: "潘炳名",
    //     id: 1
    // })
    return post("/order/update", data)
}