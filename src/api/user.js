import {
    post
} from "@/utils/request"
export function login(data) {
    return post("/admin/login", data)
}

export function logout() {
    return post("/user/logout")
}