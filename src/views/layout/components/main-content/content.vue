<template>
  <div :class="{navCollapsed: isSidebarNavCollapse}" class="main-content">
    <el-tabs
      type="border-card"
      @tab-click="handleChange"
      closable
      @tab-remove="handleTabsRemove"
      :value="currentMenu"
    >
      <el-tab-pane
        :key="item.name"
        v-for="item in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "currentMenu", "editableTabs"])
  },
  methods: {
    handleTabsRemove(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.currentMenu;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.$store.commit("SET_CURRENT_MENU", activeName);
      this.$store.commit("REMOVE_TABS", targetName);
      this.$router.push({
        name: activeName
      })
    },
    handleChange(targetName) {
      this.$router.push({
        name: targetName.name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
