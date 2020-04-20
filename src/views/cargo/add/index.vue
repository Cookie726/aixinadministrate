<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="条形码" prop="barcode">
        <el-input style="width: 320px" v-model.number="form.barcode"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          style="width: 320px"
          placeholder="请输入商品名称"
          v-model="form.goodsName"
        ></el-input>
      </el-form-item>
      <el-form-item label="规格" prop="specs">
        <el-input style="width: 320px" v-model="form.specs"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input
          style="width: 320px"
          placeholder="请输入商品价格"
          v-model.number="form.price"
          class="input-with-select"
        >
          <el-select
            v-model="form.moneyType"
            class="money-type-select"
            slot="prepend"
            placeholder="选择爱心币种类"
          >
            <el-option label="日用币" :value="false"></el-option>
            <el-option label="服装币" :value="true"></el-option>
          </el-select>
          <span slot="suffix" class="el-input__icon">元</span>
        </el-input>
      </el-form-item>
      <el-form-item label="限购数量">
        <el-input-number
          v-model="form.limitBuyNum"
          :min="-1"
          label="描述文字"
        ></el-input-number>
        <span class="tips">注：-1 表示不限制购买数量</span>
      </el-form-item>
      <el-form-item v-if="form.limitBuyNum != -1" label="限购类型">
        <el-select v-model="form.limitBuyType">
          <el-option label="学期限购" :value="true"></el-option>
          <el-option label="每月限购" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片"
        ><el-upload
          class="avatar-uploader"
          action="http://www.liskarm.xyz/AixinMarket/upload"
          :show-file-list="false"
          :http-request="uploadImg"
        >
          <img v-if="form.images" :src="form.images" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品种类" prop="goodsType">
        <el-select v-model="form.goodsType" placeholder="请选择">
          <el-option
            v-for="item in goodsTypeList"
            :key="item.goodsTypeId"
            :label="item.classification"
            :value="item.id"
          ></el-option>
        </el-select>
        <el-button style="margin-left: 10px" @click="addGoodType"
          >新增商品种类</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <add-good-type
      :dialogFormVisible="dialogFormVisible"
      @confirm="dialogFormVisible = false"
      @cancel="dialogFormVisible = false"
    ></add-good-type>
  </div>
</template>

<script>
import {
  validateBarcode,
  validatePrice,
  validateSpecs,
  isEmpty
} from "@/utils/validate";
import { getGoodsTypeQueryIndexTable } from "@/api/indexTable";
import { addGoods } from "@/api/cargo";
import { uploadImage } from "@/api/uploadFile";
import AddGoodType from "@/components/addGoodType";
export default {
  data() {
    const _validateBarcode = (rule, value, callback) => {
      validateBarcode(value, callback);
    };
    const _validatePrice = (rule, value, callback) => {
      validatePrice(value, callback);
    };
    const _validateSpecs = (rule, value, callback) => {
      validateSpecs(value, callback);
    };
    const _validateGoodsType = (rule, value, callback) => {
      isEmpty(value, callback, "请选择商品类型");
    };
    return {
      dialogFormVisible: false,
      form: {
        barcode: "",
        goodsName: "",
        specs: "",
        price: "",
        moneyType: null,
        images: "",
        goodsType: "",
        limitBuyNum: -1,
        limitBuyType: ""
      },
      rules: {
        barcode: [
          {
            validator: _validateBarcode,
            trigger: "blur"
          }
        ],
        price: [
          {
            validator: _validatePrice,
            trigger: "blur"
          }
        ],
        specs: [
          {
            validator: _validateSpecs,
            trigger: "blur"
          }
        ],
        goodsType: [
          {
            validator: _validateGoodsType,
            trigger: "change"
          }
        ]
      },
      goodsTypeList: []
    };
  },
  mounted() {
    getGoodsTypeQueryIndexTable().then(res => {
      this.goodsTypeList = res.goodsTypeList;
    });
  },
  methods: {
    addGoodType() {
      this.dialogFormVisible = true;
    },
    onExceed() {
      this.$message({
        message: "商品图片只能选取一张",
        type: "error"
      });
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.form.limitBuyNum === -1) {
            this.form.limitBuyType = null;
          }
          addGoods(this.form);
        } else {
          return false;
        }
      });
    },
    uploadImg(f) {
      let formData = new FormData();
      formData.append("imgFile", f.file);
      uploadImage(formData).then(res => {
        this.form.images = res.filepath;
      });
    }
  },
  components: {
    "add-good-type": AddGoodType
  }
};
</script>
