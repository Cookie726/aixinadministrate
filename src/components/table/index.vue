<template>
  <div>
    <div class="student-list" v-if="!showInfo">
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-list-query @query="query"></ax-list-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="stuNum" label="学号" align="center" width="110"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="120"></el-table-column>
        <el-table-column prop="departmentName" label="学院" align="center" min-width="120"></el-table-column>
        <el-table-column prop="specialName" label="专业" align="center" width="120"></el-table-column>
        <el-table-column prop="grade" label="年级" align="center" width="70"></el-table-column>
        <el-table-column prop="imburseTypeName" label="资助对象类型" align="center" width="120"></el-table-column>
        <el-table-column prop="contact" label="联系方式" align="center" width="114"></el-table-column>
        <el-table-column prop="address" label="地址" align="center" min-width="120"></el-table-column>
        <el-table-column prop="balanceRiyong" label="日用品账户余额" align="center" width="120"></el-table-column>
        <el-table-column prop="balanceFuzhuang" label="服装账户余额" align="center" width="120"></el-table-column>
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
      ></ax-pager>
    </div>
    <div class="student-info" v-else>
      <ax-student-info @cancel="cancel" :studentId="studentId" />
    </div>
  </div>
</template>

<script>
import AXPage from "../../../components/pager";
import AXListQuery from "./components/query";
import * as Student from "../../../api/student";
import AXStudentInfo from "./components/studentInfo"
export default {
  methods: {
    handleClick(row) {
      this.showInfo = true
      this.studentId = row.id
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
      Student.getStudentList(data).then(res => {
        this.tableData = res.data.studentList;
      });
    },
    pageChange(event) {
      console.log(event);
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      console.log(this.pageConfig);
      let data = Object.assign({}, this.formInline, event);
      console.log(data);
      Student.getStudentList(data).then(res => {
        this.tableData = res.data.studentList;
      });
    },
    cancel() {
      this.showInfo = false
    }
  },

  data() {
    return {
      studentId: null,
      showInfo: false,
      formInline: {
        stuNum: "",
        name: "",
        departmentId: "",
        specialId: "",
        state: "",
        grade: "",
        imburseType: ""
      },
      tableData: [
        {
          id: 1,
          stuNum: "2018010280",
          name: "潘炳名",
          departmentName: "信息科学与技术学院",
          specialName: "软件工程",
          grade: "2018",
          imburseTypeName: "一般资助对象",
          contact: "16688318501",
          address: "夏华A602",
          balanceRiyong: 20,
          balanceFuzhuang: 100
        }
      ],
      pageConfig: {
        pageSize: 100,
        currentPage: 1
      }
    };
  },
  components: {
    "ax-pager": AXPage,
    "ax-list-query": AXListQuery,
    "ax-student-info": AXStudentInfo
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