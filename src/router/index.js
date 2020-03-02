import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "../views/layout";
// 学生管理
// import Student from "../views/student";
// import StudentList from "../views/student/list";
// import StudentDaily from "../views/student/daily";
// import StudentCostume from "../views/student/costume";
// // 捐赠管理
// import Donate from "../views/donate";
// import DonateGoods from "../views/donate/goods";
// import DonateRecord from "../views/donate/record";
// // 货物管理
// import Cargo from "../views/cargo";
// import CargoView from "../views/cargo/view";
// import CargoAdd from "../views/cargo/add";
// import CargoDepository from "../views/cargo/depository";
// import CargoDelivery from "../views/cargo/delivery";
// import CargoDeliveryRecord from "../views/cargo/deliveryRecord";
// import Cargocampus from "../views/cargo/campus"
// // 销售管理
// import Sale from "../views/sale";
// import SaleShelve from "../views/sale/shelve";
// import SaleRecord from "../views/sale/saleRecored";
// // 数据导出
// import Export from "../views/export";

import RouterConfig from './modules'
console.log("RouterConfig", RouterConfig)
Vue.use(VueRouter);
const routes = [{
    path: "/login",
    name: "登录",
    component: Login
  },
  {
    path: "",
    name: "layout",
    component: Layout,
    meta: {
      name: 'layout'
    },
    children: RouterConfig
  }
];


// const routes = [{
//     path: "/login",
//     name: "登录",
//     component: Login
//   },
//   {
//     path: "",
//     name: "layout",
//     component: Layout,
//     meta: {
//       name: 'layout'
//     },
//     children: [{
//         path: "student",
//         component: Student,
//         name: "student",
//         meta: {
//           name: "学生管理"
//         },
//         redirect: {
//           name: "list"
//         },
//         children: [{
//             path: "list",
//             name: "list",
//             component: StudentList,
//             meta: {
//               name: "学生信息管理"
//             }
//           },
//           {
//             path: "daily",
//             name: "daily",
//             component: StudentDaily,
//             meta: {
//               name: "日用币充值"
//             }
//           },
//           {
//             path: "costume",
//             name: "costume",
//             component: StudentCostume,
//             meta: {
//               name: "服装币充值"
//             }
//           }
//         ]
//       },
//       {
//         path: "donate",
//         name: "donate",
//         component: Donate,
//         redirect: {
//           name: "goods"
//         },
//         meta: {
//           name: "捐赠管理"
//         },
//         children: [{
//             path: "goods",
//             name: "goods",
//             component: DonateGoods,
//             meta: {
//               name: "捐赠物品"
//             }
//           },
//           {
//             path: "record",
//             name: "record",
//             compoent: DonateRecord,
//             meta: {
//               name: "捐赠记录"
//             }
//           }
//         ]
//       },
//       {
//         path: "cargo",
//         name: "cargo",
//         component: Cargo,
//         redirect: {
//           name: "view"
//         },
//         meta: {
//           name: "货物管理"
//         },
//         children: [{
//             path: "view",
//             name: "view",
//             component: CargoView,
//             meta: {
//               name: "查看商品"
//             }
//           },
//           {
//             path: "add",
//             name: "add",
//             component: CargoAdd,
//             meta: {
//               name: "添加商品"
//             }
//           },
//           {
//             path: "depository",
//             name: "depository",
//             component: CargoDepository,
//             meta: {
//               name: "商品总库"
//             }
//           },
//           {
//             path: "campus",
//             name: "campus",
//             component: Cargocampus,
//             meta: {
//               name: "校区库"
//             }
//           },
//           {
//             path: "delivery",
//             name: "delivery",
//             component: CargoDelivery,
//             meta: {
//               name: "提货"
//             }
//           },
//           {
//             path: "deliveryRecord",
//             name: "deliveryRecord",
//             component: CargoDeliveryRecord,
//             meta: {
//               name: "提货记录"
//             }
//           }
//         ]
//       },
//       {
//         path: "sale",
//         name: "sale",
//         component: Sale,
//         meta: {
//           name: "销售管理"
//         },
//         children: [{
//           path: "shelve",
//           name: "saleShelve",
//           component: SaleShelve,
//           meta: {
//             name: "上架"
//           }
//         }, {
//           path: "saleRecord",
//           name: "saleRecord",
//           component: SaleRecord,
//           meta: {
//             name: "销售记录"
//           }
//         }]
//       },
//       {
//         path: "export",
//         name: "export",
//         component: Export,
//         meta: {
//           name: "数据导出"
//         }
//       }
//     ]
//   }
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;