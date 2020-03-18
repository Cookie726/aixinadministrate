<template>
  <div>
    <el-form label-width="80px" v-model="detail">
      <el-form-item label="商品图片">
        <el-upload
          class="avatar-uploader"
          action="http://bluemsun.work:8080/aixinMarket/upload"
          :http-request="uploadImg"
          :show-file-list="false"
        >
          <img v-if="detail.images" :src="detail.images" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="条形码">
        <el-input
          style="width: 400px"
          v-model.number="detail.barcode"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input style="width: 400px" v-model="detail.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品规格">
        <el-input style="width: 400px" v-model="detail.specs"></el-input>
      </el-form-item>
      <el-form-item label="商品单价">
        <el-input style="width: 400px" v-model="detail.price"></el-input>
      </el-form-item>
      <el-form-item label="商品种类">
        <el-input style="width: 400px" v-model="detail.goodsType"></el-input>
      </el-form-item>
      <el-form-item label="货币种类">
        <el-select v-model="detail.moneyType">
          <el-option :value="true" label="日用币"></el-option>
          <el-option :value="false" label="服装币"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onConfirm">确认修改</el-button>
        <el-button type="primary" @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateGoods } from "@/api/cargo";
export default {
  props: {
    detail: Object
  },
  mounted() {
    console.log(this.detail);
  },
  methods: {
    onConfirm() {
      updateGoods(this.detail);
    },
    onCancel() {
      this.$emit("cancel");
    },
    uploadImg(f) {
      console.log(f.file);
    }
  }
};
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
