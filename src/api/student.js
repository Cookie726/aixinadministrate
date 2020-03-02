/**
 * 获取学生信息列表
 * @export
 * @param {*} options
 * @returns
 */
export function getStudentList(options) {
    console.log(options)
    const demoData = [
        {
          id: 1,
          stuNum: "2018010280",
          name: "潘炳名",
          departmentName: "信息科学与技术学院",
          specialName: "软件工程",
          grade: "2018",
          imburseTypeName: "一般资助对象",
          contact: "16688318501",
          address: "夏华A602",
          balanceRiyong: 20,
          balanceFuzhuang: 100
        },{
            id: 1,
            stuNum: "2018010280",
            name: "潘炳名",
            departmentName: "信息科学与技术学院",
            specialName: "软件工程",
            grade: "2018",
            imburseTypeName: "一般资助对象",
            contact: "16688318501",
            address: "夏华A602",
            balanceRiyong: 20,
            balanceFuzhuang: 100
          },{
            id: 1,
            stuNum: "2018010280",
            name: "潘炳名",
            departmentName: "信息科学与技术学院",
            specialName: "软件工程",
            grade: "2018",
            imburseTypeName: "一般资助对象",
            contact: "16688318501",
            address: "夏华A602",
            balanceRiyong: 20,
            balanceFuzhuang: 100
          },{
            id: 1,
            stuNum: "2018010280",
            name: "潘炳名",
            departmentName: "信息科学与技术学院",
            specialName: "软件工程",
            grade: "2018",
            imburseTypeName: "一般资助对象",
            contact: "16688318501",
            address: "夏华A602",
            balanceRiyong: 20,
            balanceFuzhuang: 100
          },{
            id: 1,
            stuNum: "2018010280",
            name: "潘炳名",
            departmentName: "信息科学与技术学院",
            specialName: "软件工程",
            grade: "2018",
            imburseTypeName: "一般资助对象",
            contact: "16688318501",
            address: "夏华A602",
            balanceRiyong: 20,
            balanceFuzhuang: 100
          }
      ]
    return new Promise(resolve => {
        resolve({
            code: 0,
            msg: "",
            data: {
                total: 4,
                studentList: demoData
            }
        })
    })
}

/**
 * 修改学生信息
 * @export
 * @param {*} data
 * @returns
 */
export function updateStudentInfo(data) {
  console.log(data)
}

/**
 * 删除学生
 * @export
 * @param {*} data
 * @returns
 */
export function deleteStudent(data) {
  console.log(data)
}