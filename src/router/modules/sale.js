export default [{
    path: "sale",
    name: "sale",
    meta: {
        name: "销售记录",
        requireAuth: true
    },
    component: resolve => require(["@/views/sale"], resolve)
}]