import {
    post,
    get
} from "@/utils/request"
export function login(data) {
    return post("/admin/login", data)
}

export function logout() {
    return get("/user/logout")
}