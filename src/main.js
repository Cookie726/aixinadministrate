import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Upload,
  Collapse,
  CollapseItem,
  MessageBox,
  Message,
  Image
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./icons";
import * as filters from "./filters/filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
// Vue.use(elementui)
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
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Upload);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Image);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");