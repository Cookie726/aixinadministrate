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
            <el-image style="width: 100px; height: 100px" :src="scope.row.images" fit="fit"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="barcode" label="条形码" align="center" width="180"></el-table-column>
        <el-table-column prop="goodsName" label="商品名称" align="center" width="240"></el-table-column>
        <el-table-column prop="specs" label="商品规格" align="center" min-width="100"></el-table-column>
        <el-table-column prop="price" label="商品价格" align="center" width="90"></el-table-column>
        <el-table-column prop="goodsType" label="商品种类" align="center" width="120"></el-table-column>
        <el-table-column label="货币种类" align="center" width="120">
          <template slot-scope="scope">
            <p>{{scope.row.moneyType | getMoneyType}}</p>
          </template>
        </el-table-column>
        <el-table-column fixed="right" min-width="90" align="center" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <ax-pager
        :pageSize="pageConfig.pageSize"
        :currentPage="pageConfig.currentPage"
        @pageChange="pageChange"
        :total="800"
      />
    </div>
    <div v-else>
      <ax-good-detail @cancel="cancel" :detail="detail"></ax-good-detail>
    </div>
  </div>
</template>

<script>
import AXPager from "../../../components/pager";
import AXViewQuery from "./components/query";
import AXGoodDetail from "./components/goodDetail";
import * as Cargo from "../../../api/cargo";
export default {
  data() {
    return {
      tableData: [
        {
          barcode: "6921899980034",
          goodsName: "水杯800ml",
          specs: "800ml",
          price: 7,
          goodsType: "日用类",
          moneyType: true,
          goodsTypeId: 2,
          id: 5,
          images:
            "http://pic1.zhimg.com/50/v2-68516323d2390cf88959d0b2a23378af_hd.jpg"
        },
        {
          barcode: "6921899980034",
          goodsName: "水杯800ml",
          specs: "800ml",
          price: 7,
          goodsType: "日用类",
          moneyType: false,
          goodsTypeId: 2,
          id: 5
        }
      ],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      },
      formInline: {},
      showDetail: false,
      detail: {}
    };
  },
  methods: {
    handleClick(row) {
      this.showDetail = true;
      this.detail = row;
      console.log(row);
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
      Cargo.getGoodsList(data).then(res => {
        this.tableData = res.goodsList;
      });
    },
    pageChange(event) {
      console.log(event);
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      console.log(this.pageConfig);
      let data = Object.assign({}, this.formInline, event);
      console.log(data);
      Cargo.getGoodsList(data).then(res => {
        this.tableData = res.goodsList;
      });
    },
    cancel() {
      this.showDetail = false;
    }
  },
  components: {
    "ax-pager": AXPager,
    "ax-view-query": AXViewQuery,
    "ax-good-detail": AXGoodDetail
  }
};
</script>

<style>
</style>