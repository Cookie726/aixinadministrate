import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./icons";
import * as filters from "./filters/filters"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.afterEach(to => {
  var routerList = to.matched;
  store.commit("setCrumbList", routerList);
  store.commit("SET_CURRENT_MENU", to.name);
  store.commit("setEditableTabs", to);
});
Vue.use(elementui);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");