/**
 * 获取校区
 * @export
 * @param {*} campus
 * @returns
 */
export function getCampus(campus) {
    if (campus) {
        return "本部校区"
    } else {
        return "净月校区"
    }
}

/**
 * 获取订单状态信息
 * @export
 * @param {*} state
 * @returns
 */
export function getSaleStatus(state) {
    if (state === 1) {
        return "待确认"
    } else if (state === 2) {
        return "待取货"
    } else if (state === 3) {
        return "交易成功"
    } else {
        return "交易失败"
    }
}

/**
 * 获取货币类型
 * @export
 * @param {*} moneyType
 * @returns
 */
export function getMoneyType(moneyType) {
    if (moneyType === true) {
        return "日用币"
    } else {
        return "服装币"
    }
}