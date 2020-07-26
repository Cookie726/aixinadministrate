import {
    get,
    post
} from "@/utils/request"
/**
 * 获取订单记录
 * @export
 * @param {*} data
 * @returns
 */
export function getOrderList(data) {
    return get("/admin/order", data)
}

/**
 * 修改订单状态
 * @export
 * @param {*} data
 */
export function modifyState(data) {
    return post("/order/update", data)
}

/**
 * 删除订单
 * @export
 * @param {*} data
 * @returns
 */
export function deleleOrder(data) {
    return post("/order/delete", data)
}