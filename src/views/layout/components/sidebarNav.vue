<template>
  <el-menu
    :class="{ navCollapsed: isSidebarNavCollapse }"
    :collapse="isSidebarNavCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
  >
    <el-submenu index="学生管理">
      <template slot="title">
        <div class="svg-container">
          <svg-icon icon-class="student"></svg-icon>
        </div>
        <span>学生管理</span>
      </template>
      <el-menu-item @click="gotoRoute('studentList')" index="studentList">
        <div class="svg-container">
          <svg-icon icon-class="student-list"></svg-icon>
        </div>
        <span>学生信息管理</span>
      </el-menu-item>
      <el-menu-item @click="gotoRoute('studentDeposit')" index="studentDeposit">
        <div class="svg-container">
          <svg-icon icon-class="deposit"></svg-icon>
        </div>
        <span>充值管理</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="进货管理">
      <template slot="title">
        <div class="svg-container">
          <svg-icon icon-class="donate"></svg-icon>
        </div>
        <span>进货管理</span>
      </template>
      <el-menu-item @click="gotoRoute('stockReplenish')" index="stockReplenish">
        <div class="svg-container">
          <svg-icon icon-class="stock"></svg-icon>
        </div>
        <span>进货</span>
      </el-menu-item>
      <el-menu-item @click="gotoRoute('stockRecord')" index="stockRecord">
        <div class="svg-container">
          <svg-icon icon-class="donate-record"></svg-icon>
        </div>
        <span>进货记录</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="货物管理">
      <template slot="title">
        <div class="svg-container">
          <svg-icon icon-class="cargo"></svg-icon>
        </div>
        <span>货物管理</span>
      </template>
      <el-menu-item @click="gotoRoute('cargoView')" index="cargoView">
        <div class="svg-container">
          <svg-icon icon-class="view-goods"></svg-icon>
        </div>
        <span>查看商品</span>
      </el-menu-item>
      <el-menu-item @click="gotoRoute('cargoAdd')" index="cargoAdd">
        <div class="svg-container">
          <svg-icon icon-class="add-goods"></svg-icon>
        </div>
        <span>商品添加</span>
      </el-menu-item>
      <el-menu-item @click="gotoRoute('cargocampus')" index="cargocampus">
        <div class="svg-container">
          <svg-icon icon-class="depository"></svg-icon>
        </div>
        <span>校区库</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item @click="gotoRoute('sale')" index="sale">
      <div class="svg-container">
        <svg-icon icon-class="sale"></svg-icon>
      </div>
      <span>销售记录</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import "@/icons/svg/donate.svg";
import { mapState } from "vuex";
import { Menu, Submenu, MenuItem } from "element-ui";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "currentMenu"]),
  },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name });
    },
  },
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem
  },
};
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 8px;
  color: #fff;
  font-size: 18px;
}
div.menu-container > li.el-menu-item,
div.menu-container > li.el-submenu > .el-submenu__title {
  border-bottom: 1px solid rgba(238, 238, 238, 0.1);
}
.el-menu-item {
  background: #304156 !important;
}
/* 菜单hover时的背景 */
.el-submenu__title:hover,
.el-menu-item:hover {
  background: #223041 !important;
}
/* 菜单active时的背景 */
.el-menu-item.is-active {
  background: #293748 !important;
}
ul.navCollapsed {
  ul {
    display: none;
  }
  .iconfont + span {
    display: none;
  }
  .el-submenu__icon-arrow {
    display: none;
  }
}
.svg-container {
  padding: 6px 10px 6px 5px;
  vertical-align: middle;
  display: inline-block;
}
</style>
