import Student from "../../views/student"
import StudentList from "../../views/student/list"
import StudentDeposit from "../../views/student/deposit"

export default [{
    path: "student",
    name: "student",
    meta: {
        name: "学生管理",
        requireAuth: true
    },
    redirect: "studentList",
    component: Student,
    children: [{
            path: "list",
            name: "studentList",
            component: StudentList,
            meta: {
                name: "学生信息管理",
                requireAuth: true
            }
        },
        {
            path: "deposit",
            name: "studentDeposit",
            component: StudentDeposit,
            meta: {
                name: "充值管理",
                requireAuth: true
            }
        }
    ]
}]