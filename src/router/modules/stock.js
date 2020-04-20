export default [{
    path: "stock",
    name: "stock",
    component: resolve => require(["@/views/stock"], resolve),
    redirect: "stockRecord",
    meta: {
        name: "进货管理",
        requireAuth: true
    },
    children: [{
            path: "record",
            name: "stockRecord",
            component: resolve => require(["@/views/stock/record"], resolve),
            meta: {
                name: "进货记录",
                requireAuth: true
            }
        },
        {
            path: "replenish",
            component: resolve => require(["@/views/stock/replenish"], resolve),
            name: "stockReplenish",
            meta: {
                name: "进货",
                requireAuth: true
            }
        }
    ]
}]