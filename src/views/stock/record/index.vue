<template>
  <div>
    <div class="student-list">
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-record-query @query="query"></ax-record-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          prop="goods.goodsName"
          label="商品名称"
          align="center"
          min-width="110"
        ></el-table-column>
        <el-table-column
          prop="num"
          label="进货数量"
          align="center"
          width="180"
        ></el-table-column>
        <el-table-column label="校区" align="center" width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.campus | getCampus }}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="进货时间"
          align="center"
          width="240"
        ></el-table-column>
        <el-table-column
          fixed="right"
          min-width="90"
          align="center"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              type="danger"
              @click="deleteRecord(scope.row.recordId)"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <ax-pager
        :pageSize="pageConfig.pageSize"
        :currentPage="pageConfig.currentPage"
        @pageChange="pageChange"
        :total="total"
      ></ax-pager>
    </div>
  </div>
</template>

<script>
import AXRecordQuery from "./components/query";
import AXPage from "@/components/pager";
import { getStockRecord, deleteRecord } from "@/api/stock";
export default {
  methods: {
    deleteRecord(id) {
      this.$confirm("是否要删除改记录？", "提示").then(() => {
        deleteRecord({ id });
      });
    },
    query(event) {
      let data = {
        pageSize: 100,
        currentPage: 1
      };
      // 修改查询条件
      Object.assign(this.formInline, event);

      Object.assign(data, this.formInline);
      // 初始分页
      this.pageConfig = data;
      // 请求数据
      this.setList(data);
    },
    pageChange(event) {
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      let data = Object.assign({}, this.formInline, event);
      this.setList(data);
    },
    setList(data) {
      getStockRecord(data).then(res => {
        this.total = res.total;
        this.tableData = res.recordList;
      });
    }
  },
  mounted() {
    this.setList(this.pageConfig);
  },
  data() {
    return {
      tableData: [],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      },
      formInline: {},
      total: 0
    };
  },
  components: {
    "ax-pager": AXPage,
    "ax-record-query": AXRecordQuery
  }
};
</script>

<style lang="scss" scoped>
.pager {
  text-align: center;
}
</style>

<style>
.el-table th.gutter {
  display: table-cell !important;
}
</style>
