<template>
  <div>
    <div v-if="!showDetail">
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-view-query @query="query"></ax-view-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column align="center" width="130" label="商品图片">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.images"
              fit="fit"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="barcode"
          label="条形码"
          align="center"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="goodsName"
          label="商品名称"
          align="center"
          width="240"
        ></el-table-column>
        <el-table-column
          prop="specs"
          label="商品规格"
          align="center"
          min-width="100"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="商品价格"
          align="center"
          width="90"
        ></el-table-column>
        <el-table-column
          prop="goodsType"
          label="商品种类"
          align="center"
          width="120"
        ></el-table-column>
        <el-table-column label="货币种类" align="center" width="120">
          <template slot-scope="scope">
            <p>{{ scope.row.moneyType | getMoneyType }}</p>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          min-width="90"
          align="center"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button
              type="text"
              @click="handleDelete(scope.row.id)"
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
      />
    </div>
    <div v-else>
      <ax-good-detail
        @fresh="fresh"
        @cancel="cancel"
        :detail="detail"
      ></ax-good-detail>
    </div>
  </div>
</template>

<script>
import AXPager from "@/components/pager";
import AXViewQuery from "./components/query";
import AXGoodDetail from "./components/goodDetail";
import { getGoodsList, deleteDepository } from "@/api/cargo";
export default {
  data() {
    return {
      tableData: [],
      pageConfig: {
        pageSize: 10,
        currentPage: 1,
      },
      formInline: {},
      showDetail: false,
      detail: {},
      total: 0,
    };
  },
  methods: {
    fresh() {
      this.showDetail = false;
      this.setList(this.pageConfig);
    },
    handleEdit(row) {
      this.showDetail = true;
      this.detail = JSON.parse(JSON.stringify(row));
    },
    handleDelete(id) {
      window.ELEMENT.MessageBox.confirm("是否要删除该商品？").then(() => {
        deleteDepository({ id })
          .then((res) => {
            if (res.code === 0) {
              window.ELEMENT.Message.success("删除成功");
            } else {
              window.ELEMENT.Message.error(res.msg || "删除失败");
            }
          })
          .catch(() => {
            window.ELEMENT.Message.error("系统错误");
          });
      });
    },
    query(event) {
      let data = {
        pageSize: 10,
        currentPage: 1,
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
    cancel() {
      this.showDetail = false;
    },
    setList(data) {
      getGoodsList(data)
        .then(({ code, msg, data }) => {
          if (code === 0) {
            this.tableData = data.goodsList;
            this.total = data.msgtotal;
          } else {
            window.ELEMENT.Message.error(msg || "获取失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
  },
  mounted() {
    this.setList(this.pageConfig);
  },
  components: {
    "ax-pager": AXPager,
    "ax-view-query": AXViewQuery,
    "ax-good-detail": AXGoodDetail,
  },
};
</script>

<style></style>
