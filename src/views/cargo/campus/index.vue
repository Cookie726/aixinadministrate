<template>
  <div>
    <div>
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-campus-query @query="query"></ax-campus-query>
        </el-collapse-item>
      </el-collapse>
      <el-table
        header-cell-style="background: #F5F7FA"
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          prop="goods.goodsName"
          label="商品名称"
          align="center"
          min-width="240"
        ></el-table-column>
        <el-table-column
          prop="num"
          label="商品库存量"
          align="center"
          width="300"
        ></el-table-column>
        <el-table-column label="校区" align="center" width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.campus | getCampus }}</p>
          </template>
        </el-table-column>
        <el-table-column min-width="90" width="300" align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="handleEdit(scope.row)"
              size="small"
              >修改库存</el-button
            >
            <el-button
              type="danger"
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
    <el-dialog
      title="修改"
      :close-on-click-modal="false"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-form-item label="库存" label-width="80">
          <el-input v-model="editNum" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateWarehouse"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AXPager from "@/components/pager";
import AXCampusQuery from "./components/query";
import { getWareList, updateWareHouse, deleteWareHouse } from "@/api/cargo";
export default {
  data() {
    return {
      tableData: [],
      pageConfig: {
        pageSize: 10,
        currentPage: 1,
      },
      total: 0,
      formInline: {
        goodsName: "",
      },
      dialogFormVisible: false,
      editNum: 0,
      editWareHouseId: "",
    };
  },
  mounted() {
    this.setList(this.pageConfig);
  },
  methods: {
    handleEdit(row) {
      this.editNum = row.num;
      this.editWareHouseId = row.id;
      this.dialogFormVisible = true;
    },
    handleUpdateWarehouse() {
      updateWareHouse({
        num: this.editNum,
        wareHouseId: this.editWareHouseId,
      })
        .then((res) => {
          if (res.code === 0) {
            this.dialogFormVisible = false;
            this.setList(this.pageConfig);
            window.ELEMENT.Message.success("修改成功");
          } else {
            window.ELEMENT.Message.success(res.msg || "修改失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
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
    handleDelete(id) {
      window.ELEMENT.MessageBox.confirm("是否要删除改库存记录?").then(() => {
        deleteWareHouse({ wareHouseId: id })
          .then((res) => {
            if (res.code === 0) {
              window.ELEMENT.Message.success("删除成功");
              this.setList(this.pageConfig);
            } else {
              window.ELEMENT.Message.success(res.msg || "删除失败");
            }
          })
          .catch(() => {
            window.ELEMENT.Message.error("系统错误");
          });
      });
    },
    setList(data) {
      getWareList(data)
        .then((res) => {
          if (res.code === 0) {
            this.tableData = res.data.wareHouseList;
            this.total = res.data.total;
          } else {
            window.ELEMENT.Message.error(res.msg || "获取失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
  },
  components: {
    "ax-pager": AXPager,
    "ax-campus-query": AXCampusQuery,
  },
};
</script>

<style></style>
