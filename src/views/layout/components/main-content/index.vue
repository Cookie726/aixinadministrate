<template>
  <div class="main-container" :class="{navCollapsed:isSidebarNavCollapse}">
    <TopAside></TopAside>
    <Content class="content"></Content>
  </div>
</template>

<script>
import TopAside from "./top-aside";
import Content from "./content";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isSidebarNavCollapse"])
  },
  components: {
    TopAside,
    Content
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  min-width: 900px;
  min-height: 100%;
  margin-left: 200px;
  -webkit-transition: margin-left 0.25s;
  transition: margin-left 0.25s;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 60px 20px 0 20px;
}
.navCollapsed.main-container {
  margin-left: 64px;
}
</style>