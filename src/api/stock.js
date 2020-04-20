import {
    post,
    get
} from "../utils/request"

/**
 * 获取进货列表
 * @export
 * @param {*} data
 * @returns
 */
export function getStockRecord(data) {
    return get("/record/retrieval", data)
}

/**
 * 删除进货记录
 * @export
 * @param {*} data
 * @returns
 */
export function deleteRecord(data) {
    return post("/record/retrievalDelete", data)
}

export function checkin(data) {
    return post("/ware/checkin", data)
}