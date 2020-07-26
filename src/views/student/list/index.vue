<template>
  <div>
    <div class="student-list" v-if="!showInfo">
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-list-query @query="query"></ax-list-query>
        </el-collapse-item>
      </el-collapse>
      <el-table
        header-cell-style="background: #F5F7FA"
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          prop="stuNum"
          label="学号"
          align="center"
          width="110"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="departmentName"
          label="学院"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="specialName"
          label="专业"
          align="center"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="grade"
          label="年级"
          align="center"
          width="70"
        ></el-table-column>
        <el-table-column
          prop="imburseTypeName"
          label="资助对象类型"
          align="center"
          width="120"
        ></el-table-column>
        <el-table-column label="校区" align="center" width="114">
          <template slot-scope="scope">
            <p>{{ scope.row.campus | getCampus }}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="contact"
          align="center"
          width="120"
          label="电话号码"
        ></el-table-column>
        <el-table-column
          prop="balanceRiyong"
          label="日用币余额"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="balanceFuzhuang"
          label="服装币余额"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          fixed="right"
          min-width="150"
          align="center"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleModify(scope.row)"
              >修改</el-button
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
    <div class="student-info" v-else>
      <ax-student-info @cancel="cancel" :dataForm="studentInfo" />
    </div>
  </div>
</template>

<script>
import AXPage from "@/components/pager";
import AXListQuery from "./components/query";
import { getStudentList } from "@/api/student";
import AXStudentInfo from "./components/studentInfo";
export default {
  methods: {
    handleModify(row) {
      this.showInfo = true;
      this.studentInfo = row;
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
      this.getList(data);
    },
    pageChange(event) {
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      let data = Object.assign({}, this.formInline, event);
      this.getList(data);
    },
    cancel() {
      this.showInfo = false;
    },
    getList(param) {
      getStudentList(param)
        .then(this.handleResponse)
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
    handleResponse(res) {
      if (res.code === 0) {
        this.tableData = res.data.studentList;
        this.total = res.data.total;
      } else {
        window.ELEMENT.Message.error(res.msg || "加载出错");
      }
    },
  },
  mounted() {
    this.getList(this.pageConfig);
  },
  data() {
    return {
      studentInfo: {},
      total: 0,
      showInfo: false,
      formInline: {
        stuNum: "",
        name: "",
        departmentId: "",
        specialId: "",
        state: "",
        grade: "",
        imburseType: "",
      },
      tableData: [],
      pageConfig: {
        pageSize: 10,
        currentPage: 1,
      },
    };
  },
  components: {
    "ax-pager": AXPage,
    "ax-list-query": AXListQuery,
    "ax-student-info": AXStudentInfo,
  },
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
