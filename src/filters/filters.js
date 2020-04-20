/**
 * 获取校区
 * @export
 * @param {*} campus
 * @returns
 */
export function getCampus(campus) {
    if (campus === 1) {
        return "本部校区"
    } else if (campus === 2) {
        return "净月校区"
    }
}

/**
 * 获取订单状态信息
 * @export
 * @param {*} status
 * @returns
 */
export function getSaleStatus(status) {
    if (status === 1) {
        return "待确认"
    } else if (status === 2) {
        return "待取货"
    } else if (status === 3) {
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
        return "服装币"
    } else {
        return "日用币"
    }
}