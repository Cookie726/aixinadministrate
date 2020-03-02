<template>
  <aside :class="{navCollapsed: isSidebarNavCollapse}" class="aside__top">
    <i class="toggleNavCollapse " :class="{'el-icon-s-fold': !isSidebarNavCollapse, 'el-icon-s-unfold': isSidebarNavCollapse}" @click="toggleNavCollapse"></i>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <template v-for="(route,i) in crumbList">
          <el-breadcrumb-item
            :key="route.name"
            :to="{name:route.name}"
            v-if="route.name!='layout' && route.meta.name!='layout'"
            :class="{'is-last-link':i==crumbList.length-1}"
          >{{route.meta.name}}</el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
    <div class="aside__top--right">
      <div class="user-msg">
        <span class="user-name">管理员</span>
        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "crumbList"])
  },
  methods: {
    toggleNavCollapse() {
      this.$store.commit('toggleNavCollapse')
    },
    loginOut() {
      // this.$store.commit('LOGIN_OUT')
      // /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      // window.location.reload()
    }
  }
};
</script>
<style lang="scss" scoped>
.aside__top {
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  line-height: 50px;
  position: fixed;
  left: 200px;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  transition: left 0.25s;
  .toggleNavCollapse {
    display: inline-block;
    margin-left: 8px;
    padding: 0 10px;
    font-size: 26px;
    vertical-align: middle;
    color: #333;
    cursor: pointer;
    transition: all 0.5s;
  }

  .aside__top--right {
    position: absolute;
    right: 10px;
    top: -1px;
    bottom: 0px;
    > div {
      position: relative;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      padding: 0 15px;
      cursor: pointer;
      &:hover::after {
        transform-origin: 0 0;
        transform: scaleX(1);
      }
      &:first-child:before {
        border: none;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ef4747;
        transform: scaleX(0);
        transform-origin: right 0;
        transition: transform 0.5s;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        top: 50%;
        left: -8px;
        margin-top: -10px;
        border-left: 1px solid #ccc;
      }
      &.user-msg {
        .user-name {
          color: #758eb5;
          padding: 0 4px;
        }
      }
    }
  }
}
.el-breadcrumb {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 5px;
    .el-breadcrumb__inner {
        &.is-link {
            display: inline-block;
            font-weight: normal;
            color: #424040 !important;
        }
    }
    .is-last-link .is-link {
        font-weight: normal;
        color: #999 !important;
    }
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
.navCollapsed.aside__top {
  left: 64px !important;
}
</style>
