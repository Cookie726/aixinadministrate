<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-select v-model="form.goodId" placeholder="请选择">
          <el-option
            v-for="item in goodsNameTable"
            :key="item.id"
            :value="item.id"
            :label="item.goodsName"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="width: 240px" label="商品数量">
        <el-input-number v-model="form.num" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="校区">
        <el-select v-model="form.campus">
          <el-option label="净月校区" :value="1"></el-option>
          <el-option label="本部校区" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getGoodsNameIndexTable } from "@/api/indexTable";
import { checkin } from "@/api/stock";
export default {
  data() {
    return {
      form: {
        goodId: "",
        num: 0,
        campus: ""
      },
      goodsNameTable: []
    };
  },
  mounted() {
    getGoodsNameIndexTable().then(res => {
      this.goodsNameTable = res.goodsList;
    });
  },
  methods: {
    onSubmit() {
      checkin(this.form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
