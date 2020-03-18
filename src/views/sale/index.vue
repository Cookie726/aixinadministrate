<template>
  <div>
    <div>
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-campus-query @query="query"></ax-campus-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand" align="center">
          <template slot-scope="{ row }">
            <el-table :data="row.orderDetailList" border style="width: 400px">
              <el-table-column
                align="center"
                prop="goods.goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="orderNum"
                label="购买数量"
              ></el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          prop="student.name"
          align="center"
          label="学生姓名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="student.contact"
          align="center"
          label="电话号码"
          width="120"
        ></el-table-column>
        <el-table-column align="center" label="价格">
          <el-table-column
            align="center"
            label="服装币"
            prop="totalFuzhuang"
            width="100"
          ></el-table-column>
          <el-table-column
            align="center"
            label="日用币"
            prop="totalRiyong"
            width="100"
          ></el-table-column>
        </el-table-column>
        <el-table-column
          label="交易时间"
          prop="createTime"
          align="center"
          width="240"
        >
        </el-table-column>
        <el-table-column label="校区" align="center" width="100">
          <template slot-scope="scope">
            <p>{{ scope.row.campus | getCampus }}</p>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" align="center" width="100">
          <template slot-scope="scope">
            <el-tag effect="dark" :type="tagType(scope.row.status)">{{
              scope.row.status | getSaleStatus
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column min-width="200" align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status === 1"
              type="success"
              @click="onModifyState(scope.row.id, 2)"
              size="mini"
              >确认订单</el-button
            >
            <el-button
              v-if="scope.row.status === 1 || scope.row.status === 2"
              type="info"
              @click="onModifyState(scope.row.id, 4)"
              size="mini"
              >取消订单</el-button
            >
            <el-button
              v-if="scope.row.status === 3 || scope.row.status === 4"
              type="danger"
              @click="handleDelete(scope.row.id)"
              size="mini"
              >删除订单</el-button
            >
          </template>
        </el-table-column>
        <div slot="append">
          <ax-pager
            :pageSize="pageConfig.pageSize"
            :currentPage="pageConfig.currentPage"
            @pageChange="pageChange"
            :total="total"
          />
        </div>
      </el-table>
    </div>
  </div>
</template>

<script>
import AXPager from "@/components/pager";
import AXCampusQuery from "./components/query";
import { getOrderList, modifyState, deleleOrder } from "@/api/sale";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          createTime: "2020/03/15 12:24:48",
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          status: 1,
          totalRiyong: 10,
          totalFuzhuang: 20,
          campus: true,
          orderDetailList: [
            {
              id: 1,
              goods: {
                goodsName: "牙刷"
              },
              orderNum: 2
            },
            {
              id: 2,
              goods: {
                goodsName: "牙刷"
              },
              orderNum: 2
            }
          ]
        },
        {
          id: 1,
          createTime: "2020/03/15 12:24:48",
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          status: 1,
          totalRiyong: 10,
          totalFuzhuang: 20,
          campus: true,
          orderDetailList: [
            {
              id: 1,
              goods: {
                goodsName: "牙刷"
              },
              orderNum: 2
            }
          ]
        }
      ],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      },
      formInline: {},
      total: 0
    };
  },
  mounted() {
    getOrderList(this.pageConfig).then(({ total, orderRecordList }) => {
      (this.total = total), (this.tableData = orderRecordList);
    });
  },
  methods: {
    onModifyState(id, targetState) {
      const req_data = {
        orderRecordId: id,
        state: targetState
      };
      modifyState(req_data);
    },
    handleDelete(id) {
      deleleOrder({ orderRecordId: id });
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
      getOrderList(data).then(({ total, orderRecordList }) => {
        (this.total = total), (this.tableData = orderRecordList);
      });
    },
    pageChange(event) {
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      let data = Object.assign({}, this.formInline, event);
      getOrderList(data).then(({ total, orderRecordList }) => {
        (this.total = total), (this.tableData = orderRecordList);
      });
    }
  },
  computed: {
    tagType() {
      return function(state) {
        if (state === 1) {
          return "warning";
        } else if (state === 2) {
          return "primary";
        } else if (state === 3) {
          return "success";
        } else {
          return "info";
        }
      };
    }
  },
  components: {
    "ax-pager": AXPager,
    "ax-campus-query": AXCampusQuery
  }
};
</script>

<style></style>
