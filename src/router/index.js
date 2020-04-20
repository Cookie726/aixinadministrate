import Vue from "vue";
import VueRouter from "vue-router";
import RouterConfig from './modules'
Vue.use(VueRouter);
const routes = [{
    path: "/login",
    name: "login",
    component: resolve => require(["@/views/login"], resolve),
    meta: {
      name: "管理员登录",
      requireAuth: false
    }
  },
  {
    path: "",
    name: "layout",
    component: resolve => require(["@/views/layout"], resolve),
    meta: {
      name: 'layout',
      requireAuth: true
    },
    children: RouterConfig
  }
];

const router = new VueRouter({
  routes
});

export default router;