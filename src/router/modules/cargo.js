import Cargo from "../../views/cargo";
import CargoAdd from "../../views/cargo/add";
import Cargocampus from "../../views/cargo/campus";
import CargoView from "../../views/cargo/view";

export default [{
    path: "cargo",
    name: "cargo",
    component: Cargo,
    redirect: "cargoView",
    meta: {
        name: "货物管理"
    },
    children: [{
            path: "view",
            component: CargoView,
            name: "cargoView",
            meta: {
                name: "查看商品"
            }
        }, {
            path: "add",
            component: CargoAdd,
            name: "cargoAdd",
            meta: {
                name: "添加商品"
            }
        },
        {
            path: "campus",
            component: Cargocampus,
            name: "cargocampus",
            meta: {
                name: "校区库"
            }
        }
    ]
}]