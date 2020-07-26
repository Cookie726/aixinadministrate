<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-select v-model="form.goodId" filterable placeholder="请选择">
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
          <el-option label="本部校区" :value="1"></el-option>
          <el-option label="净月校区" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
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
        campus: 1,
      },
      goodsNameTable: [],
    };
  },
  mounted() {
    this.getGoodsName();
  },
  methods: {
    onSubmit() {
      if (!this.form.goodId) {
        window.ELEMENT.Message.error("请选择商品名称");
        return;
      }
      checkin(this.form)
        .then(({ code, msg }) => {
          if (code === 0) {
            window.ELEMENT.Message.success("进货成功");
          } else {
            window.ELEMENT.Message.error(msg || "进货失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
    getGoodsName() {
      getGoodsNameIndexTable()
        .then((res) => {
          if (res.code === 0) {
            this.goodsNameTable = res.data.goodsList;
          } else {
            window.ELEMENT.Message.error(res.msg || "获取失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
