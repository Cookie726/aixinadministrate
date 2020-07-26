<template>
  <div>
    <el-form label-width="80px" v-model="detail">
      <el-form-item label="商品图片">
        <el-upload
          class="avatar-uploader"
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
        <el-select v-model="detail.goodsType">
          <template v-for="item in goodsTypeList">
            <el-option
              :key="item.id"
              :label="item.classification"
              :value="item.id"
            ></el-option>
          </template>
        </el-select>
        <el-button style="margin-left: 10px" @click="addGoodType"
          >新增商品种类</el-button
        >
      </el-form-item>
      <el-form-item label="限购数量">
        <el-input-number
          v-model="detail.limitBuyNum"
          :min="-1"
          label="描述文字"
        ></el-input-number>
        <span class="tips">注：-1 表示不限制购买数量</span>
      </el-form-item>
      <el-form-item v-if="detail.limitBuyNum != -1" label="限购类型">
        <el-select v-model="detail.limitBuyType">
          <el-option label="学期限购" :value="true"></el-option>
          <el-option label="每月限购" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="货币种类">
        <el-select v-model="detail.moneyType">
          <el-option :value="false" label="日用币"></el-option>
          <el-option :value="true" label="服装币"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onConfirm">确认修改</el-button>
        <el-button type="primary" @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    <add-good-type
      :dialogFormVisible="dialogFormVisible"
      @confirm="handleConfirm"
      @cancel="dialogFormVisible = false"
    ></add-good-type>
  </div>
</template>

<script>
import { getGoodsTypeQueryIndexTable as getIndexTable } from "@/api/indexTable.js";
import { updateGoods } from "@/api/cargo";
import { uploadImage } from "@/api/uploadFile";
import AddGoodType from "@/components/addGoodType";
export default {
  data() {
    return {
      goodsTypeList: {},
      dialogFormVisible: false,
    };
  },
  props: {
    detail: Object,
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
    addGoodType() {
      this.dialogFormVisible = true;
    },
    onConfirm() {
      if (this.detail.limitBuyNum === -1) {
        this.detail.limitBuyType = null;
      }
      updateGoods(this.detail)
        .then((res) => {
          if (res.code === 0) {
            this.$emit("fresh");
            window.ELEMENT.Message.success("修改成功");
          } else {
            window.ELEMENT.Message.error(res.msg || "修改失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
    handleConfirm() {
      this.dialogFormVisible = false;
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
    onCancel() {
      this.$emit("cancel");
    },
    uploadImg(f) {
      let formData = new FormData();
      formData.append("imgFile", f.file);
      uploadImage(formData)
        .then((res) => {
          if (res.code === 0) {
            this.detail.images = res.data.filepath;
            window.ELEMENT.Message.success("上传成功");
          } else {
            window.ELEMENT.Message.error(res.msg || "上传失败");
          }
        })
        .catch(() => {
          window.ELEMENT.Message.error("系统错误");
        });
    },
  },
  components: {
    "add-good-type": AddGoodType,
  },
};
</script>
