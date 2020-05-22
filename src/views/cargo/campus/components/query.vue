<template>
  <div class="query">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div>
        <el-form-item label="商品名称">
          <el-input v-model="formInline.goodsName"></el-input>
        </el-form-item>
        <el-form-item label="校区">
          <el-select v-model="formInline.campus">
            <el-option
              v-for="item in campusList"
              :key="item.campus"
              :label="item.name"
              :value="item.campus"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="库存范围">
          <el-input v-model="formInline.lowCount"></el-input>
        </el-form-item>
        <el-form-item>-</el-form-item>
        <el-form-item>
          <el-input v-model="formInline.highCount"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { getGoodsNameIndexTable } from "@/api/indexTable.js";
export default {
  data() {
    return {
      formInline: {
        goodsName: "",
        campus: "",
        lowCount: "",
        highCount: ""
      },
      goodsNameList: [],
      campusList: [
        {
          campus: 2,
          name: "净月校区"
        },
        {
          campus: 1,
          name: "本部校区"
        }
      ]
    };
  },
  mounted() {
    getGoodsNameIndexTable().then(res => {
      this.goodsNameList = res.goodsList;
    });
  },
  methods: {
    onSubmit() {
      if (this.formInline.lowCount > this.formInline.highCount) {
        window.ELEMENT.Message.error("库存范围不正确");
        return;
      }
      this.$emit("query", this.formInline);
    }
  }
};
</script>

<style>
</style>