export default [{
    path: "cargo",
    name: "cargo",
    component: resolve => require(["@/views/cargo"], resolve),
    redirect: "cargoView",
    meta: {
        name: "货物管理",
        requireAuth: true
    },
    children: [{
            path: "view",
            component: resolve => require(["@/views/cargo/view"], resolve),
            name: "cargoView",
            meta: {
                name: "查看商品",
                requireAuth: true
            }
        }, {
            path: "add",
            component: resolve => require(["@/views/cargo/add"], resolve),
            name: "cargoAdd",
            meta: {
                name: "添加商品",
                requireAuth: true
            }
        },
        {
            path: "campus",
            component: resolve => require(["@/views/cargo/campus"], resolve),
            name: "cargocampus",
            meta: {
                name: "校区库",
                requireAuth: true
            }
        }
    ]
}]