<template>
  <div>
    <div class="student-list" v-if="!showInfo">
      <el-collapse value="query">
        <el-collapse-item name="query" title="条件查询">
          <ax-list-query @query="query"></ax-list-query>
        </el-collapse-item>
      </el-collapse>
      <el-table :data="tableData" style="width: 100%" border>
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
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
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
        pageSize: 100,
        currentPage: 1
      };
      // 修改查询条件
      Object.assign(this.formInline, event);

      Object.assign(data, this.formInline);
      // 初始分页
      this.pageConfig = data;
      // 请求数据
      getStudentList(data).then(data => {
        this.tableData = data.studentList;
        this.total = data.total;
      });
    },
    pageChange(event) {
      this.pageConfig.currentPage = event.currentPage;
      this.pageConfig.pageSize = event.pageSize;
      let data = Object.assign({}, this.formInline, event);
      getStudentList(data).then(data => {
        this.tableData = data.studentList;
        this.total = data.total;
      });
    },
    cancel() {
      this.showInfo = false;
    },
    handleDelete(id) {
      console.log(id);
      // this.$confirm("是否删除改学生？", "提示").then(() => {
      //   Student.deleteStudent({
      //     id
      //   });
      // });
    }
  },
  mounted() {
    getStudentList(this.pageConfig).then(data => {
      console.log(data);
      this.tableData = data.studentList;
      this.total = data.total;
    });
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
          campus: true,
          balanceRiyong: 20,
          balanceFuzhuang: 100,
          contact: "16688318502"
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
