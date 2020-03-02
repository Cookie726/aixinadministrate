<template>
  <div class="query">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="formInline.goodName"></el-input>
      </el-form-item>
      <el-form-item label="校区">
        <el-select v-model="formInline.campus">
          <el-option :value="true" label="净月校区"></el-option>
          <el-option :false="false" label="本部校区"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        goodName: "",
        campus: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("query", this.formInline);
    }
  }
};
</script>

<style>
</style>