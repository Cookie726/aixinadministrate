import {
    get
} from "@/utils/request"
export function getStudentListQueryIndexTable() {
    return get("/user/getMapper")
}

export function getGoodsTypeQueryIndexTable() {
    return get("/goods/type")
}

export function getGoodsNameIndexTable() {
    return get("/goods/name")
}

export function addGoodType(data) {
    return get("/goods/addtype", data)
}