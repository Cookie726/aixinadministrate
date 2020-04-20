export default [{
    path: "student",
    name: "student",
    meta: {
        name: "学生管理",
        requireAuth: true
    },
    redirect: "studentList",
    component: resolve => require(["@/views/student"], resolve),
    children: [{
            path: "list",
            name: "studentList",
            component: resolve => require(["@/views/student/list"], resolve),
            meta: {
                name: "学生信息管理",
                requireAuth: true
            }
        },
        {
            path: "deposit",
            name: "studentDeposit",
            component: resolve => require(["@/views/student/deposit"], resolve),
            meta: {
                name: "充值管理",
                requireAuth: true
            }
        }
    ]
}]