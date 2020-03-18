import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "../views/layout";
import RouterConfig from './modules'
console.log("RouterConfig", RouterConfig)
Vue.use(VueRouter);
const routes = [{
    path: "/login",
    name: "登录",
    component: Login,
    meta: {
      title: "登录",
      requireAuth: false
    }
  },
  {
    path: "",
    name: "layout",
    component: Layout,
    meta: {
      title: 'layout',
      requireAuth: true
    },
    children: RouterConfig
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;