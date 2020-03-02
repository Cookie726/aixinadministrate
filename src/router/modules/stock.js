import Stock from "../../views/stock"
import StockReplenish from "../../views/stock/replenish"
import StockRecord from "../../views/stock/record"

export default [{
    path: "stock",
    name: "stock",
    component: Stock,
    redirect: "stockRecord",
    meta: {
        name: "进货管理"
    },
    children: [{
            path: "record",
            name: "stockRecord",
            component: StockRecord,
            meta: {
                name: "进货记录"
            }
        },
        {
            path: "replenish",
            component: StockReplenish,
            name: "stockReplenish",
            meta: {
                name: "进货"
            }
        }
    ]
}]