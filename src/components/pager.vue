<template>
  <div class="pager">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
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
        pageSize: 100,
        currentPage: 1
      }
    }
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 100
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page.pageSize = val
      this.$emit('pageChange', {
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage
      })
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
      console.log(`当前页: ${val}`);
      this.$emit('pageChange', {
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.pager {
  text-align: center;
}
</style>