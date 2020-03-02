<template>
  <div>
    <div>
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-campus-query @query="query"></ax-campus-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="good.goodsName" label="商品名称" align="center" min-width="240"></el-table-column>
        <el-table-column prop="num" label="数量" align="center" width="100"></el-table-column>
        <el-table-column prop="time" label="交易时间" align="center" width="100"></el-table-column>
        <el-table-column label="校区" align="center" width="100">
          <template slot-scope="scope">
            <p>{{scope.row.campus | getCampus}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="student.name" align="center" label="学生姓名" width="120"></el-table-column>
        <el-table-column prop="student.contact" align="center" label="电话号码" width="120"></el-table-column>
        <el-table-column label="订单状态" align="center" width="100">
          <template slot-scope="scope">
            <el-tag
              effect="dark"
              :type="tagType(scope.row.state)"
            >{{scope.row.state | getSaleStatus}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column min-width="90" width="220" align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.state === 1"
              type="success"
              @click="onModifyState(scope.row.id, 2)"
              size="mini"
            >确认订单</el-button>
            <el-button
              v-if="scope.row.state === 1 || scope.row.state === 2"
              type="info"
              @click="onModifyState(scope.row.id, 4)"
              size="mini"
            >取消订单</el-button>
            <el-button
              v-if="scope.row.state === 3 || scope.row.state === 4"
              type="danger"
              @click="handleDelete(scope.row.id)"
              size="mini"
            >删除订单</el-button>
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
  </div>
</template>

<script>
import AXPager from "../../components/pager";
import AXCampusQuery from "./components/query";
import { getOrderList, modifyState, deleleOrder } from "../../api/sale";
export default {
  data() {
    return {
      tableData: [
        {
          good: {
            goodsName: "本部香皂"
          },
          num: 72,
          campus: false,
          time: "2020-02-23",
          state: 1,
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          id: 1
        },
        {
          good: {
            goodsName: "本部香皂"
          },
          num: 72,
          campus: false,
          time: "2020-02-23",
          state: 2,
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          id: 2
        },
        {
          good: {
            goodsName: "本部香皂"
          },
          num: 72,
          campus: false,
          time: "2020-02-23",
          state: 3,
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          id: 3
        },
        {
          good: {
            goodsName: "本部香皂"
          },
          num: 72,
          campus: false,
          time: "2020-02-23",
          state: 4,
          student: {
            name: "潘炳名",
            contact: "16688318501"
          },
          id: 4
        }
      ],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      },
      formInline: {
        goodsName: ""
      }
    };
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
      getOrderList(data);
    },
    pageChange(event) {
      console.log(event);
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      let data = Object.assign({}, this.formInline, event);
      getOrderList(data);
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

<style>
</style>