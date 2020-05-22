import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import * as filters from "./filters/filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
router.beforeEach((to, _, next) => {
  if (to.matched.length != 0) {
    if (to.meta.requireAuth) {
      if (store.state.user.userInfo.name && store.state.user.userInfo.name != "") {
        if (to.path === "/") {
          next({
            name: "studentList"
          });
        } else {
          next();
        }
      } else {
        next({
          name: "login"
        });
      }
    } else {
      next();
    }
  } else {
    next({
      name: "login"
    });
  }
})

router.afterEach(to => {
  var routerList = to.matched;
  document.title = to.meta.name;
  store.commit("setCrumbList", routerList);
  store.commit("SET_CURRENT_MENU", to.name);
  store.commit("setEditableTabs", to);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");