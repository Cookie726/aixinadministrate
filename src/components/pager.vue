<template>
  <div class="pager">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        pageSize: 10,
        currentPage: 1,
      },
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.$emit("pageChange", {
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage,
      });
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.$emit("pageChange", {
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pager {
  text-align: center;
}
</style>
