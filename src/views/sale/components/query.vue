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
        <el-form-item label="订单状态">
          <el-select v-model="formInline.state">
            <el-option
              v-for="item in orderStateList"
              :key="item.state"
              :value="item.state"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>  
      <el-form-item label="学生姓名">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="formInline.stuNum"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getGoodsNameIndexTable } from "../../../api/indexTable.js";
export default {
  data() {
    return {
      formInline: {
        goodsName: "",
        campus: "",
        name: "",
        state: "",
        stuNum: ""
      },
      campusList: [
        {
          campus: true,
          name: "净月校区"
        },
        {
          campus: false,
          name: "本部校区"
        }
      ],
      orderStateList: [
        {
          state: 1,
          label: "待确认"
        },
        {
          state: 2,
          label: "待取货"
        },
        {
          state: 3,
          label: "交易成功"
        },
        {
          state: 4,
          label: "交易失败"
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
      this.$emit("query", this.formInline);
    }
  }
};
</script>

<style>
</style>