import {
    get,
    post
} from "@/utils/request";

export function getGoodsList(data) {
    console.log(data)
    return get("/goods/list", data)
}

export function updateGoods(data) {
    console.log(data)
    return post("/goods/update", data)
}

export function deleteRecord(id) {
    console.log('删除的提货记录ID：', id)
}

export function deleteDepository(id) {
    const param = {
        id
    }
    return post("/goods/delete", param)
}

export function addGoods(data) {
    console.log(data)
    return post("/goods/add", data)
}

export function getWareList(data) {
    console.log(data)
    return get("/ware/list", data)
}