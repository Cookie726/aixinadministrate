/**
 * 验证条形码
 * @export
 * @param {*} value
 * @param {*} callback
 */
export function validateBarcode(value, callback) {
    if (!value) {
        callback(new Error('请填写条形码'))
    } else if (!Number.isInteger(value)) {
        callback(new Error('条形码要求是数字'))
    } else {
        callback()
    }
}

/**
 * 验证商品价格
 * @export
 * @param {*} value
 * @param {*} callback
 */
export function validatePrice(value, callback) {
    if (!value) {
        callback(new Error('请填写商品价格'))
    } else if (!Number.isInteger(value)) {
        callback(new Error('商品价格要求是数字'))
    } else {
        callback()
    }
}

/**
 * 验证商品规格
 * @export
 * @param {*} value
 * @param {*} callback
 */
export function validateSpecs(value, callback) {
    if (value && value != "") {
        callback()
    } else {
        callback(new Error('请填写商品规格'))
    }
}


/**
 * 判断值是否为空
 * @export
 * @param {*} value
 * @param {*} callback
 * @param {*} message
 */
export function isEmpty(value, callback, message) {
    if (value && value != "") {
        callback()
    } else {
        callback(new Error(message))
    }
}