import {
    get,
    post
} from "@/utils/request";

export function getGoodsList(data) {
    return get("/goods/list", data)
}

export function updateGoods(data) {
    return post("/goods/update", data)
}

export function updateWareHouse(data) {
    return post("/ware/update", data)
}

export function deleteWareHouse(data) {
    return post("/ware/delete", data)
}

export function deleteDepository(data) {
    return post("/goods/delete", data)
}

export function addGoods(data) {
    return post("/goods/add", data)
}

export function getWareList(data) {
    return get("/ware/list", data)
}