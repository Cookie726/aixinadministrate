import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Layout from "../views/layout";
import RouterConfig from './modules'
Vue.use(VueRouter);
const routes = [{
    path: "/login",
    name: "login",
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
  base: process.env.BASE_URL,
  routes
});

export default router;