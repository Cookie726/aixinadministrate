import {
  get,
  post
} from "@/utils/request";

/**
 * 获取学生信息列表
 * @export
 * @param {*} options
 * @returns
 */
export function getStudentList(options) {
  return get("/user/getStudentList", options)
}

/**
 * 修改学生信息
 * @export
 * @param {*} data
 * @returns
 */
export function updateStudentInfo(data) {
  return post(data)
}

/**
 * 删除学生
 * @export
 * @param {*} data
 * @returns
 */
export function deleteStudent(data) {
  return post(data)
}