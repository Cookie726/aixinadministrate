<template>
    <div :class="{navCollapsed:isSidebarNavCollapse}">
        <sidebarNav class="sidebar"/>
        <mainContent/>
    </div>
</template>

<script>
import sidebarNav from "./components/sidebarNav"
import mainContent from "./components/main-content/index"
import { mapState } from "vuex"
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
        sidebarNav,
        mainContent
    }
}
</script>

<style lang="scss" scoped>
/* 侧边栏 */
.sidebar {
    width: 200px !important;
    height: 100%;
    background: #304156;
    transition: all 0.25s;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    overflow-x: hidden;
}

/* 折叠菜单下的样式 */
.navCollapsed {
    .sidebar {
        width: 64px !important;
    }
}
</style>
