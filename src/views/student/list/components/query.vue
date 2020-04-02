<template>
  <div class="query">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学号">
        <el-input v-model="formInline.stuNum"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="formInline.departmentId">
          <template v-for="item in departmentList">
            <el-option
              :key="item.departmentId"
              :label="item.departmentName"
              :value="item.departmentId"
            ></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="formInline.specialId">
          <template v-for="item in newSpecialList">
            <el-option
              :key="item.specialId"
              :label="item.specialName"
              :value="item.specialId"
            ></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.state">
          <el-option label="正常" value="1"></el-option>
          <el-option label="休学" value="2"></el-option>
          <el-option label="退学" value="3"></el-option>
          <el-option label="转学" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年级">
        <el-select v-model="formInline.grade">
          <el-option label="2019" value="1"></el-option>
          <el-option label="2018" value="2"></el-option>
          <el-option label="2017" value="3"></el-option>
          <el-option label="2016" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资助类别">
        <el-select v-model="formInline.imburseType">
          <template v-for="item in imburseTypeList">
            <el-option
              :key="item.imburseType"
              :label="item.imburseTypeName"
              :value="item.imburseType"
            ></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getStudentListQueryIndexTable as getIndexTable } from "@/api/indexTable.js";
export default {
  data() {
    return {
      formInline: {
        stuNum: "",
        name: "",
        departmentId: "",
        specialId: "",
        state: "",
        grade: "",
        imburseType: ""
      },
      specialList: [],
      departmentList: [],
      imburseTypeList: []
    };
  },
  mounted() {
    console.log(this);
    getIndexTable().then(res => {
      this.specialList = res.specialList;
      this.departmentList = res.departmentList;
      this.imburseTypeList = res.imburseTypeList;
      console.log(res);
    });
  },
  computed: {
    newSpecialList() {
      if (this.formInline.departmentId != "") {
        return this.specialList.filter(
          item => item.departmentId === this.formInline.departmentId
        );
      } else {
        return this.specialList;
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit("query", this.formInline);
    }
  }
};
</script>

<style></style>
