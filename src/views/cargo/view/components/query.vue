<template>
  <div class="query">
    <el-form
      :inline="true"
      :model="formInline"
      label-width="80px"
      class="demo-form-inline"
    >
      <div>
        <el-form-item label="条形码">
          <el-input v-model.number="formInline.barcode"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model.number="formInline.goodsName"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="价格范围">
        <el-input v-model.number="formInline.lowPrice"></el-input>
      </el-form-item>
      <el-form-item>
        <span>-</span>
      </el-form-item>
      <el-form-item>
        <el-input v-model.number="formInline.highPrice"></el-input>
      </el-form-item>
      <div>
        <el-form-item label="商品种类">
          <el-select v-model="formInline.goodsType">
            <template v-for="item in goodsTypeList">
              <el-option
                :key="item.id"
                :label="item.classification"
                :value="item.id"
              ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="货币类型">
          <el-select v-model="formInline.moneyType">
            <el-option :value="false" label="日用币"></el-option>
            <el-option :value="true" label="服务币"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getGoodsTypeQueryIndexTable as getIndexTable } from "@/api/indexTable.js";
export default {
  data() {
    return {
      formInline: {
        barcode: "",
        goodsName: "",
        lowPrice: "",
        highPrice: "",
        goodsType: "",
        moneyType: "",
      },
      goodsTypeList: [],
    };
  },
  mounted() {
    getIndexTable()
      .then((res) => {
        if (res.code === 0) {
          this.goodsTypeList = res.data.goodsTypeList;
        } else {
          window.ELEMENT.Message.error(res.msg || "获取失败");
        }
      })
      .catch(() => {
        window.ELEMENT.Message.error("系统错误");
      });
  },
  methods: {
    onSubmit() {
      if (this.formInline.highPrice < this.formInline.lowPrice) {
        window.ELEMENT.Message.error("价格范围不正确");
        return;
      }
      this.$emit("query", this.formInline);
    },
  },
};
</script>

<style></style>
