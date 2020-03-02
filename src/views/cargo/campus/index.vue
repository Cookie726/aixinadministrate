<template>
  <div>
    <div>
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-campus-query @query="query"></ax-campus-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="goodsName" label="商品名称" align="center" min-width="240"></el-table-column>
        <el-table-column prop="number" label="商品库存量" align="center" width="300"></el-table-column>
        <el-table-column label="校区" align="center" width="200">
          <template slot-scope="scope">
            <p>{{scope.row.campus | getCampus}}</p>
          </template>
        </el-table-column>
        <el-table-column min-width="90" width="300" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)" size="small">修改</el-button>
            <el-button type="text" @click="handleDelete(scope.row)" size="small">删除</el-button>
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
    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="商品名称" :label-width="80">
          <el-input v-model="editForm.goodsName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AXPager from "../../../components/pager";
import AXCampusQuery from "./components/query";
import * as Cargo from "../../../api/cargo";
export default {
  data() {
    return {
      tableData: [
        {
          goodsName: "本部香皂",
          number: 72,
          campus: false
        },
        {
          goodsName: "本部热水袋",
          number: 176,
          campus: true
        },
        {
          goodsName: "本部毛巾",
          number: 905,
          campus: false
        },
        {
          goodsName: "本部皂盒 ",
          number: 752,
          campus: false
        }
      ],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      },
      formInline: {
        goodsName: ""
      },
      dialogFormVisible: false,
      editForm: {
        goodsName: ""
      }
    };
  },
  methods: {
    handleEdit(row) {
      this.editForm = row
      this.dialogFormVisible = true
    },
    query(event) {
      console.log(event);
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
    }
  },
  components: {
    "ax-pager": AXPager,
    "ax-campus-query": AXCampusQuery
  }
};
</script>

<style>
</style>